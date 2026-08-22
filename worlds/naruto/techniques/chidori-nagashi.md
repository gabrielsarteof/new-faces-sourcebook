---
id: naruto.technique.chidori-nagashi
title: "Chidori Nagashi — Corrente de Mil Pássaros (千鳥流し)"
version: 3
layer: scenario
scenario: naruto
type: technique
status: final
source-file: Chidori_Nagashi_v2.md
---

# Corrente de Mil Pássaros (千鳥流し)
Chidori Nagashi · Ninjutsu · Raiton · Rank A

---

## Sobre a Técnica

O Chidori Nagashi é a liberação radial da mesma carga que o Chidori concentra na palma. O executante reúne o chakra de Raio e o distribui pela superfície inteira do corpo em vez de comprimi-lo em um ponto, e a descarga sai em todas as direções ao mesmo tempo, alcançando qualquer corpo dentro do raio imediato sem que o usuário precise escolher um alvo ou uma direção.

A corrente percorre todo condutor em contato com o executante no instante da liberação. Lâmina empunhada, superfície metálica pisada e poça de água em contato com o pé conduzem a descarga até quem os estiver tocando, e o alcance efetivo passa a ser o do condutor e não o do corpo. A propagação por meio externo pertence à perícia de Raiton, que a governa por nível e por caminho.

A dispersão troca perfuração por cobertura. A densidade que atravessa um corpo humano no Chidori não se forma aqui, e o que a técnica entrega em cada alvo é uma descarga capaz de derrubar e paralisar sem transpassar. O valor tático mora na simultaneidade: o cerco que inviabiliza a investida linear é exatamente a situação em que a irradiação rende mais.

A técnica não produz o canto que dá nome à família. O som da compressão extrema em ponto único não ocorre na difusão, e o que se escuta é um zumbido eletromagnético audível apenas na proximidade imediata. A liberação também dispensa avanço, corrida e linha reta, e por isso não carrega o defeito estrutural da técnica de origem.

---

## Requisitos de Acesso

- **Raiton LV5:** portão de rank A, que resolve em 71 pela soma da Base 45 com INT 26
- **Caminho Arco:** inclinação Choque, dono da camada de corrente que cobre a pele
- **Moldagem Refinada:** 71 pela soma da Base Total com SAB, degrau herdado do Chidori, que a entrada declara por leitura direta em vez de deixar implícita no pré-requisito
- **Chidori adquirido:** a técnica deriva da reunião de carga que o Chidori estabelece

---

## Despertar / Aquisição

A entrada permanece indisponível enquanto o Chidori não tiver autor. Concluída a autoria da técnica de origem, o Chidori Nagashi passa a acessível a quem cumprir os requisitos acima, na camada de Requisito Mecânico.

---

## Custo de XP

**Custo de XP:** 4.900

**Errata de preço.** O custo passa de 11.000 para 4.900 XP. A causa é mudança de régua e não de RC: a posição dentro da faixa do rank deixou de ser lida pelo volume de reserva e passou a ser lida pela entrega contra o par do rank, medida no executor de referência, com o modificador de coeficiente técnico pagando o peso da maestria fora da posição. A entrega desta obra fecha em 43,8% do par, o que a põe em 15,0% da faixa, e o modificador de 0,500 incide sobre o resultado. Quem já comprou a técnica não paga diferença nem recebe reembolso, e o preço publicado daqui em diante é o novo.

---

## Efeitos Globais

A liberação acende uma luminosidade azulada ao redor do corpo do executante e de toda superfície condutora em contato com ele, visível a distância considerável em ambiente escuro. O aviso que os alvos recebem é esse brilho no instante da ativação, e não um som prévio que permita reagir de longe.

A descarga não distingue quem está no raio. Aliados em contato ou em proximidade imediata recebem a corrente pelas mesmas regras dos oponentes, e a técnica não admite exclusão seletiva.

