---
id: naruto.system.advanced-natures
title: "Naturezas Avançadas"
version: 7.2
layer: scenario
scenario: naruto
type: system
status: final
source-file: Naturezas_Avancadas_v6.md, mais a Errata E1 v2
---

# Naturezas Avançadas — Kekkei Genkai, Kekkei Tōta, Kyōka e Onmyōton
Camada de recomposição e intensificação elemental construída sobre a Transformação de Natureza.

---

## Sobre as Naturezas Avançadas

Uma natureza avançada nasce de duas operações distintas sobre o chakra já convertido pela Transformação de Natureza. A primeira recompõe duas ou três naturezas elementais básicas simultâneas numa natureza nova, com propriedades que nenhum dos componentes possui isoladamente. A segunda intensifica uma única natureza básica além do teto comum, sem misturar elementos. A primeira operação produz Kekkei Genkai e Kekkei Tōta. A segunda produz Kyōka.

Existe ainda um terceiro eixo, o Onmyōton, que não compete no ciclo elemental e não usa Papel de Indução. Ele opera sobre Yin e Yang, as duas naturezas espirituais e vitais que ficam fora das cinco naturezas comuns, e cobre fenômenos não-elementais como manipulação corporal avançada e certas variantes de genjutsu.

As três famílias compartilham a mesma lógica de aquisição em duas etapas. A primeira etapa é possuir as naturezas cruas necessárias, que emergem da cadeia já definida na Transformação de Natureza. A segunda etapa é a Centelha, o teste que decide se aquela composição de fato acende como a natureza nomeada. Ter os componentes qualifica um shinobi. Não garante a manifestação.

---

## Requisitos de Acesso

- **Pré-requisito:** Tipo Elemental de cada natureza componente, no nível mínimo correspondente ao rank que a natureza avançada pretende destravar.
- **Atributo regente:** INT, herdado do Tipo Elemental base.
- **Categoria:** Ninjutsu (×1,5).
- **Portão de Composição:** o shinobi precisa possuir, entre suas naturezas natas ou aprendidas, todos os componentes exigidos pela natureza avançada.
- **Portão de Linhagem:** algumas naturezas exigem descendência específica, além da composição. Mokuton exige linhagem de Ashura, restrita a Senju e Uzumaki. Enton exige linhagem de Indra, restrita a Uchiha. As demais não têm portão de linhagem.

O rank de acesso segue a mesma régua do documento base:

| Rank da técnica | E | D | C | B | A | S |
|---|---|---|---|---|---|---|
| Nível mínimo no Tipo Elemental de cada componente | LV1 | LV2 | LV3 | LV4 | LV5 | LV6 |

Quando a natureza avançada tem mais de um componente, o portão usa o maior nível exigido entre eles. Um shinobi que pretende destravar uma técnica de rank B em Yōton precisa de LV4 tanto em Katon quanto em Doton.

---

## Despertar / Aquisição

### Etapa 1 — Composição

A composição de uma natureza avançada nunca tem rolagem própria. Ela emerge da cadeia de naturezas da Transformação de Natureza: se o shinobi possui, entre suas naturezas natas ou aprendidas, todos os componentes exigidos, a Etapa 1 está automaticamente satisfeita. Um personagem com Água e Vento de nascença já preenche a composição de Hyōton sem precisar de teste adicional, e a posição de cada uma na escada não entra na conta.

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

Yin e Yang entram na mesma cadeia de naturezas natas da Transformação de Natureza, no branch descrito no documento base. São naturezas base do sistema e não naturezas avançadas: não passam pela Etapa de manifestação e não rolam Centelha, e cada uma tem perícia completa própria, Liberação de Yin v4.1 e Liberação de Yang v4.1, regidas pelo documento do Eixo do Onmyōton.

A Liberação de Velocidade não pertence a este eixo. Nenhuma camada canônica a associa ao Yang, e ela consta do catálogo de Kekkei Genkai acima, com composição de Vento e Raio atribuída pela camada de jogos.

---

## Efeitos Globais

A manifestação de uma natureza avançada é evento de vulto na vida de qualquer clã ou vila. Naturezas de tier S e A carregam peso político imediato, o shinobi que a desperta se torna ativo estratégico e alvo de atenção de outras vilas. Naturezas de tier C são notáveis mas administráveis, presentes o suficiente em algumas vilas para terem doutrina de combate formal contra elas.

O Ciclo de Superação trata toda natureza avançada como natureza única, com natureza dominante própria, e não como sobreposição dos componentes. Um duelista que enfrenta Mokuton pela primeira vez não deduz automaticamente as fraquezas dele a partir de Terra e Água separadas.

---

## Mecânica de Ativação

- **Custo:** definido por técnica, em RC, dentro do Limite de Saída do executor, cuja largura a Reserva de Chakra publica por posição.
- **Ação:** definida por técnica.
- **Restrições:** exige a natureza avançada desbloqueada e no nível mínimo do rank pretendido, além dos Tipos Elementais de todos os componentes já no nível exigido.
- **Aftermath:** definido por técnica.

---

## Efeitos Mecânicos

### Natureza dominante e dano

A natureza dominante de uma natureza avançada é o componente que ocupa a posição mais alta na ordem de precedência, e ela determina a posição da natureza avançada no Ciclo de Superação quando confrontada com uma natureza pura.

| Ordem de precedência |
|---|
| Raio |
| Fogo |
| Terra |
| Vento |
| Água |

Meiton é exceção. Sua composição elemental permanece desconhecida e sua identidade funcional confirmada é absorver e redirecionar chakra do oponente. A natureza dominante dele é dinâmica: em cada uso, assume a do chakra que está manipulando naquele momento, em vez de uma posição fixa.

O dano de uma técnica de natureza avançada resolve pelo motor comum do Sistema Elemental. A Constante de Moldagem de 1,40 vale para ela como vale para qualquer transformação de natureza, e a Assinatura se lê do vetor que a técnica declarar. A natureza dominante não participa desse cálculo.

A escolha do vetor pertence à obra em cada entrada, e a mesma natureza avançada sustenta entregas diversas. A lança de Hyōton declara Penetração e resolve em 1,00, e o congelamento sustentado da mesma natureza declara Energia térmica e resolve em 1,15, porque a Assinatura térmica cobre tanto a adição quanto a remoção de calor.

### Catálogo de Kekkei Genkai e Kekkei Tōta

