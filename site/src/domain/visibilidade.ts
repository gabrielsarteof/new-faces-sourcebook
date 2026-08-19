/**
 * Quem entra no site público.
 *
 * A visibilidade deriva de `type`, com falha fechada em tipo desconhecido. O
 * princípio é que o site publica material de consumo final, não material de
 * metodologia: um manual que ensina a criar perícias é instrução de autoria, não
 * regra que o jogador aplica na mesa.
 *
 * A alternativa considerada e recusada era exigir dois campos novos de front matter
 * em todos os 183 documentos. Ela travava o site inteiro atrás de uma migração
 * editorial e contradizia o acompanhamento automático, porque um documento novo sem
 * os campos quebraria a build justamente no evento que ela existe para servir.
 *
 * Puro. Não conhece Astro, nem sistema de arquivos.
 */

/** Tipos cujo conteúdo é material de consumo final. */
export const TIPOS_PUBLICOS = new Set([
  'technique',
  'skill',
  'system',
  'clan',
  'compendium',
  'lineage',
  'core-layer',
  'catalog',
  'reference-table',
  'reincarnation',
  'lore',
  'doc',
  'item-catalog',
  'power',
  'extension',
]);

/**
 * Tipos deliberadamente fora, com a razão.
 *
 * Existem como lista nomeada, e não apenas como ausência da lista acima, para que a
 * build saiba distinguir "decidimos que não" de "ninguém classificou ainda".
 */
export const TIPOS_PRIVADOS = new Map([
  ['methodology', 'instrução de autoria, não regra jogável'],
  ['template', 'gabarito de autoria'],
  ['campaign', 'material de mesa sobre a campanha'],
  ['pending-patch', 'patch em trânsito, não documento publicado'],
]);

export type Classificacao =
  | { publico: true }
  | { publico: false; razao: string; conhecido: boolean };

/** Classifica um `type`, tratando o desconhecido como privado e sinalizável. */
export function classificar(type: string): Classificacao {
  if (TIPOS_PUBLICOS.has(type)) return { publico: true };
  const razao = TIPOS_PRIVADOS.get(type);
  if (razao) return { publico: false, razao, conhecido: true };
  return {
    publico: false,
    razao: `tipo desconhecido "${type}", tratado como privado até ser classificado`,
    conhecido: false,
  };
}

export function ehPublico(type: string): boolean {
  return classificar(type).publico;
}
