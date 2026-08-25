#!/usr/bin/env node
/**
 * Catraca de nome de ficha: o cabeçalho publicado contra o Registro de Nomes.
 *
 * Existe porque renomear ficha não acusa em lugar nenhum. O `id` da ficha é o `id`
 * do front matter e não deriva do cabeçalho, o pipeline de conversão nunca lê o
 * cabeçalho nem o título para nome algum, e nenhum `.json` muda. Uma ficha renomeada
 * errado, ou renomeada para um nome que o catálogo não publica, atravessa o corpus
 * inteiro sem quebrar nada. O `S6-05` chama isso de parede sem espelho, e o
 * `METODO.md` documenta a família na seção 1: não é uma guarda que mente, é a
 * ausência de guarda.
 *
 * AS DUAS FONTES, nomeadas antes da guarda existir, pela regra do `METODO.md` §1:
 *
 *   1. O cabeçalho que a ficha publica, lido do `# ` de cada arquivo em
 *      `worlds/naruto/techniques/`.
 *   2. A coluna Romaji do Registro de Nomes, lida da tabela de
 *      `worlds/naruto/compendiums/registro-de-nomes.md`.
 *
 * As duas se movem por caminhos independentes: uma é prosa de documento de técnica,
 * a outra é célula de tabela de concordância. Nenhuma deriva da outra.
 *
 * O NÚMERO DE ALVOS, declarado antes da varredura, pela mesma regra:
 *
 *   52 fichas em `techniques/`, das quais 48 têm par no Registro e 4 não têm.
 *
 * As quatro sem par são lista nomeada e não recorte. Guarda que varre 52 e resolve
 * 48 saindo verde é exatamente o defeito que este arquivo existe para impedir, então
 * as duas partes são afirmadas e a soma é conferida.
 *
 *   node tools/check-nomes-de-ficha.mjs      confere; sai 1 se algo divergir
 */

import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const RAIZ = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DIR_FICHAS = path.join(RAIZ, 'worlds/naruto/techniques');
const TEMPLATE = path.join(RAIZ, 'core/technique-template.md');

/** O par kanji e português entre asteriscos duplos, ou só o kanji. */
const PAR_EM_NEGRITO = /^\*\*.+\*\*$/;
const REGISTRO = path.join(RAIZ, 'worlds/naruto/compendiums/registro-de-nomes.md');

/** Alvos declarados. Divergência entre o declarado e o encontrado é falha. */
const ALVOS = { fichas: 52, comPar: 48, semPar: 4 };

/**
 * As fichas sem linha no Registro, nomeadas uma a uma com a razão.
 *
 * Nenhuma é obra nomeada que algum compêndio cataloga, que é o critério de entrada
 * do Registro. Uma quinta aparecendo aqui é achado e não exceção: ou o Registro
 * perdeu uma linha, ou nasceu ficha sem entrada, e os dois casos param a guarda.
 */
const SEM_PAR = {
  'susanoo.md': '須佐能乎 não tem linha no Registro: nenhum compêndio a cataloga',
  'hachimon-tonko.md': '八門遁甲 não tem linha no Registro: nenhum compêndio a cataloga',
  'hachimon-obras.md': 'documento agregado de nove obras, não é obra nomeada',
  'hiraishin-impregnacao.md': 'variante que compartilha kanji com o Hiraishin no Jutsu, sem linha própria',
};

/**
 * A leitura de cabeçalho, e a única deste arquivo.
 *
 * Devolve o título e a linha imediatamente abaixo dele, que é onde o par kanji e
 * português mora. A extração do título é a mesma expressão de sempre; o que mudou
 * é a função passar a devolver também a linha seguinte, porque o esqueleto que o
 * Template prescreve se verifica por ela.
 *
 * Recebe texto e não caminho de propósito. É o que permite que o Template e as
 * fichas passem pela mesma leitura, e é isso que impede o espelho: o esqueleto
 * prescrito não é conferido por um leitor escrito para ele, e sim pelo leitor que
 * lê as fichas que ele descreve.
 */
