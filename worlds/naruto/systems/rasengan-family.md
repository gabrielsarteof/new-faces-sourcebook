---
id: naruto.system.rasengan-family
title: "Linhagem do Rasengan"
version: 1.6
layer: scenario
scenario: naruto
type: system
status: final
source-file: Linhagem_do_Rasengan_v1.md
---

# Linhagem do Rasengan

Documento dono do motor compartilhado pelas fichas da família Rasengan. Ele publica o eixo que cada variação move, a regra de assistência de moldagem, a cadeia de derivação e o estado de autoria da linhagem inteira. As fichas individuais consomem este documento e não reescrevem nada dele.

**O que mudou na v1.6.** A Seção 2 troca o termo somado pelo `w`. O coeficiente técnico de 3,0 resolve o `w` em 1,5, o maior do corpus, e a tese da família passa a ler o `P` da perícia governante no lugar do nível de Controle de Chakra. A mesma seção declara que a perícia governante das quatro fichas de moldagem pura é o Controle de Chakra, no lugar em que a linhagem já declarava o portão de rank delas. A Seção 3 inteira permanece intacta, com todas as RC nominais, coeficientes de entrega, vetores, `mult_Tipo` e proporções da escada, junto da Assistência de Moldagem, da cadeia de derivação, da Recomposição, do estado de autoria e de todos os preços.

**O que mudou na v1.5.** A coluna `mult_Tipo` da Seção 3 é sincronizada com os vetores que o repasse do Bloco 8 classificou, e a tabela ganha coluna de vetor para que os dois valores fiquem lado a lado. Três linhas carregavam transcrição anterior à partição do termo de tipo em Constante de Moldagem e Assinatura: o Rasengan Evanescente publicava 1,75, que é o produto do Raiton entregue como Energia, e as duas fichas de Fūton publicavam 1,30, valor de multiplicador por elemento que nenhuma régua vigente produz. As três resolvem em 1,40, porque entregam por vetor físico e a Assinatura de Impacto, Corte e Penetração vale 1,00. As quatro fichas sem transformação de natureza permanecem em 1,00, e nenhuma RC nominal, coeficiente de entrega, proporção da escada ou preço mudou.

**O que mudou na v1.3.** O Manual de Requisitos de Técnica v2.2 revogou o degrau nomeado de moldagem, e a Exigência deixou de ser herdada como valor único da linhagem (antes, Absoluta/84 para as sete fichas): cada ficha passa a declarar o próprio número, publicado no Compêndio de Ninjutsu de Forma e no de Raiton. A Assistência de Moldagem, seção 4, ganhou o efeito numérico que faltava — reduz a Exigência efetiva em 20 por moldagem assistente, regra nova aprovada que a Reforma da Exigência de Moldagem publica.

---

## 1. Natureza do documento

O Rasengan não é uma técnica com variações decorativas. Ele é a técnica de transformação de forma pura do sistema, e cada variação registrada abaixo dele existe porque move exatamente um eixo mecânico a partir da mesma base. Sem um dono declarado para esse motor, sete fichas repetiriam a mesma fórmula e divergiriam na primeira revisão.

O documento pertence à camada de cenário. Ele consome o Manual de Criação de Jutsus como manual tradutor, a Perícia de Controle de Chakra como dona da moldagem, e a Norma de Produção de Compêndios como dona da camada de acesso e do estado de autoria.

---

## 2. A base compartilhada

Toda ficha da linhagem herda os três valores abaixo e declara apenas o que diverge deles.

| Campo herdado | Valor | Origem |
|---|---|---|
| coef_técnica | 3,0 | Manual de Criação de Jutsus, Seção 5.3 |
| Caminho exigido | Composição, inclinação Moldagem | Perícia de Controle de Chakra, LV4 |
| Selos de referência | 0 | Perícia de Controle de Chakra, Régua de Interface |

