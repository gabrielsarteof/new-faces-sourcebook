---
id: naruto.skill.taekwondo
title: "Taekwondo"
version: 1
layer: scenario
scenario: naruto
type: skill
status: final
---

PERÍCIA DE TAEKWONDO
跆拳道 · A arte do punho e do pé

Taekwondo é a escola que fez do chute uma arma que o soco nunca poderia ser. Onde o Muay Thai estende a perna, acerta e recolhe, Taekwondo gira o corpo inteiro antes do impacto, deixa o chão para alcançar o que ninguém alcança parado, desce sobre uma guarda erguida em vez de contorná-la, e troca tensão constante por um ritmo de relaxar e travar só no instante do choque. As quatro ideias têm um traço comum: cada uma paga um preço real, de tempo, de posição, de fôlego ou de iniciativa, pelo dano e pelo alcance que entrega. Nenhuma delas é o chute que estende e volta.

Nenhuma das ideias abaixo tem verbete no cânone de Naruto. A escola inteira é `[proposta]`, tradução de princípio de arte marcial real para o vocabulário deste sistema, e a marca não se repete efeito a efeito porque cobriria o documento inteiro sem acrescentar informação nova.

O território termina onde o ofício alheio começa. O Muay Thai é o vizinho mais próximo e o mais fácil de confundir: o caminho Chutador daquela escola é chute-padrão de perna que estende e volta, alternando alto e baixo sem penalidade, sem janela de vulnerabilidade e sem sair do chão. Nenhum caminho desta perícia repete esse padrão; os seis exigem giro completo, saída do chão, gestão de Esforço ou resposta reativa, e a distinção mora inteira no verbo e não no atributo regente, que os dois domínios compartilham de propósito. O Kenpo é o segundo vizinho, e a fronteira ali é de registro e não de dano: Kenpo decide uma troca pela ausência de aviso, pelo bloqueio que já é o meio golpe seguinte e pela corrente que nunca solta o fio; nenhum caminho desta perícia lê ausência de aviso como abertura de turno, nenhum devolve dano por bloquear, e a sequência que Onda governa não soma dano por golpe conectado como a Corrente Sem Fim do Kenpo soma — ela reduz o custo de sustentar a sequência, e as duas nunca leem a mesma grandeza. Combate desarmado genérico, sem estilo nomeado, pertence à perícia de corpo que a Fila de Nascimento do Índice de Perícias ainda reserva. Arremesso, submissão e luta de solo pertencem a documento próprio, pela autorização que o Núcleo de Combate declara na seção 9. A amplificação corporal por saturação de chakra e a fisiologia do circuito pertencem ao Sistema dos Oito Portões e à perícia de corpo que ele reserva como consumidora futura. Rank de técnica shinobi e jutsu nomeado não se aplicam: o domínio é físico e não converte chakra, e nenhum compêndio de Taekwondo existe porque o cânone de Naruto não nomeia obra alguma desta escola.

O domínio ainda não tem superclasse. A perícia de corpo que absorveria o baseline comum de todo estilo marcial segue na Fila de Nascimento do Índice de Perícias, bloqueada até a camada física geral nascer. Taekwondo hoje cobre o próprio baseline inteiro sem portão de acesso, pela mesma autorização que já ergueu o Kenpo, e a errata dessa lacuna está registrada ao final deste documento, para o dia em que a superclasse existir e Taekwondo passar a subclasse dela.

═══════════════════════════════════════════════════════════════════

IDENTIDADE

Regente VEL, o mesmo do Muay Thai, por decisão deliberada. A regra de manter regentes distintos entre domínios vizinhos existe para impedir que um único atributo alto destrave famílias inteiras de competência, mas os dois domínios não se compram como par: um personagem escolhe entre chutar reto e chutar girando, não as duas coisas ao mesmo tempo, e a distinção entre eles já mora inteira no verbo de cada caminho, provada caminho a caminho contra o Chutador na abertura deste documento. Onde o Kenpo evitou a sobreposição de atributo com o Muay Thai porque as duas escolas realmente competem pelo mesmo golpe rápido e próximo, Taekwondo e Muay Thai competem pelo mesmo membro e pelo mesmo atributo, e ainda assim nunca respondem à mesma pergunta. Categoria Físico, multiplicador 1,0. Camada subclasse provisória, sem superclasse publicada. Sem portão duplo: o domínio não separa magnitude de precisão.

