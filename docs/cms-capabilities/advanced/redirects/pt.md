---
description: Aprenda como criar proxies e redirecionamentos para uma rota específica
since: 2.0
---

Adicionar **proxies** e **redirecionamentos** são práticas comuns no
desenvolvimento web para _melhorar a experiência do usuário_ e _otimizar a
entrega de conteúdo_. Proxies e redirecionamentos têm finalidades diferentes e
podem ser benéficos em diversos cenários.

Os **redirecionamentos** são principalmente utilizados quando você tem uma
página que pode _não existir mais_, mas que ainda é acessada pelos usuários
através de marcadores salvos ou links externos. Em vez de retornar um erro 404
(não encontrado), você pode criar um redirecionamento para garantir uma
transição tranquila para seus usuários. Ao implementar redirecionamentos, seu
site pode continuar servindo o conteúdo desejado para essas rotas específicas,
mantendo uma experiência positiva para o usuário.

Ao utilizar proxies e redirecionamentos, você pode otimizar a entrega de
conteúdo, gerenciar transições e fornecer uma experiência de usuário perfeita.
Nas seções a seguir, vamos explorar como adicionar proxies e redirecionamentos
usando o Admin da deco, passo a passo.

O processo geral envolve a alteração do mapa de rotas do site e a associação de
um proxy ou redirecionamento, dependendo do caso de uso específico. Ao final do
processo, saberemos como criar uma rota de exemplo `/example-proxy` que faz
proxy de solicitações para o deco.cx e uma rota `/example-redirect` que
redireciona para a página inicial do google.com. Observe a diferença: o primeiro
manterá você no mesmo domínio, enquanto o último o levará para fora do domínio
do seu site.

## Adicionando um redirect

### 1. Acessar a Página de Redirects

Acesse a página de `redirects`. Isto permite acesso a criação de redirects.

<img width="640" alt="Redirects view" src="/docs/cms-capabilities/redirects/redirects1.png">

### 2. Pressione o Create a redirect

Faça a configuração do redirecionamento de acordo com sua necessidade:

- **From**: o campo de origem, que representa o caminho que o usuário está
  tentando acessar, e na qual ele será redirecionado. Este campo suporta o
  [URLPattern](http://mdn.io/urlpattern).
- **To**: o campo de destino. Pode ser um endereço absoluto ou um caminho
  relativo
- **Type**: a definição do tipo de redirect (`permanent` ou `temporary`)

> Escolha o tipo como `temporary`, quando o redirecionamento pode mudar ao longo
> do tempo. Se o redirecionamento não deve mudar ao longo do tempo, você pode
> selecionar `permanent` (o que pode resultar em respostas mais rápidas, já que
> os redirecionamentos permanentes são armazenados em cache pelo navegador do
> usuário).

<img width="320" alt="Add redirect form" src="/docs/cms-capabilities/redirects/redirects2.png">

### 3. Crie o redirect

Para o redirect entrar em efeito, é preciso publicar as alterações do seu site.

Em seguida, você pode acessar `https://seu-site.deco.site/example-redirect` e
verificar se o redirecionamento está funcionando corretamente.

## Adicionando um Proxy \[via apps de ecommerce e website\]

Proxies são utilizados quando você deseja _manter o usuário_ dentro do _mesmo
site, mas fornecendo um conteúdo diferente_. Os **proxies** permitem o
compartilhamento de recursos sob o mesmo domínio, proporcionando uma experiência
de usuário unificada. Isso pode ser especialmente útil quando você precisa
servir conteúdo de diferentes fontes ou plataformas, mantendo uma interface de
usuário consistente. Os proxies são comumente usados durante processos de
migração de plataforma, permitindo que você adote gradualmente o Deco e decida
se uma página específica deve ser proxied ou servida diretamente pelo Deco.

Para criar ou editar um proxy em vez de um redirecionamento, você pode seguir os
seguintes passos:

### 1. Acesso o `App` de site

Acesse a visualização de apps do site, e procure pelo `App` de site. Para
editá-lo, clique na descrição do app.

<img width="480" alt="Configure site app" src="/docs/cms-capabilities/redirects/proxies1.png">

### 2. Procure peloRoutes Map

Procure no formulário de edição do app, pela propriedade de routes map.

<img width="320" alt="Configure site app" src="/docs/cms-capabilities/redirects/proxies2.png">

Edite o proxy existente para adicionar novas rotas a serem proxiadas (quando for
o caso) ou adicione um proxy obtido de algum app de e-commerce.

Publique as alterações para que a nova rota de proxy entre em efeito.

## Adicionando um arquivo de redirects.

Repita o passo 1 da seção anterior e procure pelo `Route Maps`.

Em seguida:

1. Suba um arquivo como `redirect.csv` para a base do projeto. Ele deve ter o
   formato indicado abaixo:

   ```
   from,to,type
   /example-redirect,/test,temporary
   /google,https://www.google.com,permanent
   ```

2. Adicione a rota do tipo `redirectsFromCsv.ts`.

3. Selecione `redirect.csv` como arquivo de redirects.

4. Publique as alterações.
