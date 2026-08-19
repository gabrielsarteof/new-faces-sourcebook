/**
 * Forma da árvore de navegação, e a pergunta "que mundo é dono desta rota".
 *
 * Puro: opera só sobre os tipos abaixo, nunca sobre a coleção. `arvoreDeNavegacao`,
 * que monta a árvore a partir do corpus, mora em `application/navegacao.ts` porque
 * depende de `astro:content`; os tipos e `mundoDaRota` moram aqui porque não
 * dependem de nada, e é o que permite testá-los sem o runtime do Astro.
 */

export interface ItemNav {
  titulo: string;
  rota: string;
  /** Verdadeiro quando o item é uma perícia sem cenário exibida dentro de um mundo. */
  emprestado: boolean;
}

export interface GrupoNav {
  /** O `type` que define o grupo. */
  tipo: string;
  titulo: string;
  /** Subgrupos por categoria, quando o eixo tem classificação publicada. */
  subgrupos: { titulo: string; itens: ItemNav[] }[] | null;
  itens: ItemNav[];
  rotaDoIndice: string | null;
}

export interface MundoNav {
  base: string;
  rotulo: string;
  grupos: GrupoNav[];
  total: number;
}

/**
 * O mundo dono da rota, ou `null` quando a rota não pertence a nenhum.
 *
 * Sem fallback de propósito. Uma versão anterior escolhia `arvore[0]` quando a rota
 * não batia com nada, e isso marcava Naruto como mundo ativo tanto na home quanto em
 * qualquer página fora de um mundo — bug real, que apareceu ao desenhar a seção
 * Começar, que também não pertence a mundo nenhum. `null` é a resposta honesta:
 * "esta rota não está dentro de um mundo", e quem chama decide o que fazer com isso.
 *
 * Perícia sem cenário é a única exceção deliberada. `/common/skill/taichi` responde
 * como Naruto, porque o Índice de Perícias já lê aquela perícia como emprestada ao
 * eixo de perícias de Naruto, e o painel deve mostrar o mesmo mundo, não saltar para
 * um índice de "comum" que o dock nem oferece.
 */
export function mundoDaRota(rota: string, arvore: MundoNav[]): MundoNav | null {
  const pertence = (base: string) => rota === base || rota.startsWith(`${base}/`);
  const direto = arvore.filter(m => pertence(m.base)).sort((a, b) => b.base.length - a.base.length)[0];
  if (direto) return direto;
  if (pertence('/common')) return arvore.find(m => m.base === '/naruto') ?? null;
  return null;
}
