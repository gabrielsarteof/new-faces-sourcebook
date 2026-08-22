---
id: core.quick-calculations
title: "Cálculos Rápidos de Testes"
version: 2
layer: core
type: reference-table
status: final
---

# Cálculos Rápidos de Testes

Este documento reúne, numa única leitura, os números que o Núcleo de Perícias e o Núcleo de Combate produzem separadamente. Ele não declara regra nova em ponto nenhum. Cada fórmula publicada aqui é a mesma fórmula do documento dono, citada com a seção de origem, para que a mesa monte o número da ficha sem percorrer os dois núcleos inteiros a cada teste.

## 1. As três saídas terminais

Toda perícia produz até três números distintos, e cada um responde a uma pergunta diferente.

**Portão.** Mede acesso.

```
portão = Base Total + atributo regente
```

Inclinação e especialização ficam de fora, porque capacidade destravada é permanente e não pode depender da situação em que o praticante estava quando a comprou. Bônus permanente de vantagem ou desvantagem entra, pela mesma soma real que já traz o atributo regente; bônus condicional fica de fora, pela mesma razão que exclui inclinação e especialização. O portão é o que o Manual de Requisitos de Técnica lê para destravar rank e moldagem, na régua que [Cálculos Rápidos de Naruto](../worlds/naruto/quick-calculations.md) publica por cenário.

**Teste.** Resolve ação em mesa.

```
teste = Base Total
      + atributo regente
      + Inclinação Total, se a situação pertence à inclinação
      + Especialização, se o verbo do caminho resolve o problema
```

No máximo uma inclinação e uma especialização entram no mesmo teste. Possuir várias amplia a cobertura do praticante e nunca empilha bônus sobre o mesmo teste.

**Resistência de campo própria.** Algumas perícias declaram um terminal adicional, com composição própria. Barreira publica `resistência = Base Total + SAB + Inclinação Total`, sem especialização, porque a firmeza pertence ao ofício e não à rota. Cada terminal desses é declarado pela perícia dona, e este documento não os repete.

Portão e teste coincidem numericamente fora de inclinação e caminho, e é por isso que recebem rótulo separado. Servem a perguntas diferentes mesmo quando o número é igual.

## 2. As cinco grandezas e os quatro movimentos do LV6

Toda fração do sistema lê a Base de Nível, e nenhuma camada lê o valor total de outra camada. Cada bônus entra na soma final uma única vez.

| Termo | Definição | Natureza |
|---|---|---|
| Base de Nível | função exclusiva do nível | fonte única das frações |
| Base Total | Base de Nível mais bônus gerais de largura | terminal |
| Inclinação Nominal | fração da Base de Nível pelo estado da inclinação | insumo do bônus de largura dela |
| Inclinação Total | Inclinação Nominal mais bônus de largura dela | terminal |
| Especialização | fração da Base de Nível por grau e estado do caminho | terminal |

**Base de Nível**, por nível de perícia:

| LV1 | LV2 | LV3 | LV4 | LV5 | LV6 |
|---|---|---|---|---|---|
| 12 | 24 | 32 | 40 | 45 | 50 |

**Inclinação Nominal**, fração da Base de Nível pelo estado:

| Estado | Fração | LV2 | LV3 | LV4 | LV5 | LV6 |
|---|---|---|---|---|---|---|
| Aberta | 0,35 | 8 | 11 | 14 | 15 | 17 |
| Aprofundada | 0,50 | 12 | 16 | 20 | 22 | 25 |

**Especialização**, fração da Base de Nível por grau e estado do caminho:

| Grau | Aberto | Aprofundado | Transcendido |
|---|---|---|---|
| 1 Ampla | 0,75 | 0,90 | 1,00 |
| 2 Larga | 0,85 | 1,00 | 1,10 |
| 3 Definida | 0,95 | 1,10 | 1,20 |
| 4 Estreita | 1,05 | 1,20 | 1,30 |
| 5 Pontual | 1,15 | 1,30 | 1,40 |

Valores resolvidos, por nível:

| Grau | LV4 Aberto | LV4 Aprof. | LV5 Aberto | LV5 Aprof. | LV6 Aberto | LV6 Aprof. | LV6 Transc. |
|---|---|---|---|---|---|---|---|
| 1 Ampla | 30 | 36 | 33 | 40 | 37 | 45 | 50 |
| 2 Larga | 34 | 40 | 38 | 45 | 42 | 50 | 55 |
| 3 Definida | 38 | 44 | 42 | 49 | 47 | 55 | 60 |
| 4 Estreita | 42 | 48 | 47 | 54 | 52 | 60 | 65 |
| 5 Pontual | 46 | 52 | 51 | 58 | 57 | 65 | 70 |

Nenhum caminho existe abaixo do LV4 na progressão padrão, porque o primeiro caminho chega ligado à inclinação já aprofundada no LV3. A única exceção é a inclinação de extensão manifestada, tratada na Seção 2.4.

**Bônus de largura.** Caminho adicional soma bônus geral, que alimenta só a Base Total, e bônus de inclinação, que alimenta só a Inclinação Total da inclinação a que pertence.

| Nível | Bônus geral por caminho adicional |
|---|---|
| LV4 | 4 |
| LV5 | 4 |
| LV6 | 5 |

| Estado da inclinação | Bônus de inclinação por caminho adicional dela |
|---|---|
| Aberta | 2 |
| Aprofundada | 3 |

A contagem começa no segundo caminho, porque o primeiro vem embutido no custo do nível em que nasce.

### 2.1 O que cada aquisição faz

| Aquisição | Move o teste geral | Move a inclinação dela | Move o caminho |
|---|---|---|---|
| Caminho adicional | sim, pelo bônus geral | sim, pelo bônus de inclinação | não |
| Inclinação adicional | não | cria uma Inclinação Total nova, condicionada | não |
| Transcendência | não soma valor plano | eleva todos os caminhos possuídos | eleva especialização de todos, efeito categórico de um |

Caminho compra largura. Inclinação compra território. Transcendência compra permissão.

### 2.2 A subida de LV5 para LV6, em quatro movimentos

A subida ao LV6 não é um nível que soma pontos. São quatro eventos separados, e apenas um deles não produz número.

**Primeiro, a Base de Nível sobe de 45 para 50.** Toda fração lê a Base de Nível, e a subida se propaga em cascata sobre Inclinação Nominal, Especialização e bônus geral, sem que isso seja efeito de transcendência.

**Segundo, a transcendência eleva ao estado Transcendido todos os caminhos que o praticante possui**, de uma vez. A exigência para adquiri-la é que todos os caminhos possuídos estejam Aprofundados. Domínio parcial não transcende, e a exigência existe para impedir a construção de largura infinita sem custo de aprofundamento.

**Terceiro, a transcendência entrega um efeito categórico dirigido a uma vertente nomeada.** Apenas o caminho que a transcendência tocar recebe a versão elevada dos próprios efeitos. Os demais caminhos possuídos mudaram de estado no movimento anterior, sem ganhar efeito novo.

**Quarto, caminho adicional continua somando bônus geral**, cinco por caminho a partir do LV6.

Um praticante com três caminhos possuídos e uma transcendência dirigida ao segundo lê Especialização transcendida nos três e efeito elevado apenas no segundo.

### 2.3 Largura presumida na publicação

A largura presumida é a menor largura em que o efeito publicado pode existir. Efeito de caminho lê largura mínima, sem bônus de largura algum. Efeito de transcendência lê largura de ápice, com os bônus de todos os caminhos da própria inclinação aplicados. O número publicado é piso e nunca teto, e o praticante de largura maior lê valor maior pela mesma fórmula.

### 2.4 Inclinação de extensão manifestada

Inclinação destravada por manifestação corre por fora da progressão padrão. Compra-se e aprofunda-se por aquisição adicional, inclusive em nível baixo da perícia hospedeira, e recebe capstone próprio, chamado Ápice, distinto da transcendência de LV6. O Ápice exige apenas que os caminhos daquela inclinação estejam Aprofundados, não toca o estado dos caminhos das demais inclinações, e não conta como a transcendência de LV6 para nenhum efeito.

