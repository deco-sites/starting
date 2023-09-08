import { Section } from "$live/blocks/section.ts";
import { useLivePageContext } from "$live/pages/LivePage.tsx";

export interface SectionProps {
  SectionSidebar: Section;
  SectionContent: Section;
  SectionOnThisPage: Section;
}

export default function (props: SectionProps) {
  const { renderSection } = useLivePageContext();

  return (
    <div
      class={`grid xl:grid-page-desktop lg:grid-page-tablet grid-page-mobile w-full mx-auto max-w-[1440px] lg:pt-[100px]`}
    >
      {renderSection(props.SectionSidebar, 0)}
      {renderSection(props.SectionContent, 1)}
      {renderSection(props.SectionOnThisPage, 2)}
    </div>
  );
}
