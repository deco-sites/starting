import { LoaderReturnType } from "$live/types.ts";
import type { Site } from "deco-sites/starting/routes/api/ranking.ts";
import { SiteList } from "./list/SiteList.tsx";

export interface TableHeaderTranslations {
  pagespeed: string;
  name: string;
  website: string;
  poweredBy: string;
}

export interface Props {
  title: string;
  tableHeader: TableHeaderTranslations;
  footer: {
    text: string;
    linkText?: string;
    linkHref?: string;
  };
  hideFavicons?: boolean;
  sites: LoaderReturnType<string>;
}

export default function RankingList({
  title,
  hideFavicons = false,
  tableHeader,
  footer,
  sites,
}: Props) {
  console.log(sites);
  return (
    <div class="min-h-[calc(100vh-98px)] text-zinc-100 flex justify-between flex-col max-w-screen-xl px-6 md:px-10 mx-auto">
      <div>
        <h1 class="text-[9vw] sm:text-[10vw] xl:text-[7vw] leading-[9vw] sm:leading-[10vw] xl:leading-[7vw] font-bold text-almost-white text-center mb-10">
          {title}
        </h1>
        {sites.length
          ? (
            <SiteList
              sites={[]}
              translations={tableHeader}
              hideFavicons={hideFavicons}
            />
          )
          : null}
      </div>
      <footer class="py-8 relative">
        <div class="pointer-events-none absolute bg-linear-shadowing h-72 w-screen bottom-full left-1/2 -translate-x-1/2" />
        <p class="text-almost-white text-[4vw] xl:text-[3vw] text-center">
          {footer.text} {footer.linkHref && footer.linkText
            ? (
              <a class="text-secondary" href={footer.linkHref}>
                {footer.linkText}
              </a>
            )
            : null}
        </p>
      </footer>
    </div>
  );
}
