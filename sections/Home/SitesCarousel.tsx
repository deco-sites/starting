import Image from "deco-sites/std/components/Image.tsx";
import { useMemo } from "preact/hooks";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import Icon from "site/components/ui/Icon.tsx";

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

const LogoSlider = ({
  logos,
  direction,
}: {
  logos: Image[];
  direction: "left" | "right";
}) => {
  const renderLogoSlide = () => (
    <div
      className={`flex z-10 gap-[9px] lg:gap-[18px] ${
        direction === "left" ? "animate-slide" : "animate-slide-right"
      }`}
    >
      {logos.map((logo) => (
        <a
          href={logo.href ?? "/"}
          class="flex items-center justify-center h-[140px] rounded-lg lg:h-[270px] w-[248px] lg:w-[477px] hover:scale-105 transition ease-in-out duration-300"
          target="_blank"
        >
          <Image
            width={477}
            height={270}
            src={logo.desktop as string}
            alt={logo.desktop}
            preload={true}
            decoding="async"
            loading="lazy"
            fetchPriority="low"
          />
        </a>
      ))}
    </div>
  );

  return (
    <div className="logos py-15 relative">
      <div
        className="flex whitespace-nowrap gap-[9px] lg:gap-[18px]"
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
      </div>
    </div>
  );
};

export default function SitesCarousel({
  title,
  cta,
  firstSlider,
  secondSlider,
  thirdSlider,
}: Props) {
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
    <div class="bg-black py-12 lg:py-40 max-w-[1440px] mx-auto overflow-hidden">
      <div class="flex flex-col gap-y-12">
        {title && (
          <h2 class="text-white font-medium lg:text-[24px] leading-[100%] text-center z-10">
            {title}
          </h2>
        )}
        <div class="flex flex-col gap-[11.29px] lg:gap-6 justify-center logos py-15 relative">
          <div className="before:absolute before:inset-y-0 before:left-0 before:w-[90px] lg:before:w-64 before:bg-gradient-to-l before:from-black/0 before:to-[#030806] before:z-20">
          </div>
          <div className="after:absolute after:inset-y-0 after:right-0 after:w-[90px] lg:after:w-64 after:bg-gradient-to-r after:from-black/0 after:to-[#030806] after:z-20">
          </div>
          <a
            href={cta?.href}
            class="absolute w-[max-content] left-1/2 transform -translate-x-1/2 z-30 items-center border-[2px] lg:border-[5px] border-[#113032] bg-[#02F67C] hover:bg-[#2FD180] hover:scale-105 made-in-deco justify-center flex gap-2 lg:gap-4 px-3 py-2 lg:px-8 lg:py-6 font-[argent-pixel] text-[#113032] text-[20px] lg:text-[48px] leading-[120%] transition ease-in-out duration-300"
          >
            {cta?.label}
            <Icon id="MadeInDeco" size={58} class="hidden lg:block" />
            <Icon id="MadeInDecoMob" size={24} class="lg:hidden" />
          </a>
          <LogoSlider logos={firstList} direction="left" />
          <LogoSlider logos={secondList} direction="right" />
          <LogoSlider logos={thirdList} direction="left" />
        </div>
      </div>
    </div>
  );
}
