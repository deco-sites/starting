import type { Handlers } from "$fresh/server.ts";
import getSupabaseClient from "deco/supabase.ts";

import type { DecoState } from "deco/types.ts";
import { verifyCaptcha } from "site/sdk/recaptcha.ts";

import { Client } from "npm:@hubspot/api-client";

const ZAPIER_WEBHOOK = Deno.env.get("ZAPIER_WEBHOOK");

const HUBSPOT_API_TOKEN = Deno.env.get("HUBSPOT_API_TOKEN");

const hubspotClient = new Client({
  accessToken: HUBSPOT_API_TOKEN,
  limiterOptions: {},
});

export const handler: Handlers<null, DecoState> = {
  POST: async (req) => {
    const formData = Object.fromEntries((await req.formData()).entries());

    const recaptchaToken = formData["g-recaptcha-response"];
    const isCaptchaValid = !!recaptchaToken ??
      (await verifyCaptcha(recaptchaToken.toString()));

    if (!isCaptchaValid) {
      return new Response(null, {
        headers: {
          Location: "/",
        },
        status: 301,
      });
    }

    const properties = [];

    for (const key in formData) {
      if (key === "g-recaptcha-response" || key === "lang") continue;
      properties.push({
        property: key,
        value: formData[key],
      });
    }

    console.log(formData);
    const response = await fetch(
      `https://api.hubapi.com/contacts/v1/contact/createOrUpdate/email/${
        formData["email"]
      }/`,
      {
        headers: {
          Authorization: `Bearer ${HUBSPOT_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          properties,
        }),
      },
    );
    console.log(await response.json());

    const lang = formData.lang === "en" ? "en" : "pt";
    return new Response(null, {
      headers: {
        Location: `/${lang}/thanks`,
      },
      status: 302,
    });
  },
};