O coeficiente técnico 3,0 é o valor mais alto da tabela e corresponde à técnica que existe pela moldagem. Ele alimenta o `w` da Seção 5.3 do Manual de Criação de Jutsus, que é o termo por onde a maestria domina o dano de toda a família, e não deriva mais a Exigência de Moldagem: pelo Manual de Requisitos de Técnica v2.2, a Exigência é declarada por entrada e não herdada da linhagem, porque volume e escopo mudam o controle que cada variação cobra. As sete fichas publicam valores próprios, ancorados contra o Compêndio de Ninjutsu de Forma e o de Raiton: Rasengan 62, Ōdama Rasengan 66, Rasenrengan 62 por esfera, Chō Ōdama Rasengan 74, Rasengan Evanescente 70 por exceção de piso aprovada.

**O portão de rank da linha sem natureza.** O Manual de Requisitos de Técnica ancora o portão de rank na perícia do domínio da técnica, e as fichas de moldagem pura desta linhagem não possuem domínio elemental que o carregue. O portão delas corre pela Perícia de Controle de Chakra, que é a perícia do único componente que essas fichas empregam, lida contra a mesma tabela universal.

| Ficha sem natureza | Rank | Nível exigido em Controle de Chakra |
|---|---|---|
| Rasengan | B | LV4 |
| Ōdama Rasengan | A | LV5 |
| Rasenrengan | A | LV5 |
| Chō Ōdama Rasengan | S | LV6 |

As fichas de natureza declarada leem o portão de rank na perícia elemental correspondente, pela regra geral, e o Controle de Chakra permanece nelas apenas como dono do degrau de moldagem. Os dois portões correm em paralelo e não se encadeiam.

**A perícia governante da linha sem natureza.** A mesma leitura que fixa o portão de rank fixa a perícia governante dessas quatro fichas. O Controle de Chakra é a perícia do único componente que elas empregam, e é o `P` dele que o `M` lê nelas, pela Seção 5.2 do Manual de Criação de Jutsus. Portão universal e perícia governante são papéis distintos: o Controle de Chakra é portão em toda técnica do sistema, porque nenhuma escapa da Régua de Exigência nem do Índice de Desperdício, e nesse papel não entra no motor. Nas quatro fichas de moldagem pura ele acumula o segundo papel e entra pelo `M` como qualquer perícia governante, sem termo somado e sem privilégio. As fichas de natureza declarada leem o `M` na perícia elemental correspondente, e nelas o Controle de Chakra permanece apenas portão.

O termo por onde a maestria entra vale para todas as fichas da linhagem e é publicado uma única vez aqui.

```
w = coef_técnica ÷ 2 = 3,0 ÷ 2 = 1,5
M = 1 + 1,5 × (P − P_ref) ÷ P_ref          piso de M: 0,5
```

O coeficiente técnico de 3,0 é o mais alto da tabela do manual, e o `w` de 1,5 que ele produz é o maior do corpus. Nenhuma família escala tão forte com a maestria e nenhuma escala tão fraco com o volume.

A consequência de mesa está declarada: dois executores da mesma ficha com o mesmo `P` na perícia governante entregam o mesmo dano, e a reserva maior compra escopo, repetição e acesso às variações de rank alto, jamais potência por unidade de chakra.

---

## 3. O eixo de cada variação

Cada entrada da linhagem move um eixo e apenas um. A tabela é o contrato da família, e ficha nova que não consiga nomear um eixo livre não entra.

| Ficha | Eixo movido | Rank | RC nominal | coef_entrega | Vetor | mult_Tipo |
|---|---|---|---|---|---|---|
| Rasengan | base, alvo único em contato | B | 600 | 0,20 | Impacto | 1,00 |
| Rasengan Evanescente | evitabilidade, a leitura que o alvo perde | A | 1.050 | 0,16 | Impacto | 1,40 |
| Ōdama Rasengan | escopo, de alvo para área | A | 1.200 | 0,12 | Impacto | 1,00 |
| Rasenrengan | multiplicidade, de uma obra para duas | A | 1.200 | 0,20 | Impacto | 1,00 |
| Fūton: Rasengan | natureza e alcance, de contato para projétil | A | 1.500 | 0,16 | Corte, Grau II do Fio | 1,40 |
| Fūton: Rasenshuriken | letalidade estrutural, de dano em PV para dano no circuito | S | 2.100 | 0,16 | Corte, Grau IV do Fio | 1,40 |
| Chō Ōdama Rasengan | teto de recurso, da reserva própria para pool externo | S | 2.100 a 3.600 | 0,12 | Impacto | 1,00 |

