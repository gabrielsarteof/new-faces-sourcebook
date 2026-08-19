/**
 * Reescreve os links internos do corpus para as rotas do site.
 *
 * O corpus liga documento a documento por caminho relativo terminado em `.md`, que é
 * o que funciona para quem lê os arquivos no editor. No site esses caminhos não
 * existem, e sem reescrita todo link interno vira 404.
 *
 * Três destinos possíveis, e cada um tem um tratamento diferente de propósito:
 *
 * - alvo existe e é público: vira link normal para a rota canônica
 * - alvo existe e é privado: vira texto, porque o site não pode confirmar a
 *   existência de material que decidiu não publicar
 * - alvo não existe: vira texto marcado como documento previsto. Estes não são erro,
 *   são dívida declarada — o corpus publica 48 alvos previstos em 54 referências, e
 *   um 404 mentiria dizendo que o link está quebrado
 */
import path from 'node:path';
import { visit } from 'unist-util-visit';
import { mapaDoCorpus, raizDoCorpus } from './mapaDoCorpus.mjs';

/** Espelha domain/visibilidade.ts. Duplicado porque plugin remark não importa .ts. */
const TIPOS_PUBLICOS = new Set([
  'technique', 'skill', 'system', 'clan', 'compendium', 'lineage', 'core-layer',
  'catalog', 'reference-table', 'reincarnation', 'lore', 'doc', 'item-catalog',
  'power', 'extension',
]);

/** Espelha domain/rota.ts. */
function rotaDoId(id) {
  const segs = id.split('.').filter(Boolean);
  if (segs[segs.length - 1] === 'overview') segs.pop();
  return '/' + segs.join('/');
}

export const relatorio = { reescritos: 0, previstos: [], privados: [] };

export function remarkLinksInternos() {
  return (tree, file) => {
    const origem = file.history?.[0] ?? file.path;
    if (!origem) return;

    const raiz = raizDoCorpus();
    const mapa = mapaDoCorpus();
    const dirOrigem = path.dirname(origem);
    const relOrigem = path.relative(raiz, origem).split(path.sep).join('/');

    visit(tree, 'link', (node, indice, pai) => {
      const url = node.url ?? '';
      if (/^(https?:|mailto:|#|\/)/.test(url)) return;
      if (!url.includes('.md')) return;

      const [caminho, ancora] = url.split('#');
      const absoluto = path.resolve(dirOrigem, caminho);
      const alvo = path.relative(raiz, absoluto).split(path.sep).join('/');
      const dados = mapa.get(alvo);

      // Alvo previsto: o corpus cita um documento que ainda não foi escrito.
      if (!dados) {
        relatorio.previstos.push({ de: relOrigem, para: alvo });
        substituirPorTexto(node, indice, pai, 'documento previsto');
        return;
      }

      if (!TIPOS_PUBLICOS.has(dados.type)) {
        relatorio.privados.push({ de: relOrigem, para: dados.id, tipo: dados.type });
        substituirPorTexto(node, indice, pai, 'não publicado');
        return;
      }

      node.url = rotaDoId(dados.id) + (ancora ? `#${ancora}` : '');
      relatorio.reescritos++;
    });
  };
}

/**
 * Troca o link por um `span` focável com o estado.
 *
 * Focável, e não texto solto, porque quem navega por teclado precisa alcançar a
 * explicação de por que aquilo parece um link e não leva a lugar nenhum.
 */
function substituirPorTexto(node, indice, pai, estado) {
  if (!pai || indice === null || indice === undefined) return;
  pai.children[indice] = {
    type: 'html',
    value:
      `<span class="ref-indisponivel" tabindex="0" title="${estado}">` +
      `${textoDe(node)}<span class="ref-estado">${estado}</span></span>`,
  };
}

function textoDe(node) {
  let saida = '';
  visit(node, 'text', t => { saida += t.value; });
  return saida
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
