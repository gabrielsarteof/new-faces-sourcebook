---
id: naruto.technique.hoo-sho
title: "Hōō Shō (鳳凰掌)"
version: 1.1
layer: scenario
scenario: naruto
type: technique
status: final
source-file: HooSho_v1.md
---

# Palma da Fênix — Katon: Hōō Shō (火遁・鳳凰掌)
Ninjutsu · Katon · Rank A

---

## Sobre a Técnica

O Hōō Shō é a liberação de fogo concentrado no exato ponto de contato entre a palma do praticante e o corpo do alvo. A chama não é projetada nem percorre trajetória alguma antes de chegar: ela nasce diretamente no ponto de encosto e desce para dentro do corpo atingido, sem a janela de tempo que qualquer disparo à distância concede.

O mecanismo depende de expelir chakra de fogo pelos próprios tenketsu da mão, num fluxo sustentado e contido até o instante do toque, e não de moldar a chama antes de liberá-la. É essa contenção que distingue o Hōō Shō das demais entregas desta leva, todas construídas para viajar até o alvo, contra uma técnica pensada para o alvo que já está ao alcance do braço.

A técnica pertence ao repertório de quem já foi alcançado pelo corpo a corpo antes de conseguir cuspir fogo, e resolve a situação do usuário de Katon que perdeu a distância que o resto do arsenal pressupõe. É a resposta do domínio à falha da própria doutrina de controlar à distância.

---

## Requisitos de Acesso

- **Katon LV5:** portão de rank A, que resolve em 71 pela soma da Base 45 com INT 26
- **Moldagem Alta:** 58 pela soma da Base Total com SAB, degrau elevado um passo acima do piso Plena que o coeficiente técnico 1,0 fixaria, pela propriedade de escala mínima de moldagem, com o fogo comprimido ao ponto exato da palma e contido sem vazar até o instante do toque
- **Caminho Emissão:** inclinação Condução da Perícia de Controle de Chakra, requisito consumível de outra perícia, único caso desta leva. É o efeito Ponto de Emissão que autoriza a origem da técnica pela palma em vez das mãos formando selo, e o portão desta entrada soma o caminho por cima do portão de rank de Katon, e não no lugar dele

---

## Custo de XP

**Custo de XP:** 9.200

---

## Efeitos Globais

O calor concentrado da descarga é perceptível apenas a quem está ao alcance do toque, sem sinal visível a distância antes do contato. O ponto atingido queima com intensidade acima do que a mesma RC produziria projetada, porque nenhuma dispersão em trânsito consome a chama antes de chegar.

---

## Mecânica de Ativação

- **RC nominal:** 780
- **Vetor:** Energia térmica · sem celeridade, entrega portada pelo corpo
- **Custo mínimo:** 260
- **Selos de referência:** 0, execução pela via de Emissão, sem selo de mão
- **Assinatura selada:** dispensada, pela mesma razão do Endan: selos de referência já em zero, sem contagem a dispensar
- **Perfil de Evasão:** Padrão
- **Janela de Canalização:** lida sobre o custo pago pela fórmula da Seção 3.2 do Manual de Jutsus
- **Ação:** ação de ataque corpo a corpo, contato direto da palma
- **Restrições:** alcance Engajado exclusivo, sem trajetória nem projeção. A técnica não executa contra alvo fora do contato físico
- **Aftermath:** leve, pela Seção 1.2 do Manual de Criação de Jutsus. PS igual a 20% do custo pago pela execução, cobrado após a resolução

---

## Família de Dano

Conforme a Seção 5.3 do Manual de Jutsus, com os dois coeficientes lidos da Tabela de Coeficientes da Leva fechada na ficha do Endan:

```
dano = RC nominal × coef_entrega × mult_Tipo + Fator de Moldagem
dano = 780 × 0,20 × 1,60 + LV_CC² × 2,5 × 1,0
dano = 249,6 + LV_CC² × 2,5
```

