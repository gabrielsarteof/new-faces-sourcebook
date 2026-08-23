---
id: naruto.system.chidori-family
title: "Linhagem do Chidori"
version: 1.6
layer: scenario
scenario: naruto
type: system
status: final
source-file: Linhagem_do_Chidori_v1.md
---

# Linhagem do Chidori

Documento dono do motor compartilhado pelas fichas da família Chidori. Ele publica a assinatura da raiz, a fraqueza estrutural e o preço que cada variação paga por se afastar dela, os eixos de derivação, a cadeia de dependência e o estado de autoria da linhagem inteira. As fichas individuais consomem este documento e não reescrevem nada dele.

---

## 1. Versões consumidas

Esta linhagem foi calibrada contra os documentos abaixo, nas versões vigentes no repositório no momento da publicação.

| Documento | Versão | O que esta linhagem lê dele |
|---|---|---|
| Manual de Criação de Poderes | 3.3 | as categorias, as famílias de cálculo e o contrato de efeito |
| Manual de Criação de Perícias | 7.1 | a estrutura de inclinação, caminho e transcendência que os requisitos citam |
| Manual de Criação de Jutsus | 3 | rank, faixas de XP, coeficientes, motor de dano, Velocidade da obra, Perfil de Evasão, aftermath e Janela de Canalização |
| Manual de Requisitos de Técnica | 2.1 | o portão de rank, a Régua de Exigência de Moldagem e a elevação de degrau |
| Norma de Produção de Compêndios | 2.5 | as camadas de acesso, a etiquetagem e o estado de autoria |
| Perícia de Raiton | 2 | as inclinações, os caminhos, o Fio Concentrado, o Fio Estendido e a condução por meio |
| Perícia de Controle de Chakra | 3.7 | o Índice de Desperdício, a Régua de Interface, a manutenção e a régua de PS |
| Compêndio de Raiton | 3.3 | as entradas publicadas, os requisitos e os preços estimados |
| Sistema Elemental | 9 | a Constante de Moldagem, a tabela de Assinatura por vetor, o rider de tendência e o Sōsai |
| Sistema de Efeitos de Status | 2.5 | a graduação da Paralisia Parcial e da Paralisia Total |
| Reserva de Chakra | 3.5 | o Limite de Saída por posição, a recuperação e os pools externos |
| Tabelas de Referência de Personagens | 1 | os pares de validação Elite e Especial |
| Naturezas Avançadas | 8 | a camada Kyōka com os dois eixos, o multiplicador do Shiden e o do Enton |
| Mangekyō Sharingan | 1 | o medidor de desgaste, os custos do olho e a regra de trunfo |
| Compêndio de Katon | 5.1 | a entrada do Amaterasu e o comportamento da chama negra |
| Compêndio de Fūinjutsu | 1.1 | a entrada do Juinjutsu de Orochimaru |
| Template de Documento de Técnica | 4 | o contrato de campos das fichas, com vetor, grau, riders, Velocidade e posição elemental |

O Manual de Criação de Jutsus v3 declara consumir o Manual de Criação de Poderes v3.3, e a defasagem que esta seção registrava fechou.

O termo Grau de Ameaça não tem dono no corpus. A auditoria publicada no Sistema dos Oito Portões v1.1 registra que ele nunca existiu por extenso e que a régua que ocupa aquele lugar é a faixa das Tabelas de Referência de Personagens. Esta linhagem lê a faixa e não a sigla.

---

## 2. A assinatura da raiz

O Chidori é a concentração de chakra de Raio em ponto único até densidade perfurante, entregue por contato ao final de um deslocamento linear em velocidade máxima. Três propriedades formam a assinatura, e toda ficha da linhagem declara qual delas conserva e qual delas cede.

| Propriedade da raiz | O que ela é | Onde ela vive na mecânica |
|---|---|---|
| Concentração em ponto único | a densidade que perfura por superfície mínima de contato | coeficiente de entrega 0,20 e perfuração de Absorção pelo Fio Concentrado |
| Entrega por contato | o efeito se resolve onde o corpo do executante alcança | alcance corpo a corpo e leitura de curto alcance do caminho Ponta |
| Deslocamento linear | o avanço em linha reta é o que põe a mão no alvo | janela de contra-ataque por visão de túnel |

As três nascem juntas e caem juntas. Uma variação que abandone o deslocamento abandona junto a concentração que só a proximidade sustenta, e é essa amarração que impede a família de produzir uma entrada que perfure como o Chidori sem correr o risco do Chidori.

