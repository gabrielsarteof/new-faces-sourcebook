/**
 * Mapa de caminho de arquivo para identidade do documento.
 *
 * O plugin de reescrita de link precisa responder "para onde aponta
 * `../skills/katon.md`", e a coleção do Astro é indexada por `id`, não por caminho.
 * Este módulo faz a varredura uma vez e serve os dois sentidos.
 *
 * Vive em infraestrutura porque toca o sistema de arquivos. A regra de derivação de
 * rota continua no domínio; aqui só se lê o disco.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ_CORPUS = path.resolve(AQUI, '../../..');
const PASTAS_DE_CONTEUDO = ['core', 'worlds'];

let cache = null;

function lerFrontMatter(texto) {
  if (!texto.startsWith('---')) return null;
  const fim = texto.indexOf('\n---', 3);
  if (fim < 0) return null;
  const bloco = texto.slice(4, fim);
  const ler = campo => bloco.match(new RegExp(`^${campo}:[ ]*(.+)$`, 'm'))?.[1]?.trim() ?? '';
  const id = ler('id');
  return id ? { id, type: ler('type'), title: ler('title').replace(/^"|"$/g, '') } : null;
}

function varrer(dir, raiz, acc) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { varrer(p, raiz, acc); continue; }
    if (!e.name.endsWith('.md')) continue;
    const dados = lerFrontMatter(fs.readFileSync(p, 'utf8'));
    if (!dados) continue;
    const rel = path.relative(raiz, p).split(path.sep).join('/');
    acc.set(rel, dados);
  }
  return acc;
}

/** Map de caminho relativo à raiz do corpus para `{ id, type, title }`. */
export function mapaDoCorpus() {
  if (cache) return cache;
  const acc = new Map();
  for (const pasta of PASTAS_DE_CONTEUDO) {
    const dir = path.join(RAIZ_CORPUS, pasta);
    if (fs.existsSync(dir)) varrer(dir, RAIZ_CORPUS, acc);
  }
  cache = acc;
  return acc;
}

/** Caminho absoluto da raiz do corpus, para resolver o link relativo à origem. */
export function raizDoCorpus() {
  return RAIZ_CORPUS;
}
