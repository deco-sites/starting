import { HeroEditorTabbed, Tab } from "site/islands/NRF/HeroEditorTabbed.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { useSignal } from "@preact/signals";

interface CTA {
  id?: string;
  href: string;
  text: string;
  variant: "Normal" | "Reverse" | "Product Hunt";
}

export interface Props {
  /**
   * @format html
   */
  title: string;
  /**
   * @format html
   */
  subtitle?: string;
  cta?: CTA[];
  alert?: {
    image?: ImageWidget;
    text?: string;
    mobileText?: string;
    href?: string;
  };
  tabs?: Tab[];
  demo?: {
    id?: string;
    title?: string;
    visible?: boolean;
  };
  hideEditor?: boolean;
}

function ProductHuntCTA({ id, href, text }: CTA) {
  return (
    <a
      id={id}
      href={href}
      class="bg-white/5 border border-white/[0.15] flex items-center gap-6 p-4 rounded-full backdrop-blur-xl"
    >
      <div class="bg-[#02F67C] text-black px-6 py-2 flex items-center rounded-full">
        {text}
      </div>
    </a>
  );
}

export default function Hero({
  title,
  subtitle,
  cta,
  alert,
  tabs,
  demo,
  hideEditor,
}: Props) {
  const open = useSignal(false);

  return (
    <div
      id="hero"
      class={`relative bg-black space-y-16 lg:space-y-20 ${
        hideEditor ? "" : "min-h-screen"
      }`}
    >
      <div class="max-w-fit mx-auto flex flex-col items-center gap-16 lg:gap-20">
        <div class="flex flex-col items-center gap-4 mt-36 lg:mt-48">
          {alert?.text && (
            <a
              href={alert.href}
              target={alert.href?.includes("http") ? "_blank" : "_self"}
              class="mx-6 lg:mx-0 flex items-center gap-4 rounded-[56px] bg-white/5 border border-white/[.15] backdrop-blur-xl py-2 px-4 z-10 text-white hover:scale-[1.05] transition-all duration-300 ease-out cursor-pointer"
            >
              <img
                class="w-5 h-5"
                src={alert.image}
                alt="icon"
                width={20}
                height={20}
              />
              <p class="hidden lg:block">{alert.text}</p>
              <p class="text-sm lg:hidden">{alert.mobileText || alert.text}</p>
              <svg
                class="h-5 w-5 hidden md:block"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.7441 4.41083C11.0695 4.08539 11.5971 4.08539 11.9226 4.41083L16.9226 9.41083C17.248 9.73626 17.248 10.2639 16.9226 10.5893L11.9226 15.5893C11.5971 15.9148 11.0695 15.9148 10.7441 15.5893C10.4186 15.2639 10.4186 14.7363 10.7441 14.4108L14.3215 10.8334H4.66666C4.20642 10.8334 3.83333 10.4603 3.83333 10.0001C3.83333 9.53984 4.20642 9.16675 4.66666 9.16675H14.3215L10.7441 5.58934C10.4186 5.2639 10.4186 4.73626 10.7441 4.41083Z"
                  fill="white"
                />
              </svg>
            </a>
          )}
          <div class="flex flex-col items-center gap-6 lg:gap-12 z-10">
            <div
              class="mx-6 lg:mx-0 inline-block text-[36px] lg:text-[104px] text-center leading-[110%] lg:leading-[100%] lg:tracking-[-3.12px] font-medium text-white max-w-lg lg:max-w-none"
              dangerouslySetInnerHTML={{
                __html: title,
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
            {cta && (
              <div class="flex flex-col items-center lg:items-start lg:flex-row gap-4">
                {cta?.map((item) =>
                  item.variant === "Product Hunt"
                    ? <ProductHuntCTA {...item} />
                    : (
                      <a
                        key={item?.id}
                        id={item?.id}
                        href={item?.href}
                        target={item?.href.includes("http")
                          ? "_blank"
                          : "_self"}
                        class={`group relative relative overflow-hidden rounded-full hover:bg-gradient-to-r px-6 py-2 lg:px-8 lg:py-3 transition-all duration-300 ease-out ${
                          item.variant === "Reverse"
                            ? "bg-[#113032] hover:from-[#113032] hover:to-[#0A1F1F] text-white hover:shadow-hero-reverse"
                            : "bg-[#02F67C] hover:from-[#02F67C] hover:to-[#06E474] text-black hover:shadow-hero"
                        }`}
                      >
                        <span class="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40">
                        </span>
                        <span class="relative font-medium lg:text-[20px]">
                          {item?.text}
                        </span>
                      </a>
                    )
                )}
                {demo?.visible && (
                  <button
                    id={demo?.id}
                    onClick={() => {
                      globalThis.window?.scrollTo(0, 0);
                      open.value = true;
                    }}
                    class={`group relative relative overflow-hidden rounded-full hover:bg-gradient-to-r px-6 py-2 lg:px-8 lg:py-3 transition-all duration-300 ease-out bg-[#DA8FFF] hover:from-[#DA8FFF] hover:to-[#DA8FFF] text-[113032] hover:shadow-watch-our-demo`}
                  >
                    <span class="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40">
                    </span>
                    <span class="relative font-medium lg:text-[20px]">
                      {demo?.title || "Watch our demo"}
                    </span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {!hideEditor && (
        <div class="mx-auto flex flex-col items-center">
          <HeroEditorTabbed tabs={tabs} />
        </div>
      )}
      {open.value && (
        <div class="modal">
          <input
            class="modal-toggle hidden"
            type="checkbox"
            checked={open.value}
          />
          <div class="modal">
            <div
              class="z-50 absolute bg-black/90 top-0 left-0 h-screen w-screen flex items-center justify-center backdrop-blur"
              onClick={() => {
                open.value = false;
              }}
            >
              <div class="relative z-10 p-3 rounded-[24px] border border-white/[0.15]">
                <div class="relative overflow-hidden rounded-[20px] w-[80vw]">
                  <div style="padding:50.94% 0 0 0;position:relative;">
                    <iframe
                      src="https://player.vimeo.com/video/903151584?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      frameborder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      style="position:absolute;top:0;left:0;width:100%;height:100%;"
                      title="deco.cx | The open-source frontend platform for pros"
                    >
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      )}
    </div>
  );
}
