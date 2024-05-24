import type { ImageWidget } from "apps/admin/widgets.ts";
import { ShowcaseEditorTabbed, Tab } from "site/islands/NRF/ShowcaseEditorTabbed.tsx";
import { Head } from "$fresh/runtime.ts";

interface CTA {
  id?: string;
  href: string;
  text: string;
  variant: "Normal" | "Reverse" | "Product Hunt";
}

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
  position?: 'left' | 'right'
  hideEditor?: boolean;
}

export default function BuildShowCase({
  title,
  subtitle,
  tabs,
  hideEditor,
  position
}: Props) {
  return (
    <div
      id="hero"
      class={`relative bg-black space-y-16 lg:space-y-20 ${
        hideEditor ? "" : "min-h-screen"
      }`}
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
      <div class="max-w-fit mx-auto flex flex-col items-center gap-16 lg:gap-20">
        <div class="flex flex-col items-center gap-4 mt-36 lg:mt-48">
          <div class="flex flex-col items-center gap-6 lg:gap-12 z-10">
            <div
              class="mx-6 lg:mx-0 inline-block text-[32px] lg:text-[48px] text-center leading-[115%] lg:tracking-[-1.44px] font-medium text-white max-w-lg lg:max-w-none"
              dangerouslySetInnerHTML={{
                __html: title ?? '',
              }}
            >
            </div>
            {subtitle && (
              <div
                class="mx-11 inline-block lg:text-[26px] text-center leading-[150%] text-gray-400 max-w-lg lg:max-w-none"
                dangerouslySetInnerHTML={{
                  __html: subtitle,
                }}
              >
              </div>
            )}
            {/* {cta && (
              <div class="flex flex-col items-center lg:items-start lg:flex-row gap-4">
                {(demo?.visible) && (
                  <label
                    for="demo-modal"
                    id={demo?.id}
                    class={`group relative relative overflow-hidden rounded-full hover:bg-gradient-to-r px-6 py-2 lg:px-8 lg:py-3 transition-all duration-300 ease-out bg-[#DA8FFF] hover:from-[#DA8FFF] hover:to-[#DA8FFF] text-[113032] hover:shadow-watch-our-demo`}
                  >
                    <span class="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40">
                    </span>
                    <span class="text-black relative font-medium lg:text-[20px]">
                      {demo?.title || "Watch our demo"}
                    </span>
                  </label>
                )}
              </div>
            )} */}
          </div>
        </div>
      </div>
      {!hideEditor && (
        <div class="mx-auto flex flex-col items-center">
          <ShowcaseEditorTabbed tabs={tabs} position={position}/>
        </div>
      )}

    </div>
  );
}
