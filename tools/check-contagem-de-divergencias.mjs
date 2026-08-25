#!/usr/bin/env node
/**
 * Catraca de contagem das divergências do Registro de Nomes.
 *
 * A prosa da seção `## Divergências registradas` publica numerais que as duas
 * tabelas abaixo dela sustentam. Numeral escrito à mão ao lado de tabela que
 * cresce é a mesma grandeza mantida em dois lugares, e ela se separa sozinha —
 * foi o que aconteceu: a abertura publicava catorze obras, e as obras distintas
 * são treze, porque o Raiden ocupa uma linha em cada tabela.
 *
 * AS DUAS FONTES, nomeadas antes da guarda existir, pela regra do `METODO.md` §1:
 *
 *   1. As linhas das duas tabelas de divergência, contadas do markdown.
 *   2. Os numerais por extenso escritos na prosa da mesma seção.
 *
 * Nenhuma deriva da outra: uma é célula de tabela e a outra é palavra de texto
 * corrido, escrita por quem redigiu a seção. É a separação entre elas que a
 * guarda existe para vigiar.
 *
 * O NÚMERO DE ALVOS, declarado antes da varredura: duas tabelas, e a soma delas.
 *
 *   node tools/check-contagem-de-divergencias.mjs      confere; sai 1 se divergir
 */

import { readFileSync } from 'node:fs';
import path from 'node:path';

const RAIZ = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const REGISTRO = path.join(RAIZ, 'worlds/naruto/compendiums/registro-de-nomes.md');

/** As duas tabelas que a seção declara, por título, na ordem em que aparecem. */
const TABELAS = ['### Alcançam a coluna Romaji', '### Vivem apenas na coluna Kanji'];

/** Numeral por extenso para número, só o que a prosa desta seção usa. */
const EXTENSO = {
  seis: 6, sete: 7, oito: 8, nove: 9, dez: 10, onze: 11,
  doze: 12, treze: 13, catorze: 14, quinze: 15, dezesseis: 16,
};

const texto = readFileSync(REGISTRO, 'utf8');
const linhas = texto.split(/\r?\n/);

/**
 * As linhas de uma tabela, escopadas ao bloco dela.
 *
 * A varredura corre do título da tabela até a primeira linha que não começa em
 * `|`, e nunca contra o documento inteiro — o Registro carrega seis tabelas e a
 * §3 do GIT_WORKFLOW publica o caso de uma varredura larga apanhando linhas de
 * outra tabela.
 */
function linhasDaTabela(titulo) {
  const i = linhas.indexOf(titulo);
  if (i < 0) throw new Error(`tabela não encontrada: ${titulo}`);
  const corpo = [];
  for (let j = i + 1; j < linhas.length; j++) {
    const l = linhas[j];
    if (!l.startsWith('|')) { if (corpo.length) break; continue; }
    corpo.push(l);
  }
  // Fora o cabeçalho e a régua de separação.
  return corpo.slice(2).map(l => l.split('|').slice(1, -1).map(c => c.trim()));
}

const romaji = linhasDaTabela(TABELAS[0]);
const kanji = linhasDaTabela(TABELAS[1]);
const obras = new Set([...romaji, ...kanji].map(c => c[0]));
const nasDuas = [...obras].filter(o => romaji.some(c => c[0] === o) && kanji.some(c => c[0] === o));

/** A abertura da seção, escopada ao parágrafo que abre `## Divergências registradas`. */
const iSecao = linhas.indexOf('## Divergências registradas');
if (iSecao < 0) throw new Error('a seção de divergências não foi encontrada');
const abertura = linhas.slice(iSecao + 1, iSecao + 4).find(l => l.trim() !== '') ?? '';

/** O parágrafo de fecho, que também publica numeral. */
const fecho = linhas.find(l => l.startsWith('Nas ') && l.includes('par completo da fonte')) ?? '';

const falhas = [];
const nota = t => falhas.push(t);

const numeral = (frase, rotulo) => {
  const m = frase.match(new RegExp(`\\b(${Object.keys(EXTENSO).join('|')})\\b`, 'i'));
  if (!m) { nota(`${rotulo}: nenhum numeral por extenso encontrado na frase`); return null; }
  return EXTENSO[m[1].toLowerCase()];
};

console.log(`linhas na tabela de Romaji : ${romaji.length}`);
console.log(`linhas na tabela de Kanji  : ${kanji.length}`);
console.log(`linhas somadas             : ${romaji.length + kanji.length}`);
console.log(`obras distintas            : ${obras.size}`);
console.log(`nas duas tabelas           : ${nasDuas.length}${nasDuas.length ? `  (${nasDuas.join(', ')})` : ''}`);
console.log();

// A abertura publica o total de obras que divergiram.
const daAbertura = numeral(abertura, 'abertura');
if (daAbertura !== null && daAbertura !== obras.size) {
  nota(`a abertura publica ${daAbertura} e as obras distintas são ${obras.size}\n        ${JSON.stringify(abertura.slice(0, 120))}…`);
}

// O fecho publica o mesmo total, e já estava certo.
const doFecho = numeral(fecho, 'fecho');
if (doFecho !== null && doFecho !== obras.size) {
  nota(`o fecho publica ${doFecho} e as obras distintas são ${obras.size}\n        ${JSON.stringify(fecho)}`);
}
if (daAbertura !== null && doFecho !== null && daAbertura !== doFecho) {
  nota(`a abertura publica ${daAbertura} e o fecho publica ${doFecho}: a seção se contradiz`);
}

// Os dois numerais de tabela que a abertura cita.
for (const [rotulo, esperado] of [['Oito', romaji.length], ['Seis', kanji.length]]) {
  const re = new RegExp(`\\b(${Object.keys(EXTENSO).join('|')})\\b[^.]*coluna ${rotulo === 'Oito' ? 'Romaji' : 'Kanji'}`, 'i');
  const m = abertura.match(re);
  if (!m) { nota(`a abertura não nomeia quantas alcançam a coluna ${rotulo === 'Oito' ? 'Romaji' : 'Kanji'}`); continue; }
  const n = EXTENSO[m[1].toLowerCase()];
  if (n !== esperado) nota(`a abertura publica ${n} para a coluna ${rotulo === 'Oito' ? 'Romaji' : 'Kanji'} e a tabela tem ${esperado} linhas`);
}

// `Alcance da propagação` publica o número de correções que tocam a coluna Romaji.
const alcance = linhas.find(l => l.startsWith('**Alcance da propagação.**')) ?? '';
if (alcance === '') nota('o parágrafo `Alcance da propagação` não foi encontrado');
else {
  const n = numeral(alcance, 'alcance');
  if (n !== null && n !== romaji.length) {
    nota(`\`Alcance da propagação\` publica ${n} correções e a tabela de Romaji tem ${romaji.length} linhas`);
  }
}

if (falhas.length === 0) {
  console.log('contagem em dia: a prosa publica o que as tabelas sustentam.');
  process.exit(0);
}
console.log(`divergências entre a prosa e as tabelas (${falhas.length}):`);
for (const f of falhas) console.log(`    ${f}`);
console.log();
process.exit(1);
