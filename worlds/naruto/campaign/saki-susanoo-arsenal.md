---
id: naruto.campaign.saki-susanoo-arsenal
title: "Contexto — Arsenal do Susanoo da Saki"
version: 1
layer: scenario
scenario: naruto
type: campaign
status: final
source-file: Contexto_Arsenal_Susanoo_Saki.md
---

# Contexto — Arsenal do Susanoo da Saki
Orientação para desenvolvimento do armamento do Susanoo da Saki Uchiha em novo chat

Este documento estabelece as decisões já tomadas sobre o armamento do Susanoo da Saki e a direção de design a seguir. Ele orienta o desenvolvimento do arsenal como um conjunto de armas que evolui por estágio, não como uma arma única. O trabalho de modelagem numérica e escrita ainda não foi iniciado; este documento fixa apenas o conceito aprovado e a estrutura pretendida.

---

## Princípio Canônico que Rege o Armamento

O cânone estabelece que a arma do Susanoo deriva das habilidades do portador, não do contrato de invocação nem da personalidade. O contrato de invocação e o armamento do Susanoo são sistemas separados. O Sasuke tem o contrato com os falcões e, à parte disso, o Susanoo dele manifesta armas ligadas ao que ele domina mecanicamente, principalmente a lâmina que canaliza o Raiton e o Chidori.

O cânone também estabelece que o armamento do Susanoo evolui por estágio. O Susanoo do Sasuke, na forma incompleta e humanoide, empunhava um arco na mão esquerda, que funcionava como instrumento de disparo à distância e como escudo, e disparava o Yasaka Magatama. Somente nas formas mais completas, a armadura e o corpo completo, a lâmina de Raiton surgiu com destaque como arma de combate próximo. Há portanto uma progressão de arsenal: o arco vem antes, como ferramenta de projeção e defesa, e a lâmina vem depois, como arma de corpo a corpo.

A Saki segue exatamente esse padrão. O armamento do Susanoo dela deriva das habilidades dela, e evolui por estágio, com uma arma de projeção nos estágios iniciais e uma lâmina nos estágios avançados.

---

## A Assinatura da Saki que o Armamento Canaliza

A habilidade central que define a Saki ofensivamente é o Hinokagutsuchi, o fogo negro herdado da linhagem de Indra, ancorado ao ponto focal da visão e inextinguível. Esse fogo é para a Saki o que o Raiton e o Chidori são para o Sasuke: a assinatura que corre pelas armas do Susanoo dela. Assim como a lâmina do Susanoo do Sasuke canaliza o Chidori, as armas do Susanoo da Saki canalizam o Hinokagutsuchi.

O Susanoo da Saki se ergue em violeta, o matiz de chakra fixo da linhagem de Indra da qual ela é a reencarnação. O armamento é uma manifestação desse Susanoo violeta conduzindo o fogo negro.

---

## A Âncora Mitológica da Lâmina

A lâmina do Susanoo da Saki ancora na Kusanagi no Tsurugi, a espada que Susanoo-no-Mikoto extraiu da cauda da serpente Yamata no Orochi, uma das três Relíquias Sagradas Imperiais e a mais canonicamente ligada ao Susanoo de toda a mitologia xintoísta. Esta é a âncora mítica escolhida para a arma de corpo a corpo, seguindo a metodologia do projeto de derivar o poder da mitologia primeiro e da mecânica depois.

A lâmina é a Kusanagi da linhagem de Indra como forma e âncora mítica, e o Hinokagutsuchi como o que ela conduz. A espada transfere a propriedade das chamas negras inextinguíveis ancoradas ao ponto de contato para tudo que corta.

---

## Estrutura Pretendida do Arsenal por Estágio

O documento a ser produzido deve descrever o arsenal do Susanoo da Saki como uma progressão por estágio, espelhando o cânone do Sasuke. A estrutura pretendida é a seguinte, sujeita a refinamento na modelagem.

No estágio humanoide, quando o Susanoo ganha braços e o Yasaka Magatama fica disponível, a Saki manifesta um arco, o instrumento de projeção do fogo negro à distância. O arco é a arma dos estágios iniciais, servindo tanto para disparo quanto para defesa, no mesmo papel que o arco cumpria para o Sasuke incompleto. A relação entre o arco e o fogo negro precisa ser decidida na modelagem, conforme a questão em aberto abaixo.

Nos estágios armadura e completo, a Saki manifesta a lâmina, a Kusanagi da linhagem de Indra, que conduz o fogo negro em combate próximo. A lâmina é a arma dos estágios avançados, transferindo as chamas inextinguíveis para tudo que corta.

Essa estrutura dá à Saki um arsenal que cresce com o poder dela, amarra as armas à mesma assinatura do Hinokagutsuchi de formas mecanicamente distintas, o disparo ancorado à distância e o corte ancorado no contato, e mantém fidelidade ao cânone do armamento evolutivo do Susanoo.

---

## Questão em Aberto que Precisa de Decisão

Uma decisão de design ficou pendente e precisa ser resolvida no início do trabalho. O arco dos estágios iniciais dispara projéteis do próprio Hinokagutsuchi como munição, ancorando as chamas negras ao ponto onde a flecha atinge, o que combina com a mecânica do olho direito da Saki de ancorar o fogo ao ponto focal da visão. A alternativa é o arco disparar o Yasaka Magatama padrão, comum a todos os portadores de Susanoo, e reservar o fogo negro exclusivamente à lâmina.

A primeira opção torna o arco uma extensão da assinatura da Saki desde o início e é mais coerente com o kit ocular dela. A segunda mantém o arco como ferramenta genérica e concentra a identidade no armamento de corpo a corpo. Esta decisão deve ser tomada antes da modelagem numérica das armas.

---

## Dependências e Referências

O armamento do Susanoo da Saki depende do documento do Susanoo, já finalizado, que estabelece o motor da técnica, a progressão por estágio, a curva de PV e a regra de que as armas específicas de portador são extensões que se acoplam à plataforma sem alterar o motor. As armas se manifestam a partir do estágio adequado conforme definido lá.

O documento também depende do kit de Mangekyō da Saki, em especial do Hinokagutsuchi, o olho direito, cuja mecânica de fogo negro inextinguível ancorado ao ponto focal da visão é a base do que as armas canalizam. O documento do Mangekyō da Saki é a referência para a mecânica das chamas.

O Yasaka Magatama, projétil genérico compartilhado por todos os portadores de Susanoo, ainda não tem documento próprio e está listado como tarefa pendente. Se a decisão da questão em aberto for pelo arco disparar o Yasaka Magatama, o documento desse projétil torna-se pré-requisito.

---

## Metodologia e Padrões

O trabalho segue a metodologia do projeto. Auditoria canônica das armas do Susanoo e da mitologia da Kusanagi e do arco, modelagem numérica das armas com validação contra o sistema e aprovação antes da prosa, e escrita final no padrão enciclopédico do projeto. Os números vêm antes da prosa. As armas devem plugar na plataforma do Susanoo sem exigir alteração do motor. A prosa final é enciclopédica, em português fluido, com uso correto de artigos, sem travessões, sem prosa roxa, sem construções de contraste, e apresenta apenas as decisões finais sem menção ao processo.
