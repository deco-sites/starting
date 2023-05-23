import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface IImage {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  /** @description when user clicks on the image, go to this link */
  href: string;
  /** @description Image's alt text */
  alt: string;
  /** @description width desktop */
  widthDesktop: number;
  /** @description height desktop */
  heightDesktop: number;
  /** @description width mobile */
  widthMobile: number;
  /** @description height mobile */
  heightMobile: number;
}

export interface Props {
  image?: IImage;
  preload?: boolean;
  className?: string;
}

export default function Image({ image, preload, className }: Props) {
  if (!image) return null;

  const {
    desktop,
    mobile,
    alt,
    widthDesktop,
    heightDesktop,
    widthMobile,
    heightMobile,
  } = image;

  return (
    <Picture class="block" preload={preload}>
      <Source
        media="(max-width: 767px)"
        fetchPriority={preload ? "high" : "auto"}
        src={mobile}
        width={widthMobile}
        height={heightMobile}
      />
      <Source
        media="(min-width: 768px)"
        fetchPriority={preload ? "high" : "auto"}
        src={desktop}
        width={widthDesktop}
        height={heightDesktop}
      />
      <img
        class={className}
        loading={preload ? "eager" : "lazy"}
        src={desktop}
        alt={alt}
      />
    </Picture>
  );
}
