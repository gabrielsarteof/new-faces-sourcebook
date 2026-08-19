/**
 * Rótulos de interface.
 *
 * Traduzir `type` e mundo para português é copy de interface, não vocabulário de
 * domínio: o dado continua sendo o `type` que o corpus publica, e a URL continua
 * derivando do `id` sem dicionário. O que se nomeia aqui é a seção que o leitor vê.
 *
 * Tipo desconhecido cai no próprio nome e ganha aviso de build. Nunca some da
 * navegação por não estar nesta tabela, porque a tabela é apresentação e não
 * autorização — quem decide o que publica é `domain/visibilidade.ts`.
 */

interface Eixo {
  rotulo: string;
  /** Plural, para o índice do eixo. */
  plural: string;
  /** Menor aparece antes na navegação. */
  ordem: number;
}

const EIXOS: Record<string, Eixo> = {
  doc: { rotulo: 'Visão geral', plural: 'Visão geral', ordem: 0 },
  'core-layer': { rotulo: 'Camada de núcleo', plural: 'Camadas de núcleo', ordem: 10 },
  system: { rotulo: 'Sistema', plural: 'Sistemas', ordem: 20 },
  skill: { rotulo: 'Perícia', plural: 'Perícias', ordem: 30 },
  compendium: { rotulo: 'Compêndio', plural: 'Compêndios de técnicas', ordem: 40 },
  technique: { rotulo: 'Técnica', plural: 'Técnicas', ordem: 50 },
  clan: { rotulo: 'Clã', plural: 'Clãs', ordem: 60 },
  lineage: { rotulo: 'Linhagem', plural: 'Linhagens', ordem: 70 },
  reincarnation: { rotulo: 'Reencarnação', plural: 'Reencarnações', ordem: 80 },
  power: { rotulo: 'Poder', plural: 'Poderes', ordem: 90 },
  extension: { rotulo: 'Extensão', plural: 'Extensões', ordem: 100 },
  catalog: { rotulo: 'Catálogo', plural: 'Catálogos', ordem: 110 },
  'item-catalog': { rotulo: 'Itens', plural: 'Catálogos de itens', ordem: 120 },
  'reference-table': { rotulo: 'Tabela', plural: 'Tabelas de referência', ordem: 130 },
  lore: { rotulo: 'Ambientação', plural: 'Ambientação', ordem: 140 },
};

const MUNDOS: Record<string, string> = {
  core: 'Núcleo',
  common: 'Comum',
  naruto: 'Naruto',
  jujutsu: 'Jujutsu Kaisen',
};

export function rotuloDoEixo(eixo: string): string {
  return EIXOS[eixo]?.rotulo ?? eixo;
}

export function rotuloPluralDoEixo(eixo: string): string {
  return EIXOS[eixo]?.plural ?? eixo;
}

export function ordemDoEixo(eixo: string): number {
  // Eixo sem rótulo vai para o fim, mas continua aparecendo.
  return EIXOS[eixo]?.ordem ?? 999;
}

export function eixoConhecido(eixo: string): boolean {
  return eixo in EIXOS;
}

export function rotuloDoMundo(mundo: string): string {
  return MUNDOS[mundo] ?? mundo;
}

export function mundoConhecido(mundo: string): boolean {
  return mundo in MUNDOS;
}
