import { Handlers } from "$fresh/server.ts";
export const handler: Handlers = {
  async GET() {
    const response = await fetch("https://deco-sites-deco-day.deno.dev");
    const text = await response.text();

    const modifiedText = text
      .replaceAll('href="/', 'href="https://deco-sites-deco-day.deno.dev/')
      .replaceAll('src="/', 'src="https://deco-sites-deco-day.deno.dev/')
      .replaceAll('src="../', 'src="https://deco-sites-deco-day.deno.dev/')
      .replaceAll("url(/", "url(https://deco-sites-deco-day.deno.dev/")
      .replaceAll('"/_frsh/', '"https://deco-sites-deco-day.deno.dev/_frsh/')
      .replaceAll(
        "https://deco-sites-deco-day.deno.dev/sprites.svg",
        "/svg-decoday/sprites.svg",
      )
      .replaceAll(
        "https://deco-sites-deco-day.deno.dev/matter-script.js",
        "/svg-decoday/matter-script.js"
      );

    return new Response(modifiedText, {
      status: response.status,
      headers: response.headers,
    });
  },
};