O `mult_Tipo` de cada linha é a Constante de Moldagem multiplicada pela Assinatura do vetor declarado, e a Assinatura vale 1,00 nos três vetores físicos. As quatro fichas sem transformação de natureza resolvem em 1,00 porque a Constante alcança apenas o que a moldagem de natureza produz, e as três que declaram natureza resolvem em 1,40 porque entregam por vetor físico e não por Energia.

O custo mínimo de cada ficha é a terça parte da RC nominal, resolvendo 200 na base, 350 no Rasengan Evanescente, 400 no Ōdama Rasengan e no Rasenrengan, 500 no Fūton: Rasengan e 700 nas duas entradas de rank S.

A escada guarda proporção declarada contra a base, e é ela que governa qualquer recalibragem futura. Cada ficha vale 1,75, 2,00, 2,00, 2,50, 3,50 e 3,50 vezes a RC nominal do Rasengan, na ordem da tabela. Alterar a base obriga a percorrer a coluna inteira, porque a proporção é o que mantém a distância entre os degraus da linhagem.

O Ōdama Rasengan e o Rasenrengan ocupam a mesma RC nominal e o mesmo preço, e a coincidência é estrutural. Dobrar o volume dentro de uma esfera e repartir o mesmo volume em duas esferas custam igual, e a escolha entre os dois é de eixo e não de orçamento.

A elevação de escopo do Ōdama Rasengan é categórica e não percentual, conforme a doutrina do Manual de Criação de Poderes. A elevação de recurso do Chō Ōdama Rasengan consome a regra de pools externos da Reserva de Chakra, na mesma via que o Kirin já usa.

---

## 4. Assistência de Moldagem

Regra própria desta linhagem, criada porque o cânone declara com todas as letras que a execução de forma e natureza no mesmo instante excede um único praticante, e que o problema se resolve por paralelização e não por talento.

**Efeito sobre a Exigência de Moldagem.** Cada moldagem assistente reduz a Exigência declarada da ficha:

```
Exigência efetiva = Exigência declarada − (20 × número de moldagens assistentes)
```

Validação canônica: o Rasengan declara 62 e cai para 42 com uma assistência. Naruto aos treze, com Controle de Chakra LV3, Base 32 e SAB 10, resolve 42 exato — ele executa a técnica sem nunca ter possuído o controle que ela cobra sozinha.

**Definição.** Uma ficha da linhagem declara o número de moldagens simultâneas que a execução exige, entre uma e três. A primeira é sempre a do executante. Cada moldagem além da primeira precisa de um assistente, e o assistente é uma das três fontes abaixo.

| Fonte de assistência | O que ela é | Onde vive |
|---|---|---|
| Kage Bunshin | clone que molda por conta própria com a RC que carrega | Manual de Criação de Jutsus, Seção 7.1 |
| Caminho Simultaneidade | o efeito Janela Dupla, que abre segunda janela de canalização por mão | Controle de Chakra, inclinação Execução |
| Caminho Colaboração | o efeito Aporte Assimétrico, com aliado entregando chakra já moldado | Controle de Chakra, inclinação Condução |

**Custo.** A assistência não cria chakra. O clone paga com a reserva que carrega, a Janela Dupla soma os custos contra o mesmo Limite de Saída do turno, e o aporte do aliado sai da reserva dele. A RC nominal publicada na ficha é a soma de todas as moldagens, e o custo mínimo é a terça parte dela conforme a regra geral.

**Dispensa por maestria.** A exigência cai com o refinamento, reproduzindo a progressão canônica do praticante que aprende a executar sozinho o que começou exigindo dois clones.

| Condição do executante | Assistências exigidas |
|---|---|
| entrada na ficha | o que a ficha declara |
| Caminho Composição aprofundado, LV5 | uma a menos, com piso em zero |
| Caminho Composição transcendido, LV6 | nenhuma, em qualquer ficha da linhagem |

**Interrupção.** A perda de um assistente durante a janela de canalização derruba a execução inteira, e a RC investida se perde pela regra geral de interrupção. O caminho Refino devolve a RC pela Moldagem sem Perda.

---

