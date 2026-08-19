/**
 * Fonte única da navegação.
 *
 * O dock escolhe o mundo e o painel mostra os documentos dele, que é a mesma
 * relação que SystemSidebar e QuickSwitchPanel têm no criador: o dock seleciona a
 * seção, o painel lista os itens. Os dois leem daqui para não divergirem.
 *
 * Na fase 2 os itens passam a ser resolvidos por `id` contra o corpus, e a build
 * falha quando um id citado aqui não existe ou não é publicável. Enquanto o
 * pipeline não existe, os caminhos são os que a derivação de rota produzirá.
 */

export interface Item {
  rotulo: string;
  href: string;
}

export interface Grupo {
  titulo: string;
  itens: Item[];
}

export interface Mundo {
  /** Prefixo de rota que identifica o mundo. `/` é a home. */
  base: string;
  rotulo: string;
  /** Caminho SVG do ícone do dock. */
  icone: string;
  grupos: Grupo[];
}

export const MUNDOS: Mundo[] = [
  {
    base: '/',
    rotulo: 'Início',
    icone: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10',
    grupos: [
      {
        titulo: 'Começar',
        itens: [
          { rotulo: 'Visão geral', href: '/' },
          { rotulo: 'Criar personagem', href: '/naruto/character-creation' },
          { rotulo: 'Cálculos rápidos', href: '/naruto/quick-calculations' },
        ],
      },
      {
        titulo: 'Mundos',
        itens: [
          { rotulo: 'Regras de núcleo', href: '/core' },
          { rotulo: 'Perícias comuns', href: '/common' },
          { rotulo: 'Naruto', href: '/naruto' },
          { rotulo: 'Jujutsu Kaisen', href: '/jujutsu' },
        ],
      },
    ],
  },
  {
    base: '/core',
    rotulo: 'Núcleo',
    icone:
      'M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z M22 17.65l-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65 M22 12.65l-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65',
    grupos: [
      {
        titulo: 'Economia e ficha',
        itens: [
          { rotulo: 'Economia de XP', href: '/core/xp-economy' },
          { rotulo: 'Núcleo do sistema', href: '/core/system-core' },
          { rotulo: 'Fator de Cânone', href: '/core/canon-factor' },
          { rotulo: 'Treinamento', href: '/core/training' },
        ],
      },
      {
        titulo: 'Perícias e combate',
        itens: [
          { rotulo: 'Núcleo de Perícias', href: '/core/skills-core' },
          { rotulo: 'Núcleo de Combate', href: '/core/combat-core' },
          { rotulo: 'Efeitos de status', href: '/core/status-effects' },
        ],
      },
      {
        titulo: 'Catálogos',
        itens: [
          { rotulo: 'Vantagens', href: '/core/advantages' },
          { rotulo: 'Desvantagens', href: '/core/disadvantages' },
          { rotulo: 'Tabelas de referência', href: '/core/reference-tables' },
          { rotulo: 'Cálculos rápidos', href: '/core/quick-calculations' },
        ],
      },
    ],
  },
  {
    base: '/common',
    rotulo: 'Comum',
    icone:
      'M8.3 10a.7.7 0 0 1-.63-1.08L11.4 3a.7.7 0 0 1 1.2-.04L16.3 8.9a.7.7 0 0 1-.57 1.1Z M3 14h7v7H3z M17.5 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z',
    grupos: [
      {
        titulo: 'Perícias sem cenário',
        itens: [
          { rotulo: 'Taichi', href: '/common/skill/taichi' },
          { rotulo: 'Kenpo', href: '/common/skill/kenpo' },
          { rotulo: 'Katana', href: '/common/skill/katana' },
          { rotulo: 'Aikidō', href: '/common/skill/aikido' },
        ],
      },
    ],
  },
  {
    base: '/naruto',
    rotulo: 'Naruto',
    icone:
      'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5Z',
    grupos: [
      {
        titulo: 'Começar',
        itens: [
          { rotulo: 'Visão geral', href: '/naruto' },
          { rotulo: 'Criar personagem', href: '/naruto/character-creation' },
          { rotulo: 'Cálculos rápidos', href: '/naruto/quick-calculations' },
        ],
      },
      {
        titulo: 'Perícias',
        itens: [
          { rotulo: 'Índice de Perícias', href: '/naruto/skill' },
          { rotulo: 'Controle de Chakra', href: '/naruto/skill/chakra-control' },
          { rotulo: 'Katon', href: '/naruto/skill/katon' },
          { rotulo: 'Raiton', href: '/naruto/skill/raiton' },
          { rotulo: 'Suiton', href: '/naruto/skill/suiton' },
          { rotulo: 'Doton', href: '/naruto/skill/doton' },
          { rotulo: 'Fūton', href: '/naruto/skill/futon' },
        ],
      },
      {
        titulo: 'Clãs e linhagens',
        itens: [
          { rotulo: 'Clãs', href: '/naruto/clan' },
          { rotulo: 'Uchiha', href: '/naruto/clan/uchiha' },
          { rotulo: 'Senju', href: '/naruto/clan/senju' },
          { rotulo: 'Linhagens', href: '/naruto/lineage' },
        ],
      },
      {
        titulo: 'Técnicas',
        itens: [
          { rotulo: 'Compêndio de Katon', href: '/naruto/compendium/katon' },
          { rotulo: 'Rasengan', href: '/naruto/technique/rasengan' },
        ],
      },
    ],
  },
  {
    base: '/jujutsu',
    rotulo: 'Jujutsu',
    icone:
      'M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
    grupos: [
      {
        titulo: 'Cenário',
        itens: [
          { rotulo: 'Visão geral', href: '/jujutsu' },
          { rotulo: 'Técnicas', href: '/jujutsu/technique' },
          { rotulo: 'Clãs', href: '/jujutsu/clan' },
          { rotulo: 'Linhagens', href: '/jujutsu/lineage' },
        ],
      },
    ],
  },
];

/** Mundo que responde pela rota, com a home como fallback. */
export function mundoDaRota(rota: string): Mundo {
  const candidatos = MUNDOS.filter(m => m.base !== '/' && rota.startsWith(m.base));
  // O mais específico vence, que é a mesma regra de precedência do corpus.
  const escolhido = candidatos.sort((a, b) => b.base.length - a.base.length)[0];
  return escolhido ?? MUNDOS[0]!;
}
