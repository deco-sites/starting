import { defineApp } from "$fresh/server.ts";
import { Context } from "deco/deco.ts";
import { asset, Head } from "$fresh/runtime.ts";
import GlobalTags from "site/components/GlobalTags.tsx";
import { STYLE_PATH } from "site/components/GlobalTags.tsx";

export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();
  const styleHref = asset(`${STYLE_PATH}?revision=${revision}`);
  return (
    <>
      <Head>
        <link href={styleHref} rel="stylesheet" />
      </Head>
      <GlobalTags />
      <ctx.Component />
    </>
  );
});
