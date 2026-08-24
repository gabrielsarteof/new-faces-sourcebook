---
id: naruto.system.compendium-standard
title: "Norma de Produção de Compêndios"
version: 3.1
layer: scenario
scenario: naruto
type: methodology
status: final
source-file: Norma_de_Producao_de_Compendios_v2-2.md
---

# Norma de Produção de Compêndios · v3.1

Padrão estrutural e editorial para compêndios de técnicas do RPG Canônico 1:1 de Naruto.

**O que mudou na v3.1.** Resolve uma colisão de versão. Duas levas independentes numeraram esta norma ao mesmo tempo e mudaram coisas diferentes: a da nomenclatura publicou o formato de heading em v3.0, e a do Lote de Evasão e Leitura publicou os campos de resolução em v2.10 e v2.11. As duas estão inteiras aqui, e a versão sobe um degrau acima da mais alta das duas, no mesmo procedimento que o Manual de Criação de Jutsus já aplicou três vezes. Nenhum dos dois conjuntos perdeu linha.

**O que mudou na v3.0.** O heading da entrada passa a publicar a romanização, e a linha seguinte passa a publicar o kanji e o nome em português. A ordem anterior punha o português no heading, e ela já convivia com exceções nunca declaradas, Takemikazuchi e Kirin sempre entraram em japonês puro, porque não existe tradução que valha. A Seção 10 recebe o formato novo, a regra de não invenção, a cláusula do substantivo próprio sem tradução e a fronteira contra a nomenclatura de perícia. O `registro-de-nomes` nasce como a concordância única dos três nomes.

**O que mudou na v2.11.** A Seção 10 publica o Alcance categórico, campo obrigatório em toda entrada, e o declara a única autoridade sobre qual teste a entrada resolve. A Banda Mínima e a Banda Máxima perdem qualquer papel de classificação, e o texto diz por quê: a passada de propagação encontrou entradas de alvo único carregando as duas por herança. Os três campos de geometria passam a acompanhar o Alcance categórico e não a presença de banda. O Perfil de Evasão passa a declarar que a escada alcança Alvo e Linha, e a precondição do degrau Inevitável ganha as quatro vias de negação que o Manual de Criação de Jutsus v3.6 enumera.

**O que mudou na v2.10.** A Seção 10 publica os campos que os compêndios já escreviam sem contrato, o Vetor, e os campos que o Lote de Evasão e Leitura criou, o Perfil de Evasão, a Régua de Leitura, as Linhas simultâneas e as três grandezas de área. A ordem dos campos passa a ser a do formato acima, com o Vetor e o Perfil antes das bandas e as três grandezas de área depois delas. Nenhuma camada de acesso, etiqueta, régua de preço ou teste de pertencimento mudou.

**O que mudou na v2.8.** O compêndio deixa de ser lido como fonte de preço definitivo. A Seção 1 declara o status normativo por inteiro: o compêndio é catálogo de existência, o XP publicado em entrada sem ficha é provisório, o provisório morre quando a ficha nasce ou quando a regra do domínio é produzida, e não há retroatividade sobre quem já comprou. A Seção 10 ganha o marcador `[provisório]` obrigatório no campo de XP de toda entrada sem ficha, e a Seção 12 fecha a pendência de convivência do preço, que vivia registrada sem dono desde a v2.

**O que mudou na v2.7.** O Compêndio de Kyūinjutsu registra o primeiro uso da camada Requisito Mecânico com insumo que ainda não existe como campo de ficha, a posse de um dojutsu ou de uma natureza avançada não implementados. A seção 6 já previa insumo declarado como requisito válido, e o caso apenas confirma a leitura: a entrada publica o requisito e permanece inerte até que o insumo exista, sem exigir mudança de forma.

