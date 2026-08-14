---
id: core.reference-tables
title: "Tabelas de Referência de Personagens"
version: 1.1
layer: core
type: reference-table
status: final
source-file: Tabelas_de_Referencia.md
---

# Tabelas de Referência de Personagens

**Camada de Calibração — a régua de capacidade do sistema**

Esta tabela responde a uma pergunta só: **quanto cada tipo de personagem aguenta** (PV, PS) e com que atributos. Ela é a base contra a qual a futura Tabela de Dano será calibrada — mas não contém dano nenhum. Capacidade defensiva primeiro; dano depois, em documento próprio.

> **Gerada, não digitada.** Cada célula sai das fórmulas do Núcleo. Mudou uma constante, regenera tudo. A Saki real é o teste de regressão: ela reaparece como o Conjurador da faixa Especial.

## Como ler

- **Multiplicador padrão da régua:** PV = (RES + FOR) vezes 30; PS = (RES + VEL) vezes 12. Igual para todos os perfis, para isolar a variável que importa — a forma da build, não a Natureza.

- **Vontade (VON):** a régua usa VON zero. VON soma VON% aos pools quando o narrador concede (a Saki real, com VON 10, tem PV 1452 em vez dos 1320 brutos da régua).

- **PM fica de fora:** é inato (faixa de energia), não vem do investimento em atributos. Entra na dimensão de sustento, separada desta régua.

- **Mesma verba por faixa:** dentro de uma faixa, todos os perfis gastam o mesmo XP em atributos — só distribuem diferente. Concentrar em poucos atributos altos rende menos pontos totais, porque nível alto custa caro (não-linearidade da fórmula de custo).

## Os cinco perfis (formas de build)

- **Equilibrado** — todos os atributos no mesmo nível. A régua central.

- **Tanque** — FOR, RES e DEF altos; lento. Maior PV, maior dano bruto, pior esquiva.

- **Veloz** — VEL e DES altos; RES e FOR baixos. Acerta e esquiva muito, mas frágil.

- **Conjurador** — INT, SAB e RES altos; FOR muito baixo (perfil da Saki). Corpo fraco, mente forte.

- **Frágil/Suporte** — espalhado em mental e social; pools baixos. O piso de combate.

## Faixas (do civil ao transcendente)

As faixas medem **investimento em atributos** — o que move pools e testes. XP total (inflado por idade e história) não entra; só o que foi para atributos.

| Faixa | Nível-base | XP em atributos |
|---|---|---|
| Civil comum | 4 | ~2,160 |
| Treinado | 10 | ~9,765 |
| Veterano | 17 | ~32,265 |
| Elite | 24 | ~78,795 |
| Especial | 33 | ~189,135 |
| Ápice | 50 | ~620,550 |
| Transcendente | 60 | ~1,055,790 |

## Civil comum  (nível-base 4, ~2,160 XP em atributos)

| Perfil | FOR | VEL | DES | DEF | INT | SAB | RES | PRE | CAR | PV | PS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Equilibrado | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 240 | 96 |
| Tanque | 6 | 3 | 3 | 5 | 3 | 3 | 6 | 3 | 3 | 360 | 108 |
| Veloz | 3 | 6 | 6 | 3 | 3 | 3 | 3 | 4 | 3 | 180 | 108 |
| Conjurador | 1 | 4 | 4 | 2 | 5 | 5 | 4 | 4 | 5 | 150 | 96 |
| Frágil/Suporte | 3 | 4 | 4 | 3 | 5 | 5 | 3 | 4 | 5 | 180 | 84 |

## Treinado  (nível-base 10, ~9,765 XP em atributos)

| Perfil | FOR | VEL | DES | DEF | INT | SAB | RES | PRE | CAR | PV | PS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Equilibrado | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 600 | 240 |
| Tanque | 13 | 7 | 7 | 13 | 6 | 8 | 14 | 8 | 8 | 810 | 252 |
| Veloz | 8 | 14 | 14 | 8 | 7 | 9 | 7 | 11 | 8 | 450 | 252 |
| Conjurador | 3 | 10 | 10 | 5 | 12 | 12 | 10 | 9 | 14 | 390 | 240 |
| Frágil/Suporte | 6 | 9 | 9 | 6 | 12 | 13 | 7 | 10 | 14 | 390 | 192 |

## Veterano  (nível-base 17, ~32,265 XP em atributos)

