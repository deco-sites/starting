import { Section } from "$live/blocks/section.ts";
import { useLivePageContext } from "$live/pages/LivePage.tsx";

export interface SectionProps {
  Sidebar: Section;
  Page: Section;
  OnThisPage: Section;
}

export default function (props: SectionProps) {
  const { renderSection } = useLivePageContext();

  return (
    <div
      class={`grid xl:grid-page-desktop lg:grid-page-tablet grid-page-mobile w-full mx-auto max-w-[1440px] lg:gap-[40px]`}
    >
      {renderSection(props.Sidebar, 0)}
      {renderSection(props.Page, 1)}
      {renderSection(props.OnThisPage, 2)}
    </div>
  );
}
