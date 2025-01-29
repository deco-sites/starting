import type { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req) {
    const url = new URL(req.url);
    const urlToRedirect = `https://docs.deco.cx/${url.pathname.replace("docs/", "")}${url.search}`;

    return Response.redirect(urlToRedirect, 301);
  },
};
