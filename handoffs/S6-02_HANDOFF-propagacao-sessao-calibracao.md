---
id: handoff.propagacao.sessao-calibracao
title: "HANDOFF DE PROPAGAÇÃO — Sessão de Calibração"
sessao-de-origem: 6
consolidado-de-origem: S6-01
status: aguardando-execucao
version: 1
---

# HANDOFF DE PROPAGAÇÃO — Sessão de Calibração

Ordem de serviço. A razão de cada decisão vive no S6-01 e não se repete aqui. Cada bloco declara o documento, a versão de destino, o que muda e se é decisão ou transcrição.

**Regra de execução.** Manual antes do dado, dado antes do teste. Nenhum arquivo de `src/shared/data` é tocado nesta leva.

**Regra de devolução.** Qualquer linha que exija escolha não coberta por este handoff volta como RFC em vez de ser resolvida por conta. Isso inclui número que não confira, versão que colida e documento que publique grandeza revogada fora da lista de varredura.

**Colisão de versão.** Se o número de destino já estiver ocupado, subir um degrau acima do maior existente e nomear a colisão no registro de alterações, pela regra do Pipeline de Perícia.

---

## Ordem de execução

1. `advanced-natures.md`, porque três blocos abaixo leem o catálogo republicado
2. `elemental-system.md`, `chakra-control.md`, `jutsu-authoring.md`
3. `raiton.md`, `rasengan-family.md`, `enton.md`, `xp-training.md`
4. Fichas e compêndios
5. `skills/overview.md`, que fecha as erratas e registra os três registros
6. Transcrição pura
7. Varreduras de confirmação

---

## 1. `worlds/naruto/systems/advanced-natures.md` → v8

**Decisão.** O bloco maior da leva.

A seção da camada Kyōka ganha o eixo declarado. A definição passa a ser que Kyōka é a natureza que refina o elemento base além do teto comum sem recompor elemento algum, com cada entrada declarando o eixo do refinamento. O bônus de poder conserva as três faixas e os valores.

Eixo de Potência: o bônus soma à Constante de Moldagem. Eixo de Entrega: a Constante permanece comum em 1,40 e o bônus multiplica a celeridade da natureza na Escada de Meios. O eixo é declarado por entrada e não se divide.

O catálogo ganha coluna de Eixo e passa a publicar:

| Kyōka | Eixo | Poder | Constante | Produto | Celeridade |
|---|---|---|---|---|---|
| Shiton | Potência | Decisivo | 1,60 | 1,84 | do elemento |
| Kuroi Kaminari | Potência | Tático-Decisivo | 1,50 | 1,88 | do elemento |
| Shiden | Entrega | Tático-Decisivo | 1,40 | 1,75 | 165 |
| Taiton | Potência | Estratégico | 1,75 | 1,75 | do elemento |
| Chōton | Potência | Estratégico | 1,75 | 1,75 | do elemento |
| Shinton | Potência | Decisivo | 1,60 | 1,60 | do elemento |

A seção do Kuroi Kaminari perde o efeito Amplificação Doutrinária por inteiro, incluindo a nota de calibração que celebrava a coincidência com o Shiden. A entrada passa a Tático-Decisivo. Tudo o mais da seção permanece.

A nota da faixa vedada passa a cobrir Estratégico e Decisivo do Raio, com uma justificativa escrita uma vez para as duas: o produto encosta no topo declarado do Fogo.

A seção de aquisição ganha a segunda porta, com Transmissão no LV5 da perícia hospedeira e Descoberta no LV6, sem rolagem em nenhuma. Declara que a porta de treino não alcança Kekkei Genkai nem Kekkei Tōta. Nomeia as duas exceções, Enton pela linhagem de Indra e Kuroi Kaminari pelo portão por doutrina. A Centelha, o viés de berço, o Protagonismo, o decaimento, a retentativa e a extinção permanecem intocados como porta de criação.

A seção do Enton ganha a decomposição do 2,10 em Constante comum de 1,40 e Assinatura do fogo negro de 1,50, com a nota de que a perícia própria permanece dona do valor.

**Não tocar:** composições, portões, tiers, percentuais de Centelha, régua de progressão, catálogo de Kekkei Genkai e Kekkei Tōta, herança de posição.

