---
id: naruto.system.advanced-natures
title: "Naturezas Avançadas"
version: 5
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

Yin e Yang entram na mesma cadeia de afinidade da Transformação de Natureza, no branch descrito no documento base. São naturezas base do sistema e não naturezas avançadas: não passam pela Etapa de manifestação e não rolam Centelha, e cada uma tem perícia completa própria, Liberação de Yin v3 e Liberação de Yang v3, regidas pelo documento do Eixo do Onmyōton.

A Liberação de Velocidade não pertence a este eixo. Nenhuma camada canônica a associa ao Yang, e ela consta do catálogo de Kekkei Genkai acima, com composição de Vento e Raio atribuída pela camada de jogos.

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
| Jinton 塵遁 (Poeira, Tōta) | Fogo+Terra+Vento | nenhum | Fogo | S | Estratégico | 1% |
| Mokuton (Madeira) | Terra+Água | Ashura (Senju/Uzumaki) | Terra | A | Estratégico | 2% |
| Shōton (Cristal) | Terra+Água | nenhum | Terra | A | Decisivo | 2% |
| Kōton (Aço) | Fogo+Terra | nenhum | Fogo | A | Decisivo | 2% |
| Meiton (Escuridão) | desconhecida | nenhum | dinâmico | A | Decisivo | 2% |
| Saton (Areia) | Terra+Vento | nenhum | Terra | A | Decisivo | 2% |
| Shakuton (Queima) | Fogo+Vento | nenhum | Fogo | A | Decisivo | 2% |
| Jūton (Gravidade) `[proposta]` | Raio+Terra | nenhum | Raio | A | Tático-Decisivo | 2% |
| Hariton (Vidro/Obsidiana) `[proposta]` | Fogo+Terra | nenhum | Fogo | A | Tático-Decisivo | 2% |
| Santon (Ácido) `[proposta]` | Água+Raio | nenhum | Raio | A | Tático | 2% |
| Hyōton (Gelo) | Água+Vento | nenhum | Vento | B | Decisivo | 4% |
| Bakuton (Explosão) | Terra+Raio | nenhum | Raio | B | Decisivo | 4% |
| Futton (Ebulição) | Água+Fogo | nenhum | Fogo | B | Decisivo | 4% |
| Jinton 迅遁 (Velocidade) | Vento+Raio | nenhum | Raio | B | Tático-Decisivo | 4% |
| Yōton 溶遁 (Lava) | Fogo+Terra | nenhum | Fogo | C | Decisivo | 8% |
| Jiton (Magnetismo) | Vento+Terra | nenhum | Terra | C | Decisivo | 8% |
| Ranton (Tempestade) | Raio+Água | nenhum | Raio | C | Tático-Decisivo | 8% |
| Puraton (Plasma) `[proposta]` | Fogo+Raio | nenhum | Raio | C | Tático-Decisivo | 8% |
| Deiton (Lama) | Terra+Água | nenhum | Terra | C | Tático | 8% |

A coluna de Poder não altera a chance de manifestação. Ela define o preço de retentativa da Centelha e, no caso do Kyōka, o bônus de multiplicador de dano.

**Pares com múltiplos ocupantes**, testados pelo portão único do ocupante mais raro:

| Par | Ocupantes | Portão testa por |
|---|---|---|
| Terra+Água | Mokuton, Shōton, Deiton | Mokuton |
| Terra+Raio | Bakuton, Jūton | Jūton |
| Fogo+Terra | Yōton, Hariton, Kōton | Kōton |
| Água+Raio | Ranton, Santon | Santon |
| Terra+Vento | Jiton, Saton | Saton |

Vento+Raio tem ocupante único, a Liberação de Velocidade, e por isso não entra na tabela. A composição dela estava vaga no catálogo até a errata lhe dar entrada própria.

### Nomenclatura

Toda natureza do catálogo tem nome japonês, para que a ficha não misture entradas nomeadas com entradas sem nome. Nove deles são construídos no padrão 〜遁 e não vêm de fonte alguma, porque o cânone não nomeia essas naturezas: Jūton, Hariton, Santon e Puraton entre as Kekkei Genkai, e Shiton, Taiton, Gōton, Shinton e Chōton entre as Kyōka. Todos ficam marcados `[proposta]` e podem ser revistos sem custo mecânico — nenhuma regra depende do nome.

`[canon]` Duas romanizações colidem, e a colisão é da obra e não deste catálogo. **Jinton** é 塵遁, a Liberação de Poeira, e também 迅遁, a Liberação de Velocidade. **Yōton** é 陽遁, a Liberação de Yang que é natureza base, e também 溶遁, a Liberação de Lava. O kanji fica registrado nas quatro linhas por isso. Em mesa, o contexto separa: a Poeira é Kekkei Tōta de tier S e a Velocidade é tier B; o Yang é natureza base e a Lava é Kekkei Genkai.

