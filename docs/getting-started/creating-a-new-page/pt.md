---
description: Aprenda como criar páginas na deco.cx sem precisar de código
---

Agora vamos criar uma nova página para o seu site. O processo é muito simples:

## 1. Acesse o space de Páginas

Páginas têm um space dedicado no Admin do Deco.cx, acessível pela barra lateral.

![Space de páginas](/docs/getting-started/creating-a-new-page/pages-space.png)

Nesta página, você pode ver todas as páginas publicadas no site, junto com os caminhos pelos quais elas são acessíveis aos seus usuários.

Aqui você pode clicar no botão "Criar nova página" para criar uma página.

> Alternativamente, você pode clicar no botão "Criar página" na Página Inicial do Site ou digitar `/new page` na barra de comando localizada no topo central da página do Admin.

## 2. Dê um nome e um caminho à página

Preencha o formulário de criação de página com as seguintes informações:

- **Nome:** nome significativo para entender o que essa página representa. Não
  afeta a interface do usuário ou os metadados da página.
- **Path:** representa a URL que aquela página estará acessível para seus
  usuários. Pode ser estático (por exemplo: `/posts`) ou dinâmico (por exemplo:
  `/posts/:slug`, `/search/*`), seguindo o esquema
  [URLPattern](http://mdn.io/urlpattern).
- **Template** (opcional): selecione uma página já existente e comece a partir
  dela.

Aqui, vamos criar uma página em branco.

![Criando uma nova página](/docs/getting-started/creating-a-new-page/new-page.png)

## 3. Edite o conteúdo da página

Agora é possível editar e adicionar novas Sections disponíveis em seu site e configurar a página
do jeito que você quiser.

Para adicionar um novo componente à página, clique no botão "Adicionar Seções" no editor e explore todas as opções disponíveis. Seções são componentes de UI (pequenas partes do site) que podem receber propriedades e serem editadas através de um formulário no Admin.

![Adicionando uma seção](/docs/getting-started/creating-a-new-page/add-section.png)

> Se você deseja desenvolver/codar uma nova seção, consulte nosso
> [Guia de desenvolvimento](/docs/pt/developing/setup).

Vamos selecionar a seção Hero. Após a seleção, podemos ver o formulário onde podemos editar 
as propriedades da seção.

![Formulário da Seção](/docs/getting-started/creating-a-new-page/section-form.png)

> Obs.: O exemplo acima é de um bloco reutilizável, que é um recurso global que pode ser usado por outras páginas. Por isso, você não pode editar essa seção a menos que a separe para mudar apenas naquela página ou edite em um novo espaço (o que afetará todas as páginas que a utilizam).

Se a página foi publicada anteriormente, o modal Publish oferecerá a opção de
testar A/B a nova revisão.

## Variantes

Além do teste A/B, que randomiza quais usuários veem o novo conteúdo, é possível
segmentar e personalizar o conteúdo no deco.cx usando outros fatores como
localização, dispositivo e mais.
[Leia sobre variantes aqui](/docs/pt/getting-started/variants).
