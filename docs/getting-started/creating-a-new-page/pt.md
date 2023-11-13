---
description: Aprenda como criar páginas na deco.cx sem precisar de código
---

Você deve estar familiarizado com os conceitos básicos de [Blocks](/docs/pt/concepts/blocks) e [Section](/docs/pt/concepts/sections) e agora vamos entender como usá-los para criar páginas em um site deco.cx.

![Criando páginas](/docs/creating-new-page/pages-menu-pt.png)

Clique em **Páginas** no menu superior e você poderá ver todas as páginas publicadas no site, juntamente com o _path_ que elas são acessíveis aos seus usuários.

## Crie uma nova página

Para criar uma nova página em seu site, **clique no botão Criar no canto superior direito da lista de páginas**. Um formulário será aberto com os seguintes campos:

- **Nome:** nome significativo para entender o que essa página representa. Não afeta a interface do usuário ou os metadados da página.
- **Path:** representa a URL que aquela página estará acessível para seus usuários. Pode ser estático (por exemplo: `/posts`) ou dinâmico (por exemplo: `/posts/:slug`, `/search/*`), seguindo o esquema [URLPattern](http://mdn.io/urlpattern).
- **Template** (opcional): selecione uma página já existente e comece a partir dela.


Após criada, você será redirecionado para o editor de página. Agora é possível editar e adicionar novas Sections disponíveis em seu site e configurar a página do jeito que você quiser.

Para adicionar uma nova Section à página, clique no botão **Add Sections** no editor e verifique todas as opções disponíveis.

![Criando páginas](/docs/creating-new-page/add-section.png)

> Se você deseja desenvolver/codar uma nova seção, consulte nosso [Guia de desenvolvimento](/docs/pt/developing/setup).

## Publicação

Após a edição, clique em **Salvar** para criar uma nova revisão e depois em **Publicar** para publicar a página recém-criada.

Se a página foi publicada anteriormente, o modal Publish oferecerá a opção de testar A/B a nova revisão.

## Variantes

Além do teste A/B, que randomiza quais usuários veem o novo conteúdo, é possível segmentar e personalizar o conteúdo no deco.cx usando outros fatores como localização, dispositivo e mais. Leia  sobre variantes [aqui](/docs/pt/getting-started/variants).