import { join } from "https://deno.land/std@0.190.0/path/mod.ts";

type LocalizedTitle = { pt?: string; en?: string };
type Entry = { title: LocalizedTitle; slug?: string };
type TopLevelEntry = Entry & { children?: Array<TopLevelEntry> };

type TableOfContents = Array<TopLevelEntry>;

const tableOfContents: TableOfContents = [
  {
    title: { pt: "Visão Geral", en: "Overview" },
    slug: "overview",
  },
  {
    title: { pt: "Comece agora", en: "Getting Started" },
    children: [
      {
        title: { pt: "Criando um Site", en: "Creating a Site" },
        slug: "getting-started/creating-a-site",
      },
      {
        title: { pt: "Criando uma nova Página", en: "Creating a new Page" },
        slug: "getting-started/creating-a-new-page",
      },
      {
        title: {
          pt: "Gerenciando mudanças e publicando",
          en: "Managing changes and publishing",
        },
        slug: "getting-started/changes-and-publishing",
      },
      {
        title: {
          pt: "Adicionando um blog ao seu site",
          en: "Adding a blog to your site",
        },
        slug: "getting-started/adding-a-blog",
      },
      {
        title: {
          pt: "Adicionando domínios próprios",
          en: "Adding custom domains",
        },
        slug: "getting-started/custom-domains",
        children: [
          {
            title: {
              pt: "Como redirecionar domínio sem wwww",
              en: "How to redirect domain without www",
            },
            slug: "getting-started/custom-domains/apex-domains",
          },
        ],
      },
    ],
  },
  {
    title: { pt: "Funcionalidades do CMS", en: "CMS capabilities" },
    children: [
      {
        title: { pt: "Atualizando o SEO", en: "Updating SEO" },
        slug: "cms-capabilities/updating-seo",
      },
      {
        title: {
          pt: "Segmentação de Conteúdo",
          en: "Segmenting Content with Variants",
        },
        slug: "cms-capabilities/variants",
      },
      {
        title: {
          pt: "Criando Redirecionamentos e Proxies",
          en: "Adding Proxies and Redirects",
        },
        slug: "cms-capabilities/proxy-redirects",
      },
    ],
  },
  {
    title: {
      pt: "Guia de Desenvolvimento",
      en: "Developing guide",
    },
    children: [
      {
        title: { pt: "Configuração do ambiente", en: "Environment setup" },
        slug: "developing-guide/setup",
      },
      {
        title: {
          pt: "Tornando uma Seção configurável",
          en: "Making Sections editable",
        },
        slug: "developing-guide/editable-sections",
      },
      {
        title: { pt: "Criando uma Section", en: "Creating a Section" },
        slug: "developing-guide/hello-world",
      },
      {
        title: {
          pt: "Exportando Propriedades Padrões em um Bloco",
          en: "Exporting Default Props in a Block",
        },
        slug: "developing-guide/exporting-default-props",
      },
      {
        title: {
          pt: "Adicionando interatividade em uma página",
          en: "Client-side interactivity",
        },
        slug: "developing-guide/islands",
      },
      {
        title: {
          pt: "Tematizando uma Seção",
          en: "Making a Section Themeable",
        },
        slug: "developing-guide/themeable-section",
      },
      {
        title: {
          pt: "Carregando dados de uma API",
          en: "Fetching data from APIs",
        },
        slug: "developing-guide/fetching-data",
      },
      {
        title: {
          pt: "Carregando dados de uma API a partir do browser",
          en: "Client-side Invocation",
        },
        slug: "developing-guide/fetching-data-client",
      },
      {
        title: {
          pt: "Capturando exceções nas Seções",
          en: "Section error fallback",
        },
        slug: "developing-guide/error-fallback",
      },
      {
        title: {
          pt: "Estados de carregamento nas Seções",
          en: "Section loading fallback",
        },
        slug: "developing-guide/loading-fallback",
      },
      {
        title: {
          pt: "Redirecionando usuários a partir de Seções",
          en: "Redirecting users from Sections",
        },
        slug: "developing-guide/redirecting-users",
      },
      {
        title: {
          pt: "Aceitando uma Seção como parâmetro da minha Seção",
          en: "Accepting Other Sections as Parameters in Your Section",
        },
        slug: "developing-guide/accept-a-section",
      },
      {
        title: {
          pt: "Desenvolvendo Apps",
          en: "Developing Apps",
        },
        slug: "developing-guide/creating-an-app",
      },
      {
        title: { pt: "Utilização de Segredos e Senhas", en: "Using Secrets" },
        slug: "developing-guide/using-secrets",
      },
      {
        title: {
          pt: "Instalando Apps",
          en: "Installing Apps",
        },
        slug: "developing-guide/making-an-app-installable",
      },
      {
        title: {
          pt: "Partial",
          en: "Partial",
        },
        slug: "developing-guide/partial",
      },
      {
        title: {
          pt: "Modificando o status de retorno de uma pagina",
          en: "Modifying the return status of a page",
        },
        slug: "developing-guide/modifying-status",
      },
      {
        title: {
          pt: "Criando um Teste A/B",
          en: "Creating an A/B Test",
        },
        slug: "developing-guide/ab-test",
      },
    ],
  },
  {
    title: {
      pt: "Decopilot",
      en: "Decopilot",
    },
    children: [
      {
        title: {
          pt: "Como acessar",
          en: "How to access",
        },
        slug: "decopilot/how-to-access",
      },
      {
        title: {
          pt: "Assistente",
          en: "Assistant",
        },
        slug: "decopilot/assistant",
      },
    ],
  },
  {
    title: {
      pt: "Funcionalidades de Desenvolvimento",
      en: "Development capabilities",
    },
    children: [
      {
        title: { pt: "Problemas comuns", en: "Troubleshooting" },
        slug: "reference/troubleshooting",
      },
      {
        title: { pt: "Tipos utilitários", en: "Utility types" },
        slug: "reference/utility-types",
      },
      {
        title: {
          pt: "Contribuindo",
          en: "Contributing",
        },
        slug: "reference/contributing",
      },
      {
        title: {
          pt: "E-commerce Analytics",
          en: "E-commerce Analytics",
        },
        slug: "reference/analytics",
      },
      {
        title: {
          pt: "Annotations",
          en: "Annotations",
        },
        slug: "reference/annotations",
      },
      {
        title: {
          pt: "Widgets",
          en: "Widgets",
        },
        slug: "reference/widgets",
      },
      {
        title: {
          pt: "Dados padronizados",
          en: "Standard data types",
        },
        slug: "composable-uis/standard-data-types",
      },
      {
        title: {
          pt: "Biblioteca de blocos",
          en: "Block Library",
        },
        slug: "composable-uis/block-library",
      },
      {
        title: {
          pt: "E-commerce",
          en: "E-commerce",
        },
        slug: "composable-uis/ecommerce",
      },

      {
        title: {
          pt: "Deco Records",
          en: "Deco Records",
        },
        slug: "reference/deco-records",
      },
    ],
  },
  {
    title: {
      pt: "Performance",
      en: "Performance",
    },
    children: [
      {
        title: {
          pt: "Porque performance importa",
          en: "Why web performance matters",
        },
        slug: "performance/why",
      },
      {
        title: {
          pt: "O guia deco para performance",
          en: "Deco performance guide",
        },
        slug: "performance/guide",
      },
      /*
      {
        title: {
          pt: "Teste local de performance",
          en: "Performance local test",
        },
        slug: "performance/testing/local",
      },
      {
        title: {
          pt: "Teste de pagespeed",
          en: "Pagespeed test",
        },
        slug: "performance/testing/pagespeed",
      },
      {
        title: {
          pt: "Teste de métricas deco",
          en: "Deco metrics performance tests",
        },
        slug: "performance/testing/decometrics",
      },
      {
        title: {
          pt: "Teste do Core Web Vitals",
          en: "Core Web Vitals test",
        },
        slug: "performance/testing/cwv",
      },
      */
      {
        title: {
          pt: "Otimizando CSS",
          en: "Optimizing CSS",
        },
        slug: "performance/medias/css",
      },
      {
        title: {
          pt: "Otimizando imagens",
          en: "Optimizing images",
        },
        slug: "performance/medias/images",
      },
      {
        title: {
          pt: "Otimizando SVG através de sprites",
          en: "Optimizing SVG via sprites",
        },
        slug: "performance/medias/svg-sprites",
      },
      {
        title: {
          pt: "Otimizando fontes",
          en: "Optimizing fonts",
        },
        slug: "performance/medias/fonts",
      },
      {
        title: {
          pt: "Otimizando scripts de terceiros",
          en: "Optimizing 3rd party scripts",
        },
        slug: "performance/lazy-3rd-party-scripts",
      },
      {
        title: {
          pt: "Otimizando Loaders",
          en: "Optimizing Loaders",
        },
        slug: "performance/loaders",
      },
      {
        title: {
          pt: "Otimizando Ilhas",
          en: "Optimizing Islands",
        },
        slug: "performance/islands",
      },
    ],
  },
  {
    title: {
      pt: "Funcionalidades da Plataforma",
      en: "Platform capabilities",
    },
    children: [
      {
        title: {
          pt: "Teste A/B",
          en: "A/B Test",
        },
        slug: "sdk/ab-test",
      },
      {
        title: {
          pt: "Feature Flags",
          en: "Feature Flags",
        },
        slug: "sdk/feature-flags"
      },
      {
        title: {
          pt: "CMS Headless",
          en: "Headless CMS",
        },
        slug: "headless-cms",
      }
    ]
  },
  /*
  {
    title: {
      pt: "Deco Hub",
      en: "Deco Hub",
    },
    children: [
      {
        title: {
          pt: "NuvemShop",
          en: "NuvemShop",
        },
        slug: "composable-apis/nuvemshop",
      },
      {
        title: {
          pt: "Shopify",
          en: "Shopify",
        },
        slug: "composable-apis/shopify",
      },
      {
        title: {
          pt: "VNDA.",
          en: "VNDA.",
        },
        slug: "composable-apis/vnda",
      },
      {
        title: {
          pt: "VTEX",
          en: "VTEX",
        },
        slug: "composable-apis/vtex",
      },
      {
        title: {
          pt: "GTM",
          en: "GTM",
        },
        slug: "composable-apis/gtm",
      },
      {
        title: {
          pt: "Criando um novo app",
          en: "Creating a new app",
        },
        slug: "hub/create-new",
      },
    ],
  },
  {
    title: {
      pt: "Treinamento Comercial",
    },
    children: [
      {
        title: {
          pt: "Introdução",
        },
        slug: "treinamento-comercial/introducao",
      },
      {
        title: {
          pt: "Agenda",
        },
        slug: "treinamento-comercial/agenda",
      },
      {
        title: {
          pt: "Diagnóstico Inicial",
        },
        slug: "treinamento-comercial/diagnostico-inicial",
      },
      {
        title: {
          pt: "Sales Deck",
        },
        slug: "treinamento-comercial/sales-deck",
      },
      {
        title: {
          pt: "Q&A Comercial",
        },
        slug: "treinamento-comercial/qa-comercial",
      },
      {
        title: {
          pt: "Produto",
        },
        slug: "treinamento-comercial/produto",
      },
      {
        title: {
          pt: "Headless & Composable",
        },
        slug: "treinamento-comercial/headless-composable",
      },
      {
        title: {
          pt: "Web Performance",
        },
        slug: "treinamento-comercial/web-performance",
      },
      {
        title: {
          pt: "Agências Parceiras",
        },
        slug: "treinamento-comercial/agencias-parceiras",
      },
      {
        title: {
          pt: "Nichos de Clients",
        },
        slug: "treinamento-comercial/nichos-de-clientes",
      },
      {
        title: {
          pt: "Objeções",
        },
        slug: "treinamento-comercial/objecoes",
      },
      {
        title: {
          pt: "Seu Primeiro Case",
        },
        slug: "treinamento-comercial/seu-primeiro-case",
      },
      {
        title: {
          pt: "Próximos Passos",
        },
        slug: "treinamento-comercial/proximos-passos",
      },
    ],
  },*/
  {
    title: {
      pt: "Referência da API",
      en: "API Reference",
    },
    children: [
      {
        title: {
          pt: "useSection",
          en: "useSection",
        },
        slug: "api-reference/use-section",
      },
      {
        title: {
          pt: "useScript",
          en: "useScript",
        },
        slug: "api-reference/use-script",
      },
    ],
  }
];

