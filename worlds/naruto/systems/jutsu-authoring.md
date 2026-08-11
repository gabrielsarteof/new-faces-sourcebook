---
id: naruto.system.jutsu-authoring
title: "Manual de Criação de Jutsus"
version: 2.5
layer: scenario
scenario: naruto
type: methodology
status: final
source-file: Manual_de_Criacao_de_Jutsus_v2_4.md
---

# Manual de Criação de Jutsus · v2.5

**Guia técnico para a criação de técnicas shinobi estudáveis no RPG de Naruto. Manual tradutor do cenário Naruto para o Manual de Criação de Poderes v3.2.**

Este documento é o manual tradutor do cenário Naruto. Ele consome o Manual de Criação de Poderes v3.2, preenche os pontos de extensão daquele manual com os valores deste mundo e publica a interface que os documentos de técnica, perícia e clã efetivamente usam. Nenhum documento do cenário lê o Manual de Criação de Poderes diretamente. O preenchimento completo dos pontos de extensão está na Seção 10.

Jutsu é técnica: pode ser ensinada, copiada, aprimorada e, em muitos casos, proibida. A diferença entre um jutsu e um poder de clã é de origem. O Sharingan é um poder; o Amaterasu é um jutsu que o Sharingan permite executar. Um jutsu pode ser absurdamente poderoso e ao mesmo tempo tecnicamente ensinável a quem tem chakra e controle suficientes. Um poder de clã é concedido pelo sangue e permanece fora do alcance de qualquer estudo.

Este manual cobre apenas jutsus. Poderes inatos, vantagens de clã, kekkei genkai e kekkei tōta são tratados pelo Manual de Criação de Poderes, que permanece a base de cálculo para todos os efeitos.

```
RANK                    o que o jutsu pode fazer e quem pode usá-lo
   ▲
TIPO DE JUTSU           como ele funciona e como é resistido
   ▲
CUSTO DE CHAKRA         RC, Limite de Saída e Janela de Canalização
   ▲
CUSTO DE XP             o preço de aprender
   ▲
EFEITOS                 interface com o Manual de Criação de Poderes
   ▲
DIMENSÕES E MÓDULOS     como o jutsu se comporta em jogo
   ▲
CONFIGURAÇÕES ESPECIAIS Hiden, equipe, invocação, clone, fuuinjutsu
   ▲
PROCESSO                decisão, criação, validação
```

> **Princípios:** todo jutsu tem um rank que delimita poder, custo e acessibilidade. O rank é o
> envelope canônico da técnica. O custo de chakra é absoluto em RC; o Limite de Saída de 20% da RC
> determina se a canalização é instantânea ou requer preparação. O custo de XP reflete o esforço
> de aprendizagem, na régua das perícias. A metodologia é canon-first: nenhum número é inventado
> sem âncora no cânone ou no sistema.

---

## 1. Rank

O rank de um jutsu é determinado por quatro fatores simultâneos: volume de chakra exigido, dificuldade de execução, potencial de efeito e raridade de quem consegue usar. É o envelope que delimita o que a técnica pode alcançar em todas as suas camadas, do dano à acessibilidade.

| Rank | Custo RC nominal (faixa) | Usos¹ | Canalização² | Aftermath | Quem usa |
|---|---|---|---|---|---|
| E | 5–40 | 30+ | Instantânea | nenhum | Qualquer shinobi |
| D | 40–130 | 15–25 | Instantânea | nenhum | Genin treinado |
| C | 130–350 | 5–10 | 0–1 turno | nenhum | Chuunin; genin de clã forte |
| B | 350–700 | 2–5 | 1–2 turnos | nenhum | Jounin; chuunin talentoso |
| A | 700–1.500 | 1–3 | 1–3 turnos | declarado | Jounin elite; ANBU |
| S | 1.500–4.000 | 1 | 2–5 turnos | saída reduzida | Kage; nível especial |
| Kinjutsu | 4.000+ | 1 /sessão | Ritual | burnout | Excepcional; proibido |

¹ Usos por combate para um ninja do tier equivalente ao rank da técnica, apurados sobre o custo pago.
² Turnos de selos antes do disparo, calculados pela fórmula da Seção 3.2 sobre o custo pago.

A faixa é lida em RC nominal, a grandeza definida na Seção 3.1. Nenhuma técnica muda de rank pela adoção da régua de desperdício.

### 1.1 A Ponte com a Escala do Manual de Criação de Poderes

As faixas de RC de cada rank correspondem às escalas do MCP. A correspondência é declarada e governa toda tradução de régua entre os dois manuais:

| Rank | Escala do MCP |
|---|---|
| E | Utilidade |
| D | Básico |
| C | Moderado |
| B | Forte |
| A | Supremo (metade baixa) |
| S | Supremo alto / Forbidden |
| Kinjutsu | Transcendente |

Duas colunas da tabela de Escala do MCP recebem tratamento próprio em jutsus:

- **Dificuldade de resistir:** a fonte é única e é a compressão de limiar (Seção 5.6), regra de origem do Manual de Criação de Poderes. O investimento de chakra torna o efeito mais difícil de resistir, e nenhuma outra camada concede o mesmo benefício — o bônus plano de teste por escala foi removido no manual de núcleo.
- **Aftermath:** disponível a partir do rank A e declarado pela técnica, nunca automático. A Janela de Canalização, os selos interrompíveis e o portão de perícia elemental já cobram seu preço nas faixas B e C, e o aftermath entra onde o cânone mostra preço físico distinto do gasto de reserva, com o Rasenshuriken à frente. O limite diário do Chidori fica fora desta leitura: o cânone o atribui ao volume de chakra que a técnica exige, e a economia de reserva o reproduz sozinha, sem aftermath algum.

### 1.2 Aftermath por Rank

| Rank | Aftermath | Expressão mecânica |
|---|---|---|
| E–B | nenhum | vazio |
| A | leve | PS igual a 20% do custo de RC, pago após a resolução |
| S | saída reduzida | o Limite de Saída cai à metade no turno seguinte |
| Kinjutsu | burnout | dano direto em PV, sem mitigação, declarado no registro da técnica, somado ao preço narrativo da proibição |

O aftermath de S-rank produz o shinobi ofegante após a técnica definidora: a reserva permanece, o fluxo despenca, e por um turno o executor só canaliza o que couber em 10% da RC. Clones que executam técnicas com aftermath o pagam com o próprio corpo (Seção 7.1).

### Por que o rank vai além do dano

O Tsukuyomi é S-rank sem causar dano físico direto. O Tajuu Kage Bunshin era Kinjutsu por democratizar poder capaz de subverter qualquer conflito. O rank mede o pacote completo: potência, custo e acessibilidade simultâneos.

### Kinjutsu

A marcação Kinjutsu sobrepõe o rank S. Um jutsu proibido é proibido por uma das três razões canônicas:

- **Sacrifício humano** (Edo Tensei, Shiki Fuujin): requer a vida de outro ser como combustível.
- **Autodestruição do usuário** (Hachimon Tonkou: Abertura do Céu): o uso mata o executor.
- **Poder geopolítico** (Tajuu Kage Bunshin em escala extrema): subverte qualquer conflito convencional; acesso irrestrito ameaça a ordem shinobi.

O Narrador valida o motivo da proibição. Custo mínimo de XP para Kinjutsu: 50.000, independente de modificadores.

---

## 2. Tipo de Jutsu

O tipo define como o jutsu funciona, como é executado e como é resistido. Tipos distintos têm regras de interrupção e counter diferentes.

### 2.1 Ninjutsu

Uso direto do chakra moldado, geralmente com selos de mão. Cobre a maioria dos jutsus combativos. Resistência padrão: defesa física, absorção, esquiva, contratécnica ou ciclo elemental. Ninjutsu elemental exige a Transformação de Natureza correspondente (perícia elemental); sem ela, a técnica é inacessível independente de RC.

### 2.2 Taijutsu

Combate físico. Divide-se em dois subtipos com perfis mecânicos distintos:

- **Puro**: sem chakra ou com uso mínimo para amplificação física bruta. Depende integralmente de atributos físicos e perícia de combate. Canalização sempre instantânea, sem selos.
- **Infundido**: chakra inserido nos golpes durante a execução. Quando a infusão tem natureza elemental, o jutsu interage com o Sistema Elemental (mult_Tipo e riders).

### 2.3 Genjutsu

