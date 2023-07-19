import { join } from "https://deno.land/std@0.190.0/path/mod.ts";

type LocalizedTitle = { pt?: string; en?: string };
type Entry = { title: LocalizedTitle; slug?: string };
type TopLevelEntry = Entry & { children?: Array<Entry> };

type TableOfContents = Array<TopLevelEntry>;

const tableOfContents: TableOfContents = [{
  title: { pt: "Visão Geral", en: "Overview" },
  slug: "overview",
}, {
  title: { pt: "Comece agora", en: "Getting Started" },
  children: [{
    title: { pt: "Criando um Site", en: "Creating a Site" },
    slug: "getting-started/creating-a-site",
  }, {
    title: { pt: "Atualizando o SEO", en: "Updating SEO" },
    slug: "getting-started/loader",
  }, {
    title: { pt: "Criando nova uma Página", en: "Creating a new Page" },
    slug: "getting-started/creating-a-new-page",
  }, {
    title: { pt: "Reusando Seções", en: "Reusing Sections" },
    slug: "getting-started/reusing-sections",
  }, {
    title: {
      pt: "Segmentação de Conteúdo",
      en: "Segmenting Content with Variants",
    },
    slug: "getting-started/variants",
  }, {
    title: {
      pt: "Adicionando domínios próprios",
      en: "Adding custom domains",
    },
    slug: "getting-started/custom-domains",
  }, {
    title: {
      pt: "Criando Redirecionamentos e Proxies",
      en: "Adding Proxies and Redirects",
    },
    slug: "getting-started/proxy-redirects",
  }, {
    title: {
      pt: "Restaurando versões",
      en: "Restoring versions",
    },
    slug: "getting-started/releases-revisions",
  }],
}, {
  title: {
    pt: "Conceitos",
    en: "Concepts",
  },
  children: [{
    title: {
      pt: "Block",
      en: "Block",
    },
    slug: "concepts/block",
  }, {
    title: {
      pt: "Section",
      en: "Section",
    },
    slug: "concepts/section",
  }, {
    title: {
      pt: "Loader",
      en: "Loader",
    },
    slug: "concepts/loader",
  }, {
    title: {
      pt: "Action",
      en: "Action",
    },
    slug: "concepts/action",
  }, {
    title: {
      pt: "Page",
      en: "Page",
    },
    slug: "concepts/page",
  }, {
    title: {
      pt: "Matcher",
      en: "Matcher",
    },
    slug: "concepts/matcher",
  }, {
    title: {
      pt: "Segment",
      en: "Segment",
    },
    slug: "concepts/segment",
  }],
}, {
  title: {
    pt: "Desenvolvendo novas funcionalidades",
    en: "Developing new capabilities",
  },
  children: [{
    title: { pt: "Configuração do ambiente", en: "Environment setup" },
    slug: "developing/setup",
  }, {
    title: {
      pt: "Tornando uma Seção configurável",
      en: "Making Sections editable",
    },
    slug: "developing/editable-sections",
  }, {
    title: { pt: "Criando uma Section", en: "Creating a Section" },
    slug: "developing/hello-world",
  }, {
    title: {
      pt: "Adicionando interatividade em uma página",
      en: "Client-side interactivity",
    },
    slug: "developing/islands",
  }, {
    title: {
      pt: "Tematizando uma Seção",
      en: "Making a Section Themeable",
    },
    slug: "developing/themeable-section",
  }, {
    title: {
      pt: "Carregando dados de uma API",
      en: "Fetching data from APIs",
    },
    slug: "developing/fetching-data",
  }, {
    title: {
      pt: "Carregando dados de uma API a partir do browser",
      en: "Client-side Invocation",
    },
    slug: "developing/fetching-data-client",
  }, {
    title: {
      pt: "Capturando exceções nas Seções",
      en: "Sections error boundaries",
    },
    slug: "developing/error-boundaries",
  }, {
    title: {
      pt: "Redirecionando usuários a partir de Seções",
      en: "Redirecting users from Sections",
    },
    slug: "developing/redirecting-users",
  }, {
    title: {
      pt: "Aceitando uma Seção como parâmetro da minha Seção",
      en: "Accepting Other Sections as Parameters in Your Section",
    },
    slug: "developing/accept-a-section",
  }, {
    title: {
      pt: "Importando Blocks de um site",
      en: "Import Blocks from a site",
    },
    slug: "developing/importing-other-sites",
  }],
}, {
  title: {
    pt: "Referência",
    en: "Reference",
  },
  children: [{
    title: { pt: "Problemas comuns", en: "Troubleshooting" },
    slug: "reference/troubleshooting",
  }, {
    title: { pt: "Tipos utilitários", en: "Utility types" },
    slug: "reference/utility-types",
  }, {
    title: {
      pt: "Contribuindo",
      en: "Contributing",
    },
    slug: "reference/contributing",
  }, {
    title: {
      pt: "E-commerce Analytics",
      en: "E-commerce Analytics",
    },
    slug: "reference/analytics",
  }],
}, {
  title: {
    pt: "Performance",
    en: "Performance",
  },
  children: [{
    title: {
      pt: "Porque performance importa",
      en: "Why web performance matters",
    },
    slug: "performance/why",
  }, {
    title: {
      pt: "Como usar a deco para atingir alta performance",
      en: "How can you use deco for achieve high performance",
    },
    slug: "performance/how-deco-performance",
  }, {
    title: {
      pt: "Dicas para atingir uma alta performance",
      en: "Performance tips",
    },
    slug: "performance/tips",
  }],
}, {
  title: {
    pt: "Criando componentes reutilizáveis",
    en: "Creating composable UIs",
  },
  children: [{
    title: {
      pt: "Dados padronizados",
      en: "Standard data types",
    },
    slug: "composable-uis/standard-data-types",
  }, {
    title: {
      pt: "Biblioteca de blocos",
      en: "Block Library",
    },
    slug: "composable-uis/block-library",
  }, {
    title: {
      pt: "E-commerce",
      en: "E-commerce",
    },
    slug: "composable-uis/ecommerce",
  }],
}, {
  title: {
    pt: "Criando APIs reutilizáveis",
    en: "Creating composable APIs",
  },
  children: [{
    title: {
      pt: "NuvemShop",
      en: "NuvemShop",
    },
    slug: "composable-apis/nuvemshop",
  }, {
    title: {
      pt: "Shopify",
      en: "Shopify",
    },
    slug: "composable-apis/shopify",
  }, {
    title: {
      pt: "VNDA.",
      en: "VNDA.",
    },
    slug: "composable-apis/vnda",
  }, {
    title: {
      pt: "VTEX",
      en: "VTEX",
    },
    slug: "composable-apis/vtex",
  }, {
    title: {
      pt: "GTM",
      en: "GTM",
    },
    slug: "composable-apis/gtm",
  }],
}];

if (import.meta.main) {
  for (const content of tableOfContents) {
    if (content.slug) {
      const path = `./${content.slug}`;
      const stat: { isDirectory: boolean } = await Deno.stat(path).catch(
        (_) => ({ isDirectory: false }),
      );
      let isCreated = false;
      if (!stat.isDirectory) {
        isCreated = await Deno.mkdir(path).then(() => true).catch(() => false);
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
            await Deno.mkdir(path, { recursive: true }).then(() => true).catch(
              () => false,
            )
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
  const entries: TopLevelEntry[] = [cur, ...(cur.children || [])];
  return Object.assign(
    acc,
    entries.reduce((acc, cur) => {
      if (!cur.slug) return acc;
      acc[cur.slug] = cur;
      return acc;
    }, {} as Record<string, TopLevelEntry>),
  );
}, {} as Record<string, TopLevelEntry>);

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

type SupportedLanguages = "en" | "pt";

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

  const currentIndex = tableOfContentsEntries.findLastIndex((
    { slug: currentSlug },
  ) => currentSlug === slug);

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
