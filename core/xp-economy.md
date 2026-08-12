---
id: core.xp-economy
title: "Manual de Economia de XP e Criação de Ficha"
version: 2.1
layer: core
type: system
status: final
source-file: MANUAL_ECONOMIA_XP-1.md
---

# MANUAL DE ECONOMIA DE XP E CRIAÇÃO DE FICHA

Este manual é a autoridade canônica sobre a economia de XP do sistema. Ele substitui integralmente a Referência de Economia de XP anterior. Em caso de conflito entre este manual e qualquer documento de clã, perícia ou técnica escrito antes dele, este manual prevalece e o documento conflitante entra na fila de revisão.

## 1. Visão geral da economia

Toda ficha nasce com dois orçamentos independentes, calculados na criação e gastos em moedas separadas.

O **XP Ficha** é o orçamento estrutural. Ele compra atributos, perícias e técnicas, e define a competência mecânica do personagem.

O **XP Sorte** é o orçamento de destino. Ele compra vantagens e habilidades raras de clã ou ramo, e cresce com desvantagens aceitas. É a moeda que paga linhagem.

O fluxo de criação segue esta ordem: conceito do personagem, definição do Protagonismo, cálculo dos dois orçamentos, gastos, ficha pronta. Após a criação, o XP Total da ficha evolui por concessões manuais do narrador.

```txt
XP Total = XP Ficha base + concessões manuais de XP
XP Restante = XP Total - gastos
```

Gastos entram por atributos, perícias e técnicas. Técnicas não custam XP para NPCs, e níveis concedidos gratuitamente pelo narrador não entram no gasto.

## 2. Protagonismo

O Protagonismo é a alavanca mestra da economia. Ele multiplica o XP Ficha, alimenta o XP Sorte e participa da fórmula de resolução do sistema (`chance_final = chance_base × (1 + multiplicador × P)`). A escala vai de 0 a 10:

```txt
1  Anônimo      sem nome, sem impacto
2  Figurante    aparece na margem, sem papel real
3  Coadjuvante  suporte pontual, não central
4  Aliado       participa ativamente e influencia outros
5  Protagonista herói da própria história, motor dos eventos
6  Referência   conhecido, impactante, seguido por outros
7  Épico        muda eventos maiores que si mesmo
8  Lendário     lembrado por gerações
9  Mítico       redefine o possível no mundo
10 Eterno       transcende escala humana, força da natureza
```

## 3. XP Ficha

```txt
XP Ficha = round(XP Base × Protagonismo × Índice de Idade × Fator de História)
```

**XP Base:** 3000, universal para todos os sistemas (Genérico, Jujutsu e o RPG de Naruto).

**Índice de Idade:**

```txt
Índice de Idade = 1 + 0.111 × ln(1 + 5 × max(0, idade - 18)²)
```

Até 18 anos o índice é 1. Acima disso, cresce logaritmicamente. Marcos aproximados:

```txt
18 anos  1.000
20 anos  1.339
25 anos  1.646
30 anos  1.782
40 anos  1.934
50 anos  2.025
```

**Fator de História:**

```txt
Fator de História = 1 + (Pontos de História efetivos / 10)
```

Para personagens com menos de 20 anos, os pontos de história efetivos são limitados por um teto:

```txt
HMax = max(0, (idade - 6) × 10)
```

Com 6 anos ou menos, a história efetiva é 0. A partir de 20 anos não existe teto.

**Exemplo de referência:** personagem de 18 anos, Protagonismo 5, 20 pontos de história. HMax = 120, então os 20 pontos entram inteiros. XP Ficha = round(3000 × 5 × 1.0 × 3.0) = 45000.

## 4. XP Sorte

```txt
XP Sorte base = 500 + (Protagonismo × 150) + (D100 × D20) + (Protagonismo × D100)
```

As rolagens de D100 e D20 são feitas na criação. O orçamento disponível evolui assim:

```txt
XP Sorte disponível = XP Sorte base + XP ganho por desvantagens - XP gasto
```

Desvantagens aceitas aumentam o ganho. Vantagens compradas, habilidades raras de clã ou ramo e ajustes por remoção ou troca aumentam o gasto. Os núcleos de clã (Uchiha 1600, Uzumaki 900, Senju 900, Hyūga teto 700) e a fórmula de Escassez do Sangue são precificados nesta moeda, conforme os documentos de clã.

