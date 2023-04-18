import type { Handlers } from "$fresh/server.ts";
import getSupabaseClient from "$live/supabase.ts";

import type { LiveState } from "$live/types.ts";

const ZAPIER_WEBHOOK = Deno.env.get("ZAPIER_WEBHOOK");

export const handler: Handlers<null, LiveState> = {
  POST: async (req) => {
    if (!ZAPIER_WEBHOOK) {
      return new Response(null, {
        headers: {
          Location: "/",
        },
        status: 301,
      });
    }

    const formData = Object.fromEntries((await req.formData()).entries());

    await fetch(ZAPIER_WEBHOOK ?? "", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    await getSupabaseClient().from("form_submission").insert({
      data: formData,
      site_id: 1,
    });

    return new Response(null, {
      headers: {
        Location: "/",
      },
      status: 302,
    });
  },
};