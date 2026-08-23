---
id: common.skill.aikido
title: "Aikidō"
version: 1.3
layer: scenario
scenario: common
type: skill
status: final
source-file: Pericia_Aikido_v1.md
---

PERÍCIA DE AIKIDŌ
合気道 · O caminho que nunca se opõe

Aikidō é a escola que recusa o encontro de frente. `[real]` A doutrina descreve a sequência inteira de uma técnica como uma cadeia: detectar o ataque, sair da própria linha dele entrando ou girando, ligar-se ao centro do atacante pelo punho ou pela manga, conduzir essa ligação numa espiral que a estrutura dele não sustenta, e resolver a queda em arremesso ou em imobilização. Nenhuma etapa da cadeia se salta, e é essa ordem, não a força de nenhuma etapa isolada, que a perícia inteira traduz.

`[real]` Entrar, Irimi, e girar, Tenkan, são as duas respostas possíveis ao mesmo instante de decisão: entrar avança pela própria linha do ataque até terminar de frente para o alvo, e girar pivota para fora dela até terminar atrás. A tradição descreve as duas como yin e yang da mesma escolha, nunca como estilos concorrentes. `[real]` O intervalo correto de combate, ma-ai, é o terceiro pilar da mesma decisão: a doutrina afirma que controlar a si mesmo primeiro é pré-condição para controlar a distância do outro, e é esse controle que decide se Irimi ou Tenkan chega a tempo.

`[real]` Uma vez ligado ao centro do alvo pelo contato, o desequilíbrio, kuzushi, nasce de redirecionar a força que já chegou em vez de bloqueá-la: mover-se fora da linha e desviar o membro atacante numa tangente ao próprio percurso dele. A técnica se apoia no tempo certo do encaixe, não na força aplicada, e um encaixe tardio ou adiantado simplesmente não funciona. `[real]` Só depois do desequilíbrio a técnica se resolve, em arremesso que usa o próprio impulso e o próprio pivô do praticante, ou em imobilização articular sustentada até o controle no chão.

O território termina onde o ofício alheio começa. A leitura que os caminhos de Desequilíbrio praticam exige contato físico já estabelecido, nunca alcance à distância; ela pertence à mecânica desta perícia, e leitura de posição, identidade ou intenção de um alvo distante pertence ao Sensoriamento. A força do alvo se lê e se usa no mesmo instante do contato, sem guardar nada para depois. O redirecionamento sempre se resolve em ação própria de Projeção, depois do Desequilíbrio, nunca na mesma reação que estabeleceu contato. O contato ao centro existe para ler a direção de menor resistência da estrutura inteira do alvo, conduzindo-a à queda, e não para negar um membro específico como arma. Potência, Guarda, Absorção e o motor de manobras pertencem ao Núcleo de Combate. Os graus de Queda e de Imobilização pertencem ao Sistema de Efeitos de Status. Obras nomeadas de linhagem ou de dojo específico pertencem a compêndio próprio, ainda inexistente.

Esta perícia mora em worlds/common porque nenhuma linha dela pressupõe fato de cenário algum.

═══════════════════════════════════════════════════════════════════

IDENTIDADE

Regente VEL. Categoria Físico, multiplicador 1,0. Camada subclasse provisória, sem superclasse publicada.

LV1 900 · LV2 1.350 · LV3 2.700 · LV4 4.950 · LV5 8.100 · LV6 12.150, acumulando 30.150. Caminho extra custa 2.475 no LV4 e 4.050 no LV5.

COMO O TESTE SE LÊ

```
teste = Base Total + VEL + [Inclinação Total, se a situação pertence a ela] + [Especialização, se o verbo resolve o problema]
```

Uma inclinação e uma especialização por teste, no máximo.

TESTES RESOLVIDOS

LV1 · Base 12 · VEL 2 · teste 14
LV2 · Base 24 · VEL 6 · teste 30 fora, 38 dentro
LV3 · Base 32 · VEL 12 · teste 44 fora, 60 dentro
LV4 · Base 40 · VEL 18 · teste 58 fora, 78 dentro, 116 em Definida Aberto, 120 em Estreita Aberto
LV5 · Base 45 · VEL 26 · teste 71 fora, 93 dentro, 142 em Definida Aprofundado, 147 em Estreita Aprofundado
LV6 · Base 50 · VEL 34 · teste 84 fora, 109 dentro, 169 em Definida Transcendido, 174 em Estreita Transcendido

