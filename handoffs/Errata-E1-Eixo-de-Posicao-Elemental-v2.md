---
id: naruto.system.errata-e1
title: "Errata E1 — Reforma do eixo de posição elemental"
version: 2
layer: scenario
scenario: naruto
type: pending-patch
status: pending
source-file: Errata-E1-Eixo-de-Posicao-Elemental-v2.md
---

# Errata E1 — Reforma do eixo de posição elemental

Aplica a reforma do que Afinidade, Compatibilidade e natureza aprendida entregam. O bônus fixo de teste é revogado nas três posições e substituído por modulação de vazão e de tempo de treino. Nove alvos no repositório, mais a fila de avaliação da aplicação. Cada entrada indica onde localizar, o que sai e o que entra.

Dois alvos dependem de documentos que não estão publicados no repositório na data desta errata e ficam registrados como dependência aberta, sem edição especulativa.

**Nota de rebase da versão 2.** A versão 1 desta errata foi escrita lendo o Sistema Elemental v7 e as Naturezas Avançadas v5.1 indexados no repositório. A Sessão 4 publicou depois o Sistema Elemental v8 e as Naturezas Avançadas v6, com o Lote de Tipos dentro. Esta versão rebaseia sobre eles: o conteúdo do Lote de Tipos permanece intacto, esta errata se soma a ele, e os resultados da aplicação são Sistema Elemental v9 e Naturezas Avançadas v7. O alvo do Manual de Criação de Jutsus deixou de ser errata sobre o v2.11 e passa a ser absorvido pela escrita do v3, conforme o Bloco 3 do Plano Mestre. O alvo dos Cálculos Rápidos passa a ser absorvido pela reescrita do documento no Bloco 6, pelo mesmo motivo.

---

## Decisão de origem

A posição de uma natureza compra a estrada e o chão, nunca o teto. Quem nasceu com o elemento chega mais rápido, gasta menos e erra melhor. Quem treinou o elemento alcança o mesmo desempenho no mesmo nível de perícia, pagando mais caro em toda moeda que não seja o resultado.

O teste da perícia é o terminal da maestria e passa a ler exclusivamente nível, inclinação, caminho e atributo regente. Nenhum modificador de berço entra nele. A razão técnica é que o Núcleo de Perícias autoriza efeitos a lerem o valor do teste, e o corpus exerce essa autorização no Fator de Moldagem, nas tabelas de custo pago e na graduação de riders pela margem. Uma soma fixa no teste vaza para todas essas saídas ao mesmo tempo e cobra a posição em lugares que já a cobram.

A posição passa a se expressar em seis frentes, publicadas na tabela abaixo.

| Frente | Afinidade | Compatibilidade | Aprendida |
|---|---|---|---|
| Bônus de teste | nenhum | nenhum | nenhum |
| Limite de Saída na natureza | 25% da RC | 20% da RC | 15% da RC |
| Custo efetivo em RC | declarado × 1,0 | declarado × 1,0 | declarado × 1,3 |
| Falha no teste | versão reduzida | versão reduzida | falha total, gasto perdido |
| Limiares de treino | reduzidos | padrão | estendidos |
| Preço da perícia em XP | × 1,0 | × 1,125 | escada de dispersão |

A escada de dispersão das aprendidas permanece em ×1,25, ×1,6, ×2,0, ×2,5, ×3,2 e ×4,0, por ordem de aquisição registrada na ficha.

Os valores de 25% e de 15% são degraus limpos sobre o motor percentual que o Limite de Saída já é. A calibragem fina deles pertence ao Lote 2 do rebalanceamento de combate, que deriva a escala de energia por rank a partir dos alvos de turno, e a errata correspondente sairá de lá se o número mudar.

---

## ALVO 1 — Sistema Elemental v8

Caminho no repositório: `worlds/naruto/systems/elemental-system.md`

### 1.1 Escada de Afinidade

**Localizar:** tabela da Escada de Afinidade, hoje com as colunas de bônus de teste, custo efetivo em RC e falha.

**Sai:** a coluna de bônus de teste inteira, com os valores de mais quinze, mais oito e menos quinze.

**Entra:** a tabela abaixo, com a coluna de vazão no lugar da coluna revogada.

| Posição | Limite de Saída na natureza | Custo efetivo em RC | Em falha de teste |
|---|---|---|---|
| Afinidade | 25% da RC por turno | custo declarado × 1,0 | entrega versão reduzida |
| Compatibilidade | 20% da RC por turno | custo declarado × 1,0 | entrega versão reduzida |
| Natureza aprendida | 15% da RC por turno | custo declarado × 1,3 | falha total |