LV1 750 · LV2 1.125 · LV3 2.250 · LV4 4.125 · LV5 6.750 · LV6 10.125, acumulando 25.125. Caminho extra custa 2.062 no LV4 e 3.375 no LV5.

PORTÃO

O portão soma a Base Total ao atributo regente. Nenhum compêndio de Taekwondo existe, porque o cânone de Naruto não nomeia obra alguma desta escola, e o portão fica sem consumidor até que a perícia de corpo nasça ou uma obra nomeada de campanha o leia.

LV1 · Base 12 · VEL 2 · portão 14
LV2 · Base 24 · VEL 6 · portão 30
LV3 · Base 32 · VEL 12 · portão 44
LV4 · Base 40 · VEL 18 · portão 58
LV5 · Base 45 · VEL 26 · portão 71
LV6 · Base 50 · VEL 34 · portão 84

COMO O TESTE SE LÊ

```
teste = Base Total + VEL + [Inclinação Total, se a situação pertence a ela] + [Especialização, se o verbo resolve o problema]
```

Uma inclinação e uma especialização por teste, no máximo. O teste desta perícia decide quando um verbo de Taekwondo resolve a cena. A Potência, a Guarda, a Absorção e o Golpe do golpe físico em si continuam lendo FOR, VEL e DEF pela fórmula comum do Núcleo de Combate, porque essas grandezas pertencem ao corpo e não à escola.

CLASSE DE GOLPE DESARMADO

O Núcleo de Combate publica três classes de arma e nenhuma classe para o golpe sem arma. Esta perícia herda a que `worlds/naruto/skills/kenpo.md` já declarou por interpolação entre a arma de precisão e a lâmina curva, `[proposta]`, sem reabrir a errata: o corpo desarmado é uma grandeza só, e as duas escolas físicas leem o mesmo valor.

| Classe | Esforço | Coeficiente de impacto |
|---|---|---|
| Golpe desarmado | 0,9 | 0,9 |

═══════════════════════════════════════════════════════════════════

RÉGUAS TRANSVERSAIS

ELEVAÇÃO DE REAÇÃO

O quanto Chegada Compacta reduz a vantagem de esquiva que o giro concede ao alvo durante Giro Completo. Lê a especialização de Giro Completo e mais nenhuma outra.

```
Elevação de Reação = 6 + (182 − teste do caminho) ÷ 5, piso 6%, teto 25%
```

O neutro 182 é o praticante de LV6 com Giro Completo transcendido e Encadeamento aprofundado, os dois caminhos de ROTAÇÃO, a largura de ápice da inclinação. É o mesmo patamar que o teste pleno de grau 4 alcança na régua de Largura ao final deste documento. Resolvido: 25% enquanto o efeito não existe, no Aberto; 13,00% no LV5 largura mínima, 11,60% com o segundo caminho da inclinação; 7,60% no LV6 largura mínima; piso de 6,00% exatamente na largura de ápice.

FRAÇÃO DE GUARDA

Quanto Queda de Machado reduz a Guarda do alvo, só para aquele golpe. Lê a especialização de Queda de Machado e mais nenhuma outra. É a primeira redução parcial de Guarda que o corpus publica: as reduções parciais anteriores, do Fio Concentrado do Raiton, atacam a Absorção, e este documento não confunde as duas camadas.

```
Fração de Guarda = teste do caminho ÷ 400, piso 20%, teto 45%
```

O divisor reaproveita o do Fio Concentrado por convenção de corpus para redução parcial de camada de defesa, sem herdar o alvo dele. Resolvido: 29,00% no LV4 largura mínima, 35,50% no LV5, 42,25% no LV6 largura mínima, 44,25% na largura de ápice da inclinação.

ECONOMIA DE ESFORÇO

A fração de Esforço que Onda economiza em cada golpe da sequência, enquanto o praticante não for interrompido. Lê a especialização de Onda e mais nenhuma outra.

```
Economia de Esforço = teste do caminho ÷ 590, piso 10%, teto 30%
```

O neutro 590 é 177 dividido por 0,30, onde 177 é o teste pleno de grau 3 na largura de ápice de CADÊNCIA: o teto da régua se alcança exatamente ali, e não antes. Resolvido: 19,66% no LV4 largura mínima, 24,07% no LV5, 28,64% no LV6 largura mínima, teto de 30,00% na largura de ápice.

ALCANCE DE SALTO

Os metros que Salto soma ao alcance do chute além da Banda Engajado. Lê a especialização de Salto e mais nenhuma outra.

