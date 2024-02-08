import { FreshContext } from "$fresh/server.ts";

const HSTS = "max-age=300; includeSubDomains; preload";

export async function handler(
  req: Request,
  ctx: FreshContext,
) {
  const url = new URL(req.url);
  const resp = await ctx.next();
  if (url.protocol === "https:") {
    resp.headers.set("Strict-Transport-Security", HSTS);
  }
  return resp;
}