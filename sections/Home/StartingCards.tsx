import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface Starting {
  label: string;
  image: ImageWidget;
  cta?: string;
  href: string;
  icons?: {
    active?: boolean;
    logos?: ImageWidget[];
  };
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  cards?: Starting[];
}

export default function StartingCards({
  title =
    "Designed to be flexible.<br><span class='text-[#949E9E]'>You can start from anywhere.</span>",
  cards = [
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/88b0bc70-00a1-4330-9f2e-88e3b68d3e12",
      label: "Landing Pages",
      cta: "Start now",
      href: "/",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/ed554700-2d66-43e2-b6b2-e1844a2db689",
      label: "Institucional & Blogs",
      cta: "Start now",
      href: "#",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/5ea5f2ce-0a0e-4105-8333-2cbddc6c1c6e",
      label: "MicroSaaS",
      href: "#",
      cta: "Start now",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/0b4a74da-5050-4641-a128-df3b606bfd05",
      label: "Portfolios & Professional",
      cta: "Start now",
      href: "#",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/31035191-0815-4a14-b2a5-559c451a19a3",
      label: "Headless Storefronts",
      cta: "Start now",
      href: "#",
    },
  ],
}: Props) {
  return (
    <div class="lg:mx-auto lg:max-w-[1440px] relative z-10 px-6 py-16 lg:py-40 lg:px-[120px] flex flex-col gap-20 justify-center items-center bg-[#030806]">
      {title &&
        (
          <h2
            class="font-albert-sans text-3xl lg:text-5xl font-medium text-white text-center"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          >
          </h2>
        )}
      <div class="grid md:grid-cols-6 gap-6 w-full">
        {cards?.map((card, index) => (
          <div
            class={`bg-[#030806] border border-[#0B1612] h-[350px] p-10 rounded-[24px] overflow-hidden relative ${
              index < 2 ? "lg:col-span-3" : "lg:col-span-2"
            } ${index < 4 ? "sm:col-span-3" : "sm:col-span-6"}
          }`}
          >
            <Picture>
              <Source
                src={card.image}
                width={360}
                height={215}
                decoding="async"
                loading="lazy"
                fetchPriority="low"
                media="(max-width: 640px)"
              />
              <Source
                src={card.image}
                width={1024}
                decoding="async"
                loading="lazy"
                fetchPriority="low"
                media="(min-width: 641px)"
              />
              <img
                src={card.image}
                decoding="async"
                loading="lazy"
                class="absolute inset-0 w-full object-cover object-center"
              />
            </Picture>
            <div class="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-start justify-end p-10 gap-4">
              <h3
                class="font-albert-sans text-[24px] lg:text-[32px] font-semibold leading-[110%] text-white"
                dangerouslySetInnerHTML={{
                  __html: card.label,
                }}
              />
              <div class="flex items-end gap-4">
                <a
                  class="flex px-3 py-[6px] lg:py-2 lg:px-4 items-center gap-2 rounded-[10px] bg-[#DA8FFF]"
                  href={card.href}
                >
                  <span class="font-bold text-[#0A2121] text-[12px] lg:text-[14px] leading-[140%]">
                    {card.cta}
                  </span>
                  <Icon
                    id="ArrowRight"
                    size={18}
                    class="shrink-0 text-base-700"
                  />
                </a>
                {card.icons?.active == true &&
                  (
                    <div class="flex items-start gap-[2.4px] lg:gap-[5.4px]">
                      {card?.icons?.logos?.map((logo) => (
                        <span class="p-[4.8px] lg:p-[7.2px] rounded-[45px] border-[0.45px] border-[#FFFFFF36] bg-[#FFFFFF17]">
                          <img
                            class="w-[14.4px] lg:w-[19.2px]"
                            width={22}
                            src={logo}
                            loading="lazy"
                          />
                        </span>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
