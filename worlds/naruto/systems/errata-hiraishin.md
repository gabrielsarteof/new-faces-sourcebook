---
id: naruto.system.errata-hiraishin
title: "Errata da Linhagem do Hiraishin"
version: 1
layer: scenario
scenario: naruto
type: pending-patch
status: pending-patch
source-file: Errata_Linhagem_Hiraishin_v1.md
---

# Errata da Linhagem do Hiraishin

As cinco fichas da Linhagem do Hiraishin publicam a Faixa de Travessia, que é a grandeza de RC nominal que as entradas do compêndio ainda não tinham. Com ela legível, valores do Compêndio de Fūinjutsu e seções do Manual de Ancoragem passam a divergir do que o corpus afirma em outro lugar, e a transcrição das fórmulas para o motor da aplicação expôs duas convenções de arredondamento que o Manual de Criação de Jutsus mantém em desacordo consigo mesmo.

Três alvos com correção declarada, e uma divergência que permanece aberta porque os dois lados dela têm dono e nenhum cedeu. Cada entrada indica onde localizar, o que sai, o que entra e a origem.

---

## ALVO 1 — Compêndio de Fūinjutsu v1.1, Categoria Especial

### 1.1 Custo da Rotação Instantânea Mútua

**Localizar:** linha de XP da entrada Rotação Instantânea Mútua do Hiraishin.

**Sai:** `**XP:** 15.200`

**Entra:** `**XP:** 12.800`

**Origem:** a interpolação da Seção 4.1.1 do Manual de Criação de Jutsus sobre o teto de RC nominal de 1.020 devolve 12.800 em rank A. O valor de 15.200 é a célula de degrau 4 da matriz de estimativa da Seção 4.1.3, que serve enquanto a RC nominal permanece impublicada. A ficha publica a Faixa de Travessia, e a interpolação passa a ser a régua legível.

O preço individual de 9.600 permanece intacto, e é ele que a troca conserta. O desconto de vinte e cinco por cento da Seção 7.4 sobre 12.800 devolve exatamente 9.600, que é o número que a cláusula da entrada já afirma. Sobre 15.200 o mesmo desconto devolveria 11.400, e a entrada publicava um total e uma parcela que não se ligavam por conta nenhuma.

### 1.2 Nome da entrada Hiraishin Giri

**Localizar:** título e cabeçalho da terceira entrada da categoria.

**Sai:** `### Corte do Deus do Trovão Voador`

**Entra:** `### Execução do Deus do Trovão Voador`

**Origem:** o verbo que a entrada resolve é a execução do alvo marcado, e a ficha assim a nomeia. O nome japonês 飛雷神斬り permanece, e o identificador `naruto.technique.hiraishin-giri` continua preso a ele, porque o identificador amarra documento e dado e não acompanha o rótulo em português.

O parágrafo de abertura da categoria também nomeia a entrada, e a menção ao Corte do Deus do Trovão Voador acompanha a troca.

### 1.3 Caminho de perícia na linha de requisitos

**Localizar:** linha de Requisitos das quatro entradas.

**Entra:** o caminho que cada entrada consome, declarado ao lado do nível de perícia, conforme a Seção 5 do Manual de Requisitos de Técnica.

| Entrada | Caminho a declarar |
|---|---|
| Deus do Trovão Voador | Salto, da inclinação Translado, além do Âncora já declarado |
| Segundo Passo | Cravo, da inclinação Translado, e Âncora |
| Execução do Deus do Trovão Voador | Âncora |
| Rotação Instantânea Mútua | Salto e Âncora |

**Origem:** técnica executada por verbo de especialização exige o caminho na ficha além do portão numérico. As quatro entradas resolvem por verbos que vivem em caminho, e o compêndio declarava apenas o Âncora da primeira.

### 1.4 Herança do portão de rank nas três derivadas

**Localizar:** linha de Requisitos das entradas Segundo Passo, Execução do Deus do Trovão Voador e Rotação Instantânea Mútua.

**Sai:** `Passagem LV5`

**Entra:** a herança do portão de Passagem LV6 pela entrada de origem, declarada como tal.

**Origem:** as três derivadas exigem o Deus do Trovão Voador, que carrega Passagem LV6 por ser rank S. Quem possui a entrada de origem já satisfez o LV6, e o LV5 nominal descreve um degrau que nenhum praticante da linhagem ocupa. A entrada Execução do Deus do Trovão Voador mantém, ao lado disso, o requisito de perícia de arma LV5 que segue sem documento, e por isso permanece inexecutável.

---

## ALVO 2 — Manual de Ancoragem v1.1

### 2.1 Registro de conformidade

**Localizar:** tabela da Seção 7.

**Entra:** as cinco fichas da linhagem como consumidores conformes. As quatro da via inscrita consomem a Fórmula Inscrita da Seção 4.1 e a régua de latência da Seção 5, e a entrada por impregnação consome a via da Seção 4.2.

**Entra também:** a Perícia de Barreira sai da condição de pendente de nascimento e passa a conforme, porque o documento existe e publica o caminho Perímetro que a via de Formação de Barreira aguardava.

### 2.2 Versões vencidas no registro de conformidade

**Localizar:** linhas da tabela da Seção 7 que nomeiam os consumidores por versão.

**Sai:** Perícia de Fūinjutsu v1.2, Perícia de Controle de Chakra v2.

**Entra:** Perícia de Fūinjutsu v1.4, Perícia de Controle de Chakra v3.2.

**Origem:** o registro afirma conformidade contra versões que o Índice não publica mais. A declaração de conformidade do Controle de Chakra vale contra um texto de duas gerações atrás, e é dentro dessa diferença que vive a divergência do Alvo 4.

