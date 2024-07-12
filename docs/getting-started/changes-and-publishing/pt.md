---
description: Aprenda como restaurar versões anteriores do seu site
since: 1.0.0
---

É muito importante ter controle e autonomia para gerenciar suas páginas e blocos
e ter a capacidade de fazer e desfazer alterações facilmente, se necessário. Com
isso em mente, o _deco.cx_ permite que você crie e gerencie **ambientes**.

## Ver Alterações e Publicar

Vamos dar uma olhada nas mudanças que fizemos neste ambiente. Clique no dropdown
e selecione a opção staging. Você verá esta página, mostrando o que foi alterado
em comparação com o site em produção. No nosso caso, adicionamos uma nova página
com algumas seções. Essa diferença é exibida via JSON, que representa o estado
do site de forma estruturada.

![Mudanças no Ambiente](/docs/getting-started/changing-and-publishing/env-changes.png)

A partir daqui, você pode publicar nossas mudanças para a produção clicando no
botão "Publicar agora" ou no botão "Publicar" ao lado do dropdown do ambiente.

### Rebaseando suas Alterações

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
