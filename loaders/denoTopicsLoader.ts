import type { LoaderContext } from "deco/types.ts";
import type {
  ChildTopic,
  SubTopic,
  Topic,
} from "site/components/decohelp/pages/ui/Sidebar/Sidebar.tsx";
import tableOfContents from "site/docs/toc.ts";


const GITHUB_API_URL = 'https://api.github.com';
const OWNER = 'deco-cx';
const REPO = 'apps';
const OUTPUT_DIR = 'docs';

async function fetchAppsReposWithReadme() {
  const url = `${GITHUB_API_URL}/repos/${OWNER}/${REPO}/contents`;
  const response = await fetch(url);
  const data = await response.json();

  const dirsWithReadme = [];

  if (!Array.isArray(data)) {
    return dirsWithReadme;
  }

  for (const item of data) {
    if (item.type === 'dir') {
      const url = `${GITHUB_API_URL}/repos/${OWNER}/${REPO}/contents/${item.path}/README.md`;
      const response = await fetch(url, {
        method: 'HEAD',
      });
      const hasReadme = response.status === 200;

      if (hasReadme) {
        dirsWithReadme.push(item.path);
      }
    }
  
  }

  return dirsWithReadme;
}

const loader = async (
  props: { urlPattern: string; group: number; basePath?: string },
  _req: Request,
  _ctx: LoaderContext,
): Array<Topic> => {
  const match = (new URL(_req.url)).pathname.match(props.urlPattern);
  const slug = (match && match[props.group]) ?? "/404";
  const [language, ..._rest] = slug.split("/");
  const languageTyped = language as ("en" | "pt");
  const base = props.basePath ? (props.basePath + language + "/") : "";
  const topics = tableOfContents.map((topic) => {
    return ({
      label: topic.title[languageTyped] ?? topic.slug,
      LinkTopic: topic.slug && base + topic.slug,
      SubTopics: topic.children?.filter((subTopic) =>
        subTopic.title[languageTyped] && subTopic.slug
      ).map((subTopic) => {
        return {
          label: subTopic.title[languageTyped]!,
          SidebarLink: base + subTopic.slug!,
          NestedTopics: subTopic.children?.filter((childTopic) =>
            childTopic.title[languageTyped] && childTopic.slug
          ).map((childTopic) => {
            return {
              label: childTopic.title[languageTyped]!,
              SidebarLink: base + childTopic.slug!,
            };
          }) ?? ([] as ChildTopic[]),
        };
      }) ?? ([] as SubTopic[]),
    });
  });

  const appsRepos = await fetchAppsReposWithReadme();

  if (!appsRepos.length) {
    return topics;
  }

  const decoHub =  {
    label: 'Deco Hub',
    LinkTopic: undefined,
    SubTopics: appsRepos.map((repo) => {
      return {
        label: repo,
        SidebarLink: `/docs/${languageTyped}/decohub/${repo}`,
        NestedTopics: [],
      };
    })
  };

  topics.push(decoHub);

  return topics;
};

export default loader;
