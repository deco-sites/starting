import Search from "site/islands/Glossary/Search.tsx";

export interface Props {
  /**
   * @format rich-text
   */
  subtitle: string;
}

export default function GlossarySearch({ subtitle }: Props) {
  return (
    <section class="flex flex-col items-center w-full mb-20 px-4">
      <div class="w-full max-w-[550px]">
        <Search />
      </div>
      <div dangerouslySetInnerHTML={{ __html: subtitle }} />
    </section>
  );
}
