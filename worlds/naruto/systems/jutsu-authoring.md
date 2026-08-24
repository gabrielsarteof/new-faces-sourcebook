---
id: naruto.system.jutsu-authoring
title: "Manual de Criação de Jutsus"
version: 3.6
layer: scenario
scenario: naruto
type: methodology
status: final
source-file: Manual_de_Criacao_de_Jutsus_v2_7.md, mais o Consolidado do motor de jutsus, o Núcleo de Combate v3 e a Errata E1 v2
---

# Manual de Criação de Jutsus · v3.6

**Guia técnico para a criação de técnicas shinobi estudáveis no RPG de Naruto. Manual tradutor do cenário Naruto para o Manual de Criação de Poderes v3.3.**

Este documento é o manual tradutor do cenário Naruto. Ele consome o Manual de Criação de Poderes v3.3, preenche os pontos de extensão daquele manual com os valores deste mundo e publica a interface que os documentos de técnica, perícia e clã efetivamente usam. Nenhum documento do cenário lê o Manual de Criação de Poderes diretamente. O preenchimento completo dos pontos de extensão está na Seção 10.

Jutsu é técnica: pode ser ensinada, copiada, aprimorada e, em muitos casos, proibida. A diferença entre um jutsu e um poder de clã é de origem. O Sharingan é um poder; o Amaterasu é um jutsu que o Sharingan permite executar. Um jutsu pode ser absurdamente poderoso e ao mesmo tempo tecnicamente ensinável a quem tem chakra e controle suficientes. Um poder de clã é concedido pelo sangue e permanece fora do alcance de qualquer estudo.

Este manual cobre apenas jutsus. Poderes inatos, vantagens de clã, kekkei genkai e kekkei tōta são tratados pelo Manual de Criação de Poderes, que permanece a base de cálculo para todos os efeitos.

```
RANK                    o que o jutsu pode fazer e quem pode usá-lo
   ▲
TIPO DE JUTSU           como ele funciona e como é resistido
   ▲
CUSTO DE CHAKRA         RC limpa, Limite de Saída por posição e Janela de Canalização
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
> envelope canônico da técnica. O custo de chakra é absoluto em RC; o Limite de Saída, cuja largura
> se lê da posição do executante na natureza empregada, determina se a canalização é instantânea ou
> requer preparação. O custo de XP reflete o esforço
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
| Kinjutsu | burnout | PV igual a 15% do PV máximo, dano direto sem mitigação, declarado no registro da técnica, somado ao preço narrativo da proibição `[proposta]` |

O aftermath de S-rank produz o shinobi ofegante após a técnica definidora: a reserva permanece, o fluxo despenca, e por um turno o executor só canaliza o que couber em 10% da RC. Clones que executam técnicas com aftermath o pagam com o próprio corpo (Seção 7.1).

A magnitude de 15% do PV máximo para o burnout de Kinjutsu é lida por analogia à régua do aftermath de rank A, que também expressa o preço em fração de recurso, e permanece `[proposta]` até este manual fixar o número oficial. O Tajū Kage Bunshin no Jutsu adota esse valor na faixa Kinjutsu (`worlds/naruto/techniques/taju-kage-bunshin.md`).

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

**Cedências.** A captura de técnica com devolução na forma original pertence a Fuuinjutsu, e o dreno sustentado de entidade selada pertence à Válvula do mesmo documento. A doação consentida e a recusa do dreno pertencem a Controle de Chakra. A colheita de energia natural pertence a Senjutsu. O dreno por dōjutsu pertence ao Manual de Técnicas Oculares. O dreno por arma, por recurso vivo de clã e por entidade pertence ao documento de arma, ao documento de clã e ao documento de entidade, cada um consumindo esta seção sem redefini-la. O lado aberto e treinável do dreno, por Contato e por Meio, contra alvo que resiste e sem selo, sem clã e sem contrato, pertence à Perícia de Kyūinjutsu, que consome a régua de quantidade, o teto de recepção e a cláusula do senjutsu publicados aqui sem redefini-los.

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

O Limite de Saída (LS) define o fluxo máximo de chakra que o sistema circulatório canaliza de forma sustentada, e é um cano único: jutsus, manutenção de dōjutsu e efeitos sustentados disputam o mesmo fluxo no mesmo turno. A Reserva de Chakra é a dona da grandeza, e a largura do cano se lê da posição do executante na natureza empregada.

| Posição do executante na natureza empregada | Limite de Saída |
|---|---|
| Afinidade | 25% da RC por turno |
| Compatibilidade | 20% da RC por turno |
| Natureza aprendida | 15% da RC por turno |
| Jutsu sem natureza elemental declarada | 20% da RC por turno |

Quando o executante emprega mais de uma natureza no mesmo turno, a largura é a menor entre as posições empregadas, porque o cano permanece único e não se soma por natureza. Toda fonte que amplie o LS o faz por fator sobre a largura da posição, nunca substituindo o número por um valor absoluto. O LS se lê sempre da RC máxima do executante.

A largura por posição é a segunda frente pela qual a vocação se expressa. A primeira é o custo, abaixo. O nativo escoa mais por turno e dispara direto o que o executante de natureza aprendida precisa acumular, e a diferença aparece na Janela de Canalização sem que nenhuma regra adicional a produza.

A assimetria entre as naturezas de nascença e as aprendidas mora no custo. O chakra convertido para uma natureza que o shinobi não trouxe de berço consome parte de si na própria conversão:

```
Custo efetivo em RC:
   Natureza de nascença (Afinidade ou Compatibilidade)   custo declarado × 1,0
   Natureza aprendida                                    custo declarado × 1,3
   Jutsu sem elemento                                    custo declarado × 1,0
```

Os valores declarados no registro do jutsu são sempre os de nascença. O rank é lido pela RC nominal declarada; a penalidade de conversão pertence ao executor e incide sobre o custo mínimo, antes da aplicação do desperdício, e sobre a RC nominal na mesma proporção. Ela alcança as duas pontas da economia: o shinobi paga mais RC, entrega mais dano pelo volume convertido e, pelo mesmo movimento, empurra a técnica para janelas de canalização mais longas.

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

| Jutsu | Rank | RC nominal | Mínimo | Executor | Posição | Pago | RC | LS | Janela | Canon |
|---|---|---|---|---|---|---|---|---|---|---|
| Goukakyuu | C | 180 | 60 | Sasuke genin, teste 60 | Afinidade | 157 | 1.325 | 331 | 0t | Usa livremente ✓ |
| Rasengan | B | 600 | 200 | jounin de moldagem plena | sem natureza | 200 | 2.211 | 442 | 0t | Executa no ato ✓ |
| Chidori | A | 750 | 250 | jounin de moldagem plena | Afinidade presumida | 250 | 2.211 | 553 | 0t | Sem selos no ápice ✓ |
| Chidori | A | 750 | 250 | Kakashi, teste 185 | Afinidade | 250 | 942 | 236 | 1t | Carga visível, 3 usos ✓ |
| Chidori | A | 750 | 250 | Sasuke genin, teste 60 | aprendida | 656 | 1.325 | 199 | 2t | Corrida telegrafada, 2 usos ✓ |
| Rasenshuriken | S | 2.100 | 700 | piso do degrau Absoluto, teste 84 | Afinidade presumida | 1.619 | 3.800 | 950 | 1t | Carga visível na abertura ✓ |

A posição de cada linha segue a régua de preenchimento do eixo de posição elemental: o personagem nomeado recebe a posição que o cânone lhe dá, e o perfil genérico recebe Afinidade com a presunção registrada na própria linha. `[canon]` O Raiton é a vocação de Kakashi e o Katon é a do Uchiha, e o Raiton chegou a Sasuke por treino sob instrução.

A régua reproduz a progressão canônica da mesma técnica ao longo da vida de um shinobi. O genin que treinou o elemento acumula por dois turnos e anuncia a investida, o executor de reserva média que nasceu com ele carrega um turno visível, e o mestre dispara no ato. O limite diário de quatro usos do Chidori atribuído a Kakashi resolve pela recuperação de reserva entre encontros, com três usos disponíveis dentro de um combate único.

A largura por posição aprofunda a distância entre as três linhas de Chidori sem alterar nenhuma delas de conclusão. A única linha que muda de resultado é a do Rasenshuriken, que desce de dois turnos para um: o cano de vinte e cinco por cento da vocação de Vento comporta em uma janela o que o cano universal exigia em duas, e a leitura canônica de uma abertura estática se preserva com a janela mais curta.

Um Suiton hipotético de 750 de RC nominal, executado por Sasuke em natureza aprendida, sobe para 975 de nominal e 325 de mínimo, e a janela acompanha o custo pago resultante. A mesma técnica, dois tempos, conforme a relação do shinobi com o elemento.

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

**Âncoras ilustrativas de budget.** O orçamento de jutsus compete com atributos e perícias dentro do mesmo XP de Ficha; o sistema reserva fração nenhuma. Um jonin de rotina (~160k XP, `core/canon-factor.md`), após atributos de faixa Elite e as perícias-chave de Controle de Chakra e Transformação de Natureza, sustenta uma A-rank assinatura, duas ou três B-ranks confiáveis e um arsenal C/D/E versátil. Saki (640k XP sob o Cânone vigente) tem orçamento de jutsu maior que o calculado para a v1 deste manual; a repartição por rank publicada até aqui presumia ~500k e precisa de nova passada.

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
| Rasengan | 600 | B | 71,4% | 6.714 |
| Chidori | 750 | A | 6% | 8.750 |
| Kirin | 1.800 | S | 12% | 23.600 |

O Chidori próximo ao piso de A-rank é leitura correta: o custo de RC é modesto para o rank, e o poder real vem da moldagem, barata de aprender para quem já carrega a perícia.

### 4.1.3 Estimativa de XP sem RC

A seção 4.1.1 apura o XP a partir da RC nominal, e por isso só funciona depois que a técnica já foi construída. O compêndio de um domínio precisa publicar preço antes disso, porque o jogador decide a compra na criação de personagem e a ficha completa só é produzida para o que foi efetivamente adquirido. Esta seção fornece a estimativa que ocupa esse intervalo.

**Quando se usa.** Enquanto a técnica não possuir ficha individual com RC nominal apurada. Publicada a ficha, a apuração da 4.1.1 substitui a estimativa.

**O que a estimativa mede.** Não o volume de reserva que a obra consome, e sim a entrega que ela produz e a resposta que impõe ao par. A leitura é feita sobre a descrição canônica da técnica, respondendo três perguntas.

Quanto do par a obra derruba quando conecta, indo de arranhão a ferimento sério, a golpe que decide a troca, a golpe que decide a luta. O que ela obriga o par a gastar para não ser simplesmente absorvida, indo de nada além do turno a PS ou meia ação, a uma ação inteira ou camada suprimida, a recurso que o par típico não carrega garantido. O que sobra dela no campo depois de resolvida, indo de nada a marca que dura a cena, a terreno que muda a leitura do combate.

As três perguntas leem o mesmo eixo que a Régua de Resposta abaixo formaliza em cinco degraus, e é essa convergência que permite às duas vias, a ofensiva e a útil, produzirem posição pela mesma matriz.

**O coeficiente técnico entra na estimativa, o nível do executor não.** O que a leitura nunca taxa é o investimento do jogador na perícia de Controle de Chakra, porque o executor de referência é fixo por rank e o mesmo para qualquer comprador. O que ela taxa, pelo modificador abaixo, é o quanto a obra em si depende de moldagem para existir, propriedade da ficha e não do personagem. As duas coisas não são a mesma taxa cobrada duas vezes: uma é do jogador, paga na perícia, e a outra é da técnica, paga no preço dela.

#### Posição por entrega, para técnicas ofensivas

A técnica que entrega dano tem a posição lida da própria entrega, medida com o executor de referência do rank contra o par do rank, exatamente como os pisos da Seção 5.2.

```
posição = (% entregue contra o par − piso do rank) ÷ (piso do rank seguinte − piso do rank)
```

**Topo da faixa de posição.** O denominador é a diferença entre o piso do próprio rank e o do rank seguinte, de modo que toda faixa tem topo por construção, e ele é o piso do rank seguinte. Apenas o rank S carece de rank seguinte, e ali a faixa lê o intervalo entre o piso de 65% e a entrega integral do par.

A posição se limita a 100% e tem piso em zero. As duas travas são regra e não arredondamento, e o corpus publica um exercício de cada: o Chidori Senbon entrega 37,9% do par no rank A, abaixo do piso de 40%, e trava a posição em zero; o Shiden entrega 65,6% no mesmo rank, acima do topo de 65%, e trava a posição em 100%. Uma obra de rank A que entregue acima do piso do rank S está entregando trabalho de rank S e paga o topo da própria faixa, o que é limite de preço e nunca de entrega: o teto anti-inflação, que limita entrega, não existe no rank A.

A leitura roda apenas no executor de referência. Medir também na mão do mestre desfaria a calibração, porque os pisos foram fixados contra o par do rank da técnica com o executor de referência, e trocar qualquer um dos dois lados desfaz a régua inteira. A maestria paga fora da posição, pelo modificador abaixo.

**Modificador de coeficiente técnico.** A obra que aproveita mais refinamento de moldagem que o padrão do próprio rank vale mais, e a que aproveita menos vale menos. O `w` da Seção 5.3 não aparece na posição, porque o executor de referência resolve `M = 1` por construção, e é aqui que ele é cobrado.

```
XP final = XP da posição × (coef_técnica ÷ coef padrão do rank)
                            piso do modificador: 0,5
