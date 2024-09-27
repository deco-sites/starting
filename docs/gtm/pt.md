---
description: Aprenda como configurar o GTM na Deco
---

Adicionar o Google Tag Manager (GTM) é uma prática comum em muitos sites. A
plataforma deco.cx oferece uma section que facilita a integração automática do
GTM ao seu site. No entanto, é importante notar que o uso de um GTM com muitos
scripts pode impactar negativamente a experiência de navegação e desempenho do
site.

## Adicionando uma Section Global para Carregamento no Site

Uma boa prática é adicionar a section que carrega o script GTM em todas as
páginas do site. Isso pode ser feito utilizando sections globais, que são
carregadas automaticamente em todas as páginas geradas no admin. No caso de
páginas proxied, é necessário inserir o script diretamente na origem.

Comece selecionando o app do site:

![Selecionando o app do site](/docs/gtm/select-app.png)

Em seguida, localize as propriedades das sections globais:

![Sections Globais](/docs/gtm/global-sections.png)

Por fim, adicione a section de Analytics:

![Adicionando section de Analytics](/docs/gtm/add-analytics.png)

## Configurando sua Section

A section padrão de Analytics oferece várias opções de configuração. Se você já
tem o ID do container GTM, basta inseri-lo no campo "Tracking ID" para ativar o
uso no site. Se estiver utilizando um Measurement ID, também pode configurar
essa propriedade.

Além disso, é possível configurar fontes (sources) personalizadas para o site.

![Configurando sua section](/docs/gtm/configure-your-section.png)

## Configurando um GTM por Página

Também existe a opção de adicionar a section de Analytics em páginas
específicas. Dessa forma, cada página pode ter seu próprio GTM, permitindo o uso
de diferentes configurações para diferentes seções do site.
