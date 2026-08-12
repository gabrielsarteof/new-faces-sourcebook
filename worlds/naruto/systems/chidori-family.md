---
id: naruto.system.chidori-family
title: "Linhagem do Chidori"
version: 1
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
| Manual de Criação de Jutsus | 2.8 | rank, faixas de XP, coeficientes, Perfil de Evasão, aftermath e Janela de Canalização |
| Manual de Requisitos de Técnica | 2.1 | o portão de rank, a Régua de Exigência de Moldagem e a elevação de degrau |
| Norma de Produção de Compêndios | 2.5 | as camadas de acesso, a etiquetagem e o estado de autoria |
| Perícia de Raiton | 2 | as inclinações, os caminhos, o Fio Concentrado, o Fio Estendido e a condução por meio |
| Perícia de Controle de Chakra | 3.3 | o Índice de Desperdício, a Régua de Interface, a manutenção e a régua de PS |
| Compêndio de Raiton | 3.3 | as entradas publicadas, os requisitos e os preços estimados |
| Sistema Elemental | 7 | o multiplicador do Tipo Elétrico, o rider padrão e o Sōsai |
| Sistema de Efeitos de Status | 2.3 | a graduação da Paralisia Parcial e da Paralisia Total |
| Reserva de Chakra | 3.2 | o Limite de Saída, a recuperação e os pools externos |
| Tabelas de Referência de Personagens | 1 | os pares de validação Elite e Especial |
| Naturezas Avançadas | 5.1 | a camada Kyōka, o multiplicador do Shiden e o do Enton |
| Mangekyō Sharingan | 1 | o medidor de desgaste, os custos do olho e a regra de trunfo |
| Compêndio de Katon | 5.1 | a entrada do Amaterasu e o comportamento da chama negra |
| Compêndio de Fūinjutsu | 1.1 | a entrada do Juinjutsu de Orochimaru |
| Template de Documento de Técnica | 3.3 | o contrato de campos das fichas |

O Manual de Criação de Jutsus v2.8 declara consumir o Manual de Criação de Poderes v3.2, e o núcleo já se encontra em v3.3. A defasagem é de uma versão menor e não toca nenhuma régua que esta linhagem use. Fica registrada na fila de errata.

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
| Natureza | Raiton, com mult_Tipo 1,75 | Sistema Elemental, tabela de Tipo Elemental |
| coef_técnica | 2,0 | Manual de Criação de Jutsus, Seção 5.3 |
| Degrau de moldagem | Refinada, 71 | Manual de Requisitos de Técnica, Seção 3.2 |
| Rider | Paralisia Parcial | Sistema Elemental, rider padrão do Tipo Elétrico |
| Selos de referência | 3 | Perícia de Controle de Chakra, Régua de Interface |
| Assinatura selada | admitida, com Concisão ou interface 169 | Perícia de Controle de Chakra, Régua de Interface |

Duas fichas divergem do coeficiente técnico herdado e declaram a divergência na própria entrada. O Chidori Nagashi opera em 1,0, porque a difusão não depende da moldagem para existir. O Chidori Senbon opera em 1,5, porque a fragmentação distribui o refinamento por dezenas de formas pequenas, e é dessa divergência que sai o degrau Alta que o Compêndio de Raiton publica para ele.

O Raikiri conserva o coeficiente 2,0 e mesmo assim cobra o degrau Absoluto. A elevação vem da Seção 4 do Manual de Requisitos de Técnica, por tolerância zero a excesso de volume, e não de um coeficiente maior. A leitura reconcilia a tabela do Manual de Criação de Jutsus, que lista Chidori e Raikiri juntos em 2,0, com o Compêndio de Raiton, que exige Moldagem Absoluta da entrada.

O Fator de Moldagem resultante do coeficiente herdado vale para a maioria das fichas e é publicado uma única vez aqui.

```
Fator de Moldagem = LV_CC² × 2,5 × coef_técnica
```

| coef_técnica | LV_CC 5 | LV_CC 6 | 6 com 1 caminho | 6 com 2 caminhos |
|---|---|---|---|---|
| 2,0 | 125 | 180 | 245 | 320 |
| 1,5 | 94 | 135 | 184 | 240 |
| 1,0 | 62 | 90 | 122 | 160 |

---

## 5. A curva de custo

A escada de RC nominal guarda proporção declarada contra a raiz, e é ela que governa qualquer recalibragem futura.

