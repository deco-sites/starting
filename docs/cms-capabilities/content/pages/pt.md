---
description: Aprenda como criar páginas na deco.cx sem precisar de código
since: 2.0
---

A listagem de páginas de um site pode ser acessada na barra lateral em `Content > Pages`.

<img width="640" alt="Listagem de páginas" src="/docs/cms-capabilities/pages/pages1.png">

Uma **Page** é um bloco fundamental na criação de um Site _deco.cx_ que normalmente terá várias Pages. Cada `Page` consiste em:

- **uma ou mais [Sections](/docs/pt/concepts/section)** configuradas, que podem ser consideradas como componentes modulares que compõem o conteúdo da página. 
- **um nome:** um nome significativo para entender o que essa página representa. Não afeta a interface do usuário ou os metadados da página, apenas exibido na listagem de páginas do admin.
- **um path:** representa a URL que aquela página estará acessível para seus usuários. Pode ser estático (por exemplo: `/posts`) ou dinâmico (por exemplo: `/posts/:slug`, `/search/*`), seguindo o esquema [URLPattern](http://mdn.io/urlpattern).

## Criar uma nova página

Clique em **Pages** no menu superior e você poderá ver todas as páginas publicadas no site, juntamente com o _path_ que elas são acessíveis aos seus usuários.

<img width="640" alt="Ações extras" src="/docs/cms-capabilities/pages/pages2.png">

> É possível duplicar ou apagar páginas usando as ações extras na listagem de páginas (ícone de 3 pontos).


Para criar uma nova página em seu site, **clique no botão Criar no canto superior direito da lista de páginas**. Um formulário será aberto com os campo: **nome**, **path** e **template**. Template permite criar uma página tomando o conteúdo de outra como base (campo opcional).

Após criada, você será redirecionado para o editor de página. Agora é possível editar e adicionar novas Sections disponíveis em seu site e configurar a página do jeito que você quiser.

## Editar uma página

Para adicionar uma nova Section à página, clique no botão **Add Sections** no editor e verifique todas as opções disponíveis.

<img width="320" alt="Adicionar uma nova section" src="/docs/cms-capabilities/pages/pages3.png">

Ao adicionar uma nova section, é possível selecionar sections que são globais ou locais (obtidas da library). Há uma diferença entre elas:
- Uma section global já foi configurada e pode ser utilizada por 1 ou mais páginas. Ao alterar a propriedade de uma section global, essa alteração é refletida em todas as páginas que as usam
- Uma section local será configurada dentro da página, e só existe com essa configuração nessa página (não é compartilhada entre outras páginas).

<img width="640" alt="Biblioteca de sections" src="/docs/cms-capabilities/pages/pages4.png">

Ao selecionar uma section, será possível definir suas propriedades. Algumas das propriedades podem pedir a seleção de uma imagem, texto, seleção de itens, ou mesmo de um **loader**. Um **loader** é uma entidade que carrega dados e que pode receber configurações (selecionando um loader da library) ou já estar configurado (loaders salvos).

<img width="640" alt="Biblioteca de sections" src="/docs/cms-capabilities/pages/pages4-1.png">

Além disso, é possível variar uma section a partir da seleção do ícone de bandeira (🏳️).

## Variar uma Section

Uma variante permite que a section tenha outra configuração quando determinada condição (**matcher**) é satisfeita. Essa condição pode ser algo já previamente configurado (a partir de um **matcher** salvo) ou você poderá configurar a partir de um elemento da biblioteca de matchers.

<img width="320" alt="Biblioteca de sections" src="/docs/cms-capabilities/pages/pages4-2.png">

É bem comum criar variantes especialmente para campanhas ou eventos de tempo limitado. Para isso, uma estratégia é configurar um matcher de data e hora.

<img width="320" alt="Configuração de uma condição" src="/docs/cms-capabilities/pages/pages4-3.png">

A variante "default" representa a página a ser exibida quando nenhum matcher é satisfeito.

> **Importante**: os matchers são testado na ordem que são colocados do primeiro (mais acima) até o último (default). Quando um matcher é satisfeito, ele é imeditamente executado e nenhuma outra condição posterior é testada, independente de qualquer outro matcher em seguida que possa satisfazer a condição configurada.

## Editar um SEO de uma página

O SEO de uma página segue o padrão definido no site. É possível especializar o SEO de uma página editando o SEO a partir da opção de edição de SEO.

<img width="640" alt="Biblioteca de sections" src="/docs/cms-capabilities/pages/pages-seo.png">

## Publicar alterações

A página será alterada a cada edição feita. Estas alterações são pertinentes ao ambiente que você esteja trabalhando (inicialmente, staging). Uma alteração no ambiente não é refletido no ambiente em produção até que essa alteração esteja publicada.

<img width="320" alt="Ambiente e publicação" src="/docs/cms-capabilities/pages/pages5.png">

## Variar uma página (segmentando uma páginas)

Uma variante permite criar uma visão diferente de uma página a partir de condições específicas. Uma variante pode ser adicionada a partir do símbolo de banderira (🏳️).

<img width="320" alt="Criando uma variante" src="/docs/cms-capabilities/pages/pages6.png">

Adicione um "**Matcher**" que representa uma regra que será testada para avaliar quais sections serão atendidas. No nosso exemplo, selecionamos um Matcher local para selecionar um tipo de dispositivo e, mais especificamente, o desktop.

<img width="320" alt="Criando uma variante" src="/docs/cms-capabilities/pages/pages7.png">

A variante é criada com todas as sections copiadas da página original. Cada variante pode ter sections editadas de forma independente. Clique na variante criada e altera as sections da forma que quiser. A variante "default" representa a página a ser exibida quando nenhum matcher é satisfeito.

Quando você tem várias variantes em uma única página, a deco automaticamente exibe a pré-visualização da variante selecionada por padrão. Se nenhuma variante estiver selecionada, a deco mostra o que o usuário veria se fosse atribuído à variante. Isso permite que você navegue entre as variantes selecionadas e visualize como seria a experiência do usuário para cada variante.

Você também pode ter uma variante dentro de outra variante. Você pode usar matchers diferentes ou uma combinação deles.

> **Importante**: os matchers são testado na ordem que são colocados do primeiro (mais acima) até o último (default). Quando um matcher é satisfeito, ele é imeditamente executado e nenhuma outra condição posterior é testada, independente de qualquer outro matcher em seguida que possa satisfazer a condição configurada.