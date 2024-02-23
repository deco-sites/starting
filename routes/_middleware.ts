import { FreshContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: FreshContext<State>,
) {
  const url = new URL(req.url);
  const response = await ctx.next();
  if (!url.pathname.startsWith('/decocamp')) {
    return response;
  }

  const html = (await response.text()).replace(`lang="en"`, `lang="en" style="color-scheme: dark;"`);

  return new Response(html, {
    headers: response.headers,
    status: response.status,
    statusText: response.statusText,
  });
}