---

## 3. A fraqueza estrutural e o contrato de troca

A fraqueza declarada da raiz é a visão de túnel. O avanço em linha reta na velocidade máxima do corpo estreita o campo perceptivo do executante e suprime a leitura periférica, e a exposição resultante é resolvida como janela de contra-ataque com ignora-esquiva contra o próprio usuário. A percepção ampliada do Sharingan registra o campo inteiro independentemente da velocidade do portador e revoga a janela por completo.

A fraqueza pertence ao deslocamento e não ao elemento. Toda variação que dispense o avanço fica livre dela por construção, e nenhuma dispensa é concedida por decreto.

**O contrato da linhagem.** Quem larga a investida larga a perfuração.

```
entrega em contato ou até 6 metros  →  perfuração de Absorção pelo Fio Concentrado
entrega acima de 6 metros           →  Absorção do alvo aplicada integralmente
```

A régua de 6 metros é o curto alcance da Perícia de Raiton a partir do LV2, e a leitura exige o caminho Ponta possuído. A transcendência Raio Seco revoga o contrato inteiro, e é a única compra do sistema que devolve perfuração a uma forma disparada de longe.

Uma derivação que não consiga cumprir nem a assinatura nem o contrato de troca não pertence a esta família. A Seção 8 registra as entradas nessa condição.

---

## 4. A base compartilhada

Toda ficha da linhagem herda os valores abaixo e declara apenas o que diverge deles.

| Campo herdado | Valor | Origem |
|---|---|---|
| Natureza | Raiton | Sistema Elemental |
| mult_Tipo | lido do vetor que cada ficha declara, e não da natureza | Sistema Elemental, Constante de Moldagem e tabela de Assinatura |
| coef_técnica | 2,0 | Manual de Criação de Jutsus, Seção 5.3 |
| Degrau de moldagem | Refinada, 71 | Manual de Requisitos de Técnica, Seção 3.2 |
| Rider | Paralisia Parcial | Sistema Elemental, rider padrão do Tipo Elétrico |
| Selos de referência | 3 | Perícia de Controle de Chakra, Régua de Interface |
| Assinatura selada | admitida, com Concisão ou interface 169 | Perícia de Controle de Chakra, Régua de Interface |

Duas fichas divergem do coeficiente técnico herdado e declaram a divergência na própria entrada. O Chidori Nagashi opera em 1,0, porque a difusão não depende da moldagem para existir. O Chidori Senbon opera em 1,5, porque a fragmentação distribui o refinamento por dezenas de formas pequenas, e é dessa divergência que sai o degrau Alta que o Compêndio de Raiton publica para ele.

O Raikiri conserva o coeficiente 2,0 e mesmo assim cobra o degrau Absoluto. A elevação vem da Seção 4 do Manual de Requisitos de Técnica, por tolerância zero a excesso de volume, e não de um coeficiente maior. A leitura reconcilia a tabela do Manual de Criação de Jutsus, que lista Chidori e Raikiri juntos em 2,0, com o Compêndio de Raiton, que exige Moldagem Absoluta da entrada.

O coeficiente herdado alimenta o peso da maestria no motor de dano, e o peso é publicado uma única vez aqui.

```
w = coef_técnica ÷ 2
M = 1 + w × (P − P_ref) ÷ P_ref          piso de M: 0,5
```

| coef_técnica | w | M com P 26 abaixo da referência | M na referência | M com P 32 acima |
|---|---|---|---|---|
| 2,0 | 1,00 | 0,82 | 1,00 | 1,22 |
| 1,5 | 0,75 | 0,87 | 1,00 | 1,16 |
| 1,0 | 0,50 | 0,91 | 1,00 | 1,11 |

A tabela lê o P_ref de 148 do rank A, e as duas fichas de rank S leem o de 180. O Fator de Moldagem somado que esta seção publicava saiu com a troca de forma do motor: a maestria passou a escalar a base inteira em vez de contribuir com um termo ao lado dela.

---

## 5. A curva de custo

A escada de RC nominal guarda proporção declarada contra a raiz, e é ela que governa qualquer recalibragem futura.

A RC nominal publicada é sempre a **RC limpa**, medida antes de qualquer sobretaxa de Perfil de Evasão. A coluna anterior carregava a sobretaxa do degrau Veloz embutida em cinco das sete entradas, e o degrau saiu da escada quando a velocidade virou grandeza própria com dono. A sobretaxa deixa de incidir, e os valores abaixo são os limpos.

