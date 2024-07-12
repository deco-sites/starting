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
          pt: "Adicionando um app ao seu site",
          en: "Adding an app to your site",
        },
        slug: "getting-started/adding-an-app",
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
      { title: { pt: "Home", en: "Home" },
        slug: "cms-capabilities/home"
      },
      { title: { pt: "Content", en: "Content" },
        slug: "cms-capabilities/content",
        children: [
          { title: { pt: "Pages", en: "Pages" },
            slug: "cms-capabilities/content/pages"
          },
          { title: { pt: "Sections", en: "Sections" },
            slug: "cms-capabilities/content/sections"
          },
          { title: { pt: "Blog", en: "Blog" },
            slug: "cms-capabilities/content/blog"
          },
          { title: { pt: "Releases", en: "Releases" },
            slug: "cms-capabilities/content/releases"
          },
          { title: { pt: "Assets", en: "Assets" },
            slug: "cms-capabilities/content/assets"
          },
          { title: { pt: "Records", en: "Records" },
            slug: "cms-capabilities/content/records"
          }
        ]
      },
      { title: { pt: "Advanced", en: "Advanced" },
        slug: "cms-capabilities/advanced",
        children: [
          {
            title: { pt: "SEO (e robots)", en: "SEO (and robots)" },
            slug: "cms-capabilities/advanced/seo",
          },
          {
            title: {
              pt: "Redirects (e Proxies)",
              en: "Redirects (and Proxies)",
            },
            slug: "cms-capabilities/advanced/redirects",
          },
          {
            title: {
              pt: "Loaders",
              en: "Loaders",
            },
            slug: "cms-capabilities/advanced/loaders",
          },
          {
            title: {
              pt: "Actions",
              en: "Actions",
            },
            slug: "cms-capabilities/advanced/actions",
          },
          {
            title: {
              pt: "Segments",
              en: "Segments",
            },
            slug: "cms-capabilities/advanced/segments",
          },
          {
            title: {
              pt: "Apps",
              en: "Apps",
            },
            slug: "cms-capabilities/advanced/apps",
          },
          {
            title: {
              pt: "Experiments",
              en: "Experiments",
            },
            slug: "cms-capabilities/advanced/experiments",
          }
        ]
      },
      { title: { pt: "Management", en: "Management" },
        slug: "cms-capabilities/management",
        children: [
          
        ]
      }
    ]
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
          pt: "Editando uma section",
          en: "Editing a Section",
        },
        slug: "developing-guide/editable-sections",
      },
      {
        title: { pt: "Criando uma Section", en: "Creating a Section" },
        slug: "developing-guide/hello-world",
      },
      {
        title: {
          pt: "Interatividade com HTMX",
          en: "Interactivity with HTMX"
        },
        slug: "developing-guide/htmx",
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
          pt: "Criando um loader",
          en: "Creating a loader",
        },
        slug: "developing-guide/creating-loaders",
      }
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
      pt: "Funcionalidades de Desenvolvimento",
      en: "Development capabilities",
    },
    children: [
      {
        title: { pt: "Blocos", en: "Blocks" },
        slug: "developing-capabilities/blocks",
        children: [
          {
            title: {
              pt: "Exportando Propriedades Padrões em um Bloco",
              en: "Exporting Default Props in a Block",
            },
            slug: "developing-capabilities/blocks/exporting-default-props",
          },
          {
            title: {
              pt: "Biblioteca de blocos",
              en: "Block Library",
            },
            slug: "developing-capabilities/blocks/block-library",
          },
        ],
      },
      {
        title: { pt: "Seções", en: "Sections" },
        slug: "developing-capabilities/sections",
        children: [
          {
            title: {
              pt: "Capturando exceções nas Seções",
              en: "Section error fallback",
            },
            slug: "developing-capabilities/sections/error-fallback",
          },
          {
            title: {
              pt: "Estados de carregamento nas Seções",
              en: "Section loading fallback",
            },
            slug: "developing-capabilities/sections/loading-fallback",
          },
          {
            title: {
              pt: "Redirecionando usuários a partir de Seções",
              en: "Redirecting users from Sections",
            },
            slug: "developing-capabilities/sections/redirecting-users",
          },
          {
            title: {
              pt: "Aceitando uma Seção como parâmetro da minha Seção",
              en: "Accepting Other Sections as Parameters in Your Section",
            },
            slug: "developing-capabilities/sections/accept-a-section",
          },
        ],
      },
      {
        title: { pt: "Propriedades de Sections", en: "Section Properties" },
        slug: "developing-capabilities/section-properties/utility-types",
        children: [
          {
            title: { pt: "Tipos utilitários", en: "Utility types" },
            slug: "developing-capabilities/section-properties/utility-types",
          },
          {
            title: {
              pt: "Dados padronizados",
              en: "Standard data types",
            },
            slug: "developing-capabilities/section-properties/standard-data-types",
          },
          {
            title: { pt: "Utilização de Segredos e Senhas", en: "Using Secrets" },
            slug: "developing-capabilities/section-properties/using-secrets",
          },
          {
            title: {
              pt: "Annotations",
              en: "Annotations",
            },
            slug: "developing-capabilities/section-properties/annotations",
          },
          {
            title: {
              pt: "Widgets",
              en: "Widgets",
            },
            slug: "developing-capabilities/section-properties/widgets",
          },
        ],
      },
      {
        title: { pt: "Sections Interativas", en: "Interactive Sections" },
        slug: "developing-capabilities/interactive-sections/partial",
        children: [
          {
            title: {
              pt: "Partial",
              en: "Partial",
            },
            slug: "developing-capabilities/interactive-sections/partial",
          },
        ],
      },
      {
        title: { pt: "Loaders", en: "Loaders" },
        slug: "developing-capabilities/loaders",
      },
      {
        title: { pt: "Islands", en: "Islands" },
        slug: "developing-capabilities/islands",
        children: [
          {
            title: {
              pt: "Actions",
              en: "Actions",
            },
            slug: "developing-capabilities/islands/actions",
          },
          {
            title: {
              pt: "Carregando dados de uma API a partir do browser",
              en: "Client-side Invocation",
            },
            slug: "developing-capabilities/islands/fetching-data-client",
          },
        ]
      },
      {
        title: { pt: "Apps", en: "Apps" },
        slug: "developing-capabilities/apps",
        children: [
          {
            title: {
              pt: "Desenvolvendo Apps",
              en: "Developing Apps",
            },
            slug: "developing-capabilities/apps/creating-an-app",
          },
          {
            title: {
              pt: "Instalando Apps",
              en: "Installing Apps",
            },
            slug: "developing-capabilities/apps/making-an-app-installable",
          },
          {
            title: {
              pt: "Criando um Teste A/B",
              en: "Creating an A/B Test",
            },
            slug: "developing-capabilities/apps/ab-test",
          },
        ]
      },
      {
        title: {
          pt: "Deco Records",
          en: "Deco Records",
        },
        slug: "reference/deco-records",
      },
      {
        title: {
          pt: "Modificando o status de retorno de uma pagina",
          en: "Modifying the return status of a page",
        },
        slug: "developing-capabilities/modifying-status",
      },
      {
        title: {
          pt: "E-commerce Analytics",
          en: "E-commerce Analytics",
        },
        slug: "reference/analytics",
      },
      {
        title: { pt: "Problemas comuns", en: "Troubleshooting" },
        slug: "reference/troubleshooting",
      },
      {
        title: {
          pt: "Contribuindo",
          en: "Contributing",
        },
        slug: "reference/contributing",
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
      // TODO: Optimizing loaders
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
        slug: "sdk/feature-flags",
      },
      {
        title: {
          pt: "CMS Headless",
          en: "Headless CMS",
        },
        slug: "headless-cms",
      },
    ],
  },
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
  },
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