```
Alcance de Salto = teste do caminho ÷ 15
```

Sem piso e sem teto declarados: o valor nunca se aproxima da Banda Curta (até 30 metros) em construção nenhuma do sistema, e o próprio deslocamento comum de VEL × 10 já supera o Salto por mais de uma ordem de grandeza em todo nível, porque os metros deste caminho correm dentro da Ação Completa do golpe e nunca competem com a Ação de Movimento. Resolvido: 8,0 m no LV4 largura mínima, 9,8 m no LV5, 11,6 m no LV6 largura mínima, 12,1 m na largura de ápice.

Encadeamento e Chute Traseiro resolvem por elevação categórica e por uso da Reação, sem régua contínua própria, formas que a seção 2 do Manual de Criação de Perícias autoriza igualmente à leitura de teste.

═══════════════════════════════════════════════════════════════════

NÍVEL 1: FUNDAMENTOS
Base 12 · teste 14 com VEL 2

O praticante golpeia com chutes retos e circulares comuns, o repertório que qualquer academia ensina antes de qualquer especialização, sem giro completo, sem saída do chão e sem descida sobre a guarda. O golpe desarmado converte pela classe declarada acima, Esforço 0,9 e coeficiente de impacto 0,9, no Perfil de Evasão Padrão, na Banda Engajado. A perna do praticante alcança o que o punho comum não alcançaria na mesma distância: quando o alvo está abaixo da Banda mínima que uma técnica exige, o chute do praticante não sofre o ajuste de coeficiente de entrega que o passo 2 da sequência do Núcleo de Combate aplicaria a um golpe de contato mais curto. Ele reconhece, ao ver um golpe alheio se armar, se o que vem é um giro, um salto ou uma descida, leitura tática sem número que sustenta os caminhos das três inclinações quando forem adquiridos.

NÍVEL 2: INCLINAÇÃO (escolha 1)
Base 24 · Inclinação 8 · teste 30 fora e 38 dentro, com VEL 6

A Guarda do praticante recupera 10 pontos percentuais adicionais de recarga a cada golpe desarmado que ele conecta na própria rodada, além da recarga padrão de fim de rodada que a tabela de Exaustão do Núcleo de Combate já publica. É a postura ereta e centrada que a escola exige mesmo no meio de uma troca.

ROTAÇÃO: O praticante trata o giro completo do próprio corpo como a fonte do golpe mais pesado do repertório.
└─ Entra no teste quando o alvo não está na Banda Engajado no início da ação, e o praticante precisa fechar distância girando até alcançá-lo

VOO: O praticante trata o ar como uma segunda banda de combate, disponível quando o chão não entrega o ângulo certo.
└─ Entra no teste quando há espaço vertical livre acima do praticante e do alvo o bastante para sustentar um salto de combate

CADÊNCIA: O praticante trata o ritmo entre golpes, e não a força de um único impacto, como o que decide a troca.
└─ Entra no teste quando o confronto já vai em ao menos dois golpes trocados nesta rodada, ou quando o oponente está em movimento de avanço contra o praticante

NÍVEL 3: COMPETÊNCIA
Base 32 · Inclinação 16 · teste 44 fora e 60 dentro, com VEL 12

O praticante encadeia dois chutes comuns na mesma Cadência sem abrir a Guarda entre eles: o segundo golpe da Cadência, quando os dois são chutes desarmados, não sofre a elevação de Reação que um giro incompleto ou uma queda de equilíbrio concederia ao alvo em qualquer outra sequência de golpes díspares. É o baseline que Encadeamento formaliza mais tarde para o giro propriamente dito, e não o antecipa.

NÍVEL 4: ESPECIALIZAÇÃO (escolha 1 caminho)
Base 40 · Inclinação 20 · Especialização 38 a 42 conforme o grau · teste 58 fora, 78 dentro e 116 a 120 no caminho, com VEL 18

NÍVEL 5: MAESTRIA
Base 45 · Inclinação 22 · Especialização 49 a 54 (aprofundada) · teste 71 fora, 93 dentro e 142 a 147 no caminho, com VEL 26

O caminho se aprofunda. O verbo permanece, e o peso dele cresce pelas evoluções declaradas em cada efeito.

NÍVEL 6: TRANSCENDÊNCIA (escolha 1)
Base 50 · Inclinação 25 · Especialização 60 a 65 (transcendida) · VEL 34
Requisito: todos os caminhos possuídos no estado aprofundado

