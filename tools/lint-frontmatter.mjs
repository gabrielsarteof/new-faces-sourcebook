#!/usr/bin/env node
/**
 * Auditoria estrutural do sourcebook. Só relata — não corrige nada.
 *
 * Cinco checagens, cada uma nascida de um defeito concreto encontrado na
 * primeira migração:
 *
 *   1. title == id           bug de geração: o título caiu para o id
 *   2. source-file: _index.md em documento que não é overview de pasta
 *   3. type divergente       sub-entidades <pai>-<filho>.md que discordam entre si
 *   4. outlier de tamanho    corpo abaixo de 40% da mediana dos seus pares
 *   5. alvos de backlog      o mesmo documento citado por caminhos diferentes
 *
 *   node tools/lint-frontmatter.mjs           relatório legível
 *   node tools/lint-frontmatter.mjs --json    saída estruturada
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Diretorios que nunca contem documento do corpus. `site` hospeda o
// new-faces-docs, que traz node_modules com milhares de .md de pacote; sem
// esta exclusao o indice e a contagem de documentos incorporariam todos.
const IGNORADOS = new Set(['.git', 'tools', 'site', 'node_modules']);

function documentos(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (!IGNORADOS.has(e.name)) documentos(path.join(dir, e.name), acc);
    } else if (e.name.endsWith('.md')) acc.push(path.join(dir, e.name));
  }
  return acc;
}

const IGNORAR = new Set(['INDEX.md', 'README.md']);

const docs = [];
for (const abs of documentos(RAIZ)) {
  const rel = path.relative(RAIZ, abs).split(path.sep).join('/');
  if (IGNORAR.has(rel)) continue;
  const texto = fs.readFileSync(abs, 'utf8');
  const bloco = texto.match(/^---\n([\s\S]*?)\n---\n\n?/);
  if (!bloco) { docs.push({ rel, semFrontMatter: true }); continue; }
  const fm = Object.fromEntries(
    bloco[1].split('\n').map(l => [l.slice(0, l.indexOf(':')).trim(), l.slice(l.indexOf(':') + 1).trim()]),
  );
  const corpo = texto.slice(bloco[0].length);
  const h1 = corpo.match(/^#\s+(.+)$/m);
  // Nem todo documento abre com H1: parte deles traz o título como linha solta.
  const primeiraLinha = corpo.split('\n').find(l => l.trim() !== '')?.trim() ?? null;
  docs.push({
    rel, fm, corpo,
    linhas: corpo.split('\n').filter(l => l.trim() !== '').length,
    h1: h1 ? h1[1].trim() : null,
    primeiraLinha,
    id: fm.id,
    title: (fm.title ?? '').replace(/^"|"$/g, ''),
    type: fm.type,
    sourceFile: fm['source-file'],
    pasta: path.posix.dirname(rel),
    base: path.posix.basename(rel),
  });
}

const r = { tituloIgualId: [], sourceFileIndex: [], typeDivergente: [], outlierTamanho: [], backlogDuplicado: [] };

// ── 1. title == id ────────────────────────────────────────────────────────────
for (const d of docs) {
  if (d.semFrontMatter) continue;
  if (d.title === d.id) {
    r.tituloIgualId.push({
      doc: d.rel, id: d.id,
      tituloRecuperavel: d.h1 ?? d.primeiraLinha,
      origem: d.h1 ? 'H1 do corpo' : 'primeira linha do corpo (documento sem H1)',
    });
  }
}

// ── 2. source-file: _index.md fora de overview ────────────────────────────────
for (const d of docs) {
  if (d.semFrontMatter) continue;
  if (d.sourceFile !== '_index.md') continue;
  const ehOverview = d.base === 'overview.md';
  r.sourceFileIndex.push({ doc: d.rel, ehOverview, type: d.type, id: d.id });
}

// ── 3. type divergente entre sub-entidades ────────────────────────────────────
// O sinal útil não é "difere da maioria da pasta" — em core/ cada documento tem
// um type legítimo e diferente, e o falso positivo afoga o achado real. O que
// importa são as SUB-ENTIDADES: documentos de nome composto <pai>-<filho>.md
// numa pasta onde <pai>.md também existe. Essas são todas da mesma natureza
// (um dōjutsu, uma habilidade herdada) e precisam concordar no type entre si.
const porPasta = new Map();
for (const d of docs) {
  if (d.semFrontMatter) continue;
  if (!porPasta.has(d.pasta)) porPasta.set(d.pasta, []);
  porPasta.get(d.pasta).push(d);
}
for (const [pasta, irmaos] of porPasta) {
  const nomes = new Set(irmaos.map(x => x.base.replace(/\.md$/, '')));
  const subentidades = irmaos.filter(d => {
    const semExt = d.base.replace(/\.md$/, '');
    const partes = semExt.split('-');
    for (let i = 1; i < partes.length; i++) {
      if (nomes.has(partes.slice(0, i).join('-'))) return true;
    }
    return false;
  });
  if (subentidades.length < 2) continue;
  const contagem = {};
  for (const d of subentidades) contagem[d.type] = (contagem[d.type] ?? 0) + 1;
  const ordenados = Object.entries(contagem).sort((a, b) => b[1] - a[1]);
  if (ordenados.length < 2) continue;
  const [dominante] = ordenados[0];
  for (const d of subentidades) {
    if (d.type === dominante) continue;
    r.typeDivergente.push({
      doc: d.rel, type: d.type, typeDosPares: dominante,
      pares: subentidades.filter(x => x !== d).map(x => `${x.base} -> ${x.type}`),
    });
  }
}

// ── 4. outlier de tamanho por type ────────────────────────────────────────────
// Agrupado por PASTA, não por type. A mediana por type mistura mundos: os clãs
// jujutsu são esboços de 2 linhas e puxam a mediana de `clan` para 10, o que faz
// um documento raso de 16 linhas passar como saudável. Dentro de uma pasta os
// documentos são de fato comparáveis entre si.
const porType = new Map();
for (const d of docs) {
  if (d.semFrontMatter || d.base === 'overview.md') continue;
  if (!porType.has(d.pasta)) porType.set(d.pasta, []);
  porType.get(d.pasta).push(d);
}
const mediana = xs => {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2);
};
for (const [grupoNome, grupo] of porType) {
  if (grupo.length < 3) continue;
  const med = mediana(grupo.map(d => d.linhas));
  const limite = med * 0.4;
  for (const d of grupo) {
    if (d.linhas < limite) {
      r.outlierTamanho.push({
        doc: d.rel, type: d.type, grupo: grupoNome, linhas: d.linhas, medianaDoGrupo: med,
        percentualDaMediana: Math.round((d.linhas / med) * 100) + '%',
      });
    }
  }
}

// Segunda passada: sub-entidades comparadas entre si, não contra a pasta.
// worlds/naruto/clans/ é bimodal — sete clãs são esboços de 9 a 13 linhas e sete
// são documentos de 54 a 169. A mediana cai em 15, no vale entre os dois grupos,
// e por isso nada dispara. hyuga-byakugan (16 linhas) senta junto dos esboços,
// mas seus pares verdadeiros são os outros dois dōjutsu, de 140 e 169 linhas.
for (const [, irmaos] of porPasta) {
  const nomes = new Set(irmaos.map(x => x.base.replace(/\.md$/, '')));
  const sub = irmaos.filter(d => {
    const partes = d.base.replace(/\.md$/, '').split('-');
    for (let i = 1; i < partes.length; i++) if (nomes.has(partes.slice(0, i).join('-'))) return true;
    return false;
  });
  if (sub.length < 2) continue;
  const med = mediana(sub.map(d => d.linhas));
  for (const d of sub) {
    if (d.linhas >= med * 0.4) continue;
    if (r.outlierTamanho.some(x => x.doc === d.rel)) continue;
    r.outlierTamanho.push({
      doc: d.rel, type: d.type, grupo: 'sub-entidades de ' + d.pasta,
      linhas: d.linhas, medianaDoGrupo: med,
      percentualDaMediana: Math.round((d.linhas / med) * 100) + '%',
      pares: sub.filter(x => x !== d).map(x => `${x.base}: ${x.linhas}`),
    });
  }
}

// ── 5. alvos de backlog que são o mesmo documento por caminhos diferentes ─────
const existentes = new Set(docs.map(d => d.rel));
const alvos = new Map();   // basename -> [{alvoLiteral, citadoEm, resolvidoPara}]
for (const d of docs) {
  if (d.semFrontMatter) continue;
  for (const m of d.corpo.matchAll(/\]\((?!https?:|#)([^)]+\.md)(?:#[^)]*)?\)/g)) {
    const literal = m[1];
    const resolvido = path.posix.normalize(path.posix.join(d.pasta, literal));
    if (existentes.has(resolvido)) continue;
    const base = path.posix.basename(literal);
    if (!alvos.has(base)) alvos.set(base, []);
    alvos.get(base).push({ literal, citadoEm: d.rel, resolvidoPara: resolvido });
  }
}
for (const [base, ocorrencias] of alvos) {
  const caminhosDistintos = new Set(ocorrencias.map(o => o.resolvidoPara));
  if (caminhosDistintos.size > 1) {
    r.backlogDuplicado.push({
      provavelMesmoDocumento: base,
      caminhosResolvidos: [...caminhosDistintos],
      citacoes: ocorrencias.map(o => `${o.citadoEm} usa "${o.literal}"`),
    });
  }
}

// ── saída ─────────────────────────────────────────────────────────────────────
if (process.argv.includes('--json')) {
  console.log(JSON.stringify(r, null, 2));
} else {
  const sec = (t, arr) => {
    console.log(`\n${'━'.repeat(74)}\n${t}  —  ${arr.length} ocorrência(s)\n${'━'.repeat(74)}`);
    if (!arr.length) { console.log('  nenhuma'); return; }
    for (const o of arr) console.log('  ' + JSON.stringify(o, null, 2).split('\n').join('\n  '));
  };
  console.log(`documentos auditados: ${docs.length}`);
  sec('1. title igual ao id', r.tituloIgualId);
  sec('2. source-file: _index.md', r.sourceFileIndex);
  sec('3. type divergente dos pares', r.typeDivergente);
  sec('4. outlier de tamanho (<40% da mediana do type)', r.outlierTamanho);
  sec('5. alvo de backlog citado por caminhos diferentes', r.backlogDuplicado);
}
