import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { Section } from "deco/blocks/section.ts";

export interface Props {
  Title: string;
  Version?: string;
  /** @description Breadcrumb label for the home link */
  homeLabel: string;
  /** @description Breadcrumb path for the home link */
  homePath: string;
  /** @description Main content structure of the page */
  PageContent: Content[];
}

export interface Topic {
  /** @description Label for the topic */
  label?: string;
  /** @description Icon displayed beside the topic label */
  Image?: LiveImage;
  /** @description Alternate text for the topic icon */
  AltImage?: string;
  /** @description Link associated with the topic */
  LinkTopic?: string;
  SubTopics: Array<SubTopic>;
}

export interface SubTopic {
  label: string;
  SidebarLink: string;
  NestedTopics?: Array<NestedTopic>;
}

export interface NestedTopic {
  label: string;
  SidebarLink: string;
}

export interface Content {
  Type: ContentType[];
}

export type ContentType = Text | Code | Image | Youtube | SectionBlock;

export interface SectionBlock {
  section: Section;
}

export interface Text {
  Text: HTML;
  /** @description aria-label for the text block */
  label: string;
  Underline?: boolean;
}

export interface Code {
  Code: HTML;
  /** @description aria-label for the code block */
  label: string;
  Underline?: boolean;
}

export interface Image {
  Image: LiveImage;
  width: number;
  height?: number;
  /** @description Alternate text for the image */
  label: string;
  Underline?: boolean;
}

export interface Youtube {
  /** @description https://www.youtube.com/embed/embedId */
  embedId: string;
  /** @description title for the youtube video */
  label: string;
  /** @description custom width youtube video */
  width?: string;
  /** @description custom height youtube video */
  height?: string;
  Underline?: boolean;
}