**Entra, como prosa que acompanha a tabela:** a vocação se mede em vazão e não em pontaria. O shinobi que nasceu com o elemento escoa um quarto da reserva por turno naquela natureza, sustenta rank mais alto por rodada e recarrega a técnica grande em menos turnos. O que aprendeu a natureza escoa quinze por cento e paga trinta por cento a mais pela mesma técnica, de modo que a obra de porte alto exige acumulação onde o nativo dispara direto. O desempenho no teste é o mesmo para os três, porque o teste responde ao treino e o treino é o que a ficha pagou.

**Origem:** decisão de origem desta errata.

### 1.2 Universalidade do Limite de Saída

**Localizar:** todas as ocorrências que declaram o Limite de Saída como universal em 20% da RC por turno, incluindo a seção de Requisitos de Acesso.

**Sai:** a qualificação de universal aplicada ao número.

**Entra:** o Limite de Saída é o cano único de saída de chakra por turno, compartilhado por jutsu, dōjutsu e efeito sustentado. A largura dele é lida da posição da natureza empregada, em 25% para a Afinidade, 20% para a Compatibilidade e 15% para a natureza aprendida. Gasto que não emprega natureza elemental, como moldagem pura, dōjutsu, Fūinjutsu e efeito sustentado sem natureza declarada, corre em 20%.

**Entra, como regra de turno misto:** quando o shinobi emprega mais de uma natureza no mesmo turno, a largura do cano é a menor entre as posições empregadas. O cano permanece único e não se soma por natureza.

**Origem:** decisão de origem desta errata. A regra de turno misto resolve a única ambiguidade que a modulação por natureza introduz e impede que a diversidade elemental amplie o orçamento de chakra do turno.

### 1.3 Aquisição de naturezas por treino

**Localizar:** subseção de desenvolvimento do LV1 ao LV6, que descreve os limiares de tempo e o multiplicador de Método.

**Entra, ao final do parágrafo:** a posição da natureza modula os limiares de tempo do Manual de Treino. A Afinidade percorre os limiares reduzidos, a Compatibilidade os limiares padrão e a natureza aprendida os limiares estendidos. A qualidade do instrutor continua respondendo pelo multiplicador de Método e opera sobre o limiar já modulado.

`[canon]` A instrução canônica declara que a natureza de afinidade é a mais rápida de aprender, e o cânone mede essa vantagem em tempo de treino.

**Origem:** decisão de origem desta errata.

### 1.4 Registro de versões

**Entra, como nova linha do registro de versões:** v9. A Errata E1 é absorvida. O bônus fixo de teste é revogado nas três posições, e a Escada passa a publicar vazão, custo e falha. O Limite de Saída deixa de ser universal em 20% e passa a ser lido da posição da natureza empregada, com regra declarada para turno misto e para gasto sem natureza. A modulação dos limiares de treino pela posição entra no documento.

---

## ALVO 2 — Cálculos Rápidos de Testes

Caminho no repositório: `core/quick-calculations.md`

**Localizar:** seção 5, Bônus externos ao teste, na linha da tabela que registra a Escada de Afinidade como soma fixa publicada por cenário.

**Sai:** a linha inteira da Escada de Afinidade.

**Permanece intacto:** as linhas de vantagem com bônus nomeado de teste e de penalidade percentual de status, e a regra de que fontes distintas se somam entre si.

**Entra, como nota abaixo da tabela:** a posição de uma natureza elemental não entra no teste. Ela é lida no Limite de Saída, no custo efetivo em RC, no modelo de falha e nos limiares de treino, e nenhuma dessas grandezas passa pelo terminal do teste.

**Origem:** ALVO 1, item 1.1. Este documento é o consumidor direto da coluna revogada e a manteria viva se não fosse corrigido na mesma passagem.

**Execução.** Este alvo não sai como errata pontual. O documento publica também Potência como grandeza viva, o multiplicador de Tipo com o nome revogado e o Limiar de Esquiva como grandeza de ficha, todos mortos nesta leva, e por isso ele é reescrito por inteiro no Bloco 6 do Plano Mestre, absorvendo este alvo.

---

## ALVO 3 — Naturezas de Chakra na Criação de Personagem v1

Caminho no repositório: `worlds/naruto/character-creation/chakra-nature-selection.md`

### 3.1 Tabela de posições

**Localizar:** tabela da seção sobre o que cada posição entrega, hoje com quatro colunas incluindo bônus de teste e preço da perícia.

**Sai:** a coluna de bônus de teste.

**Entra:** a coluna de Limite de Saída na natureza, com 25%, 20% e 15%, nas mesmas posições. As colunas de preço da perícia e de falha permanecem como estão.

### 3.2 Prosa de fechamento da seção

**Localizar:** parágrafo que explica ser modesta de propósito a diferença entre a Afinidade e a Compatibilidade, e que localiza a vantagem da vocação no preço, no teste e na confiabilidade.

**Sai:** a menção ao teste como lugar da vantagem.

**Entra:** a vantagem da vocação vive no preço, na vazão, na velocidade de treino e na confiabilidade. As duas naturezas de nascença entregam efeito reduzido quando o teste vai mal e pagam o custo cheio de chakra, e a distância entre elas mora na largura do cano e no relógio do treino. A distância delas para a natureza aprendida é que é larga, porque o chakra convertido para uma natureza alheia consome parte de si na conversão e escoa por um cano mais estreito.

**Origem:** ALVO 1, itens 1.1 e 1.3.

---

## ALVO 4 — Naturezas Avançadas v6

Caminho no repositório: `worlds/naruto/systems/advanced-natures.md`, base v6, resultado v7

**Entrada nova**, na seção de Progressão por Maestria.

**Entra:** **Herança de posição.** Toda natureza avançada ocupa uma posição na Escada de Afinidade, e a posição governa a vazão, o custo em RC, o modelo de falha e os limiares de treino da perícia dela.

A natureza avançada acesa por Centelha entra como Compatibilidade. O Papel de Indução não a lê, e ela é fato de nascimento revelado pelo desenvolvimento, que é a definição da posição.

A Kyōka herda a posição que o portador possui no elemento hospedeiro, porque ela intensifica um único elemento e a mecânica dela vive dentro da perícia daquele elemento.

A natureza avançada que corre por inclinação de extensão manifestada dentro de uma perícia hospedeira não declara posição própria e lê integralmente a posição da hospedeira.

**Origem:** decisão de origem desta errata. Sem esta regra, a reforma do eixo deixaria nove perícias próprias sem largura de cano declarada.

---

## ALVO 5 — Reserva de Chakra v3.1

**Dependência aberta.** O documento é o dono declarado do Limite de Saída e não está publicado no repositório na data desta errata.

**Escopo da edição quando o documento entrar:** substituição do Limite de Saída universal de 20% pela leitura por posição, com os mesmos três valores do ALVO 1, mais a regra de turno misto e a faixa de 20% para gasto sem natureza declarada. O Limite de Saída continua sendo lido da RC máxima e nunca da RC restante.

**Instrução ao Claude Code:** não editar por inferência. Registrar a pendência no índice de erratas e sinalizar a Gabriel quando o documento for publicado.

---

## ALVO 6 — Manual de Treino v1

**Dependência aberta.** O documento é o dono dos limiares de tempo por nível e do multiplicador de Método, e não está publicado no repositório na data desta errata.

**Escopo da edição quando o documento entrar:** criação da régua de três colunas de limiar, reduzido, padrão e estendido, lida da posição da natureza. Os fatores de cada coluna não estão decididos e pertencem à sessão que abrir o Manual de Treino.

**Instrução ao Claude Code:** não arbitrar os fatores. O ALVO 1, item 1.3, aponta para a régua e a régua nasce no documento dono.

---

## ALVO 7 — Perícias de natureza

Caminhos no repositório: `worlds/naruto/skills/katon.md`, `raiton.md`, `doton.md`, `futon.md`, `suiton.md`, `enton.md` e as demais perícias de natureza publicadas, incluindo Liberação de Yin e Liberação de Yang quando presentes.

**Localizar:** em cada documento, o parágrafo de fronteira que remete ao Sistema Elemental e declara o Limite de Saída universal de 20% da RC junto da assimetria de custo por afinidade.

**Sai:** a qualificação de universal e o número de 20% escrito na perícia.

**Entra:** o Limite de Saída e a assimetria de custo por posição pertencem ao Sistema Elemental e à Reserva de Chakra, com o cano sendo único e compartilhado por jutsu, dōjutsu e efeito sustentado, e a largura dele sendo lida da posição do praticante nesta natureza.

**Regra de forma:** a perícia aponta para o dono e não republica o número. Repetir o valor em seis documentos foi o que produziu a necessidade deste alvo.

**Origem:** ALVO 1, item 1.2.

---

## ALVO 8 — Fichas de técnica com Referência de Usos por Perfil

Caminhos no repositório: toda ficha em `worlds/naruto/techniques/` e em `claude/` que publique a tabela de Referência de Usos por Perfil, incluindo as linhagens do Chidori, do Rasengan e do Hiraishin, o Shiden e o Takemikazuchi.

**Localizar:** a coluna de LS de cada tabela, hoje calculada como vinte por cento da RC do perfil.

**Entra:** uma coluna de posição imediatamente antes da coluna de LS, e o recálculo do LS pela posição declarada.

**Regra de preenchimento, para que o resultado seja determinístico:**

O perfil recebe posição de Afinidade quando o personagem nomeado possui aquela natureza como afinidade em cânone. O perfil recebe Compatibilidade quando a ficha já declara a natureza como secundária do personagem. O perfil genérico, sem personagem nomeado, recebe Afinidade e a linha registra a posição presumida.

**O que muda em cascata dentro da mesma ficha:** a coluna de Janela, que lê o custo pago contra o LS, e a coluna de usos por combate. Nenhum coeficiente, custo declarado, multiplicador de Tipo ou valor de dano se altera nesta errata.

**Instrução ao Claude Code:** recalcular aritmeticamente e não reescrever prosa das fichas. Onde a ficha discutir a estreiteza de margem de um perfil específico em prosa, sinalizar a divergência a Gabriel em vez de reescrever o parágrafo.

---

## ALVO 9 — Manual de Criação de Jutsus

**Localizar:** a definição da Janela de Canalização e toda ocorrência do Limite de Saída como percentual fixo.

**Entra:** a Janela de Canalização continua sendo o custo pago dividido pelo Limite de Saída, e o Limite de Saída passa a ser lido da posição do executante na natureza da técnica, conforme o Sistema Elemental. O custo declarado na ficha permanece sendo o valor de nascença, e a penalidade de conversão pertence ao executante.

**Permanece intacto:** o motor de dano, os coeficientes de entrega e de técnica, o mult_Tipo e a Régua de Magnitude.

**Origem:** ALVO 1, item 1.2.

**Execução.** O Manual de Criação de Jutsus v3 nunca foi escrito, e o repositório segue no v2.11. Este alvo não sai como errata sobre o v2.11: ele é uma das quatro origens que o v3 absorve de uma vez no Bloco 3 do Plano Mestre, junto do Lote de Tipos, do Consolidado e da cadeia de Velocidade.

---

## Fila de avaliação da aplicação

Segunda fase, a ser executada depois que os alvos acima estiverem aplicados e revisados. O Claude Code produz um relatório de divergência antes de qualquer alteração de código, sem implementar nada nesta passagem.

O que o relatório precisa cobrir:

Onde os dados estruturados em `src/shared/data/` registram bônus de teste por posição elemental, com o `fonte` apontando para o Sistema Elemental. Esses registros ficam órfãos com a revogação e precisam de remoção, não de valor zerado.

Onde a lógica de cálculo aplica o Limite de Saída como constante de vinte por cento, e o que a mudança para leitura por posição exige em termos de estado da ficha, já que a aplicação passa a precisar conhecer a posição do personagem em cada natureza para calcular vazão e janela.

Onde a criação de personagem grava a posição de cada natureza rolada, e se o modelo atual já distingue Afinidade, Compatibilidade e aprendida com ordem de aquisição registrada.

Onde os testes automatizados assertam os valores de mais quinze, mais oito e menos quinze, ou o Limite de Saída de vinte por cento como constante.

Se a aplicação implementa turno de combate com orçamento de chakra, o que a regra de turno misto exige, já que a largura do cano passa a depender do conjunto de naturezas empregadas na rodada.

O relatório vira RFC de arquitetura se a mudança exigir alteração de modelo de dados, e o RFC passa por aprovação pergunta a pergunta antes de qualquer implementação.

---

## Registro de dependências

| Item | Estado |
|---|---|
| ALVO 5, Reserva de Chakra | bloqueado por publicação do documento |
| ALVO 6, Manual de Treino | bloqueado por publicação do documento, e os fatores de limiar ficam por decidir |
| Calibragem de 25% e 15% | aberta, pertence ao Lote 2 do rebalanceamento de combate |
| Eixo do Onmyōton v4.1 | verificação pendente de sobretaxa por polaridade, sem relação com esta errata |
