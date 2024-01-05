import { HeroEditorTabbed } from "deco-sites/starting/islands/NRF/HeroEditorTabbed.tsx";

export interface Props {
  /**
   * @format html
   */
  title: string;
}

export default function Hero({ title }: Props) {
  return (
    <div id="hero" class="relative bg-black min-h-screen space-y-10">
      <div class="max-w-fit mx-auto flex flex-col items-center gap-8">
        <div
          class="mt-48 inline-block text-[48px] lg:text-[104px] text-left leading-[100%] font-medium text-white"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        ></div>
      </div>
      <div class="mx-auto flex flex-col items-center">
        <HeroEditorTabbed />
      </div>
      <div class="ellipse-1"/>
      <div class="ellipse-2"/>
    </div>
  );
}
