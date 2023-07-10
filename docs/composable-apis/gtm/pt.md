---
description: Aprenda como integrar o Google Tag Manager com um site deco.cx
---

## O que você aprenderá?

- Integrar o [Google Tag Manager](https://tagmanager.google.com/) com seu site
  deco.cx, permitindo a adição de tags configuradas pela interface do GTM.
- Integrar o [Google Analytics](https://analytics.google.com/) através do GTM.

## Pré-requisitos

- Um `trackingId` de um container do Google Tag Manager, formatado no estilo:
  `GTM - XXXXXX`.
  ([ajuda](https://support.rocketspark.com/hc/en-us/articles/900002470443-How-do-I-get-my-Google-Tag-Manager-Tracking-ID-or-GTM-Number-))

- _Opcional:_ Tag configurada do Google Analytics 4
  ([ajuda](https://support.google.com/tagmanager/answer/9442095?hl=en))

## Introdução

O **Google Tag Manager (GTM)** é uma ferramenta gratuita oferecida pelo Google
que permite gerenciar e implementar facilmente tags de rastreamento e códigos de
terceiros em seu site ou aplicativo. Essas tags podem incluir scripts de análise
de dados, como o Google Analytics, pixels de conversão de publicidade ou outros
códigos personalizados.

Entretanto, o uso excessivo de tags no GTM pode **prejudicar a performance de um
site** comum, uma vez que os scripts podem aumentar o tempo de carregamento das
páginas e comprometer a experiência do usuário. Por isso, a integração feita
pela deco.cx utiliza o [Partytown](https://partytown.builder.io/), que permite a
execução das tags em um service worker e melhora o tempo de carregamento da
página.

## Integrando o GTM na deco.cx

Se você criou um site na deco.cx baseado no nosso
[starter de ecommerce](https://fashion.deco.site/), ele **já tem todo o código
necessário para se integrar com o GTM**. No entanto, é necessário configurar a
section global **Analytics** adicionando a propriedade `trackingId` com o ID do
container
(https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation)
previamente configurado.

Para isso, siga os passos:

1. Abra a página **Pages** no Admin da deco.cx
2. Selecione `Global` no filtro de Status.
3. Selecione a página que com nome `Analytics`.
4. Edite a Section `Analytics`, adicionando ou editando a propriedade **Tracking
   ID** com o ID do seu container no GTM.
5. Salve a página.

Todas as páginas que utilizam esta section global, Analytics, será atualizada
automaticamente.

É isso! Para testar que está tudo funcionando, faça o seguinte:

1. Acesse seu site deco `https://<<sitename>>.deco.site`.
2. Vá até as ferramentas de desenvolvedor e acesse a aba **Network**.
3. Recarregue a página e certifique-se que o script
   `https://www.googletagmanager.com/gtm.js?id=GTM-P6D23BB` está sendo
   carregado.

## Integrando o Google Analytics 4

Se já existe uma tag do Google Analytics 4 (GA4) no container do GTM
configurado, automaticamente o seu site deco.cx já estará enviando eventos para
o GA4. Para verificar isso, acesse a aba **Network** novamente e busque por uma
requisição com o nome `collect`. Exemplo:

![Exemplo de requisição collect que envia dados para o GA4](https://user-images.githubusercontent.com/18706156/229370675-53775267-6cd5-4a88-8fe4-b5ea6f5566de.png)
_Exemplo de requisição collect que envia dados para o GA4_

> Caso não veja esse request, certifique-se que não há nenhum adblock
> configurado (ex: uBlock Origin). Alguns navegadores já integram adblocks por
> padrão.

Entretanto, caso você queira analisar suas métricas **de acordo com os testes
A/B criados na deco.cx**, é necessário fazer uma configuração extra no container
GTM. Para isso, siga os passos:

1. No GTM, entre na seção **Variáveis**.
2. Em **Variáveis definidas pelo usuário**, clique em **Criar Nova**.
3. Preencha o nome da variável com `Flags` (esse nome será utilizado
   posteriormente).
4. Clique no botão de edição para selecionar o tipo de variável e selecione
   **Javascript personalizado**.
5. Cole o seguinte código na área de texto:

```javascript
function main() {
  var flags = document.cookie
    .split(";")
    .map(function (x) {
      return x.trim().split("=");
    })
    .map(function (splitted) {
      var key = splitted[0];
      var values = splitted.slice(1);
      return [key, values.join("=")];
    })
    .filter(function (splitted) {
      return splitted[0].startsWith("dcxf");
    })
    .map(function (splitted) {
      return JSON.parse(atob(splitted[1]));
    });

  return flags.filter(function (f) {
    return f.isMatch;
  }).map(function (f) {
    return f.key;
  });
}
```

5. Clique em Salvar.

Após a variável ter sido criada, ainda é necessário associá-la à tag do Google
Analytics. Para isso, siga os passos:

1. No menu **Tags**, selecione a sua tag do GA4. (Por padrão,
   `Google Analytics GA4`).
2. Em **Configuração da tag**, clique no botão de edição.
3. Na seção **Propriedade do usuário**, clique em **Adicionar Linha**.
4. Preencha o **Nome da propriedade** com `flags` e o **Valor** com `{{Flags}}`,
   este sendo o mesmo nome da variável criada anteriormente.
5. Pronto, a integração está configurada!

![Screenshot de configuração da propriedade `flags`](https://user-images.githubusercontent.com/18706156/229370987-a2d0b82a-3b58-46ca-98b1-d7f8c2a8600d.png)
_Screenshot de configuração da propriedade `flags`_

Agora, é possível segmentar suas visualizações de acordo com os grupos de
usuário configurados na deco.cx.

## Troubleshooting

- **Uma tag que configurei não está funcionando corretamente**

Por utilizar a tecnologia de Web Workers para incluir os scripts externos,
existem algumas limitações relacionadas à CORS (Cross-origin resouce sharing).
Dependendo da tag que está sendo incluída, é possível que a requisição para
buscar um script `.js` falhe.

Para resolver esse problema, é necessário criar um **proxy de requests** na sua
loja (leia mais sobre essa solução
[aqui](https://partytown.builder.io/proxying-requests)). Como os sites deco.cx
são projetos [Fresh](https://fresh.deno.dev/) tradicionais, basta seguir os
seguintes passos para criar este proxy:

1. No seu projeto, dentro da pasta `routes/`, crie um arquivo chamado
   `proxy.ts`.
2. Cole o seguinte código neste arquivo, observando os comentários:

```ts
import { Handlers } from "$fresh/server.ts";

// Adicione aqui os scripts que você deseja proxiar
const ALLOWLIST_URLS = ["https://xxxx.collect.igodigital.com/collect.js"];

export const handler: Handlers = {
  GET: async (req) => {
    const url = (new URL(req.url)).searchParams.get("url");

    if (!url || !ALLOWLIST_URLS.includes(url)) {
      return new Response(null, { status: 404 });
    }

    const proxyRequest = new Request(
      url,
      {
        headers: req.headers,
        method: req.method,
        body: req.body,
        redirect: "follow",
      },
    );

    const response = await fetch(proxyRequest);
    const headers = new Headers(response.headers);
    headers.set("access-control-allow-origin", "*");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
```

4. Suba suas alterações de código para a branch `main`.
5. Substitua nas configurações do GTM as URLs dos scripts adicionados por
   `https://www.sualojanadeco.com.br/proxy?url={urlDoScript}`.

Por exemplo, se o script que você está tentando carregar está em
`https://xxxx.collect.igodigital.com/collect.js`, troque essa URL por
`https://www.sualojanadeco.com.br/proxy?url=https%3A%2F%2Fxxxx.collect.igodigital.com%2Fcollect.js`.
Utilize a função `encodeURIComponent` do Javascript caso seja necessário.