| Natureza | Composição | Gate | Tipo dominante | Tier | Poder | % base | Proveniência |
|---|---|---|---|---|---|---|---|
| Jinton 塵遁 (Poeira, Tōta) | Fogo+Terra+Vento | nenhum | Fogo | S | Estratégico | 1% | cânone |
| Mokuton (Madeira) | Terra+Água | Ashura (Senju/Uzumaki) | Terra | A | Estratégico | 2% | cânone |
| Shōton (Cristal) | Terra+Água | nenhum | Terra | A | Decisivo | 2% | cânone |
| Kōton (Aço) | Fogo+Terra | nenhum | Fogo | A | Decisivo | 2% | cânone |
| Meiton (Escuridão) | desconhecida | nenhum | dinâmico | A | Decisivo | 2% | cânone |
| Saton (Areia) | Terra+Vento | nenhum | Terra | A | Decisivo | 2% | cânone |
| Shakuton (Queima) | Fogo+Vento | nenhum | Fogo | A | Decisivo | 2% | cânone |
| Jūton (Gravidade) `[proposta]` | Raio+Terra | nenhum | Raio | A | Tático-Decisivo | 2% | proposta de sistema |
| Hariton (Vidro/Obsidiana) `[proposta]` | Fogo+Terra | nenhum | Fogo | A | Tático-Decisivo | 2% | proposta de sistema |
| Santon (Ácido) `[proposta]` | Água+Raio | nenhum | Raio | A | Tático | 2% | proposta de sistema |
| Hyōton (Gelo) | Água+Vento | nenhum | Vento | B | Decisivo | 4% | cânone |
| Bakuton (Explosão) | Terra+Raio | nenhum | Raio | B | Decisivo | 4% | cânone |
| Futton (Ebulição) | Água+Fogo | nenhum | Fogo | B | Decisivo | 4% | cânone |
| Jinton 迅遁 (Velocidade) | Vento+Raio `[proposta]` | nenhum | Raio | B | Tático-Decisivo | 4% | cânone; composição `[proposta]`, atribuída pela camada de jogos |
| Yōton 溶遁 (Lava) | Fogo+Terra | nenhum | Fogo | C | Decisivo | 8% | cânone |
| Jiton (Magnetismo) | Vento+Terra | nenhum | Terra | C | Decisivo | 8% | cânone |
| Ranton (Tempestade) | Raio+Água | nenhum | Raio | C | Tático-Decisivo | 8% | cânone |
| Puraton (Plasma) `[proposta]` | Fogo+Raio | nenhum | Raio | C | Tático-Decisivo | 8% | **criação de Gabriel** |
| Deiton (Lama) | Terra+Água | nenhum | Terra | C | Tático | 8% | cânone |

A coluna de Proveniência registra de onde a entrada vem. `cânone` marca natureza que a obra nomeia, com o nome japonês do catálogo podendo ser construção deste sistema conforme a seção de Nomenclatura. `proposta de sistema` marca natureza que nasce aqui para fechar par elemental vago, ainda sem auditoria própria. `criação de Gabriel` marca natureza desenhada de origem e aprovada pelo método de três passos, com documento próprio publicado.

A coluna de Poder não altera a chance de manifestação. Ela define o preço de retentativa da Centelha e, no caso do Kyōka, o bônus de multiplicador de dano.

**Pares com múltiplos ocupantes**, testados pelo portão único do ocupante mais raro:

| Par | Ocupantes | Portão testa por |
|---|---|---|
| Terra+Água | Mokuton, Shōton, Deiton | Mokuton |
| Terra+Raio | Bakuton, Jūton | Jūton |
| Fogo+Terra | Yōton, Hariton, Kōton | Kōton |
| Água+Raio | Ranton, Santon | Santon |
| Terra+Vento | Jiton, Saton | Saton |

Vento+Raio tem ocupante único, a Liberação de Velocidade, e por isso não entra na tabela. A composição dela estava vaga no catálogo até a errata lhe dar entrada própria, e a mesma errata corrigiu a etiqueta da composição para `[proposta]`: a única fonte é Naruto Mobile, e o próprio jogo declara a informação como suposição, não como fato confirmado pela obra.

**Natureza mecânica da Celeridade.** `[proposta]` O comportamento do Jinton 迅遁 é **poder de linhagem, construído pelo Manual de Criação de Poderes**, em três graus que se compram com progressão, sem escada, sem inclinação e sem caminho. A admissão como perícia foi testada e reprovada por ausência de âncora de domínio na obra: o território que uma perícia de velocidade reivindicaria já tem quatro donos publicados, Raiton, Hachimon, Passagem e o Shunshin no Jutsu. A ficha completa, com os três graus, os contratos de oito campos e o preço de aquisição, vive em [Celeridade](../powers/celeridade.md). Esta entrada permanece dona da composição, do portão, do tier histórico e do percentual da Centelha.

**Dependência aberta.** Se nascer uma perícia do domínio físico de movimento, a Celeridade ganha inclinação de extensão manifestada dentro dela, no mesmo molde que já vale para Brasa dentro de Katon, Sismo dentro de Doton, Ciclone dentro de Fūton e Maré dentro de Suiton. Até lá, os três graus vivem inteiramente no documento de poder, sem hospedeira.

### Nomenclatura

Toda natureza do catálogo tem nome japonês, para que a ficha não misture entradas nomeadas com entradas sem nome. Nove deles são construídos no padrão 〜遁 e não vêm de fonte alguma, porque o cânone não nomeia essas naturezas: Jūton, Hariton, Santon e Puraton entre as Kekkei Genkai, e Shiton, Taiton, Gōton, Shinton e Chōton entre as Kyōka. Todos ficam marcados `[proposta]` e podem ser revistos sem custo mecânico, porque nenhuma regra depende do nome.

A Incandescência recebe kanji próprio nesta versão e passa a constar como 熾遁. O caractere 熾 nomeia a brasa que arde clara, que é exatamente a matéria brilhando de calor que a natureza opera, e a escolha fecha a única entrada de Kyōka que trazia rótulo em romanização sem grafia correspondente.

O **Taiton** passa a registrar kanji, 颱遁, com 颱 significando tufão. A entrada segue marcada `[proposta]` como as demais construídas neste catálogo, e o registro do kanji existe para que a natureza com implementação mecânica publicada apareça na ficha com a mesma forma das entradas de fonte.

`[canon]` Duas romanizações colidem, e a colisão é da obra e não deste catálogo. **Jinton** é 塵遁, a Liberação de Poeira, e também 迅遁, a Liberação de Velocidade. **Yōton** é 陽遁, a Liberação de Yang que é natureza base, e também 溶遁, a Liberação de Lava. O kanji fica registrado nas quatro linhas por isso. Em mesa, o contexto separa: a Poeira é Kekkei Tōta de tier S e a Velocidade é tier B; o Yang é natureza base e a Lava é Kekkei Genkai.

A entrada do Plasma resolve a pendência de padrão que o catálogo registrava — era a única com nome de termo de física em vez de composto japonês. Passa a ser Puraton, e o rótulo pt-BR continua Plasma.

**Natureza mecânica do Puraton.** `[proposta]` O comportamento do Puraton é **poder de linhagem, construído pelo Manual de Criação de Poderes**, em três graus que se compram com progressão, sobre uma regra permanente que vale desde a manifestação. Ele não é perícia, não é inclinação de perícia e não é caminho. A ficha completa, com a escada de condutividade, o campo de busca, os três graus, os contratos de oito campos e o preço de aquisição, vive em [Puraton (Plasma)](../powers/puraton.md). Esta entrada permanece dona da composição, do portão, do tier histórico e do percentual da Centelha.

**Puraton, busca de condutor.** `[proposta]` O plasma ioniza o ar no percurso e a descarga se resolve no condutor mais favorável dentro do alcance declarado, em vez de obedecer à trajetória apontada.

