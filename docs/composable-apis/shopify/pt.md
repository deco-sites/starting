---
descrição: Aprenda a integrar o Deco com a plataforma de comércio eletrônico Shopify.
---

Este artigo orienta você na criação e configuração de um website no
[**deco.cx**](http://deco.cx) para uma _loja virtual_ utilizando dados da
plataforma de comércio eletrônico [Shopify](https://www.shopify.com/).

# Sumário

1. Pré-requisitos
1. Criando o website
1. Conectando à Shopify

# Pré-requisito

- Um website no Deco. Crie um gratuitamente em
  [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").
- Uma conta na Shopify.

# Criando o website

Caso você já tenha um website no deco.cx, avance para a próxima seção. Caso
contrário, siga as etapas deste
[guia](/docs/pt-br/getting-started/creating-a-site) para criar um.

> Certifique-se de que seu site foi criado com base no modelo **Store Shopify**
> abaixo:

<img width="386" alt="Criando um website no deco.cx" src="https://github.com/deco-cx/apps/assets/76620866/0fadbdad-a892-4a9c-bd1a-a0ed9d09bfee">

# Conectando à Shopify

Para se conectar à sua conta na Shopify:

1. Acesse o painel administrativo do seu site em
   [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").
2. Na barra superior, selecione _blocos_.
3. Escolha a guia _Apps_.
4. Selecione o App **shopify.ts** e clique no bloco shopify. Você verá algo
   como:
   <img width="480" alt="imagem" src="https://github.com/deco-sites/starting/assets/76620866/a4127f6a-9d8f-4d27-b639-3a30db761e44">

5. Altere a configuração da conta de `gimenesdevstore` para o nome da sua conta
   Shopify. O nome da conta é necessariamente o que está na sua URL pública
   myshopify, no exemplo: `gimenesdevstore.myshopify.com`.
6. Defina o Storefront Access Token com todas as permissões
   [(ajuda)](https://help.withkoji.com/en/articles/6619709-how-to-find-your-shopify-storefront-api-access-token).
7. Defina o Admin Access Token apenas com as permissões que deseja (o passo é o
   mesmo do token de Storefront).
8. Clique em `Salvar` e depois em `Publicar`.

🎉 Parabéns, você configurou a integração com a Shopify. Para garantir que a
integração esteja funcionando corretamente, continue lendo e crie um bloco de
coleção reutilizável.

# Adicionando suas coleções ao seu website.

Após a configuração da Shopify ser concluída, tente adicionar uma prateleira ao
seu website.

1. Acesse o painel administrativo do seu site em
   [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").
2. Na barra superior, selecione _blocos_ e depois _sections_.
3. Selecione o bloco `/Products/ProductShelf.tsx` e clique no botão `+`.
   <img width="480" alt="imagem" src="https://github.com/deco-sites/starting/assets/1753396/a2bfe995-daf1-4ef7-8957-2bc55712ec87">

4. No campo `products`, selecione a integração Shopify.
   <img width="334" alt="imagem" src="https://github.com/deco-sites/starting/assets/76620866/9dac417e-fbf7-4fd2-b474-6dd463c5887a">

5. Preencha o campo `query` com uma busca, por exemplo, "camiseta".
6. Preencha o atributo `count` com o número de produtos a serem exibidos,
   digamos 4.
   <img width="349" alt="imagem" src="https://github.com/deco-sites/starting/assets/76620866/648b7b2a-94ca-49c0-bf72-ce7afa683282">

7. Agora, no canto superior direito, clique em `Criar` e dê um nome, por
   exemplo, `Coleção 139`.
   <img width="577" alt="imagem" src="https://github.com/deco-sites/starting/assets/1753396/97720584-3206-4457-8972-a719323962c4">

8. No canto superior direito, clique em `Publicar`.
9. Agora você pode arrastar e soltar o bloco `Coleção 139` em qualquer página.
   <img width="1504" alt="imagem" src="https://github.com/deco-sites/starting/assets/76620866/114aa43e-f727-45db-99e2-b7f4b7d6c7a1">
