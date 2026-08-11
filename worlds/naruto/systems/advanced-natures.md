---
id: naruto.system.advanced-natures
title: "Naturezas Avançadas"
version: 2
layer: scenario
scenario: naruto
type: system
status: final
source-file: Naturezas_Avancadas_v2.md
---

# Naturezas Avançadas — Kekkei Genkai, Kekkei Tōta, Kyōka e Onmyōton
Camada de recomposição e intensificação elemental construída sobre a Transformação de Natureza.

---

## Sobre as Naturezas Avançadas

Uma natureza avançada nasce de duas operações distintas sobre o chakra já convertido pela Transformação de Natureza. A primeira recompõe duas ou três naturezas elementais básicas simultâneas numa natureza nova, com propriedades que nenhum dos componentes possui isoladamente. A segunda intensifica uma única natureza básica além do teto comum, sem misturar elementos. A primeira operação produz Kekkei Genkai e Kekkei Tōta. A segunda produz Kyōka.

Existe ainda um terceiro eixo, o Onmyōton, que não compete no ciclo elemental e não usa Papel de Indução. Ele opera sobre Yin e Yang, as duas naturezas espirituais e vitais que ficam fora das cinco naturezas comuns, e cobre fenômenos não-elementais como manipulação corporal avançada e certas variantes de genjutsu.

As três famílias compartilham a mesma lógica de aquisição em duas etapas. A primeira etapa é ter a afinidade crua necessária, que emerge naturalmente da cadeia de afinidades já definida na Transformação de Natureza. A segunda etapa é a Centelha, o teste que decide se aquela afinidade de fato acende como a natureza nomeada. Ter os componentes qualifica um shinobi. Não garante a manifestação.

---

## Requisitos de Acesso

- **Pré-requisito:** Tipo Elemental de cada natureza componente, no nível mínimo correspondente ao rank que a natureza avançada pretende destravar.
- **Atributo regente:** INT, herdado do Tipo Elemental base.
- **Categoria:** Ninjutsu (×1,5).
- **Portão de Composição:** o shinobi precisa possuir, entre suas afinidades natas ou aprendidas, todos os componentes exigidos pela natureza avançada.
- **Portão de Linhagem:** algumas naturezas exigem descendência específica, além da composição. Mokuton exige linhagem de Ashura, restrita a Senju e Uzumaki. Enton exige linhagem de Indra, restrita a Uchiha. As demais não têm portão de linhagem.

O rank de acesso segue a mesma régua do documento base:

| Rank da técnica | E | D | C | B | A | S |
|---|---|---|---|---|---|---|
| Nível mínimo no Tipo Elemental de cada componente | LV1 | LV2 | LV3 | LV4 | LV5 | LV6 |

Quando a natureza avançada tem mais de um componente, o portão usa o maior nível exigido entre eles. Um shinobi que pretende destravar uma técnica de rank B em Yōton precisa de LV4 tanto em Katon quanto em Doton.

---

## Despertar / Aquisição

### Etapa 1 — Composição

A composição de uma natureza avançada nunca tem rolagem própria. Ela emerge da cadeia de afinidades da Transformação de Natureza: se o shinobi possui, entre suas afinidades natas ou aprendidas, todos os componentes exigidos, a Etapa 1 está automaticamente satisfeita. Um personagem com afinidade em Água e Vento já preenche a composição de Hyōton sem precisar de teste adicional.

Quando a natureza avançada tem portão de linhagem, a composição sozinha não basta. Um Senju com Terra e Água ainda precisa da linhagem de Ashura para avançar à Etapa 2 de Mokuton. Sem a linhagem, a composição fica latente e nunca manifesta.

### Etapa 2 — A Centelha

A manifestação é um teste de d100 chamado Centelha. A chance do primeiro teste é determinada exclusivamente pelo tier histórico da natureza avançada, a medida da raridade real dela no mundo. O poder da natureza não influencia a probabilidade de manifestação: uma kekkei genkai fraca continua sendo uma mutação de linhagem rara, e a escala de impacto de cada natureza é cobrada em outro lugar do sistema.

**Tiers históricos**, calibrados pela contagem real de usuários registrados:

| Tier | Critério | % base |
|---|---|---|
| S | Kekkei Tōta, exclusividade estrutural | 1% |
| A | zero ou um usuário conhecido | 2% |
| B | clã restrito ou vínculo com bijū | 4% |
| C | múltiplos usuários, várias vilas | 8% |

### Viés de Linhagem e Região

Nascer no cluster canônico de uma natureza avançada dobra a chance do primeiro teste. O viés espelha o precedente do viés de clã no branch de Yin e Yang da Transformação de Natureza, e é o mecanismo que explica a concentração canônica de usuários em vilas e clãs específicos: a natureza permanece rara no mundo e presente no berço.

| Natureza | Cluster canônico |
|---|---|
| Hyōton | Clã Yuki, País da Água |
| Yōton | Iwagakure |
| Deiton | Iwagakure |
| Bakuton | Iwagakure |
| Ranton | Kumogakure |
| Jiton | Sunagakure e Kumogakure |
| Saton | Sunagakure |
| Shakuton | Sunagakure |
| Futton | Kirigakure |

Naturezas fora da tabela não têm cluster registrado. O Narrador pode declarar clusters adicionais quando o worldbuilding da campanha os estabelecer.

Naturezas com portão de linhagem já embutem o viés: a população autorizada pelo portão é, por definição, o cluster da natureza. Todo Senju testa Mokuton com o viés aplicado, e todo Uchiha testa Enton nas mesmas condições. O viés nunca acumula duas vezes.

### Fator Protagonismo

O multiplicador de Protagonismo do documento base se aplica integralmente ao primeiro teste da Centelha:

```
chance_inicial = arredondar( chance_base × viés × (1 + 0,2 × Protagonismo) )
```

com teto de 50% por rolagem. Nenhum teste de manifestação é jamais mais provável que cara-ou-coroa. Como o decaimento das tentativas seguintes parte da chance inicial já multiplicada, o Protagonismo eleva duas coisas ao mesmo tempo: a chance de cada rolagem e a quantidade de tentativas disponíveis antes da extinção.

### A Centelha Decrescente

A afinidade latente ou acende cedo ou se apaga. Cada tentativa frustrada queima parte do potencial, e o sistema representa isso com um decaimento obrigatório: toda nova tentativa após uma falha rola com a metade da chance da tentativa anterior, arredondada para baixo. Quando a metade chega a zero, a centelha está extinta. Aquele potencial morreu, e nenhum recurso compra outro teste da mesma natureza para o mesmo personagem.

```
chance(tentativa n+1) = piso( chance(tentativa n) ÷ 2 )
extinção quando o resultado é 0
```

O decaimento garante que a chance vitalícia total é finita e limitada por construção, independente de quanto XP o personagem acumule. A quantidade de tentativas possíveis escala naturalmente com a raridade: uma natureza de Tier S em Protagonismo 0 permite exatamente uma tentativa na vida, enquanto uma de Tier C com viés e Protagonismo alto permite até seis.

**Chance de cada rolagem individual**, sem viés:

| Tier | 1ª rolagem | 2ª | 3ª | 4ª | 5ª | 6ª |
|---|---|---|---|---|---|---|
| S · Prot 0 | 1% | extinta | — | — | — | — |
| S · Prot 10 | 3% | 1% | extinta | — | — | — |
| A · Prot 0 | 2% | 1% | extinta | — | — | — |
| A · Prot 10 | 6% | 3% | 1% | extinta | — | — |
| B · Prot 0 | 4% | 2% | 1% | extinta | — | — |
| B · Prot 10 | 12% | 6% | 3% | 1% | extinta | — |
| C · Prot 0 | 8% | 4% | 2% | 1% | extinta | — |
| C · Prot 10 | 24% | 12% | 6% | 3% | 1% | extinta |

**Chance acumulada vitalícia**, o total de conseguir ao menos uma vez comprando todas as tentativas até a extinção:

| Tier | Prot 0 | Prot 5 | Prot 10 |
|---|---|---|---|
| S | 1% | 3% | 4% |
| A | 3% | 7% | 10% |
| B | 7% | 14% | 21% |
| C | 14% | 28% | 40% |

Com viés de linhagem ou região, cada linha sobe um degrau. Um Senju de Protagonismo 10, o personagem mais mítico que o sistema comporta, encerra a vida com 21% de chance total de Mokuton. Um shinobi comum de Iwagakure encerra a dele com 28% de chance total de Yōton. O berço concentra, o destino amplia, e nada garante.