```

O piso existe porque a obra de coeficiente 0,0 ainda custa chakra, ação e risco, e preço zero é impossível. O valor de 0,5 é o próprio padrão do rank E, o menor que o sistema publica, e o piso diz que nenhuma obra vale menos que a obra mais barata que o sistema reconhece. Ele incide sobre o modificador e nunca sobre o coeficiente declarado, que segue livre para 0,0 na ficha.

| Rank | Coeficiente técnico padrão |
|---|---|
| E | 0,5 |
| D | 1,0 |
| C | 1,5 |
| B | 2,0 |
| A | 3,0 |
| S | 4,0 |

#### Régua de Resposta, para técnicas úteis

A técnica que não entrega dano não tem entrega a medir, e a posição dela se lê pela resposta adequada mais barata que o par da faixa possui contra ela. Uma obra vale o que custa desfazê-la.

| Degrau | Posição | Resposta adequada mais barata do par |
|---|---|---|
| 1 | 10% | reação que ele já possui, sem gasto além do turno |
| 2 | 25% | PS ou meia ação, ou perda de uma fonte de leitura do campo |
| 3 | 40% | uma ação inteira, ou camada defensiva suprimida enquanto durar |
| 4 | 60% | recurso que o par típico não carrega garantido, e sem ele o efeito persiste |
| 5 | 85% | não existe resposta na faixa, e a cena se reorganiza ao redor do efeito |

O Estado Elemental declarado se precifica por esta régua, no degrau 3 ou no 4 conforme suprima uma camada ou exija do par recurso que ele não carrega garantido.

**Modificador de dependência.** Técnica que só executa a partir de matéria já presente no campo, ou a partir de insumo selado que o usuário precise carregar, desce um degrau, com piso no degrau 1. A dependência reduz o que a técnica precisa produzir do próprio chakra.

**Modificador de campo.** Técnica que deixa matéria utilizável em campo depois da execução, inclusive em suspensão, sobe um degrau, com teto no degrau 5. O volume produzido excede o que o efeito imediato consome.

Os dois modificadores se aplicam na mesma leitura e podem se cancelar.

#### Matriz de estimativa da Régua de Resposta

O cruzamento entre rank e degrau produz o valor diretamente, sem cálculo em mesa. Os valores saem de `piso_XP + posição × (teto_XP − piso_XP)` sobre as faixas da seção 4.1 e são exatos, sem arredondamento.

| Rank | Degrau 1 | Degrau 2 | Degrau 3 | Degrau 4 | Degrau 5 |
|---|---|---|---|---|---|
| E | 130 | 175 | 220 | 280 | 355 |
| D | 480 | 600 | 720 | 880 | 1.080 |
| C | 1.430 | 1.775 | 2.120 | 2.580 | 3.155 |
| B | 3.950 | 4.625 | 5.300 | 6.200 | 7.325 |
| A | 9.200 | 11.000 | 12.800 | 15.200 | 18.200 |
| S | 23.000 | 27.500 | 32.000 | 38.000 | 45.500 |

**Nenhuma técnica passa pelas duas réguas inteiras.** A técnica mista precifica pela via ofensiva com o rider dentro, e o efeito que não deriva do dano soma pelo extra de comportamento da seção 4.1.2.

As duas réguas leem o mesmo eixo que o segundo critério de validação da Seção 5.2 já cobra, o de que toda ofensiva de rank D ou superior precisa custar ao par mais do que a resposta defensiva mais barata dele. A posição por entrega mede isso diretamente contra o par; a Régua de Resposta mede o mesmo por descrição, perguntando o que o par gasta para não ser simplesmente absorvido. Uma técnica que a Régua de Resposta posiciona no degrau 1 e que ainda assim é rank D ou superior é candidata a falhar aquele critério, e a divergência é da entrada, não da régua.

Kinjutsu fica fora da estimativa pela mesma razão que fica fora da interpolação, que é a ausência de teto. O custo é definido pelo Narrador, com o piso de 50.000 inviolável.

**Técnica de área.** A entrega que a posição lê é o valor de campo da Seção 5.2, entrega por alvo multiplicada pelos alvos que a geometria apanha na célula de quatro. A obra que atinge dois alvos vale o dobro do que valeria contra um, e é assim que a área se paga.

#### Calibração

A estimativa não pode contradizer os pontos que a 4.1.1 já fixou pela interpolação de RC nominal. As três âncoras de calibração do sistema, medidas pela posição por entrega com o modificador de coeficiente técnico aplicado.

| Âncora | Entrega | Posição | XP da posição | coef_t ÷ padrão | XP estimado | XP apurado | Desvio |
|---|---|---|---|---|---|---|---|
| Goukakyuu, rank C | 24,1% | 81,5% | 3.074 | 1,0 ÷ 1,5 | 2.050 | 1.722 | +19% |
| Chidori, rank A | 54,7% | 58,8% | 15.050 | 2,0 ÷ 3,0 | 10.033 | 8.750 | +15% |
| Kirin, rank S | 183,8% | 100% | 50.000 | 2,0 ÷ 4,0 | 25.000 | 23.600 | +6% |

As três convergem, e o desvio encolhe conforme o rank sobe, que é a direção correta: a estimativa existe para o momento da compra, e é no rank alto que uma compra errada custa caro. O modificador é o que produz a convergência, porque sem ele a estimativa ficaria oitenta por cento acima da apuração nas três.

O Rasengan continua fora desta tabela. A ficha dele apura 6.714 XP, e a posição por entrega o satura em 100% da faixa B por ele ultrapassar o piso do rank A sendo B, o que produz 12.000 antes do modificador e 9.000 depois dele. A saturação é informação e não erro: ela diz que a obra entrega acima do próprio rank, e o caso se resolve pela convivência declarada abaixo, com a apuração da ficha substituindo a estimativa. A calibração permanece sustentada pelas três âncoras.

**Onde a posição satura.** Toda técnica que ultrapassa o piso do rank seguinte satura a posição em 100%, e isso é comum entre obras de moldagem pura de coeficiente alto. A saturação sinaliza que a entrada merece conferência de rank, e não que a régua falhou.

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
| Declaração de Régua de Leitura | +20% |

A âncora da Régua de Leitura é o Extra mais pesado já publicado nesta tabela, a execução em movimento pleno, porque as duas compram comportamento de execução que muda o que o adversário pode fazer contra a técnica. A propriedade não paga sobretaxa de RC, porque não é sobretaxa da escada de evasão.

**Ordem de aplicação:** XP_base pela interpolação, extras de comportamento por cima, modificadores da Seção 4.2 por último sobre a soma, floor no resultado final, na convenção de arredondamento da economia.

### 4.2 Modificadores de Custo de XP

| Condição | Modificador |
|---|---|
| Posição da natureza na escada | Conforme a tabela de dispersão do Sistema Elemental |
| Hiden do próprio clã | Conforme documento de clã; inacessível fora do clã |
| Jutsu desenvolvido pelo próprio personagem | −15% |
| Jutsu copiado via Sharingan | Regras no documento de Sharingan |
| Jutsu de equipe (todos aprendem juntos) | −25% por participante adicional |
| Jutsu aprendido de mestre direto (LV5+ na perícia relevante) | −10% |
| Rank do jutsu inferior ao tier atual do personagem | −30% |

A relação entre o executor e a natureza tem dono único, o Sistema Elemental, e a mesma tabela de dispersão que precifica a perícia da natureza precifica o jutsu daquela natureza. A Afinidade paga o valor declarado, a Compatibilidade aplica ×1,125, e cada natureza aprendida aplica o degrau da sua ordem de aquisição. O jutsu que exige uma natureza ausente da ficha fica bloqueado, porque sem o desbloqueio a natureza não existe para o personagem.

### 4.3 Acesso a Kinjutsu

Jutsus proibidos ficam fora dos compêndios abertos. Para adquirir:

- O personagem recebeu o jutsu de fonte específica (herança, pergaminho roubado, captura).
- O Narrador valida o acesso narrativo antes de qualquer gasto de XP.
- Nenhum modificador reduz o custo abaixo de 50.000 XP para Kinjutsu.

---

## 5. Efeitos: Interface com o Manual de Criação de Poderes

O Manual de Criação de Poderes define os efeitos em quinze categorias, quatro contextos e as famílias de cálculo. Um jutsu pluga nessa estrutura exatamente como um poder. As categorias, as famílias, as dimensões e a composição permanecem em uso na forma publicada lá, e esta seção registra as instâncias do cenário Naruto nos pontos de extensão correspondentes.

### 5.1 O recurso do cenário

Instância do ponto de extensão de curva de recurso. O recurso deste mundo é a Reserva de Chakra, e toda referência a PM se lê como RC. A largura do Limite de Saída se lê da posição do executante na natureza empregada, conforme a Seção 3.2, e a curva de reserva por faixa está na Seção 9.

### 5.2 Pisos de Entrega, Executor de Referência e Par de Validação

O par de validação de qualquer jutsu é o **PV do perfil Equilibrado da faixa correspondente ao rank da técnica** na Tabela de Referência de Personagens, a régua central declarada daquele documento.

| Rank | Faixa | Par |
|---|---|---|
| E e D | Treinado | 600 |
| C | Veterano | 960 |
| B | Elite | 1.440 |
| A | Especial | 1.920 |
| S | Ápice | 3.000 |

Regenerada a tabela, o par regenera junto. O par acompanha o rank da técnica e nunca a faixa de quem a executa, porque é a técnica que está sendo dimensionada.

**Executor de referência.** Toda leitura de entrega deste manual roda com um executor padrão por rank, para que duas técnicas do mesmo rank sejam medidas contra a mesma mão. Ele carrega a perícia governante no nível que o portão do rank exige, um caminho adquirido e especialização em grau Definida.

| Rank | Nível da perícia governante | P e C de referência |
|---|---|---|
| E | LV2 | 42 |
| D | LV2 | 42 |
| C | LV3 | 64 |
| B | LV4 | 122 |
| A | LV5 | 148 |
| S | LV6 | 180 |

O `P` é a soma do atributo regente com a Base Total, a Inclinação Total e a Especialização da perícia governante, e o `C` lê PRE somada ao bônus geral da mesma perícia. A perícia governante é a que a ficha da técnica declara como origem, sempre uma só. O Controle de Chakra permanece portão universal, e portão não soma em motor.

**Pisos de entrega.** A régua de magnitude única de 25 a 38 por cento por descarga deixa de valer como âncora universal. Cada vetor de entrega tem o próprio relógio de combate, e um número só não descreve os quatro. No lugar dela entra um piso por rank, medido com o executor de referência daquele rank contra o par correspondente.

| Rank | Piso de entrega contra o par |
|---|---|
| D | 8% |
| C | 16% |
| B | 26% |
| A | 40% |
| S | 65% |

A técnica que não alcança o piso do próprio rank está subdimensionada para ele, e a correção pertence à entrada, não ao piso. A técnica de área valida pela cláusula de valor de campo abaixo, somando o que a geometria apanha em vez de medir por alvo.

**A exceção de área se abre pelo cânone e não pela conveniência.** A entrada que raspa o piso não vira técnica de área para caber nele. Antes de invocar o valor de campo, confira a fonte primária: só se abre a exceção quando a obra publicada de fato descreve alcance de múltiplos alvos, e nunca por leitura de fonte secundária isolada. A obra de precisão contra alvo único que fica abaixo do piso por margem estreita permanece abaixo dele, com a posição travada em zero e o preço no piso da faixa, e a margem estreita se registra na ficha em vez de ser corrigida por cláusula.

**Teto anti-inflação.** A técnica não alcança o piso de dois ranks acima, onde ele existir. O rank A e o rank S não têm teto anti-inflação, porque não existe rank dois degraus acima de nenhum dos dois, e o rank S é policiado pelo número de usos e pela condição estrutural que a ficha declara. O teste do teto roda com o executor uma faixa acima da típica, porque é na mão do mestre que a inflação aparece.

**O teto anti-inflação e o topo da faixa de posição são coisas distintas, e os dois leem piso de rank.** O teto anti-inflação é o piso de **dois** ranks acima e limita o que a obra pode entregar. O topo da faixa de posição é o piso do rank **seguinte** e limita apenas onde a obra cai dentro da própria faixa de preço, na Seção 4.1.3. Uma obra de rank A não tem teto anti-inflação e tem topo de faixa, que é o piso de 65% do rank S: ela pode entregar acima disso, e ao entregar paga o topo da própria faixa. Confundir as duas faz o mesmo número, 65%, parecer um limite de entrega quando é um limite de preço.

**Segundo eixo.** Toda ofensiva de rank D ou superior precisa tornar irracional ser ignorada, custando ao par mais do que custa a ele a resposta defensiva mais barata que possui. A técnica que o par prefere absorver a responder não cumpre o próprio rank, ainda que passe no piso.

**Cláusula de valor de campo.** A técnica de área valida e precifica pela geometria declarada contra um esquadrão de quatro em espaçamento de combate, contando quantos a geometria apanha.

```
valor de campo = entrega por alvo × alvos apanhados pela geometria
```

Na mesa contam-se os alvos reais. A célula de quatro existe para dimensionar e para precificar, e nunca para limitar quantos a obra alcança em jogo.

### 5.3 Família de Dano: Fórmula Universal

A fórmula de dano para jutsus de Naruto é:

```
dano bruto = 5 × RC_limpa × coef_entrega × mult_Tipo × M