- Alvo declarado livremente quando a entrega é por contato direto, ou quando existe um único condutor viável na área declarada.
- Busca automática quando mais de um condutor disputa a descarga dentro do alcance. A técnica se resolve no condutor mais favorável, que pode não ser o alvo pretendido, e aliado em posição mais condutora entra na conta.
- Condutor abrange metal, água, terreno alagado, umidade corporal e pele exposta, e não apenas metal. É aqui que a propriedade se separa do Jiton, que atrai metal por magnetismo e não alcança os demais.

A regra permanente governa o destino da descarga. A produção da corrente, o alcance e a propagação por água pertencem à perícia de Raiton, que o Puraton herda como tipo dominante e não reescreve. A dissipação contra isolante do LV1 e a travessia de isolante fino a partir do rank C continuam valendo para todo portador, e o Grau 1 do poder é onde a dissipação passa a ser revogada, somente para as descargas de Puraton de quem o possui.

**A conciliação entre canal e busca.** As duas cláusulas tocam o mesmo disparo e respondem a perguntas diferentes. **O canal decide por onde a descarga viaja, e a busca decide onde ela termina.** O canal ionizado governa o percurso, produzindo o próprio meio e atravessando o que estiver interposto no caminho. A busca de condutor governa o destino, escolhendo entre os condutores presentes aquele em que a descarga se resolve. As duas convivem no mesmo disparo porque uma responde pelo trajeto e a outra pelo ponto final. O corredor de ar ionizado do Grau 2 entra pela porta do destino, acrescentando condutor ao terreno, e o Grau 3 fecha essa porta ao declarar destino e suspender a busca.

**Fronteiras de condução.** Cinco mecânicas distintas operam sobre condutores, e nenhuma substitui outra. A enumeração de condutor de cada linha é a da entrada dona, e a definição ampla desta seção, que alcança pele exposta, vale apenas para o Puraton. Ficam registradas juntas para que nenhuma passagem futura as confunda ou funda:

| Mecânica | Eixo | O que faz | Limite de alcance |
|---|---|---|---|
| Regra de Condução do Raiton | passiva | a descarga percorre condutor já presente na cena e se dissipa contra isolante seco | o condutor existente |
| Condução por Meio do Shiden | conversão ativa | o praticante escolhe aplicar a descarga sobre um meio condutor e converte entrega de alvo único em entrega de área | a extensão física do meio |
| Canal ionizado do Puraton, Grau 1 | isenção | a descarga dispensa meio externo e atravessa isolante seco interposto, invertendo a regra base | a declaração da técnica |
| Rescaldo do Puraton, Grau 2 | publicação de condutor | o ar do trajeto permanece ionizado por turnos declarados e vale como condutor para descargas seguintes de qualquer usuário de Raiton | o corredor declarado, enquanto durar |
| Núcleo do Shiton | inversão de mitigação | a camada condutora vestida ou carregada pelo alvo inverte a Absorção dele, que passa a somar em vez de subtrair | a camada que o alvo carrega |

A limitação de escolha de alvo não é compensada com redução de dano. O sistema não tem rolagem de acerto e toda vantagem ofensiva já é ignora-esquiva por regra central, de modo que acerto garantido não é privilégio do Puraton. A troca real é escolha de alvo por posicionamento, e ela se paga sozinha em cena com múltiplos combatentes.

### Catálogo de Kyōka

| Kyōka | Elemento base | Gate | Tier | Poder | % base | Moldagem | Produto | Proveniência |
|---|---|---|---|---|---|---|---|---|
| Shiton 熾遁 (Incandescência) `[proposta]` | Fogo | nenhum | A | Decisivo | 2% | 1,60 | 1,84 | criação de Gabriel |
| Taiton 颱遁 (Tufão) `[proposta]` | Vento | nenhum | A | Estratégico | 2% | 1,75 | 1,75 | criação de Gabriel |
| Kuroi Kaminari (Raio Negro) | Raio | doutrina de Kumogakure | A | Decisivo | sem Centelha | 1,60 | 2,00 | cânone |
| Shiden 紫電 (Raio Roxo) | Raio | nenhum | A | Tático-Decisivo | 2% | 1,50 | 1,88 | cânone |
| Shinton (Sísmico) `[proposta]` | Terra | nenhum | A | Decisivo | 2% | 1,60 | 1,60 | criação de Gabriel |
| Chōton 潮遁 (Maré) `[proposta]` | Água | nenhum | A | Estratégico | 2% | 1,75 | 1,75 | criação de Gabriel |

A coluna de Moldagem publica a Constante que a Kyōka concede, e a de Produto mostra o resultado dela contra a Assinatura da entrega característica de cada natureza, que é a Energia térmica no Shiton, a Energia elétrica no Kuroi Kaminari e no Shiden, e o vetor físico nas demais. A técnica que declarar vetor diverso resolve pela Assinatura daquele vetor, e é a coluna de Moldagem que a acompanha em todos os casos.

A coluna de proveniência separa três origens. **Cânone** marca a natureza que a obra registra, ainda que a classificação como Kyōka seja proposta deste documento. **Criação do catálogo** marca a natureza que nasceu aqui para fechar lacuna de cobertura elemental. **Criação de Gabriel** marca a natureza concebida pelo designer, com documento de concepção próprio e mecânica de mesa publicada em perícia hospedeira, estado que as demais criações do catálogo ainda não alcançaram. O Sísmico entra nesse grupo com a publicação da inclinação Sismo no Doton, no mesmo padrão que já valia para o Shiton.

**Cinco Kyōka hospedam inclinação de extensão manifestada.** O Kuroi Kaminari e o Shiden abrem, na Perícia de Raiton, perguntas que nenhum praticante sem a manifestação formula, e por isso respondem como inclinação em vez de autorizar como requisito, pela regra da seção 3 do Manual de Criação de Perícias. As inclinações Calamidade e Agudo, os caminhos delas e os dois Ápices vivem na Perícia de Raiton v3. Este documento permanece dono da aquisição, do multiplicador e do tier; a perícia hospedeira é dona da partição. A mesma regra hospeda Brasa, a inclinação de extensão da Kyōka Shiton, na Perícia de Katon, Sismo, a inclinação de extensão da Kyōka Shinton, na Perícia de Doton — o primeiro caso em que a natureza avançada não abre perícia própria alguma, cabendo por inteiro dentro do domínio que a hospeda —, Ciclone, a inclinação de extensão da Kyōka Taiton, na Perícia de Fūton, com os caminhos Espiral, Olho e Fome e o Ápice O Vento Que Não Passa, e Maré, a inclinação de extensão da Kyōka Chōton, na Perícia de Suiton, com os caminhos Preia-Mar, Vazante e Ciclo e o Ápice Macaréu. O Taiton é o primeiro Kyōka do catálogo a conservar o rider do elemento base em vez de trocá-lo: nenhuma substituição está declarada para ele.

A Constante de Moldagem do Kyōka substitui a Constante comum de 1,40 em todas as técnicas daquela natureza. O rider de status continua o mesmo do elemento base, aplicado sobre o dano já ampliado, salvo substituição declarada pela regra de rider substituído por natureza intensificada do Sistema de Efeitos de Status, que fixa escopo, graus e vetor de teste da troca e mantém o registro dos casos vigentes.

