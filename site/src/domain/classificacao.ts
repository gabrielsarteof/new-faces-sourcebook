/**
 * Vocabulário de classificação que o corpus publica, e como o site o ordena.
 *
 * O corpus classifica perícia por categoria de custo e por atributo regente, e
 * classifica técnica por rank. Nada disso é invenção do site: a categoria e o
 * regente saem do Registro de Regentes que o Índice de Perícias publica como tabela,
 * e o rank sai das seções `## Rank X` dos compêndios.
 *
 * O que mora aqui é só a ordem e o rótulo. Puro, sem Astro e sem disco.
 */

/** Categorias de custo, na ordem em que o Manual de Economia de XP as apresenta. */
export const CATEGORIAS = [
  'Físico ×1,0',
  'Prático ×1,1',
  'Chakra ×1,4',
  'Ninjutsu ×1,5',
  'Erudição ×1,7',
] as const;

export type Categoria = (typeof CATEGORIAS)[number];

/** Do mais barato ao mais caro, que é como o jogador compara. */
export function ordemDaCategoria(categoria: string): number {
  const i = CATEGORIAS.indexOf(categoria as Categoria);
  return i === -1 ? CATEGORIAS.length : i;
}

/** Só o nome, sem o multiplicador, para título de grupo. */
export function nomeDaCategoria(categoria: string): string {
  return categoria.replace(/\s*×.*$/, '').trim();
}

/** Ranks do mais acessível ao mais alto. */
export const RANKS = ['E', 'D', 'C', 'B', 'A', 'S'] as const;
export type Rank = (typeof RANKS)[number];

export function ordemDoRank(rank: string): number {
  const i = RANKS.indexOf(rank.toUpperCase() as Rank);
  return i === -1 ? RANKS.length : i;
}

export function ehRank(valor: string): valor is Rank {
  return (RANKS as readonly string[]).includes(valor.toUpperCase());
}

/**
 * Etiqueta de fundamento.
 *
 * Toda afirmação de design do corpus carrega marca: o que a obra declara, o que ela
 * mostra sem nomear, e o que o sistema cria. São 280 ocorrências no corpo dos
 * documentos, e hoje renderizam como texto entre colchetes. É a informação mais
 * consequente para quem lê uma regra e precisa saber de onde ela vem.
 */
export const ETIQUETAS = {
  canon: { rotulo: 'canon', titulo: 'A obra declara' },
  atribuido: { rotulo: 'atribuído', titulo: 'A obra mostra sem nomear' },
  proposta: { rotulo: 'proposta', titulo: 'O sistema cria' },
} as const;

export type Etiqueta = keyof typeof ETIQUETAS;

/** Normaliza a forma escrita no corpo para a chave da etiqueta. */
export function etiquetaDe(texto: string): Etiqueta | null {
  const chave = texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
  if (chave === 'canon') return 'canon';
  if (chave === 'atribuido') return 'atribuido';
  if (chave === 'proposta') return 'proposta';
  return null;
}

/** Atributos regentes, com o nome por extenso que o corpus usa. */
const REGENTES: Record<string, string> = {
  FOR: 'Força',
  DES: 'Destreza',
  VEL: 'Velocidade',
  RES: 'Resistência',
  INT: 'Inteligência',
  SAB: 'Sabedoria',
  PRE: 'Presença',
  PER: 'Percepção',
  CAR: 'Carisma',
};

export function nomeDoRegente(sigla: string): string {
  return REGENTES[sigla.toUpperCase()] ?? sigla;
}
