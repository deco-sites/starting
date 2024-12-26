import { defineApp } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import GlobalTags, { getStyleSrc } from "site/components/GlobalTags.tsx";

export default defineApp(async (_req, ctx) => {
  const styleHref = await getStyleSrc();
  return (
    <>
      <Head>
        <link href={styleHref} rel="stylesheet" />
        <script defer src="/onedollarstats/tracker.js?2"></script>
      </Head>
      <GlobalTags />
      <ctx.Component />
    </>
  );
});
