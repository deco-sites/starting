import Image from "deco-sites/std/components/Image.tsx";
import { useMemo } from "preact/hooks";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import Share from "deco-sites/starting/components/ui/Share.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface Image {
  label: string;
  mobile: ImageType;
  desktop?: ImageType;
}

export interface Props {
  themeDark?: boolean;
  title?: string;
  images?: Image[];
}

const IMAGES = [
  {
    label: "deco",
    mobile:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fe7cd8ba-c954-45d6-9282-ee7d8ca8e3c7",
    href: "",
  },
  {
    label: "deco",
    mobile:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
    href: "",
  },
];

export default function Brands(props: Props) {
  const {
    themeDark,
    title,
    images,
  } = props;

  const list = useMemo(
    () =>
      images && images.length > 0
        ? images
        : Array(6).fill(null).map((_, i) => IMAGES[i % 2]),
    [],
  );

  const themeIsLigth = !themeDark;

  return (
    <div class={`${themeIsLigth ? "bg-[#F3FFF9]" : "bg-[#053535]"}`}>
      <div class="lg:container mx-4 flex flex-col gap-8 lg:gap-12 pb-8 md:pb-12 lg:pb-20">
        {
          title && (
            <h2 class={`${themeIsLigth ? "" : "text-white"} center text-[22px] md:text-[32px] opacity-90 text-center leading-[1.18]`}>
              {title}
            </h2>
          )
        }
        <div class="flex flex-wrap gap-x-8 gap-y-4 md:gap-x-16 md:gap-y-8 justify-center items-center">
          {list.map((element: Image) => (
            <div
              class="flex items-center justify-center"
              target="_blank"
            >
              <div
                class=""
                target="_blank"
              >
                <Picture>
                  <Source
                    media="(max-width: 767px)"
                    src={element.mobile}
                    width={80}
                    class=""
                  />
                  <Source
                    media="(min-width: 768px)"
                    src={element?.desktop ? element?.desktop : element.mobile}
                    width={200}
                  />
                <img
                    class="object-contain max-w-[80px] max-h-[60px] sm:max-h-[120px] md:max-w-[200px] "
                    src={element.mobile}
                    alt={element.label}
                />
                </Picture>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