A entrada do Plasma resolve a pendência de padrão que o catálogo registrava — era a única com nome de termo de física em vez de composto japonês. Passa a ser Puraton, e o rótulo pt-BR continua Plasma.

**Estilo Plasma, busca de condutor.** `[proposta]` O plasma ioniza o ar no percurso e a descarga se resolve no condutor mais favorável dentro do alcance declarado, em vez de obedecer à trajetória apontada.

- Alvo declarado livremente quando a entrega é por contato direto, ou quando existe um único condutor viável na área declarada.
- Busca automática quando mais de um condutor disputa a descarga dentro do alcance. A técnica se resolve no condutor mais favorável, que pode não ser o alvo pretendido, e aliado em posição mais condutora entra na conta.
- Condutor abrange metal, água, terreno alagado, umidade corporal e pele exposta, e não apenas metal. É aqui que a propriedade se separa do Jiton, que atrai metal por magnetismo e não alcança os demais.

A propriedade governa apenas em qual condutor a descarga se resolve. Tudo que diz respeito a atravessar isolante e a propagar-se por água já pertence à perícia de Raiton, que o Estilo Plasma herda como tipo dominante e não reescreve — a dissipação contra isolante no LV1 e a travessia de isolante fino a partir do rank C continuam valendo sem exceção para o Plasma.

**Fronteiras de condução.** Três mecânicas distintas operam sobre condutores, e nenhuma substitui outra. Ficam registradas juntas para que nenhuma passagem futura as confunda ou funda:

| Mecânica | Eixo | O que faz | Limite de alcance |
|---|---|---|---|
| Regra de Condução do Raiton | passiva | a descarga percorre condutor já presente na cena e se dissipa contra isolante seco | o condutor existente |
| Condução por Meio do Shiden | conversão ativa | o praticante escolhe aplicar a descarga sobre um meio condutor e converte entrega de alvo único em entrega de área | a extensão física do meio |
| Canal ionizado do Estilo Plasma | isenção | a descarga dispensa meio externo e atravessa isolante seco interposto, invertendo a regra base | a declaração da técnica |

A limitação de escolha de alvo não é compensada com redução de dano. O sistema não tem rolagem de acerto e toda vantagem ofensiva já é ignora-esquiva por regra central, de modo que acerto garantido não é privilégio do Plasma. A troca real é escolha de alvo por posicionamento, e ela se paga sozinha em cena com múltiplos combatentes.

### Catálogo de Kyōka

| Kyōka | Elemento base | Gate | Tier | Poder | % base | Mult. de dano |
|---|---|---|---|---|---|---|
| Enton 炎遁 (Chama Negra) | Fogo | Indra (Uchiha) | A | Estratégico | 2% | 2,10 |
| Shiton (Incandescência) `[proposta]` | Fogo | nenhum | A | Decisivo | 2% | 1,80 |
| Taiton (Tufão) `[proposta]` | Vento | nenhum | A | Estratégico | 2% | 1,65 |
| Kuroi Kaminari (Raio Negro) | Raio | doutrina de Kumogakure | A | Decisivo | 2% | 1,95 |
| Shiden 紫電 (Raio Roxo) | Raio | nenhum | A | Tático-Decisivo | 2% | 1,85 |
| Shinton (Sísmico) `[proposta]` | Terra | `[PENDENTE]` | A | Decisivo | 2% | 1,70 |
| Chōton (Maré) `[proposta]` | Água | `[PENDENTE]` | A | Decisivo | 2% | 1,20 |

O multiplicador de dano do Kyōka substitui o multiplicador comum do elemento base. O rider de status continua o mesmo do elemento base, aplicado sobre o dano já ampliado.

```
Mult_Kyōka = Mult_base_do_elemento + Bônus_de_poder
Bônus_de_poder: Estratégico +0,35 · Decisivo +0,20 · Tático-Decisivo +0,10
```

O Enton é a única exceção declarada a essa régua. A fórmula o colocaria em 1,95, e ele está registrado em 2,10. `[canon]` O Amaterasu é a ninjutsu de Katon de nível mais alto da série, fogo que arde por sete dias e sete noites e não se apaga por meios comuns, e nenhuma manifestação de Raiton ocupa posição equivalente na obra. O Enton cobra portão de linhagem de Indra somado ao Sharingan, e a régua sozinha o empatava com o topo do Raio, que não cobra linhagem alguma.

A faixa Estratégico do Raio fica deliberadamente vazia, e a lacuna é decisão e não esquecimento. Raio 1,75 somado ao incremento Estratégico daria 2,10 e reabriria exatamente o empate que a exceção acima existe para desfazer. Nenhuma passagem futura deve preenchê-la por simetria com os outros elementos.

