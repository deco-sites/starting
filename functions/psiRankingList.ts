import type { LoaderFunction } from "$live/types.ts";
import type { Site } from "deco-sites/starting/routes/api/ranking.ts";

/**
 * @title PageSpeed Insights Ranking Loader
 * @description Gets ranking information
 */
const psiRankingListLoader: LoaderFunction<null, Site[]> = async (req) => {
  const url = new URL(req.url);

  const res = await fetch(`${url.origin}/api/ranking`).then((res) =>
    res.text()
  );

  return {
    data: JSON.parse(res),
  };
};

export default psiRankingListLoader;
