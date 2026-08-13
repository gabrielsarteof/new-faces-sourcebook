---
id: core.skill.tanto
title: "Tantō"
version: 1
layer: core
type: skill
status: final
source-file: Pericia_Tanto_v1.md
---

PERÍCIA DE TANTŌ
短刀 · A lâmina que se saca de dentro

Perícia de núcleo, agnóstica de cenário. Qualquer mundo que jogue com lâmina curta de perfuração consome este documento sem reescrevê-lo, e flavor específico de cenário vive em `worlds/<mundo>/extensions/`, nunca aqui.

O tantō é a lâmina que existe para o momento em que a espada não cabe mais entre dois corpos. Onde a distância já fechou e o combatente já está preso pelo outro, o tantō entra pela junta que a armadura deixa aberta e pela abertura que o próprio agarrão cria. `[real]` O propósito original do objeto era perfurar couraça no alcance de um clinch, quando nenhuma lâmina longa consegue girar. `[real]` A variante yoroi-dōshi, espinha e base reforçadas, existe porque perfurar sem entortar sob esse tipo de pressão exige uma construção própria. `[real]` E a montagem tradicional na cintura invertia o cabo contra o corpo e a ponta da bainha para frente, desenho que impede a lâmina de escorregar ou de ser arrancada quando o portador já está agarrado.

O domínio se lê em duas metades. Uma é a perfuração de estrutura rígida, o golpe que encontra a fresta entre placas onde a Guarda do defensor ainda está de pé. A outra é a implantação, a lâmina que entra em jogo a partir de um estado em que ainda não estava em jogo, seja porque foi sacada de dentro de um controle físico já estabelecido, seja porque ninguém a reconheceu como arma até o instante em que corta. As duas leem o mesmo objeto por lados opostos do mesmo desenho: a lâmina pequena o bastante para entrar onde nada mais entra.

O território termina onde o ofício de lâmina curta genérico começa. Cruzamento, ângulo de entrada, transição de empunhadura e a gramática geral do combate com faca pertencem a Adagas e Facas de Combate. Esta perícia não governa nenhuma delas. O que ela governa é a perfuração de estrutura contra Guarda elevada e a entrega a partir de um controle físico já formado, os dois territórios que aquela doutrina geral não nomeia por verbo próprio.

O domínio não produz dano à distância, não desloca e não sela nada. A capacidade de agarrar, derrubar, empurrar e desarmar pertence ao motor de manobras do Núcleo de Combate, e esta perícia consome esse motor sem redefini-lo.

═══════════════════════════════════════════════════════════════════

IDENTIDADE

Regente DES. Categoria Físico, multiplicador 1,0. Camada subclasse. Classe de arma Arma de precisão, Esforço 0,8 e coeficiente de impacto 0,8, lida do Núcleo de Combate. O coeficiente de entrega do golpe comum é 0,20, o mesmo de qualquer arma antes de qualquer obra elevar o Fator de Técnica.

O domínio não controla portão de rank. Não existe compêndio de obras nomeadas de tantō escalonando o acesso por rank, e a perícia entrega competência de golpe e não catálogo de técnicas.

LV1 750 · LV2 1.125 · LV3 2.250 · LV4 4.125 · LV5 6.750 · LV6 10.125, acumulando 25.125. Caminho extra custa 2.062 no LV4 e 3.375 no LV5.

COMO O TESTE SE LÊ

teste = Base Total + DES + inclinação, se a situação pertence a ela + especialização, se o verbo resolve o problema

Uma inclinação e uma especialização por teste, no máximo.

TESTES RESOLVIDOS

LV1 · Base 12 · DES 2 · teste 14
LV2 · Base 24 · DES 6 · teste 30 fora, 38 dentro
LV3 · Base 32 · DES 12 · teste 44 fora, 60 dentro
LV4 · Base 40 · DES 18 · teste 58 fora, 78 dentro, 116 em Definida Aberto, 120 em Estreita Aberto
LV5 · Base 45 · DES 26 · teste 71 fora, 93 dentro, 142 em Definida Aprofundado, 147 em Estreita Aprofundado
LV6 · Base 50 · DES 34 · teste 84 fora, 109 dentro, 169 em Definida Transcendido, 174 em Estreita Transcendido

