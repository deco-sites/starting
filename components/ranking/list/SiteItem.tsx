import type { Site } from "deco-sites/starting/routes/api/ranking.ts";
import Icon, {
  AvailableIcons,
} from "deco-sites/starting/components/ui/Icon.tsx";

export interface Props {
  site: Site;
  position: number;
  hideFavicons: boolean;
}

const logoIds: Record<string, AvailableIcons> = {
  vnda: "VndaLogo",
  vtex: "VTEXLogo",
  shopify: "ShopifyLogo",
  deco: "DecoLogo",
  occ: "OCCLogo",
};

export function SiteItem({ position, site, hideFavicons }: Props) {
  const url = new URL(site.website);
  return (
    <tr
      id={url.origin}
      class={`${position > 1 ? "border-t-[1px]" : ""} border-[#525252]`}
    >
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
      <td class="max-w-[300px]">
        <a href={site.website} class="flex items-center">
          {hideFavicons
            ? null
            : (
              <div class="min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] md:max-w-[40px] md:max-h-[40px] md:min-w-[40px] md:min-h-[40px] md:p-[10px] p-[6px] rounded-full bg-white md:mr-4 mr-2 inline-block align-middle">
                <img
                  width={20}
                  height={20}
                  class="w-full h-full"
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
        <div class="poweredby-list flex items-center justify-end md:justify-center">
          {Object.entries(site.poweredBy).map(([key, value]) =>
            value
              ? (
                <div class="flex items-center justify-center">
                  <Icon
                    class={`md:w-[120px] w-[60px] ${
                      key === "deco" ? "text-primary" : ""
                    }`}
                    id={logoIds[key]}
                    strokeWidth={1}
                    width={120}
                    height={32}
                  />
                </div>
              )
              : null
          )}
        </div>
      </td>
    </tr>
  );
}