| Perfil | FOR | VEL | DES | DEF | INT | SAB | RES | PRE | CAR | PV | PS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Equilibrado | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 960 | 384 |
| Tanque | 23 | 11 | 11 | 22 | 10 | 13 | 23 | 14 | 13 | 1380 | 408 |
| Veloz | 13 | 23 | 23 | 13 | 12 | 14 | 12 | 18 | 13 | 750 | 420 |
| Conjurador | 5 | 16 | 17 | 8 | 20 | 20 | 17 | 15 | 23 | 660 | 396 |
| Frágil/Suporte | 10 | 16 | 16 | 10 | 19 | 21 | 12 | 18 | 23 | 660 | 336 |

## Elite  (nível-base 24, ~78,795 XP em atributos)

| Perfil | FOR | VEL | DES | DEF | INT | SAB | RES | PRE | CAR | PV | PS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Equilibrado | 24 | 24 | 24 | 24 | 24 | 24 | 24 | 24 | 24 | 1440 | 576 |
| Tanque | 32 | 16 | 16 | 31 | 15 | 18 | 33 | 19 | 18 | 1950 | 588 |
| Veloz | 19 | 33 | 33 | 18 | 17 | 20 | 17 | 25 | 19 | 1080 | 600 |
| Conjurador | 8 | 23 | 24 | 11 | 28 | 28 | 24 | 21 | 32 | 960 | 564 |
| Frágil/Suporte | 15 | 22 | 22 | 15 | 27 | 30 | 17 | 25 | 32 | 960 | 468 |

## Especial  (nível-base 33, ~189,135 XP em atributos)

| Perfil | FOR | VEL | DES | DEF | INT | SAB | RES | PRE | CAR | PV | PS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Equilibrado | 32 | 32 | 32 | 32 | 32 | 32 | 32 | 32 | 32 | 1920 | 768 |
| Tanque | 43 | 22 | 22 | 42 | 20 | 25 | 45 | 26 | 25 | 2640 | 804 |
| Veloz | 26 | 45 | 45 | 24 | 23 | 27 | 23 | 35 | 26 | 1470 | 816 |
| Conjurador | 11 | 32 | 32 | 16 | 38 | 39 | 32 | 29 | 44 | 1290 | 768 |
| Frágil/Suporte | 20 | 30 | 30 | 20 | 37 | 40 | 24 | 34 | 44 | 1320 | 648 |

## Ápice  (nível-base 50, ~620,550 XP em atributos)

| Perfil | FOR | VEL | DES | DEF | INT | SAB | RES | PRE | CAR | PV | PS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Equilibrado | 50 | 50 | 50 | 50 | 50 | 50 | 50 | 50 | 50 | 3000 | 1200 |
| Tanque | 66 | 33 | 33 | 64 | 31 | 38 | 68 | 40 | 38 | 4020 | 1212 |
| Veloz | 39 | 69 | 69 | 37 | 35 | 41 | 35 | 53 | 39 | 2220 | 1248 |
| Conjurador | 16 | 47 | 49 | 23 | 58 | 59 | 49 | 43 | 67 | 1950 | 1152 |
| Frágil/Suporte | 31 | 46 | 46 | 31 | 56 | 61 | 36 | 51 | 67 | 2010 | 984 |

## Transcendente  (nível-base 60, ~1,055,790 XP em atributos)

| Perfil | FOR | VEL | DES | DEF | INT | SAB | RES | PRE | CAR | PV | PS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Equilibrado | 60 | 60 | 60 | 60 | 60 | 60 | 60 | 60 | 60 | 3600 | 1440 |
| Tanque | 79 | 40 | 40 | 76 | 37 | 45 | 82 | 48 | 45 | 4830 | 1464 |
| Veloz | 47 | 83 | 83 | 44 | 41 | 50 | 41 | 64 | 47 | 2640 | 1488 |
| Conjurador | 19 | 57 | 58 | 28 | 69 | 71 | 58 | 51 | 80 | 2310 | 1380 |
| Frágil/Suporte | 37 | 55 | 55 | 37 | 67 | 74 | 43 | 61 | 80 | 2400 | 1176 |

---

*Régua de capacidade fechada. Próxima camada: Tabela de Dano, que mira estes valores de PV para dimensionar quanto cada ataque e cada especial deve causar por faixa.*
