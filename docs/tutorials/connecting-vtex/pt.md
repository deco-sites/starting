---
description: Aprenda como configurar a conexão da deco com qualquer conta VTEX.
---

## Versão em vídeo

Para assistir o conteúdo desse artigo, clique
[aqui](https://www.loom.com/share/9fee00a691dd44cfb35d1e2680719e5e)

Esse guia mostra como criar e configurar um site na
[**deco.cx**](http://deco.cx) para um _storefront_ que lê dados da plataforma de
ecommerce [VTEX](https://vtex.com/ "https://vtex.com/").

## Leitura recomendada

- [Criando um site](/docs/pt/tutorials/101)
- [Conceitos: Loader](/docs/pt/concepts/loader)

## Pré-requisitos

- Acesso a
  [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").
- Um `accountName` VTEX junto com o `salesChannel` e `locale` desejados. (Clique
  aqui se você precisa [descobrir](#como-descobrir-accountname)).

## Configurando a conexão

O template **Commerce** já conta com uma conexão automática com a VTEX, porém é
utilizada uma conta de teste (`bravtexfashionstore`) que deve ser substituída
pela conta com a qual você pretende desenvolver a loja. Isso será útil para
configurar prateleiras com produtos reais da loja que está sendo desenvolvida e
também garantir que a Página de Produto e o Minicart funcionem corretamente.

Para fazer essa mudança, siga os passos:

1. Acesse o painel administrativo do seu site em
   [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").

2. Vá até **Library.**

3. No grupo **Global Sections**, selecione o item **vtexconfig.global.tsx.**

4. Em Account, troque `bravtexfashionstore` pelo account name desejado e também
   pelo `salesChannel` e `locale` desejados (a maioria das lojas tem o mesmo
   valor padrão já configurado).

5. Clique em **Save Draft**

<img width="486" alt="Configuração da VTEX dentro do admin da deco.cx" src="https://user-images.githubusercontent.com/18706156/224514994-d5edd89b-705c-42e6-952e-3db3f9d5de2e.png">

Para testar as mudanças, volte para lista de Sections na Library e selecione a
**ProductShelf.** Essa Section pode ser configurada para buscar produtos na VTEX
com uma configuração fornecida. Clique no ícone de caneta (✏️) e edite o campo
**Query** para alguma palavra-chave relacionada ao catálogo da conta que você
configurou (ex: se é uma loja de móveis, digite _"mesa")._

<img width="1440" alt="Editor da deco.cx com uma página de ProductShelf" src="https://user-images.githubusercontent.com/18706156/224514990-0e41dba8-96b8-475b-9744-48706d2de623.png">

> Caso ainda não tenha configurado uma integração com a VTEX, clique no ícone de
> setas 🔁 ou em **"Add Integration"** e selecione a opção **vtexProductList** e
> configure a integração adicionando um valor para os campos **Query** e
> **Count**

Ao clicar em um produto, também é esperado que sua página de detalhe (PDP)
renderize corretamente de acordo com o produto selecionado. Agora você pode
utilizar as Sections e Functions já incluídas no seu projeto para exibir
produtos da conta configurada.

## Não funcionou?

Se você fez as alterações na configuração global da VTEX, alterou a query de uma
`ProductShelf` para um termo presente no catálogo da conta mas, mesmo assim,
nenhum produto foi retornado é possível que a VTEX Intelligent Search (IS) **não
está instalada na conta**. Se você tem acesso ao Admin da VTEX, saiba como
[instalar a VTEX IS](/docs/pt/tutorials/installing-vtex-is).

Entretanto, não há problema: **é possível usar conectar-se à VTEX utilizando as
APIs tradicionais de busca**. Possivelmente algumas features do
[Fashion starter](https://github.com/deco-sites/fashion) como _autocomplete_ de
busca não funcionarão, mas as principais funcionalidades da loja sim.

Para utilizar essas APIs basta **trocar os Loaders** utilizados para a versão
`vtexLegacy...`. Siga os passos abaixo para trocar essa configuração para todo o
site:

> Para ver o conteúdo desse guia em vídeo, clique
> [aqui](https://www.loom.com/share/5d232f18187f40fb995d0fd5552b04c8)

**Antes de prosseguir**, verifique no arquivo _import.map.json_ se a versão da
linha `deco-sites/std` está em `0.1.5` ou acima. Senão, mude esse arquivo e
**faça um deploy dando push em main**.

1. No Admin da _deco.cx_, acesse a seção **Pages**.
2. Selecione a Page **Home** que está **Published** (ou seja, é a home utilizada
   em produção.)
3. Selecione a Section `ProductShelf`.
4. Na `prop` `Products`, clique no ícone das setas para trocar o Loader e
   selecione a `vtexLegacyProductList.ts`.
5. Clique no ícone de editar, próximo ao Loader, e preencha as `props`
   obrigatórias `query` e `count`.
6. Clique em Salvar.
7. Agora, clique em **Publicar**.

<img width="1310" alt="image" src="https://user-images.githubusercontent.com/18706156/226076534-1e768d7d-830c-4f35-89ef-bc43445539f7.png">

_Selecionando o Loader `vtexProductList.ts` para a Shelf_

Siga os mesmos passos para as outras Pages publicadas do Site para garantir que
o fluxo de navegação irá funcionar corretamente utilizando as APIs legacy da
VTEX. Aqui estão as Pages e Sections, respectivamente que precisam ser
alteradas.

- **Categories** `(/*)` e **Search Page** `(/s)`: `SEOPLP`, `SearchControls` e
  `ProductGallery`.
- **Product Page** `(/:slug/p)`: `SEOPDP`, `ProductDetails` e `ProductShelf`.

> Não esqueça de Salvar **e Publicar** as alterações.

> Para as Pages com duas Sections que precisam de Loaders, é possível selecionar
> **Loaders já configurados** para não onerar o carregamento da Page.

## Configurando o checkout

Atualmente, utilizamos a
[mesma estratégia que a VTEX FastStore usa](https://www.faststore.dev/how-to-guides/platform-integration/vtex/integrating-vtex-checkout "https://www.faststore.dev/how-to-guides/platform-integration/vtex/integrating-vtex-checkout")
para se integrar com o VTEX Checkout, por isso é necessário ter **um domínio
secundário que está vinculado à conta VTEX.** Ao clicar no botão **Finalizar
Compra** no Minicart do site _deco_, o usuário é redirecionado para
`https://{dominioConfigurado}/checkout?orderFormId=(…)` e consegue finalizar o
fluxo normalmente.

É provável que a conta que você configurou acima já tenha um domínio público que
está sendo utilizado, e é possível utilizá-lo na etapa de construção da loja.
Com esse domínio em mãos, siga os seguintes passos:

1. Abra o arquivo `Cart.tsx` e substitua a string
   [`https://bravtexfashionstore.vtexcommercestable.com.br`](https://bravtexfashionstore.vtexcommercestable.com.br)
   pelo domínio escolhido da loja.

2. Abra o arquivo `routes/api/[...catchall].tsx` e substitua a string
   [`bravtexfashionstore`](https://bravtexfashionstore.vtexcommercestable.com.br)
   pelo **account name** utilizado na sessão anterior.

## Como descobrir accountName e salesChannel

Se você tem acesso à uma URL pública de uma loja VTEX mas precisa descobrir o
`accountName`, `salesChannel` e `defaultLocale` para configurar a integração na
_deco.cx_, siga estes passos:

**accountName**

1. Acesse a URL da loja.
2. Clique com o botão direto e selecione **Inspecionar Elemento**.
3. Com o _Dev Tools_ aberto, digite _Ctrl + F_ para abrir a busca dentro do
   HTML.
4. Busque por `vtexassets` ou `vteximg` (dependendo do CMS atual da loja).
5. O `accountName` estará nas URLs no formato: `{accountName}.vtexassets.com` ou
   `{accountName}.vteximg.com.br`.

![Exemplo na loja www.mash.com.br](https://user-images.githubusercontent.com/18706156/226031270-83a1888d-cde8-445e-84be-52d58a55e3c4.png)

**salesChannel** e **defaultLocale**

1. Ainda com o _Dev Tools_ aberto, vá até **Application** ou **Storage**.
2. Na lateral esquerda, selecione o item **Cookies** e selecione a URL da loja.
3. Busque pelo Cookie `vtex_segment` e **copie seu valor,** que começa com `ey`.
4. Vá até o site https://jwt.io e cole o valor.
5. Verifique o JSON retornado. O campo `channel` traz o valor do `salesChannel`
   e o campo `cultureInfo` traz o `defaultLocale`.

> Na maioria dos casos o `salesChannel` utilizado é 1

<img width="1281" alt="image" src="https://user-images.githubusercontent.com/18706156/226075931-6ffe568e-a6c9-4850-ad88-2a02f7a9f5f0.png">

_Exemplo de um vtex_segment parseado._
