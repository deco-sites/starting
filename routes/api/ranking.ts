import { Handlers } from "$fresh/server.ts";
import { DOMParser } from "deno-dom";

const parseBody = async <T>(
  body: ReadableStream<Uint8Array> | null,
): Promise<T | null> => {
  if (body === null) {
    return null;
  }

  const decoder = new TextDecoder();
  for await (const chunk of body) {
    // decode the bytes into a string and print it
    return JSON.parse(decoder.decode(chunk)) as T;
  }

  return null;
};

const normalizeSite = async (
  _url: string,
  score: number,
): Promise<Site | null> => {
  const url = new URL(_url).origin;

  const html = await fetch(encodeURI(url)).then((r) => r.text());
  const document = new DOMParser().parseFromString(html, "text/html");

  if (!document) return null;

  const decoState = JSON.parse(
    document.querySelector("#__DECO_STATE")?.textContent ?? "null",
  );

  const isVTEX = html.includes(".vteximg.") || html.includes(".vtexassets.");
  const isVnda = html.includes("cdn.vnda.com.br");
  const isShopify = html.includes("cdn.shopify.com");
  const isOcc = html.includes('id="oracle-cc');

  const ogTitle = document
    .querySelector('[property="og:title"]')
    ?.attributes.getNamedItem("content")?.value;
  const titleTag = document.querySelector("title")?.textContent;

  const name = [
    ...document.querySelectorAll('[type="application/ld+json"]'),
  ].reduce<string[]>((initial, script) => {
    const json = JSON.parse(script.textContent);

    if (!json?.name) return initial;

    return [...initial, json.name];
  }, []);

  const faviconUrl = document
    .querySelector('[rel*="icon"]')
    ?.attributes.getNamedItem("href")?.value;

  return {
    pagespeedPoints: Math.ceil(score),
    website: url,
    name: name[0] ?? ogTitle ?? titleTag ?? decoState?.name,
    favicon: faviconUrl
      ? `${url}${faviconUrl.replace("", "")}`
      : `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=32`,
    poweredBy: {
      deco: Boolean(decoState),
      vtex: isVTEX,
      vnda: isVnda,
      shopify: isShopify,
      occ: isOcc,
    },
  };
};

export const ranking: {
  list: Site[];
  check: (s: Site) => boolean;
  sort: () => void;
  update: (s: Site) => void;
  add: (s: Site) => void;
  removeLast: () => void;
} = {
  list: [],
  sort: function () {
    this.list = this.list.sort((a, b) => b.pagespeedPoints - a.pagespeedPoints);
  },
  check: function (newSite) {
    return this.list.some((site) => site.website === newSite.website);
  },
  update: function (newSite) {
    this.list = this.list.map((site) => {
      if (site.website !== newSite.website) return site;

      return newSite;
    });
  },
  add: function (newSite) {
    this.list = this.list.concat([newSite]);
  },
  removeLast: function () {
    this.list = this.list.splice(-1);
  },
};

export const handler: Handlers = {
  // analyze site
  async POST(req) {
    const body = await parseBody<{ url: string }>(req.body);

    if (!body || !body?.url) {
      return new Response("Invalid request: Insert a URL", {
        status: 400,
      });
    }
    const { url } = body;

    const { data }: PageSpeedResponse = await fetch(
      `https://psi-test-api.fly.dev/?t=AIzaSyADcbhTjzpb5EGL0ACHhMtFD2i9sJMsn3I&n=10&url=${url}`,
    ).then((res) => res.json());

    if (!data) {
      return new Response("Insert a correct URL", {
        status: 400,
      });
    }

    const score = (data?.score.mean ?? -1) * 100;

    if (score >= 80) {
      const newSite = await normalizeSite(url, score);

      if (!newSite) {
        return new Response("Site connection problem", {
          status: 400,
        });
      }

      let status;
      if (ranking.check(newSite)) {
        ranking.update(newSite);
        status = 200;
      } else {
        ranking.add(newSite);
        status = 201;
      }
      ranking.sort();

      if (ranking.list.length > 20) {
        ranking.removeLast();
      }

      return new Response(JSON.stringify(ranking.list), {
        headers: { "Content-Type": "application/json" },
        status,
      });
    }

    return new Response(null, {
      status: 204,
      headers: { "Content-Type": "application/json" },
    });
  },
};

interface PageSpeedResponse {
  data: Data;
  error?: unknown;
}

interface Data {
  cumulative_layout_shift: Cumulativelayoutshift;
  first_contentful_paint: Cumulativelayoutshift;
  js_execution_time: Cumulativelayoutshift;
  largest_contentful_paint: Cumulativelayoutshift;
  score: Cumulativelayoutshift;
  speed_index: Cumulativelayoutshift;
  success_runs: number;
  time_to_interactive: Cumulativelayoutshift;
  total_blocking_time: Cumulativelayoutshift;
  url: string;
}

interface Cumulativelayoutshift {
  confidence_interval: number[];
  mean: number;
  std_dev: number;
}

export interface Site {
  pagespeedPoints: number;
  name: string;
  website: string;
  poweredBy: {
    deco: boolean;
    vtex: boolean;
    vnda: boolean;
    shopify: boolean;
    occ: boolean;
  };
  favicon: string;
}