Com o caminho adicional da mesma inclinação comprado e aprofundado, a largura de ápice fecha em Base 55, Inclinação 28, teste dentro 117, alcançando 177 em Definida Transcendido e 182 em Estreita Transcendido.

═══════════════════════════════════════════════════════════════════

RÉGUAS TRANSVERSAIS

LEITURA DE FRESTA. Fração da Guarda do alvo que o golpe perfurante lê, no lugar da Guarda inteira. Lê a especialização de Busca de Junta quando o caminho está aberto e o teste dentro da inclinação nos níveis anteriores a ele.

```
fração de Guarda lida = 1 − (teste ÷ 295), piso de 0,40
cada degrau de Leitura de Fresta acumulado na cena subtrai 0,05, até o piso absoluto de 0,25
```

O neutro 295 é o teste de largura de ápice em Definida Transcendido dividido por 0,60, o ponto exato em que o piso de 0,40 se alcança sem degrau nenhum. O piso absoluto de 0,25 é o mesmo teste de ápice com os três degraus somados, e é ele que garante que a Guarda nunca chega a zero por esta régua sozinha.

Resolvido: 0,95 no LV1, 0,87 no LV2, 0,80 no LV3, 0,74 no LV4 sem o caminho e 0,61 com ele aberto, 0,52 no LV5 com o caminho aprofundado, 0,43 no LV6 transcendido, 0,40 na largura de ápice, e 0,25 no ápice com os três degraus acumulados. Contra a Guarda de 160 do praticante da faixa Especial que o Núcleo de Combate usa como exemplo, o golpe lê 98 de Guarda no LV4 com o caminho, 83 no LV5, 64 no ápice e 40 no ápice com os três degraus.

GRAU DE OCULTAÇÃO. Quanto a lâmina resiste a ser reconhecida, seja por revista, seja por leitura de combate. Resolve por oposição ao teste de quem procura. Lê a especialização de Ocultação quando o caminho está aberto e o teste dentro da inclinação nos níveis anteriores a ele.

Resolvido: 38 no LV2, 60 no LV3, 116 no LV4, 142 no LV5, 169 no LV6, 177 na largura de ápice.

POSSE DA LÂMINA. Resistência a perder a arma pelo Desarmar do Núcleo de Combate e a manter a lâmina em mão durante Imobilização. Sem especialização, porque a posse pertence ao ofício inteiro e não a uma rota dele.

```
Posse da Lâmina = Base Total + DES + Inclinação Total
```

Resolvido: 14 no LV1, 38 no LV2, 60 no LV3, 78 no LV4, 93 no LV5, 109 no LV6.

═══════════════════════════════════════════════════════════════════

NÍVEL 1: FUNDAMENTOS
Base 12 · teste 14 · DES 2

O praticante empunha o tantō como Arma de precisão, com Esforço 0,8 e coeficiente de impacto 0,8. A montagem é aikuchi, sem guarda de mão, e a bainha se traz com o cabo voltado para trás e a ponta para frente, de modo que sacar e embainhar não custam ação além do golpe em si. Posse da Lâmina 14. Leitura de Fresta lê 95% da Guarda do alvo antes de qualquer caminho.

NÍVEL 2: INCLINAÇÃO (escolha 1)
Base 24 · Inclinação 8 · teste 30 fora e 38 dentro · DES 6

A montagem invertida passa a responder ao Desarmar, que corre contra a Posse da Lâmina em vez de contra o teste geral do praticante. Posse 38. Leitura de Fresta 87%.

FRESTA: o praticante trata a Guarda erguida como estrutura com junta, e o golpe dele busca o vão entre placas em vez da superfície inteira.
└─ Liga quando a Guarda do alvo, natural ou elevada por obra ou item que a declare, ainda está de pé

GRAMPO: o praticante trata a lâmina como algo a implantar, não como algo já em jogo, e o golpe dele entrega a partir de um estado em que a arma ainda não contava.
└─ Liga quando a lâmina está embainhada, oculta, ou sacada de dentro de um controle físico já formado, e desliga assim que a lâmina já está sacada e reconhecida em combate aberto

NÍVEL 3: COMPETÊNCIA
Base 32 · Inclinação 16 · teste 44 fora e 60 dentro · DES 12

O praticante sustenta a lâmina em mão através de Imobilização de qualquer grau, sem perdê-la à revelia, e a saca de dentro de um controle físico já estabelecido sem gastar ação além da que o controle já exige. Sacar não é entregar: a entrega ao custo do próprio agarrão é o verbo de Saque Reverso, no LV4. Posse 60. Leitura de Fresta 80%.

