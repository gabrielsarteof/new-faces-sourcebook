/**
 * Copia o bloco de tokens do criador de fichas para src/styles/tokens.css.
 *
 * A pele dos dois sites precisa ser a mesma, e o criador é o dono dos tokens.
 * Como os dois vivem em repositórios diferentes e o do criador é privado, a cópia
 * não pode ser buscada por HTTP: ela sai do checkout local, que existe porque este
 * repositório é submódulo do criador.
 *
 *   node scripts/sync-tokens.mjs [caminho/para/style.css]
 *
 * Sem argumento, procura ../../../src/style.css, que é onde o criador fica quando
 * este repositório está montado como submódulo dele.
 *
 * A verificação de divergência NÃO mora aqui. Ela mora no criador, em
 * src/test/presentation/docsTokens.test.ts, que é o único lugar que enxerga os dois
 * arquivos ao mesmo tempo.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(AQUI, '..');
const PADRAO = path.resolve(RAIZ, '../../src/style.css');
const DESTINO = path.join(RAIZ, 'src/styles/tokens.css');

/** Recorta de style.css apenas o que define a pele: a variante escura e os três blocos de token. */
export function extrairTokens(css) {
  const blocos = [];

  const variante = css.match(/^@custom-variant dark \(.*\);$/m);
  if (!variante) throw new Error('@custom-variant dark não encontrado');
  blocos.push(variante[0]);

  for (const abertura of ['@theme {', ':root {', '.dark {']) {
    const i = css.indexOf('\n' + abertura);
    if (i < 0) throw new Error(`bloco ${abertura} não encontrado`);
    // Fecha no primeiro `}` em coluna zero depois da abertura.
    const fim = css.indexOf('\n}', i);
    if (fim < 0) throw new Error(`bloco ${abertura} não fecha`);
    blocos.push(css.slice(i + 1, fim + 2));
  }

  return blocos.join('\n\n');
}

// O corpo só roda quando o arquivo é chamado direto. O criador importa
// extrairTokens neste módulo para a guarda de drift, e importar não pode
// reescrever tokens.css como efeito colateral.
const chamadoDireto = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (chamadoDireto) {
  const origem = process.argv[2] ? path.resolve(process.argv[2]) : PADRAO;
  if (!fs.existsSync(origem)) {
    console.error(`Não achei o style.css do criador em ${origem}`);
    console.error('Passe o caminho: node scripts/sync-tokens.mjs ../caminho/src/style.css');
    process.exit(1);
  }

  const css = fs.readFileSync(origem, 'utf8');
  const cabecalho = [
    '/*',
    ' * ARQUIVO GERADO. Não edite à mão.',
    ' *',
    ' * Cópia do bloco de tokens de src/style.css do new-faces-character-creator.',
    ' * O criador é o dono da pele; este site consome. Para atualizar:',
    ' *',
    ' *   npm run tokens:sync',
    ' *',
    ' * A divergência entre este arquivo e a fonte é detectada por',
    ' * src/test/presentation/docsTokens.test.ts, no repositório do criador.',
    ' */',
    '',
  ].join('\n');

  fs.writeFileSync(DESTINO, cabecalho + extrairTokens(css) + '\n');
  const corpo = extrairTokens(css);
  const declaracoes = (corpo.match(/^\s*--[a-z][\w-]*\s*:/gm) || []).length;
  const cores = (corpo.match(/^\s*--color-[\w-]*\s*:/gm) || []).length;
  console.log(`tokens.css regravado de ${path.relative(process.cwd(), origem)} — ${declaracoes} tokens, ${cores} deles --color-*`);
}
