import Preview from "deco-sites/std/components/seo/components/Preview.tsx";
import { Head } from "$fresh/runtime.ts";
import { Post } from "deco-sites/starting/components/utils/Blog.ts";
import type { Props as SEOProps } from "deco-sites/std/components/seo/types.ts";
interface Props extends Omit<SEOProps, "context"> {
  context?: Post & { seo: SEOProps } | null;
}

function Metatags(props: Props) {
  const { titleTemplate, context, type, themeColor, favicon } = props;
  const twitterCard = type === "website" ? "summary" : "summary_large_image";

  const { title, description, image, canonical } = {
    title: titleTemplate?.replace("%s", context?.seo?.title || "") ||
      context?.seo?.title,
    description: context?.seo?.description,
    image: context?.seo?.image,
    canonical: context?.seo?.canonical,
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content={themeColor} />
        <link rel="icon" href={favicon} />

        {/* Twitter tags */}
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <meta property="twitter:card" content={twitterCard} />
        {/* OpenGraph tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:image" content={image} />

        {/* Link tags */}
        {canonical && <link rel="canonical" href={canonical} />}

        {/* No index, no follow */}
        {props?.noIndexNoFollow && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
    </>
  );
}

export { Preview };

export default Metatags;