═══════════════════════════════════════════════════════════════════

RÉGUAS TRANSVERSAIS

PRESSÃO DE CONTROLE. Quanto a Imobilização sustentada eleva o próprio grau a cada rodada, sem gasto de ação. Lê a especialização de Controle Articular quando o caminho está aberto, na largura Estreita.

```
Pressão de Controle = teste ÷ 5
```

Resolvido: 24 no LV4 com o caminho aberto, 29 no LV5 aprofundado, 35 no LV6 transcendido.

═══════════════════════════════════════════════════════════════════

NÍVEL 1: FUNDAMENTOS
Base 12 · teste 14 · VEL 2

O praticante nunca opõe força a força: qualquer contato recebido é lido antes de qualquer decisão de resposta, e a postura básica já nasce fora do eixo direto de um ataque frontal simples.

NÍVEL 2: INCLINAÇÃO (escolha 1)
Base 24 · Inclinação 8 · teste 30 fora e 38 dentro · VEL 6

Recuar contra um ataque, quando a esquiva resolve com sucesso, não gasta a Ação de Movimento normal da rodada, porque a doutrina nunca trata o recuo como fuga e sim como parte do próprio movimento de resposta.

ENTRADA: o praticante trata o instante em que um ataque é declarado como a única decisão real do combate.
└─ Liga quando o alvo declara um ataque com trajetória e origem identificáveis, antes do impacto resolver

DESEQUILÍBRIO: o praticante trata o contato físico sustentado com o alvo como a fonte de toda leitura estrutural.
└─ Liga quando há contato físico sustentado ou agarrão estabelecido entre o praticante e o alvo

PROJEÇÃO: o praticante trata a estrutura já comprometida do alvo como um estado a resolver, não a administrar.
└─ Liga quando o alvo está em Queda ou em Quebra de Guarda, resultado de Desequilíbrio já aplicado nesta cena

NÍVEL 3: COMPETÊNCIA
Base 32 · Inclinação 16 · teste 44 fora e 60 dentro · VEL 12

O praticante escolhe entre Irimi e Tenkan no instante em que o ataque chega, sem declarar a escolha com antecedência, e a troca entre as duas não custa ação além da que a Reação já cobre.

═══════════════════════════════════════════════════════════════════
INCLINAÇÃO ENTRADA
═══════════════════════════════════════════════════════════════════

IRIMI (grau 3, complexidade 4)
Entrar pela própria linha do ataque em vez de recuar dela. `[real]` derivada do fundamento de que Irimi significa avançar diretamente para dentro da técnica, terminando de frente para o atacante em vez de na direção do próprio passo.
└─ Passo Através [reação, usa a esquiva]: no instante em que o alvo declara um ataque, o praticante avança pela própria linha dele, terminando engajado e de frente para o alvo, sem gastar ação além da que a Reação já cobre. LV5: o avanço também nega ao alvo o Golpe Bem Colocado daquele ataque, porque a proximidade fecha a distância que o golpe precisava
└─ Presença Que Cala [passivo]: uma vez que Passo Através resolve, o alvo perde a Banda Mínima que sustentaria um segundo ataque imediato à distância, porque a proximidade que Irimi cria nega o espaço para recuar e reiniciar. LV5: a mesma perda de espaço se aplica a um segundo atacante que tente intervir na mesma rodada

TENKAN (grau 3, complexidade 4)
Girar para fora da linha, redirecionando em vez de encontrar de frente. `[real]` derivada do fundamento de que Tenkan é um giro de cento e oitenta graus sobre o pé de apoio, que sai da linha do ataque enquanto se conecta à energia dele.
└─ Giro de Desvio [reação, usa a esquiva]: o praticante pivota sobre o pé de apoio, saindo da linha do ataque, e a esquiva bem-sucedida contra ataque físico também reposiciona o praticante atrás do alvo. LV5: o reposicionamento nega ao alvo qualquer Reação de resposta imediata contra o novo ângulo
└─ Fio Que Segue [passivo]: uma vez posicionado atrás do alvo por Giro de Desvio, o praticante mantém a posição através do próximo movimento do alvo, sem gastar ação nova, enquanto o alvo permanecer na Banda Engajado. LV5: a posição se mantém mesmo que o alvo se desloque até a Banda Curta, exigindo apenas a Ação de Movimento para acompanhar

