// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Site estático. Não há autenticação, mutação nem estado de servidor: o corpus vira
// HTML na build e o JavaScript só existe nas ilhas declaradas.
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
