/**
 * Trava a leitura do Registro de Regentes contra o corpus real.
 *
 * A hierarquia de perícia por categoria depende inteiramente desta tabela. Se o
 * registro deixar de casar com os documentos, a navegação silenciosamente perde
 * perícias — e perder em silêncio é o modo de falha que este projeto mais evita.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { linhasDoRegistro, classificacaoPorId } from '../src/infrastructure/registroDePericias.mjs';
import { CATEGORIAS, ordemDaCategoria, nomeDaCategoria, ordemDoRank, etiquetaDe, nomeDoRegente } from '../src/domain/classificacao';

const RAIZ = join(process.cwd(), '..');
const IGNORADOS = new Set(['.git', 'tools', 'site', 'node_modules']);

function pericias(dir: string, acc: { id: string; titulo: string }[] = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) { if (!IGNORADOS.has(e.name)) pericias(join(dir, e.name), acc); continue; }
    if (!e.name.endsWith('.md')) continue;
    const t = readFileSync(join(dir, e.name), 'utf8');
    if (!t.startsWith('---')) continue;
    const fim = t.indexOf('\n---', 3);
    if (fim < 0) continue;
    const fm = t.slice(4, fim);
    const ler = (c: string) => fm.match(new RegExp(`^${c}:[ ]*(.+)$`, 'm'))?.[1]?.trim().replace(/^"|"$/g, '') ?? '';
    if (ler('type') === 'skill' && !ler('id').endsWith('.overview')) {
      acc.push({ id: ler('id'), titulo: ler('title') });
    }
  }
  return acc;
}

const doCorpus = pericias(RAIZ);

describe('Registro de Regentes', () => {
  it('acha a tabela e lê todas as linhas', () => {
    expect(linhasDoRegistro().length).toBeGreaterThanOrEqual(26);
  });

  it('casa quase toda perícia do corpus com a linha dela', () => {
    const { mapa, semRegistro, semDocumento } = classificacaoPorId(doCorpus);
    expect(semDocumento, 'linha do registro sem documento correspondente').toEqual([]);
    // Enton é lacuna de propagação conhecida: foi publicada depois da última
    // revisão do Índice. Uma segunda ausência significa registro parando de valer.
    expect(semRegistro.length, `perícias fora do registro: ${semRegistro.join(', ')}`).toBeLessThanOrEqual(1);
    expect(mapa.size).toBeGreaterThanOrEqual(26);
  });

  it('só produz categorias que o domínio conhece', () => {
    const { mapa } = classificacaoPorId(doCorpus);
    const desconhecidas = [...mapa.values()]
      .map(v => v.categoria)
      .filter(c => !CATEGORIAS.includes(c as never));
    expect(desconhecidas, 'categoria nova no corpus, sem ordem definida').toEqual([]);
  });

  it('ordena categoria do mais barato ao mais caro', () => {
    expect(ordemDaCategoria('Físico ×1,0')).toBeLessThan(ordemDaCategoria('Ninjutsu ×1,5'));
    expect(ordemDaCategoria('Ninjutsu ×1,5')).toBeLessThan(ordemDaCategoria('Erudição ×1,7'));
    // Categoria nova vai para o fim, e não some.
    expect(ordemDaCategoria('Inventada ×9')).toBe(CATEGORIAS.length);
  });

  it('separa o nome do multiplicador', () => {
    expect(nomeDaCategoria('Erudição ×1,7')).toBe('Erudição');
  });

  it('ordena rank do acessível ao alto', () => {
    expect(ordemDoRank('E')).toBeLessThan(ordemDoRank('S'));
    expect(ordemDoRank('e')).toBe(ordemDoRank('E'));
  });

  it('reconhece as três etiquetas de fundamento, com e sem acento', () => {
    expect(etiquetaDe('canon')).toBe('canon');
    expect(etiquetaDe('atribuído')).toBe('atribuido');
    expect(etiquetaDe('Atribuido')).toBe('atribuido');
    expect(etiquetaDe('proposta')).toBe('proposta');
    expect(etiquetaDe('qualquer')).toBeNull();
  });

  it('traduz sigla de regente, e devolve a sigla quando não conhece', () => {
    expect(nomeDoRegente('INT')).toBe('Inteligência');
    expect(nomeDoRegente('XYZ')).toBe('XYZ');
  });
});