### Custo de Retentativa

A primeira rolagem da Centelha é gratuita e ocorre quando o shinobi satisfaz a Etapa 1. Cada tentativa seguinte é comprada com XP de Sorte, e o preço é definido pela escala de poder da natureza. É aqui, e apenas aqui, que o eixo de poder participa da aquisição: tentar arrancar do destino uma natureza que decide batalhas custa muito mais caro que insistir numa natureza de efeito situacional.

`[PROPOSTA]` Preço da primeira retentativa por classificação de poder, dobrando a cada retentativa seguinte:

| Classificação | Critério | 1ª retentativa | 2ª | 3ª | 4ª | 5ª |
|---|---|---|---|---|---|---|
| Estratégico | decide batalhas inteiras ou tem contramedida quase nula | 400 | 800 | 1.600 | 3.200 | 6.400 |
| Decisivo | encerra um confronto individual sozinho | 300 | 600 | 1.200 | 2.400 | 4.800 |
| Tático-Decisivo | utilidade de combate relevante, sem alcance de área grande | 200 | 400 | 800 | 1.600 | 3.200 |
| Tático | efeito situacional, alcance limitado | 100 | 200 | 400 | 800 | 1.600 |

### Extinção

A extinção da centelha é permanente. `[PROPOSTA]` A única exceção admitida é narrativa: um evento de campanha de peso equivalente à própria manifestação, declarado e conduzido pelo Narrador, pode reacender uma centelha extinta uma única vez. A regra nunca é acionável pelo jogador.

### Pares com múltiplos ocupantes

Algumas combinações de naturezas básicas têm mais de uma natureza avançada associada. Nesses casos, a Centelha usa um portão único seguido de sub-rolagem, em vez de testes independentes para cada ocupante. O portão testa pelo tier do ocupante mais raro do par. Se o teste passa, uma sub-rolagem distribui o resultado entre os ocupantes, com peso proporcional ao % base individual de cada um. O decaimento da Centelha Decrescente incide sobre o portão único do par, nunca sobre cada ocupante separadamente.

Um shinobi nunca acumula mais de um ocupante do mesmo par. A recomposição elemental gera uma única natureza nova por composição possuída, nunca várias simultâneas.

### Kekkei Tōta

O Kekkei Tōta recompõe três naturezas elementais básicas simultâneas, em vez de duas. Jinton, com Fogo, Terra e Vento, é o único ocupante confirmado dessa categoria e mantém tier S próprio, acima de qualquer Kekkei Genkai comum.

Mokuton usa três ingredientes (Terra, Água e Yang) mas não se qualifica como Kekkei Tōta, porque Yang não é uma das cinco naturezas elementais básicas. Ele é tratado como categoria própria, o único Kekkei Genkai híbrido elemental-espiritual do catálogo, sem competir pela exclusividade estrutural que o tier S reserva ao Jinton.

### Onmyōton

Yin e Yang entram na mesma cadeia de afinidade da Transformação de Natureza, no branch descrito no documento base. A afinidade crua de Yang já tem uma manifestação nomeada fechada, Liberação de Velocidade, testada em Centelha própria no mesmo padrão desta seção. A afinidade crua de Yin ainda não tem manifestação nomeada. Até que uma seja definida, um personagem com afinidade de Yin possui a natureza crua sem acesso a técnica nomeada alguma, o mesmo estado latente de qualquer composição sem Centelha resolvida.

---

## Efeitos Globais

A manifestação de uma natureza avançada é evento de vulto na vida de qualquer clã ou vila. Naturezas de tier S e A carregam peso político imediato, o shinobi que a desperta se torna ativo estratégico e alvo de atenção de outras vilas. Naturezas de tier C são notáveis mas administráveis, presentes o suficiente em algumas vilas para terem doutrina de combate formal contra elas.

O Ciclo de Superação trata toda natureza avançada como natureza única, com Tipo Elemental dominante próprio, e não como sobreposição dos componentes. Um duelista que enfrenta Mokuton pela primeira vez não deduz automaticamente as fraquezas dele a partir de Terra e Água separadas.

---

## Mecânica de Ativação

