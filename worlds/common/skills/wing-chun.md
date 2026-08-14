---
id: common.skill.wing-chun
title: "Wing Chun"
version: 1.1
layer: scenario
scenario: common
type: skill
status: final
source-file: Pericia_WingChun_v1.md
---

PERÍCIA DE WING CHUN
詠春 · O caminho mais curto até o alvo

Wing Chun é a escola que trata distância como a primeira arma. `[real]` A tradição atribui a origem do estilo a uma monja budista, Ng Mui, e à aluna que lhe deu nome, Yim Wing Chun, e todo o sistema resolvido dali é economia de movimento: o soco mais rápido é o que percorre a linha mais curta entre dois corpos, e essa linha é o eixo que qualquer verbo desta perícia lê antes de qualquer outro cálculo. `[real]` Ocupar a linha central não é metáfora, é geometria de combate: quem sustenta as próprias mãos no caminho mais direto até o alvo nega a ele a mesma rota, e cada defesa nasce desenhada para também golpear, porque parar um braço no meio do caminho já é, por definição, estar no lugar certo para continuar dali.

`[real]` A ponte é o segundo pilar, e nasce do contato sustentado entre os antebraços dos dois lutadores. Onde a visão atrasa, o toque não atrasa, e o praticante formado lê intenção, direção e comprometimento do braço alheio pela pressão que sente antes de qualquer golpe sair. É dessa leitura que nasce o aprisionamento, a captura do braço que o oponente já comprometeu, negando a ele a própria arma sem gastar a mão que a prendeu.

`[real]` O terceiro pilar nasce do que a tradição chama de mão de emergência: técnicas de recuperação para o instante em que a linha central já se perdeu, a estrutura já cedeu, ou a distância já fugiu do alcance ideal. Onde os dois primeiros pilares pressupõem o corpo formado e centrado, o terceiro existe porque nem sempre ele está.

O território termina onde o ofício alheio começa. Aparar e golpear resolvem juntos apenas quando os dois ocupam a mesma linha reta, numa ação isolada, sem escada de golpes acumulados entre rodadas. O contato sustentado lê apenas o que o braço específico em ponte está fazendo no instante presente, sem guardar força para uso posterior. Potência, Guarda, Absorção e o motor de manobras pertencem ao Núcleo de Combate, consumido sem redefinição. A definição dos quatro graus de estado pertence ao Sistema de Efeitos de Status. Obras nomeadas de linhagem ou de mestre específico pertencem a compêndio próprio, ainda inexistente.

Esta perícia mora em worlds/common porque nenhuma linha dela pressupõe fato de cenário algum.

═══════════════════════════════════════════════════════════════════

IDENTIDADE

Regente DES. Categoria Físico, multiplicador 1,0. Camada subclasse provisória, sem superclasse publicada — a perícia de corpo genérica que a absorveria segue na Fila de Nascimento do Índice de Perícias.

LV1 750 · LV2 1.125 · LV3 2.250 · LV4 4.125 · LV5 6.750 · LV6 10.125, acumulando 25.125. Caminho extra custa 2.062 no LV4 e 3.375 no LV5.

COMO O TESTE SE LÊ

```
teste = Base Total + DES + [Inclinação Total, se a situação pertence a ela] + [Especialização, se o verbo resolve o problema]
```

Uma inclinação e uma especialização por teste, no máximo.

TESTES RESOLVIDOS

LV1 · Base 12 · DES 2 · teste 14
LV2 · Base 24 · DES 6 · teste 30 fora, 38 dentro
LV3 · Base 32 · DES 12 · teste 44 fora, 60 dentro
LV4 · Base 40 · DES 18 · teste 58 fora, 78 dentro, 116 em Definida Aberto, 120 em Estreita Aberto
LV5 · Base 45 · DES 26 · teste 71 fora, 93 dentro, 142 em Definida Aprofundado, 147 em Estreita Aprofundado
LV6 · Base 50 · DES 34 · teste 84 fora, 109 dentro, 169 em Definida Transcendido, 174 em Estreita Transcendido

═══════════════════════════════════════════════════════════════════

RÉGUAS TRANSVERSAIS

ABERTURA DE LINHA. Fração de Guarda que o aprisionamento retira do alvo ao puxar o braço capturado. Lê a especialização de Mão Que Prende quando o caminho está aberto, na largura Estreita.

```
Abertura de Linha = teste ÷ 5
```