A RC limpa é grandeza publicada em si e não resíduo de conta, e por isso ela é redonda como toda outra RC do corpus. A divisão pela sobretaxa raramente fecha em múltiplo de cinquenta, e o valor exato da divisão se arredonda para o múltiplo de cinquenta mais próximo, sempre para cima quando arredondar para baixo derrubaria a entrega abaixo do piso do rank.

| Ficha | Rank | RC limpa | Custo mínimo | Proporção contra a raiz | Custo de XP |
|---|---|---|---|---|---|
| Chidori | A | 750 | 250 | 1,00 | 8.750 |
| Chidori Katana | A | 750 | 250 | 1,00 | 6.533 |
| Chidori Nagashi | A | 800 | 267 | 1,07 | 4.900 |
| Chidori Senbon | A | 800 | 267 | 1,07 | 4.000 |
| Chidori Eisō | A | 800 | 267 | 1,07 | 7.467 |
| Raikiri | S | 1.500 | 500 | 2,00 | 12.143 |
| Takemikazuchi | S | 1.550 | 217 | 2,07 | 22.143 |

As três remodelagens tinham RC exata de 782,6 e publicam 800. O Takemikazuchi tinha 652,2 na parcela de reserva e publica 650, somados aos 900 do olho. O Raikiri publica 1.500 direto, valor decidido por hierarquia do Manual de Criação de Jutsus sobre a escada da família, sem passar pelo arredondamento. O Chidori e o Chidori Katana ficam intocados: a raiz nunca é tocada por esta errata, e o Katana já operava em Perfil Padrão, sem sobretaxa embutida para retirar.

Alterar a raiz obriga a percorrer a coluna inteira, porque a proporção é o que mantém a distância entre os degraus. A raiz permanece intocada em 750, e é por isso que a limpeza da coluna não move a escada inteira.

O custo de XP não acompanha a RC. A posição dentro da faixa do rank se lê da entrega contra o par do rank, medida no executor de referência, e o modificador de coeficiente técnico paga o peso da maestria fora da posição. A leitura por volume de reserva, que precificava a linhagem inteira antes, é a que punha a raiz junto ao piso do rank A entregando mais da metade do par, e ela deixa de valer.

O Chidori conserva 8.750 por ser uma das três âncoras de calibração do sistema, escolhidas para não se mover porque é contra elas que o modificador foi aferido. As demais entradas são corpus normal e se corrigem. Quem já comprou não paga diferença nem recebe reembolso, e o preço publicado daqui em diante é o novo.

As três remodelagens compartilham RC, custo mínimo e proporção, e divergem no preço porque divergem no coeficiente técnico. A fragmentação do Senbon e a difusão do Nagashi aproveitam menos refinamento que a haste do Eisō, e o modificador cobra essa diferença onde ela existe.

Três entradas ocupam a mesma RC limpa de 800, e a coincidência é estrutural. Irradiar a reunião pelo corpo, fragmentá-la em agulhas e alongá-la em haste são remodelagens do mesmo volume. A escolha entre elas continua sendo de eixo, e o preço agora as separa pelo quanto cada uma aproveita a moldagem. O Chidori Katana fica um degrau abaixo delas porque não remodela nada: o volume é o mesmo da raiz e a lâmina empresta a forma que a moldagem teria de produzir.

O Raikiri é o dobro exato da reunião fechado sobre a mesma superfície, e a proporção de 2,00 é o que sobra quando a sobretaxa sai. A proporção anterior de 2,40 media o dobro somado à sobretaxa, e ela media duas coisas ao mesmo tempo. Ele custa 12.143, bem abaixo do Kirin, porque entrega 70% do par contra os 65% do piso de rank S e o coeficiente técnico dele fica abaixo do padrão daquele rank. A escolha entre os dois deixou de ser de orçamento equivalente.

Os custos de XP não se movem, porque o preço de ficha publicada não retroage sobre quem já pagou e a apuração de cada entrada segue o que a Seção 4.1.1 do Manual de Jutsus fixou.

O Takemikazuchi é a única entrada da linhagem cujo custo mínimo não é a terça parte da RC nominal. A parcela de 900 vem do olho e não da reserva, e a terça parte incide apenas sobre os 650 que o executante paga, na mesma via que o Kirin já usa com a tempestade. O freio dessa entrada nunca foi o chakra, e sim o medidor do Mangekyō.