if (import.meta.main) {
  for (const content of tableOfContents) {
    if (content.slug) {
      const path = `./${content.slug}`;
      const stat: { isDirectory: boolean } = await Deno.stat(path).catch(
        (_) => ({ isDirectory: false }),
      );
      let isCreated = false;
      if (!stat.isDirectory) {
        isCreated = await Deno.mkdir(path)
          .then(() => true)
          .catch(() => false);
      }
      if (!content.children && !isCreated) {
        await Promise.all([
          Deno.create(`${join(path, "en.md")}`),
          Deno.create(`${join(path, "pt.md")}`),
        ]);
        await Deno.writeTextFile(
          join(path, "en.md"),
          `---
description: TODO
since: 1.0.0
---`,
        );
        await Deno.writeTextFile(
          join(path, "pt.md"),
          `---
description: TODO
since: 1.0.0
---`,
        );
        continue;
      }
    } else if (content.children) {
      for (const children of content.children) {
        const path = `./${children.slug}`;
        const stat: { isDirectory: boolean } = await Deno.stat(path).catch(
          (_) => ({ isDirectory: false }),
        );
        if (!stat.isDirectory) {
          if (
            await Deno.mkdir(path, { recursive: true })
              .then(() => true)
              .catch(() => false)
          ) {
            await Promise.all([
              Deno.create(`${join(path, "en.md")}`),
              Deno.create(`${join(path, "pt.md")}`),
            ]);

            await Deno.writeTextFile(
              join(path, "en.md"),
              `---
description: TODO
since: 1.0.0
---`,
            );
            await Deno.writeTextFile(
              join(path, "pt.md"),
              `---
description: TODO
since: 1.0.0
---`,
            );
          }
        }
      }
    }
  }
}

const tableOfContentsBySlug = tableOfContents.reduce((acc, cur) => {
  return addEntriesToAccumulator(acc, cur);
}, {} as Record<string, TopLevelEntry>);

function addEntriesToAccumulator(
  acc: Record<string, TopLevelEntry>,
  entry: TopLevelEntry,
) {
  if (entry.slug) {
    acc[entry.slug] = entry;
  }
  if (entry.children) {
    entry.children.forEach((child: TopLevelEntry) =>
      addEntriesToAccumulator(acc, child)
    );
  }
  return acc;
}

export const getMenuDataForLanguage = (language: "en" | "pt") =>
  tableOfContents.map(({ title, slug, children }) => ({
    title: title[language],
    href: children
      ? `/docs/${language}/${children[0].slug}`
      : `/docs/${language}/${slug}`,
    children: children?.map(({ title, slug }) => ({
      title: title[language],
      href: `/docs/${language}/${slug}`,
    })),
  }));

export type SupportedLanguages = "en" | "pt";

export const getTitleForPost = (language: SupportedLanguages, slug: string) => {
  return tableOfContentsBySlug[slug]?.title[language];
};

type NextOrPrevious = { title?: string; category?: string; href?: string };

const getNextPreviousForEntry = (
  language: SupportedLanguages,
  entry: TopLevelEntry,
): NextOrPrevious => ({
  href: `/docs/${language}/${entry.slug}`,
  title: entry.title?.[language],
});

export const getNextAndPreviousPost = (
  language: SupportedLanguages,
  slug: string,
) => {
  const tableOfContentsEntries = tableOfContents.reduce((entries, cur) => {
    return entries.concat(
      [cur, ...(cur.children || [])].filter(({ slug }) => slug),
    );
  }, [] as TopLevelEntry[]);

  const currentIndex = tableOfContentsEntries.findLastIndex(
    ({ slug: currentSlug }) => currentSlug && slug.includes(currentSlug),
  );

  const previous = currentIndex === 0 ? undefined : getNextPreviousForEntry(
    language,
    tableOfContentsEntries[currentIndex - 1],
  );

  const next = currentIndex === tableOfContentsEntries.length - 1
    ? undefined
    : getNextPreviousForEntry(
      language,
      tableOfContentsEntries[currentIndex + 1],
    );

  return {
    previous,
    next,
  };
};
export type MenuData = ReturnType<typeof getMenuDataForLanguage>;

export default tableOfContents;
