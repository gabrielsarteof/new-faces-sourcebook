/**
 * Transforma a etiqueta de fundamento em chip legível.
 *
 * Toda afirmação de design do corpus carrega marca: o que a obra declara, o que ela
 * mostra sem nomear, e o que o sistema cria. São 322 ocorrências em 54 documentos, e
 * hoje renderizam como texto entre colchetes, indistinguíveis da prosa em volta.
 *
 * É a informação mais consequente para quem lê uma regra, porque responde de onde
 * ela vem, e é o único lugar deste site onde cor carrega significado. O corpo segue
 * monocromático de propósito: o Supabase Docs, medido, não tem um único elemento de
 * croma acima de 0,02 fora do realce de sintaxe.
 *
 * Três formas convivem no corpus e as três são tratadas:
 *
 *   `[canon]`            201 vezes, entre crases, chega como <code>
 *   [canon]               79 vezes, nua, chega como texto
 *   [canon: justificativa] 42 vezes, com a evidência dentro
 *
 * A justificativa é preservada. Ela é a evidência que sustenta a marca, não enfeite.
 */
import { visit } from 'unist-util-visit';

const TIPOS = {
  canon: { rotulo: 'canon', titulo: 'A obra declara' },
  atribuido: { rotulo: 'atribuído', titulo: 'A obra mostra sem nomear' },
  proposta: { rotulo: 'proposta', titulo: 'O sistema cria' },
};

const normalizar = s =>
  s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

const PADRAO = /\[(canon|atribu[ií]do|proposta)(?::\s*([^\]]+))?\]/gi;

export const contagem = { chips: 0 };

function chip(tipo, razao) {
  const info = TIPOS[tipo];
  const filhos = [
    {
      type: 'element',
      tagName: 'span',
      properties: { className: ['etiqueta', `etiqueta-${tipo}`], title: info.titulo },
      children: [{ type: 'text', value: info.rotulo }],
    },
  ];
  if (razao) {
    filhos.push({
      type: 'element',
      tagName: 'span',
      properties: { className: ['etiqueta-razao'] },
      children: [{ type: 'text', value: razao.trim() }],
    });
  }
  contagem.chips++;
  return filhos;
}

export function rehypeEtiquetas() {
  return tree => {
    // Forma entre crases: o nó é um <code> cujo texto inteiro é a etiqueta.
    visit(tree, 'element', (node, indice, pai) => {
      if (node.tagName !== 'code') return;
      if (!pai || indice === null || indice === undefined) return;
      const texto = (node.children ?? []).map(f => f.value ?? '').join('');
      const m = /^\[(canon|atribu[ií]do|proposta)\]$/i.exec(texto.trim());
      if (!m) return;
      pai.children.splice(indice, 1, ...chip(normalizar(m[1])));
      return [visit.SKIP, indice + 1];
    });

    // Formas nua e com justificativa: vivem em nó de texto.
    visit(tree, 'text', (node, indice, pai) => {
      if (!pai || indice === null || indice === undefined) return;
      if (pai.type === 'element' && (pai.tagName === 'code' || pai.tagName === 'pre')) return;
      if (!PADRAO.test(node.value)) return;
      PADRAO.lastIndex = 0;

      const novos = [];
      let ultimo = 0;
      for (const m of node.value.matchAll(PADRAO)) {
        if (m.index > ultimo) novos.push({ type: 'text', value: node.value.slice(ultimo, m.index) });
        novos.push(...chip(normalizar(m[1]), m[2]));
        ultimo = m.index + m[0].length;
      }
      if (ultimo < node.value.length) novos.push({ type: 'text', value: node.value.slice(ultimo) });

      pai.children.splice(indice, 1, ...novos);
      return [visit.SKIP, indice + novos.length];
    });
  };
}
