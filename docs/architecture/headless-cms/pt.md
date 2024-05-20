---
description: Aprenda como gerenciar um site ou aplicativo externo com a Deco
---

# Visão geral

Na deco.cx, oferecemos a funcionalidade de criar e gerenciar sites de forma intuitiva por meio do admin Deco. Cada página do seu site é representada por um conjunto de dados estruturados no formato JSON, que captura todo o conteúdo presente nessa página. Todas as alterações feitas no sistema de gerenciamento de conteúdo (CMS) para uma página específica são imediatamente refletidas no JSON correspondente a essa página. Esse processo de atualização em tempo real permite que aplicativos ou sites externos à plataforma Deco acessem e incorporem essas mudanças, possibilitando uma integração fluida entre diferentes sistemas e ambientes, incluindo ambientes de teste (staging) e produção.

O fluxo de atualização é ilustrado no diagrama abaixo:

![alt text](/docs/headless-cms/change-flow.png)

# Obtendo conteúdo do site Deco em site ou aplicativo externo

Para acessar o conteúdo do seu site Deco em formato JSON a partir de um site ou aplicativo externo, você pode utilizar uma requisição GET simples à URL do site, incluindo uma queryString `asJson`.

Por exemplo, ao acessar a página inicial do seu site de comércio, você verá a página totalmente renderizada e pronta para uso, com todos os elementos visuais e interativos:

![Home page store front](/docs/headless-cms/site.png)

No entanto, se você deseja acessar apenas os dados estruturados da página para utilizá-los em um contexto diferente, como um aplicativo móvel ou uma integração com outro sistema, basta adicionar a query string ?asJson à URL. Isso resultará em uma resposta JSON contendo os dados estruturados correspondentes ao conteúdo da página, permitindo uma fácil integração e manipulação desses dados em seu aplicativo externo:

![JSON response on request with ?asJson query](/docs/headless-cms/asjson.png)

Essa abordagem de "cabeça sem corpo" (headless) do CMS Deco oferece flexibilidade e poder, permitindo que você reutilize o conteúdo do seu site em uma variedade de contextos e plataformas.
