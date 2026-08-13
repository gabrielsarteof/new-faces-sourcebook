---
id: naruto.skill.kyuinjutsu
title: "Kyūinjutsu"
version: 1
layer: scenario
scenario: naruto
type: skill
status: final
source-file: Pericia_Kyuinjutsu_v1.md
---

PERÍCIA DE KYŪINJUTSU
吸引術 · O ofício da tomada

Kyūinjutsu é a arte de retirar chakra de outro portador e convertê-lo em reserva própria, utilizável como se fosse gerada pelo próprio circuito. O praticante não cria nada: ele intercepta o que já corre pelo mundo, pelo corpo alheio, pela obra em trânsito, pela água que os dois tocam, pela arma que fere. O que ele treina é o gesto de tomar, não a coisa tomada, e é por isso que a etiqueta convive com o tipo de toda técnica que a carrega em vez de substituí-lo. Um selo que drena permanece Fūinjutsu, uma barreira que drena permanece Ninjutsu elemental, e esta perícia acrescenta as regras do dreno ao registro que a técnica já teria.

O sistema inteiro classifica esse mecanismo em `worlds/naruto/systems/jutsu-authoring.md` §2.8, e esta perícia é a competência que a mesa compra para exercê-lo de forma treinável, contra alvo que resiste, sem selo, sem clã e sem contrato. A régua de quantidade, o teto de recepção e a cláusula do senjutsu vivem lá, e continuam lá: esta perícia não os republica, ela declara quem os exerce e com que precisão.

O território termina onde o ofício alheio começa. A captura de técnica com devolução na forma original pertence a Fūinjutsu, e o dreno sustentado de entidade selada pertence à Válvula do mesmo documento. A doação consentida e a recusa do dreno pertencem a Controle de Chakra, no caminho Transferência, que permanece inteiro lá e não se move nem se copia para cá: aqui o canal é forçado e um lado resiste, lá o canal é consentido e as duas faces cooperam. A colheita de energia natural do ambiente pertence a Senjutsu. O dreno por dōjutsu pertence ao Manual de Técnicas Oculares. O dreno por arma com vontade própria, por recurso vivo de clã e por entidade pertence aos documentos correspondentes, quando existirem, e cada um consome esta perícia como base em vez de redefinir a matemática dela. O caminho Voragem, reservado e vazio nesta perícia, é o endereço declarado para quando o Meiton for retrabalhado.

A régua de níveis desta perícia lê a população de quem treinou o dreno, e não a população shinobi. O baixo número de praticantes no cânone não pede penalidade nova: o sistema já desincentiva a tentativa pela Reação inteira que o contato sustentado expõe, pelo Corte de Fluxo que nega de graça, pelo excedente que vira dano no próprio drenador, e pela cláusula do senjutsu que pune com Ferimento Grave garantido quem tenta a fonte mais valiosa do jogo sem preparo.

═══════════════════════════════════════════════════════════════════

IDENTIDADE

Regente INT. Categoria Chakra, multiplicador 1,4. Camada subclasse, sobre o portão de Controle de Chakra. O praticante opera a energia bruta que já corre por outro corpo ou por outro meio, sem convertê-la em outra natureza, o mesmo critério que separa esta categoria de Ninjutsu no Manual de Economia de XP §6.1.

Portão: Kyūinjutsu exige Controle de Chakra em nível não inferior ao próprio menos um, o mesmo desenho de portão que já protege Senjutsu e Fūinjutsu. A independência de acesso contra as demais perícias em INT se sustenta pela mesma exigência cruzada, sem exigir regente distinto.

LV1 1.050 · LV2 1.575 · LV3 3.150 · LV4 5.775 · LV5 9.450 · LV6 14.175, acumulando 35.175. Caminho extra custa 2.887 no LV4 e 4.725 no LV5.

PORTÃO DE RANK

O portão soma a Base Total ao atributo regente e destrava a faixa de rank que o praticante executa.