As duas extensões publicadas no cenário Naruto pisam no LV4 da perícia hospedeira, e nenhuma delas tem preço ou tabela de Especialização abaixo dele.

## 3. Pares de atributo fora de perícia adquirida

Nenhum documento de núcleo publica uma lista fechada de pares de atributo para ação resolvida sem perícia adquirida. O que existe em textos de vantagem e desvantagem é linguagem solta de efeito, nunca uma categoria de teste do sistema. Até que um documento de núcleo publique essa lista, a mesa resolve ação fora de perícia pela soma de dois atributos que o Mestre declara caso a caso.

## 4. Cálculos de combate do Núcleo

As grandezas abaixo pertencem ao Núcleo de Combate e valem para qualquer cenário que o consome sem redefinição.

| Número da ficha | Fórmula |
|---|---|
| Energia do golpe | (FOR + VEL + bônus geral da perícia ofensiva) × multiplicador do golpe |
| Guarda máxima | (DEF × 5) + bônus geral da perícia defensiva |
| Recarga da Guarda | metade de DEF × 5, degradada pela Exaustão |
| Absorção | RES × 3, proporcional |
| Golpe | (FOR + VEL) ÷ 3 |
| Esquiva | VEL ÷ 6 |
| Bloqueio | DEF ÷ 6 |
| Fôlego | RES ÷ 2 |
| Limiar | RES × 2 |
| Limiar de Crítico | PRE ÷ 2 |
| Lado defensivo da conexão | VEL + DES + bônus de esquiva |

O bônus geral é Base Total somada à Inclinação Total e à Especialização, sem o atributo regente, porque FOR e VEL já respondem pelo corpo dentro da mesma conta. O Golpe não é dano: é o custo em Esforço de desferir o ataque, multiplicado pelo Esforço da arma.

| Golpe declarado | Multiplicador | Custo em ação | Contrapartida |
|---|---|---|---|
| Rápido | ×0,5 | meia ação | nenhuma |
| Firme | ×1 | uma ação | nenhuma |
| Pesado | ×1,5 | uma ação | guarda aberta até o próximo turno; exige perícia |

| Classe de arma | Esforço |
|---|---|
| Arma de precisão | 0,8 |
| Lâmina curva | 1,0 |
| Arma pesada | 1,3 |

**A sequência de resolução do ataque**, doze passos, sempre na mesma ordem: declaração com o vetor, alcance pelas bandas, eixo de evitabilidade, escolha da resposta defensiva, conexão, crítico, Energia, Estado Elemental, Guarda, Absorção, saldo no PV, riders e custos.

**A conexão** é teste oposto de base cinquenta, e substituiu a rolagem de d100 de acerto.

```
limiar de conexão = (lado ofensivo ÷ lado defensivo) × 50, piso 5 e teto 95

lado ofensivo, golpe do corpo  = VEL + DES + bônus geral da perícia ofensiva
lado ofensivo, obra projetada  = Velocidade efetiva, que o manual do cenário publica
lado defensivo                 = VEL + DES + bônus de esquiva
```

Obra portada pelo corpo resolve como golpe corporal e não lê celeridade alguma. Obra de área e de campo não resolvem este teste.

**O oleoduto defensivo**, na ordem em que a energia o percorre:

```
Guarda    a fração que o vetor engaja detém até onde os pontos alcançam;
          cada ponto detido sai da barra e vira PS gasto no defensor
Absorção  dano ao PV = E × [E ÷ (E + Absorção)]
```

A Absorção é proporcional e não subtrai. Ela nunca detém a totalidade de um impacto que a supera e nunca deixa um impacto ignorar o corpo por completo. Nenhuma perícia a alimenta e nenhum grau de Exaustão a degrada.

**O que cada vetor encontra na Guarda:**

| Vetor | Contra a Guarda |
|---|---|
| Impacto | engaja a barra inteira, e a quebra quando a supera |
| Corte | engaja a fração que o Grau do Fio deixa, e um quinto do que ela detém alcança o PV mesmo assim |
| Penetração | engaja a fração que o Grau deixa, numa escada de seis, e nunca causa Quebra |
| Energia | não engaja a barra |

