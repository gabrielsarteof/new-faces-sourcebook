---
id: core.power-creation
title: "Manual de Criação de Poderes"
version: 3.1
layer: core
type: core-layer
status: final
source-file: Manual_de_Criacao_de_Poderes_v3-1.md
---

# Manual de Criação de Poderes

**v3.1. Camada de núcleo, compartilhada entre cenários. Substitui integralmente a v2.**

Este manual é a paleta universal de construção de efeito. Qualquer poder, de qualquer escala, em qualquer cenário do sistema, se monta plugando as peças definidas aqui. Ele responde a quatro perguntas em ordem: o que o efeito faz, quanto ele move, como ele se comporta e quanto ele custa.

---

## 0. Natureza do documento

### 0.1 Camada e alcance

O manual pertence à camada de núcleo. Ele se apoia no que é comum a todos os cenários do sistema, os dez atributos de ficha, a estrutura de perícias em seis níveis com quatro camadas, os pools de recurso, o sistema de efeitos de status e as Tabelas de Referência de personagem. Ele não conhece nenhum mundo em particular.

Vocabulário de mundo fica fora. O manual fala em recurso e escreve PM, e cada cenário traduz para a moeda dele. O manual fala em tipo de efeito e não em elemento nomeado. O manual fala em eixo de evitabilidade e não no perfil concreto que um cenário adota.

### 0.2 Os três selos

Toda regra deste manual carrega um dos três selos, e o selo governa quem pode alterá-la.

**[NÚCLEO]** vale em todo cenário sem uma linha de adaptação. Alterar exige nova versão deste manual.

**[EXTENSÃO]** declara a forma da regra e deixa o preenchimento para o cenário. O manual publica os slots, a ordem de operações e as restrições; o cenário publica os valores. O cenário registra a instância no manual tradutor dele e nunca reescreve o slot.

**[INSTÂNCIA]** é exemplo registrado de um preenchimento existente, citado para calibração. Instância não obriga cenário nenhum.

### 0.3 A regra de fechamento

O manual é fechado para modificação por cenário. Cenário que precisa de comportamento novo procura o ponto de extensão correspondente e registra a instância dele. Se não existir ponto de extensão para o caso, isso é falha deste manual e entra na fila de errata como pedido de nova versão, e não como correção escrita rio abaixo.

O sinal de falha é conhecido e tem nome. Quando um documento consumidor precisa dizer que uma regra daqui deixa de valer, a dependência inverteu. A v3 nasce do reparo de cinco inversões dessas.

### 0.4 A interface pública

Cenário não lê este manual cru. Cada cenário mantém um manual tradutor que consome as seções daqui, registra as instâncias dos pontos de extensão e publica a interface que os documentos de técnica, perícia e poder daquele mundo efetivamente usam.

---

## 1. Contrato de Efeito e ancoragem em ficha

### 1.1 O contrato [NÚCLEO]

Nenhum efeito publica sem os oito campos preenchidos. Vale para poder, técnica, habilidade de transcendência, propriedade de item e qualquer regra que produza consequência na mesa.

**Tipo.** Passivo, ativado, reação, sustentado ou fluxo de fundo.

**Ação.** Livre, menor, padrão, reação ou nenhuma.

**Custo.** Número absoluto, por uso ou por turno, com a família de custo declarada, ou a palavra nenhum.

**Teste.** Qual soma entra, contra o que se opõe e o que a margem produz. Efeito sem teste declara resolução automática e o motivo.

**Números.** Valores, alcances, durações, limiares e frequências, resolvidos.

**Interações.** O que o efeito lê e o que ele altera nos documentos que o cercam.

**Etiqueta.** A procedência do efeito conforme o cenário exigir, mais o selo deste manual quando a regra for de núcleo.

**Âncora de validação.** Uma situação de mesa com par declarado que prova o número.

Fórmula publicada sem valor resolvido é meia regra. Todo efeito que dependa de teste traz a linha resolvida na faixa em que existe.

### 1.2 Proibição de dificuldade arbitrada [NÚCLEO]

Nenhum efeito resolve por número escolhido pelo Narrador no momento. Efeito resolve por oposição a outro teste, por limiar lido de um teste, ou por categoria. As três formas são auditáveis e o número escolhido na hora não é.

### 1.3 Ancoragem em ficha [NÚCLEO]

Efeito construído neste manual existe dentro de uma ficha e precisa dizer o que lê dela.

**Uma grandeza, uma fonte.** Cada grandeza produzida por um efeito lê exatamente uma origem, entre quatro: o recurso investido, o teste de perícia, um atributo, ou um valor fixo. Duas origens alimentando a mesma grandeza é erro de construção, porque funde camadas que têm donos separados e mata a escolha de quem constrói o personagem.

**Leitura de atributo.** O efeito nomeia o atributo entre os dez da ficha, FOR, VEL, DES, DEF, INT, SAB, RES, PRE, CAR e VON, e declara se ele entra como insumo de magnitude, como requisito de acesso ou como parte de um teste oposto.

**Leitura de perícia.** O efeito que lê perícia nomeia a perícia, nomeia a camada que entra, base, inclinação ou especialização de caminho, e declara o que a margem produz. Efeito que exige verbo de caminho declara o requisito de caminho no registro.

**Faixa de teste do sistema.** Os testes de perícia correm de cerca de 14 no primeiro nível a cerca de 205 no ápice com construção dedicada. Toda régua que leia teste substitui a faixa antes de publicar, nos níveis 1, 3, 4, 5 e 6. Divisor intuído sem substituição erra por uma ordem de grandeza.

