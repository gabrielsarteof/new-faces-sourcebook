import { documentosPublicos, type Publicado } from './documentos';
import type { ItemNav, GrupoNav, MundoNav } from '../domain/navegacao';
export type { ItemNav, GrupoNav, MundoNav } from '../domain/navegacao';
export { mundoDaRota } from '../domain/navegacao';
import { classificacaoPorId } from '../infrastructure/registroDePericias.mjs';
import { ordemDaCategoria, nomeDaCategoria } from '../domain/classificacao';
import { rotuloPluralDoEixo, ordemDoEixo, rotuloDoMundo } from '../data/rotulos';

/**
 * A árvore de navegação, derivada da coleção.
 *
 * Substitui a lista escrita à mão que a fase 1 usava. Documento novo entra na árvore
 * sozinho, no mundo e no eixo dele, sem ninguém editar código — que é o requisito
 * central do projeto.
 *
 * Três decisões de forma, cada uma vinda do que o corpus publica:
 *
 * - o eixo de perícias subdivide por categoria de custo, lida do Registro de
 *   Regentes. É a única classificação que o corpus publica como tabela, e sem ela
 *   um eixo de 21 perícias vira uma lista plana longa demais para escolher
 * - as perícias sem cenário aparecem no eixo de perícias de cada mundo jogável, e
 *   não como mundo próprio. O Índice de Perícias já as lista junto das de Naruto,
 *   porque são jogáveis e apenas não leem fato de cenário
 * - a URL canônica delas continua sendo `/common/skill/...`. Aparecer em mais de um
 *   ponto da navegação com um endereço só é deliberado
 */

/** Mundos que o dock oferece. `common` não é um: as perícias dele moram nos outros. */
export const MUNDOS_NAVEGAVEIS = ['core', 'naruto', 'jujutsu'] as const;

/** Mundos jogáveis, que herdam as perícias sem cenário. */
const MUNDOS_JOGAVEIS = new Set<string>(['naruto', 'jujutsu']);

function item(p: Publicado, emprestado = false): ItemNav {
  return { titulo: p.titulo, rota: p.rota, emprestado };
}

/** Ordena por título, com o índice do eixo sempre primeiro. */
function ordenar(itens: ItemNav[], rotaDoIndice: string | null): ItemNav[] {
  return [...itens].sort((a, b) => {
    if (a.rota === rotaDoIndice) return -1;
    if (b.rota === rotaDoIndice) return 1;
    return a.titulo.localeCompare(b.titulo, 'pt-BR');
  });
}

export async function arvoreDeNavegacao(): Promise<MundoNav[]> {
  const publicos = await documentosPublicos();

  const pericias = publicos
    .filter(p => p.eixo === 'skill')
    .map(p => ({ id: p.id, titulo: p.titulo }));
  const { mapa: classificacao } = classificacaoPorId(pericias);

  const semCenario = publicos.filter(p => p.mundo === 'common');

  const arvore: MundoNav[] = [];

  for (const base of MUNDOS_NAVEGAVEIS) {
    const proprios = publicos.filter(p => p.mundo === base);
    if (proprios.length === 0) continue;

    /*
     * Agrupa por `type`, e não pelo segmento do meio do `id`.
     *
     * Os dois coincidem em 140 dos 157 documentos, porque o corpus nomeia pasta
     * pelo tipo. Nas 17 divergências o segmento é o nome da pasta e o `type` é a
     * natureza real: `naruto.progression.overview` é um `system`, `heart` é `lore`,
     * `item` é `item-catalog`. Agrupar pelo segmento criaria eixos de um item só
     * com nome de pasta, e espalharia os sistemas por seis grupos diferentes.
     *
     * A URL continua saindo do `id`. Endereço e navegação são contratos distintos.
     */
    const porEixo = new Map<string, Publicado[]>();
    for (const p of proprios) {
      const chave = p.tipo;
      if (!porEixo.has(chave)) porEixo.set(chave, []);
      porEixo.get(chave)!.push(p);
    }

    // As perícias sem cenário entram no eixo de perícias dos mundos jogáveis.
    if (MUNDOS_JOGAVEIS.has(base) && semCenario.length > 0) {
      if (!porEixo.has('skill')) porEixo.set('skill', []);
    }

    const grupos: GrupoNav[] = [];

    for (const [eixo, docs] of porEixo) {
      // Um grupo só tem índice próprio quando todos os membros dele compartilham o
      // mesmo prefixo de rota. O grupo Sistemas de Naruto reúne documentos de seis
      // pastas diferentes, e não existe uma página que seja o índice de todos.
      const prefixos = new Set(docs.map(d => (d.eixo ? `/${base}/${d.eixo}` : `/${base}`)));
      const rotaDoIndice = prefixos.size === 1 ? [...prefixos][0]! : null;
      const proprios_ = docs.map(d => item(d));
      const emprestados =
        eixo === 'skill' && MUNDOS_JOGAVEIS.has(base)
          ? semCenario.map(d => item(d, true))
          : [];
      const todos = [...proprios_, ...emprestados];
      if (todos.length === 0) continue;

      // Só o eixo de perícias tem classificação publicada para subdividir.
      let subgrupos: GrupoNav['subgrupos'] = null;
      if (eixo === 'skill') {
        const porCategoria = new Map<string, ItemNav[]>();
        const semCategoria: ItemNav[] = [];
        for (const p of [...docs, ...(emprestados.length ? semCenario : [])]) {
          const cls = classificacao.get(p.id);
          // `base` nunca é `common`, então vir de lá já significa emprestado.
          const it = item(p, p.mundo === 'common');
          if (rotaDoIndice && p.rota === rotaDoIndice) continue; // o índice não entra num subgrupo
          if (!cls) { semCategoria.push(it); continue; }
          const chave = cls.categoria;
          if (!porCategoria.has(chave)) porCategoria.set(chave, []);
          porCategoria.get(chave)!.push(it);
        }
        if (porCategoria.size > 0) {
          subgrupos = [...porCategoria.entries()]
            .sort((a, b) => ordemDaCategoria(a[0]) - ordemDaCategoria(b[0]))
            .map(([categoria, itens]) => ({
              titulo: nomeDaCategoria(categoria),
              itens: ordenar(itens, rotaDoIndice),
              // Preenchido por marcarRotaAtual, que sabe qual rota está sendo lida.
              contemRotaAtual: false,
            }));
          if (semCategoria.length > 0) {
            subgrupos.push({
              titulo: 'Sem classificação',
              itens: ordenar(semCategoria, rotaDoIndice),
              contemRotaAtual: false,
            });
          }
        }
      }

      grupos.push({
        tipo: eixo,
        titulo: rotuloPluralDoEixo(eixo),
        subgrupos,
        itens: ordenar(todos, rotaDoIndice),
        rotaDoIndice,
        // Preenchido por marcarRotaAtual, que sabe qual rota está sendo lida.
        contemRotaAtual: false,
      });
    }

    grupos.sort((a, b) => ordemDoEixo(a.tipo) - ordemDoEixo(b.tipo));

    arvore.push({
      base: `/${base}`,
      rotulo: rotuloDoMundo(base),
      grupos,
      total: proprios.length,
    });
  }

  return arvore;
}

