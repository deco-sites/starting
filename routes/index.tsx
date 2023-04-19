import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: (request) => {
    const acceptLanguage = request.headers?.get("Accept-Language");
    const mainLanguage = acceptLanguage?.split(",")[0].split(";")[0].trim();

    let languageToRedirect = "en";

    if (mainLanguage?.startsWith("pt")) {
      languageToRedirect = "pt";
    }

    const translationUrl = new URL(request.url);
    translationUrl.pathname = `/${languageToRedirect}`;

    return Response.redirect(translationUrl, 307);
  },
};
