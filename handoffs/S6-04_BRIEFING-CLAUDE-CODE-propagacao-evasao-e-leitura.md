---
id: briefing.propagacao-lote-evasao-e-leitura
title: "BRIEFING CLAUDE CODE — Propagação do Lote de Evasão e Leitura"
sessao-de-origem: 6
consome: consolidado.lote-evasao-e-leitura
status: aberto
version: 1
---

# BRIEFING CLAUDE CODE — Propagação do Lote de Evasão e Leitura

Instruções de execução para a propagação das nove decisões do Lote de Evasão e Leitura. O consolidado `handoffs/S6-03_CONSOLIDADO-lote-evasao-e-leitura.md` é a fonte da verdade e carrega a derivação de cada regra. Este documento carrega a prosa final de cada trecho que muda e a regra determinística de cada varredura.

Divisão de trabalho: a prosa de decisão vem escrita aqui, palavra por palavra, e não se reescreve. A montagem dos documentos, a varredura do corpus e o preenchimento de campos são execução.

Ordem obrigatória: Bloco 1, depois Bloco 2, depois Bloco 3, depois Bloco 4. Nenhum bloco começa antes de o anterior fechar validação.

---

## Bloco 1. Documentos prontos, substituição direta

**1.1** `core/combat-core.md` é substituído pelo arquivo publicado nesta sessão. Versão 3 para 4. O documento é completo e não admite montagem.

**1.2** `worlds/naruto/systems/reading-scale.md` é criado com o arquivo publicado nesta sessão. Documento novo, versão 1, id `naruto.system.reading-scale`.

**1.3** Registrar `reading-scale.md` no índice de documentos do cenário e no Índice de Perícias, na mesma forma com que o Sistema Elemental e o Controle de Chakra estão registrados. A régua não é perícia e entra como sistema.

Validação do bloco: `node tools/check-links.mjs` sem quebra, e o front matter dos dois arquivos legível.

---

## Bloco 2. Manual de Criação de Jutsus, versão 3.4 para 3.5

Alvo: `worlds/naruto/systems/jutsu-authoring.md`. O arquivo final é o manual inteiro com os trechos abaixo substituídos. Nenhuma outra linha do documento muda. Front matter: `version: 3.5`.

### 2.1 Substituir a Seção 6.5 inteira

Da linha do cabeçalho `### 6.5 Perfil de Evasão` até a linha imediatamente anterior a `### 6.6 Módulos de Comportamento`, pelo texto abaixo.

```markdown
### 6.5 Perfil de Evasão

Dimensão obrigatória de todo jutsu ofensivo de alvo. Declara quão evitável a técnica é **por construção**, em quatro degraus fixos, cada um com comportamento próprio na mesa.

| Perfil | Esquiva do alvo | Comportamento próprio | Contrapartida |
|---|---|---|---|
| **Telegrafado** | +25% | o alvo que gasta a reação esquivando fica fora de posição e perde nova esquiva até o próximo turno dele | coef_entrega um degrau acima na tabela |
| **Padrão** | plena | nenhum | nenhuma |
| **Teleguiado** | −50% | persegue por 1 turno adicional se o alvo esquiva; a esquiva repetida contra a mesma perseguição preserva o malus | +30% no custo de RC e Extra pago em XP |
| **Inevitável** | anulada | apenas a Absorção e o Estado Elemental declarado mitigam | precondição negável declarada no registro; rank A mínimo |

O degrau é escolhido na criação da técnica, pago na criação, e permanece o mesmo durante toda a vida dela. Nenhum caminho de perícia, nenhuma transcendência, nenhuma circunstância de combate e nenhum estado do executor movem uma técnica de degrau. A escada é propriedade de construção, e é essa fixidez que permite precificar um degrau em XP e preencher o campo em qualquer entrada de compêndio sem consultar a ficha de quem executa.

**O degrau Veloz sai da escada.** Ele media velocidade crua, que agora é grandeza própria e vive na cadeia da Seção 5.7, com dono, escada de meios e leitura por obra. Uma escada que media a mesma coisa por degrau nomeado passaria a cobrar duas vezes pela mesma propriedade. As fichas que carregavam o degrau Veloz por serem de raio deixam de pagar a sobretaxa de quinze por cento no custo de RC, porque a velocidade delas agora sai da Celeridade do meio, e o abatimento é da entrada e não da escada.

O que a escada mede é o que a construção da obra faz com a possibilidade de sair da frente dela: ser vista chegando, perseguir quem se moveu, ou não admitir saída alguma. Nada disso é velocidade, e por isso as duas camadas compõem sem se confundir.

O Telegrafado é a única fonte de coef_entrega elevado fora da forma física da técnica: o arquétipo do golpe devastador que todo o campo vê chegando.

O Inevitável exige uma precondição que o defensor possa negar antes de a técnica disparar, declarada no registro junto com o que a desfaz. A tempestade do Kirin precisa existir e o alvo pode sair de baixo dela. A marca do Hiraishin precisa estar no corpo do alvo e ele pode se livrar dela. O ponto em que o olho pousa precisa alcançar o alvo e ele pode quebrar a linha de visão. A técnica que não nomeie o que a derrota tem teto em Teleguiado.

As sobretaxas percentuais desta escada e dos módulos da Seção 6.6 incidem sobre a RC nominal durante a construção da técnica, e o custo mínimo acompanha como terça parte do resultado. A ficha publica as duas grandezas já fechadas, com a sobretaxa embutida.

A escada alcança apenas a obra que resolve o teste de conexão. A obra elevada para área ou para campo resolve o teste de fuga do Núcleo de Combate, e o relâmpago natural fica fora do teste e por isso fora da escada.

O degrau Inevitável fecha por inteiro o lugar da esquiva, e nenhuma resposta defensiva da camada de Reação do Núcleo de Combate se aplica contra ele. Nos três degraus restantes o lugar está aberto, e a resposta declarada funciona pelas condições que a ficha dela publica.

A obra cuja propriedade é o alvo não saber do que se defender permanece no degrau que a construção dela merece, e essa propriedade se declara na Régua de Leitura. O alvo de uma obra dessas sai da frente dela com a esquiva inteira sempre que souber do que sair.

A previsão do Sharingan opera sobre a esquiva do portador contra técnicas alheias, em slot defensivo próprio; o Perfil de Evasão opera sobre a esquiva do alvo, no slot da técnica. As camadas compõem com donos separados, e a matemática do dōjutsu vive no documento de Sharingan.
```

