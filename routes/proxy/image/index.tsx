import { Handlers } from "$fresh/server.ts";
export const handler: Handlers = {
  async GET(req: Request) {
    const url = new URL(req.url);
    const imageUrl = url.searchParams.get("image");

    if (!imageUrl) {
      return new Response("Image URL is missing", { status: 400 });
    }

    const imageResponse = await fetch(imageUrl);

    if (!imageResponse.ok) {
      return new Response("Failed to fetch image", { status: 500 });
    }

    // Read the image data as ArrayBuffer
    const imageBuffer = await imageResponse.arrayBuffer();

    // Create a new Response with the image data and appropriate headers
    const headers = new Headers(imageResponse.headers);
    const imageResponseOptions: ResponseInit = {
      status: imageResponse.status,
      statusText: imageResponse.statusText,
      headers,
    };

    return new Response(imageBuffer, imageResponseOptions);
  },
};
