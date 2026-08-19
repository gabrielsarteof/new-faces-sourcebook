/**
 * Trava a resolução de mundo pela rota.
 *
 * Não depende de `astro:content` porque `mundoDaRota` só opera sobre o array de
 * `MundoNav` que recebe, então roda em `vitest` puro com uma árvore sintética — não
 * precisa do corpus real para validar a lógica de correspondência de prefixo.
 */
import { describe, it, expect } from 'vitest';
import { mundoDaRota, type MundoNav } from '../src/domain/navegacao';

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