## 5. Cadeia de derivação

A cadeia é dura. Nenhuma ficha da linhagem é adquirível sem a ficha imediatamente acima dela já paga.

```
Rasengan
├── Ōdama Rasengan
│   └── Chō Ōdama Rasengan
├── Rasenrengan
├── Fūton: Rasengan
│   └── Fūton: Rasenshuriken
└── Rasengan Evanescente
```

O Chō Ōdama Rasengan exige o Ōdama Rasengan porque a esfera colossal é a mesma geometria de área alimentada por fonte maior. O Fūton: Rasenshuriken exige o Fūton: Rasengan porque as quatro pontas se formam sobre a esfera já convertida em vento. As demais derivam da base diretamente.

---

## 6. Recomposição dentro da linhagem

O efeito Recomposição, do caminho Composição, remodela uma sustentação própria em outra geometria declarada na ficha da técnica, sem nova execução e sem novo custo. A linhagem declara aqui quais geometrias são alcançáveis por esse efeito.

| Geometria de origem | Geometria de destino | Condição |
|---|---|---|
| Rasengan | Ōdama Rasengan | ambas as fichas pagas, e a diferença de custo mínimo aportada no ato |
| Rasengan | Rasengan Evanescente | ambas as fichas pagas |
| Fūton: Rasengan | Fūton: Rasenshuriken | ambas as fichas pagas, e a diferença de custo mínimo aportada no ato |

A remodelagem entre naturezas distintas fica fora do efeito, porque a conversão de natureza acontece na formação e não admite troca sobre obra pronta.

---

## 7. Estado de autoria da linhagem

O criador canônico do Rasengan não existe nesta linha do tempo. A entrada nasce em **Assinatura Pessoal · Autoria Aberta**, e a linhagem inteira permanece inacessível enquanto o Rasengan não tiver autor, na mesma arquitetura que a linhagem do Chidori já usa.

O primeiro personagem que cumprir os requisitos e concluir o processo de criação de técnica torna-se o criador. A entrada passa a Registrada, e as seis variações registradas acima dela passam a existir a partir daquele momento, cada uma ainda sujeita ao próprio requisito.

Nenhum personagem inicial adquire qualquer ficha desta linhagem na criação.

---

## 8. Fronteira com outros documentos

O dano, o rank, o custo de XP e a Janela de Canalização pertencem ao Manual de Criação de Jutsus. O degrau de moldagem e o requisito de caminho pertencem ao Manual de Requisitos de Técnica. As réguas de desperdício, interface, modulação e permanência pertencem à Perícia de Controle de Chakra. A Constante de Moldagem, a Assinatura e o rider elemental pertencem ao Sistema Elemental. Os graus e as durações de status pertencem ao Sistema de Efeitos de Status. O pool externo pertence à Reserva de Chakra, com a taxa de saque do selo pertencendo à Perícia de Fūinjutsu.

A camada de acesso e o estado de autoria pertencem à Norma de Produção de Compêndios, e este documento apenas declara qual instância a linhagem ocupa.

---

## 9. Registro de conformidade e fila de errata

**Conformidade.** Os quatro valores herdados da Seção 2 conferem contra a tabela de coeficientes da Seção 5.3 do Manual de Criação de Jutsus, contra a Régua de Exigência de Moldagem e contra a Régua de Interface. As sete fichas fecham o contrato de efeito de oito campos do Manual de Criação de Poderes.

**Decisões fechadas por Gabriel.**

O Rasengan permanece em rank B, com RC nominal elevada de 450 para 600 e custo mínimo elevado de 150 para 200, por decisão de calibragem de Gabriel. A leitura de RC nominal governa o rank neste sistema, e 600 mantém a técnica no alto da faixa B sem atravessar o piso da faixa A. A divergência com o rank A do 2º databook fica registrada na ficha da técnica como nota de cânone e não como pendência.

A elevação da base reajustou a escada inteira da linhagem, conforme a tabela da Seção 3, e as sete fichas foram percorridas para preservar a proporção que cada uma guardava contra o Rasengan. O Rasenrengan acompanhou por construção, porque cada esfera dele é a base sem alteração. O Rasengan Evanescente e o Ōdama Rasengan subiram para manter a distância que tinham. O Fūton: Rasengan passou a ocupar o teto exato da faixa A, e o Fūton: Rasenshuriken e o piso do Chō Ōdama Rasengan subiram na mesma razão dentro da faixa S.

