import Image from "apps/website/components/Image.tsx";
import { useMemo } from "preact/hooks";
import { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface Image {
  img?: ImageWidget;
  altText?: string;
  href: string;
}

export interface Props {
  title?: string;
  brands?: {
    logos?: Image[];
  };
}

const IMAGES = [
  {
    altText: "deco",
    img:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
    href: "/",
  },
  {
    altText: "deco",
    img:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
    href: "",
  },
];

function Investors(props: Props) {
  const {
    title = "Investors & Supporters",
    brands,
  } = props;
  const listBrands = useMemo(
    () =>
      brands?.logos && brands?.logos.length > 0
        ? brands?.logos
        : Array(20).fill(null).map((_, i) => IMAGES[i % 2]) as Image[],
    [],
  );

  function Logo(element: Image) {
    return (
      <div
        class="flex items-center justify-center rounded-[20px] w-auto backdrop-filter backdrop-blur-22 relative"
        style={{ "borderRadius": "16px" }}
      >
        <div class="w-full h-full z-60 relative flex items-center justify-center px-5 py-[10px] gap-4">
          {element.img && (
            <Picture>
              <Source
                media="(max-width: 767px)"
                src={element.img ?? ""}
                width={100}
                class=""
              />
              <Source
                media="(min-width: 768px)"
                src={element.img ?? ""}
                width={110}
              />
              <img
                class="object-contain w-[110px] dark:hidden"
                src={element.img ?? ""}
              />
            </Picture>
          )}
        </div>
      </div>
    );
  }

  return (
    <div class="bg-[#0D1717] relative z-10">
      <div class="lg:container py-8 lg:py-[52px] lg:py-8 lg:px-16">
        <div class="w-full flex flex-col gap-4 items-center">
          <div class="font-albert-sans text-white font-medium text-[16px] lg:text-[24px] leading-[100%] tracking-[-0.48px]">
            {title}
          </div>
          <div class="flex flex-wrap justify-center gap-2 md:gap-4">
            {listBrands.map((element, index) => (
              <Logo key={index} {...element} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investors;