Resolvido: 24 no LV4 com o caminho aberto, 29 no LV5 aprofundado, 35 no LV6 transcendido.

═══════════════════════════════════════════════════════════════════

NÍVEL 1: FUNDAMENTOS
Base 12 · teste 14 · DES 2

O praticante ocupa a linha central por padrão em qualquer confronto frontal, e a estrutura básica de mão, sem golpe declarado, já cobre os alvos vitais do próprio tronco enquanto barra o caminho mais curto do adversário. Nenhuma inclinação está ligada ainda.

NÍVEL 2: INCLINAÇÃO (escolha 1)
Base 24 · Inclinação 8 · teste 30 fora e 38 dentro · DES 6

A postura padrão da escola reduz o custo de manter a Guarda erguida por rodadas seguidas, porque a doutrina financia postura pela estrutura óssea alinhada e não pela tensão muscular sustentada.

LINHA CENTRAL: o praticante trata o eixo mais curto até o corpo do alvo como o território a governar antes de qualquer golpe.
└─ Liga quando o praticante e o alvo compartilham a mesma linha reta de aproximação direta

PONTE: o praticante trata o contato sustentado com o antebraço alheio como a fonte de toda decisão tática.
└─ Liga quando há contato físico sustentado entre o braço do praticante e o braço do alvo, mantido por mais de um instante de golpe único

RUPTURA DE LINHA: o praticante trata a própria estrutura comprometida como situação a resolver, não a suportar.
└─ Liga quando a própria Guarda está em Quebra de Guarda, ou quando a distância do combate está fora da Banda Engajado que a Linha Central pressupõe

NÍVEL 3: COMPETÊNCIA
Base 32 · Inclinação 16 · teste 44 fora e 60 dentro · DES 12

O praticante alterna entre as três formas básicas de defesa, deflexão baixa, redirecionamento e controle, sem gastar ação além da que a própria defesa já exige, cobrindo ângulos distintos da linha central conforme a ameaça chega.

═══════════════════════════════════════════════════════════════════
INCLINAÇÃO LINHA CENTRAL
═══════════════════════════════════════════════════════════════════

OCUPAÇÃO DA LINHA (grau 3, complexidade 3)
Sustentar as próprias mãos no caminho mais curto nega ao alvo a mesma rota. `[real]` derivada do fundamento de que a teoria da linha central define a distância mais direta entre os pontos vitais dos dois lutadores, e que ocupar essa distância desloca a guarda do oponente para fora dela.
└─ Barreira de Linha [passivo]: enquanto o praticante ocupa a linha central contra o alvo, qualquer ataque direto declarado pelo alvo dentro da mesma linha sofre redução de Impacto, porque a estrutura já ocupa o caminho mais curto antes do golpe alheio chegar. LV5: a redução também vale contra o segundo golpe de uma sequência do alvo na mesma rodada
└─ Economia da Linha [passivo]: golpes desferidos pelo praticante dentro da própria linha central pagam Esforço reduzido, porque a distância mais curta consome menos energia de entrega. LV5: a redução se estende ao golpe seguinte na mesma Cadência, desde que ambos permaneçam na linha

ATAQUE SIMULTÂNEO (grau 3, complexidade 4)
Aparar e golpear na mesma linha são o mesmo gesto, não dois. A fusão resolve numa ação isolada, sem escada de golpes acumulados, e só quando aparo e golpe ocupam a mesma linha reta.
└─ Defesa Que Ataca [reação, usa a esquiva ou o bloqueio já declarado, sem custo adicional]: aparar um golpe que chega pela linha central também desfere o próprio golpe do praticante na mesma ação, contra o mesmo alvo, sem gastar ação separada. LV5: o golpe simultâneo ignora a fração de Guarda que a Barreira de Linha já reduziu, somando o efeito dela ao Impacto em vez de apenas negá-lo
└─ Estrutura Tríplice [passivo]: o praticante alterna entre as três formas de mão do NÍVEL 3 sem custo de ação, cada uma cobrindo um ângulo diferente da linha, negando ao alvo a abertura que uma defesa única deixaria. LV5: a alternância cobre também um segundo atacante na mesma linha, quando os dois estiverem alinhados

