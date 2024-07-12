---
description: |
   Passo a passo de como criar um site na Deco.cx.
---

Esta documentação vai te guiar pelo processo de criação e configuração do seu primeiro site usando o Deco.cx. Um site Deco é o principal ativo para os usuários do Deco, servindo como o centro para criar, editar e gerenciar seu próprio espaço na web.

## 1. Selecionar um Template

Vá para o [Deco Admin](https://admin.deco.cx/spaces/new) e selecione um template para começar. Neste exemplo, vamos escolher o template de landing page, que tem a estrutura e componentes comuns a páginas de aterrissagem.

![Escolhendo um template](/docs/getting-started/creating-site/choose-template.png)

## 2. Explorar o Template

Depois de selecionar um template, você pode explorar seus componentes em modo compartilhado de visualização apenas. Isso permite que você explore as configurações e recursos do template sem fazer nenhuma alteração.

![Editar um site](/docs/getting-started/creating-site/site-editor.png)

## 3. Salvar Seu Site

Para criar oficialmente seu site a partir do template, clique no botão "Use this template" no canto superior direito da página de administração para reivindicar a propriedade do site.

![Salvar site para sua equipe](/docs/getting-started/creating-site/save-site-btn.png)

### 3.1. Faça login na Plataforma

### 3.2. Dê um Nome ao Seu Site e Escolha uma Equipe

Você será solicitado a escolher um nome para o seu site e uma equipe para salvá-lo:

![Escolhendo um nome e uma equipe para salvar o site](/docs/getting-started/creating-site/save-site.png)

Se você ainda não tiver uma equipe, uma será criada com um nome à sua escolha:

![Escolhendo um nome e uma equipe que você vai criar](/docs/getting-started/creating-site/save-site-and-team.png)

A Deco vai configurar seu site de acordo com o template que você escolheu.

## 4. Finalizar Configuração do Site

Você será redirecionado para a página inicial do site:

![Página Inicial do Site](/docs/getting-started/creating-site/site-home.png)

A partir daqui, você tem duas opções:
1. Rodar seu site localmente usando seu ambiente de desenvolvimento local.
   - Isso te dá o poder de modificar seu site alterando seu código, bem como usando o Deco Admin.
2. Criar um novo ambiente para editar seu site apenas através do Deco Admin.
   - Aqui você pode fazer alterações no seu site sem precisar ter acesso ao código do site.

### Opção 1: Rodar Seu Site Localmente

Para rodar seu site localmente, você precisa:

1. Instalar o Deno na sua máquina. Você pode seguir as instruções no [site do Deno](https://deno.land/).
2. Clonar o repositório do site:
   ```bash
   git clone git@github.com:deco-sites/maria-landing.git
   ```
3. Entrar na pasta do repositório e iniciar o servidor:
   ```bash
   cd maria-landing
   DECO_ENV_NAME=localhost deno task start
   ```

Agora, você pode modificar o código e ver as mudanças no Admin e vice-versa.

### Opção 2: Criar um Novo Ambiente

Ambientes são espaços de trabalho isolados onde você pode fazer alterações no seu site sem afetar o site ao vivo. Para criar um novo ambiente:

1. Clique no botão "New" no dropdown de ambientes no Admin.
   ![Botão Novo Ambiente](/docs/getting-started/creating-site/new-env-btn.png)
2. Escolha um nome e um host para o seu ambiente. Como não vamos rodar o site localmente, selecione a opção Web para o host.
   ![Formulário Novo Ambiente](/docs/getting-started/creating-site/new-env-form.png)

Agora você tem seu próprio ambiente e espaço de trabalho isolado para fazer alterações no seu site sem precisar rodar seu código.

## (Opcional) 5. Deploy do Seu Site

Se você quiser fazer o deploy do seu site para um ambiente ao vivo, você pode fazer isso clicando no botão "Add Deco Hosting" na página inicial do site ou no botão "Go live" no dropdown de ambientes.

<img src="/docs/getting-started/creating-site/go-live-btn.png" alt="Botão de Deploy do site" width="340"/>

Isso vai fazer o deploy do seu site com Deno Deploy, tornando-o acessível através de uma URL pública como `https://deco-sites-maria-landing.deno.dev/`.

Esse deploy incluirá 5.000 visualizações de página (compartilhadas entre todos os sites da equipe). Se você precisar de mais visualizações de página, você pode [atualizar seu plano](https://deco.cx/en/pricing) no Deco Admin.

Além disso, como você tem o código-fonte do seu site, você pode fazer o deploy em qualquer outro serviço de hospedagem que suporte Deno.

## 6. Parabéns! Você Criou Seu Primeiro Site Deco

É isso aí! Agora você pode editar seu site como quiser. Não se esqueça de seguir os próximos tutoriais para descobrir mais recursos e capacidades do Deco.cx.