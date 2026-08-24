---
id: relatorio.propagacao-lote-evasao-e-leitura
title: "RELATÓRIO — Propagação do Lote de Evasão e Leitura"
sessao-de-origem: 6
consome: briefing.propagacao-lote-evasao-e-leitura
status: fechado
version: 2
---

# RELATÓRIO — Propagação do Lote de Evasão e Leitura

Saída da execução dos quatro blocos do briefing `S6-04`, na ordem publicada, com a rodada de resoluções que Gabriel devolveu sobre a primeira versão deste relatório já aplicada.

**O que mudou da v1 para a v2.** Sete itens estavam marcados e cinco foram resolvidos. Perfil Elevado e Segundo Passo ganharam conversão. Guy Noturno voltou para Inevitável, com a regra da precondição negável recebendo a emenda das quatro vias. As duas sobretaxas de RC foram recalculadas em vez de marcadas. O marcador de banda saiu de cena e entrou o Alcance categórico, campo novo em toda entrada. A camada de área sem geometria deixou de ser pendência, porque a degradação do Núcleo já cobre o caso. Restam quatro erratas abertas, e nenhuma delas é dívida desta passada.

---

## Contagem

| Bloco | O que entrou |
|---|---|
| 1 | Núcleo de Combate em v4, Régua de Leitura criada em v1 no endereço de cenário, Índice de Perícias em v2.36, INDEX.md regravado |
| 2 | Manual de Criação de Jutsus de v3.4 a **v3.6**, com os sete trechos do briefing mais a emenda da precondição negável |
| 3 | 12 caminhos e cláusulas convertidos, 4 tetos revogados, 14 declarações do degrau Veloz limpas, 2 RC recalculadas, 3 fichas de defesa reendereçadas, 4 entradas devolvidas fechadas, 2 leituras mortas corrigidas, 1 citação de seção reapontada |
| 4 | **491** entradas com Alcance categórico, 156 com Perfil de Evasão, 147 com as três grandezas de área, 14 com Linhas simultâneas, 1 régua de Severidade |
| — | Documentos versionados na passada: **44** |

`node tools/check-links.mjs` fecha em **192 documentos, 77 links resolvidos, 48 alvos previstos em 54 referências, sem quebra**. `node tools/lint-frontmatter.mjs` sai em 0.

---

## Bloco 1

O arquivo publicado da Régua de Leitura chegou em `core/reading-scale.md`, e o front matter dele declara `layer: scenario`, `scenario: naruto`, `type: system` e id `naruto.system.reading-scale`. Ele foi movido para `worlds/naruto/systems/reading-scale.md`. **Confirmado por Gabriel:** o layer do front matter é a autoridade e não o caminho de entrega.

O registro no índice de documentos do cenário é o INDEX.md, regravado por `check-links.mjs`. No Índice de Perícias a régua entra pelo Registro de Alterações, fora do Registro de Regentes e do de Conformidade, pelo mesmo critério que já mantém o Sistema Elemental fora dos dois. Aquele índice não tem tabela de sistemas, e a entrada de versão é a única forma existente de registrar ali um documento que não é perícia.

---

## Bloco 2

Os sete trechos entraram literalmente como escritos, e o manual passou a v3.5. A rodada de resoluções acrescentou a v3.6 sobre ela.

**A emenda da precondição negável, v3.6.** A Seção 6.5 não muda de exigência e ganha a enumeração que faltava: a negação corre por **desfazer**, **sair**, **quebrar** ou **sobreviver à janela**, e a ficha declara qual das quatro vale. As quatro vias têm um caso publicado cada uma, e os quatro estão escritos na seção: a marca do Hiraishin se desfaz, a tempestade do Kirin se evita saindo de baixo, a linha de visão do Amaterasu se quebra, e o oitavo portão do Guy Noturno se vence sobrevivendo ao que ele dura. A quarta via é a que devolveu o Guy Noturno ao degrau Inevitável.

**Resíduo de vocabulário que o briefing mandou não tocar.** A Seção 8.2, no bloco de Validação, ainda lista entre os requisitos declarados a `condição estrutural se Inevitável`. O briefing fixa que nenhuma outra linha do documento muda, e a linha ficou.

---

## Bloco 3

### 3.1 Convertidos

