/**
 * Trava a derivação de rota contra o corpus real.
 *
 * A regra é que a URL sai do `id` por transformação mecânica, sem dicionário. O que
 * este teste protege não é o algoritmo em abstrato, é a promessa de que ele produz
 * uma rota distinta para cada documento publicado e que o índice de uma categoria
 * fica acima dos membros dela.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join, sep } from 'node:path';
import { rotaDoId, eixoDoId, mundoDoId, rotaDoEixo, rotaDeIntegracao } from '../src/domain/rota';

const RAIZ_CORPUS = join(process.cwd(), '..');
const IGNORADOS = new Set(['.git', 'tools', 'site', 'node_modules']);

function documentos(dir: string, acc: { id: string; type: string }[] = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (!IGNORADOS.has(e.name)) documentos(join(dir, e.name), acc);
      continue;
    }
    if (!e.name.endsWith('.md')) continue;
    const texto = readFileSync(join(dir, e.name), 'utf8');
    if (!texto.startsWith('---')) continue;
    const fim = texto.indexOf('\n---', 3);
    if (fim < 0) continue;
    const fm = texto.slice(4, fim);
    const ler = (campo: string) => fm.match(new RegExp(`^${campo}:[ ]*(.+)$`, 'm'))?.[1]?.trim() ?? '';
    const id = ler('id');
    if (id) acc.push({ id, type: ler('type') });
  }
  return acc;
}

const corpus = documentos(RAIZ_CORPUS);

describe('derivação de rota', () => {
  it('encontra o corpus a partir do site', () => {
    expect(corpus.length).toBeGreaterThan(150);
  });

  it('dá uma rota distinta para cada documento, sem colisão', () => {
    const porRota = new Map<string, string[]>();
    for (const d of corpus) {
      const r = rotaDoId(d.id);
      if (!porRota.has(r)) porRota.set(r, []);
      porRota.get(r)!.push(d.id);
    }
    const colisoes = [...porRota.entries()].filter(([, ids]) => ids.length > 1);
    expect(colisoes, `rotas duplicadas: ${JSON.stringify(colisoes)}`).toEqual([]);
    expect(porRota.size).toBe(corpus.length);
  });

  it('omite o terminal de índice e mantém o resto intacto', () => {
    expect(rotaDoId('naruto.skill.katon')).toBe('/naruto/skill/katon');
    expect(rotaDoId('naruto.skill.overview')).toBe('/naruto/skill');
    expect(rotaDoId('naruto.overview')).toBe('/naruto');
    expect(rotaDoId('core.xp-economy')).toBe('/core/xp-economy');
    expect(rotaDoId('common.skill.taichi')).toBe('/common/skill/taichi');
  });

  it('põe o índice de categoria acima dos membros dela', () => {
    // A errata que normalizou os overview para o singular existe para isto valer.
    const indices = corpus.filter(d => d.id.endsWith('.overview') && d.id.split('.').length === 3);
    for (const indice of indices) {
      const prefixo = indice.id.slice(0, -'.overview'.length);
      const membros = corpus.filter(d => d.id.startsWith(prefixo + '.') && !d.id.endsWith('.overview'));
      const rotaIndice = rotaDoId(indice.id);
      for (const m of membros) {
        expect(rotaDoId(m.id), `${m.id} deveria ficar sob ${rotaIndice}`).toMatch(
          new RegExp(`^${rotaIndice}/`),
        );
      }
    }
  });

  it('separa mundo e eixo pelo formato do id', () => {
    expect(mundoDoId('naruto.skill.katon')).toBe('naruto');
    expect(eixoDoId('naruto.skill.katon')).toBe('skill');
    expect(rotaDoEixo('naruto.skill.katon')).toBe('/naruto/skill');
    // Núcleo tem dois segmentos e por isso não tem eixo.
    expect(eixoDoId('core.xp-economy')).toBeNull();
    expect(rotaDoEixo('core.xp-economy')).toBeNull();
  });

  it('oferece endereço de integração imune a mudança de rota', () => {
    expect(rotaDeIntegracao('naruto.skill.katon')).toBe('/d/naruto.skill.katon');
  });

  it('recusa id vazio em vez de produzir uma rota inválida', () => {
    expect(() => rotaDoId('')).toThrow();
  });
});
