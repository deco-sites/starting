import { useMemo } from "preact/hooks";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import Image from "apps/website/components/Image.tsx";

export interface Image {
  label: string;
  mobile: ImageType;
  desktop?: ImageType;
}

export interface Props {
  themeDark?: boolean;
  title?: string;
  url?: string;
  firstSlider?: Image[];
  secondSlider?: Image[];
}

const FIRST_IMAGES = [
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

const SECOND_IMAGES = [
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

const LogoSlider = (
  { logos, direction }: { logos: Image[]; direction: "left" | "right" },
) => {
  const renderLogoSlide = () => (
    <div
      className={`flex z-10 gap-4 lg:gap-6 ${
        direction === "left" ? "animate-slide" : "animate-slide-right"
      }`}
    >
      {logos.map((logo) => (
        <div
          class="flex items-center justify-center h-[30px] w-[72px] lg:w-52"
          target="_blank"
        >
          <img
            width={144}
            height={30}
            src={logo.mobile}
            alt={logo.mobile}
            decoding="async"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="logos overflow-hidden py-15 relative">
      <div className="before:absolute before:inset-y-0 before:left-0 before:w-[70px] lg:before:w-64 before:bg-gradient-to-l before:from-black/0 before:to-[#030806] before:z-20">
      </div>
      <div className="after:absolute after:inset-y-0 after:right-0 after:w-[70px] lg:after:w-64 after:bg-gradient-to-r after:from-black/0 after:to-[#030806] after:z-20">
      </div>
      <div
        className="flex whitespace-nowrap"
        onMouseEnter={(
          e,
        ) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(
          e,
        ) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {renderLogoSlide()}
        {renderLogoSlide()}
        {renderLogoSlide()}
        {renderLogoSlide()}
        {renderLogoSlide()}
      </div>
    </div>
  );
};

export default function Brands(
  { title, url, firstSlider, secondSlider }: Props,
) {
  const firstList = useMemo(
    () =>
      firstSlider && firstSlider.length > 0 ? firstSlider : Array(6)
        .fill(null)
        .map((_, i) => FIRST_IMAGES[i % 2]),
    [],
  );
  const secondList = useMemo(
    () =>
      secondSlider && secondSlider.length > 0 ? secondSlider : Array(6)
        .fill(null)
        .map((_, i) => SECOND_IMAGES[i % 2]),
    [],
  );

  return (
    <div class="bg-black pb-12 lg:pb-[124px] pt-6 lg:pt-10 max-w-[1440px] mx-auto">
      <a
        href={url}
        target={url?.includes("http") ? "_blank" : "_self"}
        class="flex flex-col gap-y-12"
      >
        {title && (
          <h2 class="text-white font-medium lg:text-[24px] leading-[100%] text-center z-10">
            {title}
          </h2>
        )}
        <div class="flex flex-col gap-4 lg:gap-6 pt-6">
          <LogoSlider logos={firstList} direction="left" />
          <LogoSlider logos={secondList} direction="right" />
        </div>
      </a>
    </div>
  );
}