LV1 · Base 12 · INT 2 · portão 14 · rank E
LV2 · Base 24 · INT 6 · portão 30 · rank D
LV3 · Base 32 · INT 12 · portão 44 · rank C
LV4 · Base 40 · INT 18 · portão 58 · rank B
LV5 · Base 45 · INT 26 · portão 71 · rank A
LV6 · Base 50 · INT 34 · portão 84 · rank S

COMO O TESTE SE LÊ

```
teste = Base Total + INT + inclinação, se a situação pertence a ela + especialização, se o verbo resolve o problema
```

Uma inclinação e uma especialização por teste, no máximo.

RESOLUÇÃO

O dreno dispensa rolagem de acerto, como toda entrega do sistema. Toda tentativa desta perícia opõe o teste do executor à Defesa do Circuito do alvo, publicada no caminho Contenção de Controle de Chakra, e o Corte de Fluxo do mesmo caminho nega a tentativa pelo turno inteiro contra a mesma fonte. Nenhum efeito desta perícia resolve por dificuldade arbitrada.

HERANÇA DO §2.8

A régua de quantidade, o teto de recepção, a sobrecarga deliberada, a conversão e permanência, a cláusula do senjutsu e o efeito sobre o alvo são publicados em `jutsu-authoring.md` §2.8 e não se republicam aqui por extenso. O que esta perícia acrescenta é o teste que entra na fórmula herdada.

```
RC drenada por turno = RC nominal × √(teste do executor ÷ 205)
```

Coeficiente resolvido, fora de qualquer caminho: 0,26 no LV1, 0,38 fora e 0,43 dentro da inclinação no LV2, 0,46 e 0,54 no LV3, 0,53 e 0,62 no LV4, 0,59 e 0,67 no LV5, 0,64 e 0,73 no LV6. Tomada e Sifão, os dois caminhos que executam o dreno genérico da fórmula acima, elevam o coeficiente ao lerem a própria especialização: Tomada alcança 0,77 no LV4, 0,85 no LV5 e 0,92 no LV6; Sifão alcança 0,75, 0,83 e 0,91.

A recepção segura de todo efeito desta perícia equivale ao Limite de Saída do drenador, lido de Controle de Chakra, e o excedente vira dano direto de PV na proporção de um para um, salvo onde uma transcendência desta perícia declarar o contrário. A cláusula do senjutsu é a única imunidade absoluta da classificação e continua valendo sem exceção em nenhum nível desta perícia.

═══════════════════════════════════════════════════════════════════

RÉGUAS TRANSVERSAIS

Cada régua abaixo pertence a um único caminho e só existe onde ele existe: o verbo que a rege é a própria abertura do caminho, e não uma capacidade genérica do domínio. Cada grandeza lê a especialização de um único caminho, e o praticante que não possui aquele caminho não produz o efeito, no lugar de produzi-lo em versão menor.

RETENÇÃO. Teto e decaimento da reserva separada que Tomada abre. Lê a especialização de Tomada.

```
teto de retenção = teste × 3
decaimento = 10% por turno
```

O múltiplo três é o mesmo que a Régua de Acúmulo de Controle de Chakra já usa para outra reserva temporária de chakra parado fora do circuito de uso corrente, e o decaimento de dez por cento por turno é o mesmo que o §2.8 já publica para o que ultrapassa a RC máxima. Resolvido: 360 no LV4, 441 no LV5, 522 no LV6.

TRAVAMENTO. Redução do teste de Moldagem do alvo que Obstrução impõe. Lê a especialização de Obstrução.

```
redução = √(teste ÷ 205) × 50, teto 50
```

A forma é a mesma conversão que a Defesa do Circuito publica no mesmo eixo, aqui lida do lado de quem ataca em vez de quem resiste. Resolvido: 38 no LV4, 42 no LV5, 46 no LV6. A consequência corre inteira pelo Índice de Desperdício já publicado em Controle de Chakra, sem que esta régua precise de custo próprio: `desperdício = (185 − teste de Moldagem) × 1,3` soma 49 pontos percentuais de desperdício para 38 pontos de travamento, 55 para 42, e 60 para 46.