function cabecalhoPublicado(texto) {
  // Escopado ao corpo: o `# ` do front matter não existe, mas um `# ` dentro de
  // bloco de código existiria, e o primeiro do documento é o título.
  const m = texto.match(/^# (.+)$/m);
  if (!m) return { titulo: '', linhaDeNome: '' };
  const depois = texto.slice(m.index + m[0].length).split(/\r?\n/);
  return { titulo: m[1].trim(), linhaDeNome: (depois[1] ?? '').trim() };
}

/** Fonte 1: o cabeçalho que a ficha publica. */
function cabecalhoDaFicha(arquivo) {
  return cabecalhoPublicado(readFileSync(path.join(DIR_FICHAS, arquivo), 'utf8'));
}

/**
 * Fonte 2: a coluna Romaji do Registro.
 *
 * A varredura corre escopada ao bloco da tabela, do cabeçalho dela até a primeira
 * linha que não começa em `|`, e nunca contra o arquivo inteiro — a §3 do
 * GIT_WORKFLOW publica a regra, e este documento carrega outras cinco tabelas.
 */
function linhasDoRegistro() {
  const linhas = readFileSync(REGISTRO, 'utf8').split(/\r?\n/);
  const inicio = linhas.findIndex(l => l.startsWith('| Romaji |'));
  if (inicio < 0) throw new Error('a tabela do Registro não foi encontrada');

  const out = [];
  for (let i = inicio + 2; i < linhas.length; i++) {
    if (!linhas[i].startsWith('|')) break;
    const c = linhas[i].split('|').slice(1, -1).map(s => s.trim());
    const ficha = (c[5].match(/\(([^)]+)\)/) || [])[1] || '';
    out.push({ linha: i + 1, romaji: c[0], kanji: c[1], ficha: ficha ? path.basename(ficha) : '' });
  }
  return out;
}

const falhas = [];
const nota = (tipo, texto) => falhas.push({ tipo, texto });

const fichas = readdirSync(DIR_FICHAS).filter(f => f.endsWith('.md')).sort();
const registro = linhasDoRegistro();
const porFicha = new Map(registro.filter(r => r.ficha).map(r => [r.ficha, r]));

// ── Contagem, afirmada e não inferida ────────────────────────────────────────
const comPar = fichas.filter(f => porFicha.has(f));
const semPar = fichas.filter(f => !porFicha.has(f));

if (fichas.length !== ALVOS.fichas) {
  nota('contagem', `${fichas.length} fichas em techniques/, e a guarda declara ${ALVOS.fichas}`);
}
if (comPar.length !== ALVOS.comPar) {
  nota('contagem', `${comPar.length} fichas com par no Registro, e a guarda declara ${ALVOS.comPar}`);
}
if (semPar.length !== ALVOS.semPar) {
  nota('contagem', `${semPar.length} fichas sem par, e a guarda declara ${ALVOS.semPar}`);
}
if (comPar.length + semPar.length !== fichas.length) {
  nota('contagem', 'a soma das duas partes não fecha com o total varrido');
}

// ── As exceções são a lista nomeada, e nada além dela ────────────────────────
for (const f of semPar) {
  if (!(f in SEM_PAR)) nota('excecao-nao-declarada', `${f} não tem linha no Registro e não está na lista nomeada`);
}
for (const f of Object.keys(SEM_PAR)) {
  if (!fichas.includes(f)) nota('excecao-obsoleta', `${f} está na lista de exceções e não existe em techniques/`);
  else if (porFicha.has(f)) nota('excecao-obsoleta', `${f} está na lista de exceções e ganhou linha no Registro`);
}

// ── Linha do Registro apontando para arquivo que não existe ──────────────────
for (const r of registro.filter(x => x.ficha)) {
  if (!fichas.includes(r.ficha)) {
    nota('ficha-inexistente', `linha ${r.linha} (${r.romaji}) aponta para ${r.ficha}, que não existe em techniques/`);
  }
}