NÍVEL 4: ESPECIALIZAÇÃO (escolha 1 caminho)
Base 40 · Inclinação 20 · Especialização 38 a 42 conforme o grau · teste 58 fora, 78 dentro e 116 a 120 no caminho · DES 18

NÍVEL 5: MAESTRIA
Base 45 · Inclinação 22 · Especialização 49 a 54 (aprofundada) · teste 71 fora, 93 dentro e 142 a 147 no caminho · DES 26

O caminho se aprofunda. O verbo permanece o mesmo e o peso dele cresce, com a evolução de LV5 declarada em cada efeito.

NÍVEL 6: TRANSCENDÊNCIA (escolha 1)
Base 50 · Inclinação 25 · Especialização 60 a 65 (transcendida) · teste 84 fora, 109 dentro e 169 a 174 no caminho · DES 34
Requisito: todos os caminhos possuídos no estado aprofundado

Teste pleno na largura de ápice, um caminho adicional na mesma inclinação, ambos aprofundados e o de origem transcendido: 177 em Definida, 182 em Estreita.

═══════════════════════════════════════════════════════════════════
INCLINAÇÃO FRESTA
═══════════════════════════════════════════════════════════════════

BUSCA DE JUNTA (grau 3, complexidade 4) — 38
O golpe mira a junção estrutural em vez da superfície inteira, e a Guarda do alvo responde reduzida pela Leitura de Fresta em vez de responder cheia. `[real]` O ápice histórico do verbo é a perfuração de couraça no alcance de um clinch, o propósito original do objeto.
└─ Fresta [ativado, ação completa, custo nenhum, teste do golpe contra a Esquiva do alvo pela sequência comum do Núcleo de Combate]: no passo de Guarda, o Impacto se compara à Guarda multiplicada pela fração que a Leitura de Fresta resolve para o nível e o estado do caminho, e o excedente sobre essa Guarda reduzida passa como em qualquer golpe. LV5: a leitura se aplica também contra elevação de Guarda declarada por obra ou item, sem exceção declarada em contrário
└─ Leitura de Fresta [passivo]: todo golpe de Fresta bem-sucedido soma um degrau de Leitura de Fresta contra o mesmo alvo, cumulativo até três na mesma cena, e cada degrau some 0,05 da fração que o próximo golpe de qualquer caminho desta inclinação lê contra ele. LV5: o degrau permanece mesmo se o praticante trocar de caminho dentro da inclinação no golpe seguinte

ESPINHA REFORÇADA (grau 4, complexidade 4) — 42
`[real]` A variante yoroi-dōshi troca velocidade por penetração, com espinha e base reforçadas para suportar o estresse de perfurar sem entortar. O golpe aqui é o mesmo desenho aplicado em mesa: mais lento, mais grosso, e construído para não ceder contra o que resiste mais.
└─ Estocada Carregada [ativado, ação completa mais uma Ação de Movimento adicional de preparação, custo nenhum, teste do golpe contra a Esquiva do alvo]: o golpe eleva o coeficiente de impacto da própria classe de precisão, 0,8, ao da classe pesada, 1,3, apenas para este ataque, e o Esforço pago acompanha a mesma elevação. LV5: o tempo de preparação cai para a própria Ação de Movimento da rodada, sem a adicional
└─ Sem Dobra [passivo]: a Estocada Carregada não perde eficácia contra construto rígido de origem sobrenatural ou material de dureza excepcional, e a Leitura de Fresta se aplica a ela por inteiro mesmo quando a Guarda do alvo estiver elevada por obra ou item que declare resistência fora da régua comum. LV5: a mesma isenção se estende a Busca de Junta quando os dois caminhos golpeiam o mesmo alvo na mesma cena

═══════════════════════════════════════════════════════════════════
INCLINAÇÃO GRAMPO
═══════════════════════════════════════════════════════════════════