---

## 6. Os eixos de derivação

Cada entrada da linhagem move um eixo e apenas um. A tabela é o contrato da família, e ficha nova que não consiga nomear um eixo livre não entra.

| Ficha | Eixo movido | coef_entrega | Vetor | mult_Tipo | Perfil de Evasão | Investida | Perfuração |
|---|---|---|---|---|---|---|---|
| Chidori | base, ponto único entregue por investida | 0,20 | Penetração VI | 1,40 | Padrão | sim | integral |
| Raikiri | custo e precisão, densidade dobrada sem carga | 0,20 | Penetração VI | 1,40 | Padrão | sim | integral |
| Chidori Katana | entrega, da mão para o condutor empunhado | 0,16 | Corte | 1,40 | Padrão | não | integral |
| Chidori Nagashi | forma, de ponto para área irradiada do corpo | 0,12 | Energia elétrica | 1,75 | Inevitável | não | nenhuma |
| Chidori Senbon | forma, de ponto para projéteis fragmentados | 0,13 | Penetração | 1,40 | Padrão | não | nenhuma |
| Chidori Eisō | alcance, de contato para haste dirigida | 0,16 | Penetração | 1,40 | Padrão | não | por distância |
| Takemikazuchi | persistência, do golpe instantâneo para a marca que continua queimando | 0,20 | Penetração VI | 1,40 | Padrão | sim | integral |

**O vetor é propriedade da obra e não se herda dentro da família.** A Assinatura se lê dele, e é por isso que a linhagem resolve em dois multiplicadores diferentes. As entradas que concentram a corrente num ponto ou num fio entregam Penetração, cuja Assinatura vale 1,00, e resolvem em 1,40. O Chidori Nagashi irradia a corrente pelo corpo inteiro sem concentrá-la, entrega Energia elétrica, e é a única da família que conserva o 1,75. O Chidori Katana entrega Corte, cuja Assinatura também vale 1,00.

O valor de 1,75 que a família publicava em bloco vinha de ler a Assinatura do elemento em vez do vetor, leitura que o Sistema Elemental já não sustentava desde a v8. A correção derruba o dano das entradas de Penetração em vinte por cento e não toca o Chidori Nagashi.

O grau da escada de Penetração está declarado onde a ficha o fixou. O Chidori Senbon e o Chidori Eisō ainda não declaram grau próprio, e a conferência deles pertence ao repasse do corpus.

O degrau Veloz saiu da escada de Perfil de Evasão, e as entradas que o carregavam passam a Padrão. A dificuldade de sair da frente delas vem da Velocidade da obra, celeridade 150 do Raiton, que é grandeza própria com dono e enfrenta a esquiva no teste de conexão.

O Takemikazuchi acrescentou um quinto eixo à grade que a linhagem operava. Os quatro primeiros, forma, alcance, entrega e a troca entre dano bruto e controle, descrevem o que a técnica faz no instante do golpe. A persistência descreve o que ela deixa depois dele, e nenhuma outra entrada da família ocupava esse espaço. O eixo fica declarado aqui para que uma sexta ficha não o reivindique sem ver que ele já tem dono.

A grade de cobertura completa, com as células ocupadas e as vazias, está na Seção 8.

---

## 7. A decisão de arquitetura

**Decisão: árvore com o Chidori como pré-requisito obrigatório e destravamento em cadeia. Fichas separadas, um eixo por ficha, motor compartilhado neste documento.**

Três razões, em ordem de peso.

**O repositório já decidiu.** O Compêndio de Raiton v3.3 publica Chidori Nagashi, Chidori Eisō e Chidori Senbon na camada Requisito Mecânico com o Chidori na linha de requisitos, e publica o Raikiri na camada Requisito de Segurança com o mesmo requisito. A ficha do Chidori Nagashi v2 declara "Chidori adquirido" no bloco de acesso, e a ficha do Chidori v4 declara na Progressão por Maestria quais caminhos abrem quais variações. A Linhagem do Rasengan v1 cita esta família como o precedente que ela seguiu. Tratar as variações como compras avulsas contradiria quatro documentos publicados de uma vez.

**A autoria exige a cadeia.** A raiz está em Autoria Aberta e ninguém no mundo a completou. A ficha do Chidori declara que toda a linhagem de variações passa a existir a partir do momento em que a raiz ganha autor. Sem cadeia dura, uma variação poderia ser comprada antes de existir a técnica de que ela é a remodelagem, e o portão de autoria deixaria de valer.