- **Custo:** definido por técnica, em RC, dentro do Limite de Saída do Tipo Elemental dominante da natureza avançada.
- **Ação:** definida por técnica.
- **Restrições:** exige a natureza avançada desbloqueada e no nível mínimo do rank pretendido, além dos Tipos Elementais de todos os componentes já no nível exigido.
- **Aftermath:** definido por técnica.

---

## Efeitos Mecânicos

### Tipo Elemental dominante

O Tipo Elemental de uma natureza avançada é o de maior multiplicador de dano entre seus componentes, usando a hierarquia já fixada no documento base (Raio 1,75, Fogo 1,60, Terra 1,50, Vento 1,30, Água 1,00). Esse tipo determina o multiplicador de dano da natureza avançada em combate e a posição dela no Ciclo de Superação quando confrontada com uma natureza pura.

Meiton é exceção. Sua composição elemental permanece desconhecida e sua identidade funcional confirmada é absorver e redirecionar chakra do oponente. O Tipo Elemental dele é dinâmico: em cada uso, assume o tipo do chakra que está manipulando naquele momento, em vez de um tipo fixo.

### Catálogo de Kekkei Genkai e Kekkei Tōta

| Natureza | Composição | Gate | Tipo dominante | Tier | Poder | % base |
|---|---|---|---|---|---|---|
| Jinton (Tōta) | Fogo+Terra+Vento | nenhum | Fogo | S | Estratégico | 1% |
| Mokuton | Terra+Água+Yang | Ashura (Senju/Uzumaki) | Terra | A | Estratégico | 2% |
| Shōton (Cristal) | Terra+Água | nenhum | Terra | A | Decisivo | 2% |
| Kōton (Aço) | Fogo+Terra | nenhum | Fogo | A | Decisivo | 2% |
| Meiton | desconhecida | nenhum | dinâmico | A | Decisivo | 2% |
| Saton (Areia) | Terra+Vento | nenhum | Terra | A | Decisivo | 2% |
| Shakuton (Queima) | Fogo+Vento | nenhum | Fogo | A | Decisivo | 2% |
| Gravidade | Raio+Terra | nenhum | Raio | A | Tático-Decisivo | 2% |
| Vidro/Obsidiana | Fogo+Terra | nenhum | Fogo | A | Tático-Decisivo | 2% |
| Ácido | Água+Raio | nenhum | Raio | A | Tático | 2% |
| Hyōton (Gelo) | Água+Vento | nenhum | Vento | B | Decisivo | 4% |
| Bakuton (Explosão) | Terra+Raio | nenhum | Raio | B | Decisivo | 4% |
| Futton (Ebulição) | Água+Fogo | nenhum | Fogo | B | Decisivo | 4% |
| Yōton (Lava) | Fogo+Terra | nenhum | Fogo | C | Decisivo | 8% |
| Jiton (Magnetismo) | Vento+Terra | nenhum | Terra | C | Decisivo | 8% |
| Ranton (Tempestade) | Raio+Água | nenhum | Raio | C | Tático-Decisivo | 8% |
| Estilo Plasma | Fogo+Raio | nenhum | Fogo | C | Tático-Decisivo | 8% |
| Deiton (Lama) | Terra+Água | nenhum | Terra | C | Tático | 8% |

A coluna de Poder não altera a chance de manifestação. Ela define o preço de retentativa da Centelha e, no caso do Kyōka, o bônus de multiplicador de dano.

**Pares com múltiplos ocupantes**, testados pelo portão único do ocupante mais raro:

| Par | Ocupantes | Portão testa por |
|---|---|---|
| Terra+Água | Mokuton, Cristal, Deiton | Mokuton |
| Terra+Raio | Bakuton, Gravidade | Gravidade |
| Fogo+Terra | Yōton, Vidro/Obsidiana, Aço | Aço |
| Água+Raio | Ranton, Ácido | Ácido |
| Terra+Vento | Jiton, Saton | Saton |

### Catálogo de Kyōka

