---
description: Aprenda como restaurar versões anteriores do seu site
since: 1.0.0
---

É muito importante ter controle e autonomia para gerenciar suas páginas e blocos
e ter a capacidade de fazer e desfazer alterações facilmente, se necessário. Com
isso em mente, o _deco.cx_ permite que você crie e gerencie **ambientes**.

## Ver Alterações e Publicar

Quando você cria e salva seu site pela primeira vez, você estará no ambiente de
staging, que reterá as alterações que você fizer, mas não afetará o site em
produção, a menos que você publique essas alterações.

![Ambiente de Staging](/docs/getting-started/changing-and-publishing/staging-env.png)

Vamos dar uma olhada nas mudanças que fizemos neste ambiente. Clique no dropdown
e selecione a opção staging. Você verá esta página, mostrando o que foi alterado
em comparação com o site em produção. No nosso caso, adicionamos uma nova página
com algumas seções. Essa diferença é exibida via JSON, que representa o estado
do site de forma estruturada.

![Mudanças no Ambiente](/docs/getting-started/changing-and-publishing/env-changes.png)

A partir daqui, você pode publicar nossas mudanças para a produção clicando no
botão "Publicar agora" ou no botão "Publicar" ao lado do dropdown do ambiente.

## Criar Ambientes

Além do ambiente de staging, você pode criar ambientes adicionais. Isso é útil
para isolar trabalhos diferentes de usuários diferentes, permitindo que cada um
crie seu próprio ambiente e trabalhe nele sem afetar os outros ou o site ao
vivo.

### 1. Ver Todos os Ambientes

Clique no link "Ver todos" no dropdown do ambiente ou vá para a aba Lançamentos.
Isso abrirá a Página de Lançamentos, onde você pode ver todos os ambientes
criados para o seu site, bem como os lançamentos publicados.

![Acessar Página de Lançamentos](/docs/getting-started/changing-and-publishing/open-releases-tab.png)

### 2. Criar um Novo Ambiente

Clique no botão "Novo ambiente".

![Botão Novo Ambiente](/docs/getting-started/changing-and-publishing/new-env-btn.png)

### 3. Escolher um Nome e um Host

Escolha um nome para o seu ambiente e selecione a opção Web para o host. Vamos
discutir a [opção localhost](/docs/getting-started/developing-guide/setup) mais tarde.

![Formulário Novo Ambiente](/docs/getting-started/changing-and-publishing/creating-new-env.png)

Pronto! Agora você tem seu próprio ambiente e espaço de trabalho isolado para
fazer mudanças no seu site. Quando estiver pronto para ir ao ar, você pode
publicar da mesma forma que fez com o ambiente de staging.

![Novo Ambiente Criado](/docs/getting-started/changing-and-publishing/env-created.png)

### 4. Rebaseando suas Alterações

Ao publicar com múltiplos ambientes, pode ser necessário mesclar suas alterações
com as feitas em outros ambientes. Por exemplo, se você estiver editando seu
site no seu novo ambiente, `maria`, enquanto um colega estiver editando no
ambiente `staging`, e seu colega publicar suas mudanças, você precisará rebasear
seu ambiente para incorporar as novas mudanças que agora estão em produção.

Nesse cenário, em vez de ver o botão "Publicar agora" na página de Lançamentos,
você verá um botão "Rebase", como mostrado abaixo.

![Rebase no ambiente](/docs/getting-started/changing-and-publishing/rebase.png)

Clique neste botão para incorporar as mudanças de produção no seu ambiente.
Depois de rebasear, você pode publicar suas alterações clicando no botão
"Publicar agora".