**O que mudou na v2.6.** O Núcleo de Combate publicou a resolução de área e campo pelo centro escolhido, e a Seção 10 ganhou os dois campos que faltavam para uma entrada de área ou campo declarar até onde o executor projeta esse centro, Banda Mínima e Banda Máxima. As entradas de categoria Alvo não ganham os dois campos, porque o alcance delas já morava na prosa das Restrições e continua lá.

**O que mudou em relação à v1.** A versão anterior mandava todo compêndio reescrever seis blocos normativos idênticos. As definições viviam aqui e viviam de novo dentro de cada artefato, e alterar uma delas exigia reabrir todos os compêndios existentes. Nesta versão as definições vivem apenas neste documento, e o compêndio passa a ser catálogo puro. Acrescentar um domínio novo deixa de reabrir qualquer documento anterior.

---

## 1. Papel do compêndio

O compêndio é o catálogo de existência de um domínio. Ele responde quais técnicas existem, quem as acessa e sob que requisitos.

O que essa técnica é. O que ela exige de quem a quer.

A perícia governa níveis, inclinações, caminhos e transcendências, e não embute técnica nomeada em nível algum. O compêndio governa as técnicas, e não redefine regra alguma.

**O que um compêndio não é.** Documento de preço definitivo, e não é fonte de RC. O XP publicado em entrada sem ficha é provisório, atribuído por estimativa descritiva para que a entrada exista na economia antes de ser produzida.

**Quando o provisório morre.** No momento em que a técnica recebe ficha própria, três coisas são refeitas a partir das regras vigentes daquele domínio e do motor do sistema: a RC nominal limpa, o custo de chakra com custo mínimo e Índice de Desperdício, e o XP pela apuração por entrega. A ficha substitui o compêndio nesses três campos, e a entrada de compêndio passa a apontar para ela. Divergência entre compêndio e ficha resolve sempre pela ficha, sem errata de conflito.

**Consequência para o domínio inteiro.** Quando a regra de um domínio é produzida, perícia elemental, sistema próprio ou linhagem, toda entrada daquele compêndio passa a ter os valores refeitos sob a regra nova, porque a regra do domínio é que define o que aquelas técnicas custam para existir. Até lá, o compêndio permanece rascunho publicado, e isso é estado esperado, não pendência.

**Não retroatividade.** Personagem que comprou pelo preço provisório não paga diferença nem recebe reembolso. O preço novo vale da publicação da ficha em diante.

---

## 2. Teste de pertencimento

Antes de escrever qualquer bloco dentro de um compêndio, aplique o teste.

**Se a frase continua verdadeira quando o domínio é trocado, ela não pertence ao compêndio.**

A definição de Patrimônio de Vila é a mesma no Suiton e no Genjutsu, logo ela mora aqui. A escala que converte rank em preço é a mesma nos cinco elementos, logo ela mora no Manual de Criação de Jutsus. O grau de moldagem exigido pela Prisão de Água é próprio daquela técnica, logo ele mora na entrada.

O teste é mecânico e decide todos os casos. Bloco reprovado sai do compêndio e recebe dono nomeado na tabela da seção 3.

---

## 3. Mapa de propriedade

Nenhuma regra é escrita em dois lugares. O compêndio cita o dono pelo nome e segue adiante.

**Um domínio pode ser propriedade de um sistema.** A tabela abaixo pressupõe, em quase toda linha, que o dono do domínio é a perícia dele, e isso vale para todo domínio cuja competência já nasceu. Existe o caso em que o domínio existe e a competência não: os Oito Portões governam um subsistema fisiológico e a perícia de corpo que os exerceria está na Fila de Nascimento. Nesse caso o dono é o documento de sistema, que carrega o identificador do domínio e responde por portão, escada e regra de execução até que a perícia nasça e assuma a posse sem que o identificador mude. O que não se admite é domínio sem dono declarado, porque catálogo que não se agrupa não se converte e não se audita.

