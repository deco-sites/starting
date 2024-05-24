import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Starting {
  label: string;
  image: ImageWidget;
  href: string;
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
        "../../static/new-landing/Benefit #2.png",
      label: "Landing Pages",
      href: "/",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/ed554700-2d66-43e2-b6b2-e1844a2db689",
      label: "Institucional & Blogs",
      href: "#",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/5ea5f2ce-0a0e-4105-8333-2cbddc6c1c6e",
      label: "MicroSaaS",
      href: "#",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/0b4a74da-5050-4641-a128-df3b606bfd05",
      label: "Portfolios & Professional",
      href: "#",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/31035191-0815-4a14-b2a5-559c451a19a3",
      label: "Headless Storefronts",
      href: "#",
    },
  ],
}: Props) {
  return (
    <div class="lg:mx-auto lg:max-w-6xl relative z-10 px-4 py-14 lg:py-40 lg:px-0 flex flex-col gap-20 justify-center items-center bg-[#030806]">
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
            class={`bg-[#030806] border border-[#0B1612] h-[350px] p-10 rounded-[24px] overflow-hidden ${
              index < 2 ? "md:col-span-3" : "md:col-span-2"
            }`}
            key={index}
          >
            <div class="h-full flex flex-col items-start justify-end gap-4">
              <Image
                width={300}
                height={270}
                src={card.image}
                alt={card.image}
                decoding="async"
                loading="lazy"
                class="w-full f-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
