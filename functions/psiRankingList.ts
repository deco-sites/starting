import type { LoaderFunction } from "$live/types.ts";
import type { Site } from "deco-sites/starting/routes/api/ranking.ts";
import { ranking } from "../routes/api/ranking.ts";

/**
 * @title PageSpeed Insights Ranking Loader
 * @description Gets ranking information
 */
const psiRankingListLoader: LoaderFunction<null, Site[]> = () => {
  ranking.sort();

  return {
    data: ranking.list,
  };
};

export default psiRankingListLoader;