| Ficha | Rank | RC nominal | Custo mínimo | Proporção contra a raiz | Custo de XP |
|---|---|---|---|---|---|
| Chidori | A | 750 | 250 | 1,00 | 8.750 |
| Chidori Katana | A | 750 | 250 | 1,00 | 8.750 |
| Chidori Nagashi | A | 900 | 300 | 1,20 | 11.000 |
| Chidori Senbon | A | 900 | 300 | 1,20 | 11.000 |
| Chidori Eisō | A | 900 | 300 | 1,20 | 11.000 |
| Takemikazuchi | S | 1.650 | 250 | 2,20 | 21.800 |
| Raikiri | S | 1.800 | 600 | 2,40 | 23.600 |

Alterar a raiz obriga a percorrer a coluna inteira, porque a proporção é o que mantém a distância entre os degraus.

Três entradas ocupam a mesma RC nominal e o mesmo preço, e a coincidência é estrutural. Irradiar a reunião pelo corpo, fragmentá-la em agulhas e alongá-la em haste são remodelagens do mesmo volume, e a escolha entre elas é de eixo e não de orçamento. O Chidori Katana fica um degrau abaixo delas porque não remodela nada: o volume é o mesmo da raiz e a lâmina empresta a forma que a moldagem teria de produzir.

O Raikiri é o dobro da reunião fechado sobre a mesma superfície, e a proporção de 2,40 sai da sobretaxa do Perfil Veloz aplicada sobre esse dobro. Ele e o Kirin custam o mesmo em XP, e a escolha entre os dois é de eixo e não de orçamento.

O Takemikazuchi é a única entrada da linhagem cujo custo mínimo não é a terça parte da RC nominal. A parcela de 900 vem do olho e não da reserva, e a terça parte incide apenas sobre os 750 que o executante paga, na mesma via que o Kirin já usa com a tempestade. O freio dessa entrada nunca foi o chakra, e sim o medidor do Mangekyō.

---

## 6. Os eixos de derivação

Cada entrada da linhagem move um eixo e apenas um. A tabela é o contrato da família, e ficha nova que não consiga nomear um eixo livre não entra.

| Ficha | Eixo movido | coef_entrega | Perfil de Evasão | Investida | Perfuração |
|---|---|---|---|---|---|
| Chidori | base, ponto único entregue por investida | 0,20 | Veloz | sim | integral |
| Raikiri | custo e precisão, densidade dobrada sem carga | 0,20 | Veloz | sim | integral |
| Chidori Katana | entrega, da mão para o condutor empunhado | 0,16 | Padrão | não | integral |
| Chidori Nagashi | forma, de ponto para área irradiada do corpo | 0,12 | Inevitável | não | nenhuma |
| Chidori Senbon | forma, de ponto para projéteis fragmentados | 0,13 | Veloz | não | nenhuma |
| Chidori Eisō | alcance, de contato para haste dirigida | 0,16 | Padrão | não | por distância |
| Takemikazuchi | persistência, do golpe instantâneo para a marca que continua queimando | 0,20 | Veloz | sim | integral |

O Takemikazuchi acrescentou um quinto eixo à grade que a linhagem operava. Os quatro primeiros, forma, alcance, entrega e a troca entre dano bruto e controle, descrevem o que a técnica faz no instante do golpe. A persistência descreve o que ela deixa depois dele, e nenhuma outra entrada da família ocupava esse espaço. O eixo fica declarado aqui para que uma sexta ficha não o reivindique sem ver que ele já tem dono.

A grade de cobertura completa, com as células ocupadas e as vazias, está na Seção 8.

---

## 7. A decisão de arquitetura

**Decisão: árvore com o Chidori como pré-requisito obrigatório e destravamento em cadeia. Fichas separadas, um eixo por ficha, motor compartilhado neste documento.**

Três razões, em ordem de peso.

**O repositório já decidiu.** O Compêndio de Raiton v3.3 publica Chidori Nagashi, Chidori Eisō e Chidori Senbon na camada Requisito Mecânico com o Chidori na linha de requisitos, e publica o Raikiri na camada Requisito de Segurança com o mesmo requisito. A ficha do Chidori Nagashi v2 declara "Chidori adquirido" no bloco de acesso, e a ficha do Chidori v4 declara na Progressão por Maestria quais caminhos abrem quais variações. A Linhagem do Rasengan v1 cita esta família como o precedente que ela seguiu. Tratar as variações como compras avulsas contradiria quatro documentos publicados de uma vez.