### 1.4 Escala contínua e escala categórica [NÚCLEO]

Doutrina que decide a forma de todo efeito.

**Saída contínua lê o teste.** Quando a grandeza é contínua, economia, alcance, redução, eficiência, grau de ocultação ou limiar, ela se calcula do teste, e dois praticantes do mesmo nível com construções diferentes entregam resultados diferentes.

**Saída categórica eleva categoria.** Quando a grandeza é discreta, contagem pequena, número de vagas, presença ou ausência de uma trava, o efeito sobe de degrau. Alvo para área, área para campo, instante para sustentado, individual para coletivo, uma vaga para duas.

**Formas admitidas de régua contínua.**

```
linear      valor = (neutro − teste) × k        [piso e teto declarados]
raiz        valor = √(teste ÷ neutro)           [teto 1,0]
```

A linear pesa igual ao longo da faixa e serve a grandezas de custo. A raiz é generosa cedo e cara no fim, e serve a grandezas cujo ápice deve ser raro.

**O neutro é ancorado, nunca escolhido.** O ponto em que a régua zera ou satura sai de uma construção declarada, lida das tabelas de núcleo, e a conta aparece no registro. Diferença menor que um ponto percentual entre duas construções do mesmo nível significa que a régua não diferencia e o desenho falhou.

**Elevação por categoria não usa percentual.** Porte sobe de degrau. Percentual serve a bônus de teste, a escalonamento de magnitude e às frações declaradas na economia, e não a preço de degrau.

---

## 2. Escala, o orçamento universal

### 2.1 A tabela de escala [NÚCLEO nos custos, EXTENSÃO na reserva]

A escala é o envelope de qualquer efeito, em qualquer categoria. Custo absoluto em PM, e a raridade vem do número ser inacessível à maioria.

| Escala | Custo (PM) | Reserva de referência | Usos por combate | Aftermath | Famílias e dimensões destravadas |
|---|---|---|---|---|---|
| Utilidade | 10 a 50 | ~10 | 20 ou mais | nenhum | famílias de piso; sem extras de categoria |
| Básico | 50 a 150 | ~50 | 10 a 15 | nenhum | área simples, duração fixa |
| Moderado | 150 a 300 | ~150 | 6 a 10 | nenhum | riders, gatilhos, sustentado |
| Forte | 300 a 700 | ~300 | 3 a 5 | leve | perfuração parcial, multi-alvo, construto de estágio baixo |
| Supremo | 700 a 2.000 | ~700 | 1 a 2 | saída reduzida | famílias de percentual de pool, negação de escala igual, quadro espacial |
| Forbidden | 2.000 a 4.000 | ~2.000 | 1 por dia | burnout com preço físico | perfuração total, controle duro sem teste, negação acima da própria escala |
| Transcendente | 4.000 ou mais | reserva quase inteira | 1 por dia, teto | sacrifício declarado | revogação de uma regra nomeada do sistema |

A coluna de reserva de referência é o ponto de extensão. A curva de recurso por faixa pertence ao documento de recurso de cada cenário, e o manual apenas declara que os dois portões existem: PM suficiente e maestria suficiente.

**O contrato do Transcendente.** O tier mais alto deixa de ser narrativo puro. Efeito transcendente declara em uma frase qual regra nomeada do sistema ele revoga, no formato revoga a regra tal, antes de qualquer número. Sem a frase, o efeito é Forbidden com custo inflado. A revogação pertence a uma de três famílias: remoção de condição, elevação de escopo, ou abertura de categoria, esta última quando o praticante passa a fazer algo que o domínio inteiro não fazia em nível nenhum.

**Bônus plano de teste por escala foi removido.** A dificuldade de resistir a um efeito tem fonte única, o motor da seção 3.2. Duas fontes para a mesma grandeza violam a seção 1.3.

### 2.2 A Régua de Magnitude [NÚCLEO]

Quanto de um recurso de referência um efeito move por uso, por escala. É a régua mãe que as categorias de recurso herdam e as demais adaptam.

| Escala | Fração do pool de referência movida por uso |
|---|---|
| Utilidade | 3 a 6% |
| Básico | 8 a 14% |
| Moderado | 15 a 24% |
| Forte | 25 a 38% |
| Supremo | 40 a 65% |
| Forbidden | 70 a 100% |
| Transcendente | acima do pool, com o excedente virando efeito de escopo |

**Âncora de validação.** Um efeito de escala Forte contra um par de faixa Elite, pool de referência 1.440 de PV pela tabela do perfil Equilibrado, move de 360 a 547 pontos. A técnica de referência do cenário calibrador entrega 443, ou 31%, dentro da faixa.

### 2.3 Pool de referência por contexto [NÚCLEO]

A régua de magnitude precisa saber contra o que mede. Cada contexto declara o pool.

| Contexto | Pool de referência |
|---|---|
| Recurso | o pool alvo do efeito, PV, PM ou PS do par da faixa |
| Estado | o valor do atributo atingido, na escada de graus da seção 3.2 |
| Campo e existência | o orçamento de degraus da seção 3.3 |
| Entidade | os pools do portador ou a ficha registrada da entidade |

---

## 3. Categorias de Efeito, o que o poder faz

Quatorze categorias em quatro contextos, agrupadas pela unidade de medida. Cada categoria expõe a mesma interface: régua, motor de resolução, ancoragem em ficha e progressão por escala.

