import { Handlers } from "$fresh/server.ts";

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

interface Site {
  pagespeedPoints: number;
  name: string;
  website: string;
  poweredBy?: string;
}

const ranking: {
  list: Site[];
  check: (s: Site) => boolean;
  sort: () => void;
  update: (s: Site) => void;
  add: (s: Site) => void;
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
};

export const handler: Handlers = {
  // list site ranking
  GET(_req) {
    ranking.sort();
    return new Response(JSON.stringify(ranking.list), {
      headers: { "Content-Type": "application/json" },
    });
  },
  // analyze site
  async POST(req) {
    const body = await parseBody<{ url: string }>(req.body);
    new Response("Invalid request: body is null");

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
      const newSite = {
        pagespeedPoints: Number(score.toFixed(0)),
        name: "test",
        website: url,
        poweredBy: "",
      };

      let status;
      if (ranking.check(newSite)) {
        ranking.update(newSite);
        status = 200;
      } else {
        ranking.add(newSite);
        status = 201;
      }
      ranking.sort();

      return new Response(JSON.stringify(ranking.list), {
        headers: { "Content-Type": "application/json" },
        status,
      });
    }

    return new Response(null, { status: 204 });
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
