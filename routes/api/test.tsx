import type { Handlers } from "$fresh/server.ts";
import getSupabaseClient from "deco/supabase.ts";
import type { DecoState } from "deco/types.ts";

export const handler: Handlers<null, DecoState> = {
    GET: (req) => {

        console.log("ZAPIER_WEBHOOK2", Deno.env.get("ZAPIER_WEBHOOK2"));
        console.log("ZAPIER_WEBHOOK_CASE", Deno.env.get("ZAPIER_WEBHOOK_CASE"));
        console.log("ZAPIER_WEBHOOK", Deno.env.get("ZAPIER_WEBHOOK"));
        console.log("ZAPIER_WEBHOOK_WEBINAR", Deno.env.get("ZAPIER_WEBHOOK_WEBINAR"));

          return new Response(null, {
            headers: {
              Location: "/",
            },
            status: 301,
          });
    }
}
