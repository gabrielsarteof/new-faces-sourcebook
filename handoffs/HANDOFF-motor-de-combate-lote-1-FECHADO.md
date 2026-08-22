# HANDOFF — Motor de Combate, Lote 1 (FECHADO)

Substitui o handoff anterior do Lote 1. Registra o motor de dano físico e o oleoduto defensivo aprovados por Gabriel, com testes resolvidos contra ficha real. O que está neste documento está fechado e não se reabre sem decisão explícita de Gabriel.

---

## 1. Fórmula do golpe físico

```
Energia = (FOR + VEL + bônus geral da perícia ofensiva) × multiplicador do golpe
```

O bônus geral é o número resolvido do Núcleo de Perícias, Base Total mais Inclinação Total mais Especialização, **sem o atributo regente**, seguindo o precedente do Manual de Jutsus contra dupla contagem. Ele entra inteiro, sem divisor.

| Golpe | Multiplicador | Custo em ação | Contrapartida |
|---|---|---|---|
| Rápido | ×0,5 | meia ação | nenhuma |
| Firme | ×1 | uma ação | nenhuma |
| Pesado | ×1,5 | uma ação | guarda aberta até o próximo turno; exige perícia |

O Golpe Firme é o ataque básico. Quem ataca sem declarar nada está desferindo um Firme.

**Origem da forma.** É a fórmula original do sistema, anterior à substituição pela Potência. A auditoria desta sessão identificou a Potência como a origem do desbalanceamento diagnosticado no teste de mesa, e a forma original volta com fundamento documentado.

---

## 2. Oleoduto defensivo

```
Energia → Guarda → Absorção → PV
```

**Guarda.** Barra consumível.

```
Guarda máxima = (DEF × 5) + bônus geral da perícia defensiva
Regeneração por turno = metade de (DEF × 5)
```

Absorve integralmente enquanto tiver pontos. Cada ponto absorvido sai da barra e vira PS gasto no defensor. Quando zera no meio de um golpe, o excedente segue para a Absorção. A perícia defensiva compra **capacidade**, não recuperação: a regeneração ignora o bônus e lê apenas o atributo.

**Absorção.** Proporção, sem perícia.

```
Absorção = RES × 3
fração que atravessa = E ÷ (E + Absorção)
dano ao PV = E × fração
```

Absorção é tolerância biológica do tecido. Nenhuma perícia a alimenta. É onde Penetração resolve direto, ignorando a Guarda.

**O que RES × 3 significa agora.** Deixa de ser quanto o corpo corta e passa a ser o ponto de virada. Contra golpe igual à Absorção, metade atravessa. Abaixo dela, o corpo aguenta a maior parte. Acima dela, o corpo começa a ceder.

**Correção central do lote.** A Absorção deixou de subtrair e passou a dividir. A subtração plana permanente era a origem do degrau de cinco vezes que apagava jutsus de rank C e B do diagnóstico original.

---

## 3. Testes resolvidos

Ficha real de referência: FOR 40, VEL 38, DEF 32, RES 40, PV 2.400, PS 1.950, bônus de perícia 130.

Base de ataque 208. Rápido 104, Firme 208, Pesado 312.
Defesa: Guarda máxima 290, regeneração 80 por turno, Absorção 120.

**Espelho, Golpe Firme turno a turno:**

| Turno | Guarda antes | Passa | Dano PV |
|---|---|---|---|
| 1 | 290 | 0 | 0 |
| 2 | 162 | 46 | 13 |
| 3 em diante | 80 | 128 | 66 |

Regime permanente de 66 por turno. O PV de 2.400 cede em torno de 38 turnos de troca básica.

**Comparativo contra Guarda regenerada em 80:**

| Golpe | Passa | Dano PV | PS drenado |
|---|---|---|---|
| Rápido 104 | 24 | 4 | 80 |
| Firme 208 | 128 | 66 | 80 |
| Pesado 312 | 232 | 153 | 80 |

O Pesado desferido todo turno derruba o espelho em 16 turnos, ao preço da guarda aberta permanente.

**Defensor sem perícia defensiva** (Guarda 160): dano de abertura de 14 no primeiro turno em vez de zero, e regime permanente idêntico de 66. A perícia defensiva compra vantagem de abertura que se dissolve ao longo da luta.

**Defensor pesado** (DEF 45, RES 45, Guarda 355, Absorção 135): 31 de PV por Firme e 106 por Pesado, aproximadamente metade do espelho, sem nunca zerar.

**Civil** (base 78, sem perícia): o Firme de 78 morre integralmente na Guarda regenerada de 80. Zero de PV em qualquer turno. Quem não treinou não fere quem treinou, e isso emerge da conta sem exceção escrita.

---

## 4. Alvos de turno aprovados

O básico não resolve combate. Ele desgasta, drena PS pela Guarda e abre janela. O relógio real da luta é o golpe pago, e essa é a leitura canônica: em Naruto ninguém morre de troca de taijutsu básico.