PERSISTÊNCIA. Turnos que o dreno de Sifão corre sem exigir renovação de teste. Lê a especialização de Sifão.

```
turnos sem renovação = teste ÷ 10
```

A mesma forma da Obra Persistente de Controle de Chakra, resolvida na mesma casa. Resolvido: 12 no LV4, 14 no LV5, 17 no LV6.

CAPTURA. Fração da RC nominal de um jutsu alheio que Interceptação retira em trânsito. Lê a especialização de Interceptação.

```
RC capturada = RC nominal da obra × √(teste ÷ 205)
```

Limitada pela recepção segura declarada. A obra interceptada segue com a RC nominal restante, e o dano dela recalcula pela fórmula publicada do Índice de Desperdício sobre a RC nominal reduzida, sem tocar o Fator de Moldagem, que pertence à moldagem de quem executou a obra e não a quem a interceptou. Resolvido: o interceptador de LV4 arranca 77% de uma obra, 85% no LV5, 92% no LV6. Aparar uma obra é o padrão do caminho; comê-la inteira é o que a transcendência abre.

SANGUESSUGA. Fração do dano entregue por arma infundida por Lâmina Sedenta que se converte em RC própria. Lê a especialização de Lâmina Sedenta.

```
RC nominal do dreno = dano entregue pela arma ÷ 3
RC recebida = RC nominal do dreno × √(teste ÷ 205)
```

O terço não é escolhido: é a mesma proporção que o Índice de Desperdício já publica entre custo mínimo e RC nominal de uma técnica, `o custo declarado é um terço da RC nominal`, reusada aqui como a proporção com que a ferida rende chakra. `[proposta]`, ancorado nessa relação já publicada. Resolvido sobre um golpe de 60 de dano: 15 RC no LV4, 17 no LV5, 18 no LV6.

═══════════════════════════════════════════════════════════════════

NÍVEL 1: FUNDAMENTOS
Base 12 · teste típico 14 com INT 2 · rank E

O praticante formado executa o Kyūin em sua forma mais primitiva: vetor Contato, alvo único, toque sustentado, opondo o próprio teste à Defesa do Circuito do alvo. Ele declara o limite voluntário de recepção antes da resolução, abaixo do próprio Limite de Saída, e recebe apenas o que declarou. Reconhece a diferença entre Kyūin e Absorção ao ver qualquer uma em cena, sem confundir as duas grandezas.

Coeficiente 0,26. Recepção segura igual ao próprio Limite de Saída.

NÍVEL 2: INCLINAÇÃO (escolha 1)
Base 24 · Inclinação 8 · teste típico 30 fora e 38 dentro, com INT 6 · rank D

O praticante escolhe a inclinação e passa a operar dentro dela com o bônus correspondente. A inscrição sustentada resiste à distração leve, e o praticante mantém o dreno enquanto o alvo se debate sem romper o contato.

CONTATO: o praticante trata o roubo como um ato do corpo. A pergunta que ele responde melhor que ninguém é a de tomar sem soltar.
└─ Entra no teste quando o roubo exige tocar o corpo do alvo e sustentar

MEIO: o praticante trata o roubo como um ato que passa por outra coisa. A pergunta que ele responde é a de tomar sem tocar o corpo.
└─ Entra no teste quando o roubo passa por jutsu, barreira, arma ou recurso interposto, e não pelo corpo direto do alvo

NÍVEL 3: COMPETÊNCIA
Base 32 · Inclinação 16 · teste típico 44 fora e 60 dentro, com INT 12 · rank C

O praticante sustenta o dreno sob pressão, com o alvo em movimento ou tentando romper o contato por força. Ele declara o limite voluntário durante a resolução, e não apenas antes dela, ajustando a recepção em tempo real conforme o teto se aproxima. Lê a assinatura do que recebeu o bastante para reconhecer se veio de fonte hostil, bijū ou senjutsu instável, sem ainda ter Receptividade para se proteger disso.

