// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { remarkLinksInternos } from './src/infrastructure/remarkLinksInternos.mjs';
import { rehypeTabelasRolaveis } from './src/infrastructure/rehypeTabelasRolaveis.mjs';

// Site estático. Não há autenticação, mutação nem estado de servidor: o corpus vira
// HTML na build e o JavaScript só existe nas ilhas declaradas.
export default defineConfig({
  output: 'static',
  markdown: {
    // Reescreve link interno do corpus para rota do site. Sem isto todo link
    // relativo .md entre documentos vira 404.
    remarkPlugins: [remarkLinksInternos],
    // Tabela continua tabela, e rola dentro do próprio contêiner.
    rehypePlugins: [rehypeTabelasRolaveis],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