| Vetor | Alvo |
|---|---|
| Impacto básico | não decide, desgaste longo |
| Impacto pago, tier Rasengan | 3 a 4 turnos |
| Conversão defendida | 4 a 5 turnos |
| Conversão sem defesa | 2 a 3 turnos |
| Penetração | pendente de retradução, ver Lote de Vetores |

A divergência de âncora do handoff anterior está resolvida. A Régua de Magnitude de 25 a 38 por cento morre como âncora universal, e cada vetor passa a ter o próprio relógio.

---

## 5. Grandezas extintas

**Potência.** Morre como grandeza. Todos os documentos e telas que a leem entram na fila de propagação.

**Dispersão.** Nome criado durante a sessão de reimaginação e descartado antes de qualquer publicação. O território dela pertence à Guarda. Não deve ser retomado.

**Limiar.** Nome de trabalho para a camada de tolerância biológica. Absorvido pela Absorção, que preserva o nome e a fórmula originais.

---

## 6. Princípios registrados

1. **O bônus de perícia entra sempre inteiro.** Escala se ajusta nas constantes da mecânica nova, nunca mutilando o número que outro documento produziu. Divisor aplicado a bônus alheio é sinal de que o bônus foi posto na camada errada.
2. **Antes de reimaginar uma mecânica, verificar o que existia antes da versão quebrada.** Duas vezes nesta sessão a resposta correta já estava no histórico do projeto.
3. **Ataque compõe, defesa divide.** As duas famílias de fórmula são deliberadamente distintas, seguindo o padrão transversal da indústria. Simetria estética entre ataque e defesa devolve o penhasco de subtração.
4. **Território antes de valor.** Perícia defensiva pertence à Guarda porque treino compra postura, não tecido. Quando um bônus quebra o sistema, perguntar de quem é o território antes de mexer no número.
5. **Competência treinada é permanente.** Perícia defensiva não pode depender de declaração por turno, porque isso falha contra múltiplos atacantes e descreve mal o corpo treinado.
6. **Subtração que se consome é desgaste, subtração que nunca acaba é degrau.** Foi o que separou o destino da Guarda do destino da Absorção antiga.

---

## 7. Pendências herdadas, ainda abertas

1. **Cadência.** A regra publicada VEL÷15 segue revogada e não reconstruída. Sete lugares do corpus ainda a publicam: Núcleo do Sistema §4, Núcleo de Combate §2 e §7, Tomon nas duas fichas dos Oito Portões, Sistema dos Oito Portões §6.1, Celeridade/Mueishō. O Lote 1 pendura duas regras nela: a meia ação do Golpe Rápido e a unidade de ação em geral. A Cadência reconstruída precisa entregar ações fracionárias.
2. **Contrapeso da Penetração contra Tanque.**
3. **Defesa barata universal contra Conversão**, para quem não tem reserva de chakra.
4. **PS como recurso de mesa.** Gabriel registrou que o PS regenera quase integralmente por turno, o que o torna incapaz de decidir escolhas dentro da rodada. O Lote 1 contorna isso usando ação como moeda de escolha, e a Guarda passa a ser a principal fonte de drenagem de PS. Revisão da regeneração de PS fica em aberto.

---

## 8. Fila de errata e propagação

1. Morte da Potência em todos os documentos, fichas e telas do aplicativo.
2. Absorção proporcional substituindo a subtração plana em todo o corpus.
3. Fator de Kenpo lê teste cheio com regente somado a Potência, que já lia FOR e VEL. Dupla contagem proibida pelo Manual de Jutsus, e a grandeza somada não existe mais.
4. Divergência entre bônus de Controle de Chakra próximo de 90 no LV6 no Manual de Jutsus e a faixa de 122 a 151 do Núcleo de Perícias resolvido.
5. Reação 75 na tela de Cálculos Rápidos do aplicativo não existe em documento nenhum.
6. Taxonomia das sete espécies de grandeza da ficha sem distinção visual no aplicativo.
7. Limiar de Esquiva ausente da ficha enquanto Esquiva, o preço em PS, aparece e confunde.
8. Regeneração da Guarda passa a ler metade de DEF × 5, não metade da barra total.

---

## 9. Lotes seguintes

**Lote de Vetores** (próxima sessão, briefing próprio produzido). Retradução de Penetração e Conversão para o par Guarda e Absorção, taxonomia de dano e classificação dos jutsus publicados.

**Lote 2, motor de dano de jutsu.** Entrega o ritmo de 3 a 4 turnos e cura a sensação de combate arrastado relatada na mesa. O Rasengan permanece Impacto e a diferença dele sobre o soco vem da energia injetada no mesmo oleoduto. A escala por rank se deriva de trás para frente dos alvos da seção 4.

**Lote 3, oleoduto defensivo completo.**

**Lote 4, Régua de Magnitude pós-mitigação com dono único.**

**Lote 5, propagação.** Múltiplos ataques, Limite de Saída, Exaustão, riders, fichas publicadas, preço de VEL na economia de atributos.

---

## 10. Metodologia

Pesquisa externa, planejamento com aprovação incremental seção a seção, documento final somente após aprovação integral. Corpus quebrado não serve de âncora de calibragem. Toda fórmula chega com explicação termo a termo e testes resolvidos contra ficha real.
