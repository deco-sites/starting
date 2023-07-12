---
descrição: Aprenda a integrar o Deco com a plataforma de comércio eletrônico VTEX.
---

Este artigo orienta você na criação e configuração de um website no [**deco.cx**](http://deco.cx) para uma _loja virtual_ utilizando dados da plataforma de comércio eletrônico [VTEX](https://vtex.com/ "https://vtex.com/").

> TL;DR: Para se conectar à VTEX, você precisa alterar a configuração do bloco `vtex.ts` em https://deco.cx/admin/sites/{site}/blocks/configVTEX

> **Vídeo**: Para assistir ao conteúdo deste artigo, clique [aqui](https://www.loom.com/share/9fee00a691dd44cfb35d1e2680719e5e)


## Pré-requisitos

- Um website no Deco. Crie um gratuitamente em [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").
- Uma conta na VTEX [(ajuda)](https://help.vtex.com/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC).


## Criando o website

Caso você já tenha um website no deco.cx, avance para a próxima seção. Caso contrário, siga as etapas deste [guia](/docs/pt-br/getting-started/creating-a-site) para criar um.

> Certifique-se de que seu site foi criado com base no modelo **Deco Commerce** abaixo:

<img width="586" alt="Criando um website no deco.cx" src="https://user-images.githubusercontent.com/18706156/224514991-0e882420-00a8-4272-a2d0-71f73ac77d23.png">

## Configurando a `URL Pública da Loja`
O modelo *Deco Commerce* atualmente faz o proxy dos serviços *checkout* e *my-account* da própria VTEX. Isso significa que seu usuário final NÃO será redirecionado para nenhum outro domínio ao fazer o checkout. Por exemplo, vamos supor que, antes de migrar para o Deco, sua loja esteja hospedada em `www.minhaloja.com` e a URL de checkout seja `https://www.minhaloja.com/checkout`. Após migrar para o Deco, sua loja continuará sendo servida em `www.minhaloja.com` e a URL de checkout ainda será `https://www.minhaloja.com/checkout`.

Atualmente, a VTEX não expõe seus serviços de interface de usuário por meio de uma URL pública na internet. Por esse motivo, precisamos de uma URL secundária para habilitar o proxy dos serviços de *checkout* e *my-account*. Seguindo nosso exemplo acima, crie um subdomínio novo, por exemplo `proxy.minhaloja.com`, e aponte-o para a VTEX seguindo este [guia](https://help.vtex.com/tutorial/configuring-domains-in-account-management--tutorials_2450). Depois disso, o `proxy.minhaloja.com` será a `URL Pública da Loja` necessária na próxima etapa.

A arquitetura final da configuração é:
<img width="1066" alt="imagem" src="https://github.com/deco-sites/starting/assets/1753396/bb49bc27-7632-4ef7-9c67-135dc40f0cc3">

## Conectando à VTEX
Para se conectar à sua conta na VTEX:

1. Acesse o painel administrativo do seu site em [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").
2. Na barra superior, selecione *blocos*.
3. Escolha a guia *Contas*.
4. Selecione o bloco **vtex.ts** e clique no bloco configVTEX. Você verá algo como:
<img width="480" alt="imagem" src="https://github.com/deco-sites/starting/assets/1753396/4a0296d0-671c-4d46-9f46-1ee9aa3f1782">

5. Altere a configuração da conta de `bravtexfashionstore` para o nome da sua conta VTEX [aqui](https://help.vtex.com/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC).
6. Defina a `URL Pública da Loja`.
7. Clique em `Salvar` e depois em `Publicar`.

🎉 Parabéns, você configurou a integração com a VTEX. Para garantir que a integração esteja funcionando corretamente, continue lendo e crie um bloco de coleção reutilizável.

## Adicionando suas coleções ao seu website.
Após a configuração da VTEX ser concluída, tente adicionar uma prateleira ao seu website.

1. Acesse o painel administrativo do seu site em [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").
2. Na barra superior, selecione *blocos*.
3. Selecione o bloco `/Products/ProductShelf.tsx` e clique no botão `+`.
<img width="480" alt="imagem" src="https://github.com/deco-sites/starting/assets/1753396/a2bfe995-daf1-4ef7-8957-2bc55712ec87">

5. No campo `products`, selecione qualquer integração VTEX (legacy ou Intelligent Search).
<img width="434" alt="imagem" src="https://github.com/deco-sites/starting/assets/1753396/9e084af6-db18-472e-92ac-7255bc4d9705">

6. Preencha o campo `Collection ID` com uma coleção válida, por exemplo, 139.
7. Preencha o atributo `count` com o número de produtos a serem exibidos, digamos 6.
<img width="349" alt="imagem" src="https://github.com/deco-sites/starting/assets/1753396/df0794a8-fbcc-4c74-915e-ba13e179e9a7">


8. Agora, no canto superior direito, clique em `Criar` e dê um nome, por exemplo, `Coleção 139`.
<img width="577" alt="imagem" src="https://github.com/deco-sites/starting/assets/1753396/97720584-3206-4457-8972-a719323962c4">

9. No canto superior direito, clique em `Publicar`.
10. Agora você pode arrastar e soltar

 o bloco `Coleção 139` em qualquer página.
<img width="1504" alt="imagem" src="https://github.com/deco-sites/starting/assets/1753396/bfc74614-b44b-45a9-b1e6-2465e0149ac4">

### Solução de problemas
Problemas comuns ao conectar-se à VTEX surgem de:

1. VTEX Intelligent Search (IS) **não está instalada na conta**
Se você não tem certeza se a IS está instalada em sua conta, use os carregadores tradicionais (VTEX Catalog). Cuidado, algumas funcionalidades do [Fashion starter](https://github.com/deco-sites/fashion), como o _autocomplete_, dependem da VTEX Intelligent Search.
2. Sales channel errado.
Um sales channel mal configurado pode levar a produtos errados serem renderizados na tela. Encontre os valores corretos de sales channel e locale em seguida.

## Encontrando accountName e salesChannel

Se você tem acesso a uma URL pública de uma loja VTEX, mas precisa encontrar o
`accountName`, `salesChannel` e `defaultLocale` para configurar a integração
no _deco.cx_, siga estas etapas:

**accountName**

1. Acesse a URL da loja.
2. Clique com o botão direito e selecione **Inspecionar**.
3. Com as _Ferramentas de Desenvolvimento_ abertas, digite _Ctrl + F_ para abrir a busca dentro do HTML.
4. Procure por `vtexassets` ou `vteximg` (dependendo do CMS atual da loja).
5. O `accountName` estará nas URLs no formato:
   `{accountName}.vtexassets.com` ou `{accountName}.vteximg.com.br`.

![Exemplo na loja www.minhaloja.com](https://user-images.githubusercontent.com/18706156/226031270-83a1888d-cde8-445e-84be-52d58a55e3c4.png)

**salesChannel** e **defaultLocale**

1. Com as _Ferramentas de Desenvolvimento_ abertas, vá para **Aplicativo** ou **Armazenamento**.
2. No lado esquerdo, selecione o item **Cookies** e selecione a URL da loja.
3. Procure pelo Cookie `vtex_segment` e **copie o seu valor**, que começa com
   `ey`.
4. Acesse o site https://jwt.io e cole o valor.
5. Verifique o JSON retornado. O campo `channel` traz o valor de `salesChannel`
   e o campo `cultureInfo` traz o `defaultLocale`.

> Na maioria dos casos, o `salesChannel` é 1.

<img width="1281" alt="imagem" src="https://user-images.githubusercontent.com/18706156/226075931-6ffe568e-a6c9-4850-ad88-2a02f7a9f5f0.png">