```
CM_Kyōka = 1,40 + Bônus_de_poder
Bônus_de_poder: Estratégico +0,35 · Decisivo +0,20 · Tático-Decisivo +0,10

dano = RC × coef_entrega × CM_Kyōka × assinatura + bônus_CC × coef_técnica
```

O incremento é o mesmo para todas as naturezas, e o resultado que ele produz cresce nas que entregam por Energia, porque ali a Assinatura o multiplica. Intensificar uma natureza que o corpo não sabe deter rende mais que intensificar uma que ele sabe.

**O catálogo de Kyōka perde o único membro canônico que tinha.** Com a saída do Enton, as seis entradas restantes são criação de Gabriel ou natureza sem verbete próprio na obra, e a camada deixa de poder se justificar pela existência de um ocupante que a fonte nomeia. A definição da categoria passa a ser puramente mecânica: **Kyōka é a natureza que eleva a Constante de Moldagem do elemento base acima da comum sem recompor elemento algum.** É essa elevação, e apenas ela, que separa a camada das Kekkei Genkai e das Kekkei Tōta a partir desta versão. Toda entrada nova precisa cumprir a elevação para pertencer aqui, e a proveniência de cada uma continua declarada na coluna própria.

A faixa Estratégico do Raio fica deliberadamente vazia, e a lacuna é decisão e não esquecimento. A Constante de 1,75 que o incremento Estratégico produziria, lida contra a Assinatura elétrica, resolve em 2,19 e ultrapassa o valor de dano do Enton publicado na perícia própria dele, o que inverteria a relação entre o topo do Raio e o topo do Fogo que a separação existe para manter. Nenhuma passagem futura deve preenchê-la por simetria com os outros elementos.

### Enton, natureza com perícia própria

O Enton deixa de figurar no catálogo de Kyōka e passa a responder por documento próprio, a [Perícia de Enton](../skills/enton.md). A razão é de camada. As demais entradas desta seção intensificam um elemento e respondem às perguntas do domínio daquele elemento, cabendo dentro da perícia hospedeira como inclinação de extensão manifestada. O Enton abre uma lista de perguntas que o Katon não formula em nível nenhum, sobre chama que já existe no mundo, que tem dono declarado, que não se apaga por meio comum e que consome construto de chakra, e uma lista de resposta própria é a definição de perícia própria.

Este documento permanece dono do que a manifestação decide.

| Propriedade | Valor | Dono |
|---|---|---|
| Elemento base | Fogo | este documento |
| Portão de linhagem | Indra, restrito a Uchiha | este documento |
| Tier histórico | A | este documento |
| Centelha, percentual base | 2% | este documento |
| Ordem de teste no Fogo | Enton antes de Shiton | este documento |
| Multiplicador de dano, produto final | 2,10 | Perícia de Enton |
| Partição, réguas e verbos | três inclinações, dez caminhos | Perícia de Enton |

A justificativa do 2,10 acompanha o valor para a perícia e passa a ser lida direto da fonte, que declara o Amaterasu o ninjutsu de Katon de nível mais alto da série. O valor é produto final e substitui a cadeia inteira de Constante e Assinatura nas técnicas da natureza, em vez de compor com ela. A fórmula de Kyōka deixa de alcançá-lo, porque ela precifica a elevação de Constante dentro desta camada e o Enton saiu dela.

O portão de linhagem permanece exatamente onde estava, e o teto de uma Kyōka por elemento base continua valendo para o Fogo do portador: o Uchiha que manifesta o Enton não testa o Shiton, do mesmo modo que a ordem de teste já determinava.

`[cânone fraco, wiki de fã]` O princípio geral da camada tem descrição registrada fora de databook: a intensificação é a transformação de natureza levada ao extremo, o chakra vibrado na maior velocidade e no maior volume que o praticante alcança, e a mesma fonte afirma que o refinamento não é exclusivo do raio e se aplica a qualquer uma das cinco naturezas básicas. A descrição fica registrada porque sustenta a existência da camada inteira, e fica etiquetada porque a fonte é wiki de fã e não databook.

A exceção é nominal e não abre precedente. Toda Kyōka nova deriva da fórmula, e qualquer outro desvio exige registro explícito como este — a Incandescência, acrescentada no mesmo lote, cai da régua sem ajuste: Constante comum de 1,40 somada aos 0,20 de Decisivo, lida contra a Assinatura térmica.

### Múltiplos ocupantes na camada Kyōka

A regra de portão único com sub-rolagem ponderada, vigente na camada de Kekkei Genkai, **não se aplica aqui**. Lá os ocupantes dividem uma mesma composição elemental, e um único par de elementos justifica uma única rolagem. Kyōka não é composição, é intensificação de um elemento único, e cada ocupante tem origem e portão próprios.

**Cada Kyōka é testada de forma independente**, com portão e chance próprios. Não existe portão compartilhado nesta camada, e a convivência entre ocupantes de portões de naturezas diferentes deixa de ser problema por consequência.

**Um shinobi manifesta no máximo uma Kyōka por elemento base.** Duas Kyōka do mesmo elemento seriam dois tetos do mesmo elemento no mesmo portador.

**Ordem de teste.** Quando o personagem é elegível a mais de uma Kyōka do mesmo elemento, testa primeiro a de portão mais restrito; manifestada essa, as demais do mesmo elemento não são testadas. A ordem vigente é Enton antes de Shiton. No Raio a ordem opera por outra via, porque o Kuroi Kaminari corre fora da Centelha: o personagem que conclua o arco de doutrina do Raio Negro possui a Kyōka de Raio daquele portador e deixa de testar o Shiden, e o personagem que manifeste o Shiden pela Centelha conserva a vaga de doutrina fechada pelo mesmo teto de uma Kyōka por elemento base.

### Portão por doutrina

O catálogo conhecia até aqui portão de linhagem e ausência de portão. O portão por doutrina é o terceiro tipo, e **não é resolvido por rolagem**.

**Condição de acesso.** O personagem precisa ser formalmente aceito como o aprendiz da geração por um portador vivo, o que exige um portador ativo e vínculo com a estrutura de Kumogakure, ou aceitação direta do portador.

**Exclusividade.** A vaga é única por geração. Existe no mundo um único receptor ativo por vez, e ela permanece ocupada até a morte ou a renúncia do receptor, ainda que ele nunca manifeste a Kyōka. `[canon]` A tradição do Terceiro Raikage foi oferecida a cada geração e apenas Darui dominou, o que a exclusividade da vaga reproduz.

**Após o vínculo.** O portão por doutrina não passa pela Centelha em momento algum. Aceito como aprendiz, o personagem cumpre um arco de treino jogado em mesa, conduzido pelo Narrador junto do portador vivo, e ao fim dele a Kyōka está manifestada. Não existe rolagem, não existe percentual de manifestação, não existe decaimento e não existe retentativa, porque não existe teste a falhar. A escassez sai de haver pouquíssimos portadores no mundo e de cada um escolher a quem passa.

