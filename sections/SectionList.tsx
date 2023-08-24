import { Section } from "$live/blocks/section.ts";
import { notUndefined } from "$live/engine/core/utils.ts";
import { useLivePageContext } from "$live/pages/LivePage.tsx";

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