// ── O nome, que é o que esta guarda existe para conferir ─────────────────────
for (const f of comPar) {
  const r = porFicha.get(f);
  const { titulo: publicado, linhaDeNome } = cabecalhoDaFicha(f);

  if (r.romaji === '') {
    nota('registro-sem-romaji', `${f} tem par na linha ${r.linha}, cuja coluna Romaji está vazia`);
    continue;
  }
  if (publicado !== r.romaji) {
    nota('nome-divergente',
      `${f}\n      a ficha publica  ${JSON.stringify(publicado)}\n      o Registro publica ${JSON.stringify(r.romaji)}  (linha ${r.linha})`);
  }

  // A linha de nome, que é o que o Template prescreve e o que separa a forma de
  // hoje da anterior: o formato antigo não tinha linha em negrito abaixo do `# `.
  if (!PAR_EM_NEGRITO.test(linhaDeNome)) {
    nota('linha-de-nome-ausente',
      `${f}\n      abaixo do cabeçalho vem ${JSON.stringify(linhaDeNome)}, e não o par entre asteriscos duplos`);
  }
}

// ── Higiene: o travessão não entra em cabeçalho de ficha ─────────────────────
// A decisão está no Registro, na seção das divergências absorvidas pela coluna
// nova: o travessão não se digita na mesa, entra em nome de arquivo derivado, e a
// prosa do corpus não o admite. A forma da fonte vive na coluna Nome canônico.
for (const f of fichas) {
  const { titulo } = cabecalhoDaFicha(f);
  if (titulo.includes('—')) nota('travessao-no-cabecalho', `${f} publica ${JSON.stringify(titulo)}`);
}

// ── O esqueleto que o Template prescreve ─────────────────────────────────────
// Um esqueleto, uma asserção, declarados antes da varredura.
//
// O Template descrevia o formato que a segunda onda da nomenclatura substituiu, e
// nada acusava: um documento normativo que prescreve o que o corpus não pratica é
// a mesma parede sem espelho das fichas, uma camada acima. A asserção que decide é
// a linha em negrito — o formato antigo publicava `# Português — 漢字 (Romaji)` e
// não tinha segunda linha, então qualquer reversão a ele falha aqui.
{
  const texto = readFileSync(TEMPLATE, 'utf8');
  // O esqueleto é o segundo `# ` do documento: o primeiro é o título do próprio
  // Template. Localizar pelo conteúdo do esqueleto o faria sumir junto com ele
  // numa reversão, e guarda que não acha o que conferir sai verde por vacuidade.
  const cabecalhos = [...texto.matchAll(/^# .+$/gm)];
  if (cabecalhos.length < 2) {
    nota('esqueleto-do-template-ausente',
      `${path.relative(RAIZ, TEMPLATE)} não publica um segundo cabeçalho, e é nele que o esqueleto da ficha vive`);
  } else {
    const { titulo, linhaDeNome } = cabecalhoPublicado(texto.slice(cabecalhos[1].index));
    if (!PAR_EM_NEGRITO.test(linhaDeNome)) {
      nota('esqueleto-do-template-desatualizado',
        `${path.relative(RAIZ, TEMPLATE)}\n      o esqueleto prescreve ${JSON.stringify(titulo)}\n` +
        `      e abaixo dele vem ${JSON.stringify(linhaDeNome)}, e não o par entre asteriscos duplos\n` +
        '      as fichas publicam a linha de nome desde a segunda onda, e o Template tem de prescrever o que elas praticam');
    }
  }
}

// ── Relatório ────────────────────────────────────────────────────────────────
console.log(`fichas varridas   : ${fichas.length}`);
console.log(`com par no Registro: ${comPar.length}`);
console.log(`sem par, declaradas: ${semPar.length}`);
for (const f of semPar) console.log(`    ${f.padEnd(28)} ${SEM_PAR[f] ?? 'NÃO DECLARADA'}`);
console.log();

if (falhas.length === 0) {
  console.log('nome de ficha em dia: os cabeçalhos publicam o que o Registro publica.');
  process.exit(0);
}

const porTipo = {};
for (const f of falhas) (porTipo[f.tipo] ??= []).push(f.texto);
for (const [tipo, lista] of Object.entries(porTipo)) {
  console.log(`${tipo}  (${lista.length})`);
  for (const t of lista) console.log(`    ${t}`);
  console.log();
}
console.log(`${falhas.length} divergência(s).`);
process.exit(1);
