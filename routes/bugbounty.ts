import { Handlers } from "$fresh/server.ts";
export const handler: Handlers = {
  async GET() {
    const response = await fetch("https://bugbounty.deco.site");
    const text = await response.text();

    const modifiedText = text
      .replaceAll('href="/', 'href="https://bugbounty.deco.site/')
      .replaceAll("url(/", "url(https://bugbounty.deco.site/")
      .replaceAll('"/_frsh/', '"https://bugbounty.deco.site/_frsh/')
      .replaceAll(
        "https://bugbounty.deco.site/sprites.svg",
        "/bugbounty/sprites.svg",
      );

    return new Response(modifiedText, {
      status: response.status,
      headers: response.headers,
    });
  },
};