**Lei das categorias [NÚCLEO].** Toda categoria entrega motor de resolução ou declara o dono externo do motor. Não existe terceira opção. Categoria sem motor é convite a invasão, e foi assim que motores universais nasceram rio abaixo em versões anteriores.

### 3.1 Contexto A, Efeitos de Recurso

Régua em pontos, simétrica ao dano, pela Régua de Magnitude com a eficiência de cada categoria.

| Categoria | O que faz | Eficiência | Motor | Lê da ficha |
|---|---|---|---|---|
| Dano | remove PV do alvo | 100%, a referência | forma de dois termos da seção 4.3, menos mitigação | recurso investido, maestria, mitigação do alvo |
| Cura | restaura PV, PM ou PS | ~80% | mesma forma, sem mitigação | recurso investido ou teste de perícia, nunca os dois |
| Escudo e Absorção | pool temporário que absorve dano | ~85%, expira | pool paralelo com duração declarada | recurso investido |
| Dreno e Transferência | tira do alvo e entrega ao usuário | ~60%, dividido | dois efeitos ligados pela seção 6 | recurso investido, resistência do alvo |

Cura, Escudo e Dano são espelhos pela mesma régua. Um escudo de escala Forte absorve aproximadamente um golpe de escala Forte do par.

**Cura e o sistema de status.** Restaurar pontos e remover condição são grandezas distintas com donos distintos. A remoção de condição lê o sistema de status do cenário e paga o preço que ele declarar, incluindo custo em graus pela família Refluxo da seção 4.2.

### 3.2 Contexto B, Efeitos de Estado

Régua de magnitude vezes duração vezes resistibilidade.

| Categoria | O que faz | Régua por escala |
|---|---|---|
| Buff | eleva atributo próprio ou de aliado | escada de graus, com duração declarada |
| Debuff | reduz atributo do alvo | espelho do buff, sempre resistido |
| Controle | atordoa, prende, silencia, provoca | degraus de dureza, do resistível ao duro sem teste |
| Transformação | muda forma e concede propriedades | soma das mudanças de atributo vezes duração, com ativação e manutenção |

**Escada de graus [NÚCLEO].**

| Escala | Magnitude sobre o atributo | Controle |
|---|---|---|
| Utilidade | 10% | nenhum |
| Básico | 15% | brando e resistível, 1 turno |
| Moderado | 30% | brando 2 a 3 turnos com teste |
| Forte | 50% em um atributo, ou 30% em vários | duro por 1 turno, ou brando 2 a 3 sem teste |
| Supremo | 70% | duro 2 turnos |
| Forbidden | severo, com o teste suprimido | duro multi-turno sem teste |
| Transcendente | revoga a condição de resistência declarada | trava categoria de ação inteira |

Buff sobre atributo regente de pool vale mais que buff marginal, e a construção declara qual dos dois é.

**Motor de Resistência, a Compressão de Limiar [NÚCLEO].** Regra de origem deste manual, repatriada. Para todo efeito resolvido por teste resistido, o limiar de resistência do alvo é comprimido pelo comprometimento de recurso do usuário.

```
limiar de resistência = teste oposto padrão × (1 − PM investido ÷ PM máximo do usuário)
```

Escopo declarado. Aplica-se apenas a efeitos com teste resistido. Magnitude escala pela fórmula própria, evitabilidade pertence ao eixo da seção 5.2, e riders escalam pelo grau declarado. Donos separados, sem empilhamento. O denominador é o PM máximo próprio, e pools externos ficam fora dele.

Cláusula de motor próprio. A perícia ou o domínio que publique motor próprio de imposição consome esta régua sem redefini-la e pode multiplicar o investimento por um fator de eficiência derivado do próprio teste. Nenhuma construção lê os dois motores ao mesmo tempo.

**Linha resolvida.** Alvo com teste oposto 60. Usuário com PM máximo 3.750 investindo 700, escala Supremo: limiar cai para 48,8. O mesmo usuário investindo 2.000, escala Forbidden: limiar cai para 28. Um usuário de PM máximo 1.550 investindo os mesmos 700 comprime para 32,9, e a aposta de desespero de quem tem pouco vale mais por ponto investido que a mesma soma na mão de quem tem muito.

### 3.3 Contexto C, Efeitos de Campo e Existência

Régua por orçamento de degraus. Cada categoria declara eixos, cada eixo tem seis degraus, e a escala do efeito concede degraus para distribuir entre os eixos.

**Orçamento de degraus [NÚCLEO].**

| Escala | Degraus distribuíveis |
|---|---|
| Utilidade | 2 |
| Básico | 3 |
| Moderado | 4 |
| Forte | 6 |
| Supremo | 8 |
| Forbidden | 10 |
| Transcendente | 12 |

Nenhum eixo recebe degrau acima do teto da própria escala mais um. Degrau não gasto não vira desconto.

#### Mobilidade

Move o praticante ou terceiros pelo espaço, com ou sem travessia de intervalo.

| Degrau | Alcance | Carga | Restrição atravessada |
|---|---|---|---|
| 1 | contato | apenas o praticante | nenhuma |
| 2 | curto, dentro da cena | praticante e um por contato | cobertura sólida |
| 3 | campo visual | grupo em contato | linha de visão dispensada |
| 4 | ponto conhecido fora da visão | massa de porte veicular | barreira erguida |
| 5 | região, com âncora prévia | massa de porte de estrutura | fronteira selada |
| 6 | outro plano ou dimensão | massa de escala de evento | fronteira dimensional |

