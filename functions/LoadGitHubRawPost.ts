import { PostBody } from "../components/utils/Blog.ts";
import { type LoaderFunction } from "@deco/deco";
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
const gitHubRawLoader: LoaderFunction<Props, PostBody> = async (_req, _ctx, { repo, branch }) => {
    const url = new URL(_req.url);
    const path = url.pathname.split("/").pop();
    const res = await fetch(`https://raw.githubusercontent.com/${repo}/${branch}/${path}`).then(async (res) => {
        return { data: await res.text() };
    });
    return {
        data: res,
    };
};
export default gitHubRawLoader;