SAQUE REVERSO (grau 4, complexidade 4) — 42
`[real]` A montagem com o cabo invertido na bainha existe para ser sacada de dentro de um agarrão sem escorregar e sem ser roubada, um objeto pensado para entrar em jogo depois que a luta já virou controle físico. O verbo aqui é essa implantação, e não o corte que vem depois dela.
└─ Saque Reverso [ativado, custo nenhum além do que a manobra já pagou, teste do golpe contra a Esquiva do alvo]: exige que o praticante ou o alvo estejam em Imobilização de qualquer grau no instante da declaração. O golpe resolve pela sequência comum do Núcleo de Combate sem gastar a Ação Completa própria, consumindo apenas a Ação que a manobra de Agarrar já gastou naquela rodada. LV5: o golpe também resolve a partir de Imobilização que o próprio praticante sofre, e não apenas a que ele impõe
└─ Fixação [passivo]: quando o golpe conecta contra alvo já em Imobilização, a duração da condição se estende em um turno adicional. LV5: a extensão passa a dois turnos adicionais

OCULTAÇÃO (grau 3, complexidade 3) — 38
`[real]` A montagem aikuchi, sem guarda de mão, favorece o porte discreto por desenho, e é a montagem histórica de agentes que precisavam carregar lâmina sem anunciá-la.
└─ Lâmina Não Lida [passivo, declarado enquanto a arma permanece guardada]: enquanto não usada ofensivamente na cena, a lâmina não é reconhecida como arma por quem a vê, e o primeiro golpe desferido com ela multiplica o Limiar de Esquiva do alvo por 0,85 no estado Aberto, 0,80 no Aprofundado, entrando na mesma família de multiplicadores de Limiar de Esquiva do Núcleo de Combate que se acumulam entre si. A vantagem reseta no início da cena seguinte, no mesmo padrão de reconhecimento tardio que o Objeto Inocente já usa. LV5: o multiplicador cai para 0,75, e a Ocultação da lâmina sobrevive ao primeiro golpe sem resultar em Quebra de Guarda no alvo
└─ Porte Discreto [passivo]: revista superficial não identifica o tantō como arma, resolvendo por oposição ao Grau de Ocultação contra o teste de quem revista. LV5: a mesma oposição vale contra leitura sensorial ou de metal que não seja dedicada especificamente a armas brancas

`[distinção contra Adagas e Facas de Combate]` doutrina geral de lâmina curta, ângulo de entrada e transição de empunhadura ali. Perfuração de estrutura rígida contra Guarda elevada e entrega a partir de controle físico já formado aqui.

NOTA: o grau mede amplitude e determina o valor da especialização. A complexidade mede profundidade e governa os verbos, sem entrar em teste.

═══════════════════════════════════════════════════════════════════

NÍVEL 6: TRANSCENDÊNCIAS

KANAYAMAHIKO (elevação de escopo · Busca de Junta)
Revoga: a Guarda desfeita se remonta.
└─ [passivo] A fresta que Busca de Junta abre num alvo não fecha sozinha. A redução de Guarda daquele degrau de Leitura de Fresta permanece pelo resto da cena sem exigir golpe novo que a sustente, e vale para qualquer atacante que golpeie o mesmo alvo, não apenas para o praticante que a abriu
└─ Fresta LV6: a leitura reduzida se aplica também no primeiro passo de Guarda de cada rodada seguinte, sem precisar de novo teste de golpe para reconfirmá-la
└─ Leitura de Fresta LV6: o teto de três degraus acumulados na cena deixa de existir. O piso absoluto de 0,25 permanece de pé, porque a Guarda nunca chega a zero por esta régua sozinha

TAKEMINAKATA (remoção de condição · Saque Reverso)
Revoga: a entrega de dentro do controle físico exige que o controle exista.
└─ [passivo] Saque Reverso deixa de exigir Imobilização prévia. Qualquer contato breve com o alvo no mesmo turno, engajado por ao menos uma rodada, autoriza o golpe sem gastar a Ação Completa própria
└─ Saque Reverso LV6: a exigência de Imobilização cai por completo, e o golpe resolve a partir do contato declarado no passo de alcance da sequência comum
└─ Fixação LV6: contra alvo já em Imobilização, a duração se estende em dois turnos adicionais. Contra alvo sem Imobilização, o golpe a instala em Grau Leve

Espinha Reforçada e Ocultação seguem sem transcendência dedicada. Os efeitos dos dois leem teste e crescem sozinhos pela coluna transcendida da Especialização.

═══════════════════════════════════════════════════════════════════

ARQUÉTIPOS DE ÁPICE