Ancoragem em ficha. Mobilidade que dependa de precisão de destino lê o teste da perícia responsável e declara o que a margem produz, tipicamente erro de posição em falha rasa e falha de travessia em falha larga. Mobilidade que dependa de âncora prévia declara o requisito da âncora, e a âncora em si pertence ao domínio que a inscreve.

#### Percepção

Estende, aguça ou nega os sentidos, detecta, comunica e oculta.

O contrato desta categoria são três réguas obrigatórias, cada uma com dono declarado no cenário.

**Cobertura por custo de tempo.** Área varrida contra tempo gasto. Varredura ampla e instantânea pertence ao topo da escala.

**Atenuação por meio atravessado.** O que fica entre o praticante e o alvo desconta resolução, com o eixo vertical tratado à parte.

**Resolução por objeto de leitura.** O que a escala devolve muda conforme o alvo seja pessoa, construto, entidade convocada, cópia, corpo reanimado ou massa fora da faixa humana.

Efeito que declare apenas cobertura vezes duração está incompleto e não publica.

#### Negação

Sela, dissipa, anula, corta a fonte, impede a formação.

**Motor de Confronto por Escala [NÚCLEO].** A negação resolve pela distância entre a escala do efeito alvo e a escala da própria negação.

| Diferença, alvo menos negação | Resultado |
|---|---|
| zero ou negativa | negação automática, sem teste |
| um degrau acima | teste oposto, com o limiar comprimido pela seção 3.2; sucesso nega, falha desce o alvo um degrau de escala |
| dois degraus acima | não nega, e desce o alvo um degrau de escala |
| três ou mais | sem efeito |

Ancoragem em ficha. O teste oposto do confronto lê a perícia do domínio de negação contra a perícia do domínio do efeito alvo, ou contra o teste registrado na ficha do efeito quando ele tiver sido inscrito no passado.

Duração e alvo do que se nega, técnica em curso, técnica inata, fonte de recurso ou fronteira, são eixos que consomem degraus pelo orçamento acima.

#### Espacial e Realidade

Cria, altera ou governa o quadro dentro do qual as coisas acontecem. Piso de escala Supremo, aftermath obrigatório.

| Degrau | Escopo do quadro | Quem entra | O que o quadro altera |
|---|---|---|---|
| 1 | bolso preso a um objeto | apenas o praticante | nada, apenas contém |
| 2 | recinto | escolhidos por contato | uma propriedade física declarada |
| 3 | campo | todos na área, voluntários | duas propriedades, ou a passagem do tempo relativo |
| 4 | região | involuntários mediante teste | regra de recurso do sistema |
| 5 | plano estável e persistente | qualquer um, à escolha do dono | causalidade local declarada |
| 6 | plano com regras próprias declaradas | involuntários sem teste | regra nomeada do sistema, o que exige contrato de Transcendente |

Ancoragem em ficha. Quadro persistente declara custo de manutenção pela família correspondente e declara o que acontece com quem está dentro quando o dono cai.

### 3.4 Contexto D, Efeitos de Entidade

Traz ou constrói algo que age com autonomia. Régua por poder relativo.

#### Invocação

Traz ao campo uma entidade que já existe em outro lugar.

**Dois modos [NÚCLEO].** O termo grau de ameaça foi abolido por não ter dono localizável, e o poder da entidade se lê por um de dois modos declarados no registro.

**Modo de fração.** A entidade genérica ou sem nome expressa pools e testes como fração dos do portador.

| Escala | Fração dos pools do portador | Testes da entidade |
|---|---|---|
| Utilidade | 0,15 | atributo do portador dividido por 3 |
| Básico | 0,25 | dividido por 2,5 |
| Moderado | 0,40 | dividido por 2 |
| Forte | 0,60 | dividido por 1,5 |
| Supremo | 1,00 | iguais aos do portador |
| Forbidden | 1,50 | do portador multiplicados por 1,25 |
| Transcendente | ficha própria obrigatória | ficha própria |

**Modo de ficha registrada.** A entidade nomeada tem ficha própria construída contra as Tabelas de Referência, e a escala do poder de invocação se lê da faixa da entidade, independente de quem invoca. O custo é da entidade e não do invocador, e um portador de faixa baixa que tenha o vínculo paga o preço cheio ou falha em trazer a forma plena.

Ancoragem em ficha. O vínculo que autoriza a invocação é requisito de objeto e mora na ficha do vínculo, nunca como efeito. Efeito que exista apenas para autorizar o acesso a um objeto é porteiro e não publica.

#### Construto

Cria e sustenta uma estrutura de recurso que age, protege ou ocupa espaço, e que não existia antes.

**Motor de Construto [NÚCLEO].** Cinco regras fixas.

**Dois custos.** Ativação paga uma vez na manifestação, manutenção paga a cada turno de permanência. Subir de estágio paga a diferença entre o novo e o atual.

**Trava de sustento.** A manutenção respeita o Limite de Saída do portador, a fração do pool gastável por turno. Estágio cuja manutenção exceda o limite não é sustentável por aquele portador, e essa é a única trava de acesso necessária. O valor do limite e os seus modificadores são ponto de extensão do cenário.

**Pool próprio sem regeneração.** O construto tem pool de resistência distinto do portador. O dano acumulado permanece enquanto o estágio for mantido.