---

## 2. `worlds/naruto/systems/elemental-system.md` → v9.4

**Decisão pequena mais transcrição.**

A tabela de Assinaturas ganha a quarta linha, o fogo negro em 1,50, com a nota de que ela pertence à Perícia de Enton e se lê apenas na entrega térmica de chama negra.

Entra a contenção: Assinatura própria só nasce de declaração da fonte sobre o que aquela energia faz com a matéria, nunca de comparação de poder entre naturezas. Entra a segunda contenção: faixa da régua de Kyōka fica vedada ao elemento quando o produto encosta no topo declarado de outro elemento.

Na Fila de errata emitida, a linha que pede a republicação dos multiplicadores Kyōka é marcada como aplicada, no formato tachado que a linha da Vulnerabilidade Elemental já usa, citando a v6 de Naturezas Avançadas como a versão que cumpriu e a v8 como a que fechou o eixo.

**Não tocar:** Constante de Moldagem de 1,40, as três Assinaturas existentes, Escada de Afinidade, Limite de Saída, tabela de dispersão, cadeia de d100, Sōsai, realimentação.

---

## 3. `worlds/naruto/skills/chakra-control.md` → v3.9

**Decisão.**

A cláusula do Mapa de Interfaces e do Índice de Desperdício passa a ler que o `M` lê o `P` da perícia governante da obra, que é esta apenas nas obras de moldagem pura e nunca nas que possuem domínio próprio. A regra de que portão não soma em motor permanece escrita e permanece verdadeira.

A linha de tolerância aos documentos que ainda liam LV_CC sai, porque a Linhagem do Rasengan fecha nesta mesma leva.

A pendência da âncora de dano do Chidori sai, junto da devolução e da tabela de recálculo. No lugar entra a demonstração estrutural: os quatro termos do dano bruto têm donos fora desta perícia, e as duas grandezas que este domínio produz não aparecem em termo algum daquela linha.

A confirmação numérica entra com par abstrato, `P` declarado igual por construção, sem nome de personagem:

| Executor | teste de Moldagem | desperdício | custo pago | PS por execução | dano bruto |
|---|---:|---:|---:|---:|---:|
| Moldagem plena | 185 | 0% | 250 | 0 | 1.050 |
| Moldagem de LV3 aprofundado | 60 | 162,5% | 656 | 41 | 1.050 |

Parâmetros da ilustração: Chidori, RC nominal 750, entrega 0,20, vetor Penetração, `mult_Tipo` 1,40, coeficiente técnico 2,0, os dois na referência do rank A com `M` em 1,000.

A âncora de preço do Índice de Desperdício, com Kakashi em 250 e Sasuke genin em 656, permanece exatamente como está e ganha uma linha declarando que ela é a face econômica da mesma demonstração.

**Não tocar:** Índice de Desperdício, Régua de Exigência, Sobretaxa de Volume, Escada de Permanência, Régua de Acúmulo, Assinatura de Chakra, Recepção de Chakra Externo, transcendências.

---

## 4. `worlds/naruto/systems/jutsu-authoring.md` → v3.3

**Decisão.**

Seção 5.3 recebe três linhas.

A primeira declara a parcela de RC de origem externa como espécie, com os dois casos publicados do corpus, o olho no Takemikazuchi e o céu no Fio do Céu. A parcela entra na RC limpa, não sai da reserva e não conta contra o Limite de Saída.

A segunda declara que obra de duas naturezas tem perícia governante única, a da natureza que entrega o vetor declarado, com a outra entrando como requisito de acesso sem alimentar o motor.

A terceira declara que piso e teto de rank se conferem no executor de referência do rank, com `M` em 1,000, e nunca na mão de um executor concreto, e que a cláusula de área e a de multiplicidade leem valor de campo.

A Escada de Celeridade dos meios ganha a linha que declara a multiplicação da celeridade pela Kyōka de eixo de Entrega.

A tabela de validação das âncoras ganha a linha de registro do Rengoku Ryūsei em 107,3% do par Ápice como primeiro ocupante de corpus a exercer a ausência de teto no rank S.

**Não tocar:** coeficientes de entrega, bandas de autoria, pisos por rank, matriz de XP, os doze pontos do Registro de Instâncias.

---

## 5. `worlds/naruto/skills/raiton.md` → v3.8

**Decisão.**

O verbo Fio do Céu, do caminho Tempestade, perde a marca de grandeza aposentada e a devolução. A forma nova:

```
parcela atmosférica = teste de Tempestade com esta especialização
```

Resolve 135 no LV4, 165 no LV5 e 195 no LV6. A parcela soma à RC nominal da obra, vem do céu e não da reserva, não conta contra o Limite de Saída, e o praticante declara antes de executar qual descarga o céu acompanha, uma por turno. A cláusula de LV5 que aceita carga acumulada por dois turnos permanece.

Entra a fronteira: o Fio do Céu não alcança o Kirin, porque aquela obra dirige raio natural e não tem descarga do praticante a que somar.

A inclinação Calamidade perde o efeito Amplificação Doutrinária. Os caminhos Doma, Assolação e Devastação e o Ápice Nai-no-Kami não mudam.

A inclinação Agudo conserva o estado de extensão manifestada e passa a citar as duas portas de aquisição. Ganha a linha da celeridade de 165 no portador contra 150 no demais.

**Não tocar:** as três inclinações comuns, os caminhos delas, as três transcendências, Raio Seco, graus, complexidades e preços.

---

## 6. `worlds/naruto/systems/rasengan-family.md` → v1.6

**Decisão.**

A Seção 2 perde o bloco `Fator de Moldagem = LV_CC² × 2,5 × 3,0` e a tabela de 188 a 480 por inteiro.

No lugar entra a declaração do `w` em 1,5, derivado do coeficiente técnico de 3,0, o maior do corpus, com a consequência de mesa reescrita: dois executores da mesma ficha com o mesmo `P` na perícia governante entregam o mesmo dano, e a reserva maior compra escopo, repetição e acesso às variações de rank alto, jamais potência por unidade de chakra.

A Seção 2 declara que a perícia governante das quatro fichas de moldagem pura é o Controle de Chakra, no mesmo lugar em que a linhagem já declara o portão de rank delas.

**Não tocar:** Seção 3 inteira, incluindo RC nominais, coeficientes de entrega, vetores, `mult_Tipo` e proporções da escada. Assistência de Moldagem, cadeia de derivação, Recomposição, estado de autoria, preços.

---

## 7. `worlds/naruto/skills/enton.md` → v1.4

**Decisão.**

A dependência aberta da decomposição fecha. O 2,10 permanece exatamente onde está e passa a publicar as duas parcelas: Constante de Moldagem comum de 1,40 multiplicada pela Assinatura do fogo negro de 1,50.

Entra a régua do vetor: a Assinatura do fogo negro se lê na entrega de Energia térmica, e a obra que entrega Corte ou Penetração lê Assinatura de vetor físico em 1,00, resolvendo em 1,40, com a permanência entrando pelo rider de Queimadura e pela cláusula de não extinção que a perícia já publica.

A citação à republicação pendente dos Kyōka sai.

**Não tocar:** inclinações, caminhos, transcendência, portões, réguas, requisito de olhos.

---

## 8. `worlds/naruto/progression/xp-training.md`

**Decisão.**

Entra a manifestação de Kyōka por treino, nas duas formas. Transmissão no LV5 da perícia hospedeira com portador vivo, lendo os limiares de tempo pela posição do praticante no elemento e pela Escada de Método do instrutor. Descoberta no LV6 sem instrutor, rodando no degrau base da escada. Nenhuma das duas tem rolagem.

---

## 9. Fichas e compêndios

**`worlds/naruto/techniques/shiden.md`.** Decisão. Morrem as duas menções ao 1,85 e a contradição entre elas, uma atribuindo o valor ao Shiden e a outra ao Kuroi Kaminari. O `mult_Tipo` fica em 1,75 para todo executante, com e sem a Kyōka. A Tabela de Descarga perde de vez a coluna do portador e a nota que remetia à republicação pendente. O bloco de Velocidade ganha a celeridade de 165 no portador contra 150 no demais.

**`worlds/naruto/techniques/takemikazuchi.md` → v2.2.** Decisão. O requisito passa de Kyōka Enton manifestada para Perícia de Enton no LV6, conservando os portões de linhagem e de dōjutsu por trás dele. Entra a nota de que as duas parcelas de RC resolvem no mesmo `mult_Tipo` de 1,40 por ambas entregarem Penetração, e de que a perícia governante é o Raiton pela regra de obra de duas naturezas. Nenhum número da ficha muda.

**Compêndio de Raiton, entrada da Pantera Negra.** Transcrição. O `mult_Tipo` passa de 2,00 para 1,88. É a única ficha publicada que exige a Kyōka Kuroi Kaminari, e a varredura confirma se há outra.

**Ficha do Kirin.** Transcrição. Recebe a fronteira contra o Fio do Céu.

**Fichas do Ōdama Rasengan e do Rasenrengan.** Decisão pequena. Cada uma ganha a linha de valor de campo ao lado da parcela por corpo: o Ōdama em 150% na célula de quatro contra 37,5% por corpo, o Rasenrengan em 62,5% em campo contra 31,3% por esfera. Nenhum outro número muda.

**Fichas do Hōsenka e do Rasengan.** Nada muda. Constam aqui para que a varredura não as trate como pendentes.

**`worlds/naruto/systems/chidori-family.md`.** Transcrição. A razão que mantém o Shiden fora da linhagem cita a Centelha como portão único e passa a citar as duas portas. A posição dele fora da família não muda.

---

## 10. `worlds/naruto/skills/overview.md` → v2.33

**Transcrição estruturada.**

O Registro de Portão Duplo ganha a terceira espécie, o portão de componente, com a definição de que a perícia que governa matéria produzida fora do domínio dela exige piso congelado na perícia que produz aquela matéria. A linha do par Enton e Katon entra, com o Katon congelado no LV3. A nota de fechamento do registro permanece literalmente como está.

Na seção 8, fecham três erratas: a linha do Enton no Registro de Portão Duplo, a casa do verbo Fio do Céu e a âncora de dano do Chidori no Controle de Chakra.

O registro de conformidade recebe as versões novas de todos os documentos desta leva.

---

## 11. Transcrição pura

Três documentos publicam o Fator de Moldagem somado e não têm decisão envolvida. A troca é a forma vigente da Seção 5.3, com o `M` escalando a base inteira e o `w` lendo metade do coeficiente técnico da ficha.

`worlds/naruto/systems/technique-requirements.md`
`worlds/naruto/systems/errata-hiraishin.md`
`worlds/naruto/techniques/rasengan.md`

Qualquer conclusão de desenho apoiada no termo morto dentro desses três volta como RFC em vez de ser reescrita.

---

## 12. Varreduras de confirmação

Duas passadas, pelo achado de método registrado na Sessão 5.

**A primeira acha o que ficou.** Sem distinção de caixa, em `core` e `worlds`:

`1,85` · `1,95` · `Amplificação Doutrinária` · `Kyōka Enton` · `Fator de Moldagem` · `LV_CC` · `bônus_CC` · `republicad` · `2,00` no contexto de Kuroi Kaminari · `Centelha` no contexto de Kyōka

**A segunda acha o que a purga quebrou.** Nos arquivos tocados por esta leva, varredura por termo repetido e por radical colado, pelo padrão de "Esforço 0,9 e Esforço 0,9" e "teste de conexãoquiva".

**Validação.** `node tools/check-links.mjs` sem `--write` saindo em zero. `lint-frontmatter.mjs` sem achado novo. Regenerar `INDEX.md` e resolver conflito por regeneração.

---

## 13. Fora desta leva

A aplicação. `src/shared/data` consome os multiplicadores Kyōka, a celeridade do Shiden e a decomposição do Enton, e a sincronização roda em leva própria depois que o manual estiver publicado e verde. Relatório de divergência primeiro, sem tocar em código.

Lote de Evasão e Leitura, as três devoluções do Bloco 8, veneno como vetor próprio, Compêndio de Senjutsu e o preenchimento do Perfil de Evasão nas cento e cinquenta entradas.

---

## Dependências

Consolidado S6-01, que publica a razão de cada decisão. Handoffs S5-07 e S5-08. Consolidado Final da Sessão 5 e Adendo de Resistência Elemental.