M = 1 + w × (P − P_ref) ÷ P_ref          piso de M: 0,5
w = coef_técnica da ficha ÷ 2
```

A maestria multiplica a base em vez de somar um termo ao lado dela. Uma contribuição somada entrega o mesmo número ao iniciante e ao mestre quando a técnica é grande, e domina o resultado quando a técnica é pequena, o que faz a mesma perícia significar coisas diferentes conforme o tamanho da obra. Multiplicando, a base grande da obra e a escala da mão crescem juntas em qualquer porte.

**RC limpa:** o volume que a técnica põe em campo, fixo ou variável (Seção 3.4), acrescido da carga adicional quando houver, **antes de qualquer sobretaxa de Perfil de Evasão**. O motor de dano lê sempre a RC limpa, e a nominal publicada na ficha passa a ser sempre a limpa. A sobretaxa de evasão vive no custo de RC e no custo mínimo, e nunca no dano: camadas não vazam uma na outra. O desperdício do executor fica fora deste termo, porque ele vira cansaço e janela e nunca potência. A penalidade de conversão de natureza entra, porque o volume convertido é maior.

**Parcela de RC de origem externa.** A obra pode declarar na ficha uma parcela de RC que vem de fora do praticante, e ela é espécie própria dentro da RC limpa. A parcela entra na RC limpa e alcança tudo o que a RC limpa alcança, de modo que o dano cresce porque a base cresceu, a Força de Choque cresce e o Sōsai lê o volume maior, sem que nenhuma dessas propagações precise de regra própria. A parcela sai de fonte declarada fora do corpo do executor, e por isso não deixa a reserva dele e não conta contra o Limite de Saída. O corpus publica dois casos, os novecentos que o olho entrega ao Takemikazuchi e a parcela atmosférica que o verbo Fio do Céu colhe do céu. A obra que a parcela empurrar além do teto do rank resolve no teto, pela régua anti-inflação da Seção 5.2.

**coef_entrega:** eficiência de conversão chakra→dano pela forma de entrega, declarada pela técnica. Concentrar numa estocada de ponto único converte mais dano que difundir em área; a mesma RC produz mais dano quando entregue de forma mais precisa. Para a categoria Dano em jutsus, o coef_entrega é o dono único da conversão: a regra de eficiência por alvo do Extra de área do MCP (70–80%) deixa de se aplicar a Dano, e o Extra de área governa apenas custo e cobertura. Em categorias sem coef_entrega (debuff em área, cura em área), a regra original do MCP segue intacta.

**mult_Tipo:** a Constante de Moldagem multiplicada pela Assinatura do vetor que a obra declara, as duas publicadas pelo Sistema Elemental.

```
mult_Tipo = Constante de Moldagem × Assinatura do vetor declarado
```

A Constante de Moldagem vale 1,40 para toda técnica de transformação de natureza e 1,00 para técnica sem natureza, e mede o rendimento da matéria elemental. A Assinatura mede a letalidade intrínseca daquele tipo de energia contra carne e se lê do vetor, valendo 1,00 para Impacto, Corte e Penetração, 1,15 para Energia térmica e 1,25 para Energia elétrica. **A Assinatura acompanha o vetor da obra e nunca o elemento que a produziu.** O Raiton só resolve em 1,75 quando a obra declara vetor de Energia; o Raiton entregue em Penetração resolve em 1,40, e o Chidori é exatamente esse caso. Jutsu de moldagem pura resolve em 1,00.

**M:** a escala da maestria, lida da perícia governante. O `P` é o mesmo da Seção 5.2, e o `P_ref` é o do rank da técnica. O executor de referência resolve `M = 1` por construção, o iniciante desce até o piso de 0,5, e o mestre acima do rank sobe sem teto. O piso existe porque nenhuma obra publicada entrega menos que metade do que a régua dela promete: abaixo disso a técnica não está sendo executada, está falhando.

**coef_técnica:** quanto a técnica aproveita o refinamento de moldagem, declarado pela ficha. Técnicas que existem pela moldagem têm coeficiente alto; técnicas de força bruta têm coeficiente baixo ou zero. Ele continua declarado em cada ficha exatamente como está, e passa a alimentar o `w` em vez de multiplicar um termo somado. É ele que decide o quanto a mão importa naquela obra: com coeficiente 3,0 o `w` vale 1,5 e a maestria domina; com coeficiente 0,0 o `w` zera e a obra entrega o mesmo na mão de qualquer um, que é a definição de força bruta elemental.

**Perícia governante única na obra de duas naturezas.** A obra que emprega duas naturezas declara uma só perícia governante, e ela é a da natureza que entrega o vetor declarado pela ficha. A outra natureza entra como requisito de acesso e não alimenta o motor, porque dois `M` concorrentes sobre a mesma base multiplicariam a maestria duas vezes. O Takemikazuchi é o caso publicado: o vetor é Penetração e quem o entrega é a corrente, de modo que o Raiton governa e a Perícia de Enton fica no portão.

**Piso e teto se conferem na referência do rank.** As bandas da Seção 5.2 se medem no executor de referência do rank da obra, onde o `M` resolve em 1,000 por construção, e nunca na mão de um executor concreto. A banda existe para impedir que a obra faça trabalho de rank alheio pelo que ela é, e o que um mestre faz com ela é trabalho do `M`, que existe para escalar a base inteira conforme o `P`. Teto que clipasse o `M` mataria a maestria no ponto em que ela começa a pagar. A cláusula de área e a de multiplicidade leem valor de campo, que é o total que a obra põe em campo, e a parcela que cada corpo recebe permanece leitura de mesa.

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

O coeficiente se lê por dois eixos que compõem. O primeiro é a dependência de moldagem da obra, que diz de que ordem de grandeza ela é.

| Dependência de moldagem | Ordem do coef_técnica | Exemplo |
|---|---|---|
| Técnica que existe pela moldagem (pura) | alto | Rasengan |
| Alta, moldagem como mecanismo central | acima da média | Chidori, Raikiri |
| Média, moldagem intensifica o efeito | médio | Katon genérico, Nagashi |
| Baixa, moldagem auxiliar | baixo | Taijutsu infundido simples |
| Nenhuma, força bruta elemental | 0,0 | Projétil básico sem forma |

O segundo eixo é o rank, que fixa a banda de autoria. A obra típica de cada rank declara o padrão, que fica no meio da banda, e a obra que aproveita mais ou menos refinamento que a típica anda dentro dela.

| Rank | Banda de autoria | Padrão do rank |
|---|---|---|
| E | 0,4 a 0,6 | 0,5 |
| D | 0,8 a 1,2 | 1,0 |
| C | 1,3 a 1,8 | 1,5 |
| B | 1,8 a 2,4 | 2,0 |
| A | 2,6 a 3,4 | 3,0 |
| S | 3,6 a 4,4 | 4,0 |

O teto anterior de 3,0 foi escrito quando o coeficiente multiplicava um termo somado ao lado da conversão. Alimentando o `w`, ele precisa alcançar o padrão de cada rank, e a banda é o que garante que o modificador de XP da Seção 4.1.3 seja neutro na obra típica e ande cerca de treze por cento para cada lado nas demais.

**A obra publicada fora da banda do próprio rank é sinal de conferência, não erro.** As quatro âncoras deste manual declaram abaixo da banda, e cada uma pela mesma razão: são obras cujo poder vem de uma moldagem barata para quem já carrega a perícia, e não da reserva que queimam. O Chidori em 2,0 dentro do rank A é o caso que a Seção 4.1.1 já explicava ao colocá-lo junto ao piso da faixa. O Rasengan em 3,0 dentro do rank B é o oposto, uma obra acima da banda, e é ele que satura a posição. Nenhuma das quatro se reescreve para caber na banda: a banda orienta a autoria de obra nova, e a ficha publicada continua declarando o que a obra é.

#### Validação com âncoras canônicas

As três âncoras de calibração do sistema, recalculadas pela régua acima com o executor de referência de cada rank.

| Âncora | Rank | RC limpa | coef_e | Vetor | mult_Tipo | coef_t | Dano | Par | % do par | Piso do rank |
|---|---|---|---|---|---|---|---|---|---|---|
| Goukakyuu | C | 180 | 0,16 | Energia térmica | 1,61 | 1,0 | 231,8 | Veterano 960 | 24,1% | 16% ✓ |
| Chidori | A | 750 | 0,20 | Penetração | 1,40 | 2,0 | 1.050,0 | Especial 1.920 | 54,7% | 40% ✓ |
| Kirin | S | 1.800 | 0,35 | Energia elétrica | 1,75 | 2,0 | 5.512,5 | Ápice 3.000 | 183,8% | 65% ✓ |
| Rasengan | B | 600 | 0,20 | Impacto | 1,00 | 3,0 | 600,0 | Elite 1.440 | 41,7% | 26% ✓ |
| Rengoku Ryūsei | S | 2.500 | 0,16 | Energia térmica | 1,61 | 2,0 | 3.220,0 | Ápice 3.000 | 107,3% | 65% ✓ |

O Goukakyuu passa o piso do próprio rank e fica abaixo do piso de B, que é onde uma técnica básica de projétil deve estar. O Chidori entrega metade do par por uma reserva modesta, e é a moldagem que compra essa entrega. O Kirin ultrapassa o par por larga margem, o que é a leitura canônica de uma obra que decide uma luta de uma vez, e o preço dela é a condição estrutural de tempestade somada ao número de usos, que é como o rank S se policia na ausência de teto.

O Rasengan é o caso que mostra o teto anti-inflação trabalhando. Sendo B, ele ultrapassa o piso de A por ser moldagem pura de coeficiente máximo, e ainda assim fica abaixo do piso de S, que é o teto do rank dele. A obra que existe inteiramente pela moldagem entrega acima do próprio rank e paga por isso na régua de XP, e não no motor.

**O Chidori em 1,40 e não em 1,75.** A ficha da linhagem declarava 1,75, o produto do Raiton entregue como Energia elétrica. O Chidori declara vetor de Penetração de Grau VI, cuja Assinatura é 1,00, e o produto correto é 1,40. A ficha foi escrita contra a régua anterior à Assinatura por vetor. A correção vale por obra e não por linhagem: dentro da mesma família, quem declara Penetração resolve em 1,40 e quem declara Energia permanece em 1,75, porque o vetor é propriedade da obra e não se herda.

Dois executores que fecharam a mesma maestria na perícia governante entregam o mesmo dano com a mesma técnica, e a diferença entre eles mora na reserva disponível para carga, fiel ao cânone do copiador que executa a técnica no nível do criador. A tabela de descarga de uma ficha é publicada por valor de `P`, e não por nome de personagem, porque é o `P` que o motor lê.

#### Jutsus sem elemento

Para jutsus de moldagem pura, a Constante de Moldagem não incide e o vetor da obra decide sozinho a Assinatura, de modo que `mult_Tipo` resolve em 1,00 para todo vetor físico. O coef_técnica é geralmente alto, porque a técnica existe inteiramente pela moldagem.

```
Rasengan (B-rank, moldagem pura, Impacto):
dano = 5 × RC_limpa × 0,20 × 1,00 × [1 + 1,5 × (P − 122) ÷ 122]
```

#### Custo variável e dano variável

Quando o custo é variável, o dano escala proporcionalmente pelo componente de RC limpa. O `M` permanece o mesmo qualquer que seja a RC investida, porque a maestria cresce com o treino e apenas com ele. A assimetria resultante é intencional: shinobis de moldagem alta extraem mais dano por unidade de RC, e shinobis de reserva alta extraem mais dano por turno de carga.

### 5.4 Vetor e Rider de Tendência

Cada natureza tende a uma forma de entrega e a um efeito persistente, e a tendência orienta a leitura de mesa sem obrigar a técnica.

| Natureza | Vetor de tendência | Rider de tendência | Status |
|---|---|---|---|
| Katon | Energia térmica | Queimadura | Queimadura |
| Raiton | Energia elétrica | Paralisia | Paralisia Parcial |
| Doton | Impacto | Imobilização | Imobilização |
| Fūton | Corte | Sangramento | Sangramento |
| Suiton | Impacto | Lentidão | Lentidão |

**Nenhum rider é automático por natureza, e nenhum vetor se herda dela.** Cada técnica declara na própria ficha o vetor que emprega e os riders que aplica, com o grau mínimo garantido e o grau máximo possível. A técnica que declara vetor diverso da tendência resolve pelo vetor declarado, e é dele que sai a Assinatura da Seção 5.3. A técnica que não declara rider não o aplica.

O Chidori é o caso conhecido da divergência, com Raiton entregue em Penetração, e a linhagem inteira mostra que a divergência é comum e não excepcional. Uma mesma natureza produz vetores diversos, com a Água entregando volume em Impacto, jato afiado em Corte e vapor em Energia térmica, e a ficha de cada técnica é quem responde.

Cada vetor carrega um rider estrutural que nenhuma obra remove, e um rider padrão que a obra substitui declarando outro. Caminhos de Transformação de Natureza podem modificar o grau do rider ou criar variantes. O rider é acoplado à categoria Dano, dispensando categoria de efeito separada, e o teste dele escala pelo grau declarado, fora do alcance da compressão de limiar. O ciclo de vida, as taxas de dano por turno e os pares de atributos que cada rider pune pertencem ao Sistema de Efeitos de Status.

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

### 5.7 Velocidade da Obra e Conexão

Toda obra ofensiva de alvo declara a própria Velocidade, e é ela que enfrenta a esquiva do alvo no teste de conexão que o Núcleo de Combate resolve no passo 5. A velocidade deixou de ser propriedade de quem lança e passou a ser propriedade do que foi lançado, porque é o projétil que percorre a distância e não a mão que o soltou.

#### A cadeia de quatro fatores

```
Velocidade efetiva = Celeridade do meio × Fator de Seção × Ímpeto × M_vel