Ilusão via interferência no sistema circulatório de chakra do alvo. O usuário insere chakra diretamente no sistema nervoso do alvo e distorce a percepção. A resistência é específica e declarada no registro do jutsu:

- **Genjutsu Kai**: o alvo percebe a ilusão e interrompe o fluxo alheio com chakra próprio. A resolução lê o motor de imposição publicado na Perícia Genjutsu, que opõe a soma de VON e SAB do alvo, comprimida pelo investimento de RC do praticante (Seção 5.6). O regente do executor permanece INT, que governa o teste da perícia e por ele a eficiência do investimento.
- **Dor física intensa**: interrompe o estado de ilusão de forma involuntária.
- **Assistência externa**: terceiro insere chakra e limpa o circuito do afetado.

Alta RC do alvo dispensa qualquer proteção automática. O alvo precisa perceber que está sob genjutsu para ativar o Kai; uma ilusão sem ser reconhecida age livremente.

### 2.4 Fuuinjutsu

Selamento. Técnicas que codificam efeitos em superfícies, objetos ou seres vivos. Podem ser preparadas com antecedência: o chakra é pago no ato de inscrever o selo, e o acionamento posterior custa uma fração. Efeitos podem ser permanentes. Fuuinjutsu declara dois custos separados no registro: preparação e acionamento (Seção 7.3).

### 2.5 Senjutsu

Técnicas que absorvem energia natural para amplificar o chakra. Exigem imobilidade durante a absorção. O Modo Sábio resultante permite técnicas que excedem o custo normal da RC pelo uso da reserva de energia natural como pool externo. Falha na calibragem da absorção é mecânica tratada no documento de Senjutsu.

### 2.6 Hiden Jutsu

Técnicas secretas transmitidas exclusivamente dentro de linhagens específicas. Dispensam selos e ficam fora do alcance do Sharingan, porque dependem de características físicas do clã que o dōjutsu é incapaz de reproduzir (Nara usam a sombra do próprio corpo, Aburame usam os kikaichū que habitam seu organismo). O custo de XP é exclusivo ao membro do clã conforme documento de clã. Um ninja externo ao clã fica sem acesso ao jutsu independente do XP investido.

### 2.7 Ninpō

Versão elevada de Ninjutsu. Mecanismo idêntico; o rótulo indica maior sofisticação, escala ou refinamento de uma linha de técnicas. Na prática mecânica, é marcação de rank alto para Ninjutsu de grande elaboração.

### 2.8 Kyūinjutsu

Dreno. Técnicas que retiram chakra de outro portador e o convertem em reserva própria, utilizável como se fosse gerada pelo próprio circuito. A etiqueta é declarada no registro ao lado do tipo, porque o mecanismo governa resolução, recurso e risco na mesma linha. O termo Kyūin nomeia o dreno em todo o sistema. Absorção conserva o sentido defensivo de redução de dano publicado no Sistema Elemental e nas perícias elementais, e as duas grandezas nunca se leem uma pela outra.

Kyūinjutsu convive com o tipo em vez de substituí-lo. Um selo que drena permanece Fuuinjutsu e declara custo duplo; uma barreira de terra que drena permanece Ninjutsu elemental e paga o ciclo. A etiqueta acrescenta as regras desta seção ao registro que a técnica já teria.

**Vetor.** Todo registro declara um dos três degraus, e o vetor governa o escopo por elevação categórica.

| Vetor | Escopo | Perfil |
|---|---|---|
| Contato | alvo único | toque sustentado, mão, palma ou membro declarado |
| Meio | área | o dreno corre por jutsu, barreira, arma ou recurso vivo interposto |
| Campo | região e entidade | a fonte drena tudo que carrega chakra dentro do raio declarado |

O degrau de Campo pertence a entidade, e permanece fechado a personagem jogador.

**Resolução.** O dreno dispensa rolagem de acerto, como toda entrega do sistema. A tentativa opõe o teste do executor à Defesa do Circuito do alvo, publicada no caminho Contenção da inclinação Retenção de Controle de Chakra. O Corte de Fluxo, do mesmo caminho, nega a tentativa por reação e a nega pelo turno inteiro contra a mesma fonte.

**Quantidade.** O registro declara a RC nominal do dreno como número fixo absoluto, e a execução a modula pela régua contínua do sistema.

```
RC drenada por turno = RC nominal × √(teste do executor ÷ 205)
```

O neutro fica em 205, na mesma âncora que o restante do corpus usa. Percentual da RC do alvo fica proibido em qualquer registro, porque escalaria contra jinchūriki, invocações e entidades, e converteria alvo de reserva grande em bateria.

**Teto de recepção.** O drenador recebe sob a regra de Recepção de Chakra Externo já publicada. A recepção segura equivale ao Limite de Saída do próprio drenador por turno, e o excedente vira dano direto de PV na proporção de um para um. O executor declara antes da resolução um limite voluntário abaixo do próprio teto, o que reduz a colheita e preserva o circuito.

**Sobrecarga deliberada.** O alvo consciente do dreno gasta ação padrão para empurrar RC além do que o drenador declarou receber, e a parcela empurrada atravessa o limite voluntário e alcança o teto real. O alvo paga a RC empurrada como gasto próprio e o drenador toma o excedente como dano.

**Conversão e permanência.** A parcela recebida entra na Reserva de Chakra do drenador e se gasta como reserva própria. O que ultrapassa a RC máxima decai dez por cento por turno. Chakra de assinatura estranha, bijū, doador hostil ou senjutsu instável, cobra o dano de incompatibilidade da regra de recepção, salvo no praticante que possua Receptividade em LV5.

**Cláusula do senjutsu.** Chakra sennin drenado por quem não sustenta Modo Sábio não converte em RC. A parcela inteira vira dano direto de PV e aplica Ferimento Grave no membro do contato, com o grau lido do Sistema de Efeitos de Status pela razão entre a parcela e o Limite de Saída do drenador. A calibragem fina da energia natural e a petrificação plena pertencem ao documento de Senjutsu. Esta é a única imunidade absoluta da classificação, e ela é canônica.

**Efeito sobre o alvo.** O alvo perde a RC drenada e recebe um grau de Exaustão de Chakra a cada parcela equivalente ao próprio Limite de Saída retirada em um mesmo turno, com a graduação lida do Sistema de Efeitos de Status. O esgotamento físico acompanha o de chakra e não exige entrada separada no registro.

**Cedências.** A captura de técnica com devolução na forma original pertence a Fuuinjutsu, e o dreno sustentado de entidade selada pertence à Válvula do mesmo documento. A doação consentida e a recusa do dreno pertencem a Controle de Chakra. A colheita de energia natural pertence a Senjutsu. O dreno por dōjutsu pertence ao Manual de Técnicas Oculares. O dreno por arma, por recurso vivo de clã e por entidade pertence ao documento de arma, ao documento de clã e ao documento de entidade, cada um consumindo esta seção sem redefini-la.

---

## 3. Custo de Chakra

### 3.1 A Reserva de Chakra como Recurso

O recurso de um jutsu é a Reserva de Chakra (RC). Todo custo de jutsu é expresso em RC como número fixo absoluto. As regras de recuperação, Limite de Saída e pools externos (Besta Selada, Reencarnação) estão no documento de Reserva de Chakra. Este manual referencia essas regras e preserva cada uma delas.

**As três grandezas de chakra.** A régua Índice de Desperdício, publicada em Controle de Chakra v2, separa o chakra que a técnica põe em campo do chakra que sai da reserva do executor. Toda ficha de técnica declara as duas primeiras grandezas abaixo, e a terceira é apurada por cada executor.

| Grandeza | Definição | O que governa |
|---|---|---|
| RC nominal | o volume que a técnica põe em campo | rank, faixa, interpolação de XP, motor de dano, compressão de limiar |
| Custo mínimo | a terça parte da RC nominal | saída de reserva de quem molda pleno |
| Custo pago | custo mínimo × (1 + desperdício) + carga | saída de reserva real, janela de canalização, usos por combate, teste de Limite de Saída |

```
custo pago = custo mínimo × (1 + desperdício) + carga
RC nominal = custo mínimo × 3 + carga
desperdício = (185 − teste de Moldagem) × 1,3      piso 0%, teto 250%
```

A carga adicional entra um para um nas duas grandezas, porque chakra despejado por força escapa à eficiência da moldagem. O desperdício não altera potência em grau algum: ele vira cansaço e janela de canalização.