`[cânone fraco, wiki de fã]` O princípio geral da camada tem descrição registrada fora de databook: a intensificação é a transformação de natureza levada ao extremo, o chakra vibrado na maior velocidade e no maior volume que o praticante alcança, e a mesma fonte afirma que o refinamento não é exclusivo do raio e se aplica a qualquer uma das cinco naturezas básicas. A descrição fica registrada porque sustenta a existência da camada inteira, e fica etiquetada porque a fonte é wiki de fã e não databook.

A exceção é nominal e não abre precedente. Toda Kyōka nova deriva da fórmula, e qualquer outro desvio exige registro explícito como este — a Incandescência, acrescentada no mesmo lote, cai da régua sem ajuste: Katon 1,60 mais 0,20 de Decisivo.

### Múltiplos ocupantes na camada Kyōka

A regra de portão único com sub-rolagem ponderada, vigente na camada de Kekkei Genkai, **não se aplica aqui**. Lá os ocupantes dividem uma mesma composição elemental, e um único par de elementos justifica uma única rolagem. Kyōka não é composição, é intensificação de um elemento único, e cada ocupante tem origem e portão próprios.

**Cada Kyōka é testada de forma independente**, com portão e chance próprios. Não existe portão compartilhado nesta camada, e a convivência entre ocupantes de portões de naturezas diferentes deixa de ser problema por consequência.

**Um shinobi manifesta no máximo uma Kyōka por elemento base.** Duas Kyōka do mesmo elemento seriam dois tetos do mesmo elemento no mesmo portador.

**Ordem de teste.** Quando o personagem é elegível a mais de uma Kyōka do mesmo elemento, testa primeiro a de portão mais restrito; manifestada essa, as demais do mesmo elemento não são testadas. A ordem vigente é Enton antes de Shiton, e Kuroi Kaminari antes de Shiden.

### Portão por doutrina

O catálogo conhecia até aqui portão de linhagem e ausência de portão. O portão por doutrina é o terceiro tipo, e **não é resolvido por rolagem**.

**Condição de acesso.** O personagem precisa ser formalmente aceito como o aprendiz da geração por um portador vivo, o que exige um portador ativo e vínculo com a estrutura de Kumogakure, ou aceitação direta do portador.

**Exclusividade.** A vaga é única por geração. Existe no mundo um único receptor ativo por vez, e ela permanece ocupada até a morte ou a renúncia do receptor, ainda que ele nunca manifeste a Kyōka. `[canon]` A tradição do Terceiro Raikage foi oferecida a cada geração e apenas Darui dominou, o que a exclusividade da vaga reproduz.

**Após o vínculo.** Aceito como aprendiz, o personagem rola a Centelha pelo procedimento padrão, e a retentativa cobra pela tabela vigente de poder Decisivo.

**Custo.** O portão não cobra XP. O preço dele é político e se paga em mesa, na disputa por uma vaga que outro personagem pode estar ocupando.

### Kuroi Kaminari

`[canon]` quanto à existência e à transmissão. `[proposta]` quanto à classificação como Kyōka.

`[canon]` O Raio Negro foi transmitido pelo Terceiro Raikage, que instituiu em Kumogakure a tradição de oferecer o aprendizado ao aluno mais promissor de cada geração, com direito à tatuagem de kanji de raio como marca de domínio. Darui é o único registrado como tendo dominado, após anos de treino desde a infância. Não é Kekkei Genkai: a Kekkei Genkai de Darui é o Ranton, capacidade separada, e as duas tatuagens dele marcam coisas distintas.

**Forma sustentada.** `[proposta]` O Raio Negro mantém forma própria em construto que persiste ao longo de turnos e age, em vez de se resolver no instante da descarga. É o que o separa de qualquer Raiton comum, cuja entrega é sempre instantânea. Referência canônica de comportamento: a Pantera Negra, no Compêndio de Raiton, que exige esta Kyōka.

**Amplificação doutrinária.** `[proposta]` As demais técnicas de Raiton do portador operam com multiplicador de dano 1,85, em vez do 1,75 do Raiton comum. O valor é metade do incremento Decisivo de 0,20 que a Kyōka aplica sobre a base, herdada pelo restante do arsenal. A progressão é linear e deriva do incremento não-linear da própria Kyōka, o que a mantém dentro da regra central. A amplificação não acumula com nenhuma outra Kyōka de Raio, conforme a seção de múltiplos ocupantes.

**Marca de domínio.** `[proposta]` O portador reconhecido carrega a tatuagem de kanji de raio de Kumogakure. É efeito de reconhecimento social e político, sem valor mecânico de combate, no mesmo tratamento que este documento já dá ao peso político das naturezas de tier A.