O agente encoberto constrói Ocultação e Saque Reverso sobre Takeminakata. A lâmina dele não existe até o instante em que existe, carregada sob a roupa através de qualquer revista, sacada de dentro do próprio controle sobre um alvo que nunca soube que havia uma arma na sala. A mesa dele é de infiltração, de execução silenciosa e de operação deniável, na figura de quem uma organização nega ter enviado. Cada cenário nomeia essa organização à própria maneira.

O caçador de couraça constrói Busca de Junta e Espinha Reforçada sobre Kanayamahiko. A fresta que ele abre numa armadura de placas ou num revestimento de energia não fecha depois que ele passa, e quem vem atrás dele explora a mesma abertura. A mesa dele é de combate contra alvo blindado e de trabalho em equipe contra uma única defesa dura, na figura do especialista chamado quando o problema veste couraça.

═══════════════════════════════════════════════════════════════════

LARGURA

Inclinação adicional a partir do LV2, caminho adicional a partir do LV4, ambos nascendo Abertos e aprofundando por compra separada. Todo caminho exige a inclinação dele Aprofundada. Não existe teto. Aquisição adicional custa metade da original. Cada caminho adicional soma 4 à Base no LV4 e no LV5 e 5 no LV6, e 2 ou 3 à inclinação a que pertence, conforme o estado dela.

O teste de 177 declarado no LV6 é o do praticante com dois caminhos na inclinação FRESTA, ambos aprofundados, no caminho de grau 3 transcendido: Base 50 mais 5 de largura, Inclinação 25 mais 3, DES 34 e especialização 60.

═══════════════════════════════════════════════════════════════════

PENDÊNCIAS E FILA DE ERRATA

A colisão com Adagas e Facas de Combate fica registrada sem dono. Aquela perícia, migração v5 sem manual próprio no corpus, tem três caminhos que ocupam parte do território de Saque Reverso e de Busca de Junta: Grappling da Lâmina, sobre golpe de lâmina em clinch sem custo de ação adicional, e Pakal Fundo e Estocada Penetrante, sobre ignorar defesa erguida a partir de controle. A resolução exige decisão sobre qual documento absorve qual verbo quando Adagas e Facas de Combate migrar para manual próprio.

Nenhuma régua de elevação de Guarda por armadura existe no corpus. `Guarda = DEF × 5` é o único termo publicado pelo Núcleo de Combate, e nenhum documento declara como um item ou uma obra eleva esse valor. Sem Dobra e a Leitura de Fresta contra elevação declarada dependem de um item ou de uma obra publicarem essa elevação em algum lugar, e até lá o efeito não tem alvo real contra o qual disparar. Dono: Núcleo de Combate, camada fechada para modificação.

Seis perícias de arma, incluindo Adagas e Facas de Combate, vivem apenas em `common/skills.json`, schema v5, sem manual correspondente. O Tantō é a primeira perícia de arma do corpus a nascer com manual, e a primeira perícia individual publicada na camada de núcleo: até aqui `core/` só hospedava documento de metodologia e de sistema, nunca uma perícia jogável.

Nenhum registro global de regentes, vizinhança ou conformidade existe para perícias de núcleo. O Índice de Perícias do Sistema é documento do cenário Naruto, `naruto.skill.overview`, e sua Regra de Propriedade limita o que entra ali a fatos sobre a relação entre perícias daquele cenário. Tantō não entra nele por não pertencer a cenário nenhum, mas o conflito de regente que uma perícia de núcleo pode abrir contra as perícias de qualquer cenário que a compre continua sem lugar que o rastreie. Dono: um Índice de Perícias de Núcleo, ainda inexistente.

Imobilização em Grau Grave ou acima torna o alvo indefeso pela Seção 10 do Núcleo de Combate, e alvo indefeso já não lê Guarda alguma. Busca de Junta e Estocada Carregada perdem função contra esse alvo pelo mesmo motivo que perdem função contra qualquer alvo sem Guarda de pé. A leitura é intencional e não pendência.

═══════════════════════════════════════════════════════════════════

Estrutura e valores de camada leem o Núcleo de Perícias v2. Procedimento segue o Manual de Criação de Perícias v7. Custos leem o Manual de Economia de XP. A classe de arma, o motor de dano, a manobra de Agarrar e a condição de Imobilização leem o Núcleo de Combate e o Sistema de Efeitos de Status. As técnicas nomeadas, quando existirem para este domínio, vivem em compêndio próprio.
