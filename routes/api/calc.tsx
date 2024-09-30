import type { Handlers } from "$fresh/server.ts";
import { verifyCaptcha } from "site/sdk/recaptcha.ts";
import { type DecoState } from "@deco/deco";
const ZAPIER_WEBHOOK = Deno.env.get("ZAPIER_WEBHOOK2");
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
        return new Response(null, {
            headers: {
                Location: "/",
            },
            status: 302,
        });
    },
};
