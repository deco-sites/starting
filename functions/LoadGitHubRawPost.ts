import type { LoaderFunction } from "$live/types.ts";
import { PostBody } from "../components/utils/Blog.ts";

export interface Props {
  /** @description Complete user/repo format */
  repo: string;
  /** @description Branch */
  branch: string;
}

/**
 * @title GitHub Raw Loader
 * @description Grabs data from a GitHub repo
 */
const gitHubRawLoader: LoaderFunction<Props, PostBody> = async (
  _req,
  ctx,
  { repo, branch },
) => {
  const url = new URL(_req.url);
  console.log(url.pathname);
  const path = "/abertura-ii-hackathon-deco.md";
  const res = await fetch(
    `https://raw.githubusercontent.com/${repo}/${branch}/${path}`,
  ).then(async (res) => {return {data: await res.text()}});

  return {
    data: res,
  };
};

export default gitHubRawLoader;
