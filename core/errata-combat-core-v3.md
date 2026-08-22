---
id: core.errata-combat-core-v3
title: "Errata do Núcleo de Combate v3"
version: 1
layer: core
type: pending-patch
status: pending
source-file: Errata_Nucleo_de_Combate_v3.md
---

# Errata do Núcleo de Combate v3

Registra o que a publicação do Núcleo de Combate v3 tornou desatualizado no resto do repositório. O v3 aposentou quatro grandezas e trocou a forma de duas camadas de defesa, e cada documento que lia qualquer uma delas passou a publicar leitura morta. Cada alvo abaixo indica onde localizar, o que sai, o que entra, e o bloco do Plano Mestre de Propagação que o executa.

Dezoito documentos do corpus citam ao menos uma das grandezas aposentadas. Nenhum foi editado por esta errata.

## O que o v3 aposentou

| Leitura morta | Substituta |
|---|---|
| Potência como grandeza de ficha, `(FOR + VEL) × 25` | Energia, `(FOR + VEL + bônus geral da perícia ofensiva) × multiplicador do golpe` |
| Coeficiente de impacto de arma | nada, o vetor decide o que a Guarda engaja |
| Coeficiente de entrega do ataque comum em 0,20 | nada, o multiplicador do golpe ocupa o lugar |
| Absorção subtrativa com piso de 10% | Absorção proporcional, `E ÷ (E + Absorção)`, sem piso e sem teto |
| Guarda de valor fixo sem perícia | barra consumível, `(DEF × 5) + bônus geral da perícia defensiva`, recarga de metade de DEF × 5 |
| Limiar de Esquiva como número de ficha | lado defensivo do teste de conexão, `VEL + DES + bônus de esquiva` |
| Rolagem de d100 para a Esquiva | teste oposto de base cinquenta |
| Cadência por `VEL ÷ 15` | razão de VEL contra o oponente mais rápido engajado |
| Assinatura como propriedade do defensor | letalidade intrínseca do tipo de energia |

O d100 do crítico permanece intacto, e nenhum número dele mudou.

---

## ALVO 1 — Sistema de Efeitos de Status, condição Quebra de Guarda

**Bloco 4.** Dono formal da condição.

**Localizar:** o Grau Único da Quebra de Guarda e a nota que o acompanha.

**Sai:** "Grau Único: a Guarda vai a zero e não recarrega. O Bloqueio deixa de estar disponível. O Limiar de Esquiva do quebrado é multiplicado por 0,8." A nota que fecha a condição perde a frase sobre gastar a Ação Completa e o Esforço de um Bloqueio para encerrar o estado.

**Entra:** "Grau Único: a Guarda vai a zero. Durante a janela, o Bloqueio fica indisponível e o lado defensivo do teste de conexão é multiplicado por 0,8; a Guarda recarrega normalmente pela tabela de Exaustão desde o primeiro turno após a quebra. Dura até o fim do turno seguinte de quem quebrou a Guarda."

**Razão:** a cláusula de não recarga foi escrita para uma Guarda de valor fixo, em que a quebra era evento raro. Sob a barra consumível do v3 a Guarda zera sempre que um golpe supera a fração que o vetor engajou, o que numa troca física comum acontece toda rodada, e a cláusula passava a se realimentar: a barra em zero garante que o golpe seguinte a supere de novo, e a janela nunca fecha. O gatilho permanece contra a Guarda restante, porque é ele que faz a quebra ficar mais provável conforme o cansaço encolhe a recarga, e é essa degradação que produz a cascata de exaustão que decide o duelo de Impacto. A Seção 6.6 do Núcleo de Combate já publica a redação nova.

**Também neste documento:** a Vulnerabilidade Elemental cita em três dos quatro graus uma Resistência que nunca existiu, e a escada de penalidade dos riders físicos entra aqui pela Seção 6.5 do Núcleo. Os dois pertencem ao mesmo bloco e têm entrada própria no Plano Mestre.

---

## ALVO 2 — Cálculos Rápidos de Testes

**Bloco 6.** Reescrita, não errata pontual.

O documento republica quatro leituras que morrem juntas.

| Localizar | Sai | Entra |
|---|---|---|
| Tabela de números da ficha | Potência como grandeza viva | Energia pela forma da Seção 6.1 do Núcleo |
| Fórmula de Energia | `Potência × coeficiente de entrega × multiplicador de Tipo + Fator de Técnica` | a forma do corpo e a da obra, separadas, com Assinatura no lugar do multiplicador de Tipo |
| Tabela de números da ficha | `Absorção = RES × 3, piso de 10% da Energia original sempre passando` | `Absorção = RES × 3`, proporcional, sem piso |
| Tabela de números da ficha | Limiar de Esquiva como número de ficha | lado defensivo do teste de conexão |
| Esforço por ação | escada de Cadência em três degraus | dois degraus, porque o teto de duas ações extras torna o terceiro inalcançável |
| Quebra de Guarda | a cláusula de não recarga e o encerramento por Ação Completa | a redação do ALVO 1 |

O Núcleo de Combate v3 também acrescentou números de ficha que este documento ainda não reúne: a Guarda com o bônus da perícia defensiva, os dois lados do teste de conexão, e o Esforço somado por Grau de Penetração.

**Segundo arquivo com o mesmo nome.** `worlds/naruto/quick-calculations.md` também cita a Potência. Ele entra no mesmo bloco.

---

## ALVO 3 — Núcleo do Sistema

**Bloco P.** Purga do `VEL ÷ 15`.

**Localizar:** a linha "Múltiplos ataques" da tabela de específicos da Seção 4.

**Sai:** `VEL ÷ 15` (piso, mínimo 1); cada extra custa PS.

