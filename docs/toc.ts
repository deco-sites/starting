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
        title: { pt: "Atualizando o SEO", en: "Updating SEO" },
        slug: "getting-started/updating-seo",
      },
      {
        title: { pt: "Criando uma nova Página", en: "Creating a new Page" },
        slug: "getting-started/creating-a-new-page",
      }, // TODO
      // {
      //   title: { pt: "Reusando Seções", en: "Reusing Sections" },
      //   slug: "getting-started/reusing-sections",
      // },
      {
        title: {
          pt: "Segmentação de Conteúdo",
          en: "Segmenting Content with Variants",
        },
        slug: "getting-started/variants",
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
      {
        title: {
          pt: "Criando Redirecionamentos e Proxies",
          en: "Adding Proxies and Redirects",
        },
        slug: "getting-started/proxy-redirects",
      },
      {
        title: {
          pt: "Criando rascunhos e Restaurando versões",
          en: "Creating drafts and Restoring versions",
        },
        slug: "getting-started/releases-revisions",
      },
      {
        title: {
          pt: "Instalando Apps",
          en: "Installing Apps",
        },
        slug: "getting-started/installing-an-app",
      },
    ],
  },
  {
    title: {
      pt: "Conceitos",
      en: "Concepts",
    },
    children: [
      {
        title: {
          pt: "Block",
          en: "Block",
        },
        slug: "concepts/block",
      },
      {
        title: {
          pt: "Section",
          en: "Section",
        },
        slug: "concepts/section",
      },
      {
        title: {
          pt: "Loader",
          en: "Loader",
        },
        slug: "concepts/loader",
      },
      {
        title: {
          pt: "Action",
          en: "Action",
        },
        slug: "concepts/action",
      },
      {
        title: {
          pt: "Page",
          en: "Page",
        },
        slug: "concepts/page",
      },
      {
        title: {
          pt: "Matcher",
          en: "Matcher",
        },
        slug: "concepts/matcher",
      },
      {
        title: {
          pt: "Segment",
          en: "Segment",
        },
        slug: "concepts/segment",
      },
      {
        title: {
          pt: "App",
          en: "App",
        },
        slug: "concepts/app",
      },
    ],
  },
  {
    title: {
      pt: "Desenvolvendo novas funcionalidades",
      en: "Developing new capabilities",
    },
    children: [
      {
        title: { pt: "Configuração do ambiente", en: "Environment setup" },
        slug: "developing/setup",
      },
      {
        title: {
          pt: "Tornando uma Seção configurável",
          en: "Making Sections editable",
        },
        slug: "developing/editable-sections",
      },
      {
        title: { pt: "Criando uma Section", en: "Creating a Section" },
        slug: "developing/hello-world",
      },
      {
        title: {
          pt: "Adicionando interatividade em uma página",
          en: "Client-side interactivity",
        },
        slug: "developing/islands",
      },
      {
        title: {
          pt: "Tematizando uma Seção",
          en: "Making a Section Themeable",
        },
        slug: "developing/themeable-section",
      },
      {
        title: {
          pt: "Carregando dados de uma API",
          en: "Fetching data from APIs",
        },
        slug: "developing/fetching-data",
      },
      {
        title: {
          pt: "Carregando dados de uma API a partir do browser",
          en: "Client-side Invocation",
        },
        slug: "developing/fetching-data-client",
      },
      {
        title: {
          pt: "Capturando exceções nas Seções",
          en: "Section error fallback",
        },
        slug: "developing/error-fallback",
      },
      {
        title: {
          pt: "Estados de carregamento nas Seções",
          en: "Section loading fallback",
        },
        slug: "developing/loading-fallback",
      },
      {
        title: {
          pt: "Redirecionando usuários a partir de Seções",
          en: "Redirecting users from Sections",
        },
        slug: "developing/redirecting-users",
      },
      {
        title: {
          pt: "Aceitando uma Seção como parâmetro da minha Seção",
          en: "Accepting Other Sections as Parameters in Your Section",
        },
        slug: "developing/accept-a-section",
      },
      {
        title: {
          pt: "Desenvolvendo Apps",
          en: "Developing Apps",
        },
        slug: "developing/creating-an-app",
      },
      {
        title: { pt: "Utilização de Segredos e Senhas", en: "Using Secrets" },
        slug: "developing/using-secrets",
      },
      {
        title: {
          pt: "Instalando Apps",
          en: "Installing Apps",
        },
        slug: "developing/making-an-app-installable",
      },
      {
        title: {
          pt: "Partial",
          en: "Partial",
        },
        slug: "developing/partial",
      },
      {
        title: {
          pt: "Modificando o status de retorno de uma pagina",
          en: "Modifying the return status of a page",
        },
        slug: "developing/modifying-status",
      },
      {
        title: {
          pt: "Criando um Teste A/B",
          en: "Creating an A/B Test",
        },
        slug: "developing/ab-test",
      },
      {
        title: {
          pt: "Criando um Teste A/B Headless",
          en: "Creating an Headless A/B Test ",
        },
        slug: "developing/headless-ab-test",
      },
    ],
  },
  {
    title: {
      pt: "Referência",
      en: "Reference",
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
      */
      {
        title: {
          pt: "Teste do Core Web Vitals",
          en: "Core Web Vitals test",
        },
        slug: "performance/testing/cwv",
      },
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
      pt: "Criando componentes reutilizáveis",
      en: "Creating composable UIs",
    },
    children: [
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
    ],
  },
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
  /*{
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