**Quebra de Guarda.** Energia que supera a fração engajada zera a barra, e o excedente segue para a Absorção. Durante a janela, que dura até o fim do turno seguinte de quem quebrou, o Bloqueio fica indisponível e o lado defensivo da conexão do quebrado multiplica por 0,8. A Guarda recarrega normalmente desde o primeiro turno após a quebra.

**Esforço por ação:**

| Ação | Esforço |
|---|---|
| Golpe | o Golpe da ficha, multiplicado pelo Esforço da arma |
| Golpe de Penetração | o mesmo, multiplicado ainda pelo fator do Grau |
| Cadência, primeira ação extra | Golpe × 1,5 |
| Cadência, segunda ação extra | Golpe × 2 |
| Esquiva | a Esquiva da ficha, por Reação gasta |
| Interrupção de Contato | a Esquiva da ficha |
| Bloqueio | o Bloqueio da ficha, dobrado quando resulta em Quebra |
| Manobra | o Golpe |
| Deslocamento | metros efetivos ÷ 5 |

Cada ponto que a Guarda detém também conta como Esforço contra o Limiar do fim da rodada, e numa troca física longa a Guarda é a maior fonte isolada de drenagem de fôlego da luta.

**Cadência.** A razão entre a VEL do combatente e a do oponente mais rápido engajado concede uma ação extra a partir de 1,5 e duas a partir de 2,5, com teto de duas.

**Exaustão Física**, cinco graus por PS restante, com o Inteiro sendo a ausência da condição:

| Grau | PS restante | Recarga da Guarda | Energia | Lado defensivo | Cadência | Deslocamento |
|---|---|---|---|---|---|---|
| Inteiro | 75% ou mais | 50% | cheia | cheio | cheia | cheio |
| Leve | 50 a 74% | 40% | cheia | cheio | cheia | cheio |
| Moderado | 25 a 49% | 30% | −10% | ×0,9 | cheia | −10% |
| Grave | 1 a 24% | 20% | −20% | ×0,8 | uma ação extra a menos | −25% |
| Crítico | 0% | 10% | −30% | ×0,7 | nenhuma ação extra | −50% |

Os percentuais de recarga leem DEF × 5 e nunca a barra máxima, o que mantém o bônus da perícia defensiva fora da recuperação em todos os graus. Fôlego e Limiar leem RES, que nenhum grau reduz.

**Motor de manobras**, quatro entradas, cada uma teste oposto por par nomeado:

| Manobra | Teste ativo | Teste oposto | Resultado |
|---|---|---|---|
| Agarrar | FOR + DES | FOR + VEL | Imobilização |
| Derrubar | FOR + VEL | DEF + VEL | Queda e Prostração |
| Empurrar | FOR + VEL | DEF + FOR | deslocamento forçado, metros pela margem |
| Desarmar | DES + VEL | DES + FOR | arma no chão |

**Cerco**, multiplicador do lado defensivo da conexão por atacantes engajados com o mesmo alvo:

| Atacantes | Lado defensivo |
|---|---|
| 1 | cheio |
| 2 | ×0,85 |
| 3 | ×0,70 |
| 4 ou mais | ×0,60 |

Todo multiplicador do lado defensivo, venha de Exaustão, de Guarda quebrada ou de cerco, se multiplica com os demais sem exceção, e o limiar respeita o piso de 5 e o teto de 95 depois de fechada a conta.

**Área e campo.** Área alcança tudo Engajado com o centro escolhido. Campo alcança tudo até a banda Curta do centro, ocupando o terreno enquanto durar. Nenhuma das duas distingue aliado de inimigo, e nenhuma resolve o teste de conexão.

**Dano de fonte sem ficha**, motor de queda:

```
altura efetiva = altura em metros − VEL, teto de 150 metros
Energia da queda = altura efetiva × 60
```

Sem Guarda e sem crítico. Um teste de VEL somado a DES autoriza a subtração cheia da altura, e a falha concede metade.

### 4.1 Uma rodada resolvida