**Precedente.** Esta é a única entrada do catálogo que dispensa a Centelha, e a exceção fica nomeada aqui para que nenhuma passagem futura a estenda por analogia. Natureza avançada nova nasce com Centelha salvo declaração explícita como esta.

**Marca de conclusão.** Concluído o arco, o portador carrega o kanji de raio tatuado no ombro, na tradição que a vila reconhece.

**Custo.** O portão não cobra XP próprio. O preço dele é político e se paga em mesa, na disputa por uma vaga que outro personagem pode estar ocupando. A Perícia de Raiton cobra normalmente a inclinação de extensão, os caminhos dela e o Ápice, pela régua do Manual de Economia de XP.

### Kuroi Kaminari

`[canon]` quanto à existência e à transmissão. `[proposta]` quanto à classificação como Kyōka.

`[canon]` O Raio Negro foi transmitido pelo Terceiro Raikage, que instituiu em Kumogakure a tradição de oferecer o aprendizado ao aluno mais promissor de cada geração, com direito à tatuagem de kanji de raio como marca de domínio. Darui é o único registrado como tendo dominado, após anos de treino desde a infância. Não é Kekkei Genkai: a Kekkei Genkai de Darui é o Ranton, capacidade separada, e as duas tatuagens dele marcam coisas distintas.

**Forma sustentada.** `[proposta]` O Raio Negro mantém forma própria em construto que persiste ao longo de turnos e age, em vez de se resolver no instante da descarga. É o que o separa de qualquer Raiton comum, cuja entrega é sempre instantânea. Referência canônica de comportamento: a Pantera Negra, no Compêndio de Raiton, que exige esta Kyōka.

**Amplificação doutrinária.** `[proposta]` As demais técnicas de Raiton do portador operam com Constante de Moldagem 1,50, em vez da comum de 1,40, o que resolve em produto de 1,88 contra a Assinatura elétrica. O valor é metade do incremento Decisivo de 0,20 que a Kyōka aplica sobre a Constante, herdada pelo restante do arsenal. A progressão é linear e deriva do incremento não-linear da própria Kyōka, o que a mantém dentro da regra central. A amplificação não acumula com nenhuma outra Kyōka de Raio, conforme a seção de múltiplos ocupantes.

**Marca de domínio.** `[proposta]` O portador reconhecido carrega a tatuagem de kanji de raio de Kumogakure. É efeito de reconhecimento social e político, sem valor mecânico de combate, no mesmo tratamento que este documento já dá ao peso político das naturezas de tier A.

**Calibração.** A Amplificação Doutrinária coloca o Raiton comum do portador exatamente na mesma faixa numérica do Shiden, e a equivalência é intencional. O Shiden é uma Kyōka completa, com propriedades próprias; a amplificação entrega apenas o número. O portador de Kuroi Kaminari opera o Raiton comum na faixa do Shiden e dispõe das capacidades da inclinação Calamidade, que são de outra natureza.

**Hospedagem na Perícia de Raiton.** `[proposta]` A manifestação abre a inclinação de extensão Calamidade na Perícia de Raiton v3, com os caminhos Doma, Assolação e Devastação, e o Ápice Nai-no-Kami. A inclinação responde por forma sustentada, permanência da descarga no ponto de impacto e desfazimento de estrutura e terreno. A partição, os números e o Ápice vivem naquele documento.

**Fronteira contra o raio negro do Chakra dos Seis Caminhos.** `[canon]` O Raiton assume coloração negra sob aquele chakra, como nas execuções conhecidas de Chidori e de Kamui Raikiri. Aquilo permanece Raiton comum, recebe a Constante comum do elemento e não abre a inclinação Calamidade. A coincidência é de cor e a origem é outra.

### Shiden

`[canon]` quanto à existência e às propriedades. `[proposta]` quanto à classificação como Kyōka.

`[canon]` Kakashi Hatake desenvolveu o Shiden como substituto do Raikiri, que deixou de poder usar com segurança após a perda do Sharingan. A entrega é à distância, disparada da mão contra o alvo, e não exige contato como a família do Chidori. A técnica dispensa o Sharingan e não impõe a visão de túnel que tornava o Raikiri perigoso para o próprio usuário. `[canon]` Qualquer shinobi suficientemente proficiente em Raiton pode aprendê-la, se ensinado, e é isso que sustenta o portão ausente.

**Modulação de intensidade.** `[proposta]` O praticante declara a intensidade no momento da execução, e a técnica opera em toda a faixa entre o cirúrgico e o máximo, subindo por elevação categórica de alvo para área para campo. `[canon]` Kakashi calibra o disparo fino o bastante para arrancar um colete explosivo do alvo sem detonar a carga e sem ferir a pessoa, e no extremo oposto despeja todo o chakra disponível para forçar nuvens de chuva a precipitar.

**Condução por meio.** `[proposta]` O praticante aplica a descarga sobre um meio condutor presente na cena e converte entrega de alvo único em entrega de área. O alcance da conversão é limitado pela extensão física do meio empregado. `[canon]` Kakashi apoia a mão sobre álcool derramado e eletrifica toda a região ao redor.

**Execução sem exposição.** `[proposta]` O Shiden não abre a janela de contra-ataque que a família do Chidori abre. Está redigido como constatação e não como isenção: a penalidade vigente no Compêndio de Raiton está presa à investida linear, porque é a velocidade do avanço que impõe a visão de túnel e o Sharingan a corrige, e o Shiden não tem investida. A ausência da janela decorre da forma da técnica, não de uma dispensa concedida a ela.

**Duas rotas para a mesma cor.** `[proposta]` A cor violeta é atribuída pela obra a fenômeno declarado desconhecido, e a leitura que este catálogo adota preenche a lacuna sem contradizer a fonte: o Raiton opera elevando a frequência de vibração do chakra, e o violeta é a banda acima da faixa que o elemento alcança em uso comum. A técnica nomeada é a rota do trabalho, alcançada por refinamento e transmissível por ensino. A Kyōka é a rota do sangue, que entrega a banda de nascença. Quem aprende apenas a técnica a executa na Constante comum do elemento. Quem manifesta a Kyōka executa todo o próprio Raiton na Constante de 1,50, que resolve em 1,88 contra a Assinatura elétrica, e dispõe da inclinação de extensão.

**Hospedagem na Perícia de Raiton.** `[proposta]` A manifestação abre a inclinação de extensão Agudo na Perícia de Raiton v3, com os caminhos Gume, Fidelidade e Instante, e o Ápice Ame-no-Ohabari. A inclinação responde por corte no lugar de perfuração, recusa de condutor alheio ao alvo e chegada sem trajeto observável. A modulação de intensidade e a condução por meio permanecem propriedades da técnica nomeada e não da natureza.

**Substituição de rider.** `[proposta]` O caminho Gume aplica Sangramento no lugar da Paralisia Parcial. A regra vigente deste documento declara que o rider continua o do elemento base, e o Sistema Elemental declara o rider como propriedade passiva do Tipo. A substituição de rider por Kyōka segue como pendência de errata dos dois documentos, sem travar a publicação da inclinação.