Fator de Seção = √(coef_entrega ÷ 0,16)
Ímpeto         = (RC_limpa ÷ 180)^0,25
M_vel          = 1 + 0,25 × (C − C_ref) ÷ C_ref
```

Cada fator tem um dono e responde a uma pergunta distinta. A Celeridade lê a banda física do meio empregado, porque uma corrente elétrica e uma pedra lançada não atravessam o mesmo espaço no mesmo tempo. O Fator de Seção lê a compressão que o coeficiente de entrega já declara, tomando o projétil único de 0,16 como unidade: a mesma energia comprimida em ponto viaja mais rápido que a mesma energia espalhada em campo. O Ímpeto lê o volume de chakra que propela a obra, com retorno decrescente de quarta potência, de modo que dobrar a reserva investida compra cerca de dezenove por cento de velocidade e oito vezes a reserva compra o dobro. O `M_vel` lê a mão que dispara, com um quarto do peso que a mesma mão tem no dano, porque a maestria acelera a execução sem reescrever a física do meio.

O `C` é PRE somada ao bônus geral da perícia governante, e o `C_ref` é o do rank da técnica, pela tabela da Seção 5.2. A PRE do atacante e a perícia governante vivem inteiramente dentro do `M_vel`, e nada do atacante soma fora da cadeia. O `M_vel` não tem teto, por simetria com a esquiva do alvo, que também não tem.

#### Escada de Celeridade dos meios

| Meio | Celeridade | Física |
|---|---|---|
| Doton | 70 | sólido denso lançado |
| Shōton | 74 | cristal projetado |
| Suiton | 80 | líquido carregado |
| Yōton 溶遁 | 82 | rocha fundida |
| Hyōton | 86 | sólido leve em agulha |
| Futton | 92 | vapor em expansão |
| Sem natureza | 95 | chakra moldado puro |
| Katon e Enton | 100 | gás incandescente propelido |
| Fūton | 112 | lâmina de ar |
| Bakuton | 120 | frente de detonação |
| Ranton | 140 | feixe guiado |
| Raiton e Kuroi Kaminari | 150 | corrente |
| Shiden | 165 | corrente de banda alta |

O Katon em 100 é a âncora neutra da escada, e o Raiton em 150 é a razão que a Interrupção de Contato do Núcleo de Combate já consome. A Celeridade é tendência do meio, e a obra declara desvio com motivo escrito na própria ficha.

A Kyōka de eixo de Entrega multiplica a celeridade do elemento hospedeiro pelo bônus de poder dela, e é assim que o Shiden chega aos 165 sobre os 150 do Raiton. A Kyōka de eixo de Potência herda a celeridade do elemento sem alteração, porque o refinamento dela cai na Constante de Moldagem. Naturezas Avançadas publica o eixo de cada entrada.

A linha de 95 mede o meio empregado, e não a ausência de natureza declarada. A obra de natureza que atravessa a distância sem produzir meio elemental a lê, e é por ela que entra a obra do eixo do Onmyōton, conforme o Eixo do Onmyōton publica. O Yōton da escada é a Liberação de Lava, 溶遁, e a Liberação de Yang, 陽遁, que romaniza igual, não ocupa linha nenhuma porque a via principal dela percorre o corpo amplificado.

#### O teste de conexão

```
lado ofensivo  = Velocidade efetiva da obra
lado defensivo = VEL + DES + bônus de esquiva do alvo
```

O teste é oposto de base cinquenta, como qualquer teste do sistema, e o Núcleo de Combate publica a resolução. Por cima do resultado incide a escada de Perfil de Evasão da Seção 6.5, como camada própria e com dono separado.

#### Isenções legisladas

A técnica portada pelo corpo, que o executor leva até o alvo em vez de projetar, não lê Celeridade nem Ímpeto. Ela resolve como golpe corporal, o corpo do executor contra a esquiva do alvo, com o Perfil de Evasão da ficha por cima. O Chidori em contato, o Raikiri e o Rasengan entregue na mão são os casos.

A obra de área e a de campo não resolvem teste individual contra cada alvo. Elas resolvem o teste de fuga do Núcleo de Combate, opondo a Velocidade efetiva da obra ao lado defensivo do alvo dividido pela raiz da profundidade, e entregam efeito parcial em falha onde a ficha o declarar.

O relâmpago natural fica fora da escada porque fica fora do teste. A obra que dirige um fenômeno atmosférico preexistente declara esse fenômeno como a precondição negável do degrau Inevitável, e o Kirin é o caso publicado.

#### Os três canais da maestria na conexão

A mão do executor alcança a conexão por três portas, e nenhuma delas compra física acima da banda do meio.

A **conexão contínua** é o `C` dentro do `M_vel`, que cresce com a ficha inteira, com a PRE, com os níveis e com os caminhos, sem que nada precise ser comprado para aquele fim.

A **leitura comprada** é a porta do executor sobre o que o adversário consegue acompanhar. Um caminho nomeado de perícia concede à técnica a Régua de Leitura, ou eleva o teste do executor dentro dela, conforme o documento daquela régua publica. Ela não move a técnica na escada de Perfil de Evasão, que é fixada na criação.

A **compressão comprada** é a única porta do executor na física: um caminho nomeado de perícia eleva a técnica uma posição de compressão, fazendo o Fator de Seção ler o coeficiente do degrau acima na tabela da Seção 5.3. Ela tem dono, tem preço em XP como qualquer caminho, e não alcança o relâmpago natural.

### 5.8 Restrição Anti-tanque em Ranks Baixos

Leitura do contrato de disponibilidade das famílias no Manual de Criação de Poderes. As famílias de percentual de pool do alvo têm piso de escala Supremo, que na correspondência da Seção 1.1 começa em A-rank. Abaixo de A-rank, essas famílias ficam indisponíveis.

---

## 6. Dimensões e Módulos

### Modelo de acerto do cenário

Instância do ponto de extensão de modelo de acerto. Neste mundo não existe rolagem de acerto. Vantagem ofensiva se expressa como redução da esquiva efetiva do alvo, e o eixo declarado no registro de toda técnica ofensiva de alvo é quão evitável ela é por construção, na escada do Perfil de Evasão da Seção 6.5. As demais formas de resolução, automático, teste resistido, área sem teste e efeito parcial em falha, entram na forma publicada no manual de núcleo. A obra cuja propriedade é o alvo não saber do que se defender declara a Régua de Leitura, que resolve por teste de percepção com dono próprio e não move a técnica na escada.

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

Dimensão obrigatória de todo jutsu ofensivo de alvo. Declara quão evitável a técnica é **por construção**, em quatro degraus fixos, cada um com comportamento próprio na mesa.

| Perfil | Esquiva do alvo | Comportamento próprio | Contrapartida |
|---|---|---|---|
| **Telegrafado** | +25% | o alvo que gasta a reação esquivando fica fora de posição e perde nova esquiva até o próximo turno dele | coef_entrega um degrau acima na tabela |
| **Padrão** | plena | nenhum | nenhuma |
| **Teleguiado** | −50% | persegue por 1 turno adicional se o alvo esquiva; a esquiva repetida contra a mesma perseguição preserva o malus | +30% no custo de RC e Extra pago em XP |
| **Inevitável** | anulada | apenas a Absorção e o Estado Elemental declarado mitigam | precondição negável declarada no registro; rank A mínimo |

O degrau é escolhido na criação da técnica, pago na criação, e permanece o mesmo durante toda a vida dela. Nenhum caminho de perícia, nenhuma transcendência, nenhuma circunstância de combate e nenhum estado do executor movem uma técnica de degrau. A escada é propriedade de construção, e é essa fixidez que permite precificar um degrau em XP e preencher o campo em qualquer entrada de compêndio sem consultar a ficha de quem executa.

**O degrau Veloz sai da escada.** Ele media velocidade crua, que agora é grandeza própria e vive na cadeia da Seção 5.7, com dono, escada de meios e leitura por obra. Uma escada que media a mesma coisa por degrau nomeado passaria a cobrar duas vezes pela mesma propriedade. As fichas que carregavam o degrau Veloz por serem de raio deixam de pagar a sobretaxa de quinze por cento no custo de RC, porque a velocidade delas agora sai da Celeridade do meio, e o abatimento é da entrada e não da escada.

O que a escada mede é o que a construção da obra faz com a possibilidade de sair da frente dela: ser vista chegando, perseguir quem se moveu, ou não admitir saída alguma. Nada disso é velocidade, e por isso as duas camadas compõem sem se confundir.

O Telegrafado é a única fonte de coef_entrega elevado fora da forma física da técnica: o arquétipo do golpe devastador que todo o campo vê chegando.

O Inevitável exige uma precondição que o defensor possa negar antes de a técnica disparar, declarada no registro junto com o que a desfaz. A negação corre por quatro vias, e a ficha declara qual delas vale para aquela obra: **desfazer** a precondição, **sair** do alcance dela, **quebrar** o que a sustenta, ou **sobreviver** à janela em que ela existe. A marca do Hiraishin precisa estar no corpo do alvo e ele pode se livrar dela, que é desfazer. A tempestade do Kirin precisa existir e o alvo pode sair de baixo dela, que é sair. O ponto em que o olho pousa precisa alcançar o alvo e ele pode romper a linha de visão, que é quebrar. O oitavo portão do Guy Noturno precisa estar aberto e o alvo pode durar mais que ele, que é sobreviver à janela. A técnica que não nomeie o que a derrota tem teto em Teleguiado.

As sobretaxas percentuais desta escada e dos módulos da Seção 6.6 incidem sobre a RC nominal durante a construção da técnica, e o custo mínimo acompanha como terça parte do resultado. A ficha publica as duas grandezas já fechadas, com a sobretaxa embutida.

A escada alcança apenas a obra que resolve o teste de conexão. A obra elevada para área ou para campo resolve o teste de fuga do Núcleo de Combate, e o relâmpago natural fica fora do teste e por isso fora da escada.

O degrau Inevitável fecha por inteiro o lugar da esquiva, e nenhuma resposta defensiva da camada de Reação do Núcleo de Combate se aplica contra ele. Nos três degraus restantes o lugar está aberto, e a resposta declarada funciona pelas condições que a ficha dela publica.

A obra cuja propriedade é o alvo não saber do que se defender permanece no degrau que a construção dela merece, e essa propriedade se declara na Régua de Leitura. O alvo de uma obra dessas sai da frente dela com a esquiva inteira sempre que souber do que sair.

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

Kage Bunshin divide a RC real entre os clones. Cada clone recebe `RC_total ÷ (número_de_clones + 1)` de RC de partida. **O clone é um executor pleno limitado apenas pela RC que carrega**: paga custos, custos efetivos de conversão, janelas de canalização e aftermaths pelas próprias regras, com a própria reserva e o próprio Limite de Saída, lido da posição dele na natureza empregada. Clones de pouco chakra canalizam devagar e estouram sob o aftermath de técnicas altas. Quando destruído, o clone devolve o chakra restante e as memórias acumuladas ao usuário.

O custo do jutsu usa a família **por alvo** do MCP: base de C-rank para o primeiro clone, com incremento fixo por clone adicional. Kage Bunshin no Jutsu é rank B em toda a banda de um a quatro clones, declarado por convergência canônica sobre a leitura literal de banda de RC — o databook classifica a técnica inteira como rank B, e a curva de custo de RC segue sem alteração por baixo dessa declaração. A escalada a A, S e Kinjutsu pertence ao Tajū Kage Bunshin no Jutsu, técnica distinta.

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

Técnicas que requerem dojutsu ativo têm o custo do dojutsu declarado separadamente do custo do jutsu. O registro do jutsu cobre apenas a técnica em si. O custo de ativação e manutenção do dojutsu está no documento do dojutsu correspondente (Sharingan, Mangekyō), e os dois disputam o mesmo Limite de Saída no turno, cuja largura o dōjutsu lê na faixa de gasto sem natureza declarada.

### 7.6 Modo Viagem

Jutsu de deslocamento que publica um custo separado para uso fora de combate, em vez do custo de RC nominal do uso em cena, é Modo Viagem. A régua de referência oficial para o preço em fôlego desse uso é a Seção 7 do Núcleo de Combate, Esforço de deslocamento igual aos metros efetivos percorridos divididos por cinco: fora de combate, sobre a distância medida em quilômetros, ela resolve o custo em PS que o jutsu paga por trecho.

O Shunshin no Jutsu é a primeira instância: 1 km resolve 1.000 m ÷ 5 = 200, e o Modo Viagem daquela ficha publica 200 PS por quilômetro sobre essa régua, no lugar dos 10 PS/km da versão legada. Qualquer Modo Viagem futuro deriva do mesmo motor, sem republicar a fórmula.

---

## 8. Processo

### 8.1 Decisão

1. **Rank:** qual tier de ninja usa esta técnica? O custo de RC esperado bate com a faixa?
2. **Tipo:** Ninjutsu / Taijutsu / Genjutsu / Fuuinjutsu / Hiden? As regras de resistência mudam conforme o tipo.
3. **Natureza elemental:** se aplicável, qual? Qual perícia elemental é requisito?
4. **Categoria de efeito principal:** o que o jutsu faz? As quinze categorias do Manual de Criação de Poderes, com a régua e o motor da categoria correta.
5. **Se efeito de Dano:** declarar coef_entrega e coef_técnica (tabelas da Seção 5.3). Validar a entrega resultante contra o piso do rank, com o executor de referência e o par do rank, e contra o teto anti-inflação com o executor uma faixa acima.
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

| Tier | Equivalente | XP estimado | RC típica | LS em Compatibilidade (20%) |
|---|---|---|---|---|
| Genin baixo | Acadêmico avançado | ~40k | 400–800 | 80–160 |
| Genin alto / Chuunin | Combatente ativo | ~90k | 700–1.400 | 140–280 |
| Jounin | Veterano | ~175k | 1.200–2.500 | 240–500 |
| Elite / ANBU | Elite | ~270k | 2.000–4.000 | 400–800 |
| Kage / Especial | Lenda | ~400k+ | 3.500–7.000+ | 700–1.400 |

RC real depende do multiplicador de clã, dos atributos RES, FOR e PV, e do dado de potencial. Os valores acima são referência para validação. A coluna de LS traz a faixa de Compatibilidade; a Afinidade lê um quarto da RC e a natureza aprendida quinze por cento, pela tabela da Seção 3.2, e a assimetria de posição opera nas duas frentes, na vazão e no custo efetivo.

**Nota sobre xpBase:** o Núcleo do Sistema v3 define xpBase 3.000 para o RPG de Naruto. Réguas de outros cenários (xpBase 2.500 do ruleset JJK) escalam pela razão dos xpBase ao serem usadas como comparadores.

---

## 10. Registro de Instâncias dos Pontos de Extensão

O Manual de Criação de Poderes publica doze pontos de extensão. Esta seção declara o preenchimento do cenário Naruto em cada um, e é a tabela que qualquer documento deste mundo consulta para saber onde a regra concreta mora.

| Ponto de extensão | Instância do cenário Naruto | Onde vive |
|---|---|---|
| Curva de recurso | Reserva de Chakra, com Limite de Saída lido da posição na natureza empregada | Seções 3.1, 3.2 e 9 deste manual |
| Tipagem de efeito | naturezas elementais, com mult_Tipo pela Constante de Moldagem vezes a Assinatura do vetor, e rider de tendência por natureza | Sistema Elemental, consumido pela Seção 5.4 |
| Coeficientes da forma de dois termos | coef_entrega na conversão, `M` como escala de maestria, coef_técnica como coeficiente de obra alimentando o `w` | Seção 5.3 deste manual |
| Coeficientes da forma de dois termos, eixo corporal | Esforço em PS no lugar da RC nominal, coef_entrega_física na conversão, Fator de Portão como termo de maestria, coef_obra como coeficiente de obra | Seção 6 do Sistema dos Oito Portões |
| Camadas de defesa | absorção, resistência e esquiva efetiva | documentos de defesa do cenário, lidos pela Seção 6.5 |
| Eixo de evitabilidade | Perfil de Evasão em quatro degraus | Seção 6.5 deste manual |
| Modelo de acerto | sem rolagem de acerto, vantagem ofensiva como redução de esquiva | abertura da Seção 6 deste manual |
| Modulação de aquisição | faixas de XP por rank com interpolação, mais os modificadores de afinidade, clã e acesso | Seção 4 deste manual |
| Réguas de Percepção | cobertura por custo de tempo, atenuação por meio e resolução por objeto de leitura | Perícia de Sensoriamento |
| Sistema de status | condições, graus e a escada de severidade que o Refluxo paga | Sistema de Efeitos de Status |
| Correspondência de escala | ranks E a Kinjutsu contra as escalas de Utilidade a Transcendente | Seção 1.1 deste manual |
| Âncora | via de fórmula é o jutsu-shiki inscrito, via de impregnação é o símbolo em ferramenta própria; as operações contra âncora de fórmula são as do ofício de selamento | Perícia de Fūinjutsu e Perícia de Passagem |
| Estrutura de vazios | adotada. Cada técnica de travessia abre vazio próprio, e a fronteira erguida em um vazio não se estende sobre outro | Perícia de Passagem e Perícia de Barreira |

Os doze pontos estão preenchidos. O `mult_Tipo` aponta para o Sistema Elemental, que publica a Constante de Moldagem e a tabela de Assinatura por vetor, de modo que o slot está apontado e cheio e jutsu elemental novo fecha validação.

Um ponto admite mais de uma instância, e a tabela tem uma linha por instância e não por ponto. A forma de dois termos é o primeiro caso: o eixo do chakra a instancia em RC nominal e o eixo corporal a instancia em Esforço, com réguas próprias e sem que uma leia a outra. Instância nova entra aqui declarando qual ponto preenche e onde as réguas dela vivem.

---

## 11. Registro de Alterações

**v3.6.** A Seção 6.5 recebe a emenda da precondição negável. A regra não muda de exigência e ganha a enumeração que faltava: a negação corre por desfazer, sair, quebrar ou sobreviver à janela, e a ficha declara qual das quatro vale. A quarta via admite a precondição cuja janela é o próprio estado que a obra exige, o que devolve o degrau Inevitável às obras de janela terminal sem afrouxar a exigência para quem não nomeia nada. Nenhum coeficiente, faixa de XP, piso por rank, sobretaxa, banda de autoria, âncora de validação ou linha da Escada de Celeridade mudou de valor.

**v3.5.** A Seção 6.5 declara o Perfil de Evasão como propriedade de construção que não se move em jogo, e a elevação por caminho de perícia ou por transcendência sai da escada. O degrau Inevitável troca a exigência de condição externa ao usuário pela exigência de uma precondição que o defensor possa negar antes de a técnica disparar, declarada no registro junto com o que a desfaz, o que admite a marca prévia e o ponto de visão ao lado do fenômeno atmosférico. A seção passa a declarar que a escada alcança apenas a obra que resolve o teste de conexão, e que o degrau Inevitável fecha por inteiro o lugar da esquiva diante da camada de Reação do Núcleo de Combate. A Seção 5.7 troca a construção comprada pela leitura comprada no terceiro canal da maestria, e republica as isenções de área e de relâmpago natural na forma do teste de fuga e da precondição negável. A abertura da Seção 6 e a Seção 4.1.2 registram a Régua de Leitura, que passa a viver em documento próprio do cenário. A Seção 10 corrige a contagem de degraus do eixo de evitabilidade. Nenhum coeficiente de entrega, faixa de XP, piso por rank, banda de autoria, âncora de validação ou linha da Escada de Celeridade mudou de valor.

**v3.4.** As Seções 5.2 e 4.1.3 passam a separar por nome duas coisas que liam o mesmo piso de rank e vinham sendo lidas como uma só. O teto anti-inflação é o piso de dois ranks acima e limita entrega, e não existe no rank A nem no rank S. O topo da faixa de posição é o piso do rank seguinte, limita apenas onde a obra cai dentro da própria faixa de preço, e existe em toda faixa por construção do denominador, faltando só ao rank S, caso que a cláusula própria da Seção 4.1.3 resolve. A Seção 4.1.3 ganha também os dois exercícios publicados das travas de posição, o Chidori Senbon em zero e o Shiden em cem por cento. Nenhum piso, teto, faixa de XP, coeficiente, banda de autoria ou âncora de validação mudou de valor: a passagem nomeia o que já operava e não altera régua nenhuma.

**v3.3.** A Seção 5.3 recebe três declarações. A parcela de RC de origem externa vira espécie própria dentro da RC limpa, com os dois casos publicados do corpus, e fica declarado que ela não sai da reserva do executor e não conta contra o Limite de Saída. A obra de duas naturezas passa a declarar perícia governante única, a da natureza que entrega o vetor, com a outra entrando como requisito de acesso sem alimentar o motor. Piso e teto de rank passam a se conferir no executor de referência do rank, com o `M` em 1,000, e a cláusula de área e a de multiplicidade passam a ler valor de campo. A Escada de Celeridade dos meios ganha a linha do Shiden em 165 e a regra de multiplicação da celeridade pela Kyōka de eixo de Entrega. A tabela de validação das âncoras ganha o registro do Rengoku Ryūsei em 107,3% do par Ápice, primeiro ocupante de corpus a exercer a ausência de teto no rank S. Os coeficientes de entrega, as bandas de autoria, os pisos por rank, a matriz de XP e os doze pontos do Registro de Instâncias permanecem sem alteração.

**v3.2.** A Escada de Celeridade dos meios declara que a linha de 95 mede o meio empregado, atendendo pedido do Eixo do Onmyōton v1. A obra de natureza que atravessa a distância sem produzir meio elemental lê essa linha, e é por ela que a obra do eixo do Onmyōton entra na cadeia de Velocidade. A linha do Yōton ganha o kanji 溶遁 para separar a Liberação de Lava da Liberação de Yang, que romaniza igual e não ocupa linha na escada. Nenhum valor de celeridade, fator ou fórmula mudou.

**v3.1.** RFC 5, opção C. A Seção 4.1.3 declarava medir "o consumo de reserva, que é a mesma grandeza que a RC nominal mede" e respondia três perguntas sobre volume em campo, duração e simultaneidade, herdadas da doutrina que a Fase D revogou. Nenhum mecanismo abaixo daquele parágrafo lia mais essas perguntas: a Posição por Entrega e a Régua de Resposta já liam entrega e resposta imposta ao par desde a v3, e o parágrafo de abertura tinha ficado órfão. Reescrito para declarar o que as duas vias efetivamente medem, com três perguntas novas sobre quanto do par a obra derruba, o que ela obriga o par a gastar para responder, e o que sobra dela em campo. Os cinco degraus, a matriz por rank, os modificadores de dependência e de campo, e a convivência com a apuração permanecem intactos. As duas réguas passam a se declarar explicitamente amarradas ao segundo eixo de validação da Seção 5.2. Nenhum preço mudou.

**v3.** Quatro origens convergem numa escrita só, e é a versão que a leva de propagação de agosto exigia que não saísse em partes.

*Do Lote de Tipos.* O `mult_Tipo` da Seção 5.3 deixa de ser um multiplicador por natureza e passa a ser a Constante de Moldagem multiplicada pela Assinatura do vetor que a obra declara. A Assinatura acompanha o vetor e nunca o elemento, de modo que o Raiton resolve em 1,75 quando entrega Energia elétrica e em 1,40 quando entrega Penetração. A Seção 5.4 passa a publicar vetor e rider como tendência da natureza, com a ficha de cada técnica declarando os dois e a técnica sem rider declarado não aplicando nenhum.

*Do Consolidado do motor de jutsus.* A Seção 5.3 troca a forma do motor de dano. A parcela de maestria deixa de ser um Fator de Moldagem somado ao lado da conversão e passa a ser o `M`, que escala a base inteira, com `w` igual a metade do coeficiente técnico e piso de 0,5. O coeficiente técnico continua declarado em cada ficha exatamente como está, e passa a alimentar o `w`. A Seção 5.2 aposenta a régua de magnitude única de 25 a 38 por cento, que não descrevia os quatro vetores, e publica pisos de entrega por rank medidos com o executor de referência contra o par do rank, com teto anti-inflação, segundo eixo de resposta defensiva e cláusula de valor de campo pela célula de quatro. A RC limpa entra como regra declarada: o motor lê a reserva antes de qualquer sobretaxa de Perfil de Evasão, e a nominal publicada passa a ser sempre a limpa. A Seção 5.7 nasce com a Velocidade da obra, cadeia de quatro fatores sobre a celeridade do meio, a compressão da seção, o ímpeto do volume e a mão que dispara, com escada de doze meios, as três isenções e os três canais da maestria. A Seção 6.5 perde o degrau Veloz, que media velocidade crua, agora grandeza própria com dono; as propriedades de construção permanecem e a sobretaxa por degrau continua onde estava. A Seção 4.1.3 troca a escala de cinco degraus por posição lida da entrega para as ofensivas e pela Régua de Resposta para as úteis, com o modificador de coeficiente técnico pagando o `w` fora da posição.

*Da Errata E1.* A Janela de Canalização da Seção 3.2 passa a ler o Limite de Saída pela posição do executante na natureza empregada, em vinte e cinco, vinte e quinze por cento, com a regra de turno misto e a faixa de vinte por cento para gasto sem natureza declarada. Toda fonte que amplie o cano o faz por fator sobre a largura da posição.

*Do Núcleo de Combate v3.* O teste de conexão que a Seção 5.7 alimenta é o teste oposto de base cinquenta que aquele documento publica, e o Perfil de Evasão incide sobre ele como camada própria.

As três âncoras de calibração foram recalculadas e republicadas. Pelo motor novo, o Goukakyuu entrega 24,1% do par Veterano, o Chidori 54,7% do par Especial e o Kirin 183,8% do par Ápice, e as três passam no piso do próprio rank. A tabela de calibração da Seção 4.1.3 mede a estimativa contra a apuração nas três, com desvios de dezenove, quinze e seis por cento, encolhendo conforme o rank sobe. Os XP apurados pela Seção 4.1.1 não mudaram.

*Fila de errata que o v3 abre.*

O `mult_Tipo` do Chidori corrige de 1,75 para 1,40 pela Assinatura de Penetração, e a correção alcança as oito fichas da Linhagem do Chidori, cada uma pelo vetor que ela própria declara. Quem declara Penetração vai a 1,40 e quem declara Energia permanece em 1,75, porque o vetor é propriedade da obra e não se herda dentro da família.

A morte do Fator de Moldagem como termo somado alcança a Linhagem do Rasengan, a Linhagem do Chidori e todas as fichas ricas que publicam Família de Dano. Nenhuma delas altera RC declarada, coeficiente de entrega ou coeficiente técnico: o que muda é a linha da fórmula.

A linha do Rasenshuriken na tabela de âncoras da Seção 3.2 desce de dois turnos de janela para um, porque o cano de vinte e cinco por cento da vocação de Vento comporta em uma janela o que o cano universal exigia em duas. É a única linha daquela tabela que muda de resultado.

O modificador de coeficiente técnico ganha piso de 0,5, que é o próprio padrão do rank E, porque a obra de coeficiente 0,0 ainda custa chakra, ação e risco. O piso incide sobre o modificador e nunca sobre o coeficiente declarado.

A tabela de coeficiente técnico da Seção 5.3 cresce e ganha banda de autoria por rank, de 0,4 a 0,6 no E até 3,6 a 4,4 no S, com o padrão no meio de cada uma. O teto anterior de 3,0 foi escrito quando o coeficiente multiplicava um termo somado, e alimentando o `w` ele precisa alcançar o padrão de cada rank para que o modificador seja neutro na obra típica. Os padrões de rank permanecem como estavam, porque baixá-los desfaria a calibração dos pisos de entrega.

As quatro obras nomeadas neste manual declaram coeficiente fora da banda do próprio rank, e nenhuma foi reescrita para caber. A banda orienta a autoria de obra nova, a ficha publicada continua declarando o que a obra é, e a divergência entra na lista de conferência do repasse do corpus pelo mesmo mecanismo que a saturação de posição.

**v2.11.** A leva de Técnicas Base Universais fechou sua passada de erratas numerada v2.10, cega para a propagação do Cânone v2 que fechava a dela no mesmo número ao mesmo tempo. Nenhuma das duas substitui a outra; esta entra no primeiro número livre, no mesmo padrão já usado para a colisão da v2.6. Três erratas abertas pela leva fecham aqui, nenhuma delas mudando fórmula ou custo já publicado. A Seção 7.1 perde a linguagem de fragmentação por contagem de clones: o Kage Bunshin de 1 clone deixa de se ler como C-rank, porque a ficha inteira já declarava rank B por convergência canônica desde a publicação da técnica, e o texto normativo estava atrás da própria ficha que ele deveria governar. A escalada a A, S e Kinjutsu passa a pertencer exclusivamente ao Tajū Kage Bunshin no Jutsu, técnica distinta, e não a uma leitura aritmética do Kage Bunshin. A curva de custo de RC por clone não muda.

A tabela de Aftermath por Rank da Seção 1.2 ganha a magnitude que faltava na linha de Kinjutsu: 15% do PV máximo, por analogia à forma como o aftermath de rank A já expressa preço em fração de recurso, marcada `[proposta]` até este manual fixar o número oficial. A Seção 7 ganha a subseção 7.6, Modo Viagem, registrando a régua de Esforço de deslocamento do Núcleo de Combate (metros efetivos ÷ 5) como referência oficial para qualquer jutsu de deslocamento que publique custo de uso fora de combate, com o Shunshin no Jutsu como primeira instância.

O piso de 50.000 XP para Kinjutsu, verificado nesta mesma leva contra a Seção 1, a Seção 4 e a Seção 4.3, já estava correto em toda parte desde a v2.6 e não muda.

**v2.10.** As âncoras ilustrativas de budget da Seção 4.1, jonin típico e Saki, seguiam o Fator de Cânone v1, revogado por `core/canon-factor.md` v2. O jonin de rotina passa a ~160k XP e Saki a 640k XP, os dois lidos dos perfis de referência que o documento novo publica. A repartição por rank que a Seção 4.1 descrevia para Saki presumia o orçamento antigo e precisa de nova passada, que este registro não faz. Nenhuma faixa de XP por rank, régua de interpolação ou fórmula deste manual muda.

**v2.9.** A Seção 2.8, Cedências, ganha a linha que faltava: o lado aberto e treinável do dreno, por Contato e por Meio, contra alvo que resiste e sem selo, sem clã e sem contrato, passa a ter dono nomeado. A Perícia de Kyūinjutsu publica esse dono, consumindo a régua de quantidade, o teto de recepção e a cláusula do senjutsu já publicados aqui sem redefinir nenhum dos três. As demais cedências da seção, a dōjutsu, a arma, a clã e a entidade, permanecem como estavam. Nenhum valor, régua ou fórmula deste manual muda.

**v2.8.** A v2.7 já havia fechado a colisão de duas linhas numeradas v2.6, a terceira vez que este documento registrava esse tipo de choque depois da v2.4 e da v2.5. Uma terceira linha, também numerada v2.6, apareceu depois de fechada aquela reunião, cega para as outras duas como elas foram cegas entre si. Ela vale tanto quanto as outras e não substitui nenhuma, de modo que entra aqui, no primeiro número livre. Uma corrige quatro tabelas contra a ficha do Rasengan; a segunda registra que o eixo corporal ganhou dono; a terceira aposenta a régua duplicada de afinidade elemental. Nenhuma toca no que as outras tocaram.

O Registro de Instâncias recebe a segunda instância da forma de dois termos, publicada pelo Sistema dos Oito Portões: o eixo corporal mede em Esforço o que o eixo do chakra mede em RC nominal, com coeficiente de entrega física na conversão e Fator de Portão como termo de maestria. A seção passa a declarar que um ponto de extensão admite mais de uma instância e que a tabela tem uma linha por instância, porque com a linha nova ela deixaria de bater com a contagem de doze pontos. Nenhuma régua, faixa de XP ou coeficiente deste manual muda por essa parte; o que entra é o registro de que o eixo físico ganhou dono.

A segunda parte aplica a errata que a Linhagem do Rasengan abriu. A publicação da ficha individual do Rasengan apurou a RC nominal em 600, contra os 450 que quatro tabelas deste manual carregavam, e a apuração vence a estimativa pela regra que a própria Seção 4.1.3 declara.

A âncora de validação da Seção 3.2 passou a RC nominal 600, custo mínimo 200 e custo pago 200, e a janela permanece em zero turno porque o custo pago segue abaixo do Limite de Saída de 442. A âncora de XP da Seção 4.1.1 passou a RC nominal 600, posição 71,4% e XP_base 6.714. A linha de validação da Seção 5.3 passou a RC nominal 600 e dano 390, que é 27% do par Elite e mantém o tier Forte.

A linha de âncora do Rasenshuriken na Seção 3.2 passou a RC nominal 2.100 e custo mínimo 700. O executor de referência dela deixou de ser um praticante de teste de Moldagem 60, valor que ninguém no degrau Absoluto pode apresentar, e passou ao piso do próprio degrau em teste 84, com custo pago de 1.619 pela régua de desperdício e a mesma janela de dois turnos que a linha já publicava.

O Rasengan saiu da tabela de calibração da Seção 4.1.3. A posição apurada de 71,4% não corresponde ao degrau 2 que a descrição da técnica produz, e âncora que troca de degrau não confirma o método que ela deveria confirmar. A calibração segue sustentada pelo Goukakyuu no degrau 2 e pelo Chidori e pelo Kirin no degrau 1.

A terceira parte cede, na tabela de Modificadores de Custo de XP da Seção 4.2, as duas linhas que precificavam a relação do executor com a natureza, o desconto de 20% por afinidade natal e a sobretaxa de 30% por natureza não-afim. Elas eram uma segunda régua lendo a mesma grandeza que a Escada de Afinidade, e o Modelo de Ficha de Técnica já declarava que essa relação pertence ao Sistema Elemental. A tabela de dispersão daquele documento passa a governar os dois eixos, a perícia da natureza e o jutsu da natureza, e a cláusula de bloqueio vira o portão de desbloqueio. A Seção 3.2 acompanha o vocabulário da v7 do Sistema Elemental, com natureza de nascença no lugar de natureza de afinidade.

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
4. Se elemental, confirme a natureza, declare o vetor da obra, componha o mult_Tipo pela Constante de Moldagem vezes a Assinatura daquele vetor, e registre que executores em natureza aprendida pagam custo efetivo ×1,3 e escoam por um cano de quinze por cento.
5. Defina categoria de efeito, família de magnitude, dimensões e módulos (um por slot). Declare o Perfil de Evasão de todo jutsu ofensivo de alvo. Calcule o custo de RC.
6. Calcule a Janela de Canalização sobre o custo efetivo para o tier de usuário pretendido. Se o resultado destoa da narrativa, ajuste o custo ou aplique Extras de comportamento com impacto de XP.
7. Calcule o custo de XP pela interpolação dentro da faixa (Seção 4.1.1), extras de comportamento e modificadores, nesta ordem, com floor no final.
8. Valide: rank consistente, janela coerente, XP calibrado, sem camada duplicada, requisitos declarados, aftermath aplicado a partir de A-rank.
9. Se o rank não foi declarado, proponha um com justificativa de uma frase.
10. Nunca invente propriedade canônica sem marcação `[proposta]`. Silêncio canônico é silêncio: declare-o e decida, sem apresentar invenção como fato canônico.

---

*Manual de Criação de Jutsus v3.1, manual tradutor do cenário Naruto para o Manual de Criação
de Poderes v3.3. Rank é o envelope canônico com aftermath a partir de A. Custo de chakra é
absoluto em RC sob Limite de Saída lido da posição na natureza empregada, com custo efetivo por
posição, separado em RC limpa, custo mínimo e custo pago. O dano é a instância local da forma de
dois termos, com a base em cinco vezes a RC limpa vezes coef_entrega vezes mult_Tipo, e a maestria
escalando essa base por M igual a um mais w vezes a distância relativa de P até P_ref, com w igual
a metade do coeficiente técnico. O mult_Tipo é a Constante de Moldagem vezes a Assinatura do vetor
que a obra declara, e o vetor nunca se herda da natureza. A Velocidade da obra é grandeza própria,
lida da celeridade do meio, do Fator de Seção, do Ímpeto e do M_vel, e é ela que enfrenta a esquiva
no teste de conexão. O custo de XP interpola a posição na faixa do rank pela RC nominal, ou lê a
posição por entrega e a Régua de Resposta quando a ficha ainda não existe. Os efeitos plugam nas
quinze categorias do manual de núcleo, e as doze instâncias deste mundo estão declaradas na Seção
10. A identidade da técnica vem da forma, do vetor, do Perfil de Evasão e dos Módulos de
Comportamento em cinco slots com dono.*
