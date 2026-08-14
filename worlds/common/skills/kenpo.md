---
id: common.skill.kenpo
title: "Kenpo"
version: 1.1
layer: scenario
scenario: common
type: skill
status: final
source-file: Pericia_Kenpo_v1.md
---

PERÍCIA DE KENPO
拳法 · O ofício do golpe que nunca recua

Kenpo é a escola que trata desperdício de movimento como o único inimigo real. Todo golpe parte de onde a mão já está, sem o recuo que anuncia a intenção. Bloquear é a metade ofensiva do mesmo gesto que a metade defensiva começa, fundindo as duas ações num só instante. A sequência inteira de uma troca funciona como um único argumento contra o corpo do oponente, e cada peça dela cobra o preço da anterior. A resposta certa a uma linha é um círculo, e a resposta certa a um círculo é uma linha.

Nenhuma dessas quatro ideias tem verbete no cânone de Naruto. A escola inteira é `[proposta]`, tradução de princípio de arte marcial real para o vocabulário deste sistema, e a marca não se repete efeito a efeito porque cobriria o documento inteiro sem acrescentar informação nova.

Esta perícia mora em worlds/common porque nenhuma linha dela pressupõe fato de cenário algum, no mesmo padrão que o Taichi abriu.

O território termina onde o ofício alheio começa. O Punho Gentil, estilo nomeado que já vive no documento do clã Hyūga, permanece lá, porque a nota de desenho do Índice de Perícias reserva estilo de clã ao documento do clã. A escola de Muay Thai é a vizinha mais próxima: os caminhos dela prendem bônus de combinação a uma posição fixa dentro de uma série curta, o segundo soco, o terceiro golpe, e nenhum caminho desta perícia lê posição de golpe. O Aikido neutraliza pela absorção, guardando o impulso do oponente para devolvê-lo numa projeção separada, e o contra-ataque de Kenpo devolve o mesmo impulso no instante em que o recebe. As duas escolas seguem sob schema de migração pendente, e a distinção vale para o formato futuro delas tanto quanto para o atual. A escalada de amplificação corporal por saturação de energia física pertence à Liberação de Yang. O Fator de Portão, os tetos de fluxo e a fisiologia do circuito de chakra pertencem ao Sistema dos Oito Portões e à perícia de corpo que ele reserva como consumidora futura. Potência, Guarda, Absorção, a escada de Cadência e as quatro manobras pertencem ao Núcleo de Combate, e esta perícia consome o motor sem redefinir uma linha dele. Os graus, as durações e a remoção de toda condição instalada pertencem ao Sistema de Efeitos de Status. O tratamento que encerra uma Marcação antes do fim de cena pertence ao Ninjutsu Médico.

O domínio ainda não tem superclasse. A perícia de corpo que absorveria o baseline comum de todo estilo marcial está na Fila de Nascimento do Índice de Perícias, bloqueada até a camada física geral nascer. Kenpo hoje cobre o próprio baseline inteiro sem portão de acesso, e a errata dessa lacuna está registrada ao final deste documento, para o dia em que a superclasse existir e Kenpo passar a subclasse dela.

═══════════════════════════════════════════════════════════════════

IDENTIDADE

Regente DES, porque o que decide um golpe desta escola é precisão e ausência de aviso. O Muay Thai já satura a velocidade bruta de entrega pelo regente VEL dele, e a regra de manter regentes distintos entre domínios vizinhos separa os dois. Categoria Físico, multiplicador 1,0. Camada subclasse provisória, sem superclasse publicada.

LV1 750 · LV2 1.125 · LV3 2.250 · LV4 4.125 · LV5 6.750 · LV6 10.125, acumulando 25.125. Caminho extra custa 2.062 no LV4 e 3.375 no LV5.

PORTÃO

O portão soma a Base Total ao atributo regente. Nenhum compêndio de Kenpo existe, porque o cânone de Naruto não nomeia obra alguma desta escola, e o portão fica sem consumidor até que a perícia de corpo nasça ou uma obra nomeada de campanha o leia.

