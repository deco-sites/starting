---
description: Instalando Apps
since: 1.24.0
---

# Pré-requisitos

- Você deve possuir um site Deco com o App desejado já disponível no diretório de Apps, seguindo o tutorial [Tornando um app instalável](/docs/pt-br/developing/making-an-app-installable).

## Passo 1: Faça o login no Deco Admin

Primeiramente, faça o login em sua conta do Deco Admin acessando [https://deco.cx/admin](https://deco.cx/admin).

## Passo 2: Escolha o Site de Destino

Após fazer o login, escolha o site de destino onde deseja instalar o App. Após selecionar o site, você será direcionado para a página inicial do site.

## Passo 3: Abra a URL do Middleware

Na página inicial do site, abra a seguinte URL em seu navegador:

```
https://deco.cx/admin/sites/$SITE/blocks/.%2Froutes%2F_middleware.ts
```

Substitua `$SITE` na URL pelo nome real do seu site.

## Passo 4: Acesse "Apps" e escolha "Installed Apps"

Após abrir a URL, você será direcionado para uma página que mostra o middleware do seu site. Acesse a seção "Apps" e, caso "Installed Apps" ainda não esteja selecionado, escolha essa opção entre as opções disponíveis.

<img width="1512" alt="image" src="https://github.com/deco-sites/starting/assets/5839364/db1c43c6-8bac-4413-94ed-320974b6c24f">
## Passo 5: Adicione o App

Clique no botão "Add Apps" para instalar o App desejado no seu site. Uma lista de Apps disponíveis será exibida.

## Passo 6: Escolha o App desejado e configure o State

Escolha o App que deseja instalar na lista. Você será solicitado a preencher o state necessário do App. Isso pode incluir fornecer determinadas configurações ou parâmetros para personalizar o comportamento do App dentro do seu site.

<img width="1512" alt="image" src="https://github.com/deco-sites/starting/assets/5839364/ef02574e-5670-4c20-87d6-c0f0efd5122c">

## Passo 7: Salve e Publique

Após configurar o state do App, clique em "Save and Publish" para aplicar as alterações e instalar o App no seu site.

## Passo 8: Explore os Blocos Instalados

Após a instalação do App, você poderá ver todos os blocos e componentes que o App inclui. Esses blocos podem ser usados para aprimorar o seu site Deco com as funcionalidades adicionais fornecidas pelo App instalado.

Parabéns! Você instalou com sucesso um App usando o Deco Admin. Divirta-se explorando as novas capacidades e recursos que o App instalado traz ao seu site Deco. Se necessário, você pode personalizar ainda mais o App instalado ou explorar outros Apps disponíveis para expandir ainda mais as funcionalidades dos seus projetos Deco. Aproveite a gestão e o aprimoramento dos seus sites Deco! 🚀
