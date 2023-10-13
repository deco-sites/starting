export interface PostBody {
  data: string;
}
/** @title {{{title}}} - {{{author}}} */
export interface Post {
  title: string;
  path: string;
  img: string;
  descr: string;
  date: string;
  author: string;
  authorAvatar?: string;
  authorRole?: string;
  readTime?: string;
  /**
   * @format textarea
   */
  content?: string;
}

export interface PostList {
  posts: Array<Post>;
}

export function getBlogPath(fname: string) {
  return "/pt/blog/" + fname;
}
