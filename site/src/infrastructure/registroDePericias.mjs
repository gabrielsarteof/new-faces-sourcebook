/**
 * Lê a classificação de perícia do Registro de Regentes.
 *
 * O Índice de Perícias publica uma tabela com `Perícia | Versão | Regente |
 * Categoria de custo`, e ela é o registro oficial da classificação. Extraí-la é ler
 * o que o manual publica, não adivinhar: a alternativa seria varrer a prosa de cada
 * documento, onde só 13 das 28 trazem a categoria em linha estruturada.
 *
 * O casamento entre linha e documento é por nome, porque o registro nomeia a perícia
 * pelo título e não pelo `id`. Nome que não casa vira aviso, nunca palpite.
 *
 * Vive em infraestrutura porque lê disco. A ordem e os rótulos ficam no domínio.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ_CORPUS = path.resolve(AQUI, '../../..');
const INDICE = path.join(RAIZ_CORPUS, 'worlds/naruto/skills/overview.md');
const CABECALHO = '| Perícia | Versão | Regente | Categoria de custo |';

let cache = null;

const normalizar = s =>
  s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');

/** Linhas cruas do registro: `{ nome, versao, regente, categoria }`. */
export function linhasDoRegistro() {
  if (!fs.existsSync(INDICE)) return [];
  const texto = fs.readFileSync(INDICE, 'utf8');
  const inicio = texto.indexOf(CABECALHO);
  if (inicio < 0) return [];

  const linhas = [];
  for (const linha of texto.slice(inicio).split('\n').slice(2)) {
    if (!linha.startsWith('|')) break;
    const celulas = linha.split('|').map(c => c.trim()).filter(Boolean);
    if (celulas.length < 4) continue;
    linhas.push({ nome: celulas[0], versao: celulas[1], regente: celulas[2], categoria: celulas[3] });
  }
  return linhas;
}

/**
 * Map de `id` de perícia para a classificação dela.
 *
 * Recebe a lista de documentos de perícia para casar por título. O casamento tolera
 * o sufixo entre parênteses que alguns títulos carregam, como "Katon (火遁)".
 */
export function classificacaoPorId(periciasDoCorpus) {
  if (cache) return cache;

  const registro = linhasDoRegistro();
  const mapa = new Map();
  const semDocumento = [];

  for (const linha of registro) {
    const alvo = periciasDoCorpus.find(p => {
      const tituloLimpo = p.titulo.replace(/\s*\(.*?\)\s*$/, '');
      return (
        normalizar(tituloLimpo) === normalizar(linha.nome) ||
        normalizar(p.titulo) === normalizar(linha.nome)
      );
    });
    if (!alvo) { semDocumento.push(linha.nome); continue; }
    mapa.set(alvo.id, {
      regente: linha.regente,
      categoria: linha.categoria,
      versaoNoRegistro: linha.versao,
    });
  }

  const semRegistro = periciasDoCorpus.filter(p => !mapa.has(p.id)).map(p => p.id);
  cache = { mapa, semDocumento, semRegistro, total: registro.length };
  return cache;
}
