---
description: Aprenda como criar proxies e redirecionamentos para uma rota específica
since: 1.0.0
---

# Visão Geral

Adicionar **proxies** e **redirecionamentos** são práticas comuns no desenvolvimento web para _melhorar a experiência do usuário_ e _otimizar a entrega de conteúdo_. Proxies e redirecionamentos têm finalidades diferentes e podem ser benéficos em diversos cenários.

Os **redirecionamentos** são principalmente utilizados quando você tem uma página que pode _não existir mais_, mas que ainda é acessada pelos usuários através de marcadores salvos ou links externos. Em vez de retornar um erro 404 (não encontrado), você pode criar um redirecionamento para garantir uma transição tranquila para seus usuários. Ao implementar redirecionamentos, seu site pode continuar servindo o conteúdo desejado para essas rotas específicas, mantendo uma experiência positiva para o usuário.

Por outro lado, os proxies são utilizados quando você deseja _manter o usuário_ dentro do _mesmo site, mas fornecendo um conteúdo diferente_. Os **proxies** permitem o compartilhamento de recursos sob o mesmo domínio, proporcionando uma experiência de usuário unificada. Isso pode ser especialmente útil quando você precisa servir conteúdo de diferentes fontes ou plataformas, mantendo uma interface de usuário consistente. Os proxies são comumente usados durante processos de migração de plataforma, permitindo que você adote gradualmente o Deco e decida se uma página específica deve ser proxied ou servida diretamente pelo Deco.

Ao utilizar proxies e redirecionamentos, você pode otimizar a entrega de conteúdo, gerenciar transições e fornecer uma experiência de usuário perfeita. Nas seções a seguir, vamos explorar como adicionar proxies e redirecionamentos usando o Admin do Deco, passo a passo.

O processo geral envolve a alteração do mapa de rotas do site e a associação de um proxy ou redirecionamento, dependendo do caso de uso específico. Ao final do processo, teremos uma rota de exemplo `/example-proxy` que faz proxy de solicitações para o google.com e uma rota `/example-redirect` que redireciona para a página inicial do google.com. Observe a diferença: o primeiro manterá você no mesmo domínio, enquanto o último o levará para fora do domínio do seu site.

# Passo a passo

Adicionando um Redirecionamento:

1. Primeiramente, faça login no Admin do Deco. Uma vez logado, você pode acessar o site com o qual deseja trabalhar.
2. Abra o bloco `./routes/[...catchall].tsx`, que é responsável pelo roteamento do seu site. Você pode acessá-lo utilizando o seguinte link (substitua `$sitename` pelo nome do seu site): Bloco de Rotas do Admin
3. Clique em "Adicionar públicos-alvo" e um menu suspenso será exibido.
4. Abaixo de "Criar novo", selecione a opção "Público-alvo Todos".
5. Um novo menu suspenso chamado "Rotas" será exibido. Em "Criar novo", escolha a opção `deco-cx/deco/flags/audience.ts@Route[]`. Em seguida, clique no botão "+" para adicionar uma nova rota.
6. Preencha o campo "pathtemplate" com a rota desejada, por exemplo, `/example-redirect` (ignore a opção "checkbox href" por enquanto).
7. Na opção "Handler", selecione "Redirect Handler" (ou `$live/handlers/redirect.ts`).
8. No campo "Para", insira `https://google.com` ou a URL para a qual deseja redirecionar.
9. Escolha o tipo como "temporary" já que este redirecionamento pode mudar ao longo do tempo. Se o redirecionamento não deve mudar ao longo do tempo, você pode selecionar "permanent" (o que pode resultar em respostas mais rápidas, já que os redirecionamentos permanentes são armazenados em cache pelo navegador do usuário).
10. Salve e publique as alterações.

Agora você pode acessar `https://seu-site.deco.site/example-redirect` e verificar se o redirecionamento está funcionando corretamente.

Adicionando um Proxy:

Para criar um proxy em vez de um redirecionamento, você pode seguir os mesmos passos mencionados acima, com algumas alterações:

Repita os passos de 1 a 5 da seção "Adicionando um Redirecionamento".
1. Na opção "Handler", selecione "Proxy Handler" (ou `$live/handlers/proxy.ts`).
2. No campo "Para", insira a URL exata que deve ser usada como proxy, por exemplo, `https://google.com`.
3. Salve e publique as alterações.

Agora, ao acessar a rota especificada (por exemplo, `https://seu-site.deco.site/example-proxy`), você será proxied para a URL especificada (neste caso, `https://google.com`).