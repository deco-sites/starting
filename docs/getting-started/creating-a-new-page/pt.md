---
description: Aprenda como criar páginas na deco.cx sem precisar de código
since: 1.0.0
---

Você deve estar familiarizado com os conceitos básicos de [Blocks](/docs/pt/concepts/blocks) e [Section](/docs/pt/concepts/sections) e agora vamos entender como usá-los para criar páginas em um site deco.cx.

<img width="1001" alt="image" src="https://github.com/deco-cx/deco/assets/18706156/e93a3277-c9a4-4abf-b9d7-dd2c716d3d54">

Clique em **Pages** no menu superior e você poderá ver todas as páginas publicadas no site, juntamente com o _path_ que elas são acessíveis aos seus usuários.

## Crie uma nova página

Para criar uma nova página em seu site, **clique no botão Criar no canto superior direito da lista de páginas**. Um formulário será aberto com os seguintes campos:

- **Nome:** nome significativo para entender o que essa página representa. Não afeta a interface do usuário ou os metadados da página.
- **Path:** representa a URL que aquela página estará acessível para seus usuários. Pode ser estático (por exemplo: `/posts`) ou dinâmico (por exemplo: `/posts/:slug`, `/search/*`), seguindo o esquema [URLPattern](http://mdn.io/urlpattern).
- **Template** (opcional): selecione uma página já existente e comece a partir dela.


Após criada, você será redirecionado para o editor de página. Agora é possível editar e adicionar novas Sections disponíveis em seu site e configurar a página do jeito que você quiser.

Para adicionar uma nova Section à página, clique no botão **Add Page Section** no editor e verifique todas as opções disponíveis.

<img width="1512" alt="image" src="https://github.com/deco-cx/deco/assets/18706156/5699f4ea-29cf-41cd-933e-0dda8bc0b0df">


> Se você deseja desenvolver/codar uma nova seção, consulte nosso [Guia de desenvolvimento](/docs/en/developing/setup).

## Publicação

Após a edição, clique em **Salvar** para criar uma nova revisão e depois em **Publicar** para publicar a página recém-criada.

Se a página foi publicada anteriormente, o modal Publish oferecerá a opção de testar A/B a nova revisão.

## Variantes

Além do teste A/B, que randomiza quais usuários veem o novo conteúdo, é possível segmentar e personalizar o conteúdo no deco.cx usando outros fatores como localização, dispositivo e mais. Leia  sobre variantes [aqui](/docs/en/getting-started/variants).