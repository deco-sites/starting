---
description: |
  Como configurar meta-tags e media sharing no admin
---

O SEO (Search Engine Optimization) representa um conjunto de ações feitas ao
site para facilitar sua busca e indexação por robôs, especialmente de busca.
Nesta página configuramos parte desses elementos (meta-tags) que são utilizados
pelos buscadores, mas também por sistemas para geração da visualização de links
compartilhados.

Nesta edição, é possível configurar alterações que serão aplicadas a todo o
site.

<img width="640" alt="Configuração de SEO" src="/docs/cms-capabilities/seo/seo1.png">

Fique atento a algumas das configurações disponíveis para configuração do título
da página:

- Title: Título do site
- Title template: Base para títulos criados dinamicamentes por outros
  componentes (no `app` de ecommerce, temos os blocos `SEOPLP` e `SEOPDP`)

E a configuração se o site deve, ou não, ser indexado (`Disable indexing`).

## Configurando SEO de uma página

Apesar da configuração global de SEO, é possível especializar o SEO de uma
página específica. Para isto, é preciso entrar na edição da página, e listar as
propriedades de SEO da página.

## Sitemap

O sitemap da deco é gerado automaticamente a partir da listagem de páginas.
Sites de ecommerce processam o sitemap recebido do backend para gerar um sitemap
válido.

## Robots.txt

O `robots.txt` representa um arquivo padrão usado por bots na internet para
definir como devem processar o seu site.

Para isto, é possível editar o arquivo no próprio admin:

<img width="320" alt="Robots.txt" src="/docs/cms-capabilities/seo/seo2.png">

O robots segue um formato bem definido e que deve ser respeitado para permitir o
processamento adequado do seu site.

```
User-agent: AIBadBot
Disallow: /

User-agent: Googlebot
Allow: /

User-agent: NomeDoBot
User-agent: NomeDoBot2
Disallow: /
Allow: /cgi-bin
Allow: /institucional
```

Cada diretiva (conjunto de regras para um bot), é feita por um (ou mais)
`User-agent`s, pelo menos uma regra de `allow` ou `disallow`, e outras regras
opcionais (a depender do bot).

Os valores para essas regras podem incluir `*` para representar todos ou
qualquer conjunto de bots ou paths.

> Com o crescimento de bots de AI generativas, nós não recomendamos liberar por
> padrão o acesso para qualquer bot e qualquer path. Uma configuração ideal:

> - para os buscadores (como google/bing/etc): liberar ao acesso a todos os
>   paths, com algumas exceções
> - para todos os bots, barrar tudo exceto paths bem precisos ou orientados a
>   AI, como páginas institucionais, ou mesmo pratileiras ou catalogos de
>   produtos representativos para a AI