Contratos de vínculo com espécie invocável também correm nesta moeda quando o personagem os traz da história pregressa, precificados pelo que a espécie alcança, e o catálogo de cada cenário publica a tabela. O contrato obtido durante a campanha é evento do mundo e não passa por aqui, porque esta moeda é orçamento de criação.

**O teto de 1600 vale entre clãs.** Ele impede que um clã futuro iguale ou exceda o Uchiha, e não governa o que não é clã. Ativo do mundo com ficha própria, roster e agência é outra espécie de compra, e o cenário que a precifique acima do teto declara a passagem no documento que a publica.

## 5. Atributos

Custo individual para subir um atributo para o nível L:

```txt
Custo(L) = round((50 + 1.1 × (L² - 1)) / 5) × 5
```

Marcos de custo individual:

```txt
LV1  50    LV10 160   LV26 795
LV5  75    LV18 405   LV34 1320
```

Custo acumulado nos marcos de requisito de perícia:

```txt
LV2  105    LV12 1305   LV26 8095
LV6  395    LV18 3200   LV34 16715
```

Modificadores que alteram o preço final: descontos de clã por atributo, reduções globais de custo de atributo concedidas por vantagens, bônus de XP convertidos em multiplicador de custo. O arredondamento por floor é aplicado em cada nível pago, individualmente.

## 6. Perícias

Esta economia governa o custo em XP e o requisito de atributo por nível. A estrutura da perícia, o bônus por nível e a largura por caminho adicional leem o Núcleo de Perícias v2.

Custo base por nível, antes do multiplicador de categoria:

```txt
LV1 750    LV3 2250   LV5 6750
LV2 1125   LV4 4125   LV6 10125
```

Multiplicadores por categoria e custos resolvidos (arredondamento por floor em cada nível):

```txt
Físico    ×1.0   750 / 1125 / 2250 / 4125 / 6750 / 10125
Prático   ×1.1   825 / 1237 / 2475 / 4537 / 7425 / 11137
Mental    ×1.2   900 / 1350 / 2700 / 4950 / 8100 / 12150
Social    ×1.3   975 / 1462 / 2925 / 5362 / 8775 / 13162
Chakra    ×1.4  1050 / 1575 / 3150 / 5775 / 9450 / 14175
Ninjutsu  ×1.5  1125 / 1687 / 3375 / 6187 / 10125 / 15187
Erudição  ×1.7  1275 / 1912 / 3825 / 7012 / 11475 / 17212
```

### 6.1 As três categorias do eixo do chakra

Estas três substituem a categoria única **Ninja**, que cobrava o mesmo preço de
doze domínios que não custam a mesma coisa para aprender. O critério de
separação é **o que o praticante faz com a energia**, e ele decide todos os
casos sem julgamento caso a caso.

**Chakra ×1,4 — você opera a energia bruta.** O praticante manipula o chakra
como ele é, sem convertê-lo em outra coisa: molda, conduz, retém, esconde,
percebe. É o degrau mais barato do eixo porque é o mais próximo do que todo
shinobi já faz por formação, e porque é pré-requisito estrutural de quase tudo
que vem depois. Cobra acima de Social porque exige treino dedicado que a
população geral não tem.

**Ninjutsu ×1,5 — você muda o que a energia é.** O praticante converte chakra em
outra natureza e a governa depois de convertida. Cobra acima de Chakra porque a
conversão é competência adicional sobre a operação, e não substituta dela: quem
transforma precisa antes moldar.

**Erudição ×1,7 — arte codificada, com mestre e doutrina.** O praticante opera um
corpo de conhecimento que não se descobre sozinho na prática. Tem literatura,
tem escola, tem termo técnico e tem erro que só um mestre corrige. É o degrau
mais caro porque o custo real de aprendizado não está na energia, está no
acesso: o cânone registra a raridade de praticantes reais nesses três domínios
apesar de a matéria-prima ser comum.

O rateio segue a mesma regra de floor das demais categorias, aplicado nível a
nível.

Requisito de atributo por nível da perícia:

