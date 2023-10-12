export interface PostBody {
  data: string;
}
/** @title {{{title}}} - {{{author}}} */
interface Post {
  title: string;
  path: string;
  img: string;
  descr: string;
  date: string;
  author: string;
  authorAvatar?: string;
  readTime?: string;
}

export interface PostList {
  posts: Array<Post>;
}

export function getBlogPath(fname: string) {
  return "/pt/blog/" + fname;
}