LV1 · Base 12 · DES 2 · portão 14
LV2 · Base 24 · DES 6 · portão 30
LV3 · Base 32 · DES 12 · portão 44
LV4 · Base 40 · DES 18 · portão 58
LV5 · Base 45 · DES 26 · portão 71
LV6 · Base 50 · DES 34 · portão 84

COMO O TESTE SE LÊ

```
teste = Base Total + DES + [Inclinação Total, se a situação pertence a ela] + [Especialização, se o verbo resolve o problema]
```

Uma inclinação e uma especialização por teste, no máximo. O teste desta perícia decide quando um verbo de Kenpo resolve a cena. A Potência, a Guarda, a Absorção e o Golpe do golpe físico em si continuam lendo FOR, VEL e DEF pela fórmula comum do Núcleo de Combate, porque essas grandezas pertencem ao corpo e não à escola.

CLASSE DE GOLPE DESARMADO

O Núcleo de Combate publica três classes de arma e nenhuma classe para o golpe sem arma. Esta perícia declara a que falta, `[proposta]`, por interpolação entre a arma de precisão e a lâmina curva, e a lacuna entra na fila de errata ao final deste documento.

| Classe | Esforço | Coeficiente de impacto |
|---|---|---|
| Golpe desarmado | 0,9 | 0,9 |

═══════════════════════════════════════════════════════════════════

RÉGUAS TRANSVERSAIS

FATOR DE KENPO

A parcela de maestria que o golpe de Corrente Sem Fim soma à Energia comum do Núcleo de Combate, no lugar do Fator de Técnica que uma obra nomeada declararia. Lê a especialização de Corrente Sem Fim e mais nenhuma outra.

```
Fator de Kenpo = degrau² × (teste do caminho ÷ 4)
```

O divisor foi substituído contra a faixa inteira de testes do domínio antes de publicar. Resolvido para o combatente de Potência 1.600 do exemplo canônico do Núcleo de Combate, contra o par Especial de 1.920 PV:

| Degrau | Teste LV4 (120) | Teste LV6 (174) | Energia total no LV6 | % do par |
|---|---|---|---|---|
| 0 | 0 | 0 | 320 | 17% |
| 1 | 30 | 43,5 | 363,5 | 19% |
| 2 | 120 | 174 | 494 | 26% |
| 3 | 270 | 391,5 | 711,5 | 37% |

O terceiro degrau fecha dentro da banda Forte, de 25 a 38% do par de validação, a mesma âncora que o Manual de Criação de Jutsus declara para descarga única. A leitura por analogia entre um domínio sem chakra e a banda de um domínio que o tem é `[proposta]`.

EFICIÊNCIA DE RETORNO

A fração da Potência do praticante que Bloqueio Ofensivo devolve ao atacante. Lê a especialização de Bloqueio Ofensivo e mais nenhuma outra.

```
Retorno de Bloqueio = Potência do praticante × 0,20 × Eficiência de Retorno
Eficiência de Retorno = √(teste do caminho ÷ 174), teto 1,0
```

O neutro 174 é o praticante de LV6 com Bloqueio Ofensivo transcendido, largura mínima. Resolvido: 83% no LV4, 92% no LV5, teto de 100% no LV6 transcendido. Para o combatente de Potência 1.600, o retorno fecha em 266, 294 e 320.

GRAU DE EXPOSIÇÃO

O grau de Marcação que Alvo Exposto instala contra o ponto vital golpeado. Lê a especialização de Alvo Exposto e mais nenhuma outra, e consome a escala de redução por grau que o Sistema de Efeitos de Status já publica, sem inventar uma nova.

| Teste do caminho | Grau instalado | Redução de Absorção do alvo naquele ponto |
|---|---|---|
| até 120 | Leve | 15% |
| 121 a 150 | Moderado | 30% |
| 151 a 175 | Grave | 50% |
| acima de 175 | Crítico | 70% |

Resolvido: LV4 instala Leve, LV5 instala Moderado, LV6 largura mínima instala Grave, LV6 com o segundo caminho da inclinação aprofundado instala Crítico.

JANELA DE ADAPTAÇÃO

A fração da Guarda do atacante que o contra-ataque de Contra-Círculo ignora. Lê a especialização de Contra-Círculo e mais nenhuma outra.

