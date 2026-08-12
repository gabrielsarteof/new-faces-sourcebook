---
id: naruto.system.technique-requirements
title: "Manual de Requisitos de Técnica"
version: 2.1
layer: scenario
scenario: naruto
type: system
status: final
source-file: Manual_de_Requisitos_de_Tecnica_v2.md
---

Manual de Requisitos de Técnica · v2.1

Governa os portões de acesso a técnicas do RPG Canônico 1:1 de Naruto. Define o que um shinobi precisa ter na ficha para executar uma técnica, e nada além disso.

Este documento não trata de dano, custo de chakra, canalização ou efeito, que pertencem ao Manual de Criação de Jutsus. Não trata de camada de acesso, autoria ou etiquetagem editorial, que pertencem à Norma de Produção de Compêndios.

Esta versão substitui o portão de Base da v1 pela Régua de Exigência de Moldagem, publicada em Controle de Chakra v2. O portão anterior pedia de 80 a 112 pontos de Base isolada no rank A, valores inalcançáveis no Núcleo de Perícias v2, onde a Base de Nível tem teto de 50 e cada caminho adicional soma de quatro a cinco. Nenhum praticante do sistema podia cumpri-lo.

1. Os dois eixos

Uma técnica cobra duas coisas diferentes, e o sistema precisa de uma porta para cada.

Profundidade. Até onde o shinobi levou aquela linha de estudo. É medida pelo nível de perícia e governada pelo portão de rank.

Domínio. Quanta maestria acumulada o refinamento daquela técnica exige. É medida pela soma da Base Total com o atributo regente do Controle de Chakra e governada pela Régua de Exigência de Moldagem.

Rank mede volume, custo e alcance do efeito. Nenhuma dessas três coisas diz quanto refinamento a técnica cobra, e é por isso que o portão de rank sozinho trata como iguais duas técnicas de mesmo rank com exigências de controle opostas.

2. Portão de rank

O nível da perícia relevante define o rank máximo acessível.

Nível	Rank destravado
LV1	E
LV2	D
LV3	C
LV4	B
LV5	A
LV6	S

Regra universal, sem exceção por domínio. Vale para as sete naturezas, para o Ninjutsu Médico e para todo domínio que venha a existir.

O portão de rank de cada domínio é publicado pela perícia daquele domínio, que soma a Base Total ao próprio atributo regente. No Raiton, o LV5 resolve em 71, com Base 45 e INT 26.

3. Portão de moldagem
3.1 O driver

A exigência de domínio deriva do coeficiente técnico da técnica, que já é declarado por toda técnica do sistema e mede quanto ela aproveita o refinamento de moldagem.

Dependência de moldagem	coef_técnica	Exemplo
A técnica existe pela moldagem	3,0	Rasengan
Alta, a moldagem é o mecanismo central	2,0	Chidori, Raikiri
Média, a moldagem intensifica o efeito	1,0	Katon genérico, Chidori Nagashi
Baixa, a moldagem é auxiliar	0,5	Taijutsu infundido simples
Nenhuma, força bruta	0,0	Projétil sem forma

O coeficiente é contínuo. A tabela acima serve como âncora de referência e não como lista fechada. Uma técnica pode declarar 1,4 ou 2,6, e a granularidade é o que produz exigência distinta entre técnicas do mesmo rank.

3.2 A régua

A moeda é a Base Total somada a SAB, sem camadas condicionais, porque capacidade destravada é permanente. A régua é publicada em Controle de Chakra v2 e reproduzida aqui como referência de leitura.

Degrau	Exigência	Par de referência
Trivial	livre	qualquer praticante
Básica	30	LV2 com SAB 6
Plena	44	LV3 com SAB 12
Alta	58	LV4 com SAB 18
Refinada	71	LV5 com SAB 26
Absoluta	84	LV6 com SAB 34

O degrau sai do coeficiente técnico. O valor 0,5 pede Básica, 1,0 pede Plena, 2,0 pede Refinada e 3,0 pede Absoluta. Coeficientes intermediários sobem para o degrau imediatamente acima do valor de referência mais próximo por baixo.

3.3 Por que a régua não lê o teste

O portão lê a Base Total somada ao atributo, e não o teste final. O teste varia com o tipo de situação, com a inclinação empregada, com a especialização do caminho e com modificadores de clã e de vantagem, o que o tornaria inconferível e diferente a cada rolagem. A Base Total é um número único por perícia na ficha, e o atributo é um número único na ficha do personagem.