Coeficiente 0,46 fora e 0,54 dentro da inclinação.

NÍVEL 4: ESPECIALIZAÇÃO (escolha 1 caminho)
Base 40 · Inclinação 20 · Especialização 38 a 42 conforme o grau · teste típico 58 fora, 78 dentro e 116 a 120 no caminho, com INT 18 · rank B

NÍVEL 5: MAESTRIA
Base 45 · Inclinação 22 · Especialização 49 a 54 (aprofundada) · teste típico 71 fora, 93 dentro e 142 a 147 no caminho, com INT 26 · rank A

O caminho se aprofunda: o verbo permanece e o peso dele cresce, com as evoluções de LV5 declaradas em cada efeito.

NÍVEL 6: TRANSCENDÊNCIA (escolha 1)
Base 50 · Inclinação 25 · Especialização 60 a 65 (transcendida) · INT 34 · rank S
Requisito: todos os caminhos possuídos no estado aprofundado

Testes plenos no LV6 com largura mínima: grau 3 alcança 169, grau 4 alcança 174. Com a inclinação inteira possuída, a largura de ápice entrega 182 em Tomada e em Obstrução, 190 em Interceptação e em Lâmina Sedenta, e 185 em Sifão.

═══════════════════════════════════════════════════════════════════
INCLINAÇÃO CONTATO
═══════════════════════════════════════════════════════════════════

TOMADA (grau 4, complexidade 4) — 42
Retirar chakra de alvo hostil por contato sustentado. A especialização deste caminho entra no teste de Contato quando o problema é tomar sem soltar, governando a Régua de Retenção.
└─ Tomar [ativado, ação padrão, mãos ou membro declarado, contato sustentado]: retira chakra do alvo por oposição contra a Defesa do Circuito, lendo a régua de quantidade do §2.8 com este teste. LV5: a ação cai para menor uma vez por cena, contra alvo já imobilizado ou inconsciente
└─ Retenção [passivo]: a parcela tomada entra em reserva separada da RC do drenador, com o teto e o decaimento da Régua de Retenção. LV5: a reserva separada não decai enquanto o praticante permanecer em combate, voltando a decair dez por cento por turno assim que a cena de combate terminar

OBSTRUÇÃO (grau 4, complexidade 4) — 42 `[proposta]`
Forçar chakra estranho no canal do alvo e travar a circulação dele sem lucrar com isso. A especialização deste caminho entra no teste de Contato quando o problema é sabotar em vez de acumular, governando a Régua de Travamento.
└─ Trava [ativado, ação padrão, mãos ou membro declarado, contato sustentado]: opõe o teste à Defesa do Circuito do alvo e, vencendo, impõe a condição de canal travado por dois turnos, sem gerar RC para o executor. LV5: quatro turnos, e a segunda aplicação sobre o mesmo alvo antes de a primeira expirar soma a duração em vez de substituí-la
└─ Travamento [passivo]: enquanto o canal travado durar, o teste de Moldagem do alvo sofre a redução da Régua de Travamento. LV5: a redução também incide sobre a Régua de Interface do alvo, aumentando os selos reais que ele precisa declarar

VORAGEM, caminho de extensão reservado para quando o Meiton for retrabalhado, destravado pela manifestação e herdando Fauce e Juízo já auditados na proposta anterior. Sem grau, sem complexidade e sem efeito até lá.

═══════════════════════════════════════════════════════════════════
INCLINAÇÃO MEIO
═══════════════════════════════════════════════════════════════════

