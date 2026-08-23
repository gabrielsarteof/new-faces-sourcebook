---
id: naruto.technique.rasenrengan
title: "Rasenrengan (螺旋連丸)"
version: 1.2
layer: scenario
scenario: naruto
type: technique
status: final
source-file: Rasenrengan_v1.md
---

# Rasenrengan (螺旋連丸)
Ninjutsu · sem natureza · Rank A

Duas esferas na mesma ação, e a decisão de onde cada uma entra.

---

## Sobre a Técnica

O Rasenrengan é a formação de duas esferas idênticas às do Rasengan, uma em cada mão, sustentadas e entregues dentro da mesma ação. Cada esfera é a técnica de origem sem alteração de geometria, de volume ou de rotação, e o que a ficha compra é a capacidade de sustentar duas obras de transformação de forma ao mesmo tempo, que é a barreira real da execução.

As duas esferas admitem destinos independentes. O executante entrega uma em cada alvo dentro do alcance de contato, ou converge as duas sobre o mesmo corpo. A convergência inverte o sentido de rotação de uma das esferas contra a outra, e as duas espirais contrarrotativas se encontram dentro do alvo em vez de se anularem na superfície, o que abre o ponto de entrada antes que a segunda esfera chegue.

O custo real da técnica não está no chakra e sim na atenção. Duas moldagens simultâneas de coeficiente técnico máximo disputam a mesma precisão, e a perda de uma delas durante a formação derruba a outra junto, porque o executante não consegue redistribuir a contenção no meio do ato. A técnica premia quem já resolveu o problema da simultaneidade e pune quem tenta resolvê-lo com ela.

---

## Requisitos de Acesso

- **Controle de Chakra LV5:** portão de rank A da linha sem natureza, conforme a Seção 2 da Linhagem do Rasengan
- **Moldagem Absoluta:** 84 pela soma da Base Total com SAB, degrau herdado do Rasengan
- **Caminho Composição:** inclinação Moldagem, dono da sustentação da estrutura estável
- **Rasengan adquirido:** cada esfera do par é a técnica de origem sem alteração
- **Assistência de Moldagem:** duas moldagens, conforme a Seção 4 da Linhagem do Rasengan

---

## Despertar / Aquisição

A entrada permanece indisponível enquanto o Rasengan não tiver autor. Concluída a autoria da técnica de origem, o Rasenrengan passa a acessível a quem cumprir os requisitos acima, na camada de Requisito Mecânico.

---

## Custo de XP

**Custo de XP:** 15.500

---

## Efeitos Globais

As duas esferas acendem ao mesmo tempo e o campo lê duas luzes azuis em vez de uma. O zumbido dobra e passa a produzir batimento audível, um pulso lento resultante da diferença de rotação entre as duas obras, e esse som é a assinatura que distingue a técnica da execução de duas esferas em turnos separados.

O ar entre as mãos do executante é puxado para os dois giros ao mesmo tempo e permanece instável enquanto as esferas existirem, o que torna qualquer objeto leve solto entre elas incontrolável. O fenômeno é ambiental e não causa dano.

---

## Mecânica de Ativação

- **RC nominal:** 1.200, sendo 600 por esfera
- **Vetor:** Impacto · sem celeridade, entrega portada pelo corpo
- **Custo mínimo:** 400
- **Custo de PS:** nenhum próprio, restando apenas o que o desperdício do executante cobra pela régua do Controle de Chakra
- **Selos de referência:** 0
- **Assinatura selada:** dispensada, porque a contagem de referência já é zero
- **Perfil de Evasão:** Padrão, sem sobretaxa embutida na RC nominal
- **Janela de Canalização:** lida sobre o custo pago pela fórmula da Seção 3.2 do Manual de Jutsus
- **Ação:** formação das duas esferas e entrega de ambas na mesma ação padrão
- **Degrau de duração:** instantânea, elevável pela Escada de Permanência do Controle de Chakra
- **Assistência de Moldagem:** duas moldagens
- **Aftermath:** nenhum declarado
- **Restrições:** corpo a corpo, uma esfera por mão, até dois alvos, ambas as mãos livres

