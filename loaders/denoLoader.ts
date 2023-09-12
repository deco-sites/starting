import { MDFileContent } from "deco-sites/starting/components/ui/Types.tsx";
import type { LoaderContext } from "deco/types.ts";

const loader = async (
  props: { urlPattern: string; group: number },
  _req: Request,
  _ctx: LoaderContext,
): Promise<MDFileContent> => {
  const match = (new URL(_req.url)).pathname.match(props.urlPattern);
  const slug = (match && match[props.group]) ?? "/404";
  const [language, ...rest] = slug.split("/");
  const documentSlug = rest.join("/");
  console.log(language, documentSlug);
  const url = new URL(
    `../docs/${documentSlug}/${language}.md`,
    import.meta.url,
  );

  const fileContent = await Deno.readTextFile(url);
  return { content: fileContent };
};

export default loader;
