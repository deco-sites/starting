import Image from "deco-sites/std/components/Image.tsx";
import { useMemo } from "preact/hooks";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";

export interface Image {
  label: string;
  mobile: ImageType;
  desktop?: ImageType;
}

export interface Props {
  themeDark?: boolean;
  title?: string;
  url?: string;
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

const LogoSlider = ({ logos }: { logos: Image[] }) => {
  const renderLogoSlide = () => (
    <div className="flex animate-slide z-10">
      {logos.map((logo) => (
        <div
          class="flex items-center justify-center h-16 w-36 lg:w-52"
          target="_blank"
        >
          <img
            src={logo.mobile}
            alt={logo.label}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="logos overflow-hidden py-15 relative">
      {
        /* <div className="before:absolute before:inset-y-0 before:left-0 before:w-64 before:bg-gradient-to-l before:from-black/0 before:to-black before:z-20"></div>
      <div className="after:absolute after:inset-y-0 after:right-0 after:w-64 after:bg-gradient-to-r after:from-black/0 after:to-black after:z-20"></div> */
      }
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

export default function Brands({ title, url, images }: Props) {
  const list = useMemo(
    () =>
      images && images.length > 0 ? images : Array(6)
        .fill(null)
        .map((_, i) => IMAGES[i % 2]),
    [],
  );

  return (
    <div class="bg-black py-32">
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
        <LogoSlider logos={list} />
      </a>
    </div>
  );
}
