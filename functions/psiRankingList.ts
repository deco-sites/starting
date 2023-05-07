import type { LoaderFunction } from "$live/types.ts";
// import type { Site } from "deco-sites/starting/routes/api/ranking.ts";

/**
 * @title PageSpeed Insights Ranking Loader
 * @description Gets ranking information
 */
const psiRankingListLoader: LoaderFunction<
  null,
  { test: string } | null
> = async (req) => {
  const url = new URL(req.url);

  try {
    const res = await fetch(`${url.origin}/api/ranking`).then((res) =>
      res.text()
    );

    return {
      data: {
        test: res,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      data: null,
    };
  }
};

export default psiRankingListLoader;
