---
id: plano.claude-code.propagacao-agosto
title: "Plano Mestre de Propagação — Levas de 20 a 22 de agosto"
version: 4
layer: handoff
status: pronto-para-execucao
supersedes: "Plano de Propagação para o Claude Code v1"
---

# Plano Mestre de Propagação

Reconcilia as cinco sessões de 20 a 22 de agosto num único roteiro de execução. Substitui a versão 1 integralmente, que foi escrita antes dos manifestos e continha três premissas erradas.

As tarefas do briefing da Sessão 5 continuam sendo citadas pelo número nos Blocos 1 e 8, e por isso aquele briefing acompanha este plano em vez de ser descartado.

Este documento é a primeira leitura de qualquer sessão do Claude Code que trabalhe nesta leva. Ele declara o que é fonte, o que é lixo, o que colide e em que ordem tudo entra.

---

## 1. Achados que mudam a execução

Sete descobertas dos manifestos. As três primeiras teriam produzido corpus incorreto se a propagação tivesse começado sem elas.

### 1.1 O Núcleo de Combate v2 não é um documento pronto

O manifesto da Sessão 4 corrige o próprio estado após verificação linha a linha. O `combat-core.md` v2 está **transicional**: vigente apenas para o vocabulário de Assinatura, e não vigente para o motor de resolução. Os passos 5 e 6 ainda rolam d100 para Esquiva, o passo 9 ainda subtrai `RES × 3` com piso de dez por cento, e os quatro vetores não existem no arquivo.

Consequência: o v2 entra no repositório como base de trabalho declarada transicional, nunca como documento vigente, e o Bloco 1 o converte em v3 antes que qualquer outra coisa o leia.

### 1.2 O Manual de Criação de Jutsus v3 nunca foi escrito

O manifesto da Sessão 4 declara textualmente que o MCJ v3 foi citado e nunca produzido. Existe apenas o briefing de abertura, que a Sessão 5 consumiu ao produzir o Consolidado. O repositório segue com o v2.11, que ainda publica `mult_Tipo` na seção 5.3 e riders por elemento como obrigação na 5.4.

Consequência: o MCJ v3 é escrito uma vez só e absorve quatro origens ao mesmo tempo, a errata do Lote de Tipos, o motor do Consolidado, a cadeia de Velocidade e a Errata E1. A Sessão 4 retirou de propósito a errata do MCJ da fila do Claude Code para não gerar versão intermediária morta, e essa decisão é preservada aqui.

### 1.3 A errata de rótulo do multiplicador inverte o que o v2 acabou de escrever

A Sessão 4 gravou no Núcleo que a Assinatura é propriedade do defensor. O Adendo da Sessão 5 declara o contrário, que o `mult_Tipo` é letalidade intrínseca do elemento, e que o slot do defensor fica livre para ser ocupado pelo Estado Elemental.

O Adendo é posterior e é errata explícita, então vence. Sem esta sinalização, o Bloco 1 preservaria a redação do v2 por parecer recente.

### 1.4 O Handoff do Lote de Vetores existe em duas cópias

O S3-01 é o original da sessão que o produziu. O S5-02 é reconstrução feita a partir do texto de conversa, e o próprio manifesto da Sessão 5 avisa que não há garantia de identidade com o original.

Consequência: **S3-01 é a fonte. O S5-02 é descartado e não entra no repositório.**

### 1.5 A Resistência por Constituição foi revogada sem que ninguém registrasse a revogação

A Sessão 4 deixou a Resistência Elemental pausada com a seção 1 aprovada, definindo a fonte como Constituição, com três origens, linhagem, transformação sustentada e corpo não humano. O Adendo da Sessão 5 fechou o assunto por caminho oposto, registrando que nenhuma fonte canônica mostra resistência por constituição passiva, e resolvendo tudo por Estado Elemental declarado.

O Adendo é posterior e é fechamento, então vence. A aprovação parcial da Sessão 4 fica **revogada**, e o Bloco 1 não deve honrá-la ao encontrar a pendência registrada.

### 1.6 O crítico deixou de ser pendência