O cansaço é cobrado no ato, à razão de um ponto de PS por dez de chakra desperdiçado, conforme a régua publicada em Controle de Chakra v2. O custo de PS que uma técnica declare soma a esse valor. Quem molda pleno paga apenas o que a técnica declara; quem molda mal paga as duas linhas e chega mais cedo à Exaustão Física. Dois executores de moldagem plena entregam o mesmo dano com a mesma técnica, e a diferença entre eles mora na reserva disponível para carga.

### 3.2 Limite de Saída, Custo Efetivo e Janela de Canalização

O Limite de Saída (LS) é **20% da RC por turno, universal**. Define o fluxo máximo de chakra que o sistema circulatório canaliza de forma sustentada, e é um cano único: jutsus, manutenção de dōjutsu e efeitos sustentados disputam o mesmo fluxo no mesmo turno.

A assimetria entre a natureza de afinidade e as demais mora no custo. O chakra convertido para uma natureza alheia à afinidade do shinobi consome parte de si na própria conversão:

```
Custo efetivo em RC:
   Natureza de afinidade (qualquer nata)    custo declarado × 1,0
   Natureza não-afim aprendida              custo declarado × 1,3
   Jutsu sem elemento                       custo declarado × 1,0
```

Os valores declarados no registro do jutsu são sempre os de afinidade. O rank é lido pela RC nominal declarada; a penalidade de conversão pertence ao executor e incide sobre o custo mínimo, antes da aplicação do desperdício, e sobre a RC nominal na mesma proporção. Ela alcança as duas pontas da economia: o shinobi paga mais RC, entrega mais dano pelo volume convertido e, pelo mesmo movimento, empurra a técnica para janelas de canalização mais longas.

Para jutsus cujo custo efetivo excede o LS, os selos de mão funcionam como câmara de compressão: acumulam chakra progressivamente antes do disparo. Técnicas de alto rank precisam de mais selos e mais tempo porque a física do fluxo o exige.

**Fórmula da Janela de Canalização (sobre o custo pago):**

```
custo pago ≤ LS              →  0 turnos  (instantânea)
LS < custo pago ≤ 2 × LS    →  1 turno
2×LS < custo pago ≤ 4×LS    →  2 turnos
custo pago > 4 × LS          →  ⌈custo pago ÷ (2×LS)⌉ turnos
```

A janela mede imperícia e não volume. O praticante de moldagem plena dispara no ato aquilo que o iniciante precisa acumular por dois turnos, e a diferença entre os dois é o desperdício de cada um.

*Âncoras de validação:*

| Jutsu | Rank | RC nominal | Mínimo | Executor | Pago | RC | LS | Janela | Canon |
|---|---|---|---|---|---|---|---|---|---|
| Goukakyuu | C | 180 | 60 | Sasuke genin, teste 60 | 157 | 1.325 | 265 | 0t | Usa livremente ✓ |
| Rasengan | B | 450 | 150 | jounin de moldagem plena | 150 | 2.211 | 442 | 0t | Executa no ato ✓ |
| Chidori | A | 750 | 250 | jounin de moldagem plena | 250 | 2.211 | 442 | 0t | Sem selos no ápice ✓ |
| Chidori | A | 750 | 250 | Kakashi, teste 185 | 250 | 942 | 188 | 1t | Carga visível, 3 usos ✓ |
| Chidori | A | 750 | 250 | Sasuke genin, teste 60 | 656 | 1.325 | 265 | 2t | Corrida telegrafada, 2 usos ✓ |
| Rasenshuriken | S | 1.800 | 600 | Naruto jovem, teste 60 | 1.575 | 3.800 | 760 | 2t | Inicialmente estático ✓ |

A régua reproduz a progressão canônica da mesma técnica ao longo da vida de um shinobi. O genin acumula por dois turnos e anuncia a investida, o executor de reserva média carrega um turno visível, e o mestre dispara no ato. O limite diário de quatro usos do Chidori atribuído a Kakashi resolve pela recuperação de reserva entre encontros, com três usos disponíveis dentro de um combate único.

Um Suiton hipotético de 750 de RC nominal, executado por Sasuke fora da afinidade, sobe para 975 de nominal e 325 de mínimo, e a janela acompanha o custo pago resultante. A mesma técnica, dois tempos, conforme a relação do shinobi com o elemento.

**Durante os turnos de canalização:** o ninja está formando selos. Pode se mover com cuidado, sem executar outros jutsus que gastem RC. Receber dano igual ou superior a 15% do PV máximo em um único golpe interrompe a canalização; a RC investida até aquele ponto é perdida. CC duro interrompe automaticamente; CC suave aumenta a janela em +1 turno.

**Uso emergencial (forçar sem canalização):** é possível quando o custo efetivo excede o LS. O ninja libera todo o chakra em pulso único, sem os selos acumuladores. Custo adicional: dano físico em PV proporcional ao excesso acima do LS, pago diretamente e sem mitigação. Representa o cânone de ninjas que forçam chakra em desespero extremo. O uso emergencial ocupa slot próprio: seu preço remunera a quebra da janela, e o aftermath do rank permanece devido na resolução.

### 3.3 A Nota Especial do Bunshin no Jutsu

Bunshin no Jutsu é E-rank e o jovem Naruto falhava em executá-lo. A explicação mora na distinção entre custo de chakra e requisito de controle. O Bunshin exige moldar exatamente a quantidade mínima para criar 1–2 cópias. Com RC colossal, calibrar para quase nada requer controle de moldagem excepcional. O bloqueio de Naruto era da perícia de Controle de Chakra. A mecânica cobre isso pelos requisitos de perícia (Seção 6.4).

### 3.4 Custo Variável

Um jutsu pode ter custo fixo (sempre o mesmo) ou custo variável (o ninja escolhe quanto chakra investir dentro de uma faixa). O rank é determinado pelo custo máximo da faixa. Custo variável usa as famílias Variável livre ou Variável com teto por atributo do Manual de Criação de Poderes (Seção 3.2).

- **Fixo:** Goukakyuu padrão, sempre ~180 RC, sempre a mesma bola de fogo.
- **Variável:** Katon Dai Endan, 350–700 RC. Mais chakra, chama maior e mais duradoura.

---

## 4. Custo de XP

Um jutsu é estudado, praticado, recebido de mestre ou copiado. O custo de XP representa esse investimento de tempo e esforço. O XP de um jutsu pode ser pago por qualquer ninja que cumpra os requisitos: o portão é de dedicação e acesso, e o sangue só governa os Hiden.

### 4.1 Faixas por Rank

As faixas são ancoradas na régua de perícias da economia. A razão entre o custo da técnica e o custo do nível de perícia que a gateia cresce com o rank: um C-rank é exercício de aplicação e custa fração do nível que o libera; uma S-rank é pesquisa original e vale mais que o próprio degrau de transcendência, permanecendo abaixo do custo de uma disciplina completa.

| Rank | Faixa de XP | Referência prática |
|---|---|---|
| E | 100–400 | Genin monta 10–15 jutsus E-rank sem esforço de budget |
| D | 400–1.200 | Genin: kit de 4–6 jutsus D-rank no base |
| C | 1.200–3.500 | Chuunin: 4–6 C-ranks; genin avançado: 1–2 |
| B | 3.500–8.000 | Jounin: 3–5 B-ranks; chuunin: 1 |
| A | 8.000–20.000 | Elite/ANBU: 1–2 A-ranks; jounin: 1 assinatura |
| S | 20.000–50.000 | Kage/Especial: 1–2 S-ranks de propósito |
| Kinjutsu | 50.000+ | 1 jutsu por personagem de nível Kage |

**Âncoras ilustrativas de budget.** O orçamento de jutsus compete com atributos e perícias dentro do mesmo XP de Ficha; o sistema reserva fração nenhuma. Um jounin típico (~175k XP), após atributos de faixa Elite e as perícias-chave de Controle de Chakra e Transformação de Natureza, sustenta uma A-rank assinatura, duas ou três B-ranks confiáveis e um arsenal C/D/E versátil. Saki, em Grau Especial (~500k XP), fecha duas S-ranks e duas A-ranks de assinatura por volta de 85k, com arsenal de suporte por cima.

### 4.1.1 Cálculo do XP Dentro da Faixa

O custo exato interpola a posição da RC nominal do jutsu dentro da faixa do seu rank:

```
posição  = (RC nominal − piso_RC do rank) ÷ (teto_RC − piso_RC do rank)
XP_base  = piso_XP + posição × (teto_XP − piso_XP)
```

Jutsu de custo variável interpola pelo custo máximo da faixa. Kinjutsu fica fora da interpolação por ausência de teto de RC: o custo é definido pelo Narrador dentro da faixa, com o piso de 50.000 inviolável.

*Âncoras:*

| Jutsu | RC nominal | Rank | Posição | XP_base |
|---|---|---|---|---|
| Goukakyuu | 180 | C | 23% | 1.722 |
| Rasengan | 450 | B | 29% | 4.786 |
| Chidori | 750 | A | 6% | 8.750 |
| Kirin | 1.800 | S | 12% | 23.600 |

O Chidori próximo ao piso de A-rank é leitura correta: o custo de RC é modesto para o rank, e o poder real vem da moldagem, barata de aprender para quem já carrega a perícia.

### 4.1.3 Estimativa de XP sem RC

A seção 4.1.1 apura o XP a partir da RC nominal, e por isso só funciona depois que a técnica já foi construída. O compêndio de um domínio precisa publicar preço antes disso, porque o jogador decide a compra na criação de personagem e a ficha completa só é produzida para o que foi efetivamente adquirido. Esta seção fornece a estimativa que ocupa esse intervalo.

**Quando se usa.** Enquanto a técnica não possuir ficha individual com RC nominal apurada. Publicada a ficha, a apuração da 4.1.1 substitui a estimativa.

**O que a estimativa mede.** O consumo de reserva, que é a mesma grandeza que a RC nominal mede. A leitura é feita sobre a descrição canônica da técnica, respondendo três perguntas.

Quanta matéria a técnica põe em campo, indo de nenhuma a um construto, a vários, a uma massa e a um campo inteiro. Por quanto tempo ela cobra, indo de instantânea a sustentada, a persistente depois da execução, a permanente até o fim da cena. Quantas coisas ela faz ao mesmo tempo, indo de um efeito a um efeito com rider elevado, a dois efeitos, a efeito somado a terreno que habilita o restante do arsenal.

**A moldagem não entra na estimativa.** O degrau de Controle de Chakra já foi pago na compra daquela perícia, e cobrá-lo de novo na técnica é taxar a mesma dificuldade duas vezes. A leitura publicada na 4.1.1 sustenta isso ao explicar o Chidori, que fica junto ao piso do rank A porque o poder dele vem de uma moldagem barata para quem já carrega a perícia, e não da reserva que ele queima.

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

#### Calibração

A estimativa não pode contradizer os quatro pontos que a 4.1.1 já fixou pela interpolação de RC nominal.

| Jutsu | Posição apurada por RC | Degrau atribuído pela escala | Posição da escala |
|---|---|---|---|
| Chidori, rank A | 6% | 1 | 10% |
| Kirin, rank S | 12% | 1 | 10% |
| Goukakyuu, rank C | 23% | 2 | 25% |
| Rasengan, rank B | 29% | 2 | 25% |

Os quatro caem dentro de quatro pontos percentuais do valor apurado e nenhum troca de degrau. Que nenhuma âncora canônica ultrapasse trinta por cento é leitura correta e não desvio da escala: os degraus 4 e 5 pertencem ao que eleva categoria de escopo dentro do próprio rank, e a obra produz poucas técnicas assim por faixa.

#### Ordem de aplicação

O valor da matriz ocupa a posição do XP_base. Sobre ele incidem os extras de comportamento da seção 4.1.2 e, por último, os modificadores da seção 4.2, na mesma ordem e com a mesma convenção de arredondamento que a apuração por RC nominal.

#### Convivência com a apuração definitiva

**O valor estimado é o que vale no momento da compra.** Quando a ficha individual da técnica for produzida e a interpolação da 4.1.1 apontar outro número, a ficha corrige o registro dali em diante e não retroage sobre quem já pagou. Sem essa garantia a estimativa deixa de ser um portão de decisão confiável, que é a única razão de ela existir.

Divergência entre a estimativa e a apuração não invalida a escala. Ela indica que a técnica consome mais ou menos reserva do que a descrição sugeria, e a correção é da entrada, não do método.

#### Publicação

O compêndio do domínio publica apenas o número, sem o degrau e sem a derivação, conforme a seção 10 da Norma de Produção de Compêndios. A leitura que produziu o degrau é reproduzível a partir desta seção e da própria descrição da entrada, e por isso não precisa ser carregada no catálogo.

### 4.1.2 Extras de Comportamento (XP)

Compras de comportamento de execução, aplicadas como percentual sobre o XP_base:

| Extra | Modificador |
|---|---|
| Execução com uma mão | +10% |
| Execução em movimento pleno (rank B+) | +20% |
| Redução de selos além da concedida por perícia | +10% por degrau |

**Ordem de aplicação:** XP_base pela interpolação, extras de comportamento por cima, modificadores da Seção 4.2 por último sobre a soma, floor no resultado final, na convenção de arredondamento da economia.

### 4.2 Modificadores de Custo de XP

| Condição | Modificador |
|---|---|
| Jutsu elemental da afinidade natal do ninja | −20% |
| Jutsu elemental de natureza não-afim | +30% ou bloqueado (se exige Transformação de Natureza ausente) |
| Hiden do próprio clã | Conforme documento de clã; inacessível fora do clã |
| Jutsu desenvolvido pelo próprio personagem | −15% |
| Jutsu copiado via Sharingan | Regras no documento de Sharingan |
| Jutsu de equipe (todos aprendem juntos) | −25% por participante adicional |
| Jutsu aprendido de mestre direto (LV5+ na perícia relevante) | −10% |
| Rank do jutsu inferior ao tier atual do personagem | −30% |

### 4.3 Acesso a Kinjutsu

Jutsus proibidos ficam fora dos compêndios abertos. Para adquirir:

- O personagem recebeu o jutsu de fonte específica (herança, pergaminho roubado, captura).
- O Narrador valida o acesso narrativo antes de qualquer gasto de XP.
- Nenhum modificador reduz o custo abaixo de 50.000 XP para Kinjutsu.

---

## 5. Efeitos: Interface com o Manual de Criação de Poderes

O Manual de Criação de Poderes define os efeitos em quinze categorias, quatro contextos e as famílias de cálculo. Um jutsu pluga nessa estrutura exatamente como um poder. As categorias, as famílias, as dimensões e a composição permanecem em uso na forma publicada lá, e esta seção registra as instâncias do cenário Naruto nos pontos de extensão correspondentes.

### 5.1 O recurso do cenário

Instância do ponto de extensão de curva de recurso. O recurso deste mundo é a Reserva de Chakra, e toda referência a PM se lê como RC. O Limite de Saída é de 20% da RC por turno, universal, e a curva de reserva por faixa está na Seção 9.

### 5.2 Régua de Magnitude e Par de Validação

A âncora do sistema permanece: Forte = 25–38% do PV do par por descarga. O par de validação de qualquer jutsu é o **PV do perfil Equilibrado da faixa do usuário** na Tabela de Referência de Personagens, a régua central declarada daquele documento: Veterano 960, Elite 1.440, Especial 1.920, Ápice 3.000. Regenerada a tabela, o par regenera junto.

### 5.3 Família de Dano: Fórmula Universal

A fórmula de dano para jutsus de Naruto é:

```
dano = RC nominal × coef_entrega × mult_Tipo + Fator_Moldagem

Fator_Moldagem = LV_CC² × 2,5 × coef_técnica
```

**RC nominal:** o volume que a técnica põe em campo, fixo ou variável (Seção 3.4), acrescido da carga adicional quando houver. O desperdício do executor fica fora deste termo, porque ele vira cansaço e janela e nunca potência. A penalidade de conversão de natureza entra, porque o volume convertido é maior.

**coef_entrega:** eficiência de conversão chakra→dano pela forma de entrega, declarada pela técnica. Concentrar numa estocada de ponto único converte mais dano que difundir em área; a mesma RC produz mais dano quando entregue de forma mais precisa. Para a categoria Dano em jutsus, o coef_entrega é o dono único da conversão: a regra de eficiência por alvo do Extra de área do MCP (70–80%) deixa de se aplicar a Dano, e o Extra de área governa apenas custo e cobertura. Em categorias sem coef_entrega (debuff em área, cura em área), a regra original do MCP segue intacta.

