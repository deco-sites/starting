import QuillText from "$live/std/ui/components/QuillText.tsx";
export * from "$live/std/ui/components/QuillText.tsx";

export default function About() {
  return (
    <section class="flex flex-col bg-[#F3FFF9]">
      <div class="px-6 pt-[3.68rem] md:px-[3.03rem] md:pt-[7.5rem]">
        <p class="font-sans font-bold not-italic text-[#202320] text-5xl md:text-9xl">
          Elevate your storefront<br />to max{" "}
          <span class="text-[#2FD180]">performance</span>
          <span class="hidden md:inline text-[#202320]">|</span>
        </p>
      </div>
      <div class="grid grid-cols-1 items-end gap-4 px-6 pt-[3.68rem] md:px-[3.03rem] md:py-[4rem] md:grid-cols-2">
        <p class="font-sans font-normal not-italic text-frame-515-rgba text-3xl">
          With deco you build fast, load faster,<br />and optimize conversion
          rates - every day.
        </p>
        <div class="flex flex-row h-12 border-[1px] border-solid border-[#1F261F] md:w-3/4 md:justify-self-end">
          <input
            type="email"
            class="w-2/3 font-inter font-normal not-italic bg-input-rgba focus:outline-none placeholder-[#1F261F] pl-4"
            placeholder="Enter yout work email"
          />
          <button class="px-2 text-center text-white bg-[#1F261F] rounded-l-full flex-grow w-1/3">
            Get a quote
          </button>
        </div>
      </div>
      <div class="grid grid-rows-2 gap-4 pt-[2.5rem] pb-[3.5rem] md:grid-rows-none md:grid-cols-3 md:gap-0">
        <div class="mr-6 bg-[#1F261F] rounded-r-full h-72 md:ml-[3.03rem] md:rounded-l-full">
        </div>
        <div class="ml-6 bg-[#02F67C] rounded-l-full h-72 md:mr-[3.03rem] md:col-span-2 md:rounded-l-none md:rounded-r-full">
        </div>
      </div>
    </section>
  );
}