A edição posterior do briefing da Sessão 5 fechou o item: o crítico mantém a rolagem de d100 sem alteração de número, e o Núcleo passa a declarar em uma frase que a proibição de rolagem se aplica ao acerto e não à qualidade do golpe. Isso precisa entrar redigido, porque a remoção do d100 da Esquiva no mesmo bloco convidaria à remoção errada.

### 1.7 Dois documentos ficaram órfãos entre as levas

Nenhum briefing atribuiu dono a estes dois trabalhos, e sem eles o corpus fica incoerente depois da propagação.

**Cálculos Rápidos de Testes.** O documento publica Potência como grandeza viva, a fórmula antiga de Energia com `multiplicador de Tipo`, o Limiar de Esquiva como grandeza de ficha e a Escada de Afinidade como bônus de teste. As quatro coisas morrem nesta leva. Ele precisa de reescrita própria, não de errata pontual.

**A purga do VEL÷15.** A Cadência nova está fechada no Consolidado, mas a regra revogada segue publicada em sete lugares, Núcleo do Sistema seção 4, Núcleo de Combate seções 2 e 7, as duas fichas de Tomon dos Oito Portões, Sistema dos Oito Portões seção 6.1, Poder Celeridade e Mueishō grau 2, e a Auditoria dos Oito Portões. Só o Núcleo de Combate está coberto pela Tarefa 1.

---

## 2. Fonte, contexto e lixo

### 2.1 Vai para o repositório como documento de sistema

Commit seu, nos caminhos canônicos, antes de qualquer sessão do Claude Code.

| Arquivo enviado | Caminho | Estado a declarar |
|---|---|---|
| S4-01_elemental-system.md | `worlds/naruto/systems/elemental-system.md` | vigente, v8 |
| S4-03_advanced-natures.md | `worlds/naruto/systems/advanced-natures.md` | vigente, v6 |
| S4-02_combat-core.md | `core/combat-core.md` | **transicional**, v2 |

No `combat-core.md`, edite o front matter para `status: transicional` antes do commit, com uma linha de nota dizendo que o motor de resolução dos passos 5, 6, 8 e 9 é anterior ao Lote de Vetores e será substituído pelo v3. Isso impede que qualquer leitor futuro, humano ou agente, o tome por vigente.

Antes do commit das Naturezas Avançadas, confira o front matter do arquivo que está hoje no repositório. O manifesto registra divergência não resolvida, front matter dizendo v5.4 e índice do corpus indexando v2. Se o repositório tiver conteúdo que o v6 não contemple, isso precisa ser visto antes de sobrescrever.

### 2.2 Vai para o repositório como material de propagação

Crie a pasta `handoffs/` e comite estes seis arquivos nela, mais este Plano Mestre. Eles não são regra, são a fonte que o Claude Code consulta, e viver no repositório é melhor que reanexar a cada sessão, porque anexo esquecido é a principal causa de propagação incompleta.

| Arquivo | Papel |
|---|---|
| S5-03_CONSOLIDADO-FINAL-motor-de-jutsus-e-conexao.md | fonte única do motor de dano, Velocidade, conexão e XP |
| S5-05_ADENDO-resistencia-elemental.md | Estado Elemental e errata de rótulo |
| S3-01_HANDOFF-lote-de-vetores-FECHADO.md | quatro vetores, escadas, riders |
| S2-01_HANDOFF-motor-de-combate-lote-1-FECHADO.md | motor físico e oleoduto defensivo |
| S5-04_BRIEFING-CLAUDE-CODE-propagacao-integral.md | detalhamento das tarefas citadas pelos Blocos 1 e 8 |
| Errata-E1-Eixo-de-Posicao-Elemental-v2.md | eixo de posição elemental |

Renomeie sem o prefixo de sessão ao comitar. O prefixo serviu para o upload e perde a função no repositório.

Acrescente ao `CLAUDE.md` do repositório, ou crie se não existir, um bloco de hierarquia:

```
Ao trabalhar na propagação de agosto de 2026, leia primeiro
handoffs/PLANO-MESTRE-propagacao.md. Documentos em handoffs/ são
fonte de decisão e nunca são citados como regra pelo corpus. Regra
vive apenas nos documentos de core/ e worlds/. Em conflito entre um
handoff e um documento do corpus, o handoff vence apenas se o
Plano Mestre listar o documento como alvo de bloco ainda não
executado.
```