| Entrada | Classe | O que passou a declarar |
|---|---|---|
| Repartição, Fūton | A | linhas de aproximação distintas, resolvidas pela seção 11 do Núcleo |
| Golpe em Rede, Leque | A | idem |
| Segunda Linha, caminho Agulha do Katon | A | idem, com seis linhas na ficha das Penas do Inferno |
| Distância Falsa, Liberação de Yin | B | Régua de Leitura, classe Engano |
| Lança do Vazio, Liberação de Yin | B | Régua de Leitura, classe Engano |
| Ponto de Origem, Kenpo | B | Régua de Leitura, classe Ilegibilidade |
| Régua de Leitura do Kawarimi | B | referência a `naruto.system.reading-scale` |
| **Segundo Passo, Hiraishin Ni no Dan** | B | Régua de Leitura, classe Engano, pelo teste de Fūinjutsu |
| Verdadeiro, caminho Instante do Raiton | C | Teleguiado declarado direto na obra que o caminho produz |
| Giro e Emenda, Taekwondo | C | já declaravam o degrau direto, e nada precisou mudar |
| **Perfil Elevado, caminho Impulso do Raiton** | fora das três | bônus na perícia governante, entrando pelo `M_vel` da Seção 5.7 |

**Ponto de Origem** foi a única classificação que o briefing não nomeou, e Gabriel a confirmou: Classe B, classe Ilegibilidade. A linha declarava o degrau Veloz como destino, o 3.3 manda limpar toda declaração dele, e a prosa do caminho é literalmente sobre o golpe que ninguém vê chegar, com a inclinação chamada Origem e o caminho chamado Sem Aviso.

**Segundo Passo** virou Classe B com a perícia governante resolvida por Gabriel. A chegada declara a Régua de Leitura na classe Engano, o alvo opõe percepção ao teste de Fūinjutsu, e a cláusula de uma vez por alvo por combate saiu porque a familiaridade de dez por cento cumulativo passa a fazer esse trabalho com granularidade em vez de com interruptor. O degrau da técnica ou do ataque entregue no turno da chegada deixa de se mover.

**Perfil Elevado** não virou Classe C, porque o caminho não produz técnica e por isso não tem degrau para declarar. Ele passa a somar bônus ao teste da perícia governante e entra na conexão pelo `M_vel`, o canal contínuo da maestria. **O valor do bônus é lacuna declarada no documento e espera desenho**, nos dois degraus que o caminho concedia, e não foi inventado. Fica registrado que o nome do caminho continua sendo Perfil Elevado e deixou de descrever o que ele faz.

### 3.1 Classe D, marcados e não alterados

Cinco entradas, com o trecho literal de cada uma.

**1. Rota Viva**, `worlds/naruto/skills/katon.md` linha 78, caminho **RÉDEA** da inclinação **LABAREDA**.

> `└─ Rota Viva [passivo]: toda técnica de Katon do praticante sobe um degrau no Perfil de Evasão. LV5: troca de alvo depois da expulsão, dentro do alcance declarado da técnica, sem custo novo e sem nova execução`

Não conta correntes, não mede leitura e não produz a técnica cujo degrau moveria. O verbo do caminho é a chama que continua obedecendo depois de sair do corpo, que é perseguição, e perseguição é o degrau Teleguiado, que a ficha de cada técnica declara na criação e não este caminho em jogo.

**2. Fôlego Contrário**, `worlds/naruto/skills/futon.md` linha 100, caminho **BARLAVENTO** da inclinação **VENDAVAL**.

> `└─ Fôlego Contrário [passivo]: projétil físico que atravesse os 5 metros à frente do praticante perde velocidade, e o Perfil de Evasão dele sobe um degrau contra projéteis. LV5: dois degraus, e projétil que não vença cai no chão antes de alcançar a linha`

É defesa lendo a escada pelo lado do atacante: eleva o Perfil de uma obra alheia para facilitar a própria esquiva. Nenhuma das três classes alcança isso, e o efeito parece pedir bônus ao lado defensivo da conexão em vez de degrau.

**3. Impulso de Arremesso**, `worlds/naruto/skills/futon.md` linha 124, caminho **VENTO NO VOO** da inclinação **VENTO A FAVOR**.

> `└─ Impulso de Arremesso [passivo]: projétil lançado pelo praticante ou por aliado dentro de 10 metros sobe uma categoria de velocidade, e o alvo baixa um degrau no Perfil de Evasão contra ele. LV5: dois degraus, e o projétil acelerado atravessa cobertura leve antes de resolver`

Soma uma categoria de velocidade e mais um degrau de evasão à mesma coisa. Com a velocidade virada grandeza própria na cadeia da Seção 5.7, o degrau parece cobrança dupla pela mesma propriedade, e cortá-lo é decisão de desenho.

**4. Escuro Erguido**, `worlds/naruto/skills/yin-release.md` linha 129, caminho **CORTINA** da inclinação **MIRAGEM**.

> `└─ Escuro Erguido [sustentado, ação padrão, 70 RC no ato e 25 RC por turno]: volume de escuro real com 10 metros de raio, centrado em ponto declarado. Ninguém dentro enxerga, incluindo o praticante, os aliados e o portador de dōjutsu dependente de luz. Quem depende de visão dentro do volume desce um degrau no Perfil de Evasão, e ataque à distância que atravesse a borda resolve sem linha de visão.`

Achado novo da varredura, fora dos quinze que a auditoria do consolidado contou. Desce o Perfil de **quem depende de visão**, que é pessoa e não obra, e o Perfil é propriedade da obra. O efeito parece pedir penalidade ao lado defensivo da conexão de quem está cego, e não degrau.

**5. Portões seis e oito**, `worlds/naruto/systems/eight-gates.md` linhas 100 e 102, seção **3.3 Efeitos Mecânicos: verbos por portão**, repetidos em `worlds/naruto/techniques/hachimon-tonko.md` linhas 239 e 294 como verbo acrescentado de cada ficha de portão.

> `| 6 | todo taijutsu puro do praticante sobe um degrau no Perfil de Evasão, e o atrito do ar passa a ignição no ponto de impacto |`
> `| 8 | o Limite de Saída deixa de existir, e o taijutsu puro sobe um segundo degrau no Perfil de Evasão |`

A propriedade que os dois verbos medem é velocidade crua de membro, que hoje é grandeza própria na cadeia da Seção 5.7, e o eixo corporal sem chakra não tem entrada naquela cadeia. É a mesma lacuna que a errata do eixo físico registra. O teto de dois degraus foi revogado como o briefing manda, e a elevação em si ficou, o que a deixa sem limite declarado até a decisão vir. Guy Noturno deixou de depender dela, porque a ficha dele passou a declarar Inevitável direto.

### 3.2 Tetos revogados

Quatro, todos sem substituto: o de dois degraus dos Oito Portões, o de três da Repartição no LV5, o de três do Golpe em Rede no LV5, e os três degraus que Distância Falsa e Lança do Vazio concediam no LV6.

Repartição LV5, Golpe em Rede LV5 e Distância Falsa LV6 ficaram sem melhoria própria, porque as duas coisas que cada um concedia eram o teto revogado e a contagem por ângulo, que virou regra geral do Núcleo. As três linhas declaram a lacuna no próprio texto, no padrão de lacuna registrada que o corpus já pratica, e nenhuma recebeu efeito inventado.

### 3.3 Degrau Veloz, remanescentes

Catorze declarações limpas, em oito documentos: `techniques/kieru-rasengan.md`, `techniques/shiden.md`, `techniques/hachimon-obras.md` em cinco entradas, `techniques/kawarimi.md` em duas, `techniques/shunshin.md`, `common/skills/kenpo.md` em duas, `techniques/chidori-eiso.md` e `systems/eight-gates.md`.

**As duas sobretaxas embutidas foram recalculadas.** Nenhuma das duas fichas declara sobretaxa empilhada sobre a mesma RC, então as duas dividiram.

| Ficha | RC nominal antes | RC limpa | Custo mínimo | Dano bruto |
|---|---|---|---|---|
| Rasengan Evanescente | 1.050 | **913** | 350 para **304** | `1.176 × M` para `1.022,56 × M` |
| Shiden | 900 | **783** | 300 para **261** | `1.260 × M` para `1.096,2 × M` |

As duas tabelas de descarga foram refeitas contra o par Especial de 1.920, que é o do rank A das duas entradas. O Rasengan Evanescente entrega 39,2%, 53,3% e 70,5% do par nas três linhas, e o Shiden entrega 47,0%, 57,1% e 69,4%. As duas seguem acima do piso de 40% do rank A no executor de referência. A linha de execução fora da afinidade do Rasengan Evanescente acompanha, de 1.365 para 1.187 na nominal e de 455 para 396 no custo mínimo.

A Linhagem do Rasengan acompanha na Seção 3, com a RC em 913 e a proporção contra a base caindo de 1,75 para 1,52, e na Seção 5, com o custo mínimo em 304. **A base de 600 do Rasengan permanece intocada**, no mesmo precedente que a Linhagem do Chidori abriu ao limpar cinco das sete fichas dela sem mover a raiz.

**Achado corrigido no caminho.** A ficha do Rasengan Evanescente declarava par de referência Elite de 1.440, que é o do rank B, enquanto as três linhas da tabela sempre resolveram contra 1.920. A entrada é rank A, e o rótulo estava errado desde antes desta passada.

**Uma coisa continua marcada.** A ficha do Rasengan Evanescente declara entrega portada pelo corpo e a prosa dela descreve a esfera arremessada, com alcance de doze metros. A divergência está marcada na própria linha de vetor, como o briefing manda, e não foi decidida.

**Outra fica registrada sem ser pendência.** O Ápice de Agudo do Raiton, `Ame-no-Ohabari`, revoga a exigência de precondição do degrau Inevitável. A linha de revogação foi reescrita para citar a regra pelo nome corrente. Com a emenda das quatro vias a revogação ficou mais larga do que era quando foi escrita, e é o que uma transcendência faz.

### 3.4 Régua de Leitura, mudança de endereço

Kawarimi, Bunshin e Shunshin passaram a referenciar `naruto.system.reading-scale`. A forma, o par de percepção e a familiaridade de dez por cento não mudaram de valor. As três declaram classe: Engano no Kawarimi e no Bunshin, Ilegibilidade no Shunshin. A tabela de Interação com Defesas do Kawarimi passou a ler a camada de Reação do Núcleo de Combate e perdeu a linha do perfil Veloz.

Nos três documentos a consequência da falha deixou de elevar o degrau do golpe seguinte e passou a entregar um alvo que não contesta a conexão, que é o que a Régua publica na seção 4 dela.

### 3.5 As quatro entradas devolvidas

As quatro declaram Perfil de Evasão Padrão e a Régua de Leitura com classe e teste do executor lidos da própria ficha.

| Entrada | Classe | Teste do executor |
|---|---|---|
| Penas do Inferno | Engano | Labareda com a especialização de Agulha |
| Vendaval da Montanha Verdejante | Engano | Vento a Favor com a especialização de Vento no Voo |
| Lâmina de Vácuo | Ilegibilidade | Vento a Favor com a especialização de Vento na Lâmina |
| Rasengan Evanescente | Ilegibilidade | Perícia de Raiton, governante da ficha |

O efeito Segunda Linha do caminho Agulha passou a declarar linhas de aproximação, e a errata aberta do Compêndio de Katon contra a Seção 6.5 está encerrada no próprio compêndio.

### 3.6 Leituras mortas no Manual do Sharingan

Corrigidas. O bônus de antecipação passa a incidir sobre quatro testes em vez de cinco, com o lado defensivo do teste de conexão no lugar das linhas de Esquiva e de Reação. `core/status-effects.md` publicava a mesma leitura morta na cascata de redução de VEL e foi corrigido pelo mesmo critério, sem estar na lista do briefing.

### 3.7 Elevação categórica no vetor Corte

Uma única citação no corpus apontava a cláusula por seção, na entrada Transmissão de Raio do Compêndio de Raiton, e foi reapontada para a Seção 12 do Núcleo.

---

## Bloco 4

### 4.1 Alcance categórico, o campo que decide a resolução

**491 entradas**, em todos os quatorze compêndios, passaram a declarar uma posição na escada da Seção 12 do Núcleo de Combate. É esse campo, e nenhum outro, que decide se a entrada resolve o teste de conexão ou o teste de fuga. A Banda Mínima e a Banda Máxima não entram nessa decisão.

| Posição | Entradas |
|---|---|
| Alvo | 325 |
| Área | 119 |
| Campo | 28 |
| Linha | 19 |

A leitura foi da prosa de cada entrada, com Alvo como valor de omissão. Duas entradas foram corrigidas contra a ficha publicada delas: **Agulhas de Mil Pássaros**, cuja ficha declara alvo único com todas as letras, e **Kirin**, que conduz um relâmpago natural a um alvo e cuja área imediata só aparece na execução sem Sharingan. As duas carregavam banda e teriam sido lidas como área pelo marcador antigo.

**Consequência sobre o marcador de banda.** A leitura por banda estava errada em pelo menos as duas acima e provavelmente em mais. A Norma de Produção de Compêndios subiu a v2.11 declarando que os dois campos de banda não classificam obra nenhuma, e os três campos de geometria passaram a acompanhar o Alcance categórico. A sincronização acrescentou geometria a 23 entradas que a banda não marcava e a retirou de 7 que a banda marcava por herança.

### 4.1 Perfil de Evasão

156 entradas classificadas por vetor declaram o campo.

| Valor | Entradas |
|---|---|
| Padrão | 135 |
| Teleguiado | 8 |
| Telegrafado | 6 |
| Inevitável | 4 |
| não aplicável | 3 |

- **Telegrafado.** Bolinho de Terra do Mausoléu e Técnica do Sanduíche no Doton, Etiqueta Explosiva no Fūinjutsu, Trovão Acumulado no Raiton, Técnica da Grande Cachoeira e Mil Tubarões Famintos no Suiton. Critério estrito: massa colossal erguida antes da entrega, ou acúmulo declarado em turnos com exposição do usuário.
- **Teleguiado.** Dragão de Terra e Pedra no Doton, Lanterna Demônio e Rugido do Dragão Eterno no Katon, Presa Rastreadora do Raio e Pantera Negra no Raiton, Técnica do Dragão de Água, Bala Tubarão de Água e Cinco Tubarões Famintos no Suiton. Critério: perseguição escrita na prosa, com correção de trajetória depois de o alvo se mover.
- **Inevitável.** Corte do Deus do Trovão Voador pela marca inscrita, que se nega desfazendo. Kirin pela tempestade sobre o campo, que se nega saindo. Amaterasu pelo ponto em que o olho pousa, que se nega quebrando a linha de visão. **Guy Noturno pelo oitavo portão aberto, que se nega sobrevivendo à janela.** Os quatro casos das quatro vias.
- **não aplicável.** Selo do Consumo do Demônio Morto, Técnica de Ocultação nas Cinzas e Grande Extinção pelo Fogo, as três sem vetor de golpe e sem teste de conexão a resolver.

**Uma entrada permanece rebaixada, e é a única.** **Rugido do Dragão Eterno**, Compêndio de Katon, rank S. A prosa diz que a pressão torna a esquiva irrelevante dentro do alcance e que a entrada vence pela certeza do acerto, o que descreve o Inevitável, e a ficha não nomeia precondição alguma, por nenhuma das quatro vias. Recebe Teleguiado pela regra do briefing e volta para desenho.

**Consequência declarada.** A escada de evitabilidade alcança apenas a obra que resolve o teste de conexão, e por isso ela governa as entradas de Alvo e de Linha. Nas 147 entradas de Área e de Campo o degrau declarado permanece escrito e fica inerte, porque a resolução delas é a fuga. As notas dos quatorze compêndios e a Norma declaram isso.

### 4.2 Área e campo

147 entradas declaram profundidade máxima, abrangência e espécie, exatamente as que o Alcance categórico classifica como Área ou Campo.

Nenhuma entrada de compêndio nenhum publica geometria em metros, e as duas grandezas entram como `a publicar`. **Isso não é pendência de propagação.** O Núcleo publica a degradação para esse caso na Seção 13: sem geometria declarada todos os corpos leem a profundidade máxima, o que reproduz o comportamento anterior. Publicar a geometria é lote de desenho.

A espécie entrou como `expande` em 144 e como `aparece` em três: Kirin, pela descida que dispensa qualquer possibilidade de reação, e Dança da Névoa Flamejante e Queimadura das Cinzas, pelas duas nuvens que deflagram em combustão instantânea sobre quem já está dentro.

### 4.3 Multiplicidade

Catorze entradas declaram Linhas simultâneas. Sete com número lido da prosa: Penas do Inferno 6, Cinco Tubarões Famintos 5, Rede de Chamas 3, Ascensão da Fênix 3, Técnica do Fogo do Dragão 3, Tríplice do Portão da Clausura 3, Rasenrengan 2.

Sete com o número não publicado, declarado como `a publicar` com a razão escrita e sem invenção: Múltiplas Bolas de Fogo da Fênix e Lanterna Demônio no Katon, Ondas Seriais de Vácuo no Fūton, Bala Presa de Água e Mil Agulhas Voadoras da Morte no Suiton, Descargas do Primeiro Ninshū no Raiton, Despacho de Raio no Inton.

### 4.4 Fonte sem ficha

