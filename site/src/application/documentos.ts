import { getCollection, type CollectionEntry } from 'astro:content';
import { classificar } from '../domain/visibilidade';
import { rotaDoId, mundoDoId, eixoDoId } from '../domain/rota';

/**
 * Orquestra a leitura do corpus.
 *
 * Aplica o filtro de visibilidade **antes** de qualquer artefato, que é a invariante
 * mais importante do pipeline: documento privado não pode existir em HTML, em
 * índice de busca, em sitemap nem em manifesto. Filtrar na apresentação seria
 * esconder na interface algo que já foi publicado.
 *
 * Depende de `astro:content` e por isso vive na camada de aplicação, não no domínio.
 */

export type Documento = CollectionEntry<'documentos'>;

export interface Publicado {
  entrada: Documento;
  id: string;
  titulo: string;
  tipo: string;
  versao: string;
  mundo: string;
  eixo: string | null;
  rota: string;
}

function publicado(entrada: Documento): Publicado {
  const { id, title, type, version } = entrada.data;
  return {
    entrada,
    id,
    titulo: title,
    tipo: type,
    versao: version,
    mundo: mundoDoId(id),
    eixo: eixoDoId(id),
    rota: rotaDoId(id),
  };
}

/** Documentos que podem virar página, já filtrados e ordenados por rota. */
export async function documentosPublicos(): Promise<Publicado[]> {
  const todos = await getCollection('documentos');
  return todos
    .filter(e => classificar(e.data.type).publico)
    .map(publicado)
    .sort((a, b) => a.rota.localeCompare(b.rota));
}

/**
 * O que ficou de fora, com a razão, para o relatório de build.
 *
 * Existe porque "sumiu" e "foi deixado de fora de propósito" precisam ser
 * distinguíveis. Um tipo desconhecido aparece aqui marcado como não classificado.
 */
export async function documentosOmitidos(): Promise<
  { id: string; tipo: string; razao: string; conhecido: boolean }[]
> {
  const todos = await getCollection('documentos');
  const fora: { id: string; tipo: string; razao: string; conhecido: boolean }[] = [];
  for (const e of todos) {
    const c = classificar(e.data.type);
    if (c.publico) continue;
    fora.push({ id: e.data.id, tipo: e.data.type, razao: c.razao, conhecido: c.conhecido });
  }
  return fora;
}

/** Índice por rota, para resolver link interno sem varrer a coleção de novo. */
export async function porRota(): Promise<Map<string, Publicado>> {
  const publicos = await documentosPublicos();
  return new Map(publicos.map(p => [p.rota, p]));
}

/** Índice por id, que é a chave que a proveniência da aplicação cita. */
export async function porId(): Promise<Map<string, Publicado>> {
  const publicos = await documentosPublicos();
  return new Map(publicos.map(p => [p.id, p]));
}

/* ── Índices de categoria ──────────────────────────────────────────────────── */

export interface Indice {
  rota: string;
  /** Mundo do índice, e eixo quando o índice é de eixo. */
  mundo: string;
  eixo: string | null;
  /** Documentos que o índice reúne, já ordenados. */
  membros: Publicado[];
}

/**
 * Índices que o corpus **não** publica como documento e o site precisa gerar.
 *
 * A regra é uma só: se `<mundo>.<eixo>.overview` existe, aquela rota é do documento e
 * não entra aqui. Se não existe, o site gera a lista. Isso faz a errata que criar o
 * documento melhorar a página sem mudança de código, e evita que um eixo grande fique
 * inalcançável enquanto ninguém escreve a prosa dele.
 *
 * Hoje isso cobre a raiz de `core` e de `common`, e os eixos de compêndio e técnica de
 * Naruto, que são os dois maiores do corpus e os únicos sem índice autorado.
 */
export async function indicesGerados(): Promise<Indice[]> {
  const publicos = await documentosPublicos();
  const reivindicadas = new Set(publicos.map(p => p.rota));

  const porMundo = new Map<string, Publicado[]>();
  const porEixo = new Map<string, Publicado[]>();

  for (const p of publicos) {
    if (!porMundo.has(p.mundo)) porMundo.set(p.mundo, []);
    porMundo.get(p.mundo)!.push(p);
    if (!p.eixo) continue;
    const chave = `${p.mundo}/${p.eixo}`;
    if (!porEixo.has(chave)) porEixo.set(chave, []);
    porEixo.get(chave)!.push(p);
  }

  const indices: Indice[] = [];

  for (const [mundo, membros] of porMundo) {
    const rota = `/${mundo}`;
    if (reivindicadas.has(rota)) continue;
    indices.push({ rota, mundo, eixo: null, membros });
  }

  for (const [chave, membros] of porEixo) {
    const rota = `/${chave}`;
    if (reivindicadas.has(rota)) continue;
    const [mundo, eixo] = chave.split('/');
    indices.push({ rota, mundo: mundo!, eixo: eixo!, membros });
  }

  return indices.sort((a, b) => a.rota.localeCompare(b.rota));
}

/** Agrupa os documentos de um mundo por eixo, para montar índice e navegação. */
export function agruparPorEixo(membros: Publicado[]): Map<string, Publicado[]> {
  const grupos = new Map<string, Publicado[]>();
  for (const m of membros) {
    const chave = m.eixo ?? '';
    if (!grupos.has(chave)) grupos.set(chave, []);
    grupos.get(chave)!.push(m);
  }
  return grupos;
}
