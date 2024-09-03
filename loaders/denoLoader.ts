import { MDFileContent } from "site/components/ui/Types.tsx";
import type { LoaderContext } from "deco/types.ts";
import { badRequest, redirect } from "deco/mod.ts";
import { getTitleForPost } from "site/docs/toc.ts";
import type { SupportedLanguages } from "site/docs/toc.ts";

/** @title {{{path}}} */
export interface Doc {
  path: string;
  /**
   * @format textarea
   */
  content: string;
  title?: string;
}

const GH_USER_CONTENT_URL = "https://raw.githubusercontent.com";
const OWNER = "deco-cx";
const REPO = "apps";

export const cache = "stale-while-revalidate";

export const cacheKey = (
  _props: unknown,
  req: Request,
  _ctx: LoaderContext,
) => new URL(req.url).href;

const loader = async (
  props: { urlPattern: string; group: number; docs?: Doc[]; docsPath?: string },
  _req: Request,
  _ctx: LoaderContext,
): Promise<MDFileContent> => {
  const match = (new URL(_req.url)).pathname.match(props.urlPattern);
  const slug = (match && match[props.group]) ?? "/404";
  const [languageOrig, ...rest] = slug.split("/");
  const language = languageOrig as SupportedLanguages;
  const documentSlug = rest.join("/");
  const path = props.docsPath ?? "docs";

  if (documentSlug === "") {
    const returnUrl = new URL(_req.url);
    returnUrl.pathname = `/${path}/${language}/overview`;
    return redirect(returnUrl.href, 307) as unknown as ReturnType<
      typeof loader
    >; // redirect, component won't be resolved, so don't need the data;
  }

  if (documentSlug.includes("decohub")) {
    const appName = documentSlug.split("/")[1];

    const url =
      `${GH_USER_CONTENT_URL}/${OWNER}/${REPO}/master/${appName}/README.md`;

    const response = await fetch(url);

    const content = await response.text();

    const contentWithDescription =
      `---\ndescription: This is the README of the ${appName} app\n---\n${content}`;

    return { content: contentWithDescription, title: appName };
  }

  const url = new URL(
    `../${path}/${documentSlug}/${language}.md`,
    import.meta.url,
  );

  const doc = props.docs?.find((doc) => doc.path === slug);

  if (doc) {
    return { content: doc.content, title: doc.title };
  }

  try {
    const fileContent = await Deno.readTextFile(url);

    return {
      content: fileContent,
      title: getTitleForPost(language == "en" ? "en" : "pt", documentSlug),
    };
  } catch {
    badRequest({ message: "File not found" });
    return { content: "" };
  }
};

export default loader;
