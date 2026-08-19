/**
 * Copia a pele do criador de fichas para src/styles/tokens.css.
 *
 * Os dois sites precisam parecer o mesmo produto, e o criador é o dono do design
 * system. Como eles vivem em repositórios diferentes e o do criador é privado, a
 * cópia não pode ser buscada por HTTP: ela sai do checkout local, que existe
 * porque este repositório é submódulo do criador.
 *
 *   node scripts/sync-tokens.mjs [caminho/para/style.css]
 *
 * Sem argumento, procura ../../src/style.css, que é onde o criador fica quando
 * este repositório está montado como submódulo dele.
 *
 * A verificação de divergência NÃO mora aqui. Ela mora no criador, em
 * src/test/data/docsTokens.test.ts, que é o único lugar que enxerga os dois
 * arquivos ao mesmo tempo.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(AQUI, '..');
const PADRAO = path.resolve(RAIZ, '../../src/style.css');
const DESTINO = path.join(RAIZ, 'src/styles/tokens.css');

/** Recorta de style.css a variante escura e os três blocos de token. */
export function extrairTokens(css) {
  const blocos = [];

  const variante = css.match(/^@custom-variant dark \(.*\);$/m);
  if (!variante) throw new Error('@custom-variant dark não encontrado');
  blocos.push(variante[0]);

  for (const abertura of ['@theme {', ':root {', '.dark {']) {
    const i = css.indexOf('\n' + abertura);
    if (i < 0) throw new Error(`bloco ${abertura} não encontrado`);
    const fim = css.indexOf('\n}', i);
    if (fim < 0) throw new Error(`bloco ${abertura} não fecha`);
    blocos.push(css.slice(i + 1, fim + 2));
  }

  return blocos.join('\n\n');
}

/**
 * Classes utilitárias do design system que o site também usa.
 *
 * São poucas e estáveis, e copiá-las evita reescrever à mão o que já existe.
 * Quando o seletor aparece agrupado com outros, como nas regras de scrollbar, só
 * a linha desta classe é recortada, o que produz uma regra válida e isolada.
 */
export const UTILITARIOS = [
  'navbar-bg',
  'sidebar-boundary',
  'sidebar-scroll',
  'toc-card-active',
  'page-scroll',
  'pb-page',
];

/**
 * Recorta toda regra cujo seletor cita um dos nomes declarados.
 *
 * O seletor não precisa começar pelo nome: `.aurora-bg` só ganha cor no escuro
 * por `.dark .aurora-bg`, e o brilho vem de `.dark .aurora-bg::before`. Quando o
 * nome aparece agrupado com outros seletores, só a linha dele é recortada, o que
 * produz uma regra válida e isolada.
 */
export function extrairUtilitarios(css, nomes = UTILITARIOS) {
  const achadas = new Set();
  for (const nome of nomes) {
    const re = new RegExp(String.raw`^[^\n{]*\.${nome}(?![\w-])[^\n{]*\{[^}]*\}`, 'gm');
    for (const m of css.matchAll(re)) achadas.add(m[0].trim());
  }
  if (achadas.size === 0) throw new Error('nenhuma classe utilitária encontrada');
  return [...achadas].join('\n\n');
}

/** Monta o conteúdo completo do arquivo gerado. */
export function montarTokensCss(css) {
  const cabecalho = [
    '/*',
    ' * ARQUIVO GERADO. Não edite à mão.',
    ' *',
    ' * Cópia da pele de src/style.css do new-faces-character-creator: a variante',
    ' * escura, os três blocos de token, e as classes utilitárias compartilhadas.',
    ' * O criador é o dono; este site consome. Para atualizar:',
    ' *',
    ' *   npm run tokens:sync',
    ' *',
    ' * A divergência é detectada por src/test/data/docsTokens.test.ts, no criador.',
    ' */',
    '',
  ].join('\n');

  return `${cabecalho}${extrairTokens(css)}\n\n/* ── Utilitários do design system ─────────────────────────────────────── */\n\n${extrairUtilitarios(css)}\n`;
}

// O corpo só roda quando o arquivo é chamado direto. O criador importa as funções
// acima para a guarda de drift, e importar não pode reescrever tokens.css.
const chamadoDireto =
  process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (chamadoDireto) {
  const origem = process.argv[2] ? path.resolve(process.argv[2]) : PADRAO;
  if (!fs.existsSync(origem)) {
    console.error(`Não achei o style.css do criador em ${origem}`);
    console.error('Passe o caminho: node scripts/sync-tokens.mjs ../caminho/src/style.css');
    process.exit(1);
  }

  const css = fs.readFileSync(origem, 'utf8');
  fs.writeFileSync(DESTINO, montarTokensCss(css));

  const corpo = extrairTokens(css);
  const tokens = (corpo.match(/^\s*--[a-z][\w-]*\s*:/gm) || []).length;
  const cores = (corpo.match(/^\s*--color-[\w-]*\s*:/gm) || []).length;
  const utils = extrairUtilitarios(css).split('\n\n').length;
  console.log(
    `tokens.css regravado de ${path.relative(process.cwd(), origem)} — ${tokens} tokens (${cores} de cor) e ${utils} classes utilitárias`,
  );
}