MA-AI (grau 4, complexidade 3)
O intervalo certo decide se Irimi ou Tenkan chega a tempo. `[real]` derivada do fundamento de que controlar a própria distância e o próprio corpo é pré-condição para controlar a distância do ataque alheio.
└─ Intervalo Certo [passivo]: o praticante lê a distância de segurança contra qualquer alvo hostil na cena, e ajustar a própria posição em meio metro não custa Ação de Movimento, dentro da Banda Engajado. LV5: o ajuste também vale contra deslocamento até a Banda Curta
└─ Primeiro a Chegar [passivo]: contra um alvo que ainda não declarou ataque, o primeiro movimento do praticante dentro do intervalo correto nega a esse alvo a Reação de recuo. LV5: a mesma negação vale contra o segundo alvo que reaja ao movimento do primeiro

═══════════════════════════════════════════════════════════════════
INCLINAÇÃO DESEQUILÍBRIO
═══════════════════════════════════════════════════════════════════

LIGAÇÃO AO CENTRO (grau 3, complexidade 4)
O contato pelo punho ou pela manga é onde a leitura da estrutura alheia começa. `[real]` derivada do fundamento de que a técnica exige que a mão conecte ao centro do alvo, não apenas ao pulso ou à manga, como se alcançasse através da articulação até a própria coluna.
└─ Contato ao Centro [ativado, dentro da mesma ação de Passo Através ou Giro de Desvio, custo nenhum]: o praticante estabelece contato pelo punho, manga ou braço do alvo, e a partir desse contato lê a direção em que a estrutura dele está mais fraca. LV5: a leitura também revela se o alvo está prestes a se reequilibrar, informação que Espiral de Kuzushi consome como vantagem adicional
└─ Peso Que Não Resiste [passivo]: enquanto o contato de Contato ao Centro durar, o praticante não gasta Esforço para sustentar a posição, porque a técnica usa a estrutura do alvo como apoio, não a própria força. LV5: a isenção também vale durante a execução de Espiral de Kuzushi, não apenas durante o contato inicial

ESPIRAL DE KUZUSHI (grau 3, complexidade 5)
Conduzir o peso do alvo por uma trajetória que a estrutura dele não sustenta. `[real]` derivada do fundamento de que o desequilíbrio nasce de redirecionar a força que o atacante já trouxe numa tangente ao próprio percurso dela, e não de bloqueá-la de frente.
└─ Quebra em Espiral [ativado, ação padrão, teste da técnica contra o Equilíbrio do alvo]: a partir de Contato ao Centro, o praticante conduz o peso do alvo numa trajetória circular que a estrutura dele não sustenta, aplicando Queda pela régua de status. LV5: a Queda resolvida também impõe Grau Leve de Imobilização, se o praticante mantiver o contato depois da queda
└─ Momento Emprestado [passivo]: a Energia de Quebra em Espiral lê o próprio deslocamento do alvo no turno, em vez do par FOR mais VEL do praticante, quando o alvo estiver avançando contra o praticante no instante do contato. LV5: a leitura também se aplica quando dois alvos avançam contra o praticante ligados ao mesmo contato

═══════════════════════════════════════════════════════════════════
INCLINAÇÃO PROJEÇÃO
═══════════════════════════════════════════════════════════════════

ARREMESSO (grau 3, complexidade 4)
Completar a queda que o desequilíbrio já abriu, com o próprio peso do alvo. `[real]` derivada do fundamento de que o arremesso é uma projeção circular ou linear que usa o próprio impulso do atacante somado ao pivô do praticante, nunca força bruta aplicada contra ele.
└─ Projeção pelo Próprio Peso [ativado, ação padrão, teste da técnica contra a Absorção do alvo]: com o alvo em Queda ou Guarda em Quebra, o praticante completa o arremesso, e o Impacto resolvido ignora um terço da Absorção do alvo, porque o dano vem da distância e da superfície de impacto, não do golpe do praticante. LV5: a fração ignorada sobe à metade
└─ Sem Golpe Desferido [passivo]: a Projeção pelo Próprio Peso nunca conta como golpe físico para efeito de rider elemental ou de corte; ela sempre aplica Queda como consequência primária. LV5: a Queda aplicada por esta via nasce em Grau Moderado no mínimo

