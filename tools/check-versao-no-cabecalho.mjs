#!/usr/bin/env node
/**
 * Catraca de versão: o campo `version` do front matter contra o número impresso no H1.
 *
 * A causa da divergência é de forma. O cabeçalho é prosa escrita à mão e o front
 * matter é o campo que as ferramentas leem, então quem sobe a versão sobe o campo e
 * esquece a linha. Nenhuma ferramenta acusava, porque nenhuma lia as duas.
 *
 * AS DUAS FONTES, nomeadas antes da guarda existir, pela regra do `METODO.md` §1:
 *
 *   1. O campo `version` do front matter, lido do bloco entre os dois `---` do topo.
 *   2. O número impresso no primeiro `# ` do corpo, lido por caminho independente,
 *      com outra expressão e sobre outra fatia do arquivo.
 *
 * Nenhuma deriva da outra: uma é campo de metadado e a outra é prosa de título. É
 * exatamente por serem independentes que a comparação significa alguma coisa — uma
 * guarda cujos dois lados saem da mesma origem não verifica nada, e o `METODO.md`
 * §1 documenta as sete formas dessa falha.
 *
 * O NÚMERO DE ALVOS não se fixa aqui, porque documento novo entra no conjunto sem
 * aviso e um número fixado transformaria crescimento legítimo em falha. O que se
 * afirma é que o conjunto não é vazio: guarda que não encontra nada para conferir e
 * sai verde é indistinguível de guarda satisfeita, que é a quinta forma da mesma
 * família.
 *
 * Documento que não imprime versão no H1 não entra e não é falha. A ausência é
 * forma válida e deliberada em parte do corpus: `S6-06` e `S6-07` nasceram sem o
 * número no cabeçalho de propósito, porque documento que manda catracar esta
 * divergência não pode nascer com ela.
 *
 *   node tools/check-versao-no-cabecalho.mjs      confere; sai 1 se algo divergir
 */

import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

/**
 * Versão citada, não própria: a exceção por lista nomeada.
 *
 * `errata-combat-core-v3.md` está na versão 1 e o cabeçalho lê "Errata do Núcleo de
 * Combate v3", onde aquele `v3` é a versão do documento corrigido. Distinguir versão
 * própria de versão citada por heurística de posição erraria nos dois sentidos, e
 * lista nomeada com a razão escrita é preferível a recorte que erra em silêncio.
 */
const VERSAO_CITADA = {
  'core/errata-combat-core-v3.md':
    'o v3 do cabeçalho é a versão do Núcleo de Combate que a errata corrige, não a dela',
};

/** Fonte 1: o campo do front matter. */
function versaoDoFrontMatter(texto) {
  if (!texto.startsWith('---')) return null;
  const fim = texto.indexOf('\n---', 3);
  if (fim < 0) return null;
  const m = texto.slice(4, fim).match(/^version:[ \t]*(.+)$/m);
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : null;
}

/**
 * Fonte 2: o número impresso no título, lido por outro caminho.
 *
 * Corre sobre o corpo, depois do front matter, para que o campo da fonte 1 não possa
 * ser lido de novo por acidente — as duas fontes têm de ficar em fatias disjuntas do
 * arquivo, ou a independência é só aparente.
 */
function versaoDoCabecalho(texto) {
  const fim = texto.startsWith('---') ? texto.indexOf('\n---', 3) : -1;
  const corpo = fim < 0 ? texto : texto.slice(fim + 4);
  const titulo = (corpo.match(/^# (.+)$/m) || [])[1];
  if (!titulo) return null;
  const m = titulo.match(/\bv(\d+(?:\.\d+)*)\b/i);
  return m ? { versao: m[1], titulo: titulo.trim() } : null;
}

const arquivos = execSync("git ls-files '*.md'", { encoding: 'utf8' }).trim().split('\n');

const alvos = [];
const divergem = [];
const citadas = [];

for (const arquivo of arquivos) {
  const texto = readFileSync(arquivo, 'utf8');
  const fm = versaoDoFrontMatter(texto);
  const h1 = versaoDoCabecalho(texto);
  if (fm === null || h1 === null) continue;

  if (arquivo in VERSAO_CITADA) { citadas.push({ arquivo, fm, ...h1 }); continue; }

  alvos.push(arquivo);
  if (fm !== h1.versao) divergem.push({ arquivo, fm, h1: h1.versao, titulo: h1.titulo });
}

for (const arquivo of Object.keys(VERSAO_CITADA)) {
  if (!citadas.some(c => c.arquivo === arquivo)) {
    divergem.push({ arquivo, fm: '—', h1: '—', titulo: 'declarado como versão citada e não publica mais versão no H1: a exceção está obsoleta' });
  }
}

console.log(`documentos varridos           : ${arquivos.length}`);
console.log(`publicam versão nos dois lados: ${alvos.length}`);
console.log(`versão citada, por lista      : ${citadas.length}`);
for (const c of citadas) console.log(`    ${c.arquivo.padEnd(48)} ${VERSAO_CITADA[c.arquivo]}`);
console.log();

// A quinta forma: guarda que não achou o que conferir não está satisfeita, está cega.
if (alvos.length === 0) {
  console.error('nenhum documento publica versão nos dois lados. A varredura não achou o que conferir.');
  process.exit(1);
}

if (divergem.length === 0) {
  console.log('versão em dia: o front matter e o cabeçalho publicam o mesmo número.');
  process.exit(0);
}

console.log(`divergem (${divergem.length}):`);
for (const d of divergem) {
  console.log(`    ${d.arquivo}`);
  console.log(`        front matter  version: ${d.fm}`);
  console.log(`        cabeçalho     v${d.h1}   ${JSON.stringify(d.titulo)}`);
}
console.log();
console.log(`${divergem.length} divergência(s).`);
process.exit(1);
