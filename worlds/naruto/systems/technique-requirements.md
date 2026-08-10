---
id: naruto.system.technique-requirements
title: "Manual de Requisitos de Técnica"
version: 1
layer: scenario
scenario: naruto
type: system
status: final
source-file: Manual_de_Requisitos_de_Tecnica.md
---

# Manual de Requisitos de Técnica

Governa os portões de acesso a técnicas do RPG Canônico 1:1 de Naruto. Define o que um shinobi precisa ter na ficha para executar uma técnica, e nada além disso.

Este documento não trata de dano, custo de chakra, canalização ou efeito, que pertencem ao Manual de Criação de Jutsus. Não trata de camada de acesso, autoria ou etiquetagem editorial, que pertencem à Norma de Produção de Compêndios.

---

## 1. Os dois eixos

Uma técnica cobra duas coisas diferentes, e o sistema precisa de uma porta para cada.

**Profundidade.** Até onde o shinobi levou aquela linha de estudo. É medida pelo nível de perícia e governada pelo portão de rank.

**Domínio.** Quanta maestria acumulada o refinamento daquela técnica exige. É medida pela Base da perícia e governada pelo portão de Base.

Rank mede volume, custo e alcance do efeito. Nenhuma dessas três coisas diz quanto refinamento a técnica cobra, e é por isso que o portão de rank sozinho trata como iguais duas técnicas de mesmo rank com exigências de controle opostas.

---

## 2. Portão de rank

O nível da perícia relevante define o rank máximo acessível.

| Nível | Rank destravado |
|---|---|
| LV1 | E |
| LV2 | D |
| LV3 | C |
| LV4 | B |
| LV5 | A |
| LV6 | S |

Regra universal, sem exceção por domínio. Vale para as sete naturezas, para o Ninjutsu Médico e para todo domínio que venha a existir.

---

## 3. Portão de Base

### 3.1 O driver

A exigência de domínio deriva do **coeficiente técnico** da técnica, que já é declarado por toda técnica do sistema e mede quanto ela aproveita o refinamento de moldagem.

| Dependência de moldagem | coef_técnica | Exemplo |
|---|---|---|
| A técnica existe pela moldagem | 3,0 | Rasengan |
| Alta, a moldagem é o mecanismo central | 2,0 | Chidori, Raikiri |
| Média, a moldagem intensifica o efeito | 1,0 | Katon genérico, Chidori Nagashi |
| Baixa, a moldagem é auxiliar | 0,5 | Taijutsu infundido simples |
| Nenhuma, força bruta | 0,0 | Projétil sem forma |

**O coeficiente é contínuo.** A tabela acima serve como âncora de referência e não como lista fechada. Uma técnica pode declarar 1,4 ou 2,6, e a granularidade é o que produz exigência distinta entre técnicas do mesmo rank.

### 3.2 A fórmula

```
Base exigida = piso do rank + arredondar( (coef_técnica ÷ 3,0) × amplitude )
```

O **piso** é a Base que o nível de rank já concede a um praticante de caminho único. A **amplitude** é o quanto aquele nível alcança comprando largura até cinco caminhos.

| Rank | Nível | Piso | Amplitude | Faixa |
|---|---|---|---|---|
| E | LV1 | 20 | 8 | 20 a 28 |
| D | LV2 | 40 | 16 | 40 a 56 |
| C | LV3 | 55 | 20 | 55 a 75 |
| B | LV4 | 70 | 28 | 70 a 98 |
| A | LV5 | 80 | 32 | 80 a 112 |
| S | LV6 | 90 | 36 | 90 a 126 |

### 3.3 Tabelas resolvidas

| coef | E | D | C | B | A | S |
|---|---|---|---|---|---|---|
| 0,0 | 20 | 40 | 55 | 70 | 80 | 90 |
| 0,5 | 21 | 43 | 58 | 75 | 85 | 96 |
| 1,0 | 23 | 45 | 62 | 79 | 91 | 102 |
| 1,5 | 24 | 48 | 65 | 84 | 96 | 108 |
| 2,0 | 25 | 51 | 68 | 89 | 101 | 114 |
| 2,5 | 27 | 53 | 72 | 93 | 107 | 120 |
| 3,0 | 28 | 56 | 75 | 98 | 112 | 126 |

Valores intermediários se calculam pela fórmula. As colunas existem para consulta rápida, não para substituí-la.

### 3.4 Como a Base é lida

O portão lê o **bonusGeral** da ficha, que é a Base acumulada da perícia mais o acréscimo por caminhos adicionais.

O portão não lê o teste final. Teste final varia com o tipo de teste, com a inclinação empregada, com a especialização do caminho e com modificadores de clã e de vantagem, o que o tornaria inconferível e diferente a cada rolagem. A Base é um número único por perícia na ficha.

O atributo fica deliberadamente de fora. O portão mede maestria construída, não talento.

### 3.5 Abaixo do rank B

Caminhos exigem perícia LV4 ou superior e a inclinação-mãe em LV3. Nos ranks E, D e C o praticante não possui caminhos, e sua Base é fixa no valor do nível.

Nesses ranks, uma exigência acima do piso se cumpre **avançando o nível da perícia**, e não comprando largura. Uma técnica de rank E com coeficiente 3,0 exige Base 28, valor que só se alcança no LV2.

Isso reproduz um comportamento canônico conhecido: existem técnicas de rank baixo que um iniciante não executa, não por falta de poder, mas por falta de precisão de moldagem.

---

## 4. Ajuste declarado

Técnica cuja exigência de controle não corresponde à sua dependência de moldagem pode declarar um ajuste de **até dez pontos**, para cima ou para baixo, sobre o valor da fórmula.

Três condições. O ajuste traz motivo escrito na entrada. Ele nunca leva a Base exigida abaixo do piso do rank. E ele é exceção, de modo que se aparecer na maioria das entradas de um rank, o problema está na calibragem daquele rank e não nas técnicas.

---

## 5. Requisitos que já existiam

Este documento reúne, sem alterar, os portões que o sistema já operava.

**Natureza.** Técnica de natureza exige a perícia daquela natureza. Sem ela, a técnica é inexecutável, e não apenas mais cara. Naturezas do eixo do Onmyōton seguem a mesma regra das elementais.

**Afinidade.** Praticante que executa fora da própria afinidade paga o custo declarado multiplicado por 1,3 e sofre a penalidade de teste da Escada de Afinidade. Isso encarece a execução e não bloqueia o acesso.

**Controle de Chakra.** Técnica pode declarar nível mínimo de Controle de Chakra, independente da perícia do domínio.

**Requisitos não mecânicos.** Contrato de invocação, condição de campo, fisiologia específica e demais exigências declaradas pela entrada.

---

## 6. Declaração na entrada

Toda técnica declara seus requisitos em bloco próprio, na ordem:

```
Rank: A
coef_técnica: 2,0
Requisitos: Perícia de Raiton LV5 · Base 101 · Controle de Chakra LV4
```

Quando houver ajuste declarado, ele aparece com o motivo:

```
Requisitos: Perícia de Katon LV6 · Base 120 (ajuste +6, a técnica exige sustentação
simultânea de três focos) · Controle de Chakra LV5
```

---

## 7. Fronteira com a camada de acesso

O portão de rank e o portão de Base são objetivos e verificáveis na ficha, o que os situa integralmente dentro da camada **Requisito Mecânico** da Norma de Produção de Compêndios.

Eles convivem com qualquer camada de acesso e não a substituem. Uma técnica de Patrimônio de Vila continua exigindo justificativa na ficção, e uma técnica de Autoria Aberta continua indisponível na criação, independentemente de quanta Base o personagem possua.

Entrada que já declara requisito de caminho específico não recebe portão de Base, porque o caminho é exigência mais estreita e a soma dos dois cobraria a mesma coisa duas vezes.

---

## 8. Pendências

`[pendente]` **As âncoras canônicas de validação precisam ser recalculadas.** A tabela de validação do Manual de Criação de Jutsus emprega valores de bônus de Controle de Chakra de 43 para Kakashi, 50 para Sasuke jounin, 65 para Sasuke adulto e 85 para a Saki. Esses valores pertencem à escala antiga da Base, na qual 43 correspondia a um praticante avançado. Na escala vigente, 43 cai perto do LV2.

`[pendente]` **A quantidade consumida pelas fórmulas de dano precisa ser declarada.** O termo `bônus_CC` aparece descrito no Manual como indo de +2 a cerca de +90, faixa que corresponde ao total de Base mais especialização de uma versão anterior, e não à Base isolada. Enquanto isso não for resolvido, o mesmo nome designa duas quantidades diferentes.

`[pendente]` **A escala de dificuldade não existe em documento algum.** O Núcleo declara `limiar = (teste ÷ dificuldade fixada) × 50` e nenhuma tabela de dificuldade foi publicada. O portão de Base não depende dela, porque compara valores diretos, mas toda técnica que resolve por teste depende.

---

## 9. Documentos relacionados

Manual de Criação de Jutsus, para rank, custo, canalização, coeficientes e dano. Núcleo do Sistema, para a resolução de testes. Guia de Criação de Perícias e MANUAL_ECONOMIA_XP, para a composição da Base. Sistema Elemental, para a Escada de Afinidade e o multiplicador de dispersão. Norma de Produção de Compêndios, para camadas de acesso e formato de entrada.
