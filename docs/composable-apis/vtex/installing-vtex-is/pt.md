---
description: Aprenda como instalar a VTEX Intelligent Search em uma conta VTEX e aproveitar os conectores integrados da deco.cx
---

## O que é a VTEX Intelligent Search?

[VTEX Intelligent Search](https://help.vtex.com/tracks/vtex-intelligent-search)
(VTEX IS) é uma solução de _search_ poderosa que ajuda os clientes a encontrar
os produtos que procuram utilizando Inteligência Artificial. A IS usa dados
históricos de cliques e pedidos para melhorar dinamicamente a pesquisa e
oferecer recursos como preenchimento automático, sugestões de pesquisa de
produtos e filtros que tornam mais fácil para os compradores encontrarem os
produtos que desejam.

A _deco.cx_ oferece **integração nativa com a VTEX Intelligent Search** através
dos [Loaders](/docs/pt/concepts/loader) disponíveis em
[deco-sites/std](https://github.com/deco-sites/std). Você pode vê-la em ação no
[Fashion starter](https://fashion.deco.site).

Infelizmente, a VTEX IS **não vem pré-instalada em todas as contas VTEX**, e
você precisa instalá-la para usar as APIs em seu Site _deco.cx_. Não se
preocupe: a instalação da Intelligent Search **não tem nenhuma implicação
negativa** na conta VTEX, apenas disponibilizando as APIs. O VTEX IS também é
oferecida **gratuitamente** pela VTEX em 2023.

> Se você quer usar as APIs de busca _legacy_ da VTEX leia mais
> [aqui](/docs/en/tutorials/connecting-vtex)

## Pré-requisitos

- Acesso à conta VTEX que deseja realizar esta operação.
- Ter o
  [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference)
  instalado em sua máquina.

## Como instalar

1. Faça login na conta VTEX com `vtex login {accountName}`.
2. Certifique-se de estar no _workspace_ `master` com `vtex use master`.
3. Rode `vtex install vtex.admin-search@1.x vtex.intelligent-search-api@0.x`.
4. No VTEX Admin, vá para `Store Setup -> Search -> Integration Settings` e
   verifique se a indexação foi iniciada. Caso contrário, clique em **Start
   Integration**.

<img width="847" alt="image" src="https://user-images.githubusercontent.com/18706156/225157818-47f5da0e-dfa7-4ad8-9d79-818370baba55.png">

**É isso!** Agora você pode usar os Loaders da _deco.cx_ que buscam dados da
Intelligent Search em suas [Sections](/docs/pt/concepts/section) e
[Pages](/docs/pt/concepts/page).

## Referência

- [VTEX Intelligent Search](https://help.vtex.com/tracks/vtex-intelligent-search)
