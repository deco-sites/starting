import Image from "deco-sites/std/components/Image.tsx";
import { useMemo } from "preact/hooks";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface Image {
  label?: string;
  mobile: ImageType;
  desktop?: ImageType;
  altText: string;
  /** @title Coming soon */
  active?: boolean;
  href: string;
}

export interface Props {
  button?: {
    show?: boolean;
    label?: string;
    href?: string;
  }
  images?: Image[];
}

const IMAGES = [
  {
    altText: "deco",
    desktop:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
    active: false,
    href: "",
  },
  {
    altText: "deco",
    desktop:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
    active: false,
    href: "",
  },
];

function Integrations(props: Props) {
  const {
    button,
    images,
  } = props;
  const list = useMemo(
    () =>
      images && images.length > 0
        ? images
        : Array(20).fill(null).map((_, i) => IMAGES[i % 2]) as Image[],
    [],
  );

  function Logo(element: Image) {
    return (
      <div
        class="flex items-center justify-center w-[109px] sm:w-[138px] sl:w-[124px] sl:h-[110px] sm:h-[110px]  h-[100px] lg:rounded-[16px]  md:w-[30%] lg:h-[120px] lg:w-[172px] md:h-[120px] border-2 border-gray-200 relative"
        style={{ "borderRadius": "16px" }}
      >
        <div class="w-full h-full z-60 relative flex items-center justify-center">
          <Picture>
            <Source
              media="(max-width: 767px)"
              src={element.mobile}
              width={60}
              class=""
            />
            <Source
              media="(min-width: 768px)"
              src={element.desktop ? element.desktop : element.mobile}
              width={110}
            />
            <img
              class="object-contain sm:w-[70px] sm:h-[60px] md:w-[90px] lg:w-[110px]"
              src={element.mobile}
            />
          </Picture>
          <div
            class={`${
              element.active ? "hidden" : "hidden"
            } flex justify-center items-center absolute top-2 text-[#616B6B] right-0 bg-[#EFF0F0] w-[100px] h-[22px] rounded-md mr-1`}
            style={{ "opacity": "0.85" }}
          >
            <small class="text-center text-[12px] md:text-[12px] pb-0.5 font-semibold">
              comming soon
            </small>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class="lg:container mx-4">
      <div class="container py-8 flex flex-col gap-8 lg:gap-12 lg:py-10 ">
        <div class="flex flex-col gap-8">
          <div class="flex flex-wrap justify-center gap-2 md:gap-4">
            {list.map((element) =>
              Logo(element)
            )}
          </div>
        </div>

        {
          button?.show && (
            <div class="flex items-center justify-center">
            <a
              href={button?.href}
              target="_blank"
              class="border-2 border-gray-400 rounded-md w-[200px] h-[36px] flex items-center justify-center hover:bg-gray-100 font-semibold"
            >
              {button?.label}
            </a>
          </div>  
          )
        }
      </div>
    </div>
  );
}

export default Integrations;
