import { Site } from "deco-sites/starting/routes/api/ranking.ts";
import { TableHeaderTranslations } from "../RankingList.tsx";
import { SiteItem } from "./SiteItem.tsx";

export interface Props {
  sites: Site[];
  hideFavicons?: boolean;
  hideHeader?: boolean;
  translations?: TableHeaderTranslations;
}

export function SiteList({
  sites,
  hideFavicons = false,
  hideHeader,
  translations,
}: Props) {
  return (
    <table class="w-full text-left table-auto border-spacing-1">
      {hideHeader ? null : (
        <thead class="md:table-header-group hidden">
          <th></th>
          <th class="font-semibold text-base text-center">
            {translations?.pagespeed}
          </th>
          <th class="font-semibold text-base">{translations?.name}</th>
          <th class="font-semibold text-base">{translations?.website}</th>
          <th class="font-semibold text-base text-center">
            {translations?.poweredBy}
          </th>
        </thead>
      )}
      <tbody class="">
        {sites.map((site, index) => (
          <SiteItem
            site={site}
            hideFavicons={hideFavicons}
            key={index}
            position={index + 1}
          />
        ))}
      </tbody>
    </table>
  );
}