**mult_Tipo:** multiplicador do elemento (Sistema Elemental). 1,00 para jutsus sem elemento.

**Fator_Moldagem:** a contribuição da maestria. LV_CC é o nível da perícia de Controle de Chakra; cada caminho extra adquirido na perícia soma +1 nível efetivo exclusivamente para este cálculo. A curva quadrática é o motor: a maestria pesa pouco no início e domina no fim, e o bônus resultante flui de progressão não-linear já paga na economia.

**coef_técnica:** quanto a técnica aproveita o refinamento de moldagem, declarado pela técnica. Técnicas que existem pela moldagem (Chidori, Rasengan) têm coef alto; técnicas de força bruta têm coef baixo ou zero.

#### Tabela de referência: coef_entrega

| Forma de entrega | coef_entrega | Exemplo canônico |
|---|---|---|
| Fonte atmosférica real (raio, vento) | 0,35 | Kirin |
| Ponto concentrado / contato único | 0,20 | Chidori, golpe de chakra |
| Projétil único direcionado | 0,16 | Goukakyuu, Garça Cinzenta |
| Múltiplos projéteis simultâneos | 0,13 | Housenka, Revoada |
| Área irradiada do corpo | 0,12 | Nagashi, Expulsão |
| Área de terreno ou campo | 0,10 | Cobra da Terra |
| Sustentado por turno (manutenção) | 0,06 | Chamas contínuas |

A fonte atmosférica exige condição estrutural de cenário declarada no registro (nuvens de tempestade, vendaval ativo), como flaw embutida da forma. O slot de área compra pressão, negação de espaço e rider garantido em múltiplos alvos; o abate por alvo pertence às formas concentradas.

#### Tabela de referência: coef_técnica

| Dependência de moldagem | coef_técnica | Exemplo |
|---|---|---|
| Técnica que existe pela moldagem (pura) | 3,0 | Rasengan |
| Alta, moldagem como mecanismo central | 2,0 | Chidori, Raikiri |
| Média, moldagem intensifica o efeito | 1,0 | Katon genérico, Nagashi |
| Baixa, moldagem auxiliar | 0,5 | Taijutsu infundido simples |
| Nenhuma, força bruta elemental | 0,0 | Projétil básico sem forma |

#### Fator de Moldagem por nível (coef_técnica 1,0)

| LV_CC | 1 | 2 | 3 | 4 | 5 | 6 | 6 +1 caminho | 6 +2 caminhos |
|---|---|---|---|---|---|---|---|---|
| Fator | 2 | 10 | 22 | 40 | 62 | 90 | 122 | 160 |

#### Validação com âncoras canônicas

| Situação | RC nominal | coef_e | LV_CC | coef_t | Dano | Par | % PV | Tier |
|---|---|---|---|---|---|---|---|---|
| Chidori, entrada em LV5 | 750 | 0,20 | 5 | 2,0 | 388 | Elite 1.440 | 27% | Forte |
| Chidori, moldagem plena | 750 | 0,20 | 6 | 2,0 | 443 | Elite 1.440 | 31% | Forte |
| Chidori, +1t carga com LS 442 | 1.192 | 0,20 | 6 | 2,0 | 597 | Elite 1.440 | 41% | Supremo |
| Chidori, +2t carga com LS 700 | 2.150 | 0,20 | 6 | 2,0 | 933 | Especial 1.920 | 49% | Supremo |
| Rasengan, jounin LV6 | 450 | 0,20 | 6 | 3,0 | 360 | Elite 1.440 | 25% | Forte |
| Kirin, Saki (S-rank) | 1.800 | 0,35 | 6 +2c | 2,0 | 1.423 | Especial 1.920 | 74% | Forbidden¹ |

¹ Perfil de Evasão Inevitável sob condição estrutural de tempestade (Seção 6.5).

Dois executores que fecharam a mesma maestria de moldagem entregam o mesmo dano com a mesma técnica, e a diferença entre eles mora na reserva disponível para carga, fiel ao cânone do copiador que executa a técnica no nível do criador. A tabela de descarga de uma ficha é publicada por nível de Controle de Chakra, e não por nome de personagem, porque o nível é a variável que o motor lê. O Rasengan só alcança o tier Forte pleno na mão de quem fechou o LV6, a história canônica da técnica.

#### Jutsus sem elemento

Para jutsus de moldagem pura (Rasengan, Kage Bunshin como dano), mult_Tipo = 1,00. O coef_técnica é geralmente alto porque a técnica existe inteiramente pela moldagem.

```
Rasengan (B-rank, moldagem pura):
dano = RC × 0,20 × 1,00 + LV_CC² × 2,5 × 3,0
```

#### Custo variável e dano variável

Quando o custo é variável, o dano escala proporcionalmente pelo componente RC. O Fator de Moldagem permanece fixo independente do RC investido: a maestria cresce com o treino, e apenas com ele. A assimetria resultante é intencional: shinobis de moldagem alta extraem mais dano por unidade de RC; shinobis de reserva alta extraem mais dano por turno de carga.

### 5.4 Riders Elementais Canônicos

Todo jutsu elemental carrega por padrão o rider do seu Sistema Elemental:

| Natureza | Rider padrão | Status |
|---|---|---|
| Katon | Queimadura | Queimadura |
| Raiton | Paralisia | Paralisia Parcial |
| Doton | Imobilização | Imobilização |
| Fūton | Sangramento | Sangramento |
| Suiton | Lentidão | Lentidão |

Caminhos de Transformação de Natureza podem modificar o grau do rider (Leve → Moderado → Grave) ou criar variantes. O rider elemental é um rider acoplado à categoria Dano, dispensando categoria de efeito separada. O teste do rider escala pelo grau declarado, fora do alcance da compressão de limiar.

### 5.5 Categoria Genjutsu

Genjutsu usa as categorias de Estado (Controle/CC, Debuff, Transformação de percepção) com quatro diferenciais mecânicos fixos:

1. **Resolução**: a soma de VON e SAB do alvo, no lugar da defesa física, contra o motor de imposição da Perícia Genjutsu. O regente do executor é INT.
2. **Duração**: até condição de quebra, persistindo até Kai, dor física ou assistência externa.
3. **Compressão de limiar**: o investimento de RC comprime a resistência do alvo (Seção 5.6).
4. **Registro obrigatório**: todo genjutsu declara três campos na própria ficha, sem os quais a técnica não entra em compêndio.

- **Classe de quebra**, em três degraus, na ordem em que endurecem: aceita auto-liberação, exige rompimento externo, resiste aos dois. A ficha declara o piso da obra, e a escalada em jogo pertence ao caminho Amarra da Perícia Genjutsu, que sobe a classe conforme a margem de falha do alvo.
- **Canal de entrega**, entre ocular, sonoro e tátil. O canal define quem alcança o alvo, o que interrompe a imposição e quais técnicas de dissipação encontram objeto.
- **Requisito de caminho**, declarado quando o efeito depender de um verbo de especialização da Perícia Genjutsu. A técnica sem verbo de especialização declara o campo como dispensado.

### 5.6 Compressão de Limiar

Regra de origem do Manual de Criação de Poderes, consumida sem redefinição, com o denominador e os pools deste mundo declarados abaixo. Para todo efeito resolvido por **teste resistido** (genjutsu, CC, debuffs, transformações impostas), o limiar de resistência do alvo é comprimido pela RC nominal comprometida pelo usuário, e não pelo custo pago, porque o desperdício não chega ao alvo:

```
limiar de resistência = (teste oposto padrão) × (1 − RC_gasta ÷ RC_máx do usuário)
```

Escopo declarado:

- Aplica-se exclusivamente a efeitos com teste resistido. Dano escala pela fórmula própria; a esquiva pertence ao território do ignora-esquiva; os riders elementais escalam pelo grau declarado. Donos separados, sem empilhamento.
- O denominador é a RC máxima própria do shinobi. Pools externos (Besta Selada, Reencarnação) ficam fora do denominador.
- A forma acima é a geral. A perícia que publica motor próprio de imposição consome esta régua sem redefini-la e pode multiplicar o investimento por um fator de eficiência derivado do próprio teste, como faz a Perícia Genjutsu. As famílias cuja perícia ainda não publicou motor leem a forma geral, e nenhuma família lê as duas ao mesmo tempo.