PRESSÃO CONSTANTE (grau 4, complexidade 3)
Avançar sem gastar o que a tensão gastaria. `[real]` derivada do fundamento de que a potência real do estilo vem de estrutura relaxada, e não de força muscular sustentada.
└─ Força Relaxada [passivo]: manter a Guarda desta perícia ativa não acumula Esforço adicional por rodada além do golpe realmente desferido, porque a postura financia a si mesma. LV5: a isenção também vale para o Esforço de manter Ponte com um alvo em contato sustentado
└─ Avanço Que Não Recua [passivo]: enquanto avança em linha reta contra um alvo já engajado, o deslocamento não custa a Ação de Movimento própria, desde que o avanço termine dentro do alcance de golpe. LV5: o mesmo avanço também nega ao alvo a Reação de recuo que normalmente abriria distância contra aproximação direta

═══════════════════════════════════════════════════════════════════
INCLINAÇÃO PONTE
═══════════════════════════════════════════════════════════════════

LEITURA PELO CONTATO (grau 3, complexidade 4)
Chi Sao, as mãos coladas que leem antes que o golpe saia. `[real]` derivada do fundamento de que o toque sustentado permite sentir direção, pressão e comprometimento do braço alheio, informação que chega antes da visão do golpe. A leitura informa se aquele braço específico está livre ou comprometido em outra ação, sem armazenar nada para uso posterior.
└─ Mão Colada [passivo, contato sustentado]: mantido o contato com o braço do alvo, o praticante lê se aquele braço está livre ou comprometido em outra ação, informação que os caminhos de aprisionamento consomem diretamente. LV5: a leitura também revela qual dos dois braços do alvo está mais próximo de abrir um golpe, informação que os efeitos de Aprisionamento leem como vantagem adicional
└─ Resposta Sem Atraso [passivo]: reagir a uma mudança de pressão dentro de um contato sustentado já estabelecido não gasta a Reação da rodada. LV5: a resposta sem atraso também vale contra o primeiro golpe de um alvo que rompe o contato para atacar, e não apenas contra mudança de pressão dentro dele

APRISIONAMENTO (grau 4, complexidade 5)
Lop Sau e Pak Sau, a mão que puxa e a mão que afasta o braço alheio do jogo. `[real]` derivada do fundamento de que o aprisionamento usa os próprios golpes e defesas para criar a abertura em que o braço do alvo pode ser capturado, negando-o como arma.
└─ Mão Que Prende [ativado, ação padrão, teste da Ponte contra a Posse do membro do alvo]: com Ponte estabelecida, o praticante prende o braço do alvo contra o próprio corpo dele ou contra o outro braço dele, negando aquele braço como arma pela duração declarada. LV5: a captura se estende ao segundo braço do alvo, quando o primeiro já estiver preso e o praticante mantiver Ponte com os dois
└─ Puxão de Abertura [ativado, dentro da mesma ação de Mão Que Prende, custo nenhum]: puxar o braço aprisionado abre a Guarda do alvo na linha central, reduzindo-a pelo valor de Abertura de Linha, 24 no LV4. LV5: a abertura resolve 29, e o golpe que segue o puxão dentro da mesma Cadência ignora Banda Mínima

═══════════════════════════════════════════════════════════════════
INCLINAÇÃO RUPTURA DE LINHA
═══════════════════════════════════════════════════════════════════

RECUPERAÇÃO DE ESTRUTURA (grau 3, complexidade 4)
A mão de emergência existe para o instante em que a estrutura já cedeu. `[real]` derivada do fundamento de que a doutrina de recuperação treina o retorno ao centro e ao equilíbrio mesmo a partir de ângulos extremos ou posições comprometidas.
└─ Retorno ao Centro [passivo]: com a Guarda em Quebra, o praticante recupera Guarda numa fração maior da taxa padrão que a tabela de Exaustão do Núcleo de Combate concede, porque a doutrina existe para esse instante exato. LV5: a recuperação também remove o multiplicador de Limiar de Esquiva reduzido que a Quebra de Guarda impõe, mesmo antes da Guarda recarregar por completo
└─ Golpe de Emergência [ativado, ação padrão, teste do golpe contra a Esquiva do alvo]: a partir de posição comprometida ou fora da Banda Engajado ideal, um golpe curto de dedos ou cotovelo ignora o ajuste de coeficiente de entrega que a distância reduzida normalmente cobraria. LV5: o golpe também ignora metade da Absorção do alvo, porque a doutrina mira ponto vital e não superfície