### 2.3 Pendência da ficha dedicada do Hiraishin de Boruto

**Localizar:** terceira pendência da Seção 8.

**Sai:** a pendência da ficha dedicada, aberta para fechar o conflito de fonte da Seção 4.2.

**Origem:** a ficha existe como Deus do Trovão Voador pela Impregnação, e adota a leitura de Kashin Koji que o Manual já havia escolhido.

### 2.4 Latência na tabela da Seção 4.2

**Localizar:** linha Latência da tabela de propriedades da Seção 4.2.

**Sai:** `ação padrão no consumo, e ação completa em alcance longo`

**Entra:** `ação padrão em alcance curto, e ação completa em alcance longo`

**Origem:** a régua de latência da Seção 5 do próprio Manual publica ação padrão em alcance curto e ação completa em alcance longo. A redação da Seção 4.2 descreve o primeiro degrau pelo momento do consumo em vez de pelo alcance, e as duas seções passam a dizer a mesma coisa com palavras diferentes. A ficha por impregnação transcreve a Seção 5.

---

## ALVO 3 — Manual de Criação de Jutsus v2.5, arredondamento

### 3.1 Âncoras de interpolação que discordam entre si

**Localizar:** tabela de âncoras da Seção 4.1.1.

A interpolação devolve valor fracionário em duas das quatro âncoras, e a tabela as publica arredondadas em sentidos opostos. O Goukakyuu em 180 de RC nominal resolve 1.722,72 e aparece como 1.722. O Rasengan em 450 resolve 4.785,71 e aparece como 4.786. As outras duas âncoras, Chidori e Kirin, caem em valor inteiro e não distinguem as duas leituras.

A Seção 4.1.2 declara floor no resultado final, o que sustenta o 1.722 e contraria o 4.786. Uma das duas células precisa mudar, ou a Seção 4.1.2 precisa dizer que o floor incide depois dos modificadores da Seção 4.2 e não sobre a interpolação.

As cinco fichas da Linhagem do Hiraishin caem todas em valor inteiro, e por isso a escolha não altera nenhum preço publicado por elas.

### 3.2 Fator de Moldagem publicado truncado

**Localizar:** tabela Fator de Moldagem por nível da Seção 5.3.

A tabela publica 62 para o nível 5 e 122 para o nível 6 com um caminho, quando a fórmula devolve 62,5 e 122,5. O truncamento é de exibição e não entra em conta nenhuma, porque as âncoras de dano da mesma seção somam o fator sem truncar. A ficha da Execução do Deus do Trovão Voador publica a mesma coluna arredondada, com 88 para 87,5, e chega ao mesmo total.

Vale declarar qual das duas convenções a coluna adota, porque um leitor que trunque o fator antes de somar perde um ponto de dano em todo nível ímpar.

---

## ALVO 4 — Divergência aberta, sem lado escolhido

### 4.1 Manutenção da âncora impregnada

O Controle de Chakra v3.2 afirma, no efeito Impregnação de Âncora, que a âncora cai junto com quem a impregnou e não cobra manutenção enquanto ele viver. O Manual de Ancoragem v1.1 publica, na tabela da Seção 4.2, manutenção por reimpregnação a cada cena de descanso, marcada como proposta.

As duas afirmações se excluem. Uma declara custo de manutenção nulo enquanto o inscritor vive, e a outra declara custo recorrente por cena de descanso.

O Manual de Ancoragem é o dono declarado dos oito slots do Contrato de Âncora, e a Seção 8 dele atribui à perícia que inscreve a declaração da via, da contagem e da evolução por nível, e nada além disso. Pela regra do dono, o slot de Manutenção pertence ao Manual, e o Controle de Chakra o preenche fora da própria fronteira. Pesa do outro lado que o Manual marca a própria linha como proposta, e o Controle de Chakra escreve a dele como regra firme.

A leitura adotada pelas cinco fichas é a do Manual de Ancoragem, por ele ser o dono dos slots. A escolha de qual documento cede permanece aberta.

### 4.2 Propriedades ausentes na entrada por impregnação

A tabela de Propriedades da Âncora Consumida da ficha por impregnação declara quatro das sete propriedades que a Seção 4.2 do Manual publica. Ficam de fora Paridade, Manutenção e Contagem.

A Manutenção depende do Alvo 4.1. A Contagem é pendência que o próprio Manual declara na Seção 8, aguardando que o Controle de Chakra publique quantas âncoras simultâneas a impregnação sustenta, e enquanto ela não existir a via permanece incompleta para consumo por técnica de compêndio. A Paridade é ausência sem disputa, e a ficha a incorpora quando a tabela for reaberta.

A linha de Legibilidade diverge na redação. O Manual escreve legibilidade nula para Exegese, e a ficha escreve nula para o ofício do selamento. As duas descrevem o mesmo alcance, porque a Exegese é o instrumento pelo qual o ofício lê, e a harmonização acompanha o Alvo 2.4.

---

## Dependências

Manual de Criação de Jutsus v2.5, seções 4.1.1, 4.1.3 e 7.4. Manual de Requisitos de Técnica v2, seções 2 e 5. Manual de Ancoragem v1.1, seções 4.2, 5, 7 e 8. Compêndio de Fūinjutsu v1.1, Categoria Especial. Perícia de Controle de Chakra v3.2, efeito Impregnação de Âncora. Perícia de Fūinjutsu v1.4, caminho Âncora. Perícia de Passagem v1.1, inclinação Translado. Perícia de Barreira v1, caminho Perímetro.
