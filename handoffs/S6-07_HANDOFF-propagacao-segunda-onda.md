---
id: handoff.segunda-onda-nomenclatura-propagacao
title: "HANDOFF — Propagação da segunda onda de nomenclatura"
sessao-de-origem: 6
status: aberto
version: 1
---

# HANDOFF — Propagação da segunda onda de nomenclatura

A conferência das romanizações fechou. As 53 obras do recorte foram conferidas contra a Narutopedia inglesa e os databooks oficiais, o Registro de Nomes foi reemitido na versão 2.1 com a coluna Nome canônico completo, e a procedência de cada linha está registrada com o campo lido e o endereço de onde saiu.

Esta onda leva esses nomes para as fichas de `techniques/`, para a prosa das perícias e para as citações cruzadas.

O cabeçalho deste documento não imprime versão, e a ausência é deliberada. A razão está na Seção 5.

---

## 1. Ordem de execução

As fases correm nesta ordem e nenhuma começa antes de a anterior sair verde.

| Fase | O que faz | Bloqueia |
|---|---|---|
| 1 | Catraca de nome de ficha contra o Registro, provada com defeito injetado | tudo |
| 2 | Renomeação das fichas de `techniques/` | fase 3 |
| 3 | Propagação para prosa de perícias e citações cruzadas | fase 4 |
| 4 | Catraca de versão e correção dos documentos divergentes | nada |

A fase 4 é independente das três primeiras e pode correr em paralelo, desde que a própria catraca dela saia verde antes de qualquer correção.

---

## 2. Fase 1, a catraca antes da renomeação

O `id` da ficha é `fm.id` e não deriva do cabeçalho. Renomear ficha é neutro para identificador: não há migração, não há nada gravado em ficha de personagem, nenhum teste quebra, nenhum `.json` muda.

É exatamente isso que exige a catraca. Renomear errado não acusa em lugar nenhum. O `S6-05` chama isso de parede sem espelho, e o `METODO.md` documenta a família na seção 1.

**Antes de escrever a guarda, as duas fontes se nomeiam.** A primeira é o cabeçalho publicado da ficha, lido do arquivo em `techniques/`. A segunda é a coluna Romaji do Registro de Nomes, lida da tabela. A guarda falha nomeando o arquivo, o nome que a ficha publica e o nome que o Registro publica.

**Antes de escrever a transformação, o número de alvos se declara.** São 52 fichas.

### As exceções, por lista nomeada

Cinco fichas não têm par no Registro. A catraca afirma que são exatamente estas e falha se aparecer uma sexta.

| Ficha | Destino |
|---|---|
| `kirin.md` | tem linha no Registro sem o link. **A fase 1 preenche a coluna Ficha dessa linha** e a ficha passa a ter par |
| `susanoo.md` | 須佐能乎 não tem linha no Registro. Fora do alcance, porque nenhum compêndio a cataloga |
| `hachimon-tonko.md` | 八門遁甲 não tem linha. Mesma razão |
| `hachimon-obras.md` | agregado, não é obra nomeada. Mesma razão |
| `hiraishin-impregnacao.md` | variante que compartilha kanji com o Hiraishin no Jutsu. Mesma razão |

Depois do link do Kirin, os alvos com par são 48 e as exceções são 4. Guarda que varre 52 e resolve 48 saindo verde é o defeito que este documento existe para impedir, então a contagem das duas partes é afirmada e não inferida.

### A prova

A catraca se prova com defeito injetado antes de qualquer renomeação. Altere o cabeçalho de uma ficha para um nome que o Registro não publica, rode a guarda, confira que ela acusa aquele arquivo pelo nome e mostra os dois valores, e desfaça a alteração. Guarda que nunca falhou não está provada.

---

## 3. Fase 2, renomeação das fichas

Cada ficha passa a publicar no cabeçalho o nome da coluna Romaji do Registro, com o kanji e o português na linha de baixo, no padrão que a primeira onda estabeleceu nos compêndios.

**O `fm.id` não se toca.** Ele é o identificador e não deriva do cabeçalho, e a onda inteira depende de ele permanecer estável.

Oito fichas mudam de nome, porque oito romanizações foram corrigidas a partir da fonte. Elas estão nomeadas na seção de divergências do Registro, sob o título que declara que alcançam a coluna Romaji.

Nenhuma outra ficha muda de nome. Em particular, nenhuma ficha ganha ou perde prefixo elemental: a regra do Registro determina que a remoção alcança apenas linha corrigida a partir da fonte e nunca retroage sobre linha que já publica prefixo e já concorda com a fonte.

O caso que fecha a regra está escrito no Registro e se repete aqui porque é o que impede a reabertura: `Fūton: Rasengan` e `Rasengan` são duas obras distintas, com fichas próprias em domínios distintos, separadas na fonte e na mesa apenas pelo prefixo.

O travessão também não entra em nome de ficha. A fonte publica `Hiraishin — Ni no Dan` e a coluna Romaji publica `Hiraishin: Ni no Dan`, por decisão registrada no Registro. O cabeçalho da ficha segue a coluna.

---

## 4. Fase 3, prosa e citações

A propagação alcança a prosa das perícias e as citações cruzadas, com `chidori-family.md` e `rasengan-family.md` concentrando a maior parte delas.

