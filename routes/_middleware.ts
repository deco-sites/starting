import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { handler as liveHandler } from "$live/routes/_middleware.ts";

interface State {
  data: string;
}

async function _handler(req: Request, ctx: MiddlewareHandlerContext<State>) {
  const pathname = new URL(req.url).pathname;

  const redirectTo = (url: string) =>
    new Response(`Redirecting to ${url}`, {
      status: 302,
      headers: {
        Location: url,
      },
    });

  switch (pathname) {
    case "/angel":
      return redirectTo("https://forms.gle/i9iK6orcN1YEX69E6");
    case "/deck":
      return redirectTo("https://www.deco.cx/deck.pdf");
    case "/discord":
      return redirectTo("https://discord.gg/9fkbcvR833");
    case "/expert-signup":
      return redirectTo("https://airtable.com/shrpWZHqr4bmuI5OD");
    case "/brand":
      return redirectTo(
        "https://drive.google.com/drive/folders/1fMIVfALCEa3Er2iX0kNF-87IQSWtpSyy?usp=share_link",
      );
    case "/onboarding":
      return redirectTo("https://deco.cx/onboarding");
    case "/hackathon":
      return redirectTo("https://airtable.com/shrMMkEKoH1I2GLHA");
    case "/ifood":
      return redirectTo("https://airtable.com/shrquWd6sEWZQVdC4");
    case "/demo-pt":
      return redirectTo("https://www.youtube.com/watch?v=I8rsKVVjOVQ");
    case "/deck-video-pt":
      return redirectTo("https://www.youtube.com/watch?v=fz-wueU_D6o");
    case "/politica-privacidade":
      return redirectTo(
        "https://drive.google.com/file/d/15WCSop0_jNfrGn73EqFOr94twJIIrxea/view?usp=sharing",
      );
    case "/termos-de-uso":
      return redirectTo(
        "https://drive.google.com/file/d/1tihCV4Y5zRPXGdpP6prmIvNevUBpWKcu/view?usp=sharing",
      );
    case "/analize":
      return redirectTo("https://deco.cx/en/analize");
    default: {
      const resp = await ctx.next();
      return resp;
    }
  }
}

export const handler = [_handler, liveHandler];