**Errata da técnica nomeada.** A ficha do Shiden no Compêndio de Raiton sobe de `[ATRIBUÍDO]` para `[CANON]`, fecha a autoria em Kakashi Hatake em estado Registrada no lugar de Autoria Aberta, e retira a Kyōka Shiden da lista de requisitos obrigatórios, que passa a elevação.

### Incandescência

`[proposta]` em toda a extensão, e criação de Gabriel. A natureza não tem verbete em fonte primária, e o registro fica etiquetado por inteiro em vez de emprestar autoridade que ela não tem.

A Incandescência é o calor separado da chama. O Katon queima matéria, e o Shiton faz a matéria ficar quente: o ferro na forja emite luz porque está quente o bastante para isso, e continua inteiro enquanto brilha. A luz, que no fogo comum é subproduto, aqui é carga, e boa parte das cenas que a natureza resolve se decide por ela.

Ela existe porque a única entrada de intensificação do Fogo cobrava portão de linhagem, e o Enton restringe o teto do elemento aos descendentes de Indra. A lacuna era de cobertura do sistema e não de fidelidade ao cânone, porque nada na obra estabelece que a intensidade máxima do fogo comum dependa de herança.

A separação dos vizinhos fica registrada linha a linha, porque o Fogo é a região mais povoada do catálogo.

| Contra | Separação |
|---|---|
| Katon | ali se molda chama, aqui se aquece matéria |
| Enton | ali a chama consome e persiste por cenas, aqui o efeito termina quando a matéria esfria |
| Shakuton | ali o calor retira a água do corpo e mata por ressecamento, aqui o calor entra na matéria e a matéria é que fere |
| Yōton | ali a massa fundida escoa, aqui a peça permanece sólida e brilhando |
| Bakuton | ali o rebento explode de dentro ignorando a armadura, aqui a armadura trabalha contra o dono |

**Hospedagem.** A Incandescência não tem perícia própria. Ela se hospeda na Perícia de Katon como inclinação de extensão manifestada, de nome Brasa, com os caminhos Têmpera, Fulgor e Forja e com o Ápice Sem Combustão, pelas seções 3 e 13.1 do Manual de Criação de Perícias. A Centelha, o tier histórico, a classificação de poder e o multiplicador de 1,80 continuam sendo governados por este documento, e toda a mecânica de mesa vive naquele. As três leituras abaixo descrevem a natureza e apontam onde cada uma foi escrita como regra, sem repetir a regra aqui.

**Temperatura sem combustão.** A natureza eleva a temperatura da matéria declarada, e a elevação acontece sem chama, de modo que nada arde e nada se consome. A imunidade à extinção é capstone e não propriedade de entrada: ela mora no Ápice Sem Combustão, que a perícia hospedeira cobra pelos três caminhos de Brasa aprofundados mais o preço de transcendência adicional. Até lá a entrega continua sujeita às cláusulas comuns de água da perícia hospedeira. O Ciclo de Superação permanece de pé, com o resfriamento por volume de água ou por gelo como a saída publicada.

**A luz como carga.** A emissão resolve por Cegueira no lugar do dano, alcançando quem tenha linha de visão para a fonte. A troca de rider tem escopo de caminho e não de natureza: ela vale no caminho Fulgor, pela regra geral de rider substituído do Sistema de Efeitos de Status, e a entrega resolvida por Têmpera, por Forja ou por qualquer caminho comum da perícia hospedeira continua no rider de Queimadura. É também em Fulgor que a leitura por dōjutsu recebe o degrau imediatamente acima, porque o olho que capta mais é o que mais recebe. A cláusula é deliberada: o mundo respondeu aos olhos que leem tudo ficando mais brilhante, e a resposta é comum, barata e acessível sem portão.

**O calor por dentro.** O calor entra na matéria em vez de envolvê-la, e o alvo que veste ou carrega camada condutora passa a somar a própria Absorção ao dano em vez de subtraí-la. A propriedade tem escopo de caminho e vive no efeito Núcleo de Forja, condicionada à camada que o alvo carrega e não à origem do número invertido. Ela não ignora a couraça, converte a couraça em problema, e é contra portadores de Kōton com o corpo em liga e de Jiton cobertos de areia de ferro que ela pesa mais.

### Sísmico

`[proposta]` integral quanto à existência, ao nome e às propriedades. O Sísmico é concepção deste projeto e não tem fonte primária a auditar. A única âncora canônica que ele toca vem do lado do alvo, e é a fraqueza que a obra declara para o Shōton: o cristal exige acúmulo molecular preciso e é vulnerável a uma frequência sonora específica, que quebra o acúmulo antes de o cristal se formar. O Cristal ainda não tem verbete próprio neste catálogo, e a nota cruzada do lado dele entra na fila de errata.

**Energia que viaja pela terra.** O Doton comum move matéria, levanta, derruba, abre, endurece e prende. O Sísmico não move nada. A intensificação converte a terra em meio de transmissão, de modo que a onda percorre o leito, resolve em ponto que o praticante não tocou e deixa a matéria onde ela estava. A entrega chega sem atravessar o que está acima do solo, e cobertura, muro e obstáculo erguido não recebem nada porque não estão no caminho dela.

**Frequência no lugar de força.** Estrutura rígida tem frequência própria, e a onda certa a derruba com fração da energia que seria necessária para quebrá-la. A propriedade inverte a leitura habitual de defesa, porque quanto mais rígido o material, mais barato ele custa para vir abaixo.

**Ataque ao ato.** A onda atravessa a carne sem romper nada e desarranja equilíbrio, concentração e mãos. Num sistema em que toda técnica cobra moldagem e selos, a entrega que impede o ato de executar é o eixo próprio da natureza, e é ela que sustenta o rider substituto de Atordoamento no lugar da Imobilização da Terra.

**Sem portão.** O Sísmico não cobra portão de linhagem nem portão de doutrina. Ele segue o precedente da Incandescência, Kyōka de tier A aberta a qualquer praticante que passe na Centelha, e confirma a leitura já publicada de que a Terra dispõe de caminho de intensificação acessível por ofício.

**Sem perícia própria.** O Sísmico é a primeira natureza avançada do catálogo que não abre perícia. A competência que ele destrava entra na Perícia de Doton como a inclinação de extensão manifestada Sismo, com os caminhos Tremor, Concussão e Ressonância e com o Ápice Primeira Onda, pela regra da seção 3 e pela seção 13.1 do Manual de Criação de Perícias. A Centelha, o portão e o multiplicador permanecem aqui; a mecânica de mesa mora lá.

### Maré

`[proposta]` em toda a extensão. O Chōton é concebido para este sistema e não tem fonte primária a auditar.

**Poder Estratégico.** A Maré muda a condição do campo inteiro em vez de vencer a troca direta, no mesmo critério que põe o Taiton na faixa Estratégico, e a Constante segue a régua sem desvio: 1,40 somada ao incremento Estratégico de 0,35 resulta em 1,75. A entrega característica da natureza é física, e o produto acompanha a Constante, o que coloca a Maré na mesma cifra do Tufão. O valor tático dela continua vivendo no ciclo que ela impõe, e a cifra de dano deixou de ser o eixo que a distingue.