Testes plenos no LV6 com largura mínima: grau 3 alcança 169, grau 4 alcança 174. Com os dois caminhos da mesma inclinação aprofundados e a transcendendo, grau 3 alcança 177 e grau 4 alcança 182.

═══════════════════════════════════════════════════════════════════
INCLINAÇÃO ROTAÇÃO
═══════════════════════════════════════════════════════════════════

GIRO COMPLETO (grau 4, complexidade 4) — 42
O golpe que fecha distância girando o corpo inteiro antes de acertar, deixando o alvo com mais tempo para ler o que vem do que qualquer chute comum concederia.
└─ Giro [ativado, ação completa, Esforço do Golpe pela classe de golpe desarmado]: o praticante fecha a distância girando o corpo inteiro antes do impacto. O golpe lê Telegrafado na escada do Perfil de Evasão do Manual de Criação de Jutsus: o Limiar de Esquiva do alvo multiplica por 1,25, e o alvo que gasta a Reação esquivando fica fora de posição até o início do próprio turno seguinte, o comportamento próprio que a escada já publica para aquele degrau. A contrapartida de coeficiente de entrega que a escada cobra do mesmo degrau não tem análogo nesta perícia sem chakra, e não se paga; em seu lugar, conectando, o coeficiente de impacto do golpe lê um degrau acima da classe de golpe desarmado, a classe lâmina curva, ignorando parte da Guarda do alvo além do dano comum. LV5: leia Chegada Compacta
└─ Chegada Compacta [passivo, sem custo, ativo a partir do estado Aprofundado]: reduz o multiplicador de Limiar de Esquiva que o Telegrafado concede ao alvo, pela régua de Elevação de Reação, sem nunca eliminá-lo. O efeito desaparece na prática contra alvo cujo Limiar de Esquiva já esteja perto do teto de 95: a régua governa a vantagem que o giro concede, não o teto que a governa. LV5: reduz pela régua em estado Aprofundado. LV6: reduz pela régua em estado Transcendido, com piso de 6,00% na largura de ápice de ROTAÇÃO
[distinção contra o Chutador do Muay Thai: ali o chute alto e baixo alterna sem penalidade e sem janela nenhuma. Aqui o giro concede vantagem real de esquiva ao alvo em troca do dano e da penetração de Guarda, e a vantagem só se reduz, nunca desaparece antes da transcendência]

ENCADEAMENTO (grau 3, complexidade 4) — 38
Emendar o segundo giro no calor do primeiro, sem pagar a Ação Completa inteira de novo.
└─ Emenda [ativado, um degrau de Cadência em vez de Ação Completa própria, condicionado a Giro Completo ter conectado nesta rodada]: o segundo Giro Completo declarado na mesma rodada lê Padrão no Perfil de Evasão em vez de Telegrafado, porque o alvo já está lendo o primeiro giro quando o segundo chega, e custa um degrau de Cadência em vez de uma nova Ação Completa. LV5 (Multi-rotacional): os dois giros resolvem numa única declaração, pelo custo somado dos dois degraus de Cadência que cobririam, sem exigir que o primeiro já tenha conectado antes de declarar o segundo
[distinção contra a Corrente Sem Fim do Kenpo: lá cada golpe conectado soma dano ao seguinte, numa escada que qualquer golpe desarmado alimenta. Aqui só o giro alimenta o giro seguinte, e o que muda é o Perfil de Evasão e o custo de ação, nunca a Energia do golpe]

═══════════════════════════════════════════════════════════════════
INCLINAÇÃO VOO
═══════════════════════════════════════════════════════════════════

SALTO (grau 4, complexidade 4) — 42
Deixar o chão para alcançar o que o chão não entrega, ao custo de não dispor dele enquanto o corpo estiver no ar.
└─ Chute Saltado [ativado, ação completa, Esforço do Golpe mais o Esforço de deslocamento pela régua de Alcance de Salto]: enquanto o praticante estiver no ar, ele não dispõe de Disputa de Distância nem da Ação de Movimento normal naquele turno. O alcance do golpe ultrapassa a Banda Engajado pelos metros que a régua de Alcance de Salto ler, dentro da própria Ação Completa do golpe, sem gasto de deslocamento adicional além do declarado pela régua. LV5: leia Impulso Corrido
└─ Impulso Corrido [passivo, exige metros de corrida livre declarados antes do salto, Esforço pela fração do percurso comum que os metros representarem]: com espaço para correr antes do salto, o coeficiente de impacto do golpe lê um degrau acima da classe de golpe desarmado, a classe lâmina curva, ao custo de exigir aquele espaço livre e o Esforço de percorrê-lo. LV5: o mesmo espaço declarado também soma aos metros que a régua de Alcance de Salto ler, na mesma proporção da fração do percurso paga
[distinção contra Muay Thai: nenhum caminho daquela escola tira o praticante do chão. Aqui a saída do chão é o preço e o alcance é o troco, e o praticante que erra o salto termina a rodada sem ter reposicionado nada]