| Matéria | Dono |
|---|---|
| Etiquetagem editorial | esta Norma, seção 5 |
| Camadas de acesso | esta Norma, seção 6 |
| Estado de autoria | esta Norma, seção 7 |
| Adaptação tecnológica da era | esta Norma, seção 8 |
| Fronteira da cópia pelo Sharingan | esta Norma, seção 9, e documento do Sharingan |
| Faixas de XP por rank e derivação do preço | Manual de Criação de Jutsus, seção 4.1 |
| Orçamento de ficha e economia de aquisição | Manual de Economia de XP |
| Portão de rank, escada de nível e regra de execução do domínio | perícia do domínio, ou o sistema dono quando o domínio ainda não tem perícia |
| Degraus de exigência de moldagem | Perícia de Controle de Chakra |
| Rider padrão do elemento e regra de condição | Sistema Elemental e Sistema de Efeitos de Status |
| Graus, durações e remoção de status | Sistema de Efeitos de Status |
| Relação de vantagem entre naturezas e colaboração | Sistema Elemental e Manual de Criação de Jutsus |
| Custo de RC e resolução de dano da técnica | ficha individual da técnica |
| Técnicas nomeadas, com rank, acesso, requisito, preço e descrição | compêndio |

---

## 4. Sequência estrutural do compêndio

A ordem é fixa e curta.

**Cabeçalho.** Nome do domínio em português, nome japonês com kanji, linha de subtítulo. Um parágrafo declarando o propósito de catálogo e o que cada entrada informa.

**Linha de referências.** Um parágrafo curto nomeando os documentos donos das regras que o compêndio usa, sem reproduzir nenhuma delas. É a única concessão a matéria normativa dentro do artefato.

**Entradas por rank**, de E a S, com faixa acima de S quando o domínio exigir. Seção 10.

**Índice Rápido por Função Tática.** Seção 11.

Nada mais entra. Contagem por rank, índice por camada, índice de preços e leitura da distribuição são vistas derivadas das entradas, recalculáveis a qualquer momento, e não pertencem ao artefato. Pendências de aprovação pertencem à fila de errata do projeto.

Dois blocos são admitidos além dos quatro, cada um sob a condição que o autoriza, e nenhum deles é porta aberta.

**Seção de cadeia**, no lugar da divisão por rank e somente para as entradas que formam uma. Cadeia tem definição estreita aqui: cada entrada exige a imediatamente anterior pela camada Requisito Mecânico, de modo que a ordem de aquisição é única e conhecida de antemão. Distribuir uma cadeia entre as seções de rank não é neutro, porque esconde a única coisa que o leitor precisa saber antes de comprar qualquer degrau dela, que é por onde se começa. A permissão nasce do que a própria sequência já fazia ao admitir faixa acima de S quando o domínio exigir: a divisão por rank é a regra e não um dogma, e cede quando a estrutura do domínio a contradiz. O resto do compêndio continua dividido por rank, e a seção de cadeia não recebe entrada que não pertença à cadeia.

**Bloco de notas**, ao fim, para justificar leitura editorial e nada além disso. A seção 5 obriga toda entrada a declarar de onde vem, e existe leitura que a etiqueta afirma sem conseguir explicar: por que uma entrada que a fonte registra sem requisito foi ligada a um, por que um nome foi preservado. Sem lugar para a justificativa ela vira uma de duas coisas piores, uma etiqueta que o leitor aceita sem conta ou matéria normativa contrabandeada para dentro da prosa da entrada. A nota é numerada, referida por marca na entrada que a exige, e não carrega regra: regra que apareça em nota está no documento errado.

O primeiro compêndio a usar os dois é o dos Oito Portões, e é do caso dele que a permissão nasce.

---

## 5. Etiquetagem Editorial

Três etiquetas, aplicadas a toda entrada, no formato `[ETIQUETA — Rank X]`.

**[CANON]** — rank confirmado por databook ou registro equivalente.

**[ATRIBUÍDO]** — técnica canônica sem rank oficial, com rank definido por escala de efeito.

**[PROPOSTA]** — técnica criada para o sistema, sem pertencer ao cânone.

---

## 6. Camadas de Acesso

Sete camadas. A camada responde à primeira pergunta do jogador diante da lista, que é se aquela técnica está disponível para ele. Toda entrada declara uma, e apenas pelo nome.

**Livre.** A perícia no nível exigido e o XP disponível bastam. Nenhuma aprovação adicional.

**Requisito Mecânico.** Disponível sem aprovação, travada atrás de outra técnica, perícia ou insumo declarado na entrada. O requisito é objetivo e verificável na ficha.

**Requisito de Segurança.** Aprendível por qualquer um que atenda ao nível de perícia. A ausência da condição declarada não impede o aprendizado e impõe a penalidade descrita na entrada durante a execução.

**Patrimônio de Vila.** A técnica tem dono coletivo. O acesso exige justificativa na ficção, por mestre, pergaminho recuperado, origem na vila detentora, deserção ou captura em campo. Aprovação narrativa leve. A vila detentora vem nomeada entre parênteses.

**Assinatura Pessoal.** Técnica autoral de um shinobi específico, fora da compra livre na criação. Exige explicação coerente e aprovada dentro da história, sem atropelar personagens importantes, sem roubar o peso de uma técnica lendária e sem criar vínculo sem sentido no mundo. XP, requisito mecânico e afinidade não substituem o contexto.

**Transmissão Direta.** Não se aprende por treino e não se copia por observação. Existe apenas por concessão direta de quem a possui.

**Fechada na Criação.** Indisponível para personagem inicial em qualquer circunstância. Alcançável somente em jogo, pelo caminho descrito na entrada.

---

## 7. Estado de Autoria

Aplica-se a toda técnica classificada como Assinatura Pessoal, porque a linha do tempo da campanha diverge do cânone e nem todo criador registrado existe nela. O estado acompanha a camada na mesma linha.

**Registrada.** O criador existe na história deste mundo e a técnica pertence a ele. O acesso do jogador depende da regra de contexto aprovado.

**Autoria Aberta.** A técnica é possível pelas leis do chakra e ninguém no mundo a criou ainda. Nenhum personagem inicial pode adquiri-la. Pode ser inventada em jogo por quem cumprir o requisito mecânico e concluir o processo de criação de técnica. O primeiro a alcançá-la torna-se o criador, a entrada passa a Registrada e a técnica converte-se em assinatura pessoal daquele personagem.

---

## 8. Adaptação Tecnológica

A era da campanha não possui ferramentas ninja científicas. Técnicas cuja execução canônica dependia de dispositivos entram no registro exclusivamente em suas formas de moldagem pura, com o custo de chakra que o dispositivo contornava devolvido integralmente ao usuário. Variantes assistidas por ferramenta permanecem fora do registro. Suprimento shinobi tradicional, como pergaminhos de selagem, arames, óleos e lâminas, permanece disponível e não é tecnologia.

---

## 9. Fronteira da Cópia pelo Sharingan

O Sharingan reproduz moldagem observada e não fabrica afinidade. A cópia exige que o portador possua a perícia do domínio no nível da técnica copiada.

A cópia alcança livremente as camadas Livre e Requisito Mecânico. No Requisito de Segurança funciona plenamente, e o portador do olho é justamente quem executa sem a penalidade. Patrimônio de Vila e Assinatura Pessoal são mecanicamente copiáveis, e é aí que a regra de contexto opera, porque reproduzir moldagem alheia difere de possuir direito reconhecido sobre a técnica. Permanecem fora do alcance da cópia a Transmissão Direta, as técnicas dependentes de condição de campo e as que exigem fisiologia específica.

Entrada cuja execução exige volume de reserva que nenhum corpo humano carrega declara essa condição na própria prosa, e a declaração é o que a retira do alcance da cópia.

