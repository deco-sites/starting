export interface PostBody {
  data: string;
}
interface Post {
  title: string;
  path: string;
  img: string;
  descr: string;
  date: string;
  author: string;
}

export interface PostList {
  posts: Array<Post>;
}

export function getBlogPath(fname: string) {
  return "/blog/" + fname;
}