**A autoria exige a cadeia.** A raiz está em Autoria Aberta e ninguém no mundo a completou. A ficha do Chidori declara que toda a linhagem de variações passa a existir a partir do momento em que a raiz ganha autor. Sem cadeia dura, uma variação poderia ser comprada antes de existir a técnica de que ela é a remodelagem, e o portão de autoria deixaria de valer.

**A cadeia é o que precifica a família corretamente.** Uma variação isolada custa entre 8.750 e 23.600 de XP, valores que um jounin sustenta como assinatura única. O que a árvore cobra é a soma, e é ela que faz do especialista em Chidori uma escolha de carreira e não um item de lista de compras.

### Diagrama de dependências

```
Chidori  (raiz, Autoria Aberta, 8.750)
├── Chidori Katana      exige caminho Ponta e arma branca empunhada
├── Chidori Nagashi     exige caminho Arco
├── Chidori Senbon      não exige caminho
├── Chidori Eisō        exige caminho Lança
├── Takemikazuchi       exige Raiton LV6, caminho Ponta, Amaterasu e Kyōka Enton
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
| Chidori mais Chidori Katana | 8.750 | 17.500 |
| Chidori mais uma remodelagem de 900 | 11.000 | 19.750 |
| Chidori mais Takemikazuchi | 21.800 | 30.550 |
| Chidori mais Raikiri | 23.600 | 32.350 |
| Chidori mais as três remodelagens de 900 | 33.000 | 41.750 |
| A árvore inteira | 87.150 | 95.900 |

Nenhuma entrada isolada alcança o custo de uma disciplina elemental completa levada ao LV6 em posição de Afinidade, o que mantém a família dentro da hierarquia declarada pelo Manual de Criação de Jutsus, em que a técnica custa menos que a perícia que a gateia. A árvore inteira custa cerca de duas vezes e meia aquela disciplina e consome mais da metade do orçamento de um jounin típico, e é essa soma que faz do especialista em Chidori uma escolha de carreira em vez de um item de lista de compras. Na prática nenhum personagem a fecha, porque os dois ramos de rank S cobram portões incompatíveis entre si na mesma ficha.

### Posição do Kirin e do Shiden

O Kirin não deriva do Chidori e não o exige. Ele não concentra corrente em ponto único, não entrega por contato, não depende de deslocamento e não gera a própria carga. A ficha publicada o posiciona na inclinação Corrente pelo caminho Tempestade, enquanto a raiz da família vive na inclinação Relâmpago pelo caminho Ponta. Ele é parente de compêndio e não de linhagem, e a decisão de arquitetura o preserva exatamente onde ele já está.

O Shiden também fica fora, por três razões independentes: corre por natureza intensificada e não por Raiton comum, dispensa investida e contato, e o portão dele é a Centelha da Kyōka e não a autoria da raiz. A ficha declara a posição na própria entrada.

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

O dano, o rank, o custo de XP, o Perfil de Evasão, o aftermath e a Janela de Canalização pertencem ao Manual de Criação de Jutsus. O degrau de moldagem, a elevação de degrau e o requisito de caminho pertencem ao Manual de Requisitos de Técnica. A perfuração de Absorção, o alcance estendido, a condução por meio e o salto entre condutores pertencem à Perícia de Raiton. As réguas de desperdício, interface, manutenção e colapso pertencem à Perícia de Controle de Chakra. O multiplicador de natureza, o rider e o Sōsai pertencem ao Sistema Elemental. Os graus e as durações de status pertencem ao Sistema de Efeitos de Status. A camada Kyōka pertence a Naturezas Avançadas.

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

Compêndio de Raiton, entrada do Cortador de Raio: o preço publicado é 23.000, apurado pela matriz de estimativa da Seção 4.1.3. A ficha apura 23.600 sobre a RC nominal de 1.800, e a apuração substitui a estimativa pela regra que a própria seção declara. A correção vale dali em diante e não retroage sobre quem já pagou.

Compêndio de Raiton: falta a entrada do Chidori Katana, que a Seção 8 registra como célula ocupada da grade. O texto de catálogo acompanha esta entrega.

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

*Linhagem do Chidori v1. Uma assinatura de três propriedades que caem juntas, o contrato de que quem larga a investida larga a perfuração, um eixo por variação, coeficiente técnico 2,0 como herança e degrau Refinado como portão comum, árvore de um nível com a raiz como pré-requisito obrigatório, cinco eixos com dono declarado, e o Kirin e o Shiden declarados fora dela.*