**Herança de dano.** Dispersar e remanifestar restaura o pool cheio ao preço de nova ativação. Subir de estágio reconstrói no pool do estágio novo. Descer de estágio herda o dano proporcional já sofrido.

**Plataforma de acoplamento.** Efeitos que operam a partir do construto são registros próprios que dependem apenas da presença do estágio adequado. O motor não muda para acomodar acoplamento novo.

Ancoragem em ficha. Estágios são elevação categórica e não percentual. Construto que atue com autonomia declara se age por conta própria ou consome a ação do portador.

---

## 4. Famílias de Cálculo, quanto é computado

Estratégias universais de cálculo. Qualquer categoria pluga qualquer família, respeitados os contratos de disponibilidade. Uma cura pode ser recurso vezes multiplicador, valor fixo, ou crescente por turnos, do mesmo modo que um dano.

**Contrato de família [NÚCLEO].** Toda família declara piso de escala, portadores legais e contraindicação. Família usada abaixo do piso não publica.

### 4.1 Famílias de magnitude

| Família | Mecânica | Piso | Contraindicação |
|---|---|---|---|
| Recurso vezes multiplicador | recurso investido vezes coeficientes da seção 4.3 | Utilidade | nenhuma; é o padrão energético |
| Recurso direto | recurso gasto igual à magnitude | Utilidade | efeitos que já leem teste |
| Valor fixo | X sempre, independente de tudo | Utilidade | efeito que precisa diferenciar construções |
| Percentual do pool máximo do alvo | pool máximo vezes fator | Supremo | proibida abaixo do piso, ignora a construção do usuário |
| Percentual do pool atual do alvo | pool atual vezes fator | Supremo | inútil contra alvo desgastado |
| Recurso faltante do usuário | máximo menos atual, vezes fator | Moderado | nula no pico, exige desenho de risco |
| Diferencial de atributo | atributo do executor menos o do alvo, vezes escala | Moderado | nula entre pares, gera zero em duelo equilibrado |
| Pilhas | acumula por acerto ou turno e dispara no teto | Básico | combate curto anula a família |
| Condicional | base modesta, alta sob condição exógena | Básico | condição endógena reprova pela seção 5.4 |
| Margem vira efeito | margem do teste vezes escala | Básico | efeito sem teste |
| Crescente por turnos | base vezes um mais fator vezes turnos | Moderado | efeito instantâneo |
| Escala por distância | base mais distância vezes fator | Básico | efeito de contato |
| Atrasado | aplica agora e resolve em X turnos | Forte | efeito que precise resolver na hora |
| Execute | abaixo de um limiar de pool, multiplicador alto ou efeito total | Supremo | abertura de combate |
| Reflexão | fração do recebido devolvida ao remetente | Moderado | efeito sem remetente localizável |
| Reemissão | intercepta o que vinha e reencaminha a terceiro ponto | Forte | ver contrato abaixo |
| Absorção e redirecionamento | converte o recebido em recurso ou em saída própria | Forte | efeito sem tipo declarado |

**Contrato da Reemissão.** Família nova da v3. O efeito recebido é interceptado antes de resolver e reencaminhado a outro ponto à escolha do usuário, com magnitude e riders preservados, e o destino resolve a defesa dele normalmente. O registro declara três campos: o teto nominal de recurso interceptável, expresso como número absoluto derivado do teste ou do pool do usuário; a frequência, tipicamente uma vez por turno; e o requisito de âncora no destino quando houver. Reflexão devolve ao remetente e Reemissão escolhe terceiro, e as duas nunca coexistem no mesmo registro.

O valor fixo é transversal. Além de família pura, soma-se como componente base de qualquer outra, como piso de dano, mínimo de cura ou bônus fixo de buff.

### 4.2 Famílias de custo

| Família | Mecânica | Caráter |
|---|---|---|
| Fixo | X sempre | previsível |
| Variável livre | entre mínimo e teto, com o efeito escalando | decisão de investimento |
| Variável com teto por atributo | teto igual ao mínimo mais atributo vezes fator | portão duplo de pool e atributo |
| Manutenção fixa | ativação mais custo por turno constante | sustentado estável |
| Manutenção crescente | custo sobe a cada turno | força a interrupção natural |
| Escalonado por nível | degraus discretos | modos distintos |
| Cumulativo | cada uso seguinte custa mais | taxa a repetição |
| Diferido | paga depois, com consequência declarada no vencimento | empréstimo da força futura |
| Condicional | barato sob condição exógena | obriga preparação |
| Por alvo | base mais extra por alvo | área decidida no momento |
| Reflexivo | recupera parte sob condição de sucesso | premia o domínio |
| Recurso alternativo | paga em PV, PS ou medidor próprio | desgaste físico e sacrifício |
| Pool investido | pré-carrega um pool dedicado | formas com carga própria |
| Proporcional ao efeito | paga pelo impacto real produzido | auto-regulante |
| Refluxo | paga em graus de condição do sistema de status | preço que o corpo cobra, e não a reserva |

**Contrato do Refluxo.** Família nova da v3. O custo se expressa em graus de uma condição declarada do sistema de status do cenário, pagos além de qualquer custo em recurso. O registro declara o serviço prestado, o número de graus, a periodicidade, e se o pagamento é por alvo, por cena ou por uso. Refluxo não admite redução percentual, porque o preço é do corpo e não da eficiência.

### 4.3 A forma de dois termos [EXTENSÃO]

