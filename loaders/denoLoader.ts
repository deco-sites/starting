import { MDFileContent } from "deco-sites/starting/components/ui/Types.tsx";
import type { LoaderContext } from "deco/types.ts";
import { redirect } from "deco/mod.ts";
import { getTitleForPost } from "deco-sites/starting/docs/toc.ts";
import type { SupportedLanguages } from "deco-sites/starting/docs/toc.ts";

/** @title {{{path}}} */
export interface Doc {
  path: string;
  /**
   * @format textarea
   */
  content: string;
  title?: string;
}

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

  const url = new URL(
    `../${path}/${documentSlug}/${language}.md`,
    import.meta.url,
  );

  const doc = props.docs?.find((doc) => doc.path === slug);

  if (doc) {
    return { content: doc.content, title: doc.title };
  }

  const fileContent = await Deno.readTextFile(url);
  return { content: fileContent, title: getTitleForPost(language, documentSlug) };
};

export default loader;
