import type { Handlers } from "$fresh/server.ts";
import getSupabaseClient from "deco/supabase.ts";

import type { DecoState } from "deco/types.ts";

const ZAPIER_WEBHOOK = Deno.env.get("ZAPIER_WEBHOOK_PLATFORM");

export const handler: Handlers<null, DecoState> = {
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

    const lang = formData.lang == "en" ? "en" : "pt";

    return new Response(null, {
      headers: {
        Location: `/${lang}/thanks`,
      },
      status: 302,
    });
  },
};