**A cadeia é o que precifica a família corretamente.** Uma variação isolada custa entre 4.000 e 22.143 de XP, valores que um jounin sustenta como assinatura única. O que a árvore cobra é a soma, e é ela que faz do especialista em Chidori uma escolha de carreira e não um item de lista de compras.

### Diagrama de dependências

```
Chidori  (raiz, Autoria Aberta, 8.750)
├── Chidori Katana      exige caminho Ponta e arma branca empunhada
├── Chidori Nagashi     exige caminho Arco
├── Chidori Senbon      não exige caminho
├── Chidori Eisō        exige caminho Lança
├── Takemikazuchi       exige Raiton LV6, caminho Ponta, Amaterasu e Enton LV6
└── Raikiri             exige Raiton LV6, Moldagem Absoluta e caminho Ponta

Kirin   (fora da árvore, raiz própria, Autoria Aberta)
Shiden  (fora da árvore, portão de Kyōka)
```

A árvore tem um único nível. Nenhuma variação é pré-requisito de outra, porque todas remodelam a mesma reunião de carga e nenhuma delas é degrau intermediário de outra.

### Custos acumulados

O valor da coluna acumulada inclui a raiz.

| Aquisição | XP da entrada | XP acumulado |
|---|---|---|
| Chidori | 8.750 | 8.750 |
| Chidori mais Chidori Senbon | 4.000 | 12.750 |
| Chidori mais Chidori Nagashi | 4.900 | 13.650 |
| Chidori mais Chidori Katana | 6.533 | 15.283 |
| Chidori mais Chidori Eisō | 7.467 | 16.217 |
| Chidori mais Raikiri | 12.143 | 20.893 |
| Chidori mais Takemikazuchi | 22.143 | 30.893 |
| Chidori mais as três remodelagens | 16.367 | 25.117 |
| A árvore inteira | 57.186 | 65.936 |

Nenhuma entrada isolada alcança o custo de uma disciplina elemental completa levada ao LV6 em posição de Afinidade, o que mantém a família dentro da hierarquia declarada pelo Manual de Criação de Jutsus, em que a técnica custa menos que a perícia que a gateia. A árvore inteira custa cerca de uma vez e meia aquela disciplina e consome perto de dois quintos do orçamento de um jounin típico, e é essa soma que faz do especialista em Chidori uma escolha de carreira em vez de um item de lista de compras. Na prática nenhum personagem a fecha, porque os dois ramos de rank S cobram portões incompatíveis entre si na mesma ficha.

### Posição do Kirin e do Shiden

O Kirin não deriva do Chidori e não o exige. Ele não concentra corrente em ponto único, não entrega por contato, não depende de deslocamento e não gera a própria carga. A ficha publicada o posiciona na inclinação Corrente pelo caminho Tempestade, enquanto a raiz da família vive na inclinação Relâmpago pelo caminho Ponta. Ele é parente de compêndio e não de linhagem, e a decisão de arquitetura o preserva exatamente onde ele já está.

O Shiden também fica fora, por três razões independentes: corre por natureza intensificada e não por Raiton comum, dispensa investida e contato, e o portão dele são as duas portas de aquisição da Kyōka, a Centelha na criação de personagem e o treino em jogo por Transmissão ou por Descoberta, e nenhuma delas passa pela autoria da raiz. A ficha declara a posição na própria entrada.

---

## 8. Grade de cobertura

A grade cruza os cinco eixos declarados na Seção 6. Cada célula registra a entrada canônica que a ocupa, ou a ausência dela.

### Forma

| Forma | Entrada | Situação |
|---|---|---|
| concentrada em ponto | Chidori, Raikiri, Takemikazuchi | ficha publicada |
| dispersa em área ao redor do corpo | Chidori Nagashi | ficha publicada |
| fragmentada em projéteis | Chidori Senbon | ficha publicada |
| alongada em lâmina ou lança | Chidori Eisō | ficha publicada |
| conduzida por arma física | Chidori Katana | ficha publicada |

### Alcance

| Alcance | Entrada | Situação |
|---|---|---|
| contato | Chidori, Raikiri, Chidori Katana, Takemikazuchi | ficha publicada |
| curto estendido | Chidori Nagashi, Chidori Katana em Modo de Fio Estendido | ficha publicada |
| médio | Chidori Senbon, Chidori Eisō | ficha publicada |
| atmosférico | nenhuma entrada da família | **lacuna declarada** |

