import type { LoaderFunction } from "$live/types.ts";
import { PathObj, PropNull } from "../sections/BlogPostHeader.tsx";

/**
 * @title PageProps Raw Loader
 * @description Grabs data from page request
 */
// TODO using null? as prop is needed by formatter. Check how to improve empty loaders.
const pagePropsLoader: LoaderFunction<PropNull, PathObj> = (
  _req,
  _,
) => {
  return Promise.resolve({
    data: { url: new URL(_req.url).pathname },
  });
};

export default pagePropsLoader;