INTERCEPTAÇÃO (grau 4, complexidade 5) — 42
Tomar um jutsu alheio em trânsito antes da resolução dele. A especialização deste caminho entra no teste de Meio quando o problema é chegar antes da obra terminar, governando a Régua de Captura.
└─ Interceptar [reação, custo declarado no ato, contra jutsu em trânsito e a alcance da perícia que o detecta]: retira uma fração da RC nominal da obra pela Régua de Captura, limitada pela recepção segura, antes que ela resolva. LV5: a reação alcança também obra já em canalização declarada, e não apenas em trânsito
└─ Enfraquecimento [passivo]: a obra interceptada resolve, se resolver, com a RC nominal reduzida pela parcela capturada, e o dano dela recalcula pela fórmula publicada sobre o valor restante. LV5: obra cuja RC nominal cai a zero pela captura falha em resolver por completo, em vez de resolver enfraquecida

SIFÃO (grau 3, complexidade 3) — 38
Estabelecer dreno passivo através de meio ambiental compartilhado. A especialização deste caminho entra no teste de Meio quando o problema é durar sem repetir, governando a Régua de Persistência.
└─ Contato Indireto [ativado, ação padrão, exige água, barreira, estrutura ou outro meio que os dois toquem]: estabelece o dreno através do meio, lendo a régua de quantidade do §2.8 com este teste, sem gastar ação de ataque no turno em que já corre. LV5: o meio aceita interposição parcial, e o dreno persiste mesmo que o alvo perca contato direto por um turno, desde que o meio continue existindo
└─ Persistência [passivo]: o dreno continua correndo pelos turnos da Régua de Persistência sem exigir novo teste. LV5: ao expirar, o dreno se renova automaticamente por um teste passivo contra a Defesa do Circuito, sem custo de ação, uma vez

LÂMINA SEDENTA (grau 4, complexidade 4) — 42
Infundir o próprio dreno em qualquer arma empunhada. A especialização deste caminho entra no teste de Meio quando o problema é converter ferida em reserva, governando a Régua de Sanguessuga. Uma arma nomeada de dreno, quando existir, referencia este caminho como base e declara apenas o que a torna especial além dele.
└─ Infundir [ativado, ação menor, dura a cena ou até trocar de arma]: infunde o dreno na arma empunhada, e o golpe que acerta drena no mesmo instante em que fere, resolvendo junto do teste de ataque em vez de exigir contato sustentado à parte. LV5: a infusão persiste ao trocar de arma dentro da mesma cena, sem gastar ação nova
└─ Sanguessuga [passivo]: o dano causado pela arma infundida converte fração dele em RC própria pela Régua de Sanguessuga. LV5: a conversão incide também sobre dano de área causado pela mesma arma, dividido entre os alvos atingidos

═══════════════════════════════════════════════════════════════════

NÍVEL 6: TRANSCENDÊNCIAS

Cada transcendência revoga uma regra nomeada do sistema, e os efeitos do caminho tocado ganham a versão LV6 declarada. As leituras aplicam a largura de ápice da inclinação correspondente.

HAYAAKITSUHIME (remoção de condição · Tomada)
Revoga: o excedente sobre a recepção segura vira dano direto de PV, um para um.
└─ [passivo] O excedente sobre a recepção segura deixa de ferir o drenador. Ele entra na reserva separada da Régua de Retenção mesmo além do teto dela, sem decair enquanto a cena de combate durar, e volta a decair dez por cento por turno assim que ela terminar
└─ Tomar LV6: a ação cai para menor em qualquer alvo, imobilizado ou não
└─ Retenção LV6: a reserva separada nunca decai por completo, estacionando em dez por cento do teto em vez de zerar

SEORITSUHIME (abertura de categoria · Sifão)
Revoga: o degrau de Campo pertence a entidade e permanece fechado a personagem jogador.
└─ [ativado, ação completa, exige meio contínuo de escala suficiente, região e entidade] Abre o terceiro degrau do vetor. O dreno passa a correr sobre todo portador de chakra dentro de um raio igual a metade do teste em metros, lendo a régua de quantidade contra cada um deles em separado, com a recepção segura e o teto de retenção respeitados individualmente por alvo. Resolvido: raio de 92 metros na largura de ápice
└─ Contato Indireto LV6: o meio aceita interrupção total por até dois turnos sem que o dreno se desfaça
└─ Persistência LV6: renova-se automaticamente contra qualquer número de rupturas, uma vez por cena cada

IBUKIDONUSHI (remoção de condição · Obstrução)
Revoga: o Corte de Fluxo nega a tentativa e a estende ao turno inteiro contra a mesma fonte.
└─ [passivo] Contra a Trava desta perícia, o Corte de Fluxo deixa de negar por reação gratuita. O alvo só nega pagando a Sobrecarga Deliberada do §2.8, RC do próprio bolso, para romper o travamento
└─ Trava LV6: a duração deixa de exigir declaração de turnos, durando enquanto o executor sustentar o contato
└─ Travamento LV6: a redução alcança também a Régua de Janela do alvo, atrasando qualquer obra que ele já estivesse canalizando

Interceptação e Lâmina Sedenta seguem sem transcendência dedicada. Os efeitos dos dois leem teste e crescem pela coluna transcendida.

═══════════════════════════════════════════════════════════════════

ARQUÉTIPOS DE ÁPICE

O parasita de guerra constrói Hayaakitsuhime sobre Tomada. Ele agarra e não solta, e o que toma nunca se perde para o próprio corpo dele. A mesa dele é de atrito prolongado, de quem vence pelo desgaste do outro em vez de pelo próprio golpe.

O que seca o rio constrói Seoritsuhime sobre Sifão. Ele não escolhe o alvo, ele escolhe o lugar, e todo mundo que pisa naquela água paga o pedágio. A mesa dele é de cerco e de posição, na figura de quem transforma um pântano em arma.

O carrasco do canal constrói Ibukidonushi sobre Obstrução. Ele não rouba nada, ele fecha, e o que fecha fica fechado até alguém pagar caro para reabrir. A mesa dele é de contenção e de imobilização estratégica, na figura de quem decide quem luta e quem fica parado no chão.

═══════════════════════════════════════════════════════════════════

LARGURA

Inclinação adicional a partir do LV2, caminho adicional a partir do LV4, ambos nascendo Abertos e aprofundando por compra separada. Todo caminho exige a inclinação dele Aprofundada. Não existe teto. Aquisição adicional custa metade da original, sem tarifa por proximidade. Cada caminho adicional soma 4 à Base no LV4 e no LV5 e 5 no LV6, e 2 ou 3 à inclinação a que pertence, conforme o estado dela, exatamente como o Núcleo de Perícias §4.5 publica.

═══════════════════════════════════════════════════════════════════

ETIQUETAGEM

Canon: a existência do dreno de chakra como classificação de jutsu que convive com o tipo original em vez de substituí-lo; a resolução por oposição contra a defesa do circuito; a régua de quantidade ancorada em 205; o teto de recepção lido do Limite de Saída; a cláusula do senjutsu como imunidade absoluta; o Corte de Fluxo negando a tentativa por reação.

Atribuído: o vetor em três degraus, Contato, Meio e Campo, como leitura do que o cânone mostra em execuções distintas de dreno.

Decisão de sistema declarada: a partição em duas inclinações e cinco caminhos; a Régua de Retenção, a Régua de Travamento, a Régua de Persistência, a Régua de Captura e a Régua de Sanguessuga, todas ancoradas em construções já publicadas no Núcleo de Perícias ou em Controle de Chakra; a distinção entre Tomada, treino de roubo por contato, e Transferência, canal consentido de Controle de Chakra; a distinção entre Lâmina Sedenta, treino de infundir qualquer arma empunhada, e uma arma nomeada com vontade própria, que referenciará este caminho sem redefini-lo; a fração de um terço entre dano de arma e RC nominal do dreno em Sanguessuga; as três transcendências e a nomeação delas pelos Harae-do-no-kami, as divindades xintoístas da purificação que carregam, engolem, sopram e dissolvem a impureza.