**Sem portão de linhagem.** O Chōton é intensificação de água acessível a qualquer praticante que passe na Centelha, sem clã, sem doutrina e sem vaga por geração. A Centelha corre pelo procedimento padrão de tier A, e a retentativa cobra pela linha Estratégico da tabela de poder.

**Ciclo autônomo.** O portador declara o compasso de subida e descida da água e passa a lê-lo em vez de comandá-lo. Enquanto o ciclo corre, as fases alternam sozinhas, e o portador está sujeito a elas na mesma medida que o adversário.

**Maré vive dentro da perícia de Suiton.** A natureza abre a inclinação de extensão manifestada Maré na Perícia de Suiton, com os caminhos Preia-Mar, Vazante e Ciclo e o Ápice Macaréu, em lugar de perícia própria. A razão é de camada: a Kyōka intensifica um único elemento e responde às perguntas do domínio daquele elemento, de modo que a mecânica dela pertence à perícia hospedeira pela regra da inclinação de extensão manifestada do Manual de Criação de Perícias. O tier, a Centelha, o poder e o multiplicador de dano continuam vivendo aqui.

### Onmyōton

| Natureza | Perícia | Status |
|---|---|---|
| Inton 陰遁 (Yin) | Liberação de Yin v4.1 | natureza base, sem Centelha |
| Yōton 陽遁 (Yang) | Liberação de Yang v4.1 | natureza base, sem Centelha |

Ambas têm perícia completa, com dez caminhos, três inclinações e duas transcendências cada, regidas pelo documento do Eixo do Onmyōton. Nenhuma das duas é natureza avançada, e a Liberação de Velocidade, que já constou aqui, mudou para o catálogo de Kekkei Genkai.

---

## Progressão por Maestria

Cada natureza avançada é uma perícia própria, LV1 a LV6, no mesmo padrão de Katon, Raiton ou Controle de Chakra. O pré-requisito de cada nível é o Tipo Elemental de todos os componentes no nível equivalente, conforme a tabela de Requisitos de Acesso.

A Incandescência é a primeira exceção declarada. Ela corre pela inclinação de extensão Brasa dentro da Perícia de Katon, e os níveis dela são os da hospedeira, com a inclinação e os caminhos comprados pelo preço de aquisição adicional da categoria Ninjutsu e com Ápice próprio no lugar da transcendência de LV6. A forma vale para Kyōka e para Kekkei Genkai igualmente, porque o que a autoriza é a seção 3 do Manual de Criação de Perícias, que lê a manifestação e não a família da natureza. O Sísmico, o Tufão e a Maré seguem a mesma forma: o Sísmico pela inclinação Sismo na Perícia de Doton, o Tufão pela inclinação Ciclone na Perícia de Fūton, e a Maré pela inclinação de mesmo nome na Perícia de Suiton, cada um com o Ápice próprio da hospedeira no lugar da transcendência de LV6. O Shakuton, Kekkei Genkai de Fogo e Vento, está na fila para a mesma forma sob a inclinação Dessecação, e nenhuma outra natureza do catálogo a adota sem que a errata correspondente a autorize.

| Nível | Rank acessível | O que o shinobi alcança |
|---|---|---|
| LV1 — Alicerce | E | Primeira manifestação estável da natureza avançada, ainda instável fora de condições controladas. |
| LV2 — Inclinação | D | Execução funcional em combate padrão. |
| LV3 — Competência | C | Execução estável, variações táticas disponíveis. |
| LV4 — Especialização | B | Domínio tático, técnicas de alto impacto. |
| LV5 — Maestria | A | A natureza avançada como extensão natural do shinobi. |
| LV6 — Transcendência | S | Limite do possível para aquela natureza. |

A perícia da natureza avançada não reduz o custo dos Tipos Elementais componentes. Ela é adquirida e desenvolvida separadamente, com XP próprio, na mesma régua de custo do documento base ajustada pela categoria Ninja.

**Exceção declarada.** A natureza avançada cuja competência cabe inteira dentro do domínio de uma perícia já publicada entra ali como inclinação de extensão manifestada, pela regra da seção 3 do Manual de Criação de Perícias, e não abre perícia própria. Nesse caso a progressão corre pela perícia hospedeira, o rank acessível corre pelo portão dela, e o capstone da extensão segue a seção 13.1 em vez da transcendência do LV6. O Sísmico é a primeira entrada nessa forma, hospedado pela Perícia de Doton.

### Herança de posição

Toda natureza avançada ocupa uma posição na Escada de Afinidade do Sistema Elemental, e a posição governa a vazão pelo Limite de Saída, o custo efetivo em RC, o modelo de falha e os limiares de treino da perícia dela. A posição não se rola e não se compra: ela decorre da forma pela qual a natureza chegou à ficha.

A natureza avançada acesa por Centelha entra como Compatibilidade. O Papel de Indução lê a vocação elemental e não alcança a camada avançada, de modo que a natureza chega como fato de nascimento revelado pelo desenvolvimento, que é a definição da posição de Compatibilidade.

A Kyōka herda a posição que o portador já possui no elemento hospedeiro. Ela intensifica um único elemento e a mecânica dela vive dentro da perícia daquele elemento, e por isso a largura do cano e o custo efetivo dela são os mesmos que o portador paga no elemento base.

A natureza avançada que corre por inclinação de extensão manifestada dentro de uma perícia hospedeira não declara posição própria e lê integralmente a posição da hospedeira. Brasa, Sismo, Ciclone, Maré e Agudo seguem essa leitura.

Sem esta régua, as naturezas avançadas de perícia própria ficariam sem largura de cano declarada, porque a Escada de Afinidade nomeia apenas as sete naturezas do Sistema Elemental.

---

## Sinergias

- **Controle de Chakra:** reduz o custo de chakra de técnicas da natureza avançada pelo mesmo mecanismo que reduz técnicas elementais comuns.
- **Perícia de cada componente:** cada nível de uma natureza avançada exige a perícia da natureza correspondente já desenvolvida, então investir nos componentes acelera indiretamente o acesso à natureza avançada.
- **Reserva de Chakra:** determina o PM disponível para técnicas de rank alto, que tendem a ter Limite de Saída maior nas naturezas avançadas de Tier S e A.
- **Fator Protagonismo:** eleva a chance inicial da Centelha e, por consequência do decaimento, a quantidade de tentativas disponíveis antes da extinção.

---

## Notas para o Mestre

