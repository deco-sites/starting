---
description: Aprenda como restaurar versões anteriores do seu site
since: 1.0.0
---

É muito importante ter controle e autonomia para gerenciar suas páginas e blocos e ter a capacidade de fazer e desfazer alterações facilmente, se necessário. Com isso em mente, o _deco.cx_ permite que você crie e gerencie **ambientes**.

## Ver Alterações e Publicar

Quando você cria e salva seu site pela primeira vez, você estará no ambiente de staging, que reterá as alterações que você fizer, mas não afetará o site em produção, a menos que você publique essas alterações.

![Ambiente de Staging](/docs/getting-started/changing-and-publishing/staging-env.png)

Vamos dar uma olhada nas alterações que fizemos neste ambiente. Clique no menu dropdown e selecione a opção de staging. Você verá esta página, mostrando o que foi alterado em comparação com o site em produção. No nosso caso, adicionamos uma nova página com algumas seções.

![Alterações no Ambiente](/docs/getting-started/changing-and-publishing/env-changes.png)

A partir daqui, podemos publicar nossas alterações para produção clicando no botão "Publicar agora" ou no botão "Publicar" ao lado do dropdown do ambiente.

## Criar Ambientes

Além do ambiente de staging, podemos criar ambientes adicionais. Isso é útil para isolar trabalhos diferentes de usuários diferentes, para que cada um possa criar seu próprio ambiente e trabalhar nele sem afetar os outros ou o site ao vivo.

Para criar um novo ambiente, clique no link "Ver todos" no dropdown do ambiente ou clique na aba Releases.

![Acessar Página de Releases](/docs/getting-started/changing-and-publishing/open-releases-tab.png)

Isso abrirá a Página de Releases, onde você pode clicar no botão "Novo ambiente".

![Botão Novo Ambiente](/docs/getting-started/changing-and-publishing/new-env-btn.png)

Escolha um nome para seu ambiente e selecione a opção Web para o host. Veremos sobre a [opção localhost](/docs/getting-started/developing/setup) mais tarde.

![Formulário Novo Ambiente](/docs/getting-started/changing-and-publishing/creating-new-env.png)

É isso aí! Agora você tem seu próprio ambiente e espaço de trabalho isolado para fazer alterações no seu site, e quando estiver pronto para lançar, pode publicar da mesma forma que fez com o ambiente de staging.

![Novo Ambiente Criado](/docs/getting-started/changing-and-publishing/env-created.png)