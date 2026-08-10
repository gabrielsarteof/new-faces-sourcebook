---
id: naruto.system.jutsu-authoring-addendum
title: "Adendo ao Manual de Criação de Jutsus — Seção 4.1.3"
version: 2
layer: scenario
scenario: naruto
type: pending-patch
status: pending-patch
source-file: Adendo_MCJ_v2_Secao_4_1_3.md
---

# Adendo ao Manual de Criação de Jutsus v2
## Seção 4.1.3 · Estimativa de XP sem RC

**Ponto de inserção.** Imediatamente após a seção 4.1.1 e antes da 4.1.2. A numeração das seções seguintes não muda.

---

### 4.1.3 Estimativa de XP sem RC

A seção 4.1.1 apura o XP a partir do custo de RC, e por isso só funciona depois que a técnica já foi construída. O compêndio de um domínio precisa publicar preço antes disso, porque o jogador decide a compra na criação de personagem e a ficha completa só é produzida para o que foi efetivamente adquirido. Esta seção fornece a estimativa que ocupa esse intervalo.

**Quando se usa.** Enquanto a técnica não possuir ficha individual com custo de RC apurado. Publicada a ficha, a apuração da 4.1.1 substitui a estimativa.

**O que a estimativa mede.** O consumo de reserva, que é a mesma grandeza que o RC mede. A leitura é feita sobre a descrição canônica da técnica, respondendo três perguntas.

Quanta matéria a técnica põe em campo, indo de nenhuma a um construto, a vários, a uma massa e a um campo inteiro. Por quanto tempo ela cobra, indo de instantânea a sustentada, a persistente depois da execução, a permanente até o fim da cena. Quantas coisas ela faz ao mesmo tempo, indo de um efeito a um efeito com rider elevado, a dois efeitos, a efeito somado a terreno que habilita o restante do arsenal.

**A moldagem não entra na estimativa.** O degrau de Controle de Chakra já foi pago na compra daquela perícia, e cobrá-lo de novo na técnica é taxar a mesma dificuldade duas vezes. A leitura publicada na 4.1.1 sustenta isso ao explicar o Chidori, que fica junto ao piso do rank A porque o poder dele vem de uma moldagem barata para quem já carrega a perícia, e não da reserva que ele queima.

---

#### Escala de Posição

As respostas põem a técnica em um dos cinco degraus, e cada degrau é uma posição fixa dentro da faixa do rank.

| Degrau | Posição | Perfil |
|---|---|---|
| 1 | 10% | escopo mínimo do rank, instantânea, um efeito |
| 2 | 25% | o padrão do rank |
| 3 | 40% | acima do padrão em escala ou em duração |
| 4 | 60% | eleva categoria de escopo dentro do próprio rank |
| 5 | 85% | o extremo do rank |

**Modificador de dependência.** Técnica que só executa a partir de matéria já presente no campo, ou a partir de insumo selado que o usuário precise carregar, desce um degrau, com piso no degrau 1. A dependência reduz o que a técnica precisa produzir do próprio chakra.

**Modificador de campo.** Técnica que deixa matéria utilizável em campo depois da execução, inclusive em suspensão, sobe um degrau, com teto no degrau 5. O volume produzido excede o que o efeito imediato consome.

Os dois modificadores se aplicam na mesma leitura e podem se cancelar.

---

#### Matriz de estimativa

O cruzamento entre rank e degrau produz o valor diretamente, sem cálculo em mesa. Os valores saem de `piso_XP + posição × (teto_XP − piso_XP)` sobre as faixas da seção 4.1 e são exatos, sem arredondamento.

| Rank | Degrau 1 | Degrau 2 | Degrau 3 | Degrau 4 | Degrau 5 |
|---|---|---|---|---|---|
| E | 130 | 175 | 220 | 280 | 355 |
| D | 480 | 600 | 720 | 880 | 1.080 |
| C | 1.430 | 1.775 | 2.120 | 2.580 | 3.155 |
| B | 3.950 | 4.625 | 5.300 | 6.200 | 7.325 |
| A | 9.200 | 11.000 | 12.800 | 15.200 | 18.200 |
| S | 23.000 | 27.500 | 32.000 | 38.000 | 45.500 |

Kinjutsu fica fora da estimativa pela mesma razão que fica fora da interpolação, que é a ausência de teto. O custo é definido pelo Narrador, com o piso de 50.000 inviolável.

---

#### Calibração

A estimativa não pode contradizer os quatro pontos que a 4.1.1 já fixou pela interpolação de RC.

| Jutsu | Posição apurada por RC | Degrau atribuído pela escala | Posição da escala |
|---|---|---|---|
| Chidori, rank A | 6% | 1 | 10% |
| Kirin, rank S | 12% | 1 | 10% |
| Goukakyuu, rank C | 23% | 2 | 25% |
| Rasengan, rank B | 29% | 2 | 25% |

Os quatro caem dentro de quatro pontos percentuais do valor apurado e nenhum troca de degrau. Que nenhuma âncora canônica ultrapasse trinta por cento é leitura correta e não desvio da escala: os degraus 4 e 5 pertencem ao que eleva categoria de escopo dentro do próprio rank, e a obra produz poucas técnicas assim por faixa.

---

#### Ordem de aplicação

O valor da matriz ocupa a posição do XP_base. Sobre ele incidem os extras de comportamento da seção 4.1.2 e, por último, os modificadores da seção 4.2, na mesma ordem e com a mesma convenção de arredondamento que a apuração por RC.

---

#### Convivência com a apuração definitiva

**O valor estimado é o que vale no momento da compra.** Quando a ficha individual da técnica for produzida e a interpolação da 4.1.1 apontar outro número, a ficha corrige o registro dali em diante e não retroage sobre quem já pagou. Sem essa garantia a estimativa deixa de ser um portão de decisão confiável, que é a única razão de ela existir.

Divergência entre a estimativa e a apuração não invalida a escala. Ela indica que a técnica consome mais ou menos reserva do que a descrição sugeria, e a correção é da entrada, não do método.

---

#### Publicação

O compêndio do domínio publica apenas o número, sem o degrau e sem a derivação, conforme a seção 10 da Norma de Produção de Compêndios. A leitura que produziu o degrau é reproduzível a partir desta seção e da própria descrição da entrada, e por isso não precisa ser carregada no catálogo.
