import Image from "deco-sites/std/components/Image.tsx";
import { useMemo } from "preact/hooks";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import { App, AppContext as AC } from "$live/mod.ts";

export interface Image {
  label: string;
  mobile: ImageType;
  desktop?: ImageType;
  href?: string;
}

export interface Props {
  themeDark?: boolean;
  title?: string;
  cta?: {
    label?: string;
    href?: string;
  };
  firstSlider?: Image[];
  secondSlider?: Image[];
  thirdSlider?: Image[];
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

const THIRD_IMAGES = [
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

const TITLE = "Trusted by the most awesome super duper incredible brand:";

const LogoSlider = (
  { logos, direction }: { logos: Image[]; direction: "left" | "right" },
) => {
  const renderLogoSlide = () => (
    <div
      className={`flex z-10 ${
        direction === "left" ? "animate-slide" : "animate-slide-right"
      }`}
    >
      {logos.map((logo) => (
        <a
          href={logo.href ?? "/"}
          class="flex items-center mx-[9px] justify-center h-[140px] lg:h-[270px] w-[248px] lg:w-[477px]"
          target="_blank"
        >
          <img
            src={logo.desktop}
            alt={logo.label}
          />
        </a>
      ))}
    </div>
  );

  return (
    <div className="logos overflow-hidden py-15 relative">
      <div className="before:absolute before:inset-y-0 before:left-0 before:w-64 before:bg-gradient-to-l before:from-black/0 before:to-[#030806] before:z-20">
      </div>
      <div className="after:absolute after:inset-y-0 after:right-0 after:w-64 after:bg-gradient-to-r after:from-black/0 after:to-[#030806] after:z-20">
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

export default function SitesCarousel(
  { title, cta, firstSlider, secondSlider, thirdSlider }: Props,
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
  const thirdList = useMemo(
    () =>
      thirdSlider && thirdSlider.length > 0 ? thirdSlider : Array(6)
        .fill(null)
        .map((_, i) => THIRD_IMAGES[i % 2]),
    [],
  );

  return (
    <div class="bg-black py-12 lg:py-40 max-w-[1440px] mx-auto">
      <div class="flex flex-col gap-y-12">
        {title && (
          <h2 class="text-white font-medium lg:text-[24px] leading-[100%] text-center z-10">
            {title}
          </h2>
        )}
        <div class="flex flex-col gap-6 pt-6 justify-center">
          <a
            href={cta?.href}
            class="absolute w-[max-content] left-1/2 transform -translate-x-1/2 z-30 items-center border-[5px] border-[#113032] bg-[#02F67C] made-in-deco justify-center flex gap-4 px-8 py-6 font-[argent-pixel] text-[#113032] text-[20px] lg:text-[48px] leading-[120%]"
          >
            {cta?.label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="59"
              viewBox="0 0 58 59"
              fill="none"
            >
              <path
                d="M53.4688 17.7188V30.4062H49.8438V34.0312H46.2188V37.6562H42.5938V41.2812H38.9688V44.9062H35.3438V48.5312H31.7188V52.1562H26.2813V48.5312H22.6563V44.9062H19.0313V41.2812H15.4063V37.6562H11.7813V34.0312H8.15626V30.4062H4.53126V17.7188H8.15626V14.0938H11.7813V9.5625H23.5625V14.0938H27.1875V17.7188H30.8125V14.0938H34.4375V9.5625H46.2188V14.0938H49.8438V17.7188H53.4688Z"
                fill="#113032"
              />
            </svg>
          </a>
          <LogoSlider logos={firstList} direction="left" />
          <LogoSlider logos={secondList} direction="right" />
          <LogoSlider logos={thirdList} direction="left" />
        </div>
      </div>
    </div>
  );
}
