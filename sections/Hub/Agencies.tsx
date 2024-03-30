import Image from "deco-sites/std/components/Image.tsx";
import Header from "site/components/ui/SectionHeader.tsx";
import { useMemo } from "preact/hooks";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import Share from "site/components/ui/Share.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface Image {
  label: string;
  href: string;
  mobile: ImageType;
  desktop?: ImageType;
}

export interface Props {
  images?: Image[];
  button?: {
    show?: boolean;
    label?: string;
    href?: string;
  };
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

function Agencies(props: Props) {
  const {
    button,
    images,
  } = props;
  const list = useMemo(
    () =>
      images && images.length > 0
        ? images
        : Array(20).fill(null).map((_, i) => IMAGES[i % 2]),
    [],
  );

  return (
    <div class="lg:container mx-4">
      <div class="container py-8 flex flex-col gap-8 lg:gap-12 lg:py-10 lg:px-0">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {list.map((element: Image) => (
            <div
              class="flex bg-agenciesColor  hover:bg-hoverAgencie items-center justify-center h-[90px] w-[160px] sm:h-[110px] sm:w-[200px] border-2 border-gray-200 relative gap-4 rounded-[36px] lg:rounded-[64px]"
              href={element.href}
              target="_blank"
            >
              <a
                class="cursor-pointer w-full h-full absolute z-60"
                href={element.href}
                target="_blank"
              >
                <Picture>
                  <Source
                    media="(max-width: 767px)"
                    src={element.mobile}
                    width={84}
                    class=""
                  />
                  <Source
                    media="(min-width: 768px)"
                    src={element?.desktop ? element?.desktop : element.mobile}
                    width={110}
                  />
                  <a class="cursor-pointer" href={element.href} target="_blank">
                    <img
                      class="object-contain w-[84px] max-h-[35px] sm:h-[60px] md:w-[90px] "
                      src={element.mobile}
                      alt={element.label}
                    />
                  </a>
                </Picture>

                <div class="absolute top-[-5px] right-0 z-50 lg:right-1 lg:top-[5px] hidden">
                  <a href={element.href} target="_blank" class="cursor-pointer">
                    <Share />
                  </a>
                </div>
              </a>
            </div>
          ))}
        </div>

        {button?.show && (
          <div class="flex items-center justify-center">
            <a
              href={button?.href}
              target="_blank"
              class="border-2 border-gray-400 rounded-md w-[200px] h-[36px] flex items-center justify-center hover:bg-gray-100 font-semibold"
            >
              {button?.label}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Agencies;
