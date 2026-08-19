/**
 * Trava o filtro de publicação contra o corpus real.
 *
 * O que este teste protege é a falha fechada: um `type` que ninguém classificou
 * precisa nascer privado e aparecer num relatório, nunca vazar por omissão. O caso
 * caro não é esconder um documento público, que é visível e barato de corrigir, é
 * publicar material de mesa ou de metodologia.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { classificar, ehPublico, TIPOS_PUBLICOS, TIPOS_PRIVADOS } from '../src/domain/visibilidade';

const RAIZ_CORPUS = join(process.cwd(), '..');
const IGNORADOS = new Set(['.git', 'tools', 'site', 'node_modules']);

function documentos(dir: string, acc: { id: string; type: string; caminho: string }[] = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (!IGNORADOS.has(e.name)) documentos(join(dir, e.name), acc);
      continue;
    }
    if (!e.name.endsWith('.md')) continue;
    const caminho = join(dir, e.name);
    const texto = readFileSync(caminho, 'utf8');
    if (!texto.startsWith('---')) continue;
    const fim = texto.indexOf('\n---', 3);
    if (fim < 0) continue;
    const fm = texto.slice(4, fim);
    const ler = (campo: string) => fm.match(new RegExp(`^${campo}:[ ]*(.+)$`, 'm'))?.[1]?.trim() ?? '';
    const id = ler('id');
    if (id) acc.push({ id, type: ler('type'), caminho });
  }
  return acc;
}

const corpus = documentos(RAIZ_CORPUS);

describe('visibilidade derivada de type', () => {
  it('classifica todo documento do corpus, sem tipo órfão', () => {
    const desconhecidos = corpus
      .filter(d => {
        const c = classificar(d.type);
        return !c.publico && !c.conhecido;
      })
      .map(d => `${d.id} (type: ${d.type})`);
    expect(
      desconhecidos,
      'tipo não classificado; some do site em silêncio até entrar numa das duas listas',
    ).toEqual([]);
  });

  it('mantém metodologia, gabarito, campanha e patch fora', () => {
    for (const type of TIPOS_PRIVADOS.keys()) expect(ehPublico(type)).toBe(false);
    const privados = corpus.filter(d => !ehPublico(d.type));
    // Os que a auditoria identificou: 5 methodology, 3 campaign, 2 pending-patch, 1 template.
    expect(privados.length).toBe(11);
  });

  it('não deixa nenhum documento de campanha ou metodologia escapar', () => {
    const vazados = corpus.filter(
      d => ehPublico(d.type) && /campaign|methodology|template|pending-patch/.test(d.type),
    );
    expect(vazados.map(d => d.id)).toEqual([]);
  });

  it('pega os dois de metodologia que moram fora de core/', () => {
    // A lista de privados montada por caminho, e não por type, perdeu estes dois.
    for (const id of ['naruto.system.compendium-standard', 'naruto.system.jutsu-authoring']) {
      const doc = corpus.find(d => d.id === id);
      expect(doc, `${id} sumiu do corpus`).toBeDefined();
      expect(ehPublico(doc!.type), `${id} deveria ser privado`).toBe(false);
    }
  });

  it('trata tipo novo como privado, com razão legível', () => {
    const c = classificar('tipo-que-ninguem-inventou-ainda');
    expect(c.publico).toBe(false);
    if (!c.publico) {
      expect(c.conhecido).toBe(false);
      expect(c.razao).toContain('desconhecido');
    }
  });

  it('publica a maioria do corpus, senão o filtro está errado', () => {
    const publicos = corpus.filter(d => ehPublico(d.type));
    expect(publicos.length).toBe(172);
    expect(TIPOS_PUBLICOS.size).toBeGreaterThan(TIPOS_PRIVADOS.size);
  });
});