### Entrega

| Entrega | Entrada | Situação |
|---|---|---|
| investida corporal | Chidori, Raikiri, Takemikazuchi | ficha publicada |
| emissão estática | Chidori Nagashi, Chidori Eisō | ficha publicada |
| arremesso | Chidori Senbon | ficha publicada |
| condução por material condutor | Chidori Katana, Chidori Nagashi por condutor em contato | ficha publicada |

### Custo e precisão

| Troca | Entrada | Situação |
|---|---|---|
| dano bruto por controle | Chidori Senbon, com teto de rider em Grave e captura viva | ficha publicada |
| controle por dano bruto | Raikiri, com precisão máxima e proibição de carga | ficha publicada |
| dano por cobertura simultânea | Chidori Nagashi | ficha publicada |
| dano por segurança do executante | Chidori Eisō, que troca perfuração por ausência de janela | ficha publicada |

### Persistência

| Persistência | Entrada | Situação |
|---|---|---|
| nenhuma, o efeito se resolve no instante | Chidori, Raikiri, Chidori Senbon, Chidori Eisō, Chidori Nagashi | ficha publicada |
| sustentada enquanto o executante paga | Chidori Katana | ficha publicada |
| marca no alvo que se alimenta sozinha | Takemikazuchi | ficha publicada |
| zona de terreno que persiste após a execução | nenhuma entrada da família | **lacuna declarada** |

### Lacunas declaradas

**Alcance atmosférico dentro da família.** A célula existe na grade e nenhuma variação canônica do Chidori a ocupa. O espaço está tomado pelo Kirin, que alcança o mesmo resultado por outra raiz, e a norma da linhagem proíbe inventar entrada para preencher célula vazia.

**Elevação de escopo para campo por forma própria.** Nenhuma variação canônica da família eleva a entrega de área para campo sem depender de meio condutor externo. O espaço está tomado pelo Shiden, que fica fora da linhagem.

### Nomes canônicos absorvidos por entrada existente

| Nome canônico | Onde ele vive |
|---|---|
| Chidori Kōken, 千鳥光剣 | Modo de Fio Estendido da ficha do Chidori Katana |
| Raikiri conduzido por kunai | aplicação da mesma condução por condutor empunhado, coberta pelo Chidori Katana |
| Modo de duas lâminas do Raikiri | Modo de Duas Mãos da ficha do Raikiri |
| Chidori sob Selo Amaldiçoado, incluindo o rótulo de Chidori Ônix | a ficha do Chidori executada sob a amplificação que o Juinjutsu de Orochimaru já publica |

### O Chidori sob amplificação externa

A corrente escurecida que o executante marcado produz não é técnica separada. O Juinjutsu de Orochimaru, publicado no Compêndio de Fūinjutsu em rank S, declara que a marca multiplica por dez o chakra disponível e amplifica o que o receptor já sabia fazer, e a ficha do Chidori executada sob esse estado é exatamente o que a obra mostra. Abrir entrada própria criaria uma segunda dona para uma amplificação que já tem dono, e a coloração alterada é efeito de cena sem consequência de régua.

A interação, porém, é violenta e precisa ser lida antes da mesa. A carga adicional do Chidori escala por Limite de Saída, e o Limite de Saída é um quinto da reserva. Uma reserva multiplicada por dez multiplica por dez o que cada turno de carga acrescenta à RC nominal, e três turnos de carga sob a marca colocam a técnica muito acima do teto do próprio rank. A linhagem não corrige isso por conta própria, porque o multiplicador pertence ao Juinjutsu, e a tensão fica registrada na fila de errata.

### Nomes canônicos com dono fora desta linhagem

| Nome canônico | Dono declarado | Razão |
|---|---|---|
| Kamui Raikiri, 神威雷切 | Manual do Mangekyō Sharingan | a intangibilidade e o transporte dimensional pertencem ao dōjutsu, e a entrada é o Raikiri servindo de veículo |
| Susanoo com Chidori | Ficha do Susanoo | a escala é do construto e não da técnica conduzida por ele |
| Raiden, Transmissão de Raio | Compêndio de Raiton, rank B | a entrada publicada descreve a forma genérica de dois executantes, e a origem canônica em duas execuções de Raikiri fica registrada na fila de errata |
| Raijū Tsuiga, Presa Rastreadora do Raio | Compêndio de Raiton, rank B | corrente projetada e teleguiada por cordão, sem concentração em ponto nem contato |

