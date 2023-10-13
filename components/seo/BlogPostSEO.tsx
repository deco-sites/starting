import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Metatags from "./BlogMetatags.tsx";
import { Post } from "deco-sites/starting/components/utils/Blog.ts";

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
}

const BlogPostSEO = (props: Props) => {
  const context = {
    ...props.post,
    seo: {
      ...props?.post?.seo,
      title: props.post?.seo?.title || props.title,
      description: props.post?.seo?.description || props.description,
      image: props.post?.seo?.image || props.post?.img,
    },
  } as Post;

  return <Metatags {...props} context={context} />;
};

export default BlogPostSEO;