Proposta: todos os valores de custo, teste, teto, decaimento e limiar; a régua de Obstrução por inteiro, sem âncora textual direta no §2.8, derivada da lacuna de sabotar sem lucrar; a fração de conversão de Sanguessuga; o raio de Seoritsuhime.

DEPENDÊNCIAS E PENDÊNCIAS

`jutsu-authoring.md` §2.8, dono da régua de quantidade, do teto de recepção, da sobrecarga deliberada, da conversão e permanência e da cláusula do senjutsu, que esta perícia consome sem redefinir. Caminho Contenção de Controle de Chakra, dono da Defesa do Circuito e do Corte de Fluxo. Documento de arma nomeada, inexistente, que referenciará Lâmina Sedenta como base para qualquer arma que drene por vontade própria. Documento do Meiton, pendente de rework, dono do que a Voragem herdará quando a manifestação existir. Régua de dificuldade do Narrador, camada externa, sem a qual nenhum efeito desta perícia resolve por dificuldade arbitrada.

FILA DE ERRATA

`jutsu-authoring.md` §2.8, Cedências: acrescentar a linha que reconhece esta perícia como dona do lado aberto e treinável do dreno por Contato e por Meio, fechada nesta mesma passada.

Índice de Perícias: registrar Kyūinjutsu no Registro de Regentes, na Carga por Atributo, no Registro de Vizinhança e no Registro de Fronteira, fechado nesta mesma passada.

Caminho Contenção, em Controle de Chakra: Ibukidonushi revoga a leitura gratuita do Corte de Fluxo contra a Trava desta perícia especificamente, e aquele documento deve citar esta exceção no próprio texto do Corte de Fluxo quando for revisado, para que a leitura não dependa apenas deste lado da referência.

Vetor de Campo, aberto por Seoritsuhime apenas para quem transcende por essa via: o §2.8 continua fechando o degrau de Campo à generalidade dos personagens jogadores, e a exceção vive inteira nesta transcendência, sem alterar a regra geral.

Slot Voragem: permanece vazio até que o Meiton seja retrabalhado. Preenchê-lo antes disso é o vício que a Seção 13 do Manual de Criação de Perícias existe para impedir.

═══════════════════════════════════════════════════════════════════

REGISTRO DE ALTERAÇÕES

v1

• Documento inicial. Publica a Perícia de Kyūinjutsu a partir da Auditoria de Fundamentos v1, aprovada e travada: conceito, fronteira, admissão, duas inclinações e cinco caminhos herdados sem redesenho
• Regente INT, categoria Chakra ×1,4, portão duplo com Controle de Chakra em nível não inferior ao próprio menos um
• Cinco réguas transversais publicadas, cada uma ancorada em construção já existente no Núcleo de Perícias, em Controle de Chakra ou no próprio §2.8: Retenção, Travamento, Persistência, Captura e Sanguessuga
• Três transcendências publicadas pelo padrão de revogação, nomeadas pelos Harae-do-no-kami: Hayaakitsuhime sobre Tomada, Seoritsuhime sobre Sifão, abrindo o degrau de Campo à exceção declarada, e Ibukidonushi sobre Obstrução
• O caminho Voragem entra como slot reservado e vazio, sem grau, sem complexidade e sem efeito, à espera do rework do Meiton
• A errata das Cedências do §2.8 e a propagação ao Índice de Perícias entram na mesma passada de publicação

═══════════════════════════════════════════════════════════════════

Estrutura e valores de camada leem o Núcleo de Perícias v2.2. Procedimento segue o Manual de Criação de Perícias v7.2. Custos leem o Manual de Economia de XP v2.2. A régua de quantidade, o teto de recepção e a cláusula do senjutsu leem `jutsu-authoring.md` §2.8. A Defesa do Circuito e o Corte de Fluxo leem Controle de Chakra v3.3. As técnicas nomeadas, quando existirem, vivem nos compêndios.