**Calibração.** A Amplificação Doutrinária coloca o Raiton comum do portador na mesma faixa numérica do Shiden, e a equivalência é intencional. O Shiden é uma Kyōka completa, com três propriedades próprias; a amplificação entrega apenas o número. O portador de Kuroi Kaminari opera o Raiton comum na faixa do Shiden e não dispõe de nenhuma das capacidades do Shiden.

### Shiden

`[canon]` quanto à existência e às propriedades. `[proposta]` quanto à classificação como Kyōka.

`[canon]` Kakashi Hatake desenvolveu o Shiden como substituto do Raikiri, que deixou de poder usar com segurança após a perda do Sharingan. A entrega é à distância, disparada da mão contra o alvo, e não exige contato como a família do Chidori. A técnica dispensa o Sharingan e não impõe a visão de túnel que tornava o Raikiri perigoso para o próprio usuário. `[canon]` Qualquer shinobi suficientemente proficiente em Raiton pode aprendê-la, se ensinado, e é isso que sustenta o portão ausente.

**Modulação de intensidade.** `[proposta]` O praticante declara a intensidade no momento da execução, e a técnica opera em toda a faixa entre o cirúrgico e o máximo, subindo por elevação categórica de alvo para área para campo. `[canon]` Kakashi calibra o disparo fino o bastante para arrancar um colete explosivo do alvo sem detonar a carga e sem ferir a pessoa, e no extremo oposto despeja todo o chakra disponível para forçar nuvens de chuva a precipitar.

**Condução por meio.** `[proposta]` O praticante aplica a descarga sobre um meio condutor presente na cena e converte entrega de alvo único em entrega de área. O alcance da conversão é limitado pela extensão física do meio empregado. `[canon]` Kakashi apoia a mão sobre álcool derramado e eletrifica toda a região ao redor.

**Execução sem exposição.** `[proposta]` O Shiden não abre a janela de contra-ataque que a família do Chidori abre. Está redigido como constatação e não como isenção: a penalidade vigente no Compêndio de Raiton está presa à investida linear — é a velocidade do avanço que impõe a visão de túnel, e o Sharingan a corrige — e o Shiden não tem investida. A ausência da janela decorre da forma da técnica, não de uma dispensa concedida a ela.

### Incandescência

`[proposta]` A Incandescência é a combustão completa, a chama que consome o próprio combustível sem deixar resíduo e por isso queima mais quente que a chama comum. Ela é maestria técnica pura do elemento, sem componente sobrenatural, e é por aí que se separa do Enton sem esforço adicional de design: o Enton é dom de linhagem e chama que não se apaga, a Incandescência é o teto do fogo que qualquer shinobi alcança por ofício.

Ela existe porque o Fogo era o único elemento sem Kyōka acessível sem portão. Vento, Raio, Terra e Água tinham caminho de intensificação aberto a qualquer praticante que passasse na Centelha, e o Fogo tinha apenas o Enton, travado em linhagem. A lacuna era de cobertura do sistema e não de fidelidade ao cânone, porque nada na obra estabelece que a intensidade máxima do fogo comum dependa de herança.

**Combustão sem resíduo.** Técnica de Incandescência não produz fumaça, cinza ou fuligem. O campo permanece limpo depois da passagem da chama, e o praticante não ganha nem perde cobertura visual pelo próprio ataque. A propriedade tem custo real, porque remove do praticante o recurso de ocultação por fumaça que o Katon comum oferece.

**Consumo integral.** Cobertura, barreira ou obstáculo de material combustível dentro da área declarada é consumido por inteiro, em vez de sofrer dano parcial. A propriedade converte terreno em não terreno, e existe para dar à Kyōka presença tática que o dano bruto sozinho não daria.

**Grau de Queimadura elevado.** O grau mínimo de Queimadura declarável sobe um degrau em relação ao que a margem produziria em Katon comum, com teto absoluto mantido em Crítico. A escada da condição pertence ao Sistema de Efeitos de Status e não é reescrita aqui: os quatro graus penalizam INT e SAB em 15%, 30%, 50% e 70%, e o Crítico gera Ferimento Grave Moderado permanente. Um degrau a mais nesta natureza é, portanto, um degrau a mais de penalidade cognitiva sobre o alvo, e no topo da escada é sequela.

### Onmyōton

| Natureza | Perícia | Status |
|---|---|---|
| Inton 陰遁 (Yin) | Liberação de Yin v3 | natureza base, sem Centelha |
| Yōton 陽遁 (Yang) | Liberação de Yang v3 | natureza base, sem Centelha |

Ambas têm perícia completa, com dez caminhos, três inclinações e duas transcendências cada, regidas pelo documento do Eixo do Onmyōton. Nenhuma das duas é natureza avançada, e a Liberação de Velocidade, que já constou aqui, mudou para o catálogo de Kekkei Genkai.

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