QUEDA DE MACHADO (grau 3, complexidade 3) — 38
Atacar por cima de uma guarda montada, em vez de contorná-la.
└─ Golpe Descendente [ativado, ação padrão, Esforço do Golpe pela classe de golpe desarmado]: o chute desce sobre a Guarda do alvo, reduzindo-a pela fração que a régua de Fração de Guarda ler, só para o cálculo deste golpe. A Guarda reduzida entra na comparação normal do passo 8 da sequência de ataque do Núcleo de Combate: contra Impacto que já supere a Guarda cheia, o golpe já quebrava por conta própria e a fração não muda o desfecho; contra Impacto que a Guarda cheia deteria, a fração pode ser exatamente o que falta para abrir a Quebra. LV5: leia Ruptura
└─ Ruptura [passivo, ativo a partir do estado Aprofundado]: contra alvo cuja Guarda já esteja abaixo de metade do valor cheio, por qualquer redução sofrida nesta cena, Queda de Machado força Quebra de Guarda de forma incondicional, ignorando a comparação de Impacto contra Guarda restante. LV5: o mesmo estado da Guarda também isenta o golpe do teste do passo 6 para fins de crítico automático contra Guarda quebrada, pela regra de alvo indefeso não se aplicar aqui, mas pela mesma leitura de janela aberta que a Seção 6 do Núcleo de Combate já reconhece a golpe subsequente contra Guarda em Quebra
[distinção contra o Fio Concentrado do Raiton: lá a fração ataca a Absorção, a matéria que nunca degrada. Aqui a fração ataca a Guarda, a estrutura que recarrega e que pode já estar ferida por outro golpe, e é essa diferença de camada que sustenta os dois efeitos como distintos]

═══════════════════════════════════════════════════════════════════
INCLINAÇÃO CADÊNCIA
═══════════════════════════════════════════════════════════════════

ONDA (grau 3, complexidade 3) — 38
Relaxar entre golpes e tensionar só no instante do impacto, em vez de manter o corpo rígido a rodada inteira.
└─ Respiração [passivo]: cada golpe desarmado do praticante dentro da mesma sequência ininterrupta de Cadência paga o Esforço reduzido pela fração que a régua de Economia de Esforço ler, enquanto o praticante não for interrompido por Quebra de Guarda, por falha na própria Esquiva ou por perder a Reação da rodada para outra resposta. A economia lê o teste do caminho e cresce sozinha com o nível e a largura, sem precisar de um degrau adicional declarado para render mais fôlego a cada rodada de treino investida. LV5: leia o valor da régua em estado Aprofundado, que já é o suficiente para sustentar um segundo golpe de Cadência dentro do Limiar de recuperação em praticantes de VEL alta, onde antes só um golpe cabia
└─ Descida-Subida [ativado, ação de movimento]: o instante de preparação visível, abaixar e erguer o centro do corpo antes do golpe, soma um degrau à Potência do próximo golpe do praticante, os 10 pontos percentuais que a tabela de Exaustão Física do Núcleo de Combate já publica para o grau Moderado, na direção inversa. O Esforço do Golpe sobe na mesma proporção, pela mesma regra que a Exaustão aplica ao golpe enfraquecido, aqui invertida para o golpe fortalecido. LV5: o instante de preparação cai para ação menor, sem deixar de exigir a declaração visível que qualquer observador nota
[distinção contra a Corrente Sem Fim do Kenpo: lá a sequência soma dano a cada acerto e zera no primeiro erro. Aqui a sequência reduz o custo em Esforço de cada golpe, e as duas nunca leem a mesma grandeza nem a mesma condição de quebra]

CHUTE TRASEIRO (grau 4, complexidade 4) — 42
Interceptar quem avança, no mesmo instante em que ele decide fechar espaço.
└─ Interceptação [reação, análoga à Manobra do Núcleo de Combate, Esforço do Golpe pela classe de golpe desarmado, dispara apenas contra a Disputa de Distância do oponente]: o praticante nunca declara este golpe como abertura de turno. Só pode ser declarado como resposta à Disputa de Distância de um oponente que tenta fechar espaço, e resolve como um golpe comum contra o alvo em movimento, gastando a Reação da rodada como quarta entrada da lista fechada que a Seção 2 do Núcleo de Combate concede, somando-se a ela sem multiplicá-la. LV5: o gatilho se estende à Manobra Empurrar ou Derrubar declarada contra o próprio praticante, e não apenas à Disputa de Distância
└─ Contragolpe Duplo [passivo]: se Interceptação conecta, o oponente perde o restante da própria Ação de Movimento daquele turno. LV5: conectando com margem de 10 ou mais no teste que resolveu o golpe, o oponente perde também o restante da própria Ação Completa, se ainda não a tiver gasto
[distinção contra Contra-Linha e Contra-Círculo, do Kenpo: lá a Reação responde à trajetória de um golpe já lançado, reto ou circular, e o verbo é parar ou redirecionar o golpe. Aqui a Reação responde à Disputa de Distância de quem ainda está fechando espaço, antes de golpe nenhum existir, e o verbo é chegar primeiro]

═══════════════════════════════════════════════════════════════════

NÍVEL 6: TRANSCENDÊNCIA

AME-NO-UZUME (天宇受賣命), remoção de condição · Giro Completo
Revoga: durante o Giro Completo, o alvo lê Telegrafado no Perfil de Evasão.
└─ [passivo, sem custo, requer Giro Completo Aprofundado] O giro passa a ler Padrão em vez de Telegrafado: o multiplicador de Limiar de Esquiva que ele concedia ao alvo desaparece por completo, e o alvo deixa de ficar fora de posição por ter esquivado dele, porque não há mais aviso algum para reagir. O golpe conserva o coeficiente de impacto elevado que Giro Completo já concedia, agora sem nenhum custo em esquiva alheia para pagá-lo. Resolvido contra o par declarado na Tarefa de Âncoras deste documento: o Limiar de Esquiva do alvo de baixa evasão volta ao valor base de 27,50, em vez dos 29,15 que o mesmo giro concederia sem a transcendência

Encadeamento, Salto, Queda de Machado, Onda e Chute Traseiro seguem sem transcendência dedicada. Os efeitos que leem teste crescem sozinhos pela coluna transcendida da especialização; os que resolvem por elevação categórica ou por Reação permanecem no patamar que o LV5 já declarou, porque nenhum deles tem âncora de revogação no cenário, e forçar uma para preencher a tabela é o vício que a seção 13 do Manual de Criação de Perícias existe para impedir.

═══════════════════════════════════════════════════════════════════

ÂNCORAS DE VALIDAÇÃO

GIRO COMPLETO, contra alvo de baixa evasão. Par: o praticante de Taekwondo enfrenta o Tanque do exemplo canônico do Núcleo de Combate, Limiar de Esquiva 27,50 contra o par ofensivo publicado. Sem o giro, o chute comum não toca o Perfil de Evasão. Com Giro Completo declarado: LV4 Aberto, multiplicador 1,25, Limiar final 34,38. LV5 Aprofundado largura mínima, elevação 13,00%, Limiar final 31,08. LV6 Transcendido largura mínima, elevação 7,60%, Limiar final 29,59. LV6 na largura de ápice de ROTAÇÃO, elevação no piso de 6,00%, Limiar final 29,15. O mesmo giro contra o Veloz do mesmo exemplo, Limiar de Esquiva 93,75, nunca ultrapassa o teto de 95 em nenhum estado: a régua de Chegada Compacta é invisível ali, porque o teto absorve o efeito inteiro antes dele render qualquer diferença. É consequência declarada e não falha da régua: o giro pesa contra quem já não esquiva bem, e quase nada contra quem já esquiva quase tudo.

QUEDA DE MACHADO, contra guarda alta. Par declarado: um defensor de postura, FOR 15, VEL 15, DES 15, DEF 64, RES 15, Guarda 320 e Absorção 45, contra um atacante de Taekwondo com FOR 15 e VEL 25, Potência 1.000, Energia 200. Sem Queda de Machado, o Impacto de 180 (Energia × 0,9, a classe de golpe desarmado) fica abaixo da Guarda cheia de 320: a mitigação do passo 8 reduz o dano passante para 64,80, e a Absorção de 45 fecharia o golpe em 19,80, elevado ao piso de 10% da Energia original, 20,00. Com Queda de Machado: LV4 reduz a Guarda para 227,20, ainda sem Quebra, 79,57 passando pela mitigação e 34,57 depois da Absorção. LV5 reduz para 206,40, ainda sem Quebra, 83,85 passando e 38,85 depois da Absorção. LV6 largura mínima reduz para 184,80, ainda sem Quebra por 4,80 pontos, 88,82 passando e 43,82 depois da Absorção. LV6 na largura de ápice reduz para 178,40, abaixo do Impacto de 180: a Guarda quebra, o golpe passa inteiro, e o dano salta para 135,00 depois da Absorção. A régua diferencia em toda construção e resolve numa Quebra categórica exatamente no topo da curva, a mesma leitura que Ruptura formaliza a partir do Aprofundado.

ONDA, contra o teto de Cadência. Par: o Veloz do exemplo canônico, FOR 26, VEL 45, RES 23, PS 816, Golpe da ficha 23,67, Fôlego 11,5, Limiar 46. O golpe desarmado paga Esforço 23,67 × 0,9 = 21,30. Cadência de três ataques (VEL ÷ 15). Sem Onda: o primeiro golpe custa 21,30, dentro do Limiar; o segundo, ao degrau ×1,5, eleva o acumulado a 53,26, acima do Limiar de 46, e a rodada fecha em um golpe só. Com Onda: no LV4 largura mínima, economia de 19,66%, o acumulado de dois golpes cai a 42,79, dentro do Limiar; no LV5, economia de 24,07%, cai a 40,44; no LV6 largura mínima, a 38,00; na largura de ápice, a 37,28. Em nenhum estado o terceiro golpe cabe: exigiria economia de 56,8%, muito acima do teto de 30%. O Teto de Esforço por turno, 40% de 816 igual a 326,40, nunca morde nesta âncora: o gasto máximo de uma rodada de três golpes mais uma Esquiva soma 114,00, um terço do teto. O Limiar de recuperação, não o Teto de Esforço, é o muro que Onda governa.

SALTO, custo de deslocamento. O mesmo Veloz: metros no LV4 largura mínima, 8,0, custam 1,60 de Esforço pela régua de deslocamento do Núcleo de Combate; somados ao Golpe desarmado de 21,30, o ataque saltado fecha em 22,90, 49,8% do Limiar de 46. O Tanque, VEL 22, não passa do LV4 desta perícia porque o requisito de VEL do LV5 é 26: em LV4 largura mínima, o teste do caminho lê 40 + 20 + 42 + 22 igual a 124, metros 8,27, Esforço do salto 1,65, somado ao Golpe desarmado de 19,50, fechando em 21,15, 23,5% do Limiar de 90.

CHUTE TRASEIRO, orçamento de rodada. O Veloz que abre com três golpes de Cadência e fecha com um Chute Traseiro reativo soma 21,30 + 31,95 + 42,61 + 21,30 igual a 117,16, acima do Limiar de 46, recuperando metade do Fôlego ao fim da rodada. O Tanque, que abre com um golpe comum e responde com um Chute Traseiro, soma 19,50 + 19,50 igual a 39,00, dentro do próprio Limiar de 90, recuperando o Fôlego cheio.

═══════════════════════════════════════════════════════════════════

ARQUÉTIPOS DE ÁPICE

A dançarina que ninguém vê girar constrói Ame-no-Uzume sobre Giro Completo e Multi-rotacional sobre Encadeamento. O giro dela chega sem conceder ao adversário tempo algum para lê-lo, e o segundo giro já está a caminho antes que o primeiro termine de ser processado. É a figura da instrutora que venceu tantas trocas girando que ninguém mais tenta contar quantas rotações ela deu.

O caçador que nunca pousa constrói Salto sobre Impulso Corrido e Queda de Machado sobre Ruptura. Ele fecha distância correndo, sobe antes do alcance normal e desce sobre a guarda de quem esperava um golpe pelo chão. É a figura do duelista que trata o combate térreo como uma armadilha alheia, e nunca entra nela.

O metrônomo que nunca cansa constrói Onda sobre a Respiração aprofundada e Chute Traseiro sobre Contragolpe Duplo. Ele gasta menos fôlego por golpe do que qualquer oponente da mesma faixa, e a cada avanço que intercepta, tira do adversário o próprio ritmo de resposta. É a figura do veterano que vence pela décima rodada, não pela primeira.