- **Raridade real, não cosmética:** a Centelha Decrescente garante que nenhuma natureza avançada é comprável na prática. Trate cada manifestação como marco narrativo, porque o sistema agora faz dela um evento raro por construção.
- **A extinção tem peso dramático:** quando a última tentativa falha, narre o momento. O potencial que se apaga é uma perda real na história do personagem, e o luto por aquilo que quase foi é material de cena.
- **Pares compartilhados pedem cuidado:** ao narrar um par como Terra+Água, deixe claro pro jogador que o resultado da sub-rolagem não é escolha dele. O Mestre rola e revela.
- **Gate de linhagem é história, não bloqueio arbitrário:** um Senju ou Uzumaki que nunca soube da própria ascendência pode manifestar Mokuton como revelação de enredo, em vez de barreira mecânica seca.
- **Clusters são geografia viva:** o viés de linhagem e região é a razão pela qual Iwagakure tem doutrina de Yōton e Kumogakure tem esgrimistas de Ranton. Use os clusters ao gerar PdMs para que a distribuição de naturezas avançadas no mundo pareça orgânica.
- **Meiton pede adaptação:** por ter natureza dominante dinâmica, o Mestre precisa declarar contra qual chakra o Meiton está sendo usado a cada ativação, antes de resolver o Ciclo de Superação daquele turno.
- **Onmyōton não tem manifestação a alcançar:** o eixo dispensa Etapa de manifestação e Centelha, e a perícia da natureza é a natureza desenvolvida. Yin e Yang chegam completos pelo branch do Passo 1.5, e o que fica acima das duas perícias é a união, que o Eixo do Onmyōton declara como teto não comprável.

---

## Registro de Alterações

**v7.1.** A nota para o Mestre que declarava a manifestação de Yin como decisão de design em aberto sai, atendendo pedido do Eixo do Onmyōton v1. A Errata D2, origem D3, já havia revogado a Etapa de manifestação e a Centelha no eixo inteiro, e a nota sobreviveu à varredura daquela errata por viver fora das seções de mecânica. A linha passa a declarar o estado vigente, com Yin e Yang chegando completos pelo branch do Passo 1.5 e a união ficando acima das duas perícias. As duas citações que este documento dirige ao Eixo do Onmyōton passam a resolver contra arquivo publicado. Nenhuma composição, portão, tier, Constante de Moldagem ou percentual de Centelha mudou.

**v7.** A Errata E1 é absorvida. A seção de Progressão por Maestria ganha a Herança de posição, que declara qual posição da Escada de Afinidade cada natureza avançada ocupa e, com ela, a largura do cano de saída, o custo efetivo em RC, o modelo de falha e os limiares de treino da perícia. A natureza acesa por Centelha entra como Compatibilidade, a Kyōka herda a posição do portador no elemento hospedeiro, e a natureza que corre por inclinação de extensão manifestada lê integralmente a posição da hospedeira. A pendência de substituição de rider por Kyōka na seção do Shiden permanece aberta e passa a estar registrada também na fila de errata do Sistema Elemental. Nenhuma composição, portão, tier, Constante de Moldagem, percentual de Centelha ou régua de progressão mudou.

**v6.** O documento passa a ler a estrutura de duas camadas publicada pelo Sistema Elemental v8. O Tipo Elemental dominante vira natureza dominante, deixa de reger dano e passa a reger apenas a posição no Ciclo de Superação, com a hierarquia dos cinco elementos publicada como ordem de precedência e sem número associado. A coluna do catálogo de Kekkei Genkai e Kekkei Tōta permanece com os mesmos dezenove valores, e Meiton segue dinâmico. O dano das naturezas avançadas resolve pela Constante de Moldagem e pela Assinatura do vetor que cada técnica declarar, o que abre a mesma natureza a entregas de Assinatura diversa, com a lança de Hyōton em vetor físico e o congelamento sustentado em Energia térmica. A Assinatura térmica fica declarada como cobrindo adição e remoção de calor. O bônus de poder do Kyōka passa a incidir sobre a Constante de Moldagem em vez do multiplicador do elemento, e o catálogo publica Constante e produto em colunas separadas, com Shiton em 1,84, Kuroi Kaminari em 2,00, Shiden em 1,88, Taiton em 1,75, Chōton em 1,75 e Shinton em 1,60. A definição da categoria passa a ser a elevação da Constante. A Amplificação Doutrinária do Kuroi Kaminari resolve em Constante de 1,50 e passa a coincidir exatamente com o Shiden. O Enton conserva 2,10, agora declarado produto final que substitui a cadeia inteira, e a lacuna deliberada na faixa Estratégico do Raio ganha justificativa nova, porque o valor hipotético sobe para 2,19 e passa a ultrapassar o Enton em vez de empatar com ele. Nenhuma composição, portão, tier, percentual de Centelha ou régua de progressão mudou.

**v5.4.** Errata da Celeridade. A entrada do Jinton 迅遁 passa a declarar a natureza mecânica dela como poder de linhagem construído pelo Manual de Criação de Poderes, com a ficha completa publicada em `worlds/naruto/powers/celeridade.md`, no mesmo padrão que a v5.2 já fixou para o Puraton. A composição Vento e Raio, atribuída apenas por Naruto Mobile e declarada suposição pelo próprio jogo, passa a carregar a etiqueta `[proposta]` na tabela, corrigindo a leitura implícita de cânone que a v5.3 carregava. Nasce a nota de dependência aberta: se uma perícia do domínio físico de movimento vier a existir, a Celeridade ganha inclinação de extensão manifestada dentro dela, no mesmo molde já usado por Brasa, Sismo, Ciclone e Maré. Nenhuma outra composição, portão, tier ou percentual de Centelha mudou.

**v5.3.** Errata do Enton. A natureza sai do catálogo de Kyōka e passa a responder pela Perícia de Enton, com este documento conservando o elemento base, o portão de linhagem de Indra, o tier A, o percentual de Centelha e a ordem de teste no Fogo, e cedendo à perícia o multiplicador de dano de 2,10, a partição e as réguas. A exceção nominal que o 2,10 abria contra a fórmula de Kyōka deixa de existir, porque a fórmula deixou de alcançar a natureza, e a justificativa do valor passa a ser lida direto da fonte no documento que agora o publica. Com a saída, o catálogo de Kyōka perde o único membro canônico que tinha, e a nota da categoria passa a defini-la pela substituição do multiplicador do elemento base, que é a propriedade mecânica que sobrou para separá-la das camadas vizinhas. A lacuna deliberada na faixa Estratégico do Raio permanece, com a justificativa reescrita para não depender de uma exceção que saiu do documento. Nenhuma outra composição, portão, tier, percentual de Centelha ou régua de progressão mudou.

**v5.2.** Errata do Puraton. A entrada passa a declarar a natureza mecânica dela como poder de linhagem construído pelo Manual de Criação de Poderes, com a ficha completa publicada em `worlds/naruto/powers/puraton.md`, e o catálogo deixa de ser lido como se a propriedade fosse camada de perícia ou de inclinação. A conciliação entre canal e busca virou linha publicada, com o canal decidindo por onde a descarga viaja e a busca decidindo onde ela termina, encerrando a leitura contraditória que a seção de busca e a tabela de fronteiras permitiam. O parágrafo que afirmava a dissipação contra isolante do LV1 valendo sem exceção para o Plasma foi corrigido, porque o Grau 1 do poder a revoga para as descargas de Puraton de quem o possui. A tabela de fronteiras de condução ganhou a linha do Rescaldo e o canal ionizado passou a citar o grau que o publica. O catálogo de Kekkei Genkai ganhou coluna de Proveniência, com o Puraton marcado como criação de Gabriel. O nome Estilo Plasma foi substituído por Puraton em todo o documento, alinhando o corpo do texto à decisão de nomenclatura que a v5.1 já havia tomado. Nenhuma composição, portão, tier, percentual de Centelha ou régua de progressão mudou.