A fórmula mede comprometimento relativo. O genin que despeja metade da reserva num genjutsu comprime o limiar do alvo pela metade naquele lance: a aposta de desespero canônica. A supremacia dos mestres de ilusão mora no teste oposto base, na INT alta e na Perícia Genjutsu, e o portador do Sharingan declara um motor único no ato da imposição, conforme o documento daquele dōjutsu.

### 5.7 Restrição Anti-tanque em Ranks Baixos

Leitura do contrato de disponibilidade das famílias no Manual de Criação de Poderes. As famílias de percentual de pool do alvo têm piso de escala Supremo, que na correspondência da Seção 1.1 começa em A-rank. Abaixo de A-rank, essas famílias ficam indisponíveis.

---

## 6. Dimensões e Módulos

### Modelo de acerto do cenário

Instância do ponto de extensão de modelo de acerto. Neste mundo não existe rolagem de acerto. Vantagem ofensiva se expressa como redução da esquiva efetiva do alvo, e o eixo declarado no registro de toda técnica ofensiva de alvo é quão evitável ela é por construção, na escada do Perfil de Evasão da Seção 6.5. As demais formas de resolução, automático, teste resistido, área sem teste e efeito parcial em falha, entram na forma publicada no manual de núcleo.

### 6.1 Selos de Mão

O número de selos é uma dimensão mecânica com impacto tático.

| Selos | Faixa de rank típica | Impacto mecânico |
|---|---|---|
| 0 | Qualquer (dojutsu, Taijutsu, Hiden) | Sem detecção por postura de selos |
| 1–3 | E/D | Quase impossível de interromper por detecção |
| 4–7 | C/B | Interrompível se o alvo detecta e age antes do disparo |
| 8–14 | B/A | Janela de interrupção significativa |
| 15+ | A/S | Cada turno de selos é uma janela de vulnerabilidade |

**Detecção:** perceber que um ninja está formando selos é teste de PRE_alvo vs. VEL_executor. Sucesso pleno identifica o jutsu; sucesso justo indica que algo poderoso está sendo preparado.

**Referência e contagem real.** A ficha de uma técnica publica os selos de referência, que são a contagem-teto. Os selos reais de cada executor saem da régua Interface de Selos, em Controle de Chakra v2, que comprime a referência pela raiz da razão entre o teste de interface e 205. A tabela acima descreve o impacto tático da contagem real, e não o requisito da técnica.

**Assinatura selada.** A ficha declara se a técnica admite execução com zero selos por maestria plena. Quando admite, a execução exige o caminho Concisão adquirido ou teste de interface igual ou superior a 169.

**Redução além da perícia:** execução com uma mão e reduções além das concedidas por perícia são Extras de comportamento pagos em XP (Seção 4.1.2).

### 6.2 Interrupção de Canalização

Durante turnos de canalização (Janela > 0), o executor é vulnerável:

- **Dano ≥ 15% do PV máximo** em um único golpe: interrompe; a RC acumulada é perdida.
- **CC duro** (atordoamento, paralisia completa): interrompe automaticamente.
- **CC suave** (lentidão, debuff leve): mantém a canalização e aumenta a janela em +1 turno.

### 6.3 Execução em Movimento

Por padrão, jutsus que requerem selos precisam de posição estável. Executar em movimento pleno é Extra de comportamento (Seção 4.1.2) disponível apenas para:

- Técnicas C-rank ou inferior, ou
- Ranks superiores com caminho de perícia que concede essa capacidade explicitamente.

Taijutsu executa em movimento por definição, livre dessa restrição.

### 6.4 Requisitos de Uso

Todo jutsu declara seus requisitos mínimos:

- **Perícia de Controle de Chakra:** nível mínimo para moldagem correta.
- **Perícia elemental:** obrigatória para qualquer jutsu que exija Transformação de Natureza. O portão de rank (LV1=E, LV2=D, LV3=C, LV4=B, LV5=A, LV6=S) define o mínimo de perícia elemental para executar o jutsu, idêntico ao definido no Sistema Elemental.
- **Contrato (Invocação):** ativo no momento da execução.
- **Dojutsu ativo (se aplicável):** custo do dojutsu é separado e adicional ao custo do jutsu.

### 6.5 Perfil de Evasão

Dimensão obrigatória de todo jutsu ofensivo de alvo. Declara quão evitável a técnica é por construção, em cinco degraus fixos, cada um com comportamento próprio na mesa:

| Perfil | Esquiva do alvo | Comportamento próprio | Contrapartida |
|---|---|---|---|
| **Telegrafado** | +25% | o alvo que gasta a reação esquivando fica fora de posição e perde nova esquiva até o próximo turno dele | coef_entrega um degrau acima na tabela |
| **Padrão** | plena | nenhum | nenhuma |
| **Veloz** | −25% | primeiro uso no combate contra cada alvo: −40%; o fator surpresa se perde ao ser visto | +15% no custo de RC |
| **Teleguiado** | −50% | persegue por 1 turno adicional se o alvo esquiva; a esquiva repetida contra a mesma perseguição preserva o malus | +30% no custo de RC e Extra pago em XP |
| **Inevitável** | anulada | apenas Absorção e Resistência mitigam | condição estrutural obrigatória declarada no registro; rank A mínimo |

O Telegrafado é a única fonte de coef_entrega elevado fora da forma física da técnica: o arquétipo do golpe devastador que todo o campo vê chegando. O Inevitável exige condição externa ao usuário, na régua do Kirin: a tempestade precisa existir, e a técnica dispara enquanto ela existir. Sem condição estrutural, o teto é Teleguiado.

As sobretaxas percentuais desta escada e dos módulos da Seção 6.6 incidem sobre a RC nominal durante a construção da técnica, e o custo mínimo acompanha como terça parte do resultado. A ficha publica as duas grandezas já fechadas, com a sobretaxa embutida.

Caminhos de perícia e transcendências podem mover um jutsu um degrau na escada (o especialista que eleva seu Chidori de Veloz a Teleguiado), como elevação categórica comprada com progressão.

A previsão do Sharingan opera sobre a esquiva do portador contra técnicas alheias, em slot defensivo próprio; o Perfil de Evasão opera sobre a esquiva do alvo, no slot da técnica. As camadas compõem com donos separados, e a matemática do dōjutsu vive no documento de Sharingan.

### 6.6 Módulos de Comportamento

O menu de Extras, Gatilhos, Ativações e Durações do MCP organizado em cinco slots com dono. Todo jutsu declara seus módulos no registro, com **no máximo um módulo por slot**, e slots vazios são legais: forma, elemento e rider já constituem identidade completa.

| Slot | Pergunta que responde | Opções (origem) | Precificação |
|---|---|---|---|
| **Evasão** | quão evitável é? | a escada da Seção 6.5 | fechada na 6.5 |
| **Persistência** | deixa algo no mundo? | zona ativa por N turnos, persistente, marca no alvo (Extras MCP) | manutenção fixa da RC na taxa 0,06 de sustentado |
| **Trajetória** | como chega ao alvo? | ricochete, salva multi-alvo, atravessa cobertura, cortina que bloqueia visão (Extras MCP) | percentual sobre o custo de RC via `custo × (1 + extras − flaws)` |
| **Tempo** | quando resolve? | gatilho retardado, armadilha, carregado, reativo (Ativação e Gatilho MCP) | flaws descontam (carga lenta, requer setup); gatilhos automáticos pagam extra |
| **Choque** | intercepta no ciclo elemental? | perfil de interceptação: a técnica pode ser disparada como reação a técnica elemental inimiga, resolvendo pela Força de Choque do Sistema Elemental | +20% no custo de RC e Extra pago em XP; exclusivo de jutsus elementais |

O slot de Trajetória preserva o coef_entrega intocado: um projétil que ricocheteia continua convertendo a 0,16. Módulos compram comportamento; a forma converte chakra.

O slot de Choque define quais técnicas participam do confronto elemental por escolha de construção. A parede de Suiton com perfil de interceptação reage ao Katon inimigo em turno alheio; o Katon ofensivo puro dispara apenas no próprio turno. A economia de ação do ciclo passa pelo registro da técnica.

---

## 7. Configurações Especiais

### 7.1 Kage Bunshin

Kage Bunshin divide a RC real entre os clones. Cada clone recebe `RC_total ÷ (número_de_clones + 1)` de RC de partida. **O clone é um executor pleno limitado apenas pela RC que carrega**: paga custos, custos efetivos de conversão, janelas de canalização e aftermaths pelas próprias regras, com a própria reserva e o próprio LS de 20%. Clones de pouco chakra canalizam devagar e estouram sob o aftermath de técnicas altas. Quando destruído, o clone devolve o chakra restante e as memórias acumuladas ao usuário.

O custo do jutsu usa a família **por alvo** do MCP: base de C-rank para o primeiro clone, com incremento fixo por clone adicional, e o rank lido pelo custo total conforme a regra de custo variável. O Kage Bunshin de 1 clone é C-rank; o Tajuu Kage Bunshin escala até S-rank e Kinjutsu como consequência aritmética da mesma fórmula.

### 7.2 Invocação

Requisitos anteriores a qualquer gasto: (a) contrato de sangue ativo com a espécie e (b) RC proporcional ao poder do invocado. O contrato é evento narrativo; o Narrador autoriza o acesso. Sem contrato, nenhuma RC compra a invocação.

O custo de RC é proporcional ao ser invocado, acima do rank do jutsu-base (D-rank para invocações menores). Gamabunta é S-rank em custo, independente de qual ninja invoca. O jutsu de Invocação é o mecanismo; o ser invocado é o determinante real de custo.

Instância do motor de entidade do Manual de Criação de Poderes. As invocações nomeadas deste cenário operam no modo de ficha registrada: a criatura tem ficha própria construída contra a Tabela de Referência de Personagens, e a escala do jutsu se lê da faixa da criatura. O modo de fração fica reservado a invocações genéricas e a construtos, e nenhuma invocação lê os dois modos.

### 7.3 Fuuinjutsu: Custo Duplo

Fuuinjutsu com efeitos permanentes ou de longa duração declara dois custos:

- **Custo de preparação (RC):** pago no ato de inscrever o selo. Pode ser distribuído em múltiplos turnos de ritual, pela família Manutenção fixa ou Manutenção crescente para o período de escrita.
- **Custo de acionamento (RC):** pago para ativar o efeito inscrito. Pode ser zero (selo de gatilho automático) ou baixo (acionamento à distância com chakra mínimo).

O Hiraishin no Jutsu tem preparação paga no momento de inscrever as marcas nos kunai; cada kunai marcado custou RC antecipadamente. O teletransporte em si custa uma fração desse valor. Por isso Minato alcançava teletransporte quase gratuito em combate: o custo já estava pago.

### 7.4 Jutsu de Equipe

Dois ou mais ninjas executam o jutsu em conjunto. O custo de RC pode ser dividido entre os participantes (cada um paga sua fração) ou concentrado em um deles (o outro amplifica). O rank resultante pode ser um degrau acima do que cada participante alcançaria sozinho.

O custo de XP é individual para cada participante, com desconto de −25% por membro adicional que também aprende o jutsu. Todos precisam ter aprendido o jutsu para executá-lo em conjunto.

### 7.5 Jutsu com Dojutsu

Técnicas que requerem dojutsu ativo têm o custo do dojutsu declarado separadamente do custo do jutsu. O registro do jutsu cobre apenas a técnica em si. O custo de ativação e manutenção do dojutsu está no documento do dojutsu correspondente (Sharingan, Mangekyō), e ambos disputam o mesmo LS de 20% no turno.

---

## 8. Processo

### 8.1 Decisão

1. **Rank:** qual tier de ninja usa esta técnica? O custo de RC esperado bate com a faixa?
2. **Tipo:** Ninjutsu / Taijutsu / Genjutsu / Fuuinjutsu / Hiden? As regras de resistência mudam conforme o tipo.
3. **Natureza elemental:** se aplicável, qual? Qual perícia elemental é requisito?
4. **Categoria de efeito principal:** o que o jutsu faz? As quinze categorias do Manual de Criação de Poderes, com a régua e o motor da categoria correta.
5. **Se efeito de Dano:** declarar coef_entrega e coef_técnica (tabelas da Seção 5.3). Validar o dano resultante contra a Régua de Magnitude, no par Equilibrado da faixa do usuário.
6. **Se efeito não-Dano:** família de magnitude e de custo pelo catálogo do manual de núcleo, com o piso de escala conferido; se resistido, aplicar a compressão de limiar (Seção 5.6).
7. **Dimensões e módulos:** selos, alcance, duração, condição de quebra (genjutsu), Perfil de Evasão, módulos por slot, extras, flaws, riders.
8. **Custo de chakra:** calcular RC declarada; verificar Janela de Canalização sobre o custo efetivo para o tier de usuário pretendido.
9. **Custo de XP:** interpolação dentro da faixa do rank (Seção 4.1.1), extras de comportamento, modificadores.

### 8.2 Criação

Definir cada efeito pela régua (Seção 5 deste manual + MCP Seção 2), aplicar família de cálculo (MCP Seção 3), configurar dimensões e módulos (Seção 6 deste manual + MCP Seção 4), adicionar riders elementais, calcular RC, custo efetivo e Janela de Canalização, aplicar aftermath do rank. Calcular o custo de XP pela interpolação.

### 8.3 Validação

- **Rank consistente:** o custo de RC bate com a faixa? O efeito é proporcional ao tier?
- **Janela coerente:** para o tier de usuário pretendido e a relação de afinidade, a canalização é narrativamente plausível?
- **XP calibrado:** o custo interpolado respeita a hierarquia técnica/perícia? Uma técnica custa menos que a disciplina completa que a gateia.
- **Sem camada duplicada:** um módulo por slot; o rider elemental fora das categorias de efeito separadas; a compressão de limiar aplicada só ao efeito resistido primário; a penalidade de área resolvida pelo coef_entrega como dono único; o mult_Tipo sem empilhar em multiplicador pessoal de caminho elemental sem aprovação.
- **Tipo compatível com resistência:** genjutsu tem condição de quebra? Fuuinjutsu tem custo de preparação e acionamento separados?
- **Requisitos declarados:** perícia elemental mínima, nível de Controle de Chakra, contrato ou dojutsu, Perfil de Evasão, condição estrutural se Inevitável.
- **Contrato de efeito completo:** os oito campos do Manual de Criação de Poderes preenchidos, tipo, ação, custo, teste, números, interações, etiqueta e âncora de validação, com todos os valores resolvidos.
- **Sem dificuldade arbitrada:** nenhum efeito resolve por número escolhido pelo Narrador no momento. A resolução corre por oposição, por limiar lido de um teste, ou por categoria.
- **Faixa verificada:** toda régua que leia teste de perícia foi substituída nos níveis 1, 3, 4, 5 e 6 antes de publicar, e duas construções do mesmo nível diferem por mais de um ponto percentual.
- **Ancoragem declarada:** o jutsu nomeia o que lê da ficha, atributo, perícia e camada, e nenhuma grandeza tem duas fontes.

---

## 9. Referência: Escala de RC por Tier de Shinobi

Para o RPG de Naruto com xpBase = 3.000 (conforme Núcleo do Sistema v3):

| Tier | Equivalente | XP estimado | RC típica | LS (20%) |
|---|---|---|---|---|
| Genin baixo | Acadêmico avançado | ~40k | 400–800 | 80–160 |
| Genin alto / Chuunin | Combatente ativo | ~90k | 700–1.400 | 140–280 |
| Jounin | Veterano | ~175k | 1.200–2.500 | 240–500 |
| Elite / ANBU | Elite | ~270k | 2.000–4.000 | 400–800 |
| Kage / Especial | Lenda | ~400k+ | 3.500–7.000+ | 700–1.400 |

RC real depende do multiplicador de clã, atributos RES/FOR/PV e dado de potencial. Os valores acima são referência para validação. O LS de 20% é universal; a assimetria de afinidade opera pelo custo efetivo (Seção 3.2).

**Nota sobre xpBase:** o Núcleo do Sistema v3 define xpBase 3.000 para o RPG de Naruto. Réguas de outros cenários (xpBase 2.500 do ruleset JJK) escalam pela razão dos xpBase ao serem usadas como comparadores.

---

## 10. Registro de Instâncias dos Pontos de Extensão

O Manual de Criação de Poderes publica doze pontos de extensão. Esta seção declara o preenchimento do cenário Naruto em cada um, e é a tabela que qualquer documento deste mundo consulta para saber onde a regra concreta mora.