```
Janela de Adaptação = teste do caminho ÷ 5, arredondado para baixo, piso 0%, teto 40%
```

Resolvido: 23% no LV4, 28% no LV5, 33% no LV6 largura mínima.

Sem Aviso e Contra-Linha resolvem por elevação categórica e por oposição direta, sem régua contínua própria, formas que a seção 2 do Manual de Criação de Perícias autoriza igualmente à leitura de teste.

═══════════════════════════════════════════════════════════════════

NÍVEL 1: FUNDAMENTOS
Base 12 · teste 14 com DES 2

O praticante golpeia sem recuo perceptível, do ponto onde a mão já está. O golpe desarmado converte pela classe declarada acima, Esforço 0,9 e coeficiente de impacto 0,9. Ele reconhece, ao gastar a Reação contra um ataque físico, se a trajetória que vem é reta ou circular, leitura tática sem número que sustenta os caminhos da inclinação ADAPTAÇÃO quando ela for adquirida.

NÍVEL 2: INCLINAÇÃO (escolha 1)
Base 24 · Inclinação 8 · teste 30 fora e 38 dentro, com DES 6

O Bloqueio do praticante deixa de dobrar o próprio Esforço quando resulta em Quebra de Guarda, regra que o Núcleo de Combate publica para todo combatente. Ele paga o Bloqueio pelo valor simples da ficha em qualquer resultado.

ORIGEM: O praticante trata o golpe como propriedade da ausência de aviso e do caminho mais curto até o alvo.
└─ Entra no teste quando o que decide a cena é chegar antes que o alvo perceba

CORRENTE: O praticante trata o combate como uma cadeia contínua, onde bloquear e golpear são o mesmo gesto.
└─ Entra no teste quando o que decide a cena é a sequência ininterrupta de ações ou o contato físico recebido

ADAPTAÇÃO: O praticante trata a geometria do golpe alheio como a pergunta que decide a resposta.
└─ Entra no teste quando o que decide a cena é a trajetória, reta ou circular, do ataque que o praticante enfrenta

NÍVEL 3: COMPETÊNCIA
Base 32 · Inclinação 16 · teste 44 fora e 60 dentro, com DES 12

O segundo degrau de Cadência custa o preço do primeiro, Golpe × 1,5 em vez de Golpe × 2, e a Cadência do praticante não se perde ao trocar de alvo dentro da banda Engajado.

NÍVEL 4: ESPECIALIZAÇÃO (escolha 1 caminho)
Base 40 · Inclinação 20 · Especialização 38 a 42 conforme o grau · teste 58 fora, 78 dentro e 116 a 120 no caminho, com DES 18

NÍVEL 5: MAESTRIA
Base 45 · Inclinação 22 · Especialização 49 a 54 (aprofundada) · teste 71 fora, 93 dentro e 142 a 147 no caminho, com DES 26

O caminho se aprofunda. O verbo permanece, e o peso dele cresce pelas evoluções declaradas em cada efeito.

NÍVEL 6: TRANSCENDÊNCIA (escolha 1)
Base 50 · Inclinação 25 · Especialização 60 a 65 (transcendida) · DES 34
Requisito: todos os caminhos possuídos no estado aprofundado

O requisito acima abre o LV6 e não escolhe a transcendência: cada uma nomeia, além dele, o pré-requisito próprio de caminhos que a compõem, e o portador só a escolhe possuindo-os Aprofundados.

Testes plenos no LV6 com largura mínima: grau 3 alcança 169, grau 4 alcança 174.

═══════════════════════════════════════════════════════════════════
INCLINAÇÃO ORIGEM
═══════════════════════════════════════════════════════════════════

SEM AVISO (grau 3, complexidade 4) — 38
O golpe que ninguém vê chegar rouba do alvo a metade da vantagem que sustentaria a esquiva plena, e devolve a mesma vantagem depois que o primeiro toque já aconteceu.
└─ Ponto de Origem [ativado, sem ação adicional, sem custo]: o primeiro golpe desarmado do praticante na própria rodada sobe um degrau na escada de Perfil de Evasão do Manual de Criação de Jutsus, de Padrão para Veloz, lendo o mesmo comportamento próprio e a mesma contrapartida que a escada já publica para aquele degrau. Golpes seguintes do mesmo praticante na mesma rodada resolvem em Padrão. LV5: o degrau se renova no primeiro golpe seguinte a qualquer Reação bem-sucedida do praticante na mesma rodada, e não apenas no golpe de abertura
[distinção contra Muay Thai: ali o bônus de combinação prende a posição do golpe dentro da série; aqui o degrau prende a ausência de aviso, e desliga sozinho no segundo golpe mesmo que a corrente continue]

