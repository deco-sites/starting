import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

/**
 * @titleBy title
 */
export interface Props {
  icon: LiveImage;
  title: string;
  /**
   * @format html
   */
  content: string;
}

const BASE_PROPS = {
  title:
    "<p>Leading brands demand websites and digital storefronts that capture attention in milliseconds: fast and personalized experiences.</p>",
  subtitle:
    "<p>...Yet, the supply of developers equipped to deliver these needs lags far behind.</p>",
  cardProblem: [
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/d4f7f0db-7eed-4cce-b4c0-f40457abee05",
      title: "Slow Performance",
      content:
        "<p>&nbsp;Achieving near-instantaneous load times remains a demanding challenge, critical for user retention.</p>",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/1f418f4a-793a-4bc9-aa63-9b145a99aaaf",
      title: "Hard to Personalize",
      content:
        "<p>Tailoring content to resonate with each visitor's unique preferences is a nuanced art few have mastered.</p>",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/4815a11d-22dd-4625-afa8-3eb7c9a2036d",
      title: "Poor Collaboration",
      content:
        "<p>Developers rarely build websites that enable marketing teams and other stakeholders to manage and update with ease.</p>",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/b312ca82-6f38-4dc9-a37d-46d510b95185",
      title: "Overwhelming Choices",
      content:
        "<p>Selecting the right stack from an ever-expanding arsenal is daunting yet essential for high-performance outcomes.</p>",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/bde0b27d-11e6-48ec-b223-184731f2c487",
      title: "Skill Upgradation",
      content:
        "<p>Staying current with the evolving web development landscape is hard without a clear direction or mentorship.</p>",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/a5e2dd88-732b-4f68-bcdc-35a5d2d762ab",
      title: "Integration Overload",
      content:
        "<p>Merging various platforms and tools into a cohesive system is complex, often hindering developer productivity.</p>",
    },
  ],
};

export default function CardProblem({ props }: { props: Props }) {
  const { icon, title, content } = { ...BASE_PROPS, ...props };

  return (
    <div class="flex flex-col gap-4 px-4 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333333%-3rem+16px)]">
      <div class="bg-[#EF4444] border-[#B91C1C] bordered rounded-full w-[56px] h-[56px] flex justify-center items-center">
        <Image width={24} height={24} src={icon} />
      </div>
      <h3 class={"text-white text-3xl font-semibold lg:text-2xl xl:text-3xl"}>
        {title}
      </h3>
      <span
        class={"text-xl lg:text-lg xl:text-xl mt-auto text-white"}
        dangerouslySetInnerHTML={{ __html: content }}
      >
      </span>
    </div>
  );
}
