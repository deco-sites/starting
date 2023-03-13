export interface Props {
  mainText: string;
  subText: string;
  col1Title: string;
  col1Text: string;
  col2Title: string;
  col2Text: string;
  col3Title: string;
  col3Text: string;
  col4Title: string;
  col4Text: string;

}

export default function Community({mainText, subText, col1Title, col1Text, col2Title, col2Text, col3Title, col3Text, col4Title, col4Text}: Props) {
  return (
    <section class="flex flex-col pb-20 md:pb-32">
      <div class="grid grid-cols-1 px-6 overflow-hidden md:px-[7rem] md:pt-[5rem] md:grid-cols-2">
        <img
          src="/Group_521.png"
          class="justify-self-end translate-x-9 md:order-2 md:justify-self-start"
        />
        <p class="-translate-y-12 font-sans not-italic font-bold text-[#1F261F] text-5xl md:pt-32 md:text-9xl md:order-1">
          {mainText}
        </p>
      </div>
      <div class="-translate-y-6 px-6 md:px-[7rem]">
        <p class="not-italic font-normal text-[#1F261F] text-3xl md:w-1/2">
          {subText}
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-[7rem]">
        <div class="flex flex-col gap-4 md:p-4 hover:border-1 hover:shadow-custom-shadow rounded-xl transition ease-in duration-300">
          <p class="font-inter text-black font-medium text-3xl">{col1Title}</p>
          <p class="font-inter text-black font-normal opacity-[80%] text-lg">
            {col1Text}
          </p>
        </div>
        <div class="flex flex-col gap-4 md:p-4 hover:border-1 hover:shadow-custom-shadow rounded-xl transition ease-in duration-300">
          <p class="font-inter text-black font-medium text-3xl">
            {col2Title}
          </p>
          <p class="font-inter text-black font-normal opacity-[80%] text-lg">
            {col2Text}
          </p>
        </div>
        <div class="flex flex-col gap-4 md:p-4 hover:border-1 hover:shadow-custom-shadow rounded-xl transition ease-in duration-300">
          <p class="font-inter text-black font-medium text-3xl">{col3Title}</p>
          <p class="font-inter text-black font-normal opacity-[80%] text-lg">
            {col3Text}
          </p>
        </div>
        <div class="flex flex-col gap-4 md:p-4 hover:border-1 hover:shadow-custom-shadow rounded-xl transition ease-in duration-300">
          <p class="font-inter text-black font-medium text-3xl">{col4Title}</p>
          <p class="font-inter text-black font-normal opacity-[80%] text-lg">
            {col4Text}
          </p>
        </div>
      </div>
    </section>
  );
}
