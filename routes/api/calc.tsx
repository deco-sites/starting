import type { Handlers } from "$fresh/server.ts";

import type { LiveState } from "deco/types.ts";

const ZAPIER_WEBHOOK = Deno.env.get("ZAPIER_WEBHOOK2");

export const handler: Handlers<null, LiveState> = {
  POST: async (req) => {
    const formData = Object.fromEntries((await req.formData()).entries());

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