Dois combatentes da faixa Especial, perfil Equilibrado, com FOR, VEL, DES, DEF, RES e PRE em 32, PV 1920, PS 768 e bônus geral de 116 na perícia que governa o golpe. A ficha de cada um resolve em Energia de Golpe Firme 180, Guarda 276 com recarga de 80, Absorção 96, Golpe 21,33, Esquiva 5,33, Bloqueio 5,33, Fôlego 16, Limiar 64 e Limiar de Crítico 16. Os dois lados da conexão fecham em 180.

O atacante declara Golpe Firme com arma pesada, entregue por Impacto. O limiar de conexão fecha em 180 dividido por 180, vezes cinquenta, resultando em 50, e ele rola 38 e conecta. No crítico rola 41 contra 16 e não obtém. A Energia fecha em 180. O Impacto engaja a barra inteira de 276, que detém os 180 por completo, e a Guarda cai para 96 drenando 180 de PS do defensor. Nada alcança a Absorção, e o PV permanece em 1920.

O atacante paga 27,73 de Esforço, o Golpe de 21,33 multiplicado pelo 1,3 da arma pesada. O defensor paga 190,66, a soma do Bloqueio, da Esquiva e dos 180 pontos que a Guarda drenou. O atacante fica abaixo do próprio Limiar de 64 e recupera o Fôlego cheio, e o defensor o ultrapassa e recupera metade.

A primeira troca não tirou um ponto de PV de ninguém e já custou ao defensor um quarto do fôlego. É a leitura que o motor pretende: o básico desgasta e abre janela em vez de matar, e o duelo de Impacto se decide por cascata de exaustão muito antes de se decidir por PV.

## 5. Bônus externos ao teste

A penalidade percentual de status incide sobre o atributo bruto, nunca sobre Base Total, Inclinação Total ou Especialização, porque nenhuma das três lê atributo. A redução resolve antes de o atributo entrar em qualquer soma.

| Fonte | Forma | Onde incide |
|---|---|---|
| Vantagem, bônus nomeado de teste | soma fixa | após as quatro parcelas do teste |
| Penalidade de status | redução percentual sobre o atributo | antes do atributo entrar na soma |

Fontes distintas se somam entre si. O corpus não publica caso de duas fontes competindo pelo mesmo alvo.

A posição de uma natureza na ficha do praticante não entra aqui. Ela é grandeza de cenário e mede vazão, custo e confiabilidade, nunca desempenho no teste: o terminal da maestria lê nível, inclinação, caminho e atributo regente, e uma soma de berço ali vazaria ao mesmo tempo para os efeitos que leem o valor do teste, para as tabelas de custo e para a graduação de riders pela margem.

## 6. As quatro perícias comuns

| Perícia | Regente | Categoria | Portão de rank |
|---|---|---|---|
| Kenpo | DES | Físico ×1,0 | Base Total + DES, sem consumidor publicado |
| Taekwondo | VEL | Físico ×1,0 | Base Total + VEL, sem consumidor publicado |
| Taichi | DES | Físico ×1,0 | Base Total + DES, camada superclasse |
| Tantō | DES | Físico ×1,0 | não controla portão de rank, porque não existe compêndio de obras dela para escalonar acesso |

As quatro leem a fórmula de teste padrão da Seção 1 e os terminais do Núcleo de Combate da Seção 4, sem terminal próprio adicional.

## Pendências

A pendência do coeficiente 25 da Potência morreu com a grandeza. O Núcleo de Combate v3 aposentou a Potência, e a Energia do golpe que a substituiu não carrega constante sem derivação: ela lê os dois atributos do corpo, o bônus da perícia e o multiplicador do golpe declarado, todos publicados.

`core/system-core.md` não publica lista fechada de pares de atributo para ação fora de perícia adquirida, conforme a Seção 3 acima.

## Dependências

`core/skills-core.md` v2.4, dono da Base de Nível, das frações de inclinação e especialização, e da leitura de teste e portão. `core/system-core.md` v3.6, dono da resolução de testes e do Ritmo de Combate. `core/combat-core.md` v3, dono de toda a Seção 4. `core/skill-authoring.md` v7.4 §13.1, dono da inclinação de extensão manifestada. `core/status-effects.md` v2.8, dono da penalidade percentual de status e dos riders de vetor. `core/xp-economy.md` v2.11, dono do preço de caminho e transcendência.