O portão de rank e o portão de moldagem correm em paralelo e não se encadeiam. O primeiro lê a perícia do domínio com o atributo dela, o segundo lê o Controle de Chakra com SAB. Uma técnica cobra os dois, e o praticante compra os dois na ordem que quiser.

4. Elevação de degrau

Fora do motor de dano, o degrau sobe uma casa por propriedade presente na técnica, entre as quatro abaixo.

Proporção interna fina. Sustentação prolongada. Escala mínima de moldagem. Tolerância zero a excesso de volume.

A última resolve o Bunshin no Jutsu executado por praticante de reserva colossal, que é técnica de rank E exigindo precisão acima do que o rank sugere.

A elevação é categórica e nunca fracionada. A entrada declara qual propriedade a produziu, e o degrau resultante aparece escrito no bloco de requisitos.

5. Requisito de caminho

Técnica executada por verbo de especialização exige o caminho declarado na ficha, além do portão numérico. O caminho é exigência mais estreita que o degrau, e a entrada que declara caminho específico publica o degrau apenas quando ele exceder aquele que o caminho já pressupõe.

O Chidori exige o caminho Ponta da inclinação Relâmpago, e a perfuração de Absorção que a técnica exibe é lida do efeito Fio Concentrado daquele caminho, e não declarada pela técnica.

6. Requisitos que já existiam

Este documento reúne, sem alterar, os portões que o sistema já operava.

Natureza. Técnica de natureza exige a perícia daquela natureza. Sem ela, a técnica é inexecutável, e não apenas mais cara. Naturezas do eixo do Onmyōton seguem a mesma regra das elementais.

Posição na escada. Praticante que executa em natureza aprendida multiplica por 1,3 a RC nominal e o custo mínimo da técnica, com a penalidade de teste da Escada de Afinidade em vigor conforme o Sistema Elemental v7, que fixa mais quinze na Afinidade, mais oito na Compatibilidade e menos quinze na natureza aprendida. Isso encarece a execução e não bloqueia o acesso.

Controle de Chakra. Toda técnica lê a Régua de Exigência de Moldagem, e o degrau ocupa o lugar do nível mínimo que a versão anterior declarava.

Requisitos não mecânicos. Contrato de invocação, condição de campo, fisiologia específica e demais exigências declaradas pela entrada.

7. Declaração na entrada

Toda técnica declara seus requisitos em bloco próprio, na ordem:

Rank: A
coef_técnica: 2,0
Requisitos: Raiton LV5 · Moldagem Refinada · Caminho Ponta

Quando houver elevação de degrau, ela aparece com a propriedade que a produziu:

Requisitos: Katon LV6 · Moldagem Absoluta (elevada por sustentação prolongada de três
focos simultâneos) · Caminho declarado pela entrada

8. Fronteira com a camada de acesso

O portão de rank e o portão de moldagem são objetivos e verificáveis na ficha, o que os situa integralmente dentro da camada Requisito Mecânico da Norma de Produção de Compêndios.

Eles convivem com qualquer camada de acesso e não a substituem. Uma técnica de Patrimônio de Vila continua exigindo justificativa na ficção, e uma técnica de Autoria Aberta continua indisponível na criação, independentemente de quanto o personagem possua nos dois portões.

9. Pendências

[pendente] A escala de dificuldade não existe em documento algum. O Núcleo declara limiar igual ao teste dividido pela dificuldade fixada e multiplicado por cinquenta, e nenhuma tabela de dificuldade foi publicada. Os portões deste manual não dependem dela, porque comparam valores diretos, mas toda técnica que resolve por teste depende.

Resolvidas nesta versão: a ambiguidade do termo bônus_CC, substituído pelo Fator de Moldagem na seção 5.3 do Manual de Criação de Jutsus, que lê nível de perícia e não Base; e o recálculo das âncoras canônicas de validação, que passaram a ser publicadas por nível de Controle de Chakra.

10. Documentos relacionados

Manual de Criação de Jutsus, para rank, custo, canalização, coeficientes e dano. Controle de Chakra v2, para a Régua de Exigência de Moldagem, o Índice de Desperdício e a Interface de Selos. Núcleo de Perícias v2, para a composição da Base. Núcleo do Sistema, para a resolução de testes. MANUAL_ECONOMIA_XP, para custos. Sistema Elemental, para a Escada de Afinidade e o multiplicador de dispersão. Norma de Produção de Compêndios, para camadas de acesso e formato de entrada.
