import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * O corpus como coleção.
 *
 * O site mora dentro do repositório do sourcebook, então o conteúdo entra por
 * caminho relativo: `../core` e `../worlds`. Não há submódulo, clone, resolução de
 * SHA nem cópia. A revisão que a build lê é a revisão do commit que a disparou.
 *
 * O padrão restringe a leitura às duas pastas de documento. `tools/`, `claude/`,
 * `site/` e a raiz ficam de fora por construção, e não por exclusão, o que evita que
 * um diretório novo entre no inventário sem ninguém decidir.
 *
 * O schema é o contrato que o corpus publica hoje, medido nos 183 documentos. Campo
 * novo aqui é errata no corpus primeiro, nunca invenção do site.
 */
const documentos = defineCollection({
  loader: glob({
    base: '../',
    pattern: '{core,worlds}/**/*.md',
    // A chave da entrada é o `id` do front matter, não o caminho: é ele que a rota
    // e a proveniência citam, e é ele que sobrevive a mover o arquivo de pasta.
    generateId: ({ data }) => String(data.id),
  }),
  schema: z.object({
    id: z.string().min(1),
    title: z.string().min(1),
    /** Vem como 4.1 ou como 2, e o YAML entrega número; alguns vêm como texto. */
    version: z.union([z.number(), z.string()]).transform(String),
    layer: z.enum(['core', 'scenario']),
    type: z.string().min(1),
    status: z.string().min(1),
    /** Ausente nos 16 documentos de núcleo. */
    scenario: z.string().nullish(),
    /**
     * Ausente em alguns, e escrito como `null` explícito em outros. `nullish` cobre
     * os dois; `optional` sozinho recusa o `null` que o YAML de fato entrega.
     */
    'source-file': z.string().nullish(),
    /** Presente em quinze, aponta o documento que este substitui. */
    supersedes: z.union([z.string(), z.array(z.string())]).nullish(),
  }),
});

export const collections = { documentos };
