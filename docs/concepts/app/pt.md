---
description: Apps - Capacidades de Negócios para os seus Sites Deco
since: 1.24.0
---

# Deco Apps

Os Deco Apps são poderosos conjuntos de capacidades de negócios que podem ser importados e configurados em sites Deco. Um App no Deco é essencialmente uma **coleção** de vários **componentes**, como **ações**, **seções**, **carregadores**, **fluxos de trabalho**, **manipuladores**, ou quaisquer outros elementos Deco que podem ser usados para aprimorar a funcionalidade dos seus projetos Deco.

## Visão Geral

No Deco, os Apps funcionam como blocos de construção modulares que encapsulam recursos ou capacidades específicas. Eles permitem que os desenvolvedores empacotem e compartilhem funcionalidades específicas do negócio em diferentes projetos, tornando mais fácil a manutenção e a expansão dos seus sites Deco.

Ao executar o comando `deno run -A https://deco.cx/init` no terminal, você pode começar a desenvolver um App do zero e colocá-lo em funcionamento rapidamente.

## Configuração do App

Cada App pode ser configurado com parâmetros específicos, tornando-o versátil e adaptável a diferentes casos de uso. Os desenvolvedores podem importar e configurar Apps em seus sites Deco, permitindo uma integração perfeita e personalização da funcionalidade.

## Suporte a Monorepo

Os Deco Apps podem ser gerenciados em um monorepo, proporcionando um local centralizado para armazenar e organizar vários Apps. Essa abordagem agiliza o processo de desenvolvimento e permite um controle de versão e manutenção eficiente dos Apps.

## Primeiros Passos

Para criar seus próprios Deco Apps, siga estes passos:

1. Execute o comando `deno run -A https://deco.cx/init` para inicializar um novo Deco App.
2. Defina as funcionalidades ou componentes que você deseja empacotar no App.
3. Organize as funções, seções, carregadores ou outros componentes Deco dentro do diretório do App.
4. Configure o App para aceitar parâmetros e ser personalizável dentro do Deco Admin.
5. Exporte o App para ser usado em outros projetos Deco.

## Importando e Desinstalando Apps

Para usar um Deco App no seu site Deco, você pode executar os seguintes comandos:

1. Para instalar o App:

   ```sh
   deno task install $APP_URL
   ```

   Substitua `$APP_URL` pelo local do diretório ou URL HTTP do App.

2. Para desinstalar o App:

   ```sh
   deno task uninstall $APP_URL
   ```

   Substitua `$APP_URL` pelo local do diretório ou URL HTTP do App.

## Observação

Os Deco Apps fornecem um mecanismo poderoso para criar e compartilhar capacidades de negócios reutilizáveis em seus projetos Deco. Ao organizar componentes em Apps modulares, você pode melhorar significativamente a manutenção e a escalabilidade dos seus sites Deco. Sinta-se à vontade para explorar as Apps existentes e criar os seus próprios para agilizar o processo de desenvolvimento e construir projetos Deco robustos.

## Leitura Recomendada

- [Conceitos do Deco: Entendendo Seções](/docs/pt-br/concepts/section)
- [Buscando Dados de APIs](/docs/pt-br/developing/fetching-data)
- [Invocação de Funções no Lado do Cliente](/docs/pt-br/developing/fetching-data-client)