**Nenhum documento cujo nome deriva da obra se renomeia.** `chidori-family.md` e `rasengan-family.md` ficam onde estão. A fase de renomeação por prefixo, prevista em rascunhos anteriores, não existe: ela morreu quando o prefixo saiu do nome de exibição.

A citação a uma obra usa a coluna Romaji. A coluna Nome canônico completo é procedência e nunca chave, e nenhuma ferramenta a lê para casar documento com dado.

### Regra de devolução por RFC

Encontrando divergência que a conferência não previu, a execução para e devolve por RFC em vez de decidir. Vale em especial para: obra citada na prosa que não tem linha no Registro; citação que casa com duas linhas; e linha do Registro fora do recorte de 53, cuja romanização segue não conferida e portanto não é base para correção de prosa.

As 438 linhas fora do recorte não se corrigem nesta onda. Elas se propagam como estão, porque a passada que as confere ainda não correu.

---

## 5. Fase 4, a catraca de versão

Varredura dos 206 arquivos `.md` do corpus, comparando o campo `version` do front matter com o número impresso no cabeçalho H1.

| | |
|---|---:|
| publicam versão nos dois lugares | 22 |
| concordam | 6 |
| divergem | 15 |
| falso positivo do recorte | 1 |

Os quinze incluem os catorze compêndios, todos eles, mais `systems/elemental-system.md`. O padrão é uniforme, com o front matter à frente, na maioria por um incremento, no Fūton e no Sistema Elemental por dois. Os seis que concordam provam por contraste, porque nenhum é compêndio.

A causa é de forma. O cabeçalho é prosa escrita à mão e o front matter é o campo que as ferramentas leem, então quem sobe a versão sobe o campo e esquece a linha.

**Nada se corrige à mão.** A fase constrói a catraca primeiro, com duas fontes nomeadas: um leitor parseia o front matter, outro parseia o H1 por caminho independente, e a guarda falha nomeando o arquivo e os dois valores. Prova-se com defeito injetado, subindo o front matter de um compêndio sem tocar no cabeçalho e conferindo que ela acusa aquele arquivo. Só com ela verde a correção corre, alinhando cada documento ao maior dos dois valores.

O falso positivo é `core/errata-combat-core-v3.md`, cujo cabeçalho lê "Errata do Núcleo de Combate v3", onde aquele `v3` é a versão do documento corrigido e não a dela. A catraca precisa distinguir versão própria de versão citada. Se não souber distinguir, declara a exceção por lista nomeada com a razão escrita, porque lista nomeada é preferível a recorte que erra em silêncio.

Este handoff e o `S6-06` não imprimem versão no cabeçalho. Documento que manda catracar a divergência entre front matter e H1 não pode nascer com ela, e a saída não é acertar os dois lados e sim o cabeçalho não carregar o campo. Passada futura não deve ler isso como esquecimento nem acrescentar o número.

### Decisão em aberto

Existe alternativa à correção dos quinze, levantada e não decidida: o H1 deixa de publicar versão em todo o corpus, a versão vive apenas no front matter, e a catraca passa a afirmar ausência em vez de igualdade. Ausência é mais barata de manter, porque concordância exige que dois lugares se movam juntos toda vez e ausência exige que um lugar não nasça. O falso positivo também muda de natureza, porque a distinção entre versão própria e versão citada se resolve uma vez na definição.

A alternativa custa tocar em vinte e dois documentos em vez de quinze e tira da prosa um dado que hoje o leitor encontra sem abrir o front matter.

**A fase 4 não abre sem a decisão de Gabriel entre alinhar os quinze e retirar os vinte e dois.** As fases 1 a 3 correm independentemente dela.

---

## 6. Varreduras e critério de verde

A onda sai verde quando todas as afirmações abaixo passam.

| Varredura | Afirmação |
|---|---|
| Nome de ficha | as 48 fichas com par publicam no cabeçalho exatamente a coluna Romaji da sua linha |
| Exceções | as fichas sem linha no Registro são exatamente as quatro nomeadas na Seção 2 |
| Identificador | nenhum `fm.id` mudou em relação ao estado anterior à onda |
| Contagem | 52 fichas varridas, 48 resolvidas, 4 exceções, e a soma fecha |
| Higiene | nenhum cabeçalho de ficha carrega travessão |
| Citações | nenhuma citação de obra na prosa aponta para nome que o Registro não publica |
| Link do Kirin | a linha de 麒麟 publica o caminho de `kirin.md` na coluna Ficha |
| Versão | a catraca da fase 4 sai verde, sob a regra que Gabriel decidir |

**Cada contagem publicada vem acompanhada da lista que a sustenta.** Número agregado sem a enumeração ao lado não é verificável, porque não tem contra o quê ser conferido, e o `METODO.md` registra o caso em `1.6`. Relatório desta onda que publique apenas totais não está pronto.

---

## 7. O que não entra

A migração do `characters.data`, escrita e não aplicada, esperando ambiente local com banco.

A conferência das 438 linhas restantes do Registro, que corre em passada própria e usa o procedimento registrado no Registro na seção da coluna Romaji.

A correção da coluna Kanji. As seis divergências de kanji estão reportadas no Registro e não se corrigem, porque o campo canônico tem casa na coluna Nome canônico completo.

Os achados adjacentes que o Registro reporta e não corrige, entre eles a divergência de rank do Chidori Katana, que pertence a quem tocar no Compêndio de Raiton.

O Lote de Evasão e Leitura, que corre em sessão própria.