| Kyōka | Elemento base | Gate | Tier | Poder | % base | Mult. de dano |
|---|---|---|---|---|---|---|
| Enton | Fogo | Indra (Uchiha) | A | Estratégico | 2% | 1,95 |
| Tufão | Vento | nenhum | A | Estratégico | 2% | 1,65 |
| Sobrecarga | Raio | `[PENDENTE]` | A | Decisivo | 2% | 1,95 |
| Sísmico | Terra | `[PENDENTE]` | A | Decisivo | 2% | 1,70 |
| Maré | Água | `[PENDENTE]` | A | Decisivo | 2% | 1,20 |

O multiplicador de dano do Kyōka substitui o multiplicador comum do elemento base. O rider de status continua o mesmo do elemento base, aplicado sobre o dano já ampliado.

```
Mult_Kyōka = Mult_base_do_elemento + Bônus_de_poder
Bônus_de_poder: Estratégico +0,35 · Decisivo +0,20
```

### Onmyōton

| Manifestação | Afinidade crua | Status |
|---|---|---|
| Liberação de Velocidade | Yang | fechada, ver documento de Onmyōton |
| — | Yin | `[PENDENTE]`, sem manifestação nomeada |

---

## Progressão por Maestria

Cada natureza avançada é uma perícia própria, LV1 a LV6, no mesmo padrão de Katon, Raiton ou Controle de Chakra. O pré-requisito de cada nível é o Tipo Elemental de todos os componentes no nível equivalente, conforme a tabela de Requisitos de Acesso.

| Nível | Rank acessível | O que o shinobi alcança |
|---|---|---|
| LV1 — Alicerce | E | Primeira manifestação estável da natureza avançada, ainda instável fora de condições controladas. |
| LV2 — Inclinação | D | Execução funcional em combate padrão. |
| LV3 — Competência | C | Execução estável, variações táticas disponíveis. |
| LV4 — Especialização | B | Domínio tático, técnicas de alto impacto. |
| LV5 — Maestria | A | A natureza avançada como extensão natural do shinobi. |
| LV6 — Transcendência | S | Limite do possível para aquela natureza. |

A perícia da natureza avançada não reduz o custo dos Tipos Elementais componentes. Ela é adquirida e desenvolvida separadamente, com XP próprio, na mesma régua de custo do documento base ajustada pela categoria Ninja.

---

## Sinergias

- **Controle de Chakra:** reduz o custo de chakra de técnicas da natureza avançada pelo mesmo mecanismo que reduz técnicas elementais comuns.
- **Tipo Elemental dos componentes:** cada nível de uma natureza avançada exige o Tipo Elemental correspondente já desenvolvido, então investir nos componentes acelera indiretamente o acesso à natureza avançada.
- **Reserva de Chakra:** determina o PM disponível para técnicas de rank alto, que tendem a ter Limite de Saída maior nas naturezas avançadas de Tier S e A.
- **Fator Protagonismo:** eleva a chance inicial da Centelha e, por consequência do decaimento, a quantidade de tentativas disponíveis antes da extinção.

---

## Notas para o Mestre

- **Raridade real, não cosmética:** a Centelha Decrescente garante que nenhuma natureza avançada é comprável na prática. Trate cada manifestação como marco narrativo, porque o sistema agora faz dela um evento raro por construção.
- **A extinção tem peso dramático:** quando a última tentativa falha, narre o momento. O potencial que se apaga é uma perda real na história do personagem, e o luto por aquilo que quase foi é material de cena.
- **Pares compartilhados pedem cuidado:** ao narrar um par como Terra+Água, deixe claro pro jogador que o resultado da sub-rolagem não é escolha dele. O Mestre rola e revela.
- **Gate de linhagem é história, não bloqueio arbitrário:** um Senju ou Uzumaki que nunca soube da própria ascendência pode manifestar Mokuton como revelação de enredo, em vez de barreira mecânica seca.
- **Clusters são geografia viva:** o viés de linhagem e região é a razão pela qual Iwagakure tem doutrina de Yōton e Kumogakure tem esgrimistas de Ranton. Use os clusters ao gerar PdMs para que a distribuição de naturezas avançadas no mundo pareça orgânica.
- **Meiton pede adaptação:** por ter tipo dinâmico, o Mestre precisa declarar contra qual chakra o Meiton está sendo usado a cada ativação, antes de resolver o Ciclo de Superação daquele turno.
- **Onmyōton segue incompleto:** a manifestação de Yin ainda não existe. Não improvise uma em mesa sem antes fechar a decisão de design formalmente.
