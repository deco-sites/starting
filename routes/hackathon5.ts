import { Handlers } from "$fresh/server.ts";
export const handler: Handlers = {
  async GET() {
    const response = await fetch("https://decoeventolp.deco.site/");
    const text = await response.text();

    const modifiedText = text
      .replaceAll('href="/', 'href="https://decoeventolp.deco.site/')
      .replaceAll("url(/", "url(https://decoeventolp.deco.site/")
      .replaceAll('"/_frsh/', '"https://decoeventolp.deco.site/_frsh/')
      .replaceAll(
        "https://decoeventolp.deco.site/sprites.svg",
        "/sprites.svg",
      )
      .replaceAll(
        "https://decoeventolp.deco.site/fonts/ArgentPixelCF-Regular.woff",
        "/fonts/ArgentPixelCF-Regular.woff",
      );

    return new Response(modifiedText, {
      status: response.status,
      headers: response.headers,
    });
  },
};
