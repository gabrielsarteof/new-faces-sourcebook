/**
 * Trava a resolução de mundo pela rota.
 *
 * Não depende de `astro:content` porque `mundoDaRota` só opera sobre o array de
 * `MundoNav` que recebe, então roda em `vitest` puro com uma árvore sintética — não
 * precisa do corpus real para validar a lógica de correspondência de prefixo.
 */
import { describe, it, expect } from 'vitest';
import { mundoDaRota, marcarRotaAtual, type MundoNav } from '../src/domain/navegacao';

function mundo(base: string): MundoNav {
  return { base, rotulo: base.slice(1), grupos: [], total: 0 };
}

const arvore: MundoNav[] = [mundo('/core'), mundo('/naruto'), mundo('/jujutsu')];

describe('mundoDaRota', () => {
  it('acha o mundo dono da rota', () => {
    expect(mundoDaRota('/naruto/skill/katon', arvore)?.base).toBe('/naruto');
    expect(mundoDaRota('/naruto', arvore)?.base).toBe('/naruto');
  });

  it('devolve null para rota fora de qualquer mundo, sem fallback', () => {
    // A versão anterior caía em arvore[0] aqui, marcando Naruto como ativo na home
    // e em qualquer página futura — bug real que a seção Começar expôs.
    expect(mundoDaRota('/', arvore)).toBeNull();
    expect(mundoDaRota('/comecar', arvore)).toBeNull();
  });

  it('não confunde prefixo parcial com pertencimento', () => {
    // /narutox não é /naruto, mesmo que startsWith ingênuo diga que sim.
    expect(mundoDaRota('/narutox', arvore)).toBeNull();
  });

  it('lê perícia sem cenário como pertencente a Naruto', () => {
    expect(mundoDaRota('/common/skill/taichi', arvore)?.base).toBe('/naruto');
  });

  it('devolve null para common quando Naruto não existe na árvore', () => {
    expect(mundoDaRota('/common/skill/taichi', [mundo('/core')])).toBeNull();
  });
});

describe('marcarRotaAtual', () => {
  const item = (rota: string) => ({ titulo: rota, rota, emprestado: false });

  const arvoreComGrupos = (): MundoNav[] => [
    {
      base: '/naruto',
      rotulo: 'Naruto',
      total: 5,
      grupos: [
        {
          tipo: 'skill',
          titulo: 'Perícias',
          rotaDoIndice: '/naruto/skill',
          itens: [item('/naruto/skill/katon'), item('/naruto/skill/taichi')],
          contemRotaAtual: false,
          subgrupos: [
            { titulo: 'Ninjutsu', itens: [item('/naruto/skill/katon')], contemRotaAtual: false },
            { titulo: 'Físico', itens: [item('/naruto/skill/taichi')], contemRotaAtual: false },
          ],
        },
        {
          tipo: 'clan',
          titulo: 'Clãs',
          rotaDoIndice: '/naruto/clan',
          itens: [item('/naruto/clan/uchiha')],
          contemRotaAtual: false,
          subgrupos: null,
        },
      ],
    },
  ];

  it('abre só o grupo e o subgrupo que contêm a rota', () => {
    const [naruto] = marcarRotaAtual(arvoreComGrupos(), '/naruto/skill/katon');
    const pericias = naruto!.grupos[0]!;
    const clas = naruto!.grupos[1]!;

    expect(pericias.contemRotaAtual).toBe(true);
    expect(clas.contemRotaAtual, 'grupo sem a rota deve continuar fechado').toBe(false);
    expect(pericias.subgrupos!.find(s => s.titulo === 'Ninjutsu')!.contemRotaAtual).toBe(true);
    expect(
      pericias.subgrupos!.find(s => s.titulo === 'Físico')!.contemRotaAtual,
      'subgrupo irmão sem a rota deve continuar fechado',
    ).toBe(false);
  });

  it('abre o grupo quando a rota é o próprio índice do eixo', () => {
    // Ler /naruto/skill deve abrir Perícias, não deixar tudo fechado.
    const [naruto] = marcarRotaAtual(arvoreComGrupos(), '/naruto/skill');
    expect(naruto!.grupos[0]!.contemRotaAtual).toBe(true);
  });

  it('abre o grupo sem subgrupos quando a rota está nele', () => {
    const [naruto] = marcarRotaAtual(arvoreComGrupos(), '/naruto/clan/uchiha');
    expect(naruto!.grupos[1]!.contemRotaAtual).toBe(true);
    expect(naruto!.grupos[0]!.contemRotaAtual).toBe(false);
  });

  it('deixa tudo fechado quando a rota não está em grupo nenhum', () => {
    const [naruto] = marcarRotaAtual(arvoreComGrupos(), '/naruto/algo-que-nao-existe');
    expect(naruto!.grupos.every(g => !g.contemRotaAtual)).toBe(true);
  });

  it('não modifica a árvore recebida', () => {
    const original = arvoreComGrupos();
    marcarRotaAtual(original, '/naruto/skill/katon');
    expect(original[0]!.grupos[0]!.contemRotaAtual, 'deve ser pura, sem efeito colateral').toBe(false);
  });
});