O Fūton: Rasenshuriken custa 27.200 de XP, pela interpolação da Seção 4.1.1 sobre a RC nominal de 2.100. O valor de 38.000 publicado no Compêndio de Fūton veio da matriz de estimativa, que a própria Seção 4.1.3 declara provisória até a ficha existir. A correção vale dali em diante e não retroage sobre quem já pagou.

**Erratas aplicadas.** As seis abertas por esta linhagem foram fechadas na publicação dela.

O Manual de Criação de Jutsus subiu a v2.6. A âncora da Seção 3.2 passou a RC nominal 600, custo mínimo 200 e custo pago 200, mantendo a janela em zero turno. A âncora da Seção 4.1.1 passou a 600, posição 71,4% e XP_base 6.714. A linha de validação da Seção 5.3 passou a 600 e dano 390, que é 27% do par Elite e segue no tier Forte. A linha do Rasenshuriken na Seção 3.2 passou a 2.100 e 700, com o executor de referência recalculado sobre o piso do degrau Absoluto em teste 84, custo pago 1.619 e a mesma janela de dois turnos. O Rasengan saiu da tabela de calibração da Seção 4.1.3, e a calibração segue sustentada pelo Goukakyuu no degrau 2 e pelo Chidori e pelo Kirin no degrau 1.

O Compêndio de Fūton subiu a v4, com o Rasenshuriken de Vento em 27.200 de XP e a entrada do Rasengan de Vento acrescentada. O Compêndio de Raiton subiu a v3.3, com o Rasengan Evanescente em etiqueta ATRIBUÍDO, degrau Moldagem Absoluta e 13.250 de XP.

O Corte de Chakra deixou de viver apenas na ficha do Fūton: Rasenshuriken e passou a entrada nomeada da Família VI do Sistema de Efeitos de Status, que subiu a v2.2. O núcleo é dono da escada de quatro graus, da penalidade de cada um, da permanência e da recusa de cura por ninjutsu médico, e a ficha declara apenas o grau mínimo garantido, o grau máximo possível, os atributos testados, o alvo do teste e a região afetada.

As quatro fichas sem natureza ganharam catálogo no Compêndio de Ninjutsu de Forma. Na publicação original do compêndio, a auditoria de tamanho da ferramenta de frontmatter apontava as quatro entradas contra a mediana de trinta e quatro a cinquenta e quatro dos domínios elementais, e o desvio era lido como fato do domínio: exatamente quatro entradas canônicas sem natureza, sem piso de contagem pela Seção 12 da Norma de Produção de Compêndios. **Nota superada.** A leva de Técnicas Base Universais acrescentou quinze entradas ao mesmo domínio sem natureza — Kawarimi, Bunshin, Henge, Nawanuke, Kai, Oiroke, Kakuremino, Shunshin, Tōton, Meisaigakure, Chakura no Ito, Kage Bunshin, Bunshin Daibakuha, Harem e Tajū Kage Bunshin —, e o Compêndio de Ninjutsu de Forma v2.0 publica dezenove entradas no total. O domínio sem natureza nunca teve piso baixo por natureza própria; tinha apenas um inventário de obras nomeadas menor do que o das naturezas elementais até esta leva ampliá-lo. O catálogo continua não se completando com entrada que a obra não nomeia.

**Fila de errata.**

Manual de Criação de Jutsus, Seção 1: a coluna de usos por combate da tabela de ranks declara 2 a 5 para o rank B e 1 a 3 para o rank A, e nenhuma ficha publicada do corpus honra essa faixa. O Chidori entrega 8 usos com reserva de 2.211, o Chidori Nagashi entrega 7 e o Rasengan entrega 14, todos entre duas e três vezes o teto do próprio rank. A divergência é sistêmica e anterior a esta linhagem, e o conserto pertence à coluna e não a nenhuma ficha isolada.