LINHA BAIXA (grau 3, complexidade 3)
Chutes rasteiros, a resposta que não abandona a Guarda alta. `[real]` derivada do fundamento de que os chutes desta doutrina são baixos, rápidos e práticos, usados sem comprometer a estrutura superior do corpo.
└─ Chute Baixo [ativado, ação padrão, teste do golpe contra a Guarda do alvo]: um chute rasteiro na Banda Engajado desequilibra o alvo sem abrir a própria Guarda alta, resolvendo como a manobra Derrubar do Núcleo de Combate sem custo de Ação de Movimento adicional. LV5: o chute também nega ao alvo a Reação de recuo que normalmente seguiria a Queda
└─ Varredura de Recuperação [ativado, reação, teste do golpe contra a Esquiva do alvo]: quando a própria Guarda está em Quebra, o mesmo chute baixo resolve como reação, negando ao alvo o avanço que aproveitaria a Quebra para fechar distância. LV5: a varredura de recuperação também aplica Queda ao alvo, e não apenas nega o avanço dele

═══════════════════════════════════════════════════════════════════

NÍVEL 6: TRANSCENDÊNCIAS

O portador chega ao LV6 com todos os caminhos possuídos no estado Aprofundado, requisito geral que abre a escolha sem decidir por ela. Cada transcendência nomeia, além desse piso, a composição própria de caminhos que exige Aprofundados para poder ser escolhida, e é a mesma composição que a tag do título já indica pela palavra "unifica".

AMENOMINAKANUSHI (remoção de condição · unifica Ocupação da Linha, Ataque Simultâneo e Pressão Constante)
Pré-requisito: Ocupação da Linha, Ataque Simultâneo e Pressão Constante, todos Aprofundados.
Revoga: apenas um combatente por vez pode ocupar a linha central declarada entre dois corpos, leitura implícita da sequência de resolução do Núcleo de Combate.

HABILIDADE PRÓPRIA · Centro Que Não Se Divide

Tipo: passivo. Ação de mesa: nenhuma. Custo: nenhum. Teste: nenhum próprio, lê a especialização de cada caminho unificado no valor transcendido. Números: o praticante ocupa a própria linha central contra todos os alvos engajados simultaneamente, e não apenas contra um. Interações: não amplia alcance nem cria linha nova, apenas multiplica quantos alvos leem a mesma ocupação já publicada pelos caminhos desta inclinação. Etiqueta: `[proposta]`. Âncora de validação: cercado por três atacantes na mesma linha de aproximação, o praticante lê Barreira de Linha, Defesa Que Ataca e Avanço Que Não Recua contra os três ao mesmo tempo, em vez de escolher um.

└─ Barreira de Linha no LV6: a redução de Impacto se aplica a todo alvo engajado, não apenas ao primeiro que declarar ataque na rodada
└─ Defesa Que Ataca no LV6: resolve contra todos os ataques recebidos pela linha central na mesma rodada, cada um com teste próprio
└─ Força Relaxada no LV6: a isenção de Esforço também cobre a manutenção de Ponte com múltiplos alvos simultâneos

ARQUÉTIPO DA LINHA IMÓVEL. O centro que não se divide constrói os três caminhos sobre Amenominakanushi, e para ele cercar não é vantagem numérica: é oferecer mais linhas para o mesmo centro ocupar.

KAMIMUSUBI (elevação de escopo · unifica Leitura pelo Contato e Aprisionamento)
Pré-requisito: Leitura pelo Contato e Aprisionamento, ambos Aprofundados.
Revoga: o contato sustentado se rompe quando qualquer um dos dois corpos se desloca além da Banda Engajado.

HABILIDADE PRÓPRIA · Ponte Que Não Se Solta

Tipo: passivo. Ação de mesa: nenhuma. Custo: nenhum. Teste: lê Abertura de Linha no valor transcendido, 35. Números: a Ponte estabelecida sobrevive ao deslocamento do alvo até a Banda Curta, exigindo apenas que o praticante gaste a Ação de Movimento para acompanhar. Interações: não impede que o alvo rompa o contato por manobra declarada de Desarmar aplicada ao próprio corpo dele; apenas nega o rompimento por simples distância. Etiqueta: `[proposta]`. Âncora de validação: um alvo que tenta recuar da Banda Engajado para a Curta para escapar da Ponte permanece lido, e o praticante acompanha gastando só a própria Ação de Movimento.