ALVO EXPOSTO (grau 3, complexidade 3) — 38
Escolher o ponto certo antes de golpear transforma um acerto comum em uma vantagem que sobrevive ao próprio golpe que a criou.
└─ Ponto Vital [ativado, ação livre para declarar, sem custo]: o praticante nomeia um ponto vital do alvo antes de golpear, e o acerto instala Marcação naquele ponto pelo grau que a régua de Grau de Exposição ler do teste deste caminho, até o fim da cena ou até tratamento médico remover a condição, o que vier primeiro. LV5: a Marcação passa a valer também contra golpes de aliados que atinjam o mesmo ponto na mesma cena, e não apenas contra os do próprio praticante

═══════════════════════════════════════════════════════════════════
INCLINAÇÃO CORRENTE
═══════════════════════════════════════════════════════════════════

BLOQUEIO OFENSIVO (grau 4, complexidade 4) — 42
Bloquear é a continuação do ataque do praticante. O corpo que absorve o golpe alheio já está no meio do próprio golpe.
└─ Retorno [passivo]: todo Bloqueio bem-sucedido devolve dano ao atacante pela régua de Eficiência de Retorno, lendo a Potência do próprio praticante e nunca a do golpe recebido, como parte do mesmo gesto que já paga o Esforço do Bloqueio na escada do Núcleo de Combate. Bloqueio Duro: contra golpe desarmado, o retorno também fere a arma natural do atacante, pela regra de dano de fonte sem ficha do Núcleo de Combate. LV5: o retorno alcança também golpe recebido de arma de precisão, e não apenas golpe desarmado
[distinção contra a Devolução do Genjutsu: lá o retorno lê o investimento do autor da ilusão. Aqui o retorno lê sempre a força do próprio Kenpo, nunca a do golpe recebido]

CORRENTE SEM FIM (grau 4, complexidade 5) — 42
Nenhum movimento passa de uma posição a outra sem ser aproveitado, e a sequência inteira pesa mais do que a soma dos golpes que a compõem.
└─ Escalada [passivo]: cada golpe desarmado que o praticante conecta dentro da mesma sequência ininterrupta soma o Fator de Kenpo do degrau seguinte à Energia do golpe, subindo por uma escada de três degraus. O quarto golpe conectado e os seguintes mantêm o terceiro degrau sem subir mais. Quebra Total: o primeiro golpe que erra, é bloqueado ou é interrompido zera a escada, e o próximo golpe do praticante parte do degrau zero. LV5: perder a própria Guarda não zera a escada por si só, apenas a falha, o bloqueio ou a interrupção do golpe em si zeram
[distinção contra Muay Thai: Golpeador e Combinador pagam bônus fixo preso ao segundo soco ou ao terceiro golpe de série, sem relação com o que veio antes. Corrente Sem Fim não tem posição, sobe enquanto conecta e perde tudo no primeiro erro]

═══════════════════════════════════════════════════════════════════
INCLINAÇÃO ADAPTAÇÃO
═══════════════════════════════════════════════════════════════════

CONTRA-LINHA (grau 3, complexidade 4) — 38
Contra o círculo, a linha reta é a rota mais curta, e cortá-la antes que ela feche é mais barato do que esperar o giro terminar.
└─ Corte Reto [reação, usa Corte de Trajeto, sem custo adicional além do que a Reação já cobra]: contra ataque físico de trajetória circular, o praticante responde pelo caminho mais curto e resolve por oposição do teste deste caminho contra o teste ofensivo do atacante, antes que a curva do golpe alheio feche. A vitória cancela o golpe no ato, dentro da mesma Reação que a lista fechada da Seção 2 do Núcleo de Combate já concede. LV5: vencer a oposição por margem de 10 ou mais também desequilibra o atacante, aplicando a Manobra Derrubar do Núcleo de Combate sem gasto de ação adicional

