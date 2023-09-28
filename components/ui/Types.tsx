import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface MDFileContent {
  /**
   * @format textarea
   */
  content: string;
}

export interface Template {
  label: string;
  pageSpeed: number;
  price: string;
  description?: string;
  slug?: string;
  image?: Screenshot[];
  buttonText?: string;
}

export interface Screenshot {
  img: LiveImage;
  /**
   * @format color
   * @title Base
   * @default #FFFFFF
   */
  color: string;
}
