import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  Title: string;
  Version?: string;
  /** @description Breadcrumb label for the home link */
  homeLabel: string;
  /** @description Breadcrumb path for the home link */
  homePath: string;
  SidebarContent: SidebarContent;
  /** @description Main content structure of the page */
  PageContent: Content[];
  OnThisPage: OnThisPage[];
}

export interface SidebarContent {
  /** @description Icon for closing the mobile menu */
  iconMenuClose: LiveImage;
  /** @description Icon for opening the mobile menu */
  iconMenuOpen: LiveImage;
  /** @description Alternate text for the mobile menu icon */
  AltIconMenu: string;
  SidebarTitle?: string;
  /** @description Icon displayed beside the sidebar title */
  SidebarIcon?: LiveImage;
  /** @description Alternate text for the sidebar icon */
  AltIcon?: string;
  Subtitle?: string;
  LinkSubtitle?: string;
  Topics?: Array<Topic>;
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

export type ContentType = Text | Code | Image | Youtube;

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
  Underline?: boolean;
}

export interface OnThisPage {
  label?: string;
  content: Array<OnThisPageContent>;
}

export interface OnThisPageContent {
  label: string;
  active?: boolean;
}

export interface WasThisPageHelpfulProps {
  WasThisPageHelpful?: {
    Label?: string;
    Icon?: {
      IconYes?: LiveImage;
      IconNo?: LiveImage;
      Width?: number;
      Height?: number;
    };
    Yes?: string;
    IconNo?: LiveImage;
    No?: string;
    Text?: HTML;
  };
}

export interface ForwardBackContent {
  previous?: {
    href?: string;
    title?: string;
    category?: string;
    previousLabel?: string;
  };
  next?: {
    href?: string;
    title?: string;
    category?: string;
    nextLabel?: string;
  };
}
