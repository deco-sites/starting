import type { LoaderFunction } from "$live/types.ts";
import { PostList } from "../components/utils/Blog.ts";

export interface Props {
  /** @description Complete user/repo format */
  repo: string;
  /** @description Branch */
  branch: string;
  /** @description Path to fetch, or leave blank and add :path route param. */
  path: string;
}

/**
 * @title GitHub Raw Loader
 * @description Grabs data from a GitHub repo
 */
const gitHubRawLoader: LoaderFunction<Props, PostList> = async (
  _req,
  ctx,
  { repo, branch, path },
) => {
  const resultPath = path;
  const res = await fetch(
    `https://raw.githubusercontent.com/${repo}/${branch}/${resultPath}`,
  ).then((res) => res.json());

  return {
    data: res,
  };
};

export default gitHubRawLoader;
