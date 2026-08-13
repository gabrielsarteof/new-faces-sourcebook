#!/usr/bin/env node
/**
 * Verifica os links entre documentos e mantém o backlog do INDEX.md honesto.
 *
 * Um link relativo aponta para um documento que existe ou para um que ainda
 * não foi escrito. A segunda categoria não é erro — é o corpus declarando o
 * que falta. Mas ela só serve enquanto estiver correta, e uma lista mantida
 * à mão fica errada no primeiro documento que alguém escrever.
 *
 *   node tools/check-links.mjs          verifica e lista
 *   node tools/check-links.mjs --write  regrava a seção de backlog do INDEX.md
 *
 * Sai com código 1 se o INDEX.md estiver defasado, para poder rodar em CI.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const INDEX = path.join(RAIZ, 'INDEX.md');
const MARCA_TABELAS = '**Total:**';
const MARCA_INICIO = '## Documentos previstos e ainda não escritos';
const MARCA_FIM = '## Pendências herdadas da migração';

const GRUPO_ROTULO = {
  'core': 'Núcleo — regras agnósticas de cenário',
  'worlds/common/skills': 'Comum · Perícias sem cenário',
  'worlds/naruto/systems': 'Naruto · Sistemas',
  'worlds/naruto/skills': 'Naruto · Perícias',
  'worlds/naruto/compendiums': 'Naruto · Compêndios de técnicas',
  'worlds/naruto/techniques': 'Naruto · Técnicas',
  'worlds/naruto/clans': 'Naruto · Clãs e linhagens',
  'worlds/naruto/reincarnations': 'Naruto · Reencarnações',
  'worlds/naruto/campaign': 'Naruto · Campanha',
  'worlds/naruto': 'Naruto · Geral',
  'worlds/jujutsu': 'Jujutsu Kaisen',
};

function documentos(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (e.name !== '.git' && e.name !== 'tools') documentos(path.join(dir, e.name), acc);
    } else if (e.name.endsWith('.md')) acc.push(path.join(dir, e.name));
  }
  return acc;
}

const arquivos = documentos(RAIZ);
const existentes = new Set(arquivos.map(f => path.relative(RAIZ, f).split(path.sep).join('/')));

const previstos = new Map();   // alvo -> [documentos que o citam]
let resolvidos = 0;

for (const arquivo of arquivos) {
  const rel = path.relative(RAIZ, arquivo).split(path.sep).join('/');
  if (rel === 'INDEX.md') continue;
  const dir = path.posix.dirname(rel);
  const texto = fs.readFileSync(arquivo, 'utf8');

  for (const m of texto.matchAll(/\]\((?!https?:|#)([^)]+\.md)(?:#[^)]*)?\)/g)) {
    const alvo = path.posix.normalize(path.posix.join(dir, m[1]));
    if (existentes.has(alvo)) { resolvidos++; continue; }
    // Agrupa pelo caminho RESOLVIDO, não pelo texto do link. Dois documentos em
    // pastas diferentes citam o mesmo alvo por caminhos relativos distintos, e
    // agrupar pelo literal contaria um documento faltante como dois — pior, faria
    // convergir duas citações no mesmo arquivo parecer que um alvo novo surgiu.
    if (!previstos.has(alvo)) previstos.set(alvo, []);
    previstos.get(alvo).push(rel);
  }
}

const ordenados = [...previstos.entries()].sort(([a], [b]) => a.localeCompare(b));
const citacoes = ordenados.reduce((n, [, quem]) => n + quem.length, 0);

const secao =
  `${MARCA_INICIO}\n\n` +
  `Referências que os documentos existentes fazem a material planejado. Não são links\n` +
  `quebrados por erro — são o backlog de autoria declarado pelo próprio corpus.\n\n` +
  `**${ordenados.length} alvos distintos, em ${citacoes} referências.**\n\n` +
  `Gerado por \`tools/check-links.mjs\`. Não editar à mão.\n\n` +
  ordenados.map(([alvo, quem]) => `- \`${alvo}\` — citado em ${quem.join(', ')}`).join('\n') +
  `\n\n---\n\n`;

// ── tabela de documentos ──────────────────────────────────────────────────────
// Também gerada. Na primeira migração ela foi escrita uma vez pelo script e
// ficou sem dono: qualquer correção de front matter — um title, um id, um type —
// dessincronizava o índice sem nada acusar.
const fichas = [];
for (const arquivo of arquivos) {
  const rel = path.relative(RAIZ, arquivo).split(path.sep).join('/');
  if (rel === 'INDEX.md' || rel === 'README.md') continue;
  const bloco = fs.readFileSync(arquivo, 'utf8').match(/^---\n([\s\S]*?)\n---\n/);
  if (!bloco) continue;
  const fm = Object.fromEntries(
    bloco[1].split('\n').map(l => [l.slice(0, l.indexOf(':')).trim(), l.slice(l.indexOf(':') + 1).trim()]),
  );
  fichas.push({ rel, ...fm, title: (fm.title ?? '').replace(/^"|"$/g, '') });
}
fichas.sort((a, b) => a.rel.localeCompare(b.rel));

const grupoDe = rel => {
  const dir = path.posix.dirname(rel);
  if (GRUPO_ROTULO[dir]) return dir;
  const p = dir.split('/');
  return p.length > 2 ? p.slice(0, 3).join('/') : dir;
};
const grupos = new Map();
for (const f of fichas) {
  const g = grupoDe(f.rel);
  if (!grupos.has(g)) grupos.set(g, []);
  grupos.get(g).push(f);
}
const ordem = [...grupos.keys()].sort((a, b) => (a === 'core' ? -1 : b === 'core' ? 1 : a.localeCompare(b)));

let tabelas =
  `**Total:** ${fichas.length} documentos · ${fichas.filter(f => f.layer === 'core').length} de núcleo · ` +
  `${fichas.filter(f => f.layer === 'scenario').length} de cenário\n\n` +
  `Gerado por \`tools/check-links.mjs\`. Não editar à mão.\n\n---\n\n`;
for (const g of ordem) {
  tabelas += `## ${GRUPO_ROTULO[g] ?? g}\n\n| Documento | id | v | tipo | status |\n|---|---|---|---|---|\n`;
  for (const f of grupos.get(g)) {
    tabelas += `| [${f.title}](${f.rel}) | \`${f.id}\` | ${f.version} | ${f.type} | ${f.status} |\n`;
  }
  tabelas += '\n';
}

const index = fs.readFileSync(INDEX, 'utf8');
const t = index.indexOf(MARCA_TABELAS);
const i = index.indexOf(MARCA_INICIO);
const j = index.indexOf(MARCA_FIM);
if (t === -1 || i === -1 || j === -1) {
  console.error('INDEX.md não tem as marcas de seção esperadas.');
  process.exit(2);
}
const atualizado = index.slice(0, t) + tabelas + secao + index.slice(j);

console.log(`documentos      : ${arquivos.length}`);
console.log(`links resolvidos: ${resolvidos}`);
console.log(`alvos previstos : ${ordenados.length} (em ${citacoes} referências)`);

if (process.argv.includes('--write')) {
  fs.writeFileSync(INDEX, atualizado, 'utf8');
  console.log('INDEX.md regravado.');
} else if (atualizado !== index) {
  console.error('\nINDEX.md está defasado. Rode: node tools/check-links.mjs --write');
  process.exit(1);
} else {
  console.log('INDEX.md em dia.');
}
