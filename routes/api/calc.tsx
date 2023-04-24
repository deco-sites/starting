import type { Handlers } from "$fresh/server.ts";

import type { LiveState } from "$live/types.ts";

//const ZAPIER_WEBHOOK = Deno.env.get("ZAPIER_WEBHOOK2");
const ZAPIER_WEBHOOK = "https://hooks.zapier.com/hooks/catch/15094351/3uecnqk/";

export const handler: Handlers<null, LiveState> = {
  POST: async (req) => {
    const formData = Object.fromEntries((await req.formData()).entries());
    console.log('ohgo', formData)

    if (!ZAPIER_WEBHOOK) {
      return new Response(null, {
        headers: {
          Location: "/",
        },
        status: 301,
      });
    }

    await fetch(ZAPIER_WEBHOOK ?? "", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    return new Response(null, {
      headers: {
        Location: "/",
      },
      status: 302,
    });
  },
};