### 2.3 Não entra no repositório

| Arquivo | Motivo |
|---|---|
| S5-02_HANDOFF-lote-de-vetores-FECHADO.md | reconstrução sem garantia de fidelidade, o S3-01 é o original |
| S4-04_BRIEFING-motor-de-jutsus.md | consumido pela Sessão 5, e sua premissa sobre o Núcleo era incorreta |
| S3-02_BRIEFING-resistencia-elemental.md | consumido pelo Adendo, e a linha de Constituição foi revogada |
| S2-02_BRIEFING-lote-de-vetores.md | consumido pela Sessão 3 |
| S1-01_claude_HANDOFF-reimaginacao-motor-de-combate.md | superado pelo S2-01 por declaração explícita |
| Todos os `*_MANIFESTO*.md` | serviram para montar este plano e não têm função depois dele |

Guarde os descartados fora do repositório, num arquivo morto. Eles são o registro de por que as decisões são o que são, e um dia isso importa.

---

## 3. Quantos agentes, qual modelo

### 3.1 Um agente para a espinha

A versão 1 deste plano propunha duas trilhas paralelas. Os manifestos derrubam essa proposta, e registro a reversão em vez de esconder. A razão é o achado 1.2: como o MCJ v3 precisa absorver a Errata E1, a trilha que eu tinha imaginado como independente passou a alimentar a trilha principal. Os conjuntos de arquivos deixaram de ser disjuntos.

Além disso, sete dos dez blocos leem um documento que o bloco anterior acabou de escrever. Paralelizar cadeia serial não economiza tempo, produz duas visões parciais que se contradizem no merge.

**Recomendação: um agente, um bloco por sessão, commit ao fim de cada bloco.** Não junte dois blocos na mesma sessão nem na mesma mensagem, mesmo quando parecerem pequenos. O ganho de contexto limpo entre blocos vale mais que a economia de setup.

### 3.2 Um segundo agente, apenas para a trilha órfã

O Bloco P, a purga do VEL÷15, toca apenas os documentos dos Oito Portões, o Poder Celeridade e a Auditoria, que nenhum outro bloco escreve. Essa é a única paralelização segura, e ela pode rodar a qualquer momento depois do Bloco 1.

### 3.3 Modelo e nível de raciocínio por bloco

| Bloco | Modelo | Raciocínio | Por quê |
|---|---|---|---|
| 1, Núcleo v3 | Opus | máximo | operação mais delicada da leva, recorte cirúrgico com inversão de redação recém escrita |
| 2, Sistema Elemental e vizinhos | Opus | alto | rebase sobre v8 com três origens somando no mesmo arquivo |
| 3, MCJ v3 | Opus | máximo | quatro origens convergindo, e é a fonte de todas as fichas |
| 4, Efeitos de Status | Opus | alto | a Vulnerabilidade Elemental precisa de decisão de redação, não de aplicação |
| 5, Perícias de natureza | Sonnet | médio | substituição de redação em seis arquivos, sem julgamento |
| 6, Cálculos Rápidos v2 | Opus | alto | documento derivado de quatro fontes, erro aqui contamina a mesa |
| 7, Template e fichas nominais | Sonnet | alto | volume médio com aritmética verificável |
| 8, Repasse do corpus | Sonnet | médio na fase 1, alto na fase 2 | trezentas entradas mecânicas, e a fase 2 é triagem de ambiguidade |
| 9, Aplicação | Opus | máximo | vira RFC de arquitetura, é decisão e não execução |
| P, Purga do VEL÷15 | Sonnet | baixo | busca e substituição com verificação |

Regra transversal, independente de modelo: nenhum valor inventado para lacuna, lacuna volta como lista, ambiguidade real vira RFC de uma pergunta, nunca escolha silenciosa.

---

## 4. Os dez blocos

Ordem obrigatória de 1 a 9. O Bloco P corre em paralelo depois do 1.

| Bloco | Escreve | Lê |
|---|---|---|
| 1 | `core/combat-core.md` v3 | Consolidado, Adendo, Handoff de Vetores, Handoff do Lote 1 |
| 2 | `elemental-system.md` v9, `advanced-natures.md` v7, criação de naturezas | Errata E1, Adendo |
| 3 | `jutsu-authoring.md` v3 | Núcleo v3, Consolidado, Errata E1, Sistema Elemental v9 |
| 4 | `core/status-effects.md` | Consolidado, Adendo, Handoff de Vetores |
| 5 | seis perícias de natureza | Errata E1, Sistema Elemental v9 |
| 6 | `core/quick-calculations.md` v2 | Núcleo v3, MCJ v3, Errata E1, Núcleo de Perícias |
| 7 | template de técnica e fichas nominais | MCJ v3, Consolidado, Adendo |
| 8 | corpus de técnicas, duas fases | tudo acima |
| 9 | relatório e RFC da aplicação | tudo acima |
| P | sete documentos com VEL÷15 | Consolidado seção 5.6 |

### Bloco 1, Núcleo de Combate v3

Aplica a Tarefa 1 do briefing da Sessão 5 sobre o v2 transicional, mais a seção de Estado Elemental do Adendo, mais a inversão de rótulo.

Morre: Potência e coeficientes de arma sobre ela, d100 de Esquiva, Absorção subtrativa com piso de dez por cento, Limiar de Esquiva como grandeza de ficha, Guarda seca sem perícia, VEL÷15 nas seções 2 e 7.

Entra: motor físico do Lote 1, Absorção proporcional, os quatro vetores com escadas e contrapesos, Esquiva como teste oposto de base cinquenta lendo a Velocidade efetiva do Consolidado, Cadência pela razão de VEL, PS drenado pela Guarda contando como Esforço, seção nova de Estado Elemental com os três Modos e o pacote de vulnerabilidade, e a frase que separa rolagem de acerto de rolagem de qualidade.

Inverte: a Assinatura deixa de ser descrita como propriedade do defensor e passa a ser letalidade intrínseca do elemento, conforme a seção 3 do Adendo. Nenhum número muda por causa disso.

Sobrevive: economia de PS, Exaustão Física com o acoplamento documentado, motor de manobras, vantagem numérica, área e campo, crítico com d100 intacto, dano de fonte sem ficha com Potência renomeada para Energia.

Correções herdadas: teste do defensor pesado de 31 para 39, pendência de regeneração de PS retirada, acoplamento entre regeneração da Guarda e a tabela de Exaustão documentado.

### Bloco 2, Sistema Elemental v9 e vizinhos

Base: o v8 recém comitado, que já contém Constante de Moldagem e Assinatura. A Errata E1 se soma sem tocar nisso.

Aplica os alvos 1, 2, 3 e 4 da Errata E1 v2, mais o item 2 da fila do Adendo, mais a errata de redação da tabela de rider natural para tendência declarada pela obra. As Naturezas Avançadas saem em v7. O documento de Naturezas de Chakra na Criação de Personagem sai atualizado.

Os alvos 5 e 6 da E1 continuam bloqueados por documentos não publicados. Registre a pendência e não edite por inferência.

Registre também, sem resolver, a pendência de substituição de rider por Kyōka na seção do Shiden.

### Bloco 3, Manual de Criação de Jutsus v3

Quatro origens no mesmo arquivo, escrito uma vez só.

Do Lote de Tipos: `mult_Tipo` vira `CM × Assinatura` na seção 5.3, e a seção 5.4 passa a publicar riders como tendência.

Do Consolidado: motor de dano com pisos por rank, executor de referência, teto anti-inflação, cláusula de área por valor de campo e célula de quatro; seção nova de Velocidade da obra com a cadeia de quatro fatores, a escada de meios e as isenções; seção 6.5 recortada, perdendo o eixo de velocidade e mantendo construção; seção 4.1.3 com posição por entrega e Régua de Resposta; regra da RC limpa.

Da Errata E1: a Janela de Canalização passa a ler o Limite de Saída por posição do executante.

Validação obrigatória: as três âncoras de calibração, Chidori, Kirin e Goukakyuu, recalculadas pela régua nova e republicadas no documento.

### Bloco 4, Sistema de Efeitos de Status

Entra a escada de penalidade dos riders físicos, 15, 30, 50 e 70 por cento sobre os pares de atributos, Perfuração em FOR e VEL, Secção em DES e DEF, espelhando a Queimadura com os mesmos comportamentos de resíduo, persistência e permanência.

Resolve a Vulnerabilidade Elemental, que hoje cita em três dos quatro graus uma Resistência que nunca existiu. Com o Adendo fechado, resistência é Estado Elemental declarado e não é grandeza reduzível por percentual. A condição precisa ser reescrita para operar sobre algo que existe. Se a reescrita exigir decisão de desenho, isso sobe como RFC de uma pergunta em vez de ser resolvido no bloco.

### Bloco 5, perícias de natureza

Alvo 7 da Errata E1 nos seis arquivos de perícia elemental, mais Liberação de Yin e Liberação de Yang se estiverem publicadas. A perícia deixa de republicar o número do Limite de Saída e aponta para o dono.

Corrija também a legenda invertida do Ciclo de Superação em `worlds/naruto/natures/overview.md`.

Registre sem resolver a colisão da transcendência Raio Seco do Raiton, que revoga a Absorção inteira contra Relâmpago e contradiz a decisão de que Raio não fura Absorção.

### Bloco 6, Cálculos Rápidos v2

Reescrita, não errata. O documento hoje publica quatro coisas mortas: Potência como grandeza e como termo da fórmula de Energia, o multiplicador de Tipo com o nome antigo, o Limiar de Esquiva como grandeza de ficha, e a Escada de Afinidade como soma fixa ao teste.

Reescreva lendo o Núcleo v3, o MCJ v3 e o Núcleo de Perícias. A pendência do documento sobre o coeficiente 25 de Potência morre junto com a grandeza.

### Bloco 7, template e fichas nominais

Template de Documento de Técnica ganha os campos de vetor, grau, riders, Velocidade, Perfil de Evasão recortado, posição elemental e os cinco campos de Estado.

Fichas nominais: Raikiri 1.500, Eisō, Senbon, Nagashi e Shiden 783, Kieru 913, Chidori intocado em 750, proporção da família recalculada com Raikiri em 2,00. Rasengan mantém coeficiente técnico 3,0 e a errata antiga para 2,4 fica revogada.

Fichas com resistência descrita em prosa, Domu, Hidrificação, armaduras elementais e transformações de linhagem, passam a declarar os cinco campos de Estado.

### Bloco 8, repasse integral do corpus

Cerca de trezentas entradas ofensivas em quatorze compêndios mais cinquenta e duas fichas avulsas, em duas fases, conforme a Tarefa 4 do briefing, somando o alvo 8 da Errata E1 e o item 5 da fila do Adendo.

Cada arquivo é aberto uma vez e sai completo: vetor, grau, riders, celeridade resolvida, dano recalculado, posição elemental, LS recalculado com Janela e usos em cascata, preço regenerado.

A fase 2 devolve a lista de exceções para você, uma decisão por linha, ordenada por tamanho da divergência.

### Bloco 9, aplicação

Relatório de divergência primeiro, sem tocar em código. Cobre as grandezas novas do modelo de dados, celeridade, Fator de Seção, Ímpeto, M_vel, w, P por perícia governante, RC limpa contra nominal, posição elemental por natureza, e os órfãos herdados, a Reação 75 sem documento de origem, a taxonomia das sete espécies de grandeza sem distinção visual, e o Limiar de Esquiva que sai da ficha.

Se exigir alteração de modelo de dados, vira RFC de arquitetura e para.

### Bloco P, purga do VEL÷15

Sete lugares, listados no achado 1.7. Substitui pela Cadência do Consolidado, razão de VEL contra o oponente mais rápido engajado, um e meio concede uma ação extra, dois e meio concede duas, teto de duas, cada ação paga o próprio Esforço.

O Núcleo de Combate está coberto pelo Bloco 1 e não deve ser tocado aqui.

---

## 5. Controle de modelo e paradas de bloco

O Claude Code não troca de modelo sozinho. A escolha é sempre sua, por quatro caminhos: o comando `/model` dentro da sessão, a flag `--model` no lançamento, a variável de ambiente `ANTHROPIC_MODEL` e o campo `model` no arquivo de configuração, nessa ordem de prioridade. Existe uma única exceção automática, o alias `opusplan`, que usa Opus no modo de planejamento e troca para Sonnet na execução.

**A recomendação para esta leva é não trocar de modelo dentro de sessão nenhuma.** Como o plano já pede um bloco por sessão com commit ao final, o modelo entra no lançamento e não muda mais. Isso evita o custo da troca: o cache de prompt é por modelo, então trocar no meio obriga o modelo novo a reprocessar todo o contexto acumulado, o que consome tempo e limite de uso sem entregar nada.

### 5.1 Comando de lançamento por bloco

```
Bloco 1   claude --model opus      # raciocínio máximo
Bloco 2   claude --model opus
Bloco 3   claude --model opus      # raciocínio máximo
Bloco 4   claude --model opus
Bloco 5   claude --model sonnet
Bloco 6   claude --model opus
Bloco 7   claude --model sonnet
Bloco 8   claude --model sonnet    # uma sessão por fase
Bloco 9   claude --model opus      # raciocínio máximo
Bloco P   claude --model sonnet    # segundo terminal, em paralelo
```

Confira com `/status` que o modelo ativo é o esperado antes de dar a primeira instrução. Sessões retomadas com `--resume` ou `--continue` mantêm o modelo que tinham quando foram salvas e ignoram a configuração atual, então retomada exige conferência.

### 5.2 Parada obrigatória ao fim de cada bloco

Acrescente ao `CLAUDE.md`, junto do bloco de hierarquia da seção 2.2:

```
Ao executar um bloco do Plano Mestre de propagação, execute apenas o
bloco pedido. Ao terminá-lo, pare e escreva um relatório de parada com
quatro itens: arquivos escritos, decisões tomadas dentro do bloco,
lacunas devolvidas como lista, e RFCs abertas. Depois do relatório,
não inicie o bloco seguinte, não sugira iniciá-lo e aguarde instrução
nova. A troca de modelo entre blocos é feita por Gabriel fora da
sessão, e prosseguir sem ela executa o bloco no modelo errado.
```

Repita a última frase no fim de cada mensagem de bloco, porque instrução no arquivo de configuração compete com a instrução da conversa e a da conversa é a que o modelo tem diante dos olhos.

### 5.3 Se você preferir sessão única

Funciona, com duas ressalvas. Troque de modelo somente no limite entre blocos, depois do commit, e rode `/clear` antes de trocar, para que o contexto do bloco anterior não seja reprocessado pelo modelo novo. Confira o nível de raciocínio depois de cada troca, porque ele não sobrevive à mudança de modelo e volta ao padrão daquele modelo.

### 5.4 A exceção útil

Dentro dos blocos de Opus que têm parte mecânica pesada, especialmente o Bloco 8, você pode delegar a varredura a um subagente rodando em Sonnet sem trocar o modelo da sessão principal. É a única forma de misturar modelos sem pagar o preço da troca, e ela mantém o julgamento no Opus e o volume no Sonnet.

---

## 5. Pendências que não entram nesta leva

| Item | Estado |
|---|---|
| Veneno como vetor próprio | fora de escopo desde o Lote de Vetores, nunca estudado |
| Terceira Assinatura, química ou corrosiva | sem número, depende do veneno |
| Reserva de Chakra, dono do Limite de Saída | documento não publicado, trava o alvo 5 da E1 |
| Manual de Treino, dono dos limiares | documento não publicado, trava o alvo 6 da E1 |
| Transcendência Raio Seco | colisão de desenho, registrada no Bloco 5 |
| Substituição de rider por Kyōka no Shiden | registrada no Bloco 2 |
| Bônus de esquiva como régua própria | citado no Consolidado sem fonte confirmada no corpus |
| Valores intermediários da Escada de Celeridade | vigentes por delegação, sem a rodada de física que os fundamentaria |
| Divergência do bônus de Controle de Chakra, 90 contra 122 a 151 | herdada da Sessão 1, nunca reauditada |
| Calibragem fina de 25% e 15% no Limite de Saída | pertence ao Lote 2 |
