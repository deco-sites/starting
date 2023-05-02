import Markdown, { Props } from "../components/ui/Markdown.tsx";

export default function MarkdownContainer(props: Props) {
  return (
    <div class="pt-10 px-5 lg:max-w-[940px] mx-auto text-[#66736C] leading-[1.8]">
      <section class="">
        <Markdown {...props}></Markdown>
      </section>
    </div>
  );
}
