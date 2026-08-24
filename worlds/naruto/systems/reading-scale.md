---
id: naruto.system.reading-scale
title: "Régua de Leitura"
version: 1
layer: scenario
scenario: naruto
type: system
status: final
source-file: ficha do Kawarimi no Jutsu, mais o Consolidado do Lote de Evasão e Leitura
---

# Régua de Leitura

**Instrumento do cenário Naruto. Instância da condição de leitura publicada pela camada de Reação do Núcleo de Combate.**

## Abertura e escopo

Um combate se decide tanto pelo que os corpos fazem quanto pelo que os olhos conseguem acompanhar. Um shinobi troca de lugar com um tronco no instante em que o golpe chega, uma salva de chamas esconde aço no meio da luz, e um fio de vento corta a uma distância que ninguém mediu. Nos três casos o adversário se defende com competência plena e se defende da coisa errada, e é essa diferença que esta régua mede.

Este documento publica o teste que decide se um observador acompanha o que aconteceu, a régua de familiaridade que corrige o teste ao longo de uma cena, as duas classes de obra que o consomem, a consequência que a falha produz na rodada e o preço que uma técnica paga para declará-lo. Ele consome sem redefinir o par de atributos de percepção do Núcleo do Sistema, a economia de Reação do Núcleo de Combate, o Núcleo de Perícias que produz os testes dos dois lados, e as faixas de XP do Manual de Criação de Jutsus.

Um leitor procurando quanto uma técnica machuca, quão evitável ela é por construção ou o que uma defesa faz depois de bem-sucedida está no documento errado. O dano vive no motor do Manual de Criação de Jutsus, a evitabilidade vive na escada de Perfil de Evasão daquele manual, e o comportamento de uma defesa vive na ficha da obra que a publica.

## 1. A régua

```
percepção do observador = PRE + SAB + bônus de leitura
teste do executor       = o teste da perícia que a obra declarar
limiar do observador    = (percepção ÷ teste do executor) × 50
```

O observador rola d100 contra o próprio limiar. O resultado abaixo do limiar significa acompanhar o que aconteceu em tempo real. O resultado acima significa perder a leitura do campo até o início do próprio turno seguinte.

O teste é oposto de base cinquenta, na mesma forma com que este sistema resolve a conexão de um golpe, a furtividade de uma emboscada e a detecção de selos. O piso de 5 e o teto de 95 valem sobre o limiar, de modo que nenhum engano é impossível de acompanhar e nenhum é impossível de comprar.

O bônus de leitura se lê da perícia sensorial, do dōjutsu ou da vantagem que a ficha do observador declarar, e a régua que o produz pertence ao Núcleo de Perícias. O observador sem nada declarado lê apenas o par de atributos.

O teste do executor sai da perícia que a obra nomeia. Uma troca de posição declara o teste de Moldagem do Controle de Chakra, uma salva que esconde aço dentro da chama declara o teste da perícia elemental que a produz, e a obra publica qual dos dois na própria ficha. Nenhuma obra declara mais de um.

O teste é individual. Um grupo diante da mesma obra rola separado, e é comum que parte dele acompanhe enquanto o resto perde o rastro.

## 2. Familiaridade

Cada uso do mesmo executor que o observador já testemunhou na cena soma dez por cento cumulativo à percepção dele contra aquele executor. A soma é do observador e não do grupo, e ela se perde ao fim da cena.

A familiaridade existe porque o corpo aprende ritmo alheio olhando, e ela é a razão de o mesmo truque render menos a cada repetição contra o mesmo adversário.

## 3. As duas classes

Toda obra que declare esta régua declara junto a qual das duas classes ela pertence, e a classe decide se a familiaridade incide.

| Classe | O que a obra faz | Familiaridade |
|---|---|---|
| Engano | mostra uma ameaça e entrega outra | corrói |
| Ilegibilidade | não oferece ameaça alguma de ler | não corrói |

O Engano depende de o adversário comprar a leitura que a obra ofereceu, e um truque visto duas vezes deixa de enganar. A Ilegibilidade não oferece leitura nenhuma, e ver um fio invisível uma vez não faz o olho passar a encontrá-lo na vez seguinte.

## 4. A consequência da falha

O observador que falha perde a leitura do campo até o início do próprio turno seguinte, e o efeito se lê em dois lugares conforme quem declarou a régua.

**Contra uma obra defensiva**, o observador perde o rastro do corpo que se deslocou. A defesa já funcionou pela condição de recurso ou de janela que ela declarou, e o que a régua decide é se o adversário sabe para onde aquele corpo foi.

**Contra uma obra ofensiva**, o observador gasta a Reação da rodada contra a ameaça que ele leu, e a ameaça real alcança o corpo sem contestação, pela sequência de resolução do Núcleo de Combate. A esquiva dele permanece intacta em cada ponto que ela vale, e o que a obra comprou foi o gasto errado do recurso mais escasso da rodada. A Guarda, a Absorção e o Estado Elemental continuam respondendo por inteiro.

O primeiro golpe do executor contra um observador que perdeu a leitura resolve contra um alvo que não contesta a conexão. O observador que já havia gasto a Reação naquela rodada não perde nada além do que já tinha gasto.

## 5. O preço

A propriedade se compra na criação da técnica como Extra de comportamento, pela régua de XP do Manual de Criação de Jutsus, e ocupa o slot de Trajetória da tabela de módulos. Ela não é sobretaxa da escada de Perfil de Evasão, porque não mede evitabilidade: a obra que declara esta régua permanece na posição que a construção dela merece, e o alvo dessa obra sai da frente dela com a esquiva inteira sempre que souber do que sair.

A obra declara na ficha a classe, a perícia que produz o teste do executor e o que o adversário vê no lugar da ameaça real.

## 6. Quem consome

A condição de leitura da camada de Reação do Núcleo de Combate lê esta régua, e é por ela que toda obra defensiva de engano resolve a camada própria.

As obras ofensivas cuja propriedade é o alvo não saber do que se defender leem esta régua no lugar de instrumento local, e nenhuma delas publica régua própria.

A fonte oculta sem ficha, na régua de dano de fonte sem ficha do Núcleo de Combate, resolve por esta régua antes de resolver o alcance.

## 7. Fronteiras

O território termina onde o ofício alheio começa. A evitabilidade de uma obra por construção pertence à escada de Perfil de Evasão do Manual de Criação de Jutsus. A velocidade com que uma obra atravessa a distância pertence à cadeia de quatro fatores daquele manual. A percepção que decide se havia ataque algum a esperar pertence à Surpresa do Núcleo de Combate, que resolve antes da iniciativa e por régua própria. A previsão que melhora a esquiva de quem já está esquivando pertence ao documento do Sharingan. O bônus de leitura que o observador soma pertence ao Núcleo de Perícias. As técnicas nomeadas que declaram esta régua vivem nos compêndios e nas fichas que as publicam, sem exceção.

## 8. Registro de Alterações

**v1.** Publicação da régua como instrumento com dono. A forma, o par de percepção, a leitura do teste do executor e a régua de familiaridade de dez por cento cumulativo por uso testemunhado vêm da ficha do Kawarimi no Jutsu, que a produziu e que passa a consumi-la por referência junto com o Bunshin no Jutsu e o Shunshin no Jutsu. Entram as duas classes de Engano e Ilegibilidade, com a familiaridade incidindo apenas sobre a primeira, e a consequência publicada para obra ofensiva, que é o gasto da Reação contra a ameaça lida. O preço passa a ser Extra de comportamento no slot de Trajetória.
