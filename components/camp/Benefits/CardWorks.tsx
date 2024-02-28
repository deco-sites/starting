import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

/**
 * @title Card
 */
export interface Props {
  icon: LiveImage;
  /**
   * @format html
   */
  title: string;
  /**
   * @format html
   * @title content
   */
  content: string;
}

export default function CardWorks({ props }: { props: Props }) {
  const { icon, title, content } = props;

  return (
    <div class="flex flex-col gap-4 p-8 md:px-[2.1rem] md:py-11 w-full md:w-[calc(50%-1.5rem)] xl:w-[calc(25%-2rem+8px)] bg-[#000D0D] rounded-3xl">
      <div class="bg-base-200 rounded-full w-[56px] h-[56px] flex justify-center items-center">
        <Image width={24} height={24} src={icon} />
      </div>
      <h3
        class={"text-white font-semibold text-[1.5rem] leading-[1.65rem] lg:text-2xl "}
        dangerouslySetInnerHTML={{ __html: title }}
      >
      </h3>
      <span
        class={"text-base mt-auto text-white"}
        dangerouslySetInnerHTML={{ __html: content }}
      >
      </span>
    </div>
  );
}
