import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "deco-sites/std/components/Image.tsx";

/**
 * @title {{{id}}}
 */
export interface Tag {
  id: string;
  /**
   * @format rich-text
   */
  text: string;
}

export interface Props {
  image: ImageWidget;
  title?: string;
  subtitle?: string;
  tags: Tag[];
}

export default function Teams({ image, title, subtitle, tags }: Props) {
  return (
    <div class="relative overflow-hidden flex justify-center z-10 my-20">
      <div class="flex flex-col lg:flex-row gap-4 items-center justify-center rounded-lg bg-[#070D0D] lg:max-h-[26rem] w-fit max-w-[1200px] p-4">
        <Image
          src={image}
          width={500}
          height={500}
          class="w-full lg:w-[50%] max-w-[600px]"
        />
        <div class="flex flex-col gap-8 p-6">
          <h2 class="text-3xl md:text-4xl lg:text-[40px] text-white font-medium">
            {title}
          </h2>
          <p>{subtitle}</p>
          <div class="flex flex-row gap-4 text-white">
            {tags.map((tag) => (
              <span
                class="flex flex-col bg-[#162121] py-4 px-6 rounded-xl"
                dangerouslySetInnerHTML={{ __html: tag.text }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
