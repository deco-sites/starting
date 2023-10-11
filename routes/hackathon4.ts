import { Handlers } from "$fresh/server.ts";
export const handler: Handlers = {
  async GET() {
    const response = await fetch("https://hackathon-10-23.deco.site");
    const text = await response.text();

    const modifiedText = text
      .replaceAll('href="/', 'href="https://hackathon-10-23.deco.site/')
      .replaceAll("url(/", "url(https://hackathon-10-23.deco.site/")
      .replaceAll('"/_frsh/', '"https://hackathon-10-23.deco.site/_frsh/')
      .replaceAll(
        "https://hackathon-10-23.deco.site/sprites.svg",
        "/svg-hacka/sprites.svg",
      );

    return new Response(modifiedText, {
      status: response.status,
      headers: response.headers,
    });
  },
};
