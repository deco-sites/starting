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
  const { images } = props;

  const list = useMemo(
    () =>
      images && images.length > 0 ? images : Array(6)
        .fill(null)
        .map((_, i) => IMAGES[i % 2]),
    [],
  );

  return (
    <div class="bg-black py-32">
      <div class="lg:container flex flex-wrap gap-6 justify-center items-center">
        {list.map((element: Image) => (
          <div class="flex items-center justify-center" target="_blank">
            <div class="" target="_blank">
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
                  class=""
                  src={element.mobile}
                  alt={element.label}
                />
              </Picture>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