CONTRA-CÍRCULO (grau 3, complexidade 4) — 38
Contra a linha reta, o arco aproveita o próprio impulso do golpe alheio, e devolve esse impulso na mesma respiração em vez de guardá-lo.
└─ Arco de Impulso [reação, usa a esquiva, sem custo adicional além do que a Reação já cobra]: contra ataque físico de trajetória reta, uma esquiva bem-sucedida também dispara um golpe imediato, usando o Golpe da ficha, no mesmo instante e sem ação adicional, ignorando da Guarda do atacante a fração que a Janela de Adaptação ler. O golpe não guarda energia para uso posterior e não soma degrau à escada de Corrente Sem Fim, por ser resposta e não abertura. LV5: o golpe imediato lê a Potência inteira do praticante em vez do Golpe da ficha, quando o ataque evitado partiu de um oponente em Quebra de Guarda
[distinção contra Aikido: lá o redirecionamento guarda o impulso do oponente para uma projeção separada, com ação própria. Aqui o impulso se devolve no mesmo instante da esquiva, como contra-ataque e não como manobra]

═══════════════════════════════════════════════════════════════════

NÍVEL 6: TRANSCENDÊNCIAS

FUTSUNUSHI (経津主), remoção de condição · Sem Aviso
Pré-requisito: Sem Aviso e Corrente Sem Fim, ambos Aprofundados.
Revoga: apenas o primeiro golpe da rodada do praticante carrega o degrau de Sem Aviso.
└─ Ponto de Origem LV6 [passivo, sem custo, requer Sem Aviso Aprofundado]: enquanto a escada de Corrente Sem Fim não quebrar pela Quebra Total, todo golpe desarmado conectado carrega o degrau de Sem Aviso, de Padrão para Veloz, e não apenas o golpe de abertura da rodada. A quebra da corrente devolve a exigência de Primeiro Toque até o próximo golpe de abertura

TAKAMIMUSUBI (高御産巣日), elevação de escopo · Corrente Sem Fim
Pré-requisito: Corrente Sem Fim Aprofundado.
Revoga: o teto de três degraus da escada de Corrente Sem Fim.
└─ Escalada LV6 [passivo, sem custo, requer Corrente Sem Fim Aprofundado]: a escada deixa de ter teto, e cada golpe conectado além do terceiro soma mais um degrau ao Fator de Kenpo, contido apenas pelo Teto de Esforço por turno que o Núcleo de Combate já aplica à Cadência que sustenta a corrente. Resolvido para o teste de 174 no LV6: o quarto degrau soma 696, o quinto soma 1.087,5

SARUTAHIKO (猿田毘古), remoção de condição · Bloqueio Ofensivo
Pré-requisito: Bloqueio Ofensivo Aprofundado.
Revoga: o Bloqueio deixa de estar disponível durante o estado de Quebra de Guarda.
└─ Retorno LV6 [passivo, sem custo, requer Bloqueio Ofensivo Aprofundado]: o Bloqueio permanece disponível mesmo com a Guarda em Quebra, e o Retorno de Bloqueio aplicado durante o estado lê a Eficiência de Retorno no teto de 1,0, independente do teste do caminho, porque o corpo que já perdeu a estrutura não tem mais nada a proteger além do próprio contra-ataque. Resolvido para Potência 1.600: retorno de 320 mesmo fora do LV6 transcendido

Alvo Exposto, Contra-Linha e Contra-Círculo seguem sem transcendência dedicada. Os efeitos dos três leem teste e crescem sozinhos pela coluna transcendida da especialização.

═══════════════════════════════════════════════════════════════════

ARQUÉTIPOS DE ÁPICE

O duelista que nunca dá dois avisos constrói Futsunushi sobre Sem Aviso e Takamimusubi sobre Corrente Sem Fim. A troca inteira começa antes de o oponente perceber que começou, e não termina até que ele erre, seja bloqueado ou seja interrompido. É a figura do mercenário contratado para durar exatamente uma troca de golpes, porque uma é tudo que ele precisa.

