import { App, AppContext as AC } from "$live/mod.ts";
import std, { Props as StdProps } from "apps/compat/std/mod.ts";
import $live, { Props as LiveProps } from "apps/compat/$live/mod.ts";

import manifest, { Manifest } from "../manifest.gen.ts";

type StdApp = ReturnType<typeof std>;
type LiveApp = ReturnType<typeof $live>;

interface Props extends StdProps, LiveProps {}

export default function Site(
  state: Props,
): App<Manifest, Props, [
  StdApp, LiveApp
]> {
  return {
    state,
    manifest,
    dependencies: [std(state), $live(state)],
  };
}

export type SiteApp = ReturnType<typeof Site>;
export type AppContext = AC<SiteApp>;
export { onBeforeResolveProps } from "apps/compat/$live/mod.ts";
export { Preview } from "apps/website/mod.ts";