Para Dano e para qualquer efeito energético, a magnitude nasce de duas parcelas com origens independentes, somadas e depois mitigadas. O manual publica a forma e os slots; o cenário publica os coeficientes.

```
magnitude = (recurso investido × coef_conversão × coef_tipo)
          + (termo de maestria × coef_de_obra)
          − mitigação
```

| Slot | O que mede | Dono |
|---|---|---|
| recurso investido | quanto se gastou no ato | ficha do executor |
| coef_conversão | eficiência da forma de entrega, concentrada ou difusa | registro do efeito |
| coef_tipo | o que o tipo do efeito faz à conversão | catálogo de tipos do cenário |
| termo de maestria | o que a prática construída no domínio entrega por si | perícia do cenário |
| coef_de_obra | quanto aquela obra específica aproveita a maestria | registro do efeito |
| mitigação | o que o alvo desconta | ficha do alvo e sistema de defesa do cenário |

**Independência das parcelas [NÚCLEO].** O termo de maestria não lê o recurso investido, e o termo de conversão não lê a maestria. A separação é o motor de diferenciação de construções: quem tem maestria alta extrai mais por unidade de recurso, quem tem reserva alta extrai mais por acúmulo de investimento, e os dois chegam ao mesmo tier por caminhos distintos. Fundir as parcelas em um produto único apaga a diferença e reprova na validação por perfis.

**Forma do termo de maestria [EXTENSÃO].** O termo é não-linear no nível de maestria, tipicamente quadrático, e cresce apenas com progressão paga na economia. É por ele que qualquer bônus linear derivado do domínio se torna legítimo, conforme a regra de que bônus linear só nasce de motor não-linear.

**Regra de dono único.** O coeficiente de conversão é o dono exclusivo da eficiência por forma de entrega. Nenhuma outra camada, incluindo extras de área, desconta eficiência de magnitude. Extras de área governam custo e cobertura, e nada além disso.

**Tipagem do efeito [EXTENSÃO].** O tipo de um efeito energético define a mitigação aplicável e os riders de status que ele carrega. A tabela de tipos e os seus valores é física de um mundo específico e pertence ao cenário, sem herdeiro neste manual.

**Famílias que não leem recurso investido** usam o tipo apenas para mitigação e riders, e nunca para multiplicador.

---

## 5. Dimensões, como o efeito se comporta

Cada dimensão é um menu. A construção pesca a variação pelo caráter do poder, e não pelo que sai mais barato.

### 5.1 Menus

**Extras, que sobem o custo.** Área em cone, linha, raio ou todos os presentes; alcance estendido; duração estendida; perfuração; multi-alvo; teleguiado; automático; persistente; ricochete; seletivo; atravessa cobertura.

**Redutores, que descem o custo.** Carga lenta; funciona contra um tipo só; autoexposição; alcance de toque; uso único; exige componente; imprecisão; cancelável pelo alvo; exige preparação.

**Riders.** Aplica condição de status; drena recurso; empurra ou puxa; deixa marca; quebra guarda; acumula pilhas; cega; silencia; corrói mitigação; revela oculto.

**Ativação.** Ativo; passivo; manutenção fixa; manutenção crescente; reativo por gatilho; ritual com preparação; carregado.

**Duração.** Instantânea; fixa em turnos; escalável por recurso; por atributo do usuário; até condição de quebra; decrescente; permanente até remoção ativa.

**Recarga.** Sem espera; em turnos; uma vez por combate; por cena; por dia; por condição cumprida; progressiva.

**Gatilho.** De ativação, que só permite sob condição; de amplificação, que fortalece sob condição; de progressão, que muda ao acumular; de reação, que responde ao oponente; de ambiente; de ausência, que opera quando algo não está presente.

**Interação com camadas de defesa [EXTENSÃO].** Contornável normal; perfurante parcial, que ignora fração declarada de uma camada; perfurante total, com piso Forbidden; ignora a camada de resistência, entregando condição sem teste; anti-mitigação, que corrói a camada; refletível. Quais camadas de defesa existem é definição do cenário, e o manual declara apenas as relações possíveis com elas.

### 5.2 Eixo de Evitabilidade [EXTENSÃO]

Dimensão obrigatória de todo efeito ofensivo dirigido a alvo. Declara quão evitável o efeito é por construção, em cinco degraus, cada um com comportamento próprio e contrapartida.

| Degrau | Efeito sobre a esquiva do alvo | Comportamento próprio | Contrapartida |
|---|---|---|---|
| Telegrafado | facilita | quem gasta a reação esquivando fica fora de posição | eficiência de conversão elevada |
| Padrão | plena | nenhum | nenhuma |
| Veloz | dificulta | vantagem maior no primeiro uso contra cada alvo, perdida ao ser visto | custo elevado |
| Teleguiado | dificulta muito | persiste por um turno adicional se o alvo escapa | custo elevado e compra em XP |
| Inevitável | anula | apenas as camadas de mitigação respondem | condição estrutural externa obrigatória, piso Supremo |

O cenário registra os números de cada degrau e o nome do perfil que adota. O manual fixa a escada, a exigência de condição estrutural no topo e a regra de que caminhos de perícia e transcendências movem um efeito um degrau, como elevação categórica comprada com progressão.

**Modelo de acerto [EXTENSÃO].** Se o cenário resolve ataque por rolagem própria, por oposição, ou dispensa a rolagem tratando vantagem ofensiva como redução de esquiva, é decisão do cenário. O manual não presume modelo, e toda opção que fale em precisão se lê pelo eixo acima.