IMOBILIZAÇÃO (grau 4, complexidade 4)
Controlar a articulação até o corpo inteiro parar de resistir. `[real]` derivada do fundamento de que a imobilização é um controle articular sustentado enquanto o alvo está desequilibrado, seguido de controle no chão.
└─ Controle Articular [ativado, ação padrão, teste da técnica contra a Posse do próprio corpo do alvo]: prende uma articulação do alvo contra o chão ou contra o próprio corpo dele, aplicando Imobilização pela régua de status. LV5: o controle se estabelece mesmo que o alvo não esteja em Queda, desde que Espiral de Kuzushi já tenha resolvido contra ele nesta cena
└─ Pressão Crescente [passivo, sustentado]: manter o Controle Articular eleva o grau de Imobilização a cada rodada sem gasto de ação nova, até o teto que Pressão de Controle ler, 24 no LV4. LV5: o teto sobe a 29, e a elevação também ocorre durante o turno do alvo, não apenas no do praticante

═══════════════════════════════════════════════════════════════════

NÍVEL 6: TRANSCENDÊNCIAS

AMENOTORIFUNE (elevação de escopo · unifica Irimi, Tenkan e Ma-ai)
Pré-requisito: Irimi, Tenkan e Ma-ai, todos Aprofundados.
Revoga: um ataque só pode ser respondido por uma única linha de defesa por vez, leitura implícita da Reação do Núcleo de Combate.

HABILIDADE PRÓPRIA · Entrada Sem Limite

Tipo: passivo. Ação de mesa: nenhuma. Custo: nenhum. Teste: nenhum próprio, lê a especialização de cada caminho unificado no valor transcendido. Números: o praticante responde a todos os ataques declarados contra ele na mesma rodada com Irimi ou Tenkan, escolhido individualmente para cada um, sem gastar mais de uma Reação. Interações: não amplia a Banda Engajado nem cria contato novo além do que cada resposta já produziria; cada ataque resolve teste próprio. Etiqueta: `[proposta]`. Âncora de validação: contra três atacantes declarando ao mesmo tempo, o praticante escolhe Irimi contra um e Tenkan contra os outros dois, terminando de frente para o primeiro e atrás dos outros dois, numa única Reação.

└─ Passo Através no LV6: aplica a todos os ataques da rodada que o praticante escolher responder com Irimi, não apenas ao primeiro
└─ Giro de Desvio no LV6: reposiciona o praticante atrás de todos os atacantes que ele escolher responder com Tenkan, na mesma Reação
└─ Intervalo Certo no LV6: a leitura de distância vale sem limite de alvos na cena

ARQUÉTIPO DA PORTA QUE NÃO FECHA. Quem nunca escolhe apenas uma linha constrói os três caminhos sobre Amenotorifune, e para ele um cerco não é uma decisão forçada: é várias decisões simultâneas, cada uma resolvida a tempo.

SHINATSUHIKO (remoção de condição · unifica Ligação ao Centro e Espiral de Kuzushi)
Pré-requisito: Ligação ao Centro e Espiral de Kuzushi, ambos Aprofundados.
Revoga: o Impacto de uma manobra de Derrubar precisa superar a Guarda restante do alvo pela leitura padrão do passo 8 da sequência do Núcleo de Combate.

HABILIDADE PRÓPRIA · Quebra Sem Guarda

Tipo: passivo. Ação de mesa: nenhuma. Custo: nenhum. Teste: nenhum próprio, lê a especialização de Quebra em Espiral no valor transcendido. Números: Quebra em Espiral ignora a Guarda do alvo por completo, testando apenas contra o Equilíbrio dele, porque a técnica nunca tentou superar a estrutura montada, apenas redirecionar o que já estava em movimento. Interações: não altera a Absorção nem a Resistência do alvo; a Guarda dele permanece intacta para qualquer outro efeito que a leia. Etiqueta: `[proposta]`, derivada do fundamento `[real]` de que o desequilíbrio nasce de redirecionar força já em trânsito, nunca de vencer estrutura parada. Âncora de validação: contra o par Elite com Guarda 160 de pé e intacta, Quebra em Espiral resolve normalmente, porque nunca precisou daquela Guarda cair primeiro.

└─ Contato ao Centro no LV6: a leitura de fraqueza estrutural também revela o próximo movimento pretendido do alvo
└─ Quebra em Espiral no LV6: aplica Queda em Grau Grave garantido, não apenas o grau que o teste ler
└─ Momento Emprestado no LV6: lê o deslocamento de até dois alvos conectados ao mesmo contato simultaneamente

