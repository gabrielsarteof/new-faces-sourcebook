# Método de Errata e Propagação

Como uma leva corre neste projeto. Não é filosofia: cada regra abaixo veio de um defeito que passou por uma verificação existente, e as que custaram mais estão nomeadas com o número que custaram.

Este documento existe porque o método vivia na memória de sessão. Quatro skills — `errata-e-propagacao`, `prosa-de-documento-final`, `auditoria-de-estado`, `sincronizacao-doc-codigo` — foram escritas e nunca chegaram ao ambiente, e a leva de nomenclatura dos compêndios correu inteira sem elas. O que ela usou de recorrente está aqui.

---

## 1. A família dos espelhos

**Verificação que compartilha origem, lente ou fonte com o que verifica não verifica.**

É a única lição desta sessão que apareceu sete vezes, em sete camadas diferentes, e cada aparição vestia roupa nova. Elas estão listadas juntas porque separadas ninguém as reconhece como a mesma coisa.

### 1.1 Catraca-espelho — a guarda lê o campo que ela mesma preencheu

A catraca de contagem dos compêndios comparava, compêndio a compêndio, o cabeçalho que o `.md` publica contra `nome.pt` do `.json`. O pipeline preenche `nome.pt` **a partir daquele mesmo cabeçalho**. Os dois lados saíam da mesma origem e se moviam juntos.

Transcrever os catorze compêndios para o formato de nomenclatura novo derrubava as fichas promovidas de 47 para 6, criava 88 pendências fantasmas, apagava o nome em português dos 491 registros e largava o campo `romaji`. As duas catracas verdes, os catorze declarados prontos, código de saída zero. O Raikiri saía como `{"pt":"Raikiri","ja":"雷切 · Cortador de Raio"}`.

O conserto não é padrão mais apertado, é segunda origem: um leitor escrito à parte, que reparseia o documento e parte a linha por outro caminho. A independência é de **derivação**, não de entrada — os dois lados têm de ler o mesmo documento, esse é o ponto.

### 1.2 Teste cúmplice — o teste monta o insumo com o defeito que o código tem

`ContextoFrom` procurava o Kage Bunshin sob `naruto.tecnica.kage-bunshin-no-jutsu`, id que nenhum catálogo carregava. A regra de assistência de moldagem estava morta em produção. O teste que a cobria entregava ao personagem uma lista de técnicas contendo **o mesmo id errado**. Os dois lados errados, concordando, verdes, por quanto tempo fosse.

Teste que constrói o próprio insumo a partir do código sob teste não testa o código: testa que ele é consistente consigo mesmo. Resolva contra o catálogo, não contra outra cópia do literal.

### 1.3 Comparação com a lente do resultado — normalizar os dois lados com a transformação em avaliação

Perguntado quanto uma migração de id encolheria o `REGISTRO_POR_FICHA`, a primeira medição tirou prefixo de elemento e sufixo `no Jutsu` dos **dois** lados antes de comparar, e reportou 46 de 47 pares coincidindo. Derivando os ids de verdade: 33. E a normalização que comprava a diferença colidia dois ids e afastava `Fūton: Rasengan` de `naruto.technique.futon-rasengan` em vez de aproximar.

Comparação que normaliza responde "casariam sob esta lente", que não é a pergunta quando a lente é o que está sendo decidido.

### 1.4 Convenção no lugar de existência — afirmar forma de escrita em vez de resolução

Três aparições, e as duas últimas são o mesmo defeito em duas ferramentas, o que mostra que ele viaja com a leitura e não com o leitor.

A catraca da escada dos Oito Portões afirmava que todo degrau começava em `naruto.tecnica.portao-`. Isso passa para qualquer id que siga a convenção e não corresponda a portão nenhum. Era anterior à migração; a migração só a revelou.

A contagem de compêndios do inventário contava `.md` dentro de `compendiums/`. Bastou o Registro de Nomes nascer ali, `type: reference-table`, para a contagem ir de catorze a quinze sem que um compêndio nascesse — e a catraca que existe para acusar entrada perdida teria acusado o contrário.

O leitor de compêndios do pipeline fazia o mesmo, e o defeito voltou por onde ninguém tinha olhado: quando o Registro ganhou as seções de procedência da conferência de romanizações, os nove `### Bloco N` viraram entradas de compêndio, e a conversão passou a ler quinze compêndios e quinhentas entradas. Consertar a contagem do inventário não consertou o pipeline, porque a correção foi pontual e o defeito era de leitura. Virou regra na Seção 9 do `COMPENDIUM_GATES` da aplicação, e alcança toda leitura de conjunto daquele pipeline.

**Pasta não é tipo, prefixo não é existência. Confira a propriedade, não o lugar onde ela costuma morar.** E quando o conserto for trocar um critério por outro, conserte a regra e não a ocorrência: a segunda aparição custou o dobro por ter sido tratada como caso isolado.

**Filtrar por tipo troca um defeito por outro se ninguém olhar o que ficou de fora.** Ler por pasta inclui demais; ler por tipo exclui em silêncio, e um `type` com erro de digitação faz um compêndio de verdade sumir do catálogo sem que nada acuse. O descarte tem de ser nomeado, pela mesma razão da Seção 7: descarte é carga útil, descarte anônimo é o defeito.

### 1.5 Transformação sobre o vazio — não achar nada e sair verde

A migração do id de técnica quase foi escrita sobre `data.techniques`, porque um relatório anterior desta mesma sessão nomeou esse campo. `techniques` é vista derivada; o caminho gravado é `data.expansions[].id`. Sobre o campo errado, a migração casa zero linhas, não altera nada, não levanta nada e commita — e a linha de log é idêntica à do sucesso.

**Transformação que não encontra nada para transformar é indistinguível de transformação bem-sucedida.** Migração, codemod, varredura: nenhuma pode reportar sucesso sobre uma contagem que não declarou antes. Zero linhas alteradas é uma resposta que precisa de motivo.

O que salvou foi ler o `PurchaseTechnique` em vez de confiar no relatório. O que mantém salvo é a migração declarar o alvo: ela conta as ocorrências de `naruto.tecnica.` no texto do documento e compara com o que o caminho reescrito alcança, e diferença aborta.

### 1.6 Número agregado sem a enumeração ao lado

A conferência de romanizações publicou, no fechamento de um bloco, que dezessete linhas estavam fechadas e quarenta abertas. O número correto era dezessete e trinta e seis. O erro foi uma soma que esqueceu duas parcelas, e sobreviveu a duas passadas e a uma aprovação de Gabriel.

Ele morreu no instante em que a contagem virou lista. Escrever as dezessete linhas nominalmente, para que ninguém as reconferisse, obrigou a somá-las de novo, e a soma não bateu.

Contagem sem a enumeração ao lado não é verificável, porque não tem contra o quê ser conferida. Quem lê aceita ou recusa o número inteiro, e recusar número plausível é caro demais para acontecer. É a família da seção 1 pelo avesso: não uma guarda que mente, e sim um dado que nenhuma guarda pode olhar.

**Contagem publicada acompanha a lista que a sustenta**, e as duas ficam no mesmo documento, de modo que uma confira a outra por construção. Vale para todo handoff, todo relatório de varredura e toda medição.

### A pergunta que fecha a família

Antes de escrever uma guarda, **nomeie as duas fontes em voz alta**. Se não consegue nomear duas, você tem um espelho.

Antes de escrever uma transformação, **nomeie o número de alvos**. Se não consegue nomear um, verde não significa nada.

---

## 2. Medir antes de executar, e interrogar o número

Decisão de arquitetura não se toma por estimativa. A leva de nomenclatura parou antes de renomear qualquer coisa, mediu as duas saídas e devolveu números. A medição achou três coisas que o planejamento não sabia que estavam em jogo, e sem ela a leva teria corrido verde entregando dado errado.

**O número vem com o recorte.** Uma contagem de referências cruzadas varreu `.ts`, `.tsx`, `.mjs` e `.md`, e não `.json` fora do gerado. Faltaram treze ocorrências em dois arquivos de dado escritos à mão. O número estava certo para o que varreu e errado para a pergunta. Relatório que publica contagem publica junto o que a varredura cobriu — quem aprova um número sem saber o recorte aprova outra coisa.

**Se ao medir a premissa cair, isso é o entregável.** Reportar que a premissa está errada, com a evidência, vale mais do que executar bem sobre premissa errada.

---

## 3. Provar a guarda reintroduzindo o defeito real

Catraca que ninguém testou reintroduzindo o defeito que ela existe para pegar passa por vacuidade.

Toda guarda nova desta leva foi provada assim: o defeito injetado, a mensagem conferida, o estado restaurado.

- A catraca de nome: um compêndio transcrito com o leitor antigo, e ela acusando 37 entradas por arquivo e linha onde a antiga passava.
- A guarda de ids fixados: a grafia antiga de volta, e ela acusando `ContextoFrom.ts:63`.
- A recusa da migração: uma ficha com id que a regra não produz, e a transação abortando com nada escrito.
- A contagem de compêndios: um compêndio de verdade escondido, e a contagem caindo para treze.

Injetar o defeito é a única forma de saber se a mensagem serve. Guarda que acusa sem dizer **qual** entrada saiu obriga quem lê a caçar a agulha.

---

## 4. Reportar antes de corrigir

Quando um defeito é achado por varredura, o número achado vai no relatório **antes** do conserto. Doze ids do sourcebook fixados em código de produção, um não resolvia — essa frase só existe porque a varredura correu antes do `sed`.

Corrigir primeiro apaga a medida. E a medida é o que responde "existem outros?", que é sempre a pergunta seguinte.

---

## 5. RFC em vez de preencher

Quando a fonte não publica o dado, o dado não nasce.

A leva de nomenclatura reordenou 484 nomes e não gerou nenhum. Entrada só com português subiria para a fila de decisão sem receber japonês inventado — a fila nasceu vazia, mas a regra existia antes de saber disso. As sete entradas de kanji puro não ganharam romanização, embora cinco delas tenham cabeçalho que se lê como uma: tomar o cabeçalho por romanização é ler nome para dentro do documento em vez de para fora dele. A romanização sob suspeita, `Kuropansa` para 黒豹, foi reportada e não corrigida, porque conferir contra a fonte é passada própria e corrigir de memória é inventar com outro nome.

Campo ausente é honesto onde o campo preenchido é uma afirmação que ninguém fez.

---

## 6. A ordem das fases: primeiro o que torna as seguintes conferíveis

A leva de nomenclatura ia começar renomeando. Reordenada, ficou:

1. O leitor aprende o formato novo e as catracas ganham segunda origem.
2. O identificador migra, com a aplicação e o dado gravado acompanhando.
3. Os catorze compêndios transcrevem.

A prova de que a ordem estava certa é um número: depois da fase 3, os catorze `.json` regerados saíram **byte-idênticos** aos commitados. A transcrição não moveu dado nenhum, porque a fase 2 já havia tirado o id da romanização, que a linha de nome publicava desde antes.

Fase que não é preparação: é a condição para que as seguintes sejam conferíveis. Na ordem original, a leva inteira roda verde e entrega dado errado.

---

## 7. Recusar em vez de adivinhar

Passo irreversível recusa entrada que não reconhece, e nomeia o que não reconheceu.

A migração de ficha gravada aborta a transação inteira se algum id de técnica não estiver no mapa, e imprime o id e a ficha. Mapear por semelhança na hora é o que produziria dado errado com cara de migrado — e dado migrado errado não tem de onde voltar.

O mesmo vale para o conversor de compêndios, que registra em `entradasBloqueadas` toda entrada que descartou, com arquivo, linha, nome e o token que a bloqueou. O descarte é carga útil; o descarte **anônimo** é o defeito.

---

## 8. Varredura escopada ao bloco

Consulta larga roda escopada ao contêiner que já contém o alvo, nunca contra o documento inteiro. A `§3` do `GIT_WORKFLOW` da aplicação publica a regra, os casos medidos e o custo.

Nesta leva: toda troca de nome correu na fatia entre um `### ` e o cabeçalho seguinte, e toda troca no Índice Rápido correu na própria seção. Substituição de nome vai do mais longo para o mais curto, ou `Chidori` come `Chidori Katana`.

---

## 9. Comparação de conteúdo normaliza terminação de linha

Compare em LF; escreva na terminação que o arquivo já usa. Teste que só vê o arquivo que a própria ferramenta acabou de escrever nunca discorda de si mesmo — que é a família da seção 1 outra vez, na camada do sistema de arquivos.
