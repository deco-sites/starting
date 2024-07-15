import Image from "apps/website/components/Image.tsx";
import { useMemo } from "preact/hooks";
import { ImageWidget } from "apps/admin/widgets.ts";
import { AppContext } from "site/apps/site.ts";

export interface Image {
  img: ImageWidget;
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

export const loader = (props: Props, _req: Request, ctx: AppContext) => {
  const device = ctx.device;

  return {
    ...props,
    isMobile: device,
  };
};

const LogoSlider = ({ logos }: { logos: Image[] }) => {
  const renderLogoSlide = () => (
    <div className={`flex z-10 gap-4 lg:gap-6 animate-slide`}>
      {logos.map((logo) => (
        <a
          class="flex items-center justify-center h-[30px] w-[82px] lg:w-52 m-5"
          href={logo.href}
          target="_blank"
        >
          <Image
            width={144}
            src={logo.img}
            alt={logo.img}
            decoding="async"
            loading="lazy"
            fetchPriority="low"
          />
        </a>
      ))}
    </div>
  );

  return (
    <div className="logos overflow-hidden py-15 relative w-full">
      <div className="before:absolute before:inset-y-0 before:left-0 before:w-[60px] lg:before:w-64 before:bg-gradient-to-l before:from-black/0 before:to-[#0D1717] before:z-20">
      </div>
      <div className="after:absolute after:inset-y-0 after:right-0 after:w-[60px] lg:after:w-64 after:bg-gradient-to-r after:from-black/0 after:to-[#0D1717] after:z-20">
      </div>
      <div
        className="flex whitespace-nowrap gap-4"
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

function Investors({
  title,
  brands,
}: Omit<Props, "isMobile"> & {
  title?: string;
  brands?: {
    logos?: Image[];
  };
  isMobile: string;
}) {
  const listBrands = useMemo(
    () =>
      brands?.logos && brands?.logos.length > 0 ? brands?.logos : (Array(20)
        .fill(null)
        .map((_, i) => IMAGES[i % 2]) as Image[]),
    [],
  );

  return (
    <div class="bg-[#0D1717] relative z-10">
      <div class="lg:container py-8 lg:py-[52px] lg:py-8 lg:px-16">
        <div class="w-full flex flex-col gap-8 items-center">
          <div class="font-albert-sans text-white font-medium text-[16px] lg:text-[24px] leading-[100%] tracking-[-0.48px]">
            {title}
          </div>
          <LogoSlider logos={listBrands} />
        </div>
      </div>
    </div>
  );
}

export default Investors;
