import { FreshContext } from "$fresh/server.ts";

const HSTS = "max-age=300; includeSubDomains; preload";

export async function handler(
  _req: Request,
  ctx: FreshContext,
) {
  const resp = await ctx.next();
  resp.headers.set("Strict-Transport-Security", HSTS);
  return resp;
}