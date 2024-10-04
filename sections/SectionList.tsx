import { type Section } from "@deco/deco/blocks";
export interface Props {
  sections: Section[];
}
export default function SectionList({ sections }: Props) {
  return (
    <>
      {sections.map((section) => <section.Component {...section.props} />)}
    </>
  );
}