---

## Família de Dano

Conforme a Seção 5.3 do Manual de Jutsus, com cada esfera resolvida como entrega independente:

```
dano bruto = 5 × RC_limpa × coef_entrega × mult_Tipo × M
dano bruto = 5 × 600 × 0,20 × 1,00 × M
dano bruto = 600 × M

M = 1 + 1,5 × (P − 148) ÷ 148          piso de M: 0,5
```

O coeficiente de entrega 0,20 corresponde à categoria de ponto concentrado em contato único, preservado da técnica de origem porque a geometria de cada esfera não muda. O coeficiente técnico 3,0 é herdado da linhagem.

A RC nominal de 1.200 publicada na Mecânica de Ativação é a soma das duas moldagens e governa o rank, a interpolação de XP e a compressão de limiar. Cada entrega lê a própria metade, e a técnica compra multiplicidade e não potência por esfera.

O `M` entra integralmente em cada esfera, porque a maestria que sustenta as duas obras é a mesma e não se divide entre elas.

O `mult_Tipo` é 1,00 porque a obra não transforma natureza alguma, e a Constante de Moldagem não tem rendimento de conversão a medir onde não há conversão. A Assinatura do vetor declarado permanece, e para Impacto ela vale 1,00. O coeficiente técnico de 3,0 resolve o `w` em 1,5, que é a metade dele.

A perícia governante é o Controle de Chakra, e o `P` é o atributo regente dela somado à Base Total, à Inclinação Total e à Especialização. O `P_ref` de 148 é o do rank A, e nele o `M` resolve em 1,000 por construção.

---

## Tabela de Descarga

Par de referência Elite, PV 1.440.

A tabela é indexada ao `P` do Controle de Chakra, porque é o `P` que o motor lê. Nenhum perfil nomeado de personagem entra aqui.

| P do Controle de Chakra | M | Dano por esfera | % PV do par |
|---|---|---|---|
| 122 | 0,736 | 442 | 23,0% |
| 148, referência do rank | 1,000 | 600 | 31,3% |
| 180 | 1,324 | 795 | 41,4% |

O rendimento total depende da distribuição das duas esferas. Os valores abaixo assumem LV_CC 6.

| Distribuição | Dano entregue | Comparação com o Rasengan base |
|---|---|---|
| uma esfera em cada um de dois alvos | 390 por alvo | 100% por alvo |
| duas esferas no mesmo alvo | 780 no alvo, com a segunda sem mitigação | acima de 200% |

---

## Interação com Defesas

Cada esfera entregue a um alvo distinto usa as regras padrão de defesa sem modificação, com a Absorção do alvo aplicada integralmente.

A convergência das duas esferas sobre o mesmo corpo altera a resolução da segunda. As espirais contrarrotativas se encontram dentro do ponto de entrada aberto pela primeira, e a segunda esfera não encontra camada de mitigação para atravessar. A Absorção do alvo não se aplica em grau algum ao dano da segunda esfera, e a Resistência permanece valendo.

A elevação é categórica e não admite fração. O alvo recebe as duas esferas ou nenhuma delas, e a esquiva bem-sucedida evita o par inteiro.

---

## Deslocamento por Torque

O deslocamento é resolvido por alvo pela régua do sistema, com os valores do Rasengan base. O alvo que receba as duas esferas convergentes não é deslocado, porque os dois torques se cancelam e a energia permanece dentro do corpo em vez de arremessá-lo.

A supressão do deslocamento é uma vantagem tática e não um prejuízo. O alvo que não voa para fora do alcance permanece disponível para a ação seguinte do executante ou dos aliados.

---

## Progressão por Maestria

