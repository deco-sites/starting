import { Handlers } from "$fresh/server.ts";
import Proxy from "apps/website/handlers/proxy.ts"
export const handler: Handlers = {
    async GET(req) {
    const response = await fetch("https://hackathon-10-23.deco.site") 

    const text = await response.text();

    const modifiedText = text
    .replaceAll('href="/', 'href="https://hackathon-10-23.deco.site/')
    .replaceAll("url(/", "url(https://hackathon-10-23.deco.site/");

    return new Response(modifiedText, {
      status: response.status,
      headers: response.headers,
    });
  },
};