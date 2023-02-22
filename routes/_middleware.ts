import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 530,
  site: "starting",
  domains: ["starting.deco.site"],
});