type LocalizedTitle = { pt?: string; en?: string };
type Entry = { title: LocalizedTitle; slug?: string };
type TopLevelEntry = Entry & { children?: Array<Entry> };

type TableOfContents = Array<TopLevelEntry>;

const tableOfContents: TableOfContents = [{
  title: { pt: "Início", en: "Intro" },
  children: [{
    title: { pt: "Visão Geral", en: "Overview" },
    slug: "introduction/overview",
  }, {
    title: { pt: "Tecnologias", en: "Tech Stack" },
    slug: "introduction/tech-stack",
  }],
}, {
  title: { pt: "Conceitos", en: "Concepts" },
  children: [{
    title: { pt: "Section", en: "Section" },
    slug: "concepts/section",
  }, {
    title: { pt: "Loader", en: "Loader" },
    slug: "concepts/loader",
  }, {
    title: { pt: "Page", en: "Page" },
    slug: "concepts/page",
  }, {
    title: { pt: "Site", en: "Site" },
    slug: "concepts/site",
  }],
}, {
  title: { en: "Tutorials", pt: "Tutoriais" },
  children: [{
    title: { pt: "Criando um Site", en: "Creating a Site" },
    slug: "tutorials/101",
  }, {
    title: { pt: "Codando uma Section", en: "Coding a new Section" },
    slug: "tutorials/creating-a-section",
  }, {
    title: { pt: "Buscando dados de API", en: "Fetching data from APIs" },
    slug: "tutorials/data-fetching",
  }, {
    title: {
      pt: "Importando outros Sites",
      en: "Importing other sites",
    },
    slug: "tutorials/importing-other-sites",
  }, {
    title: { pt: "Conectando com VTEX", en: "Connecting with VTEX" },
    slug: "tutorials/connecting-vtex",
  }, {
    title: {
      pt: "Instalando VTEX Intelligent Search",
      en: "Installing VTEX Intelligent Search",
    },
    slug: "tutorials/installing-vtex-is",
  }, {
    title: {
      pt: "Integrando com GTM",
      en: "Integrating with GTM",
    },
    slug: "tutorials/gtm-integration-guide",
  }, {
    title: {
      pt: "Simplificando loaders com carregadores de propriedades",
      en: "Simplyfing data fetching with a PropsLoader",
    },
    slug: "tutorials/props-loader",
  }, {
    title: {
      pt: "Criando components universais",
      en: "Creating universal components",
    },
    slug: "tutorials/universal-components",
  }, {
    title: {
      pt: "Invocando loaders a partir do browser",
      en: "Client-side loaders invocation",
    },
    slug: "tutorials/client-side-invocation",
  }],
}, {
  title: { en: "Recipes", pt: "Receitas" },
  children: [{
    title: { pt: "Sections customizáveis", en: "Customizable Sections" },
    slug: "recipes/customizable-sections",
  }, {
    title: { pt: "Imagens", en: "Images" },
    slug: "recipes/images",
  }, {
    title: {
      pt: "SVG Sprites",
      en: "SVG Sprites",
    },
    slug: "recipes/svg-sprites",
  }, {
    title: { pt: "Menu Dropdown", en: "Dropdown Menu" },
    slug: "recipes/menu",
  }],
}, {
  title: { en: "Migration guides", pt: "Guias de migração" },
  children: [{
    title: { en: "live.ts v1.x", pt: "live.ts v1.x" },
    slug: "migration-guides/v1.x",
  }],
}];

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