A instrução não se executa entrada por entrada, e a razão está no próprio catálogo. O Sistema de Efeitos de Status não tem entradas de fonte: tem entradas de condição, e a linha Fonte de quase toda uma delas lista fonte com ficha e fonte sem ficha lado a lado. Queimadura lê calor, fogo, ácido e energia cauterizante. Fratura lê golpe físico contundente, esmagamento e impacto de alta energia. Uma Severidade constante por condição seria número inventado, e a própria Seção 14 do Núcleo diz que a grandeza se lê relacionalmente contra a faixa em que a cena corre e que ela pertence à fonte, não à condição.

O que entrou foi a régua. As Regras Universais de Aplicação ganharam o quinto caso, o de fonte sem ficha, que declara na cena uma Severidade entre metade, igual e o dobro do lado defensivo típico da faixa, e o catálogo declara por que nenhuma entrada dele publica Severidade própria.

Nenhum documento de cenário do corpus publica fonte ambiental com ficha própria, e por isso não houve segunda frente a preencher.

---

## Erratas abertas

Quatro, e nenhuma é dívida desta passada.

1. **A Seção 5.2 do Manual de Criação de Poderes contradiz o cenário em três pontos.** O manual de núcleo publica o Eixo de Evitabilidade com cinco degraus, com o degrau Veloz entre eles, com a exigência de condição estrutural externa no topo, e com a regra de que caminhos de perícia e transcendências movem um efeito um degrau. A Seção 6.5 revogou os três. **Devolvida e não tocada, por decisão de Gabriel:** até a reedição daquele documento, o Manual de Criação de Jutsus é a autoridade para o cenário, porque é a instância declarada do ponto de extensão.
2. **Os verbos do sexto e do oitavo portão** continuam elevando o Perfil de Evasão contra uma escada que não se move em jogo, com o teto já revogado e sem limite no lugar. Trecho literal e razão na seção 3.1 acima.
3. **Rota Viva, Fôlego Contrário, Impulso de Arremesso e Escuro Erguido**, quatro caminhos de perícia cujo efeito nenhuma das três classes alcança. Trecho literal e razão de cada um na seção 3.1 acima.
4. **Entradas com propriedade de leitura que a passada não converteu.** A regra do Bloco 4.1 só distribui degraus e o Bloco 3.5 só nomeia quatro entradas para a Régua de Leitura. Estas descrevem na prosa exatamente o que a régua mede e continuaram sem declará-la: Lâmina de Vento e Fluxo de Chakra Vento no Fūton, Relâmpago Serpente e Selo de Tempestade no Raiton, Lâmina Cortante de Água no Suiton, Dança Explosiva da Onda de Choque no Katon, e Grande Tarefa do Dragão no Fūton. O Índice Rápido do Compêndio de Raiton já agrupa duas delas sob o verbo de enganar a leitura do oponente.

**Registrado sem ser errata.** A errata do eixo físico do Índice de Perícias mudou de objeto e não fechou: Kenpo deixou de consumir o Perfil de Evasão e passou a consumir a Régua de Leitura, que é documento de cenário do mundo Naruto, e Kenpo é perícia publicada fora de `worlds/<mundo>/`. A fronteira trocou de documento. O valor do bônus de Perfil Elevado no Raiton também fica declarado como lacuna, no próprio documento.

---

## Documentos versionados nesta passada

**Núcleo.** `combat-core.md` v4, `status-effects.md` v2.10.

**Sistemas do cenário.** `jutsu-authoring.md` v3.6, `reading-scale.md` v1 novo, `compendium-standard.md` v2.11, `eight-gates.md` v1.5, `rasengan-family.md` v1.8.

**Perícias.** `skills/overview.md` v2.36, `katon.md` v4.3, `futon.md` v2.7, `raiton.md` v3.11, `yin-release.md` v4.5, `leque.md` v1.5, `common/skills/kenpo.md` v1.4.

**Clã.** `uchiha-sharingan.md` v2.3.

**Compêndios.** doton v2.10, eight-gates v1.10, forma v2.8, fuinjutsu v1.10, futon v4.14, genjutsu v1.5, inton v2.10, katon v5.13, kyuinjutsu v1.6, medical-ninjutsu v2.10, raiton v3.19, sensory v1.6, suiton v3.10, yoton v2.8.

**Fichas.** bunshin v2.1, chidori-eiso v2.2, hachimon-obras v1.3, hachimon-tonko v1.4, hiraishin-giri v1.4, hiraishin-ni-no-dan v1.2, jigoku-no-hane v1.3, kawarimi v2.1, kieru-rasengan v1.4, kirin v2.4, shiden v2.6, shunshin v2.1.