```txt
LV1 atributo 2    LV3 atributo 12   LV5 atributo 26
LV2 atributo 6    LV4 atributo 18   LV6 atributo 34
```

Bônus geral acumulado da perícia: lê o Núcleo de Perícias v2, onde a Base de Nível corre em 12, 24, 32, 40, 45 e 50. Esta economia não redefine esses valores.

## 7. Inclinações, Caminhos e Transcendências

**Inclinação** é a especialização interna da perícia. No LV2 o personagem escolhe uma inclinação; no LV3 ela aprofunda. Bônus: LV2 +5, LV3 +10. A primeira inclinação está embutida no custo normal da perícia. Uma inclinação extra pode ser comprada a partir do LV2 pelo preço de LV2 da perícia; avançar essa inclinação extra para LV3 custa esse mesmo preço novamente.

**Caminho** é a rota técnica dentro de uma inclinação, existente nos níveis LV4 e LV5. No LV4 o personagem escolhe um caminho ligado a uma inclinação em LV3; o primeiro caminho está embutido no custo do LV4. No LV5 o caminho principal sobe junto. Caminhos extras exigem perícia LV4 ou superior, caminho principal já escolhido, a inclinação correspondente em LV3, e não podem repetir caminho já adquirido.

Custo de caminho extra (50% do custo do nível na categoria, floor):

```txt
Físico:    LV4 2062 / LV5 3375
Prático:   LV4 2268 / LV5 3712
Mental:    LV4 2475 / LV5 4050
Social:    LV4 2681 / LV5 4387
Chakra:    LV4 2887 / LV5 4725
Ninjutsu:  LV4 3093 / LV5 5062
Erudição:  LV4 3506 / LV5 5737
```

Cada caminho extra adquirido também eleva o bônus geral da perícia pelo fator de largura declarado no Núcleo de Perícias v2, de 0,10 sobre a Base de Nível.

**Transcendência** é o ápice da perícia no LV6. A primeira transcendência está embutida no custo normal do LV6 e exige ao menos um caminho relacionado em LV5. Transcendências extras custam o preço cheio do LV6 da categoria.

## 8. Naturezas

A Natureza humana define os multiplicadores de recursos da ficha:

```txt
Protagonista  PV 30 / PM 15 / PS 12
Duelista      PV 25 / PM 10 / PS 15
Atirador      PV 10 / PM 10 / PS 25
Vanguarda     PV 30 / PM 5  / PS 10
Controlador   PV 15 / PM 18 / PS 15
Estrategista  PV 15 / PM 20 / PS 10
Suporte       PV 10 / PM 25 / PS 10
```

Bônus de PV e PS provenientes de qualquer outra fonte (clã, vantagem, técnica) são expressos como adições ao multiplicador de Natureza, nunca somados diretamente ao valor final do pool.

As naturezas de transformação de chakra (Fogo, Vento, Relâmpago, Terra e Água) são afinidades elementais selecionáveis e não possuem custo de XP próprio; seus custos operacionais vivem no Sistema Elemental e nas perícias de Transformação de Natureza.

## 9. Regras transversais de cálculo

1. Custos de chakra e de XP são números fixos absolutos. Percentuais existem apenas em bônus de teste, escalonamento de magnitude e nas frações definidas neste manual (caminho extra a 50%).
2. Arredondamentos: atributos usam round ao múltiplo de 5 na fórmula de custo e floor em cada nível pago; perícias e frações de caminho usam floor; o XP Ficha usa round no resultado final.
3. A ordem de operações é sempre a da fórmula escrita. Nenhuma etapa intermediária é arredondada além das regras acima.
4. Bônus de pool de atributos de escala alta (RES, SAB) não entram como insumo da fórmula de RC.

## Anexo A. Decisões de auditoria consolidadas

1. A transcendência exige ao menos um caminho relacionado em LV5. A implementação que exigia todos os caminhos relacionados está incorreta e deve ser corrigida no código.
2. Caminhos existem apenas em LV4 e LV5. As tabelas de caminho LV6 presentes no código são dados mortos e devem ser removidas.
3. O XP Base é 3000 para todos os sistemas. Referências antigas a base 2500 estão obsoletas.
4. O comentário de migração sobre a fórmula antiga de sorte é resíduo de código sem efeito de regra e deve ser limpo.
