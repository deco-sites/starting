import { App, AppContext as AC } from "@deco/deco";
import std, { Props } from "apps/compat/std/mod.ts";

import manifest, { Manifest } from "../manifest.gen.ts";

type StdApp = ReturnType<typeof std>;
export default function Site(
  state: Props,
): App<Manifest, Props, [
  StdApp,
]> {
  const newState = {
    ...state, global: state.theme ? [state.theme, ...state.global ?? []] : state.global
  }
  return {
    state: newState,
    manifest,
    dependencies: [
      std(newState),
    ],
  };
}

export type SiteApp = ReturnType<typeof Site>;
export type AppContext = AC<SiteApp>;
export { onBeforeResolveProps } from "apps/compat/$live/mod.ts";
export { Preview } from "apps/website/mod.ts";
