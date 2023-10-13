import Markdown, { Props } from "../components/ui/Markdown.tsx";

export default function MarkdownContainer(props: Props) {
  return (
    <div class="pt-10 lg:max-w-2xl mx-auto text-[#66736C] leading-[1.8]">
      <section class="">
        <Markdown {...props}></Markdown>
      </section>
    </div>
  );
}
