import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Metatags from "./BlogMetatags.tsx";
import { Post, SupportedLocales } from "site/components/utils/Blog.ts";
import type { Props as SEOProps } from "deco-sites/std/components/seo/types.ts";

export interface Props {
  /**
   * @title Title template
   * @description add a %s whenever you want it to be replaced with the blog post name
   * @default %s | Deco.cx
   */
  titleTemplate?: string;
  /** @title Page title override */
  title?: string;
  /** @title Meta tag description override */
  description?: string;
  /** @description Recommended: 16 x 16 px */
  favicon?: LiveImage;
  post: Post;
  locale?: SupportedLocales;
}

const BlogPostSEO = ({ locale = "en", ...props }: Props) => {
  const context = {
    ...props.post,
    seo: {
      ...props?.post?.body[locale]?.seo,
      title: props.post?.body[locale]?.seo?.title ||
        props.post.body[locale]?.title,
      description: props.post?.body[locale]?.seo?.description ||
        props.post.body[locale]?.descr,
      image: props.post?.body[locale]?.seo?.image || props.post?.img,
    },
  } as Post & { seo: SEOProps };

  return <Metatags {...props} context={context} />;
};

export default BlogPostSEO;
