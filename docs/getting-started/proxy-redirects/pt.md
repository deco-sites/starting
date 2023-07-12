---
description: Aprenda como criar proxies e redirecionamentos para uma rota específica
since: 1.0.0
---

# Visão Geral

Adicionar **proxies** e **redirecionamentos** são práticas comuns no desenvolvimento web para _melhorar a experiência do usuário_ e _otimizar a entrega de conteúdo_. Proxies e redirecionamentos têm finalidades diferentes e podem ser benéficos em diversos cenários.

Os **redirecionamentos** são principalmente utilizados quando você tem uma página que pode _não existir mais_, mas que ainda é acessada pelos usuários através de marcadores salvos ou links externos. Em vez de retornar um erro 404 (não encontrado), você pode criar um redirecionamento para garantir uma transição tranquila para seus usuários. Ao implementar redirecionamentos, seu site pode continuar servindo o conteúdo desejado para essas rotas específicas, mantendo uma experiência positiva para o usuário.

Ao utilizar proxies e redirecionamentos, você pode otimizar a entrega de conteúdo, gerenciar transições e fornecer uma experiência de usuário perfeita. Nas seções a seguir, vamos explorar como adicionar proxies e redirecionamentos usando o Admin da deco, passo a passo.

O processo geral envolve a alteração do mapa de rotas do site e a associação de um proxy ou redirecionamento, dependendo do caso de uso específico. Ao final do processo, saberemos como criar uma rota de exemplo `/example-proxy` que faz proxy de solicitações para o deco.cx e uma rota `/example-redirect` que redireciona para a página inicial do google.com. Observe a diferença: o primeiro manterá você no mesmo domínio, enquanto o último o levará para fora do domínio do seu site.

# Passo a passo

Adicionando um Redirecionamento:

1. Primeiro, faça login no Admin da deco. Uma vez logado, você pode acessar o _site_ com o qual deseja trabalhar.
2. Abra o bloco `./routes/[...catchall].tsx`, que é responsável pelo **roteamento** do seu site. Você pode acessá-lo usando o seguinte link (substitua `$sitename` pelo nome do seu site): https://deco.cx/admin/sites/$sitename/blocks/.%2Froutes%2F%5B...catchall%5D.tsx
3. Clique em `Adicionar Audiência` e um menu de seleção será exibido. <img width="1511" alt="image" src="https://github.com/deco-sites/starting/assets/5839364/18545536-5971-47d5-a6f3-22f9a740df2b">
4. Abaixo de `Criar novo`, selecione a opção `Audience Everyone`.
5. Um novo menu de seleção chamado `Routes` será exibido. Em `Criar novo`, escolha a opção _deco-cx/deco/flags/audience.ts@Route[]_. Em seguida, clique no botão `+` para adicionar uma nova rota. <img width="1508" alt="image" src="https://github.com/deco-sites/starting/assets/5839364/07e308df-6adb-4a2d-830c-eed8bca3fa06">
6. Preencha o campo `Path Template` com a rota desejada, por exemplo, `/example-redirect` (ignore a opção `href checkbox` por enquanto).
7. Na opção `Handler`, selecione `Redirect Handler` (ou $live/handlers/redirect.ts).
8. No campo `To`, insira `https://google.com` ou a URL para a qual deseja **redirecionar**.
9. Escolha o tipo como `temporary`, já que este redirecionamento pode mudar ao longo do tempo. Se o redirecionamento não deve mudar ao longo do tempo, você pode selecionar `permanent` (o que pode resultar em respostas mais rápidas, já que os redirecionamentos permanentes são armazenados em cache pelo navegador do usuário). <img width="1508" alt="image" src="https://github.com/deco-sites/starting/assets/5839364/56e3c2a9-cde2-4541-9781-58f84e27eb98">
10. Salve e publique as alterações.

Agora você pode acessar `https://seu-site.deco.site/example-redirect` e verificar se o redirecionamento está funcionando corretamente.

> Perceba que, se você precisa adicionar um novo redirect, você precisa repetir os passos de 5. em diante, pois a audiência já terá sido criada.

Adicionando um Proxy:

Proxies são utilizados quando você deseja _manter o usuário_ dentro do _mesmo site, mas fornecendo um conteúdo diferente_. Os **proxies** permitem o compartilhamento de recursos sob o mesmo domínio, proporcionando uma experiência de usuário unificada. Isso pode ser especialmente útil quando você precisa servir conteúdo de diferentes fontes ou plataformas, mantendo uma interface de usuário consistente. Os proxies são comumente usados durante processos de migração de plataforma, permitindo que você adote gradualmente o Deco e decida se uma página específica deve ser proxied ou servida diretamente pelo Deco.

Para criar um proxy em vez de um redirecionamento, você pode seguir os mesmos passos mencionados acima, com algumas alterações:

Repita os passos de 1 a 5 da seção "Adicionando um Redirecionamento".
1. Na opção "Handler", selecione "Proxy Handler" (ou `$live/handlers/proxy.ts`).
2. No campo "To", insira a URL exata que deve ser usada como proxy, por exemplo, `https://deco.cx`.
3. Salve e publique as alterações.

Agora, ao acessar a rota especificada (por exemplo, `https://seu-site.deco.site/example-proxy`), você será proxied para a URL especificada (neste caso, `https://deco.cx`).