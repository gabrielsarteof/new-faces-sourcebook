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

/**
 * Ícone de cada mundo no dock.
 *
 * Traçado SVG, separado por ` M` para virar vários `path`. Fica junto dos rótulos
 * porque é a mesma natureza: apresentação, não dado do corpus.
 */
const ICONES: Record<string, string> = {
  core: 'M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z M22 17.65l-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65 M22 12.65l-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65',
  naruto: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5Z',
  jujutsu: 'M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
};

export function iconeDoMundo(mundo: string): string[] {
  const bruto = ICONES[mundo];
  if (!bruto) return ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z'];
  return bruto.split(' M').map((d, i) => (i === 0 ? d : `M${d}`));
}