### Nomes sem cânone de obra

As variações registradas apenas em videogame ficam fora do sistema por decisão declarada. A lista levantada cobre Chidori Shinsō, Raikiri Niren Totsu, Raikiri Issen, Raikiri Jin e Susanoo Kamui Raikiri. Nenhuma delas aparece no mangá, e a etiqueta que caberia a elas não existe na Norma de Produção de Compêndios.

Os rótulos Onyx Chidori e Curse Mark Chidori saíram desta lista. O fenômeno que eles nomeiam existe no mangá e tem dono publicado, conforme o bloco de amplificação externa acima. O que é artefato de videogame é a separação dele em técnicas distintas, e não a corrente escurecida em si.

O termo Raikiri Shinden não corresponde a nenhuma entrada canônica. A pesquisa não encontrou técnica, agrupamento de wiki nem conteúdo de romance com esse nome, e a leitura correta do pedido é o Shiden, o relâmpago púrpura registrado no Compêndio de Raiton e publicado em ficha própria nesta entrega.

---

## 9. Fronteira com outros documentos

O dano, o rank, o custo de XP, o Perfil de Evasão, o aftermath e a Janela de Canalização pertencem ao Manual de Criação de Jutsus. O degrau de moldagem, a elevação de degrau e o requisito de caminho pertencem ao Manual de Requisitos de Técnica. A perfuração de Absorção, o alcance estendido, a condução por meio e o salto entre condutores pertencem à Perícia de Raiton. As réguas de desperdício, interface, manutenção e colapso pertencem à Perícia de Controle de Chakra. A Constante de Moldagem, a Assinatura, o rider e o Sōsai pertencem ao Sistema Elemental. Os graus e as durações de status pertencem ao Sistema de Efeitos de Status. A camada Kyōka pertence a Naturezas Avançadas.

A camada de acesso e o estado de autoria pertencem à Norma de Produção de Compêndios, e este documento apenas declara qual instância a linhagem ocupa.

A correção da visão de túnel pelo Sharingan tem dono nas fichas desta família e no Compêndio de Raiton. O Manual do Sharingan não publica regra com esse nome, e a leitura permanece local, o que fica registrado na fila de errata.

---

## 10. Estado de autoria da linhagem

A raiz nasce em **Assinatura Pessoal · Autoria Aberta**. Comprimir corrente na palma até perfurar um corpo com a mão nua é invenção, e ninguém no mundo a completou.

A linhagem inteira permanece inacessível enquanto o Chidori não tiver autor. O primeiro personagem que cumprir os requisitos e concluir o processo de criação de técnica torna-se o criador, a entrada passa a Registrada no Compêndio de Raiton, e as seis variações registradas abaixo dela passam a existir a partir daquele momento, cada uma ainda sujeita ao próprio requisito.

Nenhum personagem inicial adquire qualquer ficha desta linhagem na criação. Portador de Sharingan copia as entradas pelas regras da Norma de Produção de Compêndios, e a cópia reproduz a moldagem sem conceder direito reconhecido sobre a autoria.

---

## 11. Registro de conformidade e fila de errata

**Conformidade.** Os valores herdados da Seção 4 conferem contra a tabela de coeficientes da Seção 5.3 do Manual de Criação de Jutsus, contra a Régua de Exigência de Moldagem e contra a Régua de Interface. As sete fichas fecham o contrato de efeito do Manual de Criação de Poderes e o contrato de campos do Template de Documento de Técnica.

**Fila de errata.**

**Aplicadas, no Compêndio de Raiton v3.4.** O preço do Cortador de Raio subiu de 23.000, apurado pela matriz de estimativa da Seção 4.1.3, para 23.600, apurado sobre a RC nominal de 1.800 pela regra que a própria seção declara. A correção vale dali em diante e não retroage sobre quem já pagou. A entrada do Chidori Katana, que a Seção 8 registrava como célula ocupada da grade sem catálogo, foi publicada como Sabre de Mil Pássaros. A entrada do Takemikazuchi também entrou, na mesma versão.