### 2.2 Substituir o parágrafo da construção comprada, na Seção 5.7

Localizar em `#### Os três canais da maestria na conexão` o parágrafo que começa com `A **construção comprada**` e substituir por:

```markdown
A **leitura comprada** é a porta do executor sobre o que o adversário consegue acompanhar. Um caminho nomeado de perícia concede à técnica a Régua de Leitura, ou eleva o teste do executor dentro dela, conforme o documento daquela régua publica. Ela não move a técnica na escada de Perfil de Evasão, que é fixada na criação.
```

### 2.3 Substituir as isenções legisladas, na Seção 5.7

Localizar os dois parágrafos de `#### Isenções legisladas` que tratam de área e de relâmpago natural e substituir por:

```markdown
A obra de área e a de campo não resolvem teste individual contra cada alvo. Elas resolvem o teste de fuga do Núcleo de Combate, opondo a Velocidade efetiva da obra ao lado defensivo do alvo dividido pela raiz da profundidade, e entregam efeito parcial em falha onde a ficha o declarar.

O relâmpago natural fica fora da escada porque fica fora do teste. A obra que dirige um fenômeno atmosférico preexistente declara esse fenômeno como a precondição negável do degrau Inevitável, e o Kirin é o caso publicado.
```

### 2.4 Acrescentar ao Modelo de acerto do cenário, na abertura da Seção 6

Ao fim do parágrafo único daquela subseção, acrescentar:

```markdown
A obra cuja propriedade é o alvo não saber do que se defender declara a Régua de Leitura, que resolve por teste de percepção com dono próprio e não move a técnica na escada.
```

### 2.5 Acrescentar linha à tabela de Extras de Comportamento, Seção 4.1.2

```markdown
| Declaração de Régua de Leitura | +20% |
```

A âncora é o Extra mais pesado já publicado naquela tabela, a execução em movimento pleno, porque as duas compram comportamento de execução que muda o que o adversário pode fazer contra a técnica. A propriedade não paga sobretaxa de RC, porque não é sobretaxa da escada de evasão.

### 2.6 Corrigir a tabela da Seção 10

Na linha `Eixo de evitabilidade`, trocar `Perfil de Evasão em cinco degraus` por `Perfil de Evasão em quatro degraus`.

### 2.7 Acrescentar a entrada de versão, no topo da Seção 11

