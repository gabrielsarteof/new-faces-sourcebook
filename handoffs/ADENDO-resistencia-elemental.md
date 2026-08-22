---
id: adendo.resistencia-elemental
title: "ADENDO AO CONSOLIDADO — Resistência Elemental e Estados Elementais"
version: 1.0
layer: handoff
status: fechado
---

# ADENDO — Resistência Elemental e Estados Elementais

Complementa o `CONSOLIDADO-FINAL-motor-de-jutsus-e-conexao.md` sem alterá-lo. Fecha a pendência 1 da Seção 8 do Handoff do Lote de Vetores. A vulnerabilidade relacional (Ciclo de Superação) não é tocada: ela já está fechada e continua governando elemento contra elemento.

---

## 1. Pesquisa canônica

**Domu `[canon, mangá 339–342]`.** Kakuzu endurece a pele com chakra de terra e fica praticamente imune ao que vinha acertando nele; Kakashi identifica o estilo e ataca com Raikiri explorando a fraqueza da Liberação de Terra contra a Liberação de Raio. A resistência não estava no corpo, estava num estado ativo, e o estado criou a vulnerabilidade que o matou.

**Hidrificação `[canon, Narutopedia com referência de mangá]`.** O golpe físico atravessa o corpo liquefeito e o usuário sai ileso; o mesmo estado o torna muito vulnerável à Liberação de Raio. Anulação de uma categoria inteira, com uma segunda categoria virando fatal.

**Hell Stab contra borracha `[canon]`.** Existe matéria que resiste a um elemento por propriedade física, e existe intensidade capaz de vencer essa resistência. Nenhuma resistência canônica é absoluta.

**Ausência registrada.** Nenhuma fonte canônica mostra resistência elemental por constituição passiva, sem estado, sem linhagem, sem material. Fichas de wikis de estatísticas que sugerem o contrário foram descartadas por não serem fonte canônica.

**Conclusão da pesquisa.** A resistência do cânone é categórica e acoplada: reescreve o que o corpo é, e ao reescrever abre uma porta nova.

---

## 2. O Estado Elemental

Resistência elemental não é atributo passivo, não é multiplicador e não é camada nova no oleoduto. É um **Estado Elemental declarado por ficha**, com cinco campos obrigatórios: Modo, vetor ou elemento afetado, elemento acoplado, RC do Estado, custo de manutenção por rodada.

### 2.1 Os três Modos

Um Modo por Estado, nunca dois.

| Modo | O que faz | Âncora |
|---|---|---|
| **Travessia** | o vetor declarado atravessa o corpo sem conectar; deixa de existir como ameaça enquanto o Estado durar | Hidrificação contra o físico |
| **Couraça** | concede uma barra de matéria que engaja os vetores declarados antes do oleoduto normal | Domu |
| **Isolamento** | o elemento declarado não converte energia naquele corpo; a Interrupção de Contato resolve automaticamente no melhor grau | borracha contra eletricidade |

### 2.2 Couraça, mecânica

```
Barra de matéria = RC do Estado × 1,0
```

Não regenera. Engaja os vetores declarados antes de Guarda e Absorção. Cada ponto de chakra investido no Estado é um ponto de dano que não alcança o corpo.

**Constante ratificada em 1,0 por custo de oportunidade:** a 0,5 o Modo nasce morto (RC 600 daria 300 de barra, 1,7 turnos do físico do par, contra 517 de dano entregue se a mesma RC virasse Rasengan, e a Guarda normal do par já é 276 com regeneração gratuita). A 1,5 o Modo vira obrigatório (RC 1.900 daria quase 16 turnos, mais que a luta inteira). A 1,0, RC 600 segura 3,3 turnos e RC 1.200 segura 6,7, a janela em que a luta se decide.

### 2.3 Vulnerabilidade acoplada, pacote único

Contra o elemento acoplado, os três efeitos simultâneos, sem menu e sem exceção:

1. A **Absorção não se aplica**, porque a matéria conduz em vez de resistir.
2. O **rider daquele elemento entra sem teste, com grau agravado em um degrau**, pelo gatilho de envolvimento do Lote de Vetores, porque o corpo inteiro virou meio de condução.
3. O **Estado colapsa no impacto**, com o chakra investido perdido.

Os três são necessários: remover só a Absorção move um Chidori de 1.136 para 1.225 contra o par Especial, oito por cento, irrelevante. O que reproduz o cânone é a soma.

### 2.4 Cedência, sem regra nova

Nenhum Estado Elemental é absoluto. Duas formas de acabar:

- **Esgotamento:** a barra zera (Couraça), ou a manutenção deixa de ser paga (todos os Modos).
- **Ruptura:** obra com RC nominal maior que a RC do Estado rompe de uma vez, pelo **Confronto Elemental já publicado**, independente do que restava. É o Hell Stab atravessando a borracha e o Chidori encontrando o Domu.

O elemento acoplado é o terceiro caminho e o mais barato: não toca a barra, derruba o Estado por vulnerabilidade.

### 2.5 Economia

A RC declarada do Estado serve simultaneamente para a barra (Couraça), para o Confronto da Ruptura e para o preço em XP. O Estado ocupa a faixa de RC do rank em que a ficha o publica, sem tabela paralela. Preço pela **Régua de Resposta**, degrau 3 ou 4 conforme suprima camada ou exija do par recurso que ele não carrega garantido. Manutenção em número fixo absoluto por rodada.

---

## 3. Errata de rótulo do mult_Tipo

O Núcleo declara o multiplicador de Tipo como propriedade do defensor; o Sistema Elemental o publica como constante por natureza. A leitura correta é a segunda: **`mult_Tipo` é letalidade intrínseca do elemento**, quanto aquele tipo de energia machuca carne quando conecta, derivado de Constante de Moldagem × Assinatura. Errata de redação no Núcleo, **sem alterar número nenhum**. O slot do defensor fica livre e é ocupado pelo Estado Elemental, que só existe quando declarado.

---

## 4. Ficha de exemplo, Domu

Modo Couraça · vetores afetados: corte e impacto · elemento acoplado: Raiton · RC do Estado: faixa A · manutenção: fixa por rodada. Com RC 1.200, barra de 1.200, cerca de 6,7 turnos do físico do par Especial. Contra Chidori: barra não interfere, Absorção não se aplica, 1.225 entregues (64% do PV do par), Perfuração sem teste com grau agravado, Estado colapsa levando o chakra investido. Um golpe certo desfaz tudo.

---

## 5. Fila de propagação (soma ao briefing do Claude Code)

1. Núcleo de Combate v3: errata de rótulo do `mult_Tipo`; seção nova de Estado Elemental com os três Modos, a barra de matéria, o pacote de vulnerabilidade e a cedência por Confronto.
2. Sistema Elemental: registrar que o `mult_Tipo` é letalidade do elemento e que resistência vive em Estado declarado, não em constante de natureza.
3. Fichas de técnica que hoje descrevem resistência de forma narrativa (Domu, Hidrificação, armaduras elementais, transformações de linhagem) passam a declarar os cinco campos do Estado.
4. Template de Documento de Técnica: cinco campos novos para Estados.
5. Régua de Resposta aplicada aos Estados no repasse integral.

---

## 6. Descartes com razão registrada

**Resistência como atributo passivo de ficha:** sem apoio canônico e sem contrapartida; violaria o princípio de vantagem sem dono. **Resistência como espelho do Ciclo de Superação:** o Ciclo é relação entre elementos, resistência é relação entre elemento e corpo. **Resistência como redução percentual:** contradiz elevação categórica e não existe no cânone. **Couraça multiplicando a Absorção:** a proporcional é regressiva contra E grande, então dobrar a Absorção move um Chidori em sete por cento; o Modo não teria presença acima do rank B. **Constantes de barra em 0,5 e 1,5:** ver 2.2.
