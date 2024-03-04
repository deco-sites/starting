import { Image as LiveImage } from "deco-sites/std/components/types.ts";

import BenefitCard from "./BenefitCard.tsx";

/**
 * @titleBy title
 */
interface Item {
  icon: LiveImage;
  title: string;
  subTitle: string;
}

export interface Props {
  items: Item[];
}

const BASE_PROPS = {
  items: [
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/22c5637f-a952-4fe8-8c22-f2cd53f14ec4",
      title: "TypeScript, JSX, Tailwind ",
      subTitle: "Stack we will use",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/a9b63e44-031c-4aa7-8349-d6f786d97e3c",
      title: "Intermediate",
      subTitle: "Recommended Experience",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/66141bbe-ebde-410e-b575-2916c870c7fb",
      title: "15h of video content",
      subTitle: "3 weeks, 5h per week",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/c3ba4303-cec5-4911-aaf8-66e959ee0996",
      title: "Flexible Scheduele",
      subTitle: "Learn in your pace",
    },
  ],
};

export default function Benefits({ props }: { props: Props }) {
  const { items } = { ...BASE_PROPS, ...props };

  return (
    <div class="w-full h-full bg-black">
      <div class="container md:flex md:gap-6 md:flex-wrap py-10 px-12 lg:grid lg:grid-cols-4 divide-y lg:divide-x lg:divide-y-0 border-[#A1A1AA]">
        {items.map((item, index) => (
          <>
            <hr
              class={`hidden h-[131px] self-end bg-[#A1A1AA] ${
                (index + 1) % 2 == 0 ? "md:block w-[1px] lg:hidden" : ""
              }`}
            />
            <BenefitCard
              image={item.icon}
              title={item.title}
              subTitle={item.subTitle}
              position={index}
            />
          </>
        ))}
      </div>
    </div>
  );
}
