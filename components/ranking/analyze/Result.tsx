import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import { Site } from "deco-sites/starting/routes/api/ranking.ts";
import { IS_BROWSER } from "https://deno.land/x/fresh@1.1.4/src/runtime/utils.ts";
import { useEffect } from "preact/compat";
import { AnalyzeFormTranslation } from "../AnalyzeForm.tsx";
import { SiteList } from "../list/SiteList.tsx";

export interface Props {
  translations: AnalyzeFormTranslation;
  sites: Site[];
  siteUrl: string;
}

export default function Result({ translations, sites, siteUrl }: Props) {
  useEffect(() => {
    if (!IS_BROWSER) return;

    setTimeout(() => {
      document.getElementById(siteUrl)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }, 250);
  }, []);

  return (
    <div class="flex flex-col flex-1 md:px-6">
      <div class="h-full flex flex-col justify-center flex-1">
        <h1 class="md:text-5xl text-3xl text-center font-semibold">
          {translations.result.title}
        </h1>
        {sites.length > 1
          ? (
            <div class="relative mt-6">
              <div class="pointer-events-none bg-[linear-gradient(180deg,rgb(9,39,39),rgba(6,53,53,0))] absolute h-[70px] md:h-[100px] w-screen top-0 left-1/2 -translate-x-1/2" />
              <div class="max-h-[190px] md:max-h-[290px] overflow-hidden">
                <div class="md:py-24 py-16">
                  <SiteList sites={sites} hideHeader />
                </div>
              </div>
              <div class="pointer-events-none bg-[linear-gradient(180deg,rgba(6,53,53,0),rgb(8,46,47))] absolute h-[70px] md:h-[100px] w-screen bottom-0 left-1/2 -translate-x-1/2" />
            </div>
          )
          : (
            <div class="relative md:mt-10 mt-6">
              <div>
                <SiteList sites={sites} hideHeader hidePosition />
              </div>
              <p class="text-2xl mt-4 md:mt-8 text-center text-[#D98470]">
                {translations.result.failure.title}
              </p>
              <p class="text-2xl mt-6 md:mt-4 text-center">
                {translations.result.failure.description}
              </p>
            </div>
          )}
      </div>
      <div class="md:pb-20 pb-6 flex md:flex-row flex-col md:gap-6 gap-4 md:mt-0 mt-12">
        {translations.result.links.map((link) => (
          <a
            class={`${
              link.highlight
                ? "border-highlight bg-highlight text-[#161616]"
                : "border-white bg-transparent text-white"
            } md:w-1/3 w-full border-[1px] h-[120px] rounded p-4 flex justify-between gap-2`}
            href={link.href}
          >
            <span>{link.label}</span>
            <Icon id="ArrowRight" size={20} class="min-w-[20px]" />
          </a>
        ))}
      </div>
    </div>
  );
}