---

## 10. Formato de entrada

```
### Romanização
**漢字 · Nome em Português**
**[ETIQUETA — Rank X]**
**Acesso:** Camada
**Requisitos:** Perícia LV · Moldagem · Caminho
**Vetor:** Vetor · Grau · Celeridade
**Alcance categórico:** Alvo, Linha, Área ou Campo
**Perfil de Evasão:** Degrau
**Régua de Leitura:** Classe · teste do executor
**Linhas simultâneas:** N
**Banda Mínima:** Banda
**Banda Máxima:** Banda
**Profundidade máxima:** N m
**Abrangência:** N m
**Espécie:** expande ou aparece
**XP:** N

Corpo em prosa.
```

**Os três nomes.** O heading publica a romanização, que é o nome primário. A linha imediatamente abaixo publica o kanji e o nome em português, separados pelo ponto médio que as demais linhas da entrada já usam. O projeto é canônico um para um, a fonte nomeia em japonês, e o nome em português é escolha de localização sobre a qual mangá, dublagem e legendas discordam entre si.

```
### Raikiri
**雷切 · Cortador de Raio**
```

**O ponto médio é tipografia, e o leitor não depende dele.** Cento e noventa e uma das entradas do catálogo publicam ponto médio dentro do próprio lado japonês, cento e noventa como `・` e uma como `天の呪印 · 地の呪印`, com o mesmo sinal que separa os dois nomes. Quem lê a linha parte pela fronteira entre as duas escritas, que é intrínseca ao conteúdo: nenhum lado japonês do catálogo carrega caractere latino, e nenhum nome pode gastar essa fronteira do jeito que gasta um delimitador. Trocar o ponto médio por outro sinal não conserta nada e trocar o leitor por um `split` volta a quebrar as cento e noventa e uma.

**Substantivo próprio sem tradução.** Quando não existe nome em português que acrescente sentido, a linha publica apenas o kanji e o heading fica com o nome. É o caso do Takemikazuchi, do Kirin e do Amaterasu.

```
### Takemikazuchi
**建御雷神**
```

A entrada nesse formato **não publica romanização**, e o heading dela não é tomado por uma, mesmo quando se lê como tal. Tomar o heading por romanização é ler nome para dentro do documento em vez de para fora dele, e o campo ausente é honesto onde o campo preenchido seria uma afirmação que a entrada não faz.

**Regra de não invenção.** A entrada publica os nomes que existem e nenhum a mais. Entrada com os três reordena os três. Entrada só com o japonês permanece só com o japonês. Entrada só com o português **não recebe nome japonês gerado a partir do português nem do sentido**: ela sobe para a fila de decisão e espera. Romanização que pareça divergir do kanji publicado é reportada e não corrigida, porque conferir contra a fonte é trabalho de outra passada e corrigir de memória é inventar com outro nome.

**Fronteira contra a nomenclatura de perícia.** Esta seção governa o nome de obra nomeada, e nada além disso. As inclinações e os caminhos das perícias permanecem em português, porque a nomeação por imagem é invenção do sistema e não nome que a fonte batizou: Ponta, Lança, Rede, Meridiano, Tempestade e Canto dos Mil Pássaros não são traduções de coisa alguma. As transcendências conservam a nomeação deity-first já publicada. E o nome de perícia na linha de Requisitos segue a grafia da Seção 10 deste documento, que é matéria distinta: aquela governa a linha de requisitos, esta governa o heading.

**A concordância.** `worlds/naruto/compendiums/registro-de-nomes.md` publica uma linha por obra nomeada do corpus, com as três formas do nome, o domínio e a ficha quando houver. Nome citado em dois lugares é nome que só se mantém em um, e o registro é o lugar único.

**Acesso.** Nome da camada, com a vila entre parênteses quando for Patrimônio de Vila e o estado de autoria quando for Assinatura Pessoal. Sem definição ao lado.