```markdown
**v3.5.** A Seção 6.5 declara o Perfil de Evasão como propriedade de construção que não se move em jogo, e a elevação por caminho de perícia ou por transcendência sai da escada. O degrau Inevitável troca a exigência de condição externa ao usuário pela exigência de uma precondição que o defensor possa negar antes de a técnica disparar, declarada no registro junto com o que a desfaz, o que admite a marca prévia e o ponto de visão ao lado do fenômeno atmosférico. A seção passa a declarar que a escada alcança apenas a obra que resolve o teste de conexão, e que o degrau Inevitável fecha por inteiro o lugar da esquiva diante da camada de Reação do Núcleo de Combate. A Seção 5.7 troca a construção comprada pela leitura comprada no terceiro canal da maestria, e republica as isenções de área e de relâmpago natural na forma do teste de fuga e da precondição negável. A abertura da Seção 6 e a Seção 4.1.2 registram a Régua de Leitura, que passa a viver em documento próprio do cenário. A Seção 10 corrige a contagem de degraus do eixo de evitabilidade. Nenhum coeficiente de entrega, faixa de XP, piso por rank, banda de autoria, âncora de validação ou linha da Escada de Celeridade mudou de valor.
```

Validação do bloco: contagem de degraus igual a quatro em toda a Seção 6.5; nenhuma ocorrência restante de `mover um degrau` ou `move um jutsu um degrau` no manual; `check-links` sem quebra.

---

## Bloco 3. Varredura de erratas no corpus

Cada item abaixo é determinístico. Onde a regra não decidir sozinha, marcar a entrada e parar, em vez de escolher.

### 3.1 Elevação e rebaixamento de Perfil de Evasão

Buscar em todo o corpus as expressões `degrau no Perfil de Evasão`, `sobe um degrau`, `desce um degrau`, `eleva o Perfil`, `rebaixa o Perfil` e variantes.

Alvos conhecidos, a confirmar na varredura: Lança do Vazio e Distância Falsa na Liberação de Yin, Rota Viva no Katon, Repartição e Fôlego Contrário e Impulso de Arremesso no Fūton, Golpe em Rede no Leque, Perfil Elevado e Verdadeiro no Raiton, Segundo Passo na linhagem do Hiraishin, Ponto de Origem no Kenpo, Giro no Taekwondo, portões seis e oito no Sistema dos Oito Portões, e a Régua de Leitura na ficha do Kawarimi.

Regra de conversão, aplicada por classificação:

**Classe A, o efeito medía multiplicidade.** O caminho passa a declarar quantas linhas de aproximação distintas a obra produz, e a resolução lê a tabela de vantagem numérica da Seção 11 do Núcleo de Combate. Casos: Repartição, Golpe em Rede, e todo caminho cujo texto conte correntes, projéteis ou frentes.

**Classe B, o efeito media a leitura do adversário.** O caminho passa a conceder a Régua de Leitura à técnica, ou a elevar o teste do executor dentro dela. Casos: Régua de Leitura no Kawarimi, Distância Falsa, Segundo Passo.

**Classe C, o efeito media a construção da própria obra.** O caminho passa a declarar o degrau diretamente, como propriedade fixa da técnica que ele produz, sem mover nada em jogo. Casos: Giro no Taekwondo, Perfil Elevado e Verdadeiro no Raiton.

**Classe D, sem classificação clara.** Marcar a entrada, registrar no relatório e não alterar.

### 3.2 Tetos de acumulação

Revogar toda cláusula de teto de degraus. Alvos conhecidos: teto de dois degraus no Sistema dos Oito Portões, teto de três degraus em Repartição no LV5, em Golpe em Rede e em Lança do Vazio no LV6. A revogação não recebe substituto, porque não existe mais acumulação a limitar.

### 3.3 Degrau Veloz remanescente

Buscar `Veloz` como valor de campo de Perfil de Evasão. Alvos conhecidos: ficha do Rasengan Evanescente, que declara o degrau com sobretaxa embutida na RC nominal de 1.050, e a tabela de Interação com Defesas da ficha do Kawarimi, que lista o degrau entre os perfis negados.

Na ficha do Rasengan Evanescente, além da troca do degrau, marcar para revisão a declaração de entrega portada pelo corpo numa técnica que a prosa descreve como arremessada. Não decidir a divergência.

### 3.4 Régua de Leitura, mudança de endereço

Nas fichas do Kawarimi no Jutsu, do Bunshin no Jutsu e do Shunshin no Jutsu, substituir a régua local por referência a `naruto.system.reading-scale`. A forma, o par de percepção e a familiaridade de dez por cento não mudam de valor.

Na ficha do Kawarimi, a tabela de Interação com Defesas passa a referenciar a camada de Reação do Núcleo de Combate, mantendo a declaração de que o degrau Inevitável torna a técnica inaplicável.