O muro que nunca cede constrói Takamimusubi sobre Corrente Sem Fim e Sarutahiko sobre Bloqueio Ofensivo. Cada bloqueio dele é mais um golpe cobrado do atacante, e a Guarda quebrada não tira dele a capacidade de continuar devolvendo. É a figura do guarda-costas que sobrevive ao próprio corpo cansado, porque o corpo dele nunca para de responder.

O contragolpista que convida o primeiro erro constrói Sarutahiko sobre Bloqueio Ofensivo e Futsunushi sobre Sem Aviso. Ele deixa o oponente abrir a troca, devolve o golpe recebido com a força inteira do próprio corpo, e sai da resposta já sem aviso para o próximo. É a figura do instrutor que ensina perdendo de propósito, uma vez, antes de mostrar por que ninguém vence a segunda.

Nenhuma das três figuras tem correspondente nomeado no cânone de Naruto, e a ausência é declarada aqui em vez de disfarçada por um nome emprestado.

═══════════════════════════════════════════════════════════════════

LARGURA

Inclinação adicional a partir do LV2, caminho adicional a partir do LV4, ambos nascendo abertos e aprofundando por compra separada. Todo caminho exige a inclinação dele aprofundada. Não existe teto. Aquisição adicional custa metade da original. Cada caminho adicional soma 4 à Base no LV4 e no LV5 e 5 no LV6, e 2 ou 3 à inclinação a que pertence, conforme o estado dela.

O praticante que aprofunda os dois caminhos de uma mesma inclinação, o teto de cada inclinação desta perícia, e a transcende alcança no LV6 teste 177 no caminho de grau 3 e 182 no de grau 4: Base 55, Inclinação 28, DES 34, mais a especialização transcendida do caminho ativo. É esse patamar que instala o Grau Crítico de Exposição quando o caminho ativo é Alvo Exposto.

═══════════════════════════════════════════════════════════════════

PENDÊNCIAS E FILA DE ERRATA

1. O Núcleo de Combate não publica a classe do golpe desarmado. Este documento declara Esforço 0,9 e coeficiente de impacto 0,9 por interpolação entre a arma de precisão e a lâmina curva, `[proposta]`, e a errata pede que o Núcleo de Combate absorva o valor quando revisado.
2. O Índice de Perícias registra Kenpo no Registro de Regentes e no Registro de Conformidade, mas não abriu a subseção "Cedido pelo Kenpo v1" no Registro de Fronteira, apesar dos cinco vizinhos nomeados nesta abertura. Propagação pendente.
3. O Perfil de Evasão vive no Manual de Criação de Jutsus e resolve técnica de chakra. Sem Aviso o consome por precedente já aberto pelo Compêndio dos Oito Portões, e a régua pede dono declarado na camada física geral quando ela nascer.
4. O Fator de Kenpo e a Eficiência de Retorno são subsistemas próprios desta perícia, pendentes de absorção pela camada física geral, no mesmo padrão que o Sistema dos Oito Portões já reserva para o Fator de Portão.
5. Muay Thai e Aikido seguem sem documento de corpus, migrados sob schema anterior, lacuna já registrada em `provenance.json` do lado da aplicação.
6. Correção de errata: o item 6 anterior desta lista afirmava que o Taichi não existia em documento nenhum do corpus. Essa afirmação valia apenas dentro da linha de trabalho isolada em que este documento nasceu. O Taichi existe, publicado em paralelo em `worlds/common/skills/taichi.md`, e é o precedente que esta perícia segue ao morar na mesma pasta.

═══════════════════════════════════════════════════════════════════

Estrutura e valores de camada leem o Núcleo de Perícias v2.2. Procedimento segue o Manual de Criação de Perícias v7.2. Custos leem o Manual de Economia de XP v2.2. Potência, Guarda, Absorção, Cadência, Bloqueio e as manobras leem o Núcleo de Combate v1. O Perfil de Evasão lê o Manual de Criação de Jutsus v2.8, por precedente do Sistema dos Oito Portões v1.3. Os graus de Marcação leem o Sistema de Efeitos de Status v2.4. O Fator de Kenpo e a Eficiência de Retorno são subsistemas próprios desta perícia.
