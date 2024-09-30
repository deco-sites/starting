import type { Site } from "site/routes/api/ranking.ts";
import { ranking } from "../routes/api/ranking.ts";
import { type LoaderFunction } from "@deco/deco";
/**
 * @title PageSpeed Insights Ranking Loader
 * @description Gets ranking information
 */
const psiRankingListLoader: LoaderFunction<null, Site[]> = async () => {
    await ranking.getList();
    return {
        data: ranking.list,
    };
};
export default psiRankingListLoader;