| Condição | Capacidade ou mudança |
|---|---|
| Controle de Chakra LV5, Moldagem Absoluta, Rasengan | acesso à técnica |
| Caminho Simultaneidade, Janela Dupla | as duas moldagens correm nas mãos próprias, dispensando clone |
| Caminho Simultaneidade LV5 | a segunda janela dispensa a mão livre e corre por ponto de emissão declarado |
| Caminho Composição LV5 | uma assistência a menos, e a técnica passa a executar com um único assistente |
| Caminho Composição transcendido | nenhuma assistência exigida |
| Ōdama Rasengan adquirido | o par se forma em porte elevado, na leitura registrada abaixo |
| Caminho Refino | custo pago no mínimo de 400, sem PS de desperdício |

---

## O Par em Porte Elevado

O executante que possua também o Ōdama Rasengan forma o par nas duas geometrias e não em uma nova. A leitura é de composição entre fichas já pagas e não de entrada adicional.

| Composição | RC nominal | Resolução |
|---|---|---|
| duas esferas base | 1.200 | cada esfera pela ficha do Rasengan |
| uma base e uma elevada | 1.800 | cada esfera pela ficha correspondente |
| duas esferas elevadas | 2.400 | cada esfera pela ficha do Ōdama Rasengan |

A composição de duas esferas elevadas exige três moldagens simultâneas e o custo mínimo de 800, o que a coloca fora do alcance de quem não dispuser de assistência dupla ou do caminho Composição transcendido.

---

## Referência de Usos por Perfil

| Teste de Moldagem | Custo pago | PS de desperdício | RC | LS | Janela | Usos por combate |
|---|---|---|---|---|---|---|
| 185 | 400 | 0 | 2.211 | 442 | 0 turnos | 5 |
| 185 | 400 | 0 | 3.800 | 760 | 0 turnos | 9 |
| 142 | 624 | 22 | 2.211 | 442 | 1 turno | 3 |
| 84 | 925 | 53 | 2.211 | 442 | 2 turnos | 2 |

---

## Sinergias

- **Caminho Simultaneidade:** a Janela Dupla é a única rota que entrega a técnica sem custo de reserva adicional, porque dispensa o clone que levaria parte da RC
- **Kage Bunshin:** o clone cobre a segunda moldagem e permanece a rota disponível antes do LV4 em Execução
- **Caminho Firmeza:** a Canalização Blindada eleva o limiar de ruptura, e nesta ficha o limiar protege as duas obras ao mesmo tempo, porque um golpe acima dele derruba o par inteiro
- **Aliado que fixa o alvo:** a convergência exige o mesmo corpo nas duas entregas, e o alvo imobilizado por terceiro é o que garante a leitura sem mitigação da segunda esfera
- **Ōdama Rasengan:** a composição em porte elevado usa as duas fichas sem entrada nova e sem preço adicional
- **Dois alvos em flanco:** a distribuição em alvos distintos resolve o cerco de dois oponentes numa única ação, que é o cenário em que a ficha rende o dobro sem depender de convergência

---

## Notas para o Mestre

- **Peça a declaração antes da resolução.** Onde cada esfera entra é decisão que precede a rolagem, e a escolha entre dois alvos e a convergência é o conteúdo tático inteiro da ficha
- **A convergência não desloca.** Lembre a mesa de que o alvo convergido fica onde está. Isso é vantagem para o grupo e deve ser narrado como o corpo preso entre as duas rotações, e não como um golpe que falhou em arremessar
- **Uma interrupção derruba as duas.** Durante a janela de canalização, o golpe acima do limiar tira o par inteiro e toda a RC investida. Declare isso à mesa antes que aconteça a primeira vez
- **Narração pelo batimento.** O som das duas esferas não é o dobro do som de uma. É um pulso lento, e quem já ouviu sabe que vêm duas antes de ver as mãos
- **Frequência.** Duas a cinco execuções por combate conforme a reserva e o refinamento é o esperado
- **NPCs.** Adversário com esta técnica ameaça dois personagens na mesma ação e força o grupo a decidir quem recebe. É o inimigo que quebra formação em par sem precisar de área
