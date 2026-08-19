/**
 * Derivação de rota a partir do `id` do front matter.
 *
 * O `id` é a identidade pública estável do documento. A rota sai dele por
 * transformação mecânica, sem dicionário de tradução: traduzir exigiria um
 * vocabulário que o site inventa, e nomenclatura pertence ao corpus.
 *
 * Puro. Não conhece Astro, nem sistema de arquivos.
 */

/** Segmento terminal que representa o índice de uma categoria, e some da rota. */
const TERMINAL_DE_INDICE = 'overview';

/**
 * `naruto.skill.katon` vira `/naruto/skill/katon`.
 * `naruto.skill.overview` vira `/naruto/skill`.
 * `naruto.overview` vira `/naruto`.
 * `core.xp-economy` vira `/core/xp-economy`.
 */
export function rotaDoId(id: string): string {
  const segmentos = id.split('.').filter(Boolean);
  if (segmentos.length === 0) throw new Error('id vazio');
  if (segmentos[segmentos.length - 1] === TERMINAL_DE_INDICE) segmentos.pop();
  return '/' + segmentos.join('/');
}

/** O caminho sem a barra inicial, que é o formato que o getStaticPaths do Astro quer. */
export function parametroDaRota(id: string): string {
  return rotaDoId(id).slice(1);
}

/** Endereço de integração, imune a qualquer mudança de rota legível. */
export function rotaDeIntegracao(id: string): string {
  return `/d/${id}`;
}

/**
 * O mundo a que o documento pertence, lido do primeiro segmento do `id`.
 *
 * `core` e `common` são camadas e não cenários, mas ocupam o mesmo nível na rota e
 * na navegação, então respondem pela mesma função.
 */
export function mundoDoId(id: string): string {
  return id.split('.')[0] ?? '';
}

/**
 * O eixo de leitura, que é o segmento de tipo do `id`, quando existe.
 *
 * Ids de núcleo têm dois segmentos (`core.xp-economy`) e por isso não têm eixo: são
 * doze documentos e uma lista só basta. Ids de cenário têm três
 * (`naruto.skill.katon`) e o do meio é o eixo.
 */
export function eixoDoId(id: string): string | null {
  const segmentos = id.split('.').filter(Boolean);
  return segmentos.length >= 3 ? segmentos[1]! : null;
}

/** A rota do índice do eixo, quando o documento tem eixo. */
export function rotaDoEixo(id: string): string | null {
  const mundo = mundoDoId(id);
  const eixo = eixoDoId(id);
  return eixo ? `/${mundo}/${eixo}` : null;
}