Perícia de Controle de Chakra: o caminho Composição permanece sem transcendência dedicada por pendência declarada. A dispensa integral de assistência da Seção 4 assume a coluna transcendida do caminho, e a pendência precisa fechar antes que a linha vire regra madura.

Manual de Economia de XP, item 2 da Seção de arredondamentos, e Manual de Criação de Jutsus, Seção 4.2: as duas declaram floor no resultado final, e as dez células de custo pago que o corpus publica não fecham com floor. A régua de desperdício sobre as âncoras da Seção 3.2 e sobre as sete Referências de Usos por Perfil produz 157, 656, 312, 463, 546, 810, 925, 1.091, 1.156 e 1.619, e desses valores o floor contradiz 312, 463, 546 e 810, enquanto o arredondamento de meio para cima contradiz 157 e 1.156. A única regra compatível com os dez é meio para baixo. O dano corre na direção oposta: as sete linhas de LV5 caem em meia unidade exata e todas as sete sobem, de 307,5 para 308 no Rasengan e de 619,5 para 620 no Chō Ōdama. As duas convenções são consistentes dentro de cada grandeza e a palavra publicada descreve apenas uma delas.

Seção 4 desta linhagem: a regra nomeia o Kage Bunshin, o caminho Simultaneidade e o caminho Colaboração como fontes de assistência, e não declara quantas moldagens cada fonte supre. Um clone que molda por conta própria não é obviamente uma assistência só. Sem essa capacidade publicada, a ficha do personagem não pode afirmar que resolve a exigência, apenas que possui as fontes.

Norma de Produção de Compêndios, Seção 6 e Seção 7: a entrada do Rasenshuriken de Vento publica acesso em Assinatura Pessoal com Autoria Aberta, e a ficha da técnica declara a camada Fechada na Criação para depois que o Rasengan tiver autor. As duas leituras valem em momentos distintos, e a composição de camada ao longo do tempo não tem regra publicada. A precedência do compêndio sobre a ficha impede que o catálogo seja ajustado por conta própria, então a regra de composição precisa nascer antes da correção.

~~Norma de Produção de Compêndios, Seção 13: a tabela de Estado de conformidade declara o Fūton e o Raiton fora de norma por não possuírem linha de XP. Os dois carregam linha de XP e a forma da Seção 10, de modo que a tabela descreve um estado anterior à reemissão deles.~~ **Aplicada na v1.1**, pela Norma v2.5. A tabela foi refeita contra os treze compêndios medidos, com versão, contagem de entradas e o estado conferido de cada um, e o Doton é o único que resta fora de norma.

Manual de Requisitos de Técnica: o documento publica as seções numeradas como texto puro, sem heading markdown algum, o que torna toda citação a ele inverificável por ferramenta. A Seção 3.2 que esta linhagem cita para o degrau de moldagem existe e confere, com Absoluta em 84 e o coeficiente 3,0 pedindo esse degrau. A dívida é de sintaxe e é a mesma que o documento do Clã Senju carrega.

---

## 10. Instruções para a IA

Leia o eixo antes do número. Ficha nova da linhagem declara qual eixo move, confere a tabela da Seção 3, e desiste se o eixo já tiver dono.

Herde os quatro valores da Seção 2 sem republicar a derivação deles. Declare apenas o que diverge.

Nunca compre potência com volume nesta família. O coeficiente de entrega baixo e o coeficiente técnico alto tornam a reserva um mau investimento por unidade de dano, e isso é a tese da linhagem e não um defeito a corrigir.

Use elevação categórica para escopo, e nunca percentual sobre o dano do alvo único.

Declare a Assistência de Moldagem em toda ficha, inclusive quando o valor for uma única moldagem, porque o campo ausente lê como omissão.

Nunca precifique a assistência em XP. Ela já é paga na compra do Kage Bunshin, do caminho Simultaneidade ou do caminho Colaboração.

Respeite a cadeia de derivação da Seção 5. Ficha que pule um degrau da cadeia quebra o portão de autoria da Seção 7.

---

*Linhagem do Rasengan v1.2. Um eixo por variação, coeficiente técnico 3,0 em toda a família, degrau Absoluto como portão único de moldagem, assistência declarada em vez de talento presumido, e a cadeia de derivação fechada sobre uma autoria que ainda não existe no mundo.*
