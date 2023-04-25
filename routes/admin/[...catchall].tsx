import type { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req) {
    const url = new URL(req.url);
    const urlToRedirect = `https://deco.cx${url.pathname}${url.search}`;

    return Response.redirect(urlToRedirect, 301);
  },
};
