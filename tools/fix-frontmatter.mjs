#!/usr/bin/env node
/**
 * Correções de metadado da Fase 1. Rodado uma vez; mantido no repositório
 * porque documenta como cada campo foi recuperado.
 *
 * Nenhuma prosa é tocada: o script só reescreve linhas do bloco de front
 * matter, e falha se o corpo mudar de tamanho.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RELATORIO = path.resolve(
  RAIZ, '..', 'new-faces-character-creator', 'docs', 'migration', '.migration-report.json',
);

function ler(rel) {
  const texto = fs.readFileSync(path.join(RAIZ, rel), 'utf8');
  const bloco = texto.match(/^(---\n)([\s\S]*?)(\n---\n\n?)/);
  if (!bloco) throw new Error(`sem front matter: ${rel}`);
  return { texto, abre: bloco[1], campos: bloco[2], fecha: bloco[3], corpo: texto.slice(bloco[0].length) };
}

function gravar(rel, doc, camposNovos) {
  const saida = doc.abre + camposNovos + doc.fecha + doc.corpo;
  fs.writeFileSync(path.join(RAIZ, rel), saida, 'utf8');
}

const mudancas = [];

// ── 1. title == id ────────────────────────────────────────────────────────────
// O migrador fazia `title = firstH1(body) ?? id`. Documentos que trazem o título
// como linha solta, sem `#`, caíram no fallback. O título está no corpo.
{
  const rel = 'worlds/naruto/clans/senju.md';
  const d = ler(rel);
  const primeira = d.corpo.split('\n').find(l => l.trim() !== '').trim();
  const campos = d.campos.replace(/^title: ".*"$/m, `title: "${primeira}"`);
  gravar(rel, d, campos);
  mudancas.push([rel, `title -> "${primeira}"`]);
}

// ── 2. hyuga-byakugan: é um dōjutsu, como sharingan e mangekyō ────────────────
{
  const rel = 'worlds/naruto/clans/hyuga-byakugan.md';
  const d = ler(rel);
  const campos = d.campos
    .replace(/^id: .*$/m, 'id: naruto.lineage.byakugan')
    .replace(/^type: .*$/m, 'type: lineage');
  gravar(rel, d, campos);
  mudancas.push([rel, 'id -> naruto.lineage.byakugan, type -> lineage']);
}

// ── 3. source-file: o caminho completo, não o basename ────────────────────────
// O migrador gravou basename(origem). Para os 52 do arquivo compactado os nomes
// eram únicos e o campo ficou correto. Para os 47 vindos de content/, colapsou
// 47 caminhos distintos na mesma string "_index.md". O relatório de migração
// guardou o caminho completo de cada um.
{
  const relatorio = JSON.parse(fs.readFileSync(RELATORIO, 'utf8'));
  const origemPorDestino = new Map(
    relatorio.docs.filter(x => x.origin === 'content').map(x => [x.dest, x.source]),
  );
  let n = 0;
  for (const [dest, origem] of origemPorDestino) {
    const d = ler(dest);
    const atual = d.campos.match(/^source-file: (.*)$/m)?.[1];
    if (atual === origem) continue;
    gravar(dest, d, d.campos.replace(/^source-file: .*$/m, `source-file: ${origem}`));
    n++;
  }
  mudancas.push([`${n} documentos`, 'source-file -> caminho completo de origem']);
}

for (const [alvo, o] of mudancas) console.log(`  ${alvo}\n     ${o}`);