Objetos metálicos soltos dentro do raio saltam, água em contato ferve na superfície e mecanismos elétricos simples queimam. Os fenômenos são ambientais e não causam dano.

---

## Mecânica de Ativação

- **RC nominal:** 800, limpa
- **Vetor:** Energia elétrica
- **Riders:** o rider estrutural do vetor Energia depende do tipo entregue, e o cenário o publica junto com a tabela de Assinatura; Paralisia Parcial declarada como rider da obra
- **Custo mínimo:** 300
- **Custo de PS:** nenhum próprio, restando apenas o que o desperdício do executante cobra pela régua do Controle de Chakra
- **Selos de referência:** 1
- **Assinatura selada:** admitida, exigindo o caminho Concisão adquirido ou teste de interface igual ou superior a 169
- **Velocidade:** Raiton, celeridade 150, sem desvio declarado
- **Posição elemental:** declarada por linha nas tabelas por perfil
- **Perfil de Evasão:** Inevitável, restrito ao raio corporal, com a proximidade do alvo como condição estrutural obrigatória. O Inevitável nunca cobrou sobretaxa de RC, e a RC limpa desta ficha sai apenas do arredondamento da errata da família
- **Janela de Canalização:** lida sobre o custo pago pela fórmula da Seção 3.2 do Manual de Jutsus
- **Ação:** janela de canalização, seguida de liberação imediata, sem deslocamento
- **Restrições:** raio corporal, alvos múltiplos irrestritos dentro dele, condutor em contato estendendo o alcance até o comprimento do objeto

---

## Família de Dano

Conforme a Seção 5.3 do Manual de Jutsus:

```
dano bruto = 5 × RC_limpa × coef_entrega × mult_Tipo × M
dano bruto = 5 × 800 × 0,12 × 1,75 × M
dano bruto = 840 × M

M = 1 + 0,5 × (P − 148) ÷ 148          piso de M: 0,5
```

O coeficiente de entrega 0,12 corresponde à categoria de área irradiada do corpo. O coeficiente técnico 1,0 corresponde à dependência média, em que a moldagem intensifica o efeito sem ser o mecanismo que o produz.

O dano é resolvido por alvo, com o valor integral aplicado a cada corpo alcançado.

---

## Tabela de Descarga

Par de referência Especial, PV 1.920, na faixa correspondente ao rank da técnica.

A tabela é indexada ao `P` do Raiton, porque é o `P` que o motor lê. Nenhum perfil nomeado de personagem entra aqui.

| P do Raiton | M | Dano por alvo | % PV do par |
|---|---|---|---|
| 122 | 0,912 | 766 | 40% |
| 148, referência do rank | 1,000 | 840 | 44% |
| 180 | 1,108 | 931 | 48% |

O rendimento da técnica escala pelo número de corpos alcançados, e não pelo investimento de chakra. Os valores abaixo assumem `P` 148, a referência do rank.

| Alvos alcançados | Dano total | Comparação com o Chidori base |
|---|---|---|
| 1 | 279 | 63% |
| 2 | 558 | 126% |
| 3 | 837 | 189% |
| 4 | 1.116 | 252% |

---

## Interação com Defesas

A técnica não perfura Absorção. O efeito Fio Concentrado é lido da inclinação Relâmpago, e esta entrada pertence à inclinação Choque, de modo que a mitigação passiva do alvo se aplica integralmente ao dano recebido.

O Perfil Inevitável anula a esquiva dentro do raio. Nenhum alvo alcançado testa Evitar, e apenas Absorção e Resistência mitigam. A defesa contra a técnica é posicional: permanecer fora do raio e fora de contato com qualquer condutor ligado ao executante.

---

## Rider de Paralisia Parcial

A corrente entra pela superfície de contato e se difunde pelo sistema nervoso de cada alvo alcançado, com resolução independente por corpo.

