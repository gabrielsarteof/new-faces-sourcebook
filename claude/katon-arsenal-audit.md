# Auditoria de processo · Fichas do Arsenal Katon

Documento de trabalho, não corpus. Registra o processo de produção das treze fichas de `worlds/naruto/techniques/`, na ordem da Seção 6 do briefing.

## Levantamento de fundação (Seção 3 e 12 do briefing)

Confirmado antes da primeira ficha:

- Submódulo `sourcebook` não estava inicializado nesta sessão; `git submodule update --init --recursive` trouxe HEAD `1940496` (detached), idêntico a `origin/main` (sem commits à frente).
- Os catorze documentos de fundação existem, com dois mapeamentos de nome: `PRINCIPIOS_DE_DESIGN.md` (citado assim em `campaign/universe.md`) é de fato `core/design-principles.md`; `ESTADO_DO_PROJETO.md` não existe como arquivo no corpus e é lido como a Seção 9 do `CLAUDE.md` da aplicação, carregado no contexto desta sessão.
- `mult_Tipo` do Katon: **×1,60** (`systems/elemental-system.md`, Tipo Fogo), rider natural Queimadura.
- Manual de Criação de Jutsus está em **v2.11**, não v2.7/v2.9 como o `CLAUDE.md` da aplicação registra. Divergência de citação, não bloqueante para esta leva; usa-se o texto vigente.
- Hōsenka no Jutsu publicado no Compêndio de Katon v5.3: **Rank D, XP 720**, não Rank C como a tabela de ordenação do briefing supôs. O catálogo vence (Decisão B). A posição na fila de produção não muda porque a ordem é de dependência (a Tsumabeni e o Jigoku no Hane continuam vindo depois), só o rank e a faixa de derivação mudam.
- Gōkakyū no Jutsu: o Manual de Criação de Jutsus **publica RC nominal própria**, 180, na tabela de âncoras da Seção 4.1.1. Pela exceção do Achado 1, esse valor vence a inversão. Custo mínimo 60.

## Coeficientes fechados na ficha do Endan

Ver bloco "Tabela de Coeficientes da Leva" na ficha de Endan. Resumo:

`coef_entrega`: Hōō Shō em Ponto concentrado (0,20); Endan, Gōkakyū, Ryūka, Gōryūka e Rengoku Ryūsei em Projétil único direcionado (0,16); Hōsenka, Hōsenka Tsumabeni, Jigoku no Hane, Kaen Ami e Hōō no Wana em Múltiplos projéteis simultâneos (0,13); Kaen Senpū em Área irradiada do corpo (0,12); Kasumi Enbu em Área de terreno ou campo (0,10). Nenhuma linha nova foi necessária: as sete categorias da Seção 5.3 do Manual cobriram as treze técnicas.

`coef_técnica`: Endan em 0,5 (Baixa), consistente com o próprio catálogo publicando Moldagem Básica. Gōkakyū e Gōryūka em 1,0 (Média) sem elevação, Moldagem Plena. Hōsenka, Ryūka, Kasumi Enbu, Hōsenka Tsumabeni, Kaen Senpū e Hōō Shō em 1,0 elevado um degrau a Alta, cada um por propriedade nomeada (ver ficha de cada). Jigoku no Hane, Kaen Ami e Hōō no Wana em 2,0 (Alta dependência) sem elevação, Moldagem Refinada. Rengoku Ryūsei em 2,0 elevado a Absoluta por proporção interna fina.

## Par de validação por rank

Decisão tomada por padrão na ficha do Endan e repetida nas seguintes: D e C-rank validam contra Veterano (960), B-rank contra Elite (1.440), A-rank contra Especial (1.920), S-rank contra Ápice (3.000), lendo a coluna "Quem usa" da Seção 1 do Manual de Criação de Jutsus contra as quatro faixas que o próprio corpus já usa como pares de validação (Chidori e Kirin).

## Progresso

- [x] 1. Endan
- [x] 2. Gōkakyū no Jutsu
- [x] 3. Hōsenka no Jutsu (rank corrigido para D contra a tabela de ordenação, catálogo vence)
- [x] 4. Ryūka no Jutsu
- [x] 5. Kasumi Enbu no Jutsu
- [x] 6. Hōsenka Tsumabeni (achado da leva citava caminho Agulha; o catálogo publica Caminho Veia, que vence por fato consumado — a chama viaja pela própria lâmina do shuriken arremessado, leitura que "lâmina vira estrada" do próprio caminho sustenta)
- [x] 7. Gōryūka no Jutsu (Achado 2 resolvido a favor do catálogo, rank B, com nota de errata potencial registrada na ficha)
- [x] 8. Kaen Senpū
- [x] 9. Hōō Shō (único requisito de caminho de outra perícia, Emissão do Controle de Chakra)
- [x] 10. Jigoku no Hane (dependência do Tsumabeni é conceitual, não Requisito Mecânico, conforme a Acesso Livre do catálogo)
- [x] 11. Kaen Ami (correção de rascunho: removida elevação gratuita de Perfil de Evasão a Teleguoado sem a sobretaxa de RC/XP que a Seção 6.5 exige)
- [x] 12. Hōō no Wana (contagem de marcas lida do próprio caminho Pavio, sem segunda contagem)
- [x] 13. Rengoku Ryūsei (capstone S-rank, único a alcançar Forte sem depender de caminho adicional)
- [x] Compêndio de Katon reeditado (bump v5.3 → v5.4, corpo idêntico, nenhuma correção apurada)
- [x] Briefing consolidado (`claude/BRIEFING_ARSENAL_KATON.md`)
- [x] Lista de lacunas (`claude/LISTA_DE_LACUNAS_KATON.md`, vazia com justificativa)

Leva concluída.

## Erratas identificadas durante a produção (para o Briefing)

1. Hōsenka no Jutsu: catálogo publica Rank D, XP 720. A tabela de ordenação do briefing supunha Rank C. Sem contradição real, a tabela era apenas uma estimativa prévia; o catálogo já estava certo e a ficha o confirma.
2. Gōryūka no Jutsu: divergência de rank já prevista no Achado 2, resolvida a favor do catálogo (Rank B). Nenhuma fonte canônica nova apurada nesta leva sustenta Rank A; a errata potencial fica em aberto para pesquisa futura, não para esta leva.
3. `worlds/naruto/systems/jutsu-authoring.md` está em v2.11 no repositório, não v2.7 como o `CLAUDE.md` da aplicação registra. Citação desatualizada, não bloqueante.
