import type { SiteApp } from "./apps/site.ts";
import { forApp } from "@deco/deco/web";
export const Runtime = forApp<SiteApp>();
