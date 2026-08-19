import { defineConfig } from 'vitest/config';

/**
 * Config própria, e não herdada.
 *
 * Sem este arquivo o vitest sobe a árvore e encontra o vite.config.ts do criador de
 * fichas, carregando o plugin React e o padrão de include dele. O site é outro
 * projeto, dentro de outro repositório, e não deve tomar emprestada a configuração
 * de build de ninguém.
 */
export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'node',
  },
});
