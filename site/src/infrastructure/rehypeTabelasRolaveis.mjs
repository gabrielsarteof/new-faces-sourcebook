/**
 * Envolve toda tabela num contêiner que rola sozinho.
 *
 * Cento e vinte e sete documentos do corpus usam tabela, e a relação entre linha e
 * coluna é o conteúdo: transformá-la em card destruiria a informação. Sem contêiner
 * próprio, uma tabela larga ou espreme as colunas até ficar ilegível ou empurra a
 * página inteira na horizontal, que é o pior defeito de leitura no celular.
 *
 * O contêiner é focável e anunciado como região porque quem navega por teclado
 * precisa conseguir rolar a tabela sem um mouse.
 */
import { visit } from 'unist-util-visit';

export function rehypeTabelasRolaveis() {
  return tree => {
    visit(tree, 'element', (node, indice, pai) => {
      if (node.tagName !== 'table') return;
      if (!pai || indice === null || indice === undefined) return;
      if (pai.type === 'element' && pai.properties?.className?.includes?.('table-wrap')) return;

      const legenda = primeiroCabecalho(node);
      pai.children[indice] = {
        type: 'element',
        tagName: 'div',
        properties: {
          className: ['table-wrap'],
          tabIndex: 0,
          role: 'region',
          'aria-label': legenda ? `Tabela: ${legenda}` : 'Tabela',
        },
        children: [node],
      };
      // Não desce dentro do nó que acabou de ser movido.
      return [visit.SKIP, indice + 1];
    });
  };
}

/** Primeira célula de cabeçalho, usada só para dar nome acessível à região. */
function primeiroCabecalho(tabela) {
  let texto = null;
  visit(tabela, 'element', no => {
    if (texto !== null || no.tagName !== 'th') return;
    texto = textoDe(no).trim() || null;
  });
  return texto;
}

function textoDe(no) {
  if (no.type === 'text') return no.value;
  return (no.children ?? []).map(textoDe).join('');
}
