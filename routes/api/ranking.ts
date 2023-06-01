import { Handlers } from "$fresh/server.ts";
import { DOMParser } from "deno-dom";

const AUTH_TOKEN =
  "patCCca8EvYPkzRln.55e809e3d47b919fc109a876983394deac35c35e85bd7c8f762b95fc711ca0ca";
const AIRTABLE_URL =
  "https://api.airtable.com/v0/appNJ277dOGNDgi2A/tbluRhRRBIYtNKoPR";

const parseBody = async <T>(
  body: ReadableStream<Uint8Array> | null
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

const fetchRanking = async (website?: string) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${AUTH_TOKEN}`);
  const params = new URLSearchParams({
    maxRecords: "100",
    "sort[0][field]": "pagespeedPoints",
    "sort[0][direction]": "desc",
    filterByFormula: website
      ? `FIND("${website}",website)`
      : "AND(pagespeedPoints>=80,hide=FALSE())",
  });

  return await fetch(`${AIRTABLE_URL}?${params.toString()}`, {
    method: "GET",
    headers: myHeaders,
  })
    .then((response) => response.json())
    .then((data: AirTableListResponse) => {
      return data.records.map(toSite);
    });
};

const updateRanking = async (
  { id: recordId, ...record }: Site,
  method: "POST" | "PATCH"
) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${AUTH_TOKEN}`);
  myHeaders.append("Content-Type", "application/json");

  await fetch(`${AIRTABLE_URL}${method === "PATCH" ? `/${recordId!}` : ""}`, {
    method,
    headers: myHeaders,
    body: JSON.stringify({ fields: toDB(record) }),
  }).catch((error) => {
    throw new Error(error);
  });
};

const toDB = (site: Site): SiteDB => {
  return {
    ...site,
    poweredBy: Object.entries(site.poweredBy)
      .reduce((initial, [field, value]) => {
        if (value) {
          return [initial, field].join(",");
        }
        return initial;
      }, "")
      .replace(",", ""),
  };
};

const toSite = (record: Record): Site => {
  const poweredBy = {
    deco: record.fields.poweredBy?.includes("deco") ?? false,
    vtex: record.fields.poweredBy?.includes("vtex") ?? false,
    vnda: record.fields.poweredBy?.includes("vnda") ?? false,
    shopify: record.fields.poweredBy?.includes("shopify") ?? false,
    occ: record.fields.poweredBy?.includes("occ") ?? false,
  };
  return {
    ...record.fields,
    id: record.id,
    poweredBy,
  };
};

const normalizeSite = async (
  _url: string,
  score: number,
  lcp: number,
  contact: {
    contactName?: string;
    contactEmail?: string;
    contactPhone?: string;
    contactAgency?: string;
  }
): Promise<Site | null> => {
  const url = new URL(_url).origin;
  const { contactName, contactEmail, contactPhone, contactAgency } = contact;

  const html = await fetch(encodeURI(url)).then((r) => r.text());
  const document = new DOMParser().parseFromString(html, "text/html");

  if (!document) return null;

  const decoState = JSON.parse(
    document.querySelector("#__DECO_STATE")?.textContent ?? "null"
  );

  const isVTEX = html.includes(".vteximg.") || html.includes(".vtexassets.");
  const isVnda = html.includes("cdn.vnda.com.br");
  const isShopify = html.includes("cdn.shopify.com");
  const isOcc = html.includes('id="oracle-cc');
  const isDeco = html.includes('id="__FRSH_STATE"');

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
      ? `${faviconUrl.includes("https://") ? "" : url}${faviconUrl}`
      : `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=32`,
    poweredBy: {
      deco: isDeco,
      vtex: isVTEX,
      vnda: isVnda,
      shopify: isShopify,
      occ: isOcc,
    },
    lcp,
    contactName,
    contactEmail,
    contactPhone,
    contactAgency,
  };
};

export const ranking: {
  list: Site[];
  check: (s: Site) => Promise<Site | null>;
  update: (s: Site) => void;
  add: (s: Site) => void;
  getList: () => Promise<Site[]>;
} = {
  list: [],
  check: async function (newSite) {
    const results = await fetchRanking(newSite.website);

    return results.length > 0 ? results[0] : null;
  },
  update: async function (newSite) {
    await updateRanking(newSite, "PATCH");
  },
  add: async function (newSite) {
    await updateRanking(newSite, "POST");
  },
  getList: async function () {
    this.list = (await fetchRanking()) as Site[];
    return this.list;
  },
};

export const handler: Handlers = {
  // analyze site
  async POST(req) {
    const body = await parseBody<{
      url: string;
      contactName?: string;
      contactEmail?: string;
      contactPhone?: string;
      contactAgency?: string;
    }>(req.body);

    if (!body || !body?.url) {
      return new Response("Invalid request: Insert a URL", {
        status: 400,
      });
    }
    const { url, contactName, contactEmail, contactPhone, contactAgency } =
      body;

    const { data }: PageSpeedResponse = await fetch(
      `https://psi-test-api.fly.dev/?t=AIzaSyADcbhTjzpb5EGL0ACHhMtFD2i9sJMsn3I&n=10&url=${url}`
    ).then((res) => res.json());

    if (!data) {
      return new Response("Insert a correct URL", {
        status: 400,
      });
    }

    const score = (data?.score.mean ?? -1) * 100;
    const lcp = Math.round(data?.largest_contentful_paint.mean ?? -1) / 1000;

    const newSite = await normalizeSite(url, score, lcp, {
      contactName,
      contactEmail,
      contactPhone,
      contactAgency,
    });

    if (!newSite) {
      return new Response("Site connection problem", {
        status: 400,
      });
    }

    let status;
    const rankingSite = await ranking.check(newSite);

    if (rankingSite) {
      const handledSite = {
        ...rankingSite,
        ...newSite,
        id: rankingSite.id,
        pagespeedPoints:
          rankingSite.pagespeedPoints < newSite.pagespeedPoints
            ? newSite.pagespeedPoints
            : rankingSite.pagespeedPoints,
      };
      await ranking.update(handledSite);

      status = 200;
    } else {
      await ranking.add(newSite);
      status = 201;
    }

    const list = await ranking.getList();

    return new Response(
      JSON.stringify(
        score >= 80 ? list : [{ id: rankingSite?.id ?? "", ...newSite }]
      ),
      {
        headers: { "Content-Type": "application/json" },
        status,
      }
    );
  },
};

interface PageSpeedResponse {
  data: Data;
  error?: unknown;
}

interface Data {
  cumulative_layout_shift: ScoreData;
  first_contentful_paint: ScoreData;
  js_execution_time: ScoreData;
  largest_contentful_paint: ScoreData;
  score: ScoreData;
  speed_index: ScoreData;
  success_runs: number;
  time_to_interactive: ScoreData;
  total_blocking_time: ScoreData;
  url: string;
}

interface ScoreData {
  confidence_interval: number[];
  mean: number;
  std_dev: number;
}

export interface Site {
  id?: string;
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
  lcp: number;
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactAgency?: string;
}

interface AirTableListResponse {
  records: Record[];
}

interface Record {
  id: string;
  createdTime: string;
  fields: SiteDB;
}

interface SiteDB {
  website: string;
  pagespeedPoints: number;
  name: string;
  favicon: string;
  poweredBy: string;
  lcp: number;
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactAgency?: string;
}
