import HeroEditor from "deco-sites/starting/islands/NRF/HeroEditor.tsx";

export interface Props {
  /**
   * @format html
   */
  title: string;
}

export default function Hero({ title }: Props) {
  return (
    <div id="hero" class="bg-black min-h-screen">
      <div class="max-w-fit mx-auto flex flex-col items-center gap-8">
        <div
          class="mt-48 inline-block text-[80px] text-left leading-[100%] font-medium text-white"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        >
        </div>
        <div class="w-full p-1 bg-[#191919] text-white border border-[#292a2a] rounded-full flex">
          <input
            class="ml-5 appearance-none bg-transparent block w-full placeholder-white focus:outline-none"
            placeholder="What do you want to build?"
          />
          <button
            type="submit"
            class="flex items-center gap-2 bg-[hsla(280,100%,78%,1)] hover:bg-[hsla(280,100%,70%,1)] duration-200 py-2 px-4 rounded-full"
          >
            Generate
          </button>
        </div>
      </div>
      <HeroEditor />
    </div>
  );
}
