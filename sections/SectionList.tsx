import { Section } from "deco/blocks/section.ts";
import { notUndefined } from "deco/engine/core/utils.ts";


export interface Props {
  sections: Section[];
}

export default function SectionList({ sections }: Props) {


  return (
    <>
      {sections.map((section) => <section.Component {...section.props}/>)}
    </>
  );
}
