import type { ImageWidget } from "apps/admin/widgets.ts";
import {
  ShowcaseEditorTabbed,
  Tab,
} from "site/islands/NRF/ShowcaseEditorTabbed.tsx";
import { ShowcaseEditorAccordion } from "../NRF/ShowcaseEditorAccordion.tsx";
import { Head } from "$fresh/runtime.ts";
import { AppContext } from "site/apps/site.ts";

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @format html
   */
  subtitle?: string;
  tabs?: Tab[];
  position?: "left" | "right";
  trackId?: "1" | "2" | "3" | "4" | "5";
}

export const loader = async (
  props: Props,
  req: Request,
  ctx: AppContext,
) => {
  const device = ctx.device;

  return {
    ...props,
    isMobile: device,
  };
};

export default function BuildShowCase({
  title,
  subtitle,
  tabs,
  position,
  trackId,
  isMobile,
}: Omit<Props, "isMobile"> & {
  title: string;
  subtitle: string;
  tabs: Tab[];
  position: "left" | "right";
  trackId: "1" | "2" | "3" | "4" | "5";
  isMobile: string;
}) {
  return (
    <div
      id="hero"
      class={`relative bg-black py-20 lg:px-[120px] space-y-16 lg:space-y-20 px-6 min-h-[840px]`}
    >
      <Head>
        <script>
          {`document.addEventListener('keydown', function(event) {
            const checkbox = document.getElementById('demo-modal');
              if (event.key === 'Escape' || event.keyCode === 27) {
              if (checkbox.checked) {
                checkbox.checked = false;
              }
            }
          });`}
        </script>
      </Head>
      <div class="mx-auto flex flex-col items-center gap-16 lg:gap-20 border-t border-[#16E47D]">
        <div class="flex flex-col items-center gap-4 border-t border-[#16E47D]">
          <div class="flex flex-col items-center gap-6 lg:gap-12 z-10">
            <h2
              class="mx-6 lg:mx-0 inline-block text-[32px] lg:text-[48px] text-center leading-[115%] lg:tracking-[-1.44px] font-medium text-white max-w- lg:max-w-none"
              dangerouslySetInnerHTML={{
                __html: title ?? "",
              }}
            >
            </h2>
            {subtitle && (
              <h3
                class="mx-11 inline-block lg:text-[26px] text-center leading-[150%] text-gray-400 max-w-lg lg:max-w-none"
                dangerouslySetInnerHTML={{
                  __html: subtitle,
                }}
              >
              </h3>
            )}
          </div>
        </div>
      </div>
      <div class="mx-auto flex flex-col items-center">
        {isMobile === "desktop"
          ? (
            <ShowcaseEditorTabbed
              tabs={tabs}
              position={position}
              trackId={trackId}
            />
          )
          : <ShowcaseEditorAccordion tabs={tabs} />}
      </div>
    </div>
  );
}