### 5.3 Resolução

Automático; oposto entre dois testes; resistido com o limiar comprimido pela seção 3.2; área sem teste; efeito parcial em falha. A escolha entra no campo Teste do contrato.

### 5.4 Contrato de condição [NÚCLEO]

Toda condição que ligue gatilho, redutor ou família condicional passa em dois testes.

**Exogeneidade.** O fato que liga a condição pertence ao estado do contexto, é propriedade da cena, do alvo, do material ou da restrição imposta, e é verificável antes do teste. Declaração livre do usuário não é condição, e gasto de recurso para ligar bônus também não.

**Falseabilidade.** Existe frequência real de cenas em que a condição é falsa.

Verificação: cinco usos típicos escritos, marcando em quais a condição estaria ligada. Menos de dois desligados reprova. Marcação que dependa do que o usuário decidiu fazer reprova. Condição reprovada se reescreve a partir de outro fato do contexto, e ajustar o enunciado da rejeitada mantém o defeito.

---

## 6. Composição

**Híbrido** é o poder que usa mais de uma categoria de efeito. Não constitui categoria nova. Resolve pela regra de efeitos ligados: custo igual ao efeito primário cheio somado a uma fração dos secundários, com o maior integral, cerca de 60% do segundo e cerca de 40% do terceiro.

Dreno de vida é Dano no alvo somado a Cura no usuário, ligados. Deslocamento ofensivo é Mobilidade somada a Dano. Efeito de dano que aplica uma condição é Dano com rider, e permanece uma categoria só. A distinção é firme: híbrido combina categorias, rider acopla condição a uma categoria.

**Composição com Construto.** Construto que ataca é plataforma somada a efeito acoplado, e não híbrido. O construto paga o motor da seção 3.4, e cada efeito acoplado paga o próprio registro. Fundir os dois num híbrido subfatura a plataforma.

**Arrays.** Poder com várias habilidades organiza-se em array. Avulso, cada habilidade independente. Alternado, habilidades que compartilham base e não disparam juntas, com desconto no conjunto. Ligado, habilidades que disparam juntas, com preço cheio. Dinâmico, intensidade distribuída entre habilidades no momento do uso. Modos, configurações trocáveis com troca declarada em ação.

---

## 7. Os dois custos

### 7.1 Custo de uso

```
custo de uso = custo-base da escala × (1 + extras − redutores) + efeitos ligados
```

O custo-base é o piso do tier. A família de custo da seção 4.2 governa o comportamento do pagamento ao longo do tempo. O resultado é sempre resolvido em número absoluto no registro, e o percentual existe apenas na construção.

### 7.2 Custo de aquisição [EXTENSÃO]

```
aquisição = custo da categoria × modulação do cenário × prêmio de patamar
```

A modulação do cenário é o slot onde cada mundo pluga a própria economia, afinidade, linhagem, natureza ou o que a economia daquele mundo declarar. Ela modula o preço e nunca limita a escala do que pode ser construído. Efeito no patamar do personagem paga normal, acima paga prêmio, abaixo recebe desconto. Array alternado desconta o conjunto.

---

## 8. Processo e validação

### 8.1 Decisão

Ler o conceito e nomear a fantasia central antes de qualquer número. Declarar a escala. Identificar a categoria ou categorias de efeito, e se houver mais de uma, tratar como híbrido. Escolher explicitamente a família de magnitude e a família de custo, conferindo o contrato de disponibilidade de cada uma. Declarar a tipagem quando o efeito for energético. Configurar as dimensões, incluindo o eixo de evitabilidade quando o efeito for ofensivo de alvo. Declarar o que o efeito lê da ficha.

### 8.2 Criação

Definir cada efeito pela régua da categoria, aplicar a família de cálculo, configurar as dimensões, compor se híbrido, calcular os dois custos, e escrever o contrato de oito campos com todos os números resolvidos.

### 8.3 Validação

**Escala.** O efeito move a fração certa do pool de referência para o tier declarado.

**Faixa.** Toda régua que leia teste foi substituída nos cinco pontos da faixa antes de publicar, e duas construções do mesmo nível diferem por mais de um ponto percentual.

**Perfis.** Simulação contra as Tabelas de Referência nos cinco perfis, Equilibrado, Tanque, Veloz, Conjurador e Frágil ou Suporte, na faixa do personagem.

**Ritmo.** Golpes para abate e usos por combate batem com o tier.

**Donos.** Nenhuma camada duplicada, nenhuma grandeza com duas fontes, nenhum multiplicador contado duas vezes.

**Composição.** Em híbridos, as famílias conversam sem realimentação circular.

**Porteiros.** Nenhum efeito existe apenas para autorizar o uso de um objeto.

**Custo.** Recurso e aquisição proporcionais ao efeito, com aftermath onde a escala exige.

---

## 9. Registro de pontos de extensão

A lista fechada do que cada cenário preenche. Pedido de comportamento que não caiba em nenhum destes entra na fila de errata como pedido de nova versão.

| Ponto | O que o cenário declara |
|---|---|
| Curva de recurso | reserva de referência por faixa e o Limite de Saída |
| Tipagem de efeito | catálogo de tipos, mitigação aplicável e riders |
| Coeficientes da forma de dois termos | conversão, tipo, forma do termo de maestria e obra |
| Camadas de defesa | quais existem e como cada uma responde |
| Eixo de evitabilidade | números de cada degrau e o nome do perfil adotado |
| Modelo de acerto | se há rolagem própria, oposição, ou vantagem como redução de esquiva |
| Modulação de aquisição | o fator econômico que o mundo aplica sobre o preço |
| Réguas de Percepção | os donos das três réguas obrigatórias |
| Sistema de status | condições, graus e a moeda que o Refluxo paga |
| Correspondência de escala | como as escalas deste manual mapeiam na nomenclatura de poder do mundo |