Compêndio de Raiton, entrada da Transmissão de Raio: a entrada publica rank B, acesso por Requisito Mecânico com segundo usuário ou clone, e descreve a corrente estendida entre dois executantes. A origem canônica do efeito é a execução simultânea de duas técnicas de Raikiri ligadas por um cordão, o que a colocaria em outro rank e sob outro pré-requisito. A entrada publicada é fato consumado e não é recalibrada aqui. A divergência fica registrada para decisão futura de Gabriel.

Compêndio de Katon, entrada do Amaterasu, e Compêndio de Enton: o Amaterasu está publicado como entrada de catálogo acima de rank S, com o preço remetido ao documento do Mangekyō Sharingan, e não possui ficha individual. O Compêndio de Enton é citado pela Perícia de Katon e não existe no corpus. A ficha do Takemikazuchi consome os dois pontos, a duração da chama negra e a recusa de extinção por meio comum, pela descrição publicada no catálogo, e declara essa dependência na própria entrada. Publicada a ficha do Amaterasu, o bloco de Persistência do Takemikazuchi passa a ler dela.

Compêndio de Fūinjutsu, entrada do Juinjutsu de Orochimaru: a multiplicação por dez da reserva interage com a carga adicional do Chidori de forma que ultrapassa o teto do rank por larga margem, porque a carga escala por Limite de Saída e o Limite de Saída é fração da reserva. A entrada também remete o preço ao documento do aplicador, que não existe no corpus. As duas pendências pertencem àquele catálogo e não a esta linhagem, e a decisão é de Gabriel.

Manual de Criação de Jutsus, Seção 1: a coluna de usos por combate declara 1 a 3 para o rank A e 1 para o rank S, e nenhuma ficha desta família honra a faixa. O Chidori entrega 8 usos com reserva de 2.211, as remodelagens de 900 entregam 7, e o Raikiri entrega 5 com reserva de 3.500 antes do aftermath. A divergência é sistêmica e anterior a esta linhagem, e já consta da fila da Linhagem do Rasengan. O conserto pertence à coluna e não a nenhuma ficha isolada.

Manual de Criação de Jutsus: o documento declara consumir o Manual de Criação de Poderes v3.2, e o núcleo está em v3.3. Nenhuma régua usada por esta linhagem muda com a diferença, e a atualização da declaração é dívida de forma.

Manual do Sharingan: o documento não publica regra que trate da correção de defeito de técnica alheia por percepção ampliada. A revogação da janela de contra-ataque vive nas fichas desta família e no Compêndio de Raiton, e a camada perceptiva do dōjutsu não a reconhece. Enquanto a regra não subir para o documento do olho, ela permanece local e cada ficha a declara por conta própria.

Perícia de Raiton: o curto alcance de 6 metros que o contrato da Seção 3 usa como fronteira da perfuração é lido do baseline do LV2. A perícia não publica a expressão "curto alcance" como termo definido, e o contrato desta linhagem passa a ser o primeiro consumidor dela. A definição merece subir para a perícia.

INDEX.md: o arquivo carrega um marcador de conflito de merge na linha 10. A geração pela ferramenta resolve, e o registro fica aqui para que a próxima passada não o propague.

---

## 12. Instruções para a IA

Leia o eixo antes do número. Ficha nova da linhagem declara qual eixo move, confere a tabela da Seção 6, e desiste se o eixo já tiver dono.

Herde os valores da Seção 4 sem republicar a derivação deles. Declare apenas o que diverge, e justifique a divergência na própria ficha.

Aplique o contrato da Seção 3 em toda ficha nova. Quem larga a investida larga a perfuração, e a única revogação legítima é a transcendência Raio Seco.

Nunca conceda ausência de janela de contra-ataque por decreto. A ausência decorre da forma da técnica, e a ficha declara por que o avanço não existe nela.

Use elevação categórica para escopo, e nunca percentual sobre o dano de alvo único.

Nunca precifique o dōjutsu dentro da ficha. O Sharingan substitui leitura automática por declaração do jogador e revoga a janela, e não move dano, custo nem alcance.

Não invente entrada para preencher célula vazia da grade. Registre a lacuna na Seção 8 e pare.

Toda entrada nova declara a distância da entrega, porque é ela que decide a perfuração.

---

*Linhagem do Chidori v1.1. Uma assinatura de três propriedades que caem juntas, o contrato de que quem larga a investida larga a perfuração, um eixo por variação, coeficiente técnico 2,0 como herança e degrau Refinado como portão comum, árvore de um nível com a raiz como pré-requisito obrigatório, cinco eixos com dono declarado, e o Kirin e o Shiden declarados fora dela.*
