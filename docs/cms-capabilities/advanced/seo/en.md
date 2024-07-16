---
description: |
  How to configure meta-tags and media sharing in the admin
---

SEO (Search Engine Optimization) represents a set of actions taken on a website
to facilitate its search and indexing by robots, especially search engines. On
this page, we configure some of these elements (meta-tags) that are used by
search engines, but also by systems for generating the visualization of shared
links.

In this edition, it is possible to configure changes that will be applied to the
entire site.

<img width="640" alt="SEO Configuration" src="/docs/cms-capabilities/seo/seo1.png">

Pay attention to some of the available settings for configuring the page title:

- Title: Site title
- Title template: Base for dynamically created titles by other components (in
  the ecommerce `app`, we have the `SEOPLP` and `SEOPDP` blocks)

And the configuration of whether the site should be indexed or not
(`Disable indexing`).

## Configuring SEO for a page

Despite the global SEO configuration, it is possible to specialize the SEO for a
specific page. To do this, you need to enter the page's edit mode and list the
SEO properties of the page.

## Sitemap

The deco sitemap is automatically generated from the page listing. Ecommerce
sites process the sitemap received from the backend to generate a valid sitemap.

## Robots.txt

The `robots.txt` represents a standard file used by bots on the internet to
define how they should process your site.

To do this, it is possible to edit the file in the admin itself:

<img width="320" alt="Robots.txt" src="/docs/cms-capabilities/seo/seo2.png">

The robots file follows a well-defined format that must be respected to allow
proper processing of your site.

```
User-agent: AIBadBot
Disallow: /

User-agent: Googlebot
Allow: /

User-agent: BotName
User-agent: BotName2
Disallow: /
Allow: /cgi-bin
Allow: /institutional
```

Each directive (a set of rules for a bot) is made up of one (or more)
`User-agent`s, at least one `allow` or `disallow` rule, and other optional rules
(depending on the bot).

The values for these rules can include `*` to represent all or any set of bots
or paths.

> With the growth of generative AI bots, we do not recommend granting access to
> any bot and any path by default. An ideal configuration:

> - for search engines (like google/bing/etc): allow access to all paths, with
>   some exceptions
> - for all bots, block everything except very specific or AI-oriented paths,
>   such as institutional pages, or even representative product shelves or
>   catalogs for AI.