O coeficiente de entrega 0,20 corresponde à categoria de ponto concentrado ou contato único, a mesma base da Seção 5.3 que rege o Chidori: o Hōō Shō não projeta nem divide a chama, entregando tudo num único ponto de contato. O coeficiente técnico 1,0 corresponde à dependência média, com o degrau de exigência elevado de Plena para Alta pela escala mínima de moldagem que comprimir o fogo até o tamanho exato da palma, sem vazamento, exige.

---

## Tabela de Descarga

Par de referência Especial, PV 1.920, pela leitura de par por rank fechada na ficha do Endan.

| LV_CC | Fator de Moldagem | Dano | % PV do par |
|---|---|---|---|
| 4, entrada | 40 | 290 | 15,1% |
| 5 | 62 | 312 | 16,2% |
| 6 | 90 | 340 | 17,7% |
| 6 com 1 caminho | 122 | 372 | 19,4% |
| 6 com 2 caminhos | 160 | 410 | 21,4% |

O Hōō Shō se aproxima do piso do tier Forte sem alcançá-lo, mesmo no teto de maestria. O coeficiente de entrega de contato único é o mais alto entre as formas de entrega desta leva, e a proximidade do piso Forte reflete essa eficiência de conversão, mesmo com o coeficiente técnico de dependência média mantendo a técnica abaixo do que uma entrada de moldagem central alcançaria na mesma faixa de RC.

---

## Interação com Defesas

Nenhuma perfuração declarada além do padrão. A entrega por contato não concede ignora-esquiva: o alvo que perceber a aproximação da palma mantém o direito de esquivar ou de bloquear pelas regras padrão do Núcleo de Combate.

---

## Rider de Queimadura

O rider natural do Katon aplica pelo Sistema Elemental, sem substituição.

| Campo | Valor |
|---|---|
| Grau mínimo garantido | Moderado |
| Grau máximo possível | Crítico |
| Atributos testados | RES + FOR |
| Alvo do teste | (RES + FOR) × (1 − dano ÷ PV máximo da vítima) |

O grau máximo possível alcança Crítico porque a entrega por contato direto concentra o calor sem a dispersão em trânsito que reduz a severidade das entradas projetadas desta leva.

---

## Progressão por Maestria

| Nível | Capacidade ou mudança |
|---|---|
| Katon LV5, Moldagem Alta, Caminho Emissão | acesso à técnica pela camada Livre |
| Controle de Chakra LV6 | Fator de Moldagem 90, e 122 ou 160 com caminhos adicionais |
| Caminho Emissão, efeito Ponto de Emissão LV5 | pontos múltiplos simultâneos de origem, incluindo a superfície inteira do corpo, ampliando onde o Hōō Shō pode nascer no momento do toque |
| Caminho Emissão, efeito Vazão Ampliada | eleva o Limite de Saída próprio, ampliando o número de execuções sustentáveis por combate |

---

## Sinergias

- **Caminho Emissão, efeito Ponto de Emissão:** requisito da técnica, e a versão LV5 dele expande a origem da chama a qualquer ponto do corpo em contato, não apenas a palma
- **Taijutsu de curta distância:** o Hōō Shō converte qualquer golpe de contato bem-sucedido em portador do dano elemental completo, sem exigir ação separada de disparo
- **Genin ou combatente que perde a distância:** a técnica é a resposta declarada da doutrina de controle a distância para o momento em que essa doutrina falha

---

## Notas para o Mestre

- **É a exceção da doutrina, não a regra.** O restante do arsenal desta leva controla a distância. O Hōō Shō existe para o momento em que essa distância já foi perdida, e narrar essa inversão reforça a identidade do conjunto inteiro
- **O portão duplo é real.** Um praticante que satisfaça o Katon LV5 sem o caminho Emissão não executa a técnica, e vice-versa. Cobre os dois requisitos separadamente antes de liberar o acesso
- **NPCs.** Um Uchiha pego em distância curta por um oponente veloz recorre ao Hōō Shō como resposta imediata, sem precisar recuar para reabrir espaço primeiro
