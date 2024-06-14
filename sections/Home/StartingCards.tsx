import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

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
            key={index}
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.21967 3.96967C9.51256 3.67678 9.98744 3.67678 10.2803 3.96967L14.7803 8.46967C15.0732 8.76256 15.0732 9.23744 14.7803 9.53033L10.2803 14.0303C9.98744 14.3232 9.51256 14.3232 9.21967 14.0303C8.92678 13.7374 8.92678 13.2626 9.21967 12.9697L12.4393 9.75H3.75C3.33579 9.75 3 9.41421 3 9C3 8.58579 3.33579 8.25 3.75 8.25H12.4393L9.21967 5.03033C8.92678 4.73744 8.92678 4.26256 9.21967 3.96967Z"
                      fill="#0D1717"
                    />
                  </svg>
                </a>
                {card.icons?.active == true &&
                  (
                    <div class="flex items-start gap-[2.4px] lg:gap-[5.4px]">
                      {card?.icons?.logos?.map((logo) => (
                        <span class="p-[4.8px] lg:p-[7.2px] rounded-[45px] border-[0.45px] border-[#FFFFFF36] bg-[#FFFFFF17]">
                          <Image
                            class="w-[14.4px] lg:w-[19.2px]"
                            width={22}
                            src={logo}
                            alt={logo}
                            decoding="async"
                            loading="lazy"
                            fetchPriority={"low"}
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
