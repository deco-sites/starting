import CmsIsland from "../islands/Cms.tsx";
import type { Image } from "deco-sites/std/components/types.ts";

export interface Props {
  leftHeader: string;
  rightHeader: string;
  leftTitle: string;
  rightTitle: string;
  leftContent: string;
  rightContent: string;
  leftImage: Image;
  rightImage: Image;
}

export default function Cms({
  leftHeader,
  rightHeader,
  leftTitle,
  rightTitle,
  leftContent,
  rightContent,
  leftImage,
  rightImage,
}: Props) {
  return (
    <section class="bg-[#F3FFF9] md:px-[2.03rem] md:py-12">
      <CmsIsland
        leftHeader={leftHeader}
        rightHeader={rightHeader}
        leftTitle={leftTitle}
        rightTitle={rightTitle}
        leftContent={leftContent}
        rightContent={rightContent}
        leftImage={leftImage}
        rightImage={rightImage}
      />
    </section>
  );
}
