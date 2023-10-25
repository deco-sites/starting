export interface PostBody {
  data: string;
}
/** @title {{{title}}} - {{{author}}} */
export interface Post {
  title: string;
  path: string;
  img: string;
  tags?: string[];
  descr: string;
  date: string;
  author: string;
  authorAvatar?: string;
  authorRole?: string;
  readTime?: string;
  lang?: string;
  /**
   * @format textarea
   */
  content?: string;
  seo?: {
    title?: string;
    description?: string;
    image?: string;
    canonical?: string;
  };
}

export interface PostList {
  posts: Array<Post>;
}

const BLOG_DEFAULT_LOCALE = "pt";

export function getBlogPath(fname: string, locale?: string) {
  console.log(`/${locale || BLOG_DEFAULT_LOCALE}/blog/${fname}`)
  return `/${locale || BLOG_DEFAULT_LOCALE}/blog/${fname}`;
}