Nenhuma das três figuras tem correspondente nomeado no cânone de Naruto, e a ausência é declarada aqui em vez de disfarçada por um nome emprestado.

═══════════════════════════════════════════════════════════════════

LARGURA

Inclinação adicional a partir do LV2, caminho adicional a partir do LV4, ambos nascendo abertos e aprofundando por compra separada. Todo caminho exige a inclinação dele aprofundada. Não existe teto. Aquisição adicional custa metade da original. Cada caminho adicional soma 4 à Base no LV4 e no LV5 e 5 no LV6, e 2 ou 3 à inclinação a que pertence, conforme o estado dela.

O praticante que aprofunda os dois caminhos de uma mesma inclinação, o teto de cada inclinação desta perícia, e a transcende alcança no LV6 teste 177 no caminho de grau 3 e 182 no de grau 4: Base 55, Inclinação 28, VEL 34, mais a especialização transcendida do caminho ativo. É esse patamar que a régua de Elevação de Reação lê como neutro, e o mesmo que fixa o piso de 6,00% que Ame-no-Uzume, uma vez adquirida, revoga por completo.

═══════════════════════════════════════════════════════════════════

PENDÊNCIAS E FILA DE ERRATA

1. O Núcleo de Combate não publica a classe do golpe desarmado. Esta perícia herda a classe que `worlds/naruto/skills/kenpo.md` já declarou por interpolação, Esforço 0,9 e coeficiente de impacto 0,9, `[proposta]`, e não reabre a errata: a pendência é a mesma, já registrada lá, e as duas perícias leem o mesmo valor porque o corpo desarmado é uma grandeza só.
2. O Índice de Perícias não lista Taekwondo no Registro de Regentes nem no Registro de Conformidade. A propagação deste documento entra na mesma passada que publica esta perícia.
3. O Perfil de Evasão vive no Manual de Criação de Jutsus e resolve técnica de chakra. Giro Completo o consome pelo precedente que o Sistema dos Oito Portões abriu e que o Kenpo confirmou, e a régua segue pedindo dono declarado na camada física geral quando ela nascer.
4. A contrapartida de coeficiente de entrega que a escada do Perfil de Evasão cobra do degrau Telegrafado não tem análogo nesta perícia sem chakra. Giro Completo paga a contrapartida pelo coeficiente de impacto em vez do de entrega, um degrau acima na mesma tabela que Kenpo declarou, e a errata pede que o Manual de Criação de Jutsus, seção 6.5, reconheça essa via alternativa para o eixo corporal, no mesmo pedido que Kenpo já abriu para o degrau Veloz.
5. Esta é a primeira redução parcial de Guarda publicada no sistema. As reduções parciais anteriores, do Fio Concentrado do Raiton, atacam a Absorção, e a errata registra a diferença para quem for auditar o corpus por grandeza, sem propor fusão das duas.
6. A contradição entre `core.skills-core` seções 3.4 e 9, que exigem todos os caminhos possuídos aprofundados para transcender, e o Anexo A do `core.xp-economy`, que fala em ao menos um caminho relacionado, segue aberta. Este documento segue a leitura de `core.skills-core`, por precedência de camada e pelo precedente que `barreira.md` e `kenpo.md` já publicaram sob a mesma leitura.
7. Muay Thai e Aikido seguem sem documento de corpus, migrados sob schema anterior, lacuna já registrada em `provenance.json` do lado da aplicação.

═══════════════════════════════════════════════════════════════════

Estrutura e valores de camada leem o Núcleo de Perícias v2.2. Procedimento segue o Manual de Criação de Perícias v7.2. Custos leem o Manual de Economia de XP v2.2. Potência, Guarda, Absorção, Cadência, o motor de manobras e a régua de deslocamento leem o Núcleo de Combate v1. O Perfil de Evasão lê o Manual de Criação de Jutsus v2.8, por precedente do Sistema dos Oito Portões v1.3 e do Kenpo v1. A classe de golpe desarmado lê o Kenpo v1. A tabela de Exaustão Física que Descida-Subida inverte lê o Núcleo de Combate v1, seção 8. A Elevação de Reação, a Fração de Guarda, a Economia de Esforço e o Alcance de Salto são subsistemas próprios desta perícia, pendentes de absorção pela camada física geral no mesmo padrão que o Sistema dos Oito Portões e o Kenpo já reservam para os deles.
