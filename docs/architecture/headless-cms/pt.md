---
description: Aprenda como gerenciar um site ou aplicativo externo com a Deco
---

# Visão geral

Na deco.cx é possível criar sites e gerenciá-lo através do admin Deco. Para cada página do site, é gerado um dado estruturado em formato [JSON](https://www.json.org/) correspondente a todo o conteúdo da página.
Cada mudança feita no CMS para determinada página, reflete no JSON correspondente à ela.
Esse fluxo permite a utilização de aplicativos ou sites externos à Deco acessarem as mudanças feitas em determinado ambiente de um site (incluindo ambientes de staging).

![alt text](/docs/headless-cms/change-flow.png)

# Obtendo conteúdo do site Deco em site ou aplicativo externo

O acesso ao dado em formato JSON do conteúdo do site é feito com uma requisição simples de get à URL do site com uma queryString de `asJson`.

Utilizando o exemplo com o site do storefront, uma requisição à página inicial retorna a página pronta e utilizável:
![Home page store front](/docs/headless-cms/site.png)

Ao adicionar a query string `?asJson`, recebemos o dado estruturado correspondente ao conteúdo da página:
![JSON response on request with ?asJson query](/docs/headless-cms/asjson.png)
