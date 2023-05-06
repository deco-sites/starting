import type { Site } from "../RankingList.tsx";
import Icon from "deco-sites/starting/components/ui/Icon.tsx";

export interface Props {
  site: Site;
  position: number;
  hideFavicons: boolean;
}

export function SiteItem({ position, site, hideFavicons }: Props) {
  const url = new URL(site.website);
  return (
    <tr class={`${position > 1 ? "border-t-[1px]" : ""} border-[#525252]`}>
      <td class="md:text-xl text-sm font-semibold">{position}</td>
      <td class="md:w-[150px] text-center">
        <div class="inline-flex relative justify-center md:py-6 py-4 px-2">
          <svg
            width="52"
            height="52"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#02F67C"
            stroke-width="3"
            stroke-dasharray={`${site.pagespeedPoints}, 100`}
            class="md:w-[52px] md:h-[52px] w-9 h-9"
          >
            <path
              d="M18 2.0845
			a 15.9155 15.9155 0 0 1 0 31.831
			a 15.9155 15.9155 0 0 1 0 -31.831"
              stroke-linejoin="round"
              stroke-linecap="round"
            />
          </svg>
          <span class="font-semibold text-secondary md:text-xl text-base -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 absolute">
            {site.pagespeedPoints}
          </span>
        </div>
      </td>
      <td class="">
        <a href={site.website}>
          {hideFavicons
            ? null
            : (
              <div class="md:p-[10px] p-[6px] rounded-full bg-white md:mr-4 mr-2 inline-block align-middle">
                <img
                  width={20}
                  height={20}
                  class="w-3 h-3 md:w-5 md:h-5"
                  src={`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${site.website}&size=32`}
                />
              </div>
            )}
          <span class="md:text-[28px] md:leading-[32px] text-base inline-block align-middle font-semibold">
            {site.name}
          </span>
        </a>
      </td>
      <td class="text-base md:table-cell hidden">
        <a href={site.website}>{url.host.replace("www.", "")}</a>
      </td>
      <td>
        <div class="flex md:gap-2 gap-1 items-center justify-end md:justify-start">
          <Icon
            class="md:w-[69px] md:h-[28px] w-[35px] h-[14px] "
            id="VndaLogo"
            width={69}
            height={28}
          />
          +
          <Icon
            class="md:w-[66px] md:h-[24px] w-[33px] h-[12px] "
            id="VTEXLogo"
            width={66}
            height={24}
          />
        </div>
      </td>
    </tr>
  );
}