ARQUÉTIPO DO CENTRO QUE CONDUZ. Quem nunca precisa quebrar Guarda nenhuma constrói os dois caminhos sobre Shinatsuhiko, e para ele um alvo perfeitamente postado é o alvo mais fácil de conduzir, porque toda a força dele já está ali, pronta para ser redirecionada.

ISOTAKERU (elevação de escopo · unifica Arremesso e Imobilização)
Pré-requisito: Arremesso e Imobilização, ambos Aprofundados.
Revoga: uma técnica de Projeção só pode ser aplicada contra um alvo por ação.

HABILIDADE PRÓPRIA · Um Só Gesto, Muitos Corpos

Tipo: passivo. Ação de mesa: nenhuma. Custo: nenhum. Teste: cada alvo adicional resolve teste próprio contra a Absorção ou a Posse dele. Números: Projeção pelo Próprio Peso ou Controle Articular, quando aplicados, se estendem a um segundo alvo conectado à mesma cadeia de contato, como dois atacantes que seguravam o mesmo braço no momento da técnica. Interações: exige que os dois alvos estivessem fisicamente ligados ao mesmo ponto de contato antes da ação; não cria ligação nova. Etiqueta: `[proposta]`. Âncora de validação: dois atacantes segurando o mesmo braço do praticante no instante de Quebra em Espiral resolvido, ambos caem pela mesma Projeção pelo Próprio Peso, em vez de exigir uma segunda ação contra o segundo.

└─ Projeção pelo Próprio Peso no LV6: ignora a Absorção do alvo por completo, não apenas a fração declarada
└─ Controle Articular no LV6: a Imobilização nasce em Grau Moderado, não apenas no grau que o teste ler
└─ Pressão Crescente no LV6: o teto de Pressão de Controle deixa de existir

ARQUÉTIPO DO GESTO ÚNICO. Quem resolve dois corpos com uma só técnica constrói os dois caminhos sobre Isotakeru, e para ele um segundo agressor que se apoia no primeiro não é reforço: é mais peso para a mesma queda.

═══════════════════════════════════════════════════════════════════

LARGURA

Inclinação adicional a partir do LV2, caminho adicional a partir do LV4, ambos nascendo Abertos e aprofundando por compra separada. Todo caminho exige a inclinação dele Aprofundada. Não existe teto. Aquisição adicional custa metade da original. Cada caminho adicional soma 4 à Base no LV4 e no LV5 e 5 no LV6, e 2 ou 3 à inclinação a que pertence, conforme o estado dela.

═══════════════════════════════════════════════════════════════════

FRONTEIRA

| Território | Dono |
|---|---|
| Leitura de posição, identidade ou intenção de alvo à distância | Sensoriamento |
| Redirecionamento que devolve dano na mesma reação que aparou | Kenpo |
| Reserva de força guardada por cena inteira e disparada depois | Taichi |
| Ponte de contato que lê e prende um braço específico como arma negada | Wing Chun |
| Combate desarmado genérico, sem estilo nomeado | perícia de corpo, Fila de Nascimento |
| Obras nomeadas de linhagem ou dojo específico | compêndio de escola de combate, ainda inexistente |

═══════════════════════════════════════════════════════════════════

PENDÊNCIAS E FILA DE ERRATA

O Índice de Perícias registra Aikido como perícia sem documento de corpus, migrada sob schema anterior. Esta publicação fecha essa lacuna: o registro precisa subir para perícia com documento próprio, no Registro de Regentes, Vizinhança e Conformidade, no mesmo padrão de Taichi, Kenpo, Taekwondo e Wing Chun.

A entrada legada de Aikido em `common/skills.json`, schema anterior à v5, e o documento obsoleto que originou esta auditoria seguem como material histórico. Nenhum número de nenhum dos dois sobrevive nesta publicação, pela Decisão B do processo de leva.

A perícia de corpo genérica segue na Fila de Nascimento, e Aikidō cobre o próprio baseline inteiro sem portão de acesso até ela nascer.

═══════════════════════════════════════════════════════════════════

Estrutura e valores de camada leem o Núcleo de Perícias v2. Procedimento segue o Manual de Criação de Perícias v7.3. Custos leem o Manual de Economia de XP. Energia, Guarda, Absorção e o motor de manobras leem o Núcleo de Combate. Os graus de Queda e de Imobilização leem o Sistema de Efeitos de Status.
