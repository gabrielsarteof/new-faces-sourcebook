#!/usr/bin/env node
/**
 * Catraca de versão no cabeçalho: nenhum documento imprime a própria versão no H1.
 *
 * A versão vive no front matter, que é o campo que as ferramentas leem, e mais
 * lugar nenhum. Escrever o número duas vezes é a mesma grandeza mantida à mão em
 * dois lugares, e ela se separa sozinha: quem sobe a versão sobe o campo e esquece
 * a linha de prosa. Catorze documentos estavam separados assim quando esta regra foi
 * decidida, todos com o front matter à frente, e nenhum deles por descuido de uma
 * pessoa em particular — a forma é que produzia a divergência.
 *
 * Esta guarda afirma ausência, e não igualdade, e a diferença é de manutenção.
 * Concordância exige que dois lugares se movam juntos toda vez. Ausência exige que
 * um lugar não nasça. A primeira falha por esquecimento e a segunda não tem como
 * falhar. Se o número precisar aparecer na prosa, ele aparece gerado do front matter
 * na hora da renderização, nunca digitado.
 *
 * O que a guarda lê:
 *
 *   1. O primeiro `# ` do corpo, depois do front matter, que é onde o número era
 *      digitado. É a fatia que a regra governa.
 *   2. O campo `version` do front matter, que a guarda não compara e usa apenas para
 *      dizer, na mensagem, qual número o documento de fato carrega. Mensagem que
 *      nomeia os dois lados poupa quem for corrigir de abrir o arquivo.
 *
 * A guarda não fixa quantos documentos varre, porque o corpus cresce. O que ela
 * afirma é que varreu algum e que achou um H1 em algum: guarda que não encontra o
 * que conferir e sai verde é indistinguível de guarda satisfeita, que é a quinta
 * forma da família do `METODO.md` §1.
 *
 *   node tools/check-versao-no-cabecalho.mjs      confere; sai 1 se algo publicar
 */

import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

/**
 * Número no H1 que não é a versão do próprio documento: a exceção por lista nomeada.
 *
 * `errata-combat-core-v3.md` está na versão 1 e o cabeçalho lê "Errata do Núcleo de
 * Combate v3", onde o `v3` faz parte do nome do documento corrigido. Retirá-lo
 * apagaria informação real. Distinguir versão própria de versão citada por heurística
 * de posição erraria nos dois sentidos, e lista nomeada com a razão escrita é
 * preferível a recorte que erra em silêncio.
 *
 * A guarda confere a própria lista: exceção cujo cabeçalho deixou de publicar número
 * é exceção obsoleta, e obsoleta é falha.
 */
const NUMERO_CITADO = {
  'core/errata-combat-core-v3.md':
    'o v3 nomeia o Núcleo de Combate que a errata corrige, e não a versão dela',
};

const RE_VERSAO = /\bv\d+(?:\.\d+)*\b/i;

/** O primeiro `# ` do corpo, depois do front matter. */
function cabecalho(texto) {
  const fim = texto.startsWith('---') ? texto.indexOf('\n---', 3) : -1;
  const corpo = fim < 0 ? texto : texto.slice(fim + 4);
  return (corpo.match(/^# (.+)$/m) || [])[1]?.trim() ?? null;
}

/** Só para a mensagem: qual número o documento de fato carrega. */
function versaoDeclarada(texto) {
  if (!texto.startsWith('---')) return null;
  const fim = texto.indexOf('\n---', 3);
  if (fim < 0) return null;
  const m = texto.slice(4, fim).match(/^version:[ \t]*(.+)$/m);
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : null;
}

const arquivos = execSync("git ls-files '*.md'", { encoding: 'utf8' }).trim().split('\n');

let comCabecalho = 0;
const publicam = [];
const citados = [];

for (const arquivo of arquivos) {
  const texto = readFileSync(arquivo, 'utf8');
  const titulo = cabecalho(texto);
  if (titulo === null) continue;
  comCabecalho++;

  if (!RE_VERSAO.test(titulo)) continue;

  if (arquivo in NUMERO_CITADO) { citados.push({ arquivo, titulo }); continue; }
  publicam.push({ arquivo, titulo, declarada: versaoDeclarada(texto) });
}

const obsoletas = Object.keys(NUMERO_CITADO).filter(a => !citados.some(c => c.arquivo === a));

console.log(`documentos varridos      : ${arquivos.length}`);
console.log(`com cabeçalho            : ${comCabecalho}`);
console.log(`número citado, por lista : ${citados.length}`);
for (const c of citados) console.log(`    ${c.arquivo.padEnd(46)} ${NUMERO_CITADO[c.arquivo]}`);
console.log();

// A quinta forma: guarda que não achou o que conferir está cega, não satisfeita.
if (comCabecalho === 0) {
  console.error('nenhum documento publica cabeçalho. A varredura não achou o que conferir.');
  process.exit(1);
}

const falhas = [];
for (const p of publicam) {
  falhas.push(
    `${p.arquivo}\n        cabeçalho  ${JSON.stringify(p.titulo)}\n` +
    `        a versão do documento é ${p.declarada ?? '(não declarada no front matter)'}, e é lá que ela vive`,
  );
}
for (const a of obsoletas) {
  falhas.push(`${a}\n        declarado como número citado e o cabeçalho não publica número algum: a exceção está obsoleta`);
}

if (falhas.length === 0) {
  console.log('cabeçalho em dia: nenhum documento imprime a própria versão no título.');
  process.exit(0);
}

console.log(`publicam versão no cabeçalho (${falhas.length}):`);
for (const f of falhas) console.log(`    ${f}`);
console.log();
console.log(`${falhas.length} ocorrência(s). A versão vive no front matter.`);
process.exit(1);