| Campo | Valor |
|---|---|
| Grau mínimo garantido | Leve |
| Grau máximo possível | Grave |
| Atributos testados | RES + FOR |
| Alvo do teste | (RES + FOR) × (1 − dano ÷ PV máximo da vítima) |
| Membro afetado | o tronco, por difusão sistêmica |

---

## Elevação para Paralisia Total

O alvo que permanecer em contato físico contínuo com o executante ou com um condutor ligado a ele até o início do turno seguinte recebe a corrente por um segundo ciclo completo. A aplicação sustentada testa contra Paralisia Total, que começa em Grau Grave por definição e impõe perda da ação de movimento.

A elevação exige contato mantido e não se aplica a alvo que apenas esteja dentro do raio.

---

## Progressão por Maestria

| Condição | Capacidade ou mudança |
|---|---|
| Raiton LV5, caminho Arco, Chidori | acesso à técnica |
| Raiton LV2 e LV3 | metal exposto e água presente conduzem a descarga além do raio corporal |
| Caminho Rede | o Salto Condutor vence o vão entre trechos condutores separados |
| Caminho Arco aprofundado | a Descarga de Contato passiva perde o limite por turno, somando ao campo irradiado |
| Transcendência Trovão | a contagem de reações por rodada deixa de existir, e a técnica passa a caber em turno alheio |
| Raiton com `P` 148 ou mais | `M` em 1,00 ou acima, com o dano subindo junto |
| Caminho Concisão, ou interface 169 | execução com zero selos |

---

## Referência de Usos por Perfil

| Teste de Moldagem | Custo pago | PS de desperdício | RC | Posição | LS | Janela | Usos por combate |
|---|---|---|---|---|---|---|---|
| 185 | 267 | 0 | 2.211 | Afinidade presumida | 553 | 0 turnos | 8 |
| 185 | 267 | 0 | 942 | Afinidade | 236 | 1 turno | 3 |
| 142 | 417 | 17 | 2.211 | Afinidade presumida | 553 | 0 turnos | 5 |
| 116 | 507 | 27 | 1.325 | Natureza aprendida | 199 | 2 turnos | 2 |

---

## Sinergias

- **Cerco:** a técnica alcança todos os corpos no raio sem escolha de direção, e converte a desvantagem posicional do executante cercado em rendimento máximo
- **Condutor empunhado:** lâmina, corrente e arame em contato estendem o alcance até o comprimento do objeto, sem custo adicional e sem nova execução
- **Água em cena:** poça, chuva acumulada e corpo de água em contato propagam a descarga a qualquer alvo tocado por eles, pela regra de nível da perícia de Raiton
- **Caminho Arco:** a Descarga de Contato responde a quem toca o executante entre uma liberação e outra, cobrindo a janela em que a técnica não está ativa
- **Chidori base:** o mesmo caminho de aquisição sustenta as duas, e o executante alterna entre abate de alvo único e negação de espaço sem pagar duas linhas de progressão
- **Paralisia prévia nos alvos:** a elevação para Paralisia Total encontra corpos já degradados, e o contato mantido deixa de ser escolha do alvo

---

## Notas para o Mestre

- **Declare o raio antes de resolver.** Quantos corpos estão dentro dele é informação que precede a rolagem, e não admite ampliação retroativa depois do resultado. Condutores em contato entram na mesma declaração
- **Aliados são alvos.** A técnica não distingue, e o custo real dela aparece quando o grupo está agrupado. Um executante que ignora isso deve acertar os companheiros
- **Resolva o rider por corpo.** Cada alvo rola separadamente e recebe o próprio grau. O valor da técnica na mesa está mais nesses graus espalhados que no dano
- **Narração.** O brilho azul cobre o corpo e sobe pelas superfícies em contato, com zumbido audível de perto. O canto de mil pássaros não aparece aqui, e essa diferença deve ser sentida pela mesa
- **NPCs.** Adversário cercado que libera a corrente inverte uma vantagem que os jogadores acharam que tinham, e é a resposta correta a um grupo que fecha distância em bloco
