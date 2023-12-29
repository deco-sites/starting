import type { Handlers } from "$fresh/server.ts";
import getSupabaseClient from "deco/supabase.ts";
import type { DecoState } from "deco/types.ts";

export const handler: Handlers<null, DecoState> = {
    GET: (req) => {

        console.log(Deno.env.get("ZAPIER_WEBHOOK2"));
        console.log(Deno.env.get("ZAPIER_WEBHOOK_CASE"));
        console.log(Deno.env.get("ZAPIER_WEBHOOK"));
        console.log(Deno.env.get("ZAPIER_WEBHOOK_WEBINAR"));

          return new Response(null, {
            headers: {
              Location: "/",
            },
            status: 301,
          });
    }
}
