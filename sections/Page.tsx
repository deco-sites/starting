import { Section } from "deco/blocks/section.ts";
import { useLivePageContext } from "deco/pages/LivePage.tsx";

export interface SectionProps {
  SectionSidebar: Section;
  SectionContent: Section;
  SectionOnThisPage: Section;
}

export default function (props: SectionProps) {
  const { renderSection } = useLivePageContext();

  return (
    <div
      class={`flex lg:flex-row flex-col w-full mx-auto max-w-[1440px] lg:pt-[140px]`}
    >
      {renderSection(props.SectionSidebar, 0)}
      {renderSection(props.SectionContent, 1)}
      {renderSection(props.SectionOnThisPage, 2)}
    </div>
  );
}