**Requisitos.** Nível da perícia do domínio, degrau de moldagem e caminho, nesta ordem. O caminho aparece apenas quando a técnica reproduz o verbo mecânico de uma especialização, e a perícia dona vem entre parênteses quando não for a do domínio. Requisitos de outra natureza, como técnica prévia ou insumo, entram nesta mesma linha. O número do portão de rank não é reproduzido, porque é função do nível e já está publicado na perícia.

**Requisito de perícia pendente.** A entrada que exige uma competência cuja perícia o corpus ainda não publicou escreve a exigência com a palavra `perícia` em minúscula à frente, seguida da descrição do ofício e, quando houver, do nível: `perícia de arma LV5`, `perícia de combate corporal`. A minúscula é o que separa a exigência pendente do nome próprio de uma perícia publicada, que se escreve nu e capitalizado como `Raiton LV6`, e é por essa diferença que a conversão sabe que não deve procurar a exigência no catálogo. A anotação `*(perícia pendente)*` não faz parte da forma e não se acrescenta: a minúscula já diz o que ela dizia, e anotação depois do nível impede a leitura do próprio nível.

Publicada a perícia, a entrada passa a escrevê-la nua e capitalizada, e a exigência deixa de ser pendente sem que nada mais na linha mude.

**Vetor.** O vetor de entrega da obra, com o grau quando o vetor o tiver e a Celeridade do meio quando a obra atravessar distância. Entrada que não entrega dano por vetor próprio declara a ausência com a razão escrita, e entrada portada pelo corpo declara a ausência de celeridade pelo mesmo motivo.

**Alcance categórico.** Obrigatório em toda entrada. Uma posição na escada da Seção 12 do Núcleo de Combate, entre Alvo, Linha, Área e Campo, lida da prosa da própria entrada, com Alvo como valor de omissão. **É este campo, e nenhum outro, que decide se a entrada resolve o teste de conexão ou o teste de fuga.** A Banda Mínima e a Banda Máxima não entram nessa decisão em hipótese alguma: elas declaram até onde o executor projeta o centro de uma obra de área e não classificam a obra.

**Perfil de Evasão.** Um entre Telegrafado, Padrão, Teleguiado e Inevitável, lido da Seção 6.5 do Manual de Criação de Jutsus. O degrau é propriedade de construção e se lê da prosa da própria entrada, sem consultar ficha de executor. Padrão é o valor de omissão. Telegrafado exige que a prosa diga que a obra se anuncia antes de sair, que exige acúmulo visível ou que o campo inteiro a vê chegando. Teleguiado exige que a prosa diga que a obra persegue o alvo depois que ele se move. Inevitável exige rank A ou acima e uma precondição que o defensor possa negar, nomeada na entrada junto com o que a desfaz. Entrada que não resolve teste de conexão declara a não aplicabilidade com a razão escrita. A escada alcança apenas as entradas de Alvo e de Linha, e nas de Área e de Campo o degrau declarado permanece escrito e fica inerte, porque a resolução delas é a fuga.

A precondição do degrau Inevitável se nega por quatro vias, e a entrada declara qual delas vale: desfazer a precondição, sair do alcance dela, quebrar o que a sustenta, ou sobreviver à janela em que ela existe.

**Régua de Leitura.** Presente apenas na entrada cuja propriedade central é o alvo não saber do que se defender. Declara a classe, Engano ou Ilegibilidade, e o teste do executor que a régua opõe à percepção do observador. A régua vive em `naruto.system.reading-scale` e a entrada não a republica.

**Linhas simultâneas.** Presente apenas na entrada que alcança o mesmo alvo por mais de uma linha de aproximação distinta. Declara o número inteiro de linhas, e projéteis que chegam pelo mesmo ângulo contam como uma. A resolução lê a tabela de vantagem numérica da Seção 11 do Núcleo de Combate.

**Banda Mínima e Banda Máxima.** Presentes apenas em entrada de categoria Área ou Campo, na escada de bandas do Núcleo de Combate, Engajado, Curta, Média, Longa ou Extrema. Declaram até onde o executor projeta o centro da obra, medido do próprio corpo, e não o alcance da área ou do campo em si, que a escada da Seção 11 daquele documento já fixa a partir do centro escolhido. Ausentes em toda entrada de categoria Alvo, onde o alcance mora na prosa das Restrições como sempre morou.

**Profundidade máxima, Abrangência e Espécie.** Presentes exatamente nas entradas cujo Alcance categórico for Área ou Campo. A profundidade máxima é a distância em metros que o corpo mais enterrado precisa cruzar para sair da forma, e a abrangência é quanto chão a obra ocupa. As duas alimentam o teste de fuga da Seção 13 do Núcleo de Combate, e onde a prosa não publicar geometria em metros a entrada escreve `a publicar` em vez de inventar número. A espécie é `expande` por omissão, e `aparece` só onde a prosa disser que a obra surge sem intervalo em que o corpo pudesse sair.

**XP.** O número, seguido de `[provisório]` em toda entrada sem ficha própria, conforme a Seção 1. A escala que o produz e as faixas por rank pertencem ao Manual de Criação de Jutsus, e a derivação não é reescrita aqui nem na entrada. A entrada que aponta para ficha publicada não carrega o marcador, porque o número dali deixou de ser estimativa.

**Corpo.** Descreve a execução, o comportamento visual, a função tática e a posição da técnica dentro da tradição do domínio. Efeitos próprios da técnica, como elevação de rider, persistência em campo ou penalidade de segurança, são declarados no corpo, porque pertencem àquela técnica e a nenhuma outra.

A prosa segue o registro de wiki orgânica em português brasileiro, sem travessão, sem frase telegráfica, sem comparação negativa, sem enchimento e sem prosa roxa.

As entradas se organizam sob cabeçalhos de rank, de `## Rank E` a `## Rank S`, com faixa acima de S quando o domínio ultrapassar a régua e categorias especiais quando o domínio exigir.

---

## 11. Índice Rápido por Função Tática

Bloco de fechamento único e obrigatório. Agrupa as entradas por verbo de mesa, em blocos nomeados pela ação que o jogador quer executar e não pela mecânica que a resolve. É a vista que serve durante o jogo, quando a pergunta é o que fazer agora e não o que comprar depois.

Uma entrada pode aparecer em mais de um bloco.

---

## 12. Pendências

**Regra de convivência do preço, fechada na v2.8.** O número publicado no compêndio vale no momento da compra, com a ficha individual da técnica corrigindo o valor dali em diante sem retroagir sobre quem já pagou. A regra vive na Seção 1 deste documento.

`[pendente]` **Faixa alvo de acesso Livre.** O compêndio de Ninjutsu Médico se declara dentro de uma faixa e próximo do piso, o que implica uma banda declarada em algum lugar. O piso e o teto não aparecem em nenhum documento disponível.

`[pendente]` **Faixa de contagem total.** Os compêndios variam de quatro a cinquenta e quatro entradas, sem limite declarado. As duas pontas são domínios de escopo estreito e de escopo largo, o Ninjutsu de Forma e o Ninjutsu Médico, e nada declara se a distância entre elas é saudável.

---

## 13. Estado de conformidade

A conformidade que esta seção rastreia é a de forma de catálogo, que é o eixo em que esta norma rompeu com a v1: entrada no formato da seção 10 com a linha de XP, Índice Rápido da seção 11 presente, e nenhum bloco normativo reescrito dentro do artefato.

| Compêndio | Entradas | Estado |
|---|---|---|
| Katon v5 | 44 | em forma de catálogo |
| Fūton v4 | 34 | em forma de catálogo |
| Raiton v3.3 | 39 | em forma de catálogo |
| Suiton v3.1 | 35 | em forma de catálogo. O bloco de Grupo de Execução é dado do domínio e não definição reescrita |
| Ninjutsu Médico v2.1 | 54 | em forma de catálogo |
| Genjutsu v1 | 36 | em forma de catálogo |
| Inton v2.1 | 40 | em forma de catálogo |
| Yōton v2 | 40 | em forma de catálogo |
| Sensoriamento v1 | 36 | em forma de catálogo |
| Fūinjutsu v1.1 | 42 | em forma de catálogo, e o primeiro nascido sob esta norma. As três categorias especiais são partição de domínio |
| Oito Portões v1.1 | 17 | conforme, e o primeiro a estar sob a forma que a v2.4 fixou |
| Ninjutsu de Forma v1.1 | 4 | em forma de catálogo, e escrito já sob esta norma |
| Doton v2.1 | 34 | **fora de norma.** É o último a carregar blocos normativos reescritos, em Rider Elemental, Fronteira da Cópia pelo Sharingan, Contagem por Rank, Índice por Camada de Acesso, Distribuição de Moldagem e Pendências de Aprovação |
| Kyūinjutsu v1 | 19 | em forma de catálogo, escrito já sob esta norma. Duas entradas exigem Rinnegan e duas exigem a natureza Meiton, nenhuma das duas implementada, e o Bloco de notas da seção 4 justifica as quatro |

A reemissão que resta é a do Doton, e o trabalho é subtração: os seis blocos saem e as definições ficam onde já vivem, neste documento. A tabela anterior nomeava um estado que a passagem do tempo desfez, listando Fūton e Raiton em v2 e afirmando que nenhum dos dois possuía linha de XP, quando os dois foram reemitidos e a possuem, e omitia os cinco compêndios nascidos depois dela.

Dois compêndios reivindicam primazia e os dois têm razão em eixos diferentes, o que a tabela anterior não distinguia. O de Fūinjutsu é o primeiro nascido sob esta norma, no estado em que ela estava na v2.2, e é essa a afirmação que a Perícia de Fūinjutsu faz ao citar esta seção. O dos Oito Portões é o primeiro em conformidade com a forma que a v2.4 fixou, porque os dois blocos que ele acrescentava e que a v2.3 registrou como pendência foram acolhidos ali, cada um sob a condição que o autoriza, e é do caso dele que as duas permissões nascem.

O Compêndio de Ninjutsu de Forma é o terceiro escrito sob esta norma, e o primeiro cujo domínio pertence a uma perícia que não é uma natureza. A linha de requisitos das quatro entradas nomeia o Controle de Chakra, e a seção 10 se cumpre sem desvio, porque o eixo que governa o acesso ali é uma perícia.

Ele é também o primeiro cujo domínio não tem perícia dona, e por isso a linha de requisitos das oito entradas da cadeia não traz o campo de perícia que a seção 10 fixa. No lugar dela vêm a exigência de atributo e os Blocos de maturação, que são o que aquele domínio de fato cobra, e a posse do domínio fica com o documento de sistema pela regra da seção 3. É desvio declarado e não omissão: a seção 10 pede o eixo que governa o acesso, e ali ele não é uma perícia.

O Compêndio de Kyūinjutsu é o primeiro a publicar entrada travada atrás de um insumo que nenhuma ficha ainda sabe ler. Quatro das dezenove entradas exigem a posse do Rinnegan ou da natureza Meiton, e nenhum dos dois existe como campo verificável, porque o dojutsu não tem documento próprio publicado e a natureza aguarda o rework que lhe daria portão de acesso. A camada Requisito Mecânico já previa insumo declarado como requisito legítimo, e as quatro entradas cumprem a seção 6 sem exceção: o requisito está escrito, é objetivo e será verificável no dia em que o campo existir. Até lá, a entrada permanece publicada e inerte, e o Bloco de notas do compêndio nomeia os dois documentos que faltam.