└─ Mão Colada no LV6: a leitura de comprometimento se estende a ambos os braços do alvo simultaneamente, mesmo que só um esteja em contato direto
└─ Resposta Sem Atraso no LV6: vale também contra qualquer ação do alvo que não seja golpe físico, enquanto o contato sustentado durar
└─ Mão Que Prende no LV6: a captura de um segundo braço não exige mais que o primeiro já esteja preso, resolvendo os dois na mesma ação

ARQUÉTIPO DA PONTE ETERNA. O que nunca larga o contato constrói os dois caminhos sobre Kamimusubi, e para ele a distância deixou de ser a saída do oponente: uma vez que a ponte se forma, ela segue o alvo até onde ele for.

IZANAGI (remoção de condição · unifica Recuperação de Estrutura e Linha Baixa)
Pré-requisito: Recuperação de Estrutura e Linha Baixa, ambos Aprofundados.
Revoga: a Quebra de Guarda impede o Bloqueio até o fim do turno seguinte de quem a sofreu, regra publicada no Sistema de Efeitos de Status.

HABILIDADE PRÓPRIA · Retorno Sem Marca

Tipo: passivo. Ação de mesa: nenhuma. Custo: nenhum. Teste: nenhum próprio, lê a especialização de cada caminho unificado no valor transcendido. Números: o Bloqueio permanece disponível para o praticante mesmo durante a própria Quebra de Guarda, resolvendo pela leitura normal da manobra. Interações: não remove a Quebra de Guarda em si, nem os demais efeitos dela; apenas devolve o Bloqueio como opção disponível durante o estado. Etiqueta: `[proposta]`, derivada do fundamento `[real]` de que a doutrina de recuperação treina o retorno à estrutura mesmo a partir da posição mais comprometida possível. Âncora de validação: com a própria Guarda em Quebra contra o par Elite, o praticante ainda bloqueia o próximo golpe recebido, porque a estrutura que a doutrina reconstrói não depende da Guarda estar de pé.

└─ Retorno ao Centro no LV6: a recuperação de Guarda ocorre à taxa cheia, não apenas numa fração maior da padrão
└─ Golpe de Emergência no LV6: ignora a Absorção do alvo por completo, não apenas metade dela
└─ Chute Baixo no LV6: aplica Queda garantida em Grau Moderado no mínimo, e não apenas desequilíbrio

ARQUÉTIPO DA QUEDA QUE VOLTA. Quem nunca fica realmente caído constrói os dois caminhos sobre Izanagi, e para ele a Quebra de Guarda é uma fase da troca, não um veredito sobre ela.

═══════════════════════════════════════════════════════════════════

LARGURA

Inclinação adicional a partir do LV2, caminho adicional a partir do LV4, ambos nascendo Abertos e aprofundando por compra separada. Todo caminho exige a inclinação dele Aprofundada. Não existe teto. Aquisição adicional custa metade da original. Cada caminho adicional soma 4 à Base no LV4 e no LV5 e 5 no LV6, e 2 ou 3 à inclinação a que pertence, conforme o estado dela.

═══════════════════════════════════════════════════════════════════

FRONTEIRA

| Território | Dono |
|---|---|
| Escada de golpes conectados que cresce por rodada, fusão ataque-defesa por ausência de recuo | Kenpo |
| Reserva de força guardada por cena inteira e disparada depois | Taichi |
| Combate desarmado genérico, sem estilo nomeado | perícia de corpo, Fila de Nascimento |
| Arremesso, submissão e luta de solo | documento próprio, autorizado pelo Núcleo de Combate §9 |
| Obras nomeadas de linhagem específica, kata batizado | compêndio de escola de combate, ainda inexistente |

═══════════════════════════════════════════════════════════════════

PENDÊNCIAS E FILA DE ERRATA

O Índice de Perícias do cenário Naruto precisa registrar Wing Chun no Registro de Regentes, Vizinhança e Conformidade, no mesmo padrão que já registra Taichi, Kenpo e Taekwondo.

A perícia de corpo genérica segue na Fila de Nascimento, e Wing Chun cobre o próprio baseline inteiro sem portão de acesso até ela nascer, no mesmo padrão que as três precedentes já registram.

═══════════════════════════════════════════════════════════════════

Estrutura e valores de camada leem o Núcleo de Perícias v2. Procedimento segue o Manual de Criação de Perícias v7.3. Custos leem o Manual de Economia de XP. Potência, Guarda, Absorção e o motor de manobras leem o Núcleo de Combate. Os graus e a remoção de toda condição instalada leem o Sistema de Efeitos de Status.
