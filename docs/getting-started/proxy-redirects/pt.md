---
description: Aprenda como criar proxies e redirecionamentos para uma rota específica
since: 1.0.0
---

# Visão Geral

Adicionar **proxies** e **redirecionamentos** são práticas comuns no desenvolvimento web para _melhorar a experiência do usuário_ e _otimizar a entrega de conteúdo_. Proxies e redirecionamentos têm finalidades diferentes e podem ser benéficos em diversos cenários.

Os **redirecionamentos** são principalmente utilizados quando você tem uma página que pode _não existir mais_, mas que ainda é acessada pelos usuários através de marcadores salvos ou links externos. Em vez de retornar um erro 404 (não encontrado), você pode criar um redirecionamento para garantir uma transição tranquila para seus usuários. Ao implementar redirecionamentos, seu site pode continuar servindo o conteúdo desejado para essas rotas específicas, mantendo uma experiência positiva para o usuário.

Ao utilizar proxies e redirecionamentos, você pode otimizar a entrega de conteúdo, gerenciar transições e fornecer uma experiência de usuário perfeita. Nas seções a seguir, vamos explorar como adicionar proxies e redirecionamentos usando o Admin da deco, passo a passo.

O processo geral envolve a alteração do mapa de rotas do site e a associação de um proxy ou redirecionamento, dependendo do caso de uso específico. Ao final do processo, saberemos como criar uma rota de exemplo `/example-proxy` que faz proxy de solicitações para o deco.cx e uma rota `/example-redirect` que redireciona para a página inicial do google.com. Observe a diferença: o primeiro manterá você no mesmo domínio, enquanto o último o levará para fora do domínio do seu site.

## Passo a passo

### Adicionando um Redirecionamento

1. Primeiro, faça login no Admin da deco. Uma vez logado, você pode acessar o _site_ com o qual deseja trabalhar.

2. Entre na configuração de `redirects` do site.
![Redirects no admin](https://github.com/deco-cx/apps/assets/882438/29e9f388-2c32-4190-96e5-ac5a8001b68c)

3. Pressione `Criar um redirect` e configure de acordo com sua necessidade.

![Criar redirect](https://github.com/deco-cx/apps/assets/882438/63a7d2a4-cc53-47eb-adca-c6cb601e7f41)

4. Preencha o campo `De` com a rota desejada, por exemplo, `/example-redirect` e, em `Para`, insira `https://google.com` ou a URL para a qual deseja **redirecionar**.

5. Escolha o tipo como `temporary`, já que este redirecionamento pode mudar ao longo do tempo. Se o redirecionamento não deve mudar ao longo do tempo, você pode selecionar `permanent` (o que pode resultar em respostas mais rápidas, já que os redirecionamentos permanentes são armazenados em cache pelo navegador do usuário).

6. Crie o redirect para aplicá-lo.

Agora você pode acessar `https://seu-site.deco.site/example-redirect` e verificar se o redirecionamento está funcionando corretamente.

### Adicionando um Proxy

Proxies são utilizados quando você deseja _manter o usuário_ dentro do _mesmo site, mas fornecendo um conteúdo diferente_. Os **proxies** permitem o compartilhamento de recursos sob o mesmo domínio, proporcionando uma experiência de usuário unificada. Isso pode ser especialmente útil quando você precisa servir conteúdo de diferentes fontes ou plataformas, mantendo uma interface de usuário consistente. Os proxies são comumente usados durante processos de migração de plataforma, permitindo que você adote gradualmente o Deco e decida se uma página específica deve ser proxied ou servida diretamente pelo Deco.

Para criar um proxy em vez de um redirecionamento, você pode seguir os seguintes passos:

1. Primeiro, faça login no Admin da deco. Uma vez logado, você pode acessar o _site_ com o qual deseja trabalhar.

2. Abra o `App` de site para edição. E pressione para adicionar um novo `site map`.

![Adicionar site map](https://github.com/deco-cx/apps/assets/882438/92427ed1-54cb-49f2-88f5-3be8c1c27b8a)

3. Selecione o tipo da rota como `Route`, e adicione essa nova rota.

4. Como `Path template`, selecione a base da rota (ex.: `/example-proxy`), selecione o valor `Proxy` e a `URL`, como a URL a ser proxiada (ex.: `https://deco.cx`).

5. Publique as alterações.

Agora, ao acessar a rota especificada (por exemplo, `https://seu-site.deco.site/example-proxy`), você será proxied para a URL especificada (neste caso, `https://deco.cx`).


### Adicionando um arquivo de redirects.

Repita os passos de 1 e 2 da seção anterior. Em seguida:

1. Suba um arquivo como `redirect.csv` para a base do projeto. Ele deve ter o formato indicado abaixo:

```
from,to,type
/example-redirect,/test,temporary
/google,https://www.google.com,permanent
```

2. Adicione a rota do tipo `redirectsFromCsv.ts`.

3. Selecione `redirect.csv` como arquivo de redirects.

4. Publique as alterações.