import type { HTML } from "deco-sites/std/components/types.ts";
export interface Props {
  html: HTML;
  class: string;
}

export default function QuillText(props: Props) {
  return (
    <>
      {/* TODO: figure out a way to dedupe links on render page */}
      <link
        href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
        rel="stylesheet"
      >
      </link>
      <div class={props.class} dangerouslySetInnerHTML={{ __html: props.html }}>
      </div>
    </>
  );
}