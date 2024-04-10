import { Section } from "deco/blocks/section.ts";

export interface SectionProps {
  SectionSidebar: Section;
  SectionContent: Section;
  SectionOnThisPage: Section;
}

export default function (props: SectionProps) {
  return (
    <section class="bg-black">
    <div
      class={`flex lg:flex-row flex-col w-full mx-auto max-w-[1440px] lg:pt-[140px] justify-between`}
    >
      {<props.SectionSidebar.Component {...props.SectionSidebar.props} />}
      {<props.SectionContent.Component {...props.SectionContent.props} />}
      {<props.SectionOnThisPage.Component {...props.SectionOnThisPage.props} />}
    </div>
    </section>
  );
}
