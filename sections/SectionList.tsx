import { Section } from "deco/blocks/section.ts";
import { notUndefined } from "deco/engine/core/utils.ts";
import { useLivePageContext } from "deco/pages/LivePage.tsx";

export interface Props {
  sections: Section[];
}

export default function SectionList({ sections }: Props) {
  const { renderSection } = useLivePageContext();

  return (
    <>
      {(sections ?? []).filter(notUndefined).map(renderSection)}
    </>
  );
}