### 3.5 As quatro entradas devolvidas

Penas do Inferno, Vendaval da Montanha Verdejante, Lâmina de Vácuo e Rasengan Evanescente declaram `Perfil de Evasão: Padrão` e acrescentam a declaração da Régua de Leitura, com a classe indicada abaixo e a perícia que produz o teste do executor lida da própria ficha.

| Entrada | Classe |
|---|---|
| Penas do Inferno | Engano |
| Vendaval da Montanha Verdejante | Engano |
| Lâmina de Vácuo | Ilegibilidade |
| Rasengan Evanescente | Ilegibilidade |

Nas Penas do Inferno, o efeito Segunda Linha do caminho Agulha deixa de resolver por teste oposto separado por projétil e passa a declarar o número de linhas de aproximação distintas, pela regra da Classe A. A errata aberta daquela entrada contra a Seção 6.5 fica encerrada.

### 3.6 Leituras mortas no Manual do Sharingan

Na lista de testes que o bônus de leitura alcança, `Esquiva (VEL+DES)` e `Reação (VEL+SAB)` passam a ler o lado defensivo do teste de conexão. O sistema não publica teste de Reação, e o par VEL e SAB pertence à Iniciativa.

### 3.7 Elevação categórica no vetor Corte

A cláusula de elevação que vivia dentro da seção do Corte no Núcleo de Combate já saiu com a versão 4. Buscar no corpus toda ficha que cite aquela cláusula por seção e reapontar para a Seção 12 do Núcleo.

---

## Bloco 4. Preenchimento de campos no corpus

### 4.1 Perfil de Evasão nas entradas classificadas

As cento e cinquenta entradas já classificadas por vetor e os onze compêndios com o campo declaradamente ausente passam a declarar um entre quatro valores. A escolha lê a prosa da entrada, sem consultar ficha de executor.

| Declarar | Quando a prosa da entrada disser |
|---|---|
| Telegrafado | a obra se anuncia antes de sair, exige acúmulo visível, ou o campo inteiro a vê chegando |
| Padrão | qualquer outro caso |
| Teleguiado | a obra persegue o alvo depois que ele se move |
| Inevitável | a obra nomeia uma precondição que o defensor pode negar, e a entrada é de rank A ou acima |

Padrão é o valor de omissão. Entrada cuja prosa não sustente Teleguiado, Telegrafado ou Inevitável recebe Padrão sem marcação.

Entrada que pareça alcançar Inevitável sem nomear a precondição negável recebe Teleguiado e entra no relatório.

### 4.2 Área e campo

Toda entrada elevada para área ou para campo passa a declarar três campos: `profundidade_maxima` em metros, `abrangencia` em metros, e `especie` com valor `expande` ou `aparece`.

Onde a prosa publicar geometria em metros, ler dela. Onde não publicar, marcar a entrada no relatório e não inventar número.

O valor de omissão de `especie` é `expande`. A espécie `aparece` só se declara onde a prosa disser que a obra surge sem intervalo em que o corpo pudesse sair.

### 4.3 Multiplicidade

Toda entrada que produza mais de uma linha de aproximação contra o mesmo alvo declara `linhas_simultaneas` com o número inteiro. Projéteis que chegam pelo mesmo ângulo contam como uma linha.

### 4.4 Fonte sem ficha

Toda entrada de fonte sem ficha, no Sistema de Efeitos de Status e nos documentos de cenário que publiquem fontes ambientais, passa a declarar `severidade` com um entre três valores: `metade`, `igual` ou `dobro`, lidos contra o lado defensivo típico da faixa.

---

## Relatório de saída

Ao fim da propagação, publicar em `handoffs/` um relatório com: a contagem de entradas alteradas por bloco; a lista de entradas de Classe D não classificadas na varredura 3.1; a lista de entradas de área sem geometria publicada; a lista de entradas que pareciam Inevitável sem precondição negável; e o resultado do `check-links`.

Nenhuma entrada marcada é decidida pela propagação. Todas voltam para decisão de desenho.

---

## O que não entra nesta propagação

O Kamui e a troca posicional do Mangekyō da Saki permanecem como pontos de extensão nomeados e vazios na camada de Reação, e nenhuma ficha os preenche.

A régua de deslocamento de VEL × 10 metros por rodada não é tocada, e a auditoria dela corre em lote próprio.

As três devoluções do Bloco 8, o Susanoo como plataforma, a forma multificha dos Oito Portões e os riders com Velocidade por ficha, permanecem abertas.

O veneno continua sem vetor próprio.
