import type { LoaderContext } from "deco/types.ts";
import type {
  ChildTopic,
  SubTopic,
  Topic,
} from "site/components/decohelp/pages/ui/Sidebar/Sidebar.tsx";
import tableOfContents from "site/docs/toc.ts";

const loader = (
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

  return topics;
};

export default loader;
