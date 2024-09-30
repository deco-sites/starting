import type { Handlers } from "$fresh/server.ts";
import { type DecoState } from "@deco/deco";
import { verifyCaptcha } from "site/sdk/recaptcha.ts";
import getSupabaseClient from "../../supabase.ts";
const ZAPIER_WEBHOOK = Deno.env.get("ZAPIER_WEBHOOK_WEBINAR");
export const handler: Handlers<null, DecoState> = {
    POST: async (req) => {
        const formData = Object.fromEntries((await req.formData()).entries());
        const recaptchaToken = formData["g-recaptcha-response"];
        const isCaptchaValid = !!recaptchaToken ??
            (await verifyCaptcha(recaptchaToken.toString()));
        if (!ZAPIER_WEBHOOK || !isCaptchaValid) {
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
