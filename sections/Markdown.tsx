import Markdown, { Props } from "deco-sites/std/components/Markdown.tsx";
export * from "deco-sites/std/components/Markdown.tsx";

export default function MarkdownContainer(props: Props) {
  return (
    <div class="bg-red-500 relative overflow-hidden -mt-4">
      <section class="container mx-auto  pt-16 pb-40 lg:pb-40 text-primary-dark">
        <Markdown {...props}></Markdown>
      </section>
    </div>
  );
}