| Ponto de extensão | Instância do cenário Naruto | Onde vive |
|---|---|---|
| Curva de recurso | Reserva de Chakra, com Limite de Saída de 20% por turno | Seções 3.1, 3.2 e 9 deste manual |
| Tipagem de efeito | naturezas elementais, com mult_Tipo e rider padrão por natureza | Sistema Elemental, consumido pela Seção 5.4 |
| Coeficientes da forma de dois termos | coef_entrega na conversão, Fator de Moldagem como termo de maestria, coef_técnica como coeficiente de obra | Seção 5.3 deste manual |
| Camadas de defesa | absorção, resistência e esquiva efetiva | documentos de defesa do cenário, lidos pela Seção 6.5 |
| Eixo de evitabilidade | Perfil de Evasão em cinco degraus | Seção 6.5 deste manual |
| Modelo de acerto | sem rolagem de acerto, vantagem ofensiva como redução de esquiva | abertura da Seção 6 deste manual |
| Modulação de aquisição | faixas de XP por rank com interpolação, mais os modificadores de afinidade, clã e acesso | Seção 4 deste manual |
| Réguas de Percepção | cobertura por custo de tempo, atenuação por meio e resolução por objeto de leitura | Perícia de Sensoriamento |
| Sistema de status | condições, graus e a escada de severidade que o Refluxo paga | Sistema de Efeitos de Status |
| Correspondência de escala | ranks E a Kinjutsu contra as escalas de Utilidade a Transcendente | Seção 1.1 deste manual |
| Âncora | via de fórmula é o jutsu-shiki inscrito, via de impregnação é o símbolo em ferramenta própria; as operações contra âncora de fórmula são as do ofício de selamento | Perícia de Fūinjutsu e Perícia de Passagem |
| Estrutura de vazios | adotada. Cada técnica de travessia abre vazio próprio, e a fronteira erguida em um vazio não se estende sobre outro | Perícia de Passagem e Perícia de Barreira |

Os doze pontos estão preenchidos. O `mult_Tipo` aponta para o Sistema Elemental, que publica a tabela de multiplicadores por natureza na seção de Tipos Elementais daquele documento, de modo que o slot está apontado e cheio e jutsu elemental novo fecha validação.

---

## 11. Registro de Alterações

**v2.5.** Alinhamento ao Manual de Criação de Poderes v3.2. Chegou um documento se declarando v2.3 e citando o manual de núcleo em v3.2, mas ele descendia apenas da linha de realinhamento ao núcleo que esta versão já havia absorvido na v2.4 — não conhecia a Seção 2.8, Kyūinjutsu, nem a Seção 4.1.3, Estimativa de XP sem RC, ambas de uma segunda linha reunida naquela versão. É a mesma colisão de numeração que gerou a v2.4, uma geração adiante: duas linhas de trabalho, um número de versão, cada uma cega para o que a outra carregava. Nada daquele documento substituiu texto algum aqui; apenas o que ele acrescentava de fato ao alinhamento com o núcleo entrou.

Do que entrou: as categorias do manual de núcleo passaram de quatorze para quinze, com a categoria Interceptação separando o verbo de tomar efeito alheio em trânsito das famílias de cálculo que o computam. O registro de instâncias, Seção 10, ganhou as duas linhas dos pontos de extensão novos daquela versão do núcleo, Âncora e Estrutura de vazios, preenchidas pela Perícia de Fūinjutsu, pela Perícia de Passagem e pela Perícia de Barreira. A compressão de limiar e a fórmula de dois termos, já reapresentadas como instância na v2.4, não mudam, porque a v3.2 do núcleo não tocou nelas.

**v2.4.** Alinhamento ao Manual de Criação de Poderes v3.1, e reunião de duas linhas de trabalho que corriam em paralelo sob o mesmo número de versão.

Do alinhamento ao manual de núcleo: este documento passa a se declarar manual tradutor do cenário, e nenhum documento do mundo lê o manual de núcleo diretamente. As cinco correções que este manual carregava sobre o núcleo foram revogadas por terem virado regra de origem lá. A cláusula de tradução de precisão deu lugar à declaração do modelo de acerto como instância. O Perfil de Evasão deixou de ser substituição da dimensão de confiabilidade e passou a ser instância do eixo de evitabilidade. A restrição anti-tanque passou a ser leitura do contrato de disponibilidade de família. A compressão de limiar passou a consumir a regra de origem. As categorias passaram de treze para quatorze. A invocação foi declarada como instância do modo de ficha registrada do motor de entidade. Nasceu o registro de instâncias dos pontos de extensão. A validação ganhou o contrato de efeito de oito campos, a proibição de dificuldade arbitrada, a verificação de faixa e a ancoragem em ficha.

Da outra linha: nasce a Seção 2.8, Kyūinjutsu, classificação do dreno de chakra, com vetor em três degraus, resolução por oposição, régua de quantidade ancorada em 205, teto lido da Recepção de Chakra Externo, sobrecarga deliberada, cláusula do senjutsu e registro de cedências.

O que a v2.3 fixou permanece e não foi revertido: as três grandezas de chakra da Seção 3.1, a compressão de limiar lida sobre a RC nominal e não sobre o custo pago, a Seção 4.1.3 no corpo do documento, e a leitura do aftermath que tira o limite diário do Chidori da conta. Duas versões distintas do manual circulavam numeradas 2.2, e ambas foram escritas antes desses quatro pontos; nenhuma delas os continha.

Duas correções entraram na reunião. A Seção 2.8 citava a Defesa do Circuito e o Corte de Fluxo como publicados na *inclinação* Contenção, escrita contra a partição de Controle de Chakra v2; na v3 Contenção é caminho da inclinação Retenção, e a citação foi corrigida. E a pendência que declarava o `mult_Tipo` apontado e vazio foi fechada, porque o Sistema Elemental publica a tabela desde antes desta versão.

Nenhum valor publicado anteriormente foi alterado.

---

## 12. Instruções para a IA

1. Leia a fantasia central do jutsu antes de qualquer número. Qual é o efeito que o ninja quer alcançar? Com que frequência e em que contexto?
2. Determine o rank pelo perfil de usuário: quem usa esta técnica no cânone ou equivalente? Que tier é esse ninja? O custo de RC resultante bate com a faixa do rank?
3. Identifique o tipo de jutsu e declare as regras de resistência correspondentes. Genjutsu exige condição de quebra e compressão de limiar; Fuuinjutsu exige custo duplo; Hiden exige restrição de clã.
4. Se elemental, confirme a natureza, aplique mult_Tipo e rider do Sistema Elemental, e registre que executores fora da afinidade pagam custo efetivo ×1,3.
5. Defina categoria de efeito, família de magnitude, dimensões e módulos (um por slot). Declare o Perfil de Evasão de todo jutsu ofensivo de alvo. Calcule o custo de RC.
6. Calcule a Janela de Canalização sobre o custo efetivo para o tier de usuário pretendido. Se o resultado destoa da narrativa, ajuste o custo ou aplique Extras de comportamento com impacto de XP.
7. Calcule o custo de XP pela interpolação dentro da faixa (Seção 4.1.1), extras de comportamento e modificadores, nesta ordem, com floor no final.
8. Valide: rank consistente, janela coerente, XP calibrado, sem camada duplicada, requisitos declarados, aftermath aplicado a partir de A-rank.
9. Se o rank não foi declarado, proponha um com justificativa de uma frase.
10. Nunca invente propriedade canônica sem marcação `[proposta]`. Silêncio canônico é silêncio: declare-o e decida, sem apresentar invenção como fato canônico.

---

*Manual de Criação de Jutsus v2.5, manual tradutor do cenário Naruto para o Manual de Criação
de Poderes v3.2. Rank é o envelope canônico com aftermath a partir de A. Custo de chakra é
absoluto em RC sob Limite de Saída universal de 20% e custo efetivo por afinidade, separado em
RC nominal, custo mínimo e custo pago. O dano é a instância local da forma de dois termos, com a
parcela de conversão em RC vezes coef_entrega vezes mult_Tipo e a parcela de maestria em LV_CC ao
quadrado vezes 2,5 vezes coef_técnica. O custo de XP interpola a posição na faixa do rank, ou lê a
matriz de estimativa quando a ficha ainda não existe. Os efeitos plugam nas quinze categorias do
manual de núcleo, e as doze instâncias deste mundo estão declaradas na Seção 10. A identidade da
técnica vem da forma, do Perfil de Evasão e dos Módulos de Comportamento em cinco slots com dono.*
