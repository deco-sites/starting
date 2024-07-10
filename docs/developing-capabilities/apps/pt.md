---
description: Apps - Capacidades de Negócios para os seus Sites deco
since: 1.24.0
---

# Deco Apps

As Apps são poderosos conjuntos de capacidades de negócios que podem ser
importados e configurados em sites deco. Uma App na deco é essencialmente uma
**coleção** de vários **componentes**, como **ações**, **seções**,
**carregadores**, **fluxos de trabalho**, **manipuladores**, ou quaisquer outros
elementos deco que podem ser usados para aprimorar a funcionalidade dos seus
projetos deco.

## Visão Geral

Na deco, os Apps funcionam como blocos de construção modulares que encapsulam
recursos ou capacidades específicas. Eles permitem que os desenvolvedores
empacotem e compartilhem funcionalidades específicas do negócio em diferentes
projetos, tornando mais fácil a manutenção e a expansão dos seus sites deco.

Ao executar o comando `deno run -Ar https://deco.cx/start` no terminal, você
pode começar a desenvolver um App do zero e colocá-lo em funcionamento
rapidamente.

## Configuração da App

Cada App pode ser configurado com parâmetros específicos, tornando-o versátil e
adaptável a diferentes casos de uso. Os desenvolvedores podem importar e
configurar Apps em seus sites deco, permitindo uma integração perfeita e
personalização da funcionalidade.

## Suporte a Monorepo

Os deco Apps podem ser gerenciados em um monorepo, proporcionando um local
centralizado para armazenar e organizar vários Apps. Essa abordagem agiliza o
processo de desenvolvimento e permite um controle de versão e manutenção
eficiente dos Apps.

## Primeiros Passos

Para criar seus próprios deco Apps, siga estes passos:

1. Execute o comando `deno run -Ar https://deco.cx/start` para inicializar um
   novo deco App.
2. Defina as funcionalidades ou componentes que você deseja empacotar na app.
3. Organize as funções, seções, carregadores ou outros componentes deco dentro
   do diretório do App.
4. Configure o App para aceitar parâmetros e ser personalizável dentro do deco
   Admin.
5. Exporte o App para ser usado em outros projetos deco.

## Importando e Desinstalando Apps

Para usar um deco App no seu site deco, você pode executar os seguintes
comandos:

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

Os deco Apps fornecem um mecanismo poderoso para criar e compartilhar
capacidades de negócios reutilizáveis em seus projetos deco. Ao organizar
componentes em Apps modulares, você pode melhorar significativamente a
manutenção e a escalabilidade dos seus sites deco. Sinta-se à vontade para
explorar as Apps existentes e criar os seus próprios para agilizar o processo de
desenvolvimento e construir projetos deco robustos.

## Leitura Recomendada

- [Conceitos da deco: Entendendo Seções](/docs/pt-br/concepts/section)
- [Buscando Dados de APIs](/docs/pt-br/developing-guide/fetching-data)
- [Invocação de Funções no Lado do Cliente](/docs/pt-br/developing-capabilities/islands/fetching-data-client)