**Entra:** a Cadência se lê da razão entre a VEL do combatente e a do oponente mais rápido com quem ele está engajado. Razão de 1,5 ou mais concede uma ação extra, razão de 2,5 ou mais concede duas, com teto de duas. Cada ação extra paga o próprio Esforço pela escada do Núcleo de Combate.

O Núcleo do Sistema também cita a Potência, que sai pela substituta da tabela de aposentadorias.

---

## ALVO 4 — Poder Celeridade

**Blocos P e 8.**

**Localizar:** os itens que leem o Limiar de Esquiva, a Potência de ataque corporal e a Cadência.

**Sai:** o multiplicador de 1,30 sobre o Limiar de Esquiva do portador contra ataque corporal; a citação da Potência de ataque corporal; a Cadência por `VEL ÷ 15` das seções 2 e 7 do Núcleo citadas pelo documento.

**Entra:** o multiplicador de 1,30 incide sobre o lado defensivo do teste de conexão, entrando na mesma família de multiplicadores da Seção 10 do Núcleo, que se acumulam entre si sem exceção; a Potência vira Energia; a Cadência lê a razão do ALVO 3.

**Cuidado de leitura:** o documento cita a família de multiplicadores como argumento de desenho, e a família continua existindo com o mesmo comportamento. Só o nome da grandeza multiplicada mudou.

---

## ALVO 5 — Perícias e poderes que citam grandeza aposentada

**Bloco 8.** Treze documentos, cada um com uma ou mais das quatro leituras. Os outros cinco dos dezoito têm alvo próprio nesta errata.

| Documento | Lê |
|---|---|
| `worlds/common/skills/aikido.md` | Potência |
| `worlds/common/skills/kenpo.md` | Potência, coeficiente de impacto |
| `worlds/common/skills/taekwondo.md` | Potência, Limiar de Esquiva, coeficiente de impacto, `VEL ÷ 15`, Absorção subtrativa com piso |
| `worlds/common/skills/taichi.md` | Potência, Limiar de Esquiva |
| `worlds/common/skills/wing-chun.md` | Potência, Limiar de Esquiva |
| `worlds/common/skills/katana.md` | Limiar de Esquiva, coeficiente de impacto |
| `worlds/common/skills/tanto.md` | Limiar de Esquiva, coeficiente de impacto |
| `worlds/naruto/skills/kunai.md` | coeficiente de impacto, piso de 10% da Absorção |
| `worlds/naruto/skills/leque.md` | coeficiente de impacto |
| `worlds/naruto/skills/shuriken.md` | coeficiente de impacto |
| `worlds/naruto/skills/raiton.md` | Limiar de Esquiva |
| `worlds/naruto/skills/overview.md` | Potência |
| `worlds/naruto/powers/overview.md` | Limiar de Esquiva |

**Três casos que exigem mais que substituição de nome.**

O Fator de Kenpo lê teste cheio com o regente somado à Potência, que já lia FOR e VEL. A dupla contagem que o Manual de Criação de Jutsus proíbe permanece proibida, e a grandeza somada deixou de existir. A régua precisa ser recomposta sobre a Energia, e o número neutro dela reconferido.

A perfuração de Absorção do caminho Chegada Cortante da Kunai reduz a Absorção do alvo em um terço, "mantido o piso de 10% da Energia que sempre alcança". O piso saiu. A redução da Absorção continua fazendo sentido sob a proporcional, e a cláusula do piso sai da frase.

O par resolvido de Queda de Machado do Taekwondo é calculado de ponta a ponta sobre a Potência, o coeficiente de impacto e a Absorção subtrativa, e chega a uma Quebra de Guarda categórica no topo da curva. Os números inteiros do exemplo precisam ser recalculados, e a conclusão de desenho reconferida contra o motor novo.

---

## ALVO 6 — Aplicação, New Faces Character Creator

**Bloco 9.** Relatório de divergência primeiro, sem tocar em código.

As grandezas novas do modelo de dados são celeridade, Fator de Seção, Ímpeto, M_vel, w, P por perícia governante, e RC limpa contra nominal. Somam-se a elas as deste documento: o bônus geral da perícia defensiva dentro da Guarda, o Grau do vetor como fração engajada, a Guarda Ferida do Corte, os cinco campos do Estado Elemental, e o lado ofensivo e o defensivo do teste de conexão.

O Limiar de Esquiva sai da ficha, e a Reação 75 da tela de Cálculos Rápidos continua sem documento de origem.

`src/test/data/provenance.test.ts` e `src/test/data/sourcebookBacklog.test.ts` declaram cada um o próprio conjunto `IGNORADOS` de diretórios que não contêm documento do corpus. Os dois varredores do sourcebook já excluem `handoffs/`, e os dois testes da aplicação passarão a enxergar sete documentos de propagação como corpus no instante em que o ponteiro do submódulo avançar.

---

## O que esta errata não cobre

O Manual de Criação de Jutsus consome o Núcleo pela sequência de resolução e pelo `mult_Tipo`, e a reescrita dele em v3 é bloco próprio, com quatro origens convergindo. O Sistema Elemental declara em registro que a Assinatura "continua sendo propriedade do defensor", leitura que o Adendo de Resistência Elemental inverteu, e a correção pertence ao bloco daquele documento. Os compêndios e as fichas de técnica entram no repasse integral do corpus.

## Rodapé de dependências

Núcleo de Combate v3. Handoff do Motor de Combate, Lote 1. Handoff do Lote de Vetores. Consolidado Final do Motor de Jutsus e Conexão. Adendo de Resistência Elemental. Plano Mestre de Propagação v4.
