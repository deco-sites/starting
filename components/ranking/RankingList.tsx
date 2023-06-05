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
  sites: LoaderReturnType<Site[]>;
}

export default function RankingList({
  title,
  hideFavicons = false,
  tableHeader,
  footer,
  sites,
}: Props) {
  return (
    <div class="min-h-[calc(100vh-98px)] text-zinc-100 flex justify-between flex-col max-w-screen-xl px-6 md:px-10 mx-auto">
      <div>
        <h1 class="text-[7vw] sm:text-[7vw] xl:text-[5vw] leading-[1.2] font-bold text-almost-white text-center mb-12">
          {title}
        </h1>
        {sites.length
          ? (
            <SiteList
              sites={sites}
              translations={tableHeader}
              hideFavicons={hideFavicons}
            />
          )
          : null}
      </div>
      <footer class="py-8">
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
