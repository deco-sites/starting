import type { LoaderFunction } from "$live/types.ts";
import type { Site } from "deco-sites/starting/components/ranking/RankingList.tsx";

/**
 * @title GitHub Raw Loader
 * @description Grabs data from a GitHub repo
 */
const psiRankingListLoader: LoaderFunction<null, Site[]> = async (req) => {
  const url = new URL(req.url);

  const res = await fetch(`${url.origin}/api/ranking`).then((res) =>
    res.json()
  );

  return {
    data: res,
  };
};

export default psiRankingListLoader;
