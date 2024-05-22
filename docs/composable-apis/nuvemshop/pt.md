---
descrição: Aprenda a integrar o Deco com a plataforma de comércio eletrônico Nuvemshop.
---

Este artigo orienta você na criação e configuração de um website no
[**deco.cx**](https://deco.cx) para uma _loja virtual_ utilizando dados da
plataforma de comércio eletrônico [Nuvemshop](https://www.nuvemshop.com.br/).

# Sumário

1. Pré-requisitos
1. Criando o website
1. Conectando à Nuvemshop

# Pré-requisito

- Um website no Deco. Crie um gratuitamente em
  [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").
- Uma conta na Nuvemshop.

# Criando o website

Caso você já tenha um website no deco.cx, avance para a próxima seção. Caso
contrário, siga as etapas deste
[guia](/docs/pt-br/getting-started/creating-a-site) para criar um.

> Certifique-se de que seu site foi criado com base no modelo **Store
> Nuvemshop** abaixo:

<img width="386" alt="Criando um website no deco.cx" src="https://github.com/deco-cx/apps/assets/76620866/f94bbf9a-e109-43a7-87ad-5ffd94c1701b">

# Conectando à Nuvemshop

Para se conectar à sua conta na Nuvemshop:

1. Acesse o painel administrativo do seu site em
   [https://deco.cx/admin](https://deco.cx/admin "https://deco.cx/admin").
2. Na barra superior, selecione _Apps_.
3. Selecione o App da **Nuvemshop**. Você verá algo como:
   <img width="480" alt="imagem" src="https://github.com/deco-cx/apps/assets/76620866/5a52d192-cb60-4f84-9be6-9dcc00a1056e">

4. Altere a configuração da conta de
   `https://lojadolucis.lojavirtualnuvem.com.br` para a URL pública da sua conta
   loja na Nuvemshop.

5. Após isso, você verá um botão para pegar o Store Id e o Access Token. Clique
   nesse botão para ser redirecionado a instalação do App da deco.cx no painel
   da Nuvemshop.
   <img width="180" alt="imagem" src="https://github.com/deco-cx/apps/assets/76620866/761ccfa2-074f-40c7-a40d-0e7852ea1341">

6. Após, você verá um Pop-up como esse no painel da Nuvemshop:
   <img width="250" alt="imagem" src="https://github.com/deco-cx/apps/assets/76620866/2dd205f5-8f76-42f0-b596-dea45ebaad0f">

7. Clique em `Aceitar e começar a usar`

8. Enfim, você será redirecionado para uma tela com o Store Id e Access Token:
   <img width="250" alt="imagem" src="https://github.com/deco-cx/apps/assets/76620866/56b33ede-5d5e-4ef5-a307-421bb0f06c7b">

9. Insira essas informações nos campos do Painel da deco.cx

🎉 Parabéns, você configurou a integração com a Nuvemshop. Para garantir que a
integração esteja funcionando corretamente, continue lendo e crie um bloco de
coleção reutilizável.

# Adicionando seus produtos ao seu website.

Após a configuração da Nuvemshop ser concluída, tente adicionar uma prateleira
ao seu website.

1. Acesse o painel administrativo do seu site em
   [https://admin.deco.cx/](https://deco.cx/admin "https://deco.cx/admin").
2. Na barra superior, selecione _sections_.
3. Selecione o bloco `ProductShelf` e clique no botão `+`.
   <img width="180" alt="imagem" src="https://github.com/deco-cx/apps/assets/76620866/cbd54a38-3caf-431f-aeaf-b8eb2548626e">

4. No campo `products`, selecione a integração Nuvemshop.
   <img width="234" alt="imagem" src="https://github.com/deco-cx/apps/assets/76620866/70bf9588-adea-41ee-b87f-ba62b986d057">

5. Preencha o campo `term` com uma busca, por exemplo, "chá".

6. Preencha o campo `limit` com o número de produtos a serem exibidos,
   digamos 4.
   <img width="349" alt="imagem" src="https://github.com/deco-cx/apps/assets/76620866/ac48586a-bf40-4551-bcfe-686a4f48149c">

7. Agora, no canto superior direito, clique em `Criar` e dê um nome, por
   exemplo, `Coleção 1`.
   <img width="577" alt="imagem" src="https://github.com/deco-cx/apps/assets/76620866/42afa077-2260-4521-bced-ae7f26792838">

8. No canto superior direito, clique em `Publicar`.
9. Agora você pode utilizar o bloco `Coleção 1` em qualquer página do seu site.
   <img width="1504" alt="imagem" src="https://github.com/deco-cx/apps/assets/76620866/083981f5-b9ad-4d7c-af6f-f6060df1a71b">
