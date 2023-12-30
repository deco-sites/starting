import type { Section } from "deco/blocks/section.ts";

export interface Props {
  sections: Section[];
}

export default function PageWrapper({ sections }: Props) {
  return (
    <div class="bg-[#02F67C]">
      {sections.map(({ Component, props }) => (
        <Component {...props} />
      ))}
    </div>
  );
}