---

## 10. Registro de consumidores e erratas emitidas

### 10.1 Consumidores conhecidos

O manual tradutor de cada cenário é o único consumidor direto. Documentos de técnica, perícia, clã e poder leem o tradutor, e nunca este manual.

### 10.2 Erratas emitidas com a v3

Dirigidas ao manual tradutor do cenário calibrador, que hoje carrega correções tornadas desnecessárias.

A cláusula que substituía integralmente a dimensão de confiabilidade é revogada. A dimensão foi removida deste manual e o eixo de evitabilidade nasceu como ponto de extensão, de modo que o perfil do cenário passa a ser instância registrada.

A cláusula de tradução que lia toda opção de precisão como modificação de esquiva é revogada na parte de tradução e permanece como registro de instância do modelo de acerto.

A nota que retirava a eficiência por alvo da categoria Dano é revogada. A regra de dono único do coeficiente de conversão nasce aqui.

A restrição que proibia famílias de percentual de pool abaixo de um rank é revogada como correção e passa a ser lida do contrato de disponibilidade das famílias.

A seção de compressão de limiar do tradutor passa a consumir a regra de origem da seção 3.2 deste manual, preservando a cláusula de motor próprio.

A tabela de multiplicador por tipo elemental é removida sem herdeiro, e o catálogo de tipos passa a ser ponto de extensão.

O documento de construto do cenário calibrador permanece válido sem reemissão, ganhando apenas linha de conformidade declarando que consome a categoria Construto da seção 3.4, cujo motor foi abstraído do que aquele documento validou.

### 10.3 Registro de alterações

**v3.1.** Correção da seção 4.3. A v3 publicou a magnitude energética como produto único de quatro fatores, e o motor validado do cenário calibrador soma duas parcelas independentes, uma de conversão do recurso investido e outra de maestria construída. O produto único apaga a diferenciação entre construções de reserva alta e construções de maestria alta, que é intencional e está validada contra as âncoras canônicas daquele cenário. A forma passa a ser de dois termos, o coeficiente de obra passa a multiplicar o termo de maestria e não o de conversão, e o coeficiente de tipo ganha slot próprio na parcela de conversão. Alinhado também o nome do quarto degrau do eixo de evitabilidade ao termo já em uso rio abaixo.

**v3.** Reescrita integral sob auditoria de consumidores. Nasceram os três selos, a regra de fechamento e a interface por tradutor de cenário. O contrato de efeito de oito campos, a proibição de dificuldade arbitrada, a ancoragem em ficha e a doutrina de escala contínua contra categórica entraram como camada doutrinária. A escala ganhou coluna de destravamento e contrato mecânico no Transcendente, e perdeu o bônus plano de teste. As categorias passaram de treze para quatorze com a separação de Invocação e Construto, e cada uma passou a entregar motor ou dono. Nasceram o motor de resistência repatriado, o motor de confronto por escala, o motor de entidade em dois modos com a abolição do grau de ameaça, e o motor de construto abstraído. Mobilidade, Percepção e Espacial ganharam régua real por orçamento de degraus. Nasceram as famílias Reemissão e Refluxo, e todas as famílias ganharam contrato de disponibilidade. A dimensão de confiabilidade foi removida e substituída pelo eixo de evitabilidade. A forma multiplicativa virou forma com slots e a tabela de tipos migrou para o cenário. Nasceram o registro de pontos de extensão, o de consumidores e a fila de erratas emitidas.

---

## 11. Instruções para a IA

Leia o conceito e nomeie a fantasia central antes de qualquer número.

Declare a escala, e trate-a como orçamento e não como carimbo.

Identifique a categoria ou categorias, e use a régua e o motor da categoria correta. Se a categoria não tiver motor no texto, isso é falha do manual e vira errata, e não improviso.

Escolha família de magnitude e de custo explicitamente, e confira o contrato de disponibilidade antes de usar.

Declare o que o efeito lê da ficha, nomeando atributo, perícia e camada, e respeite a regra de uma grandeza com uma fonte.

Escolha a forma pela saída. Contínua lê o teste, categórica eleva categoria, e elevação de porte nunca se compra com percentual.

Ancore o neutro de cada régua contínua numa construção declarada, e substitua a faixa inteira de testes antes de publicar a fórmula.

Preencha os oito campos em todo efeito, com números resolvidos, e escreva a âncora de validação.

Nunca resolva por dificuldade escolhida na hora.

Distinga rider de categoria, e componha híbridos pela regra de efeitos ligados.

Respeite os selos. Regra de núcleo não se adapta por cenário, ponto de extensão se preenche, instância se cita.

Se o cenário precisar de comportamento que não caiba em ponto de extensão nenhum, registre o pedido na fila de errata deste manual em vez de escrever a correção no documento do cenário.

Valide contra as Tabelas de Referência nos cinco perfis e mostre a conta.

---

*Manual de Criação de Poderes v3.1. Camada de núcleo, fechada para modificação e aberta para extensão. Categoria define o quê, família define o quanto, dimensão define o como, composição combina, e cada número sai de uma régua com dono declarado.*
