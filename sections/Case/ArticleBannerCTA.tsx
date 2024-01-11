export interface Props {
  text: string;
  button: {
    label?: string;
    href: string;
  };
  /** @format color */
  bgColor?: string;
  /** @format color */
  textColor?: string;
}

export default function ArticleBannerCTA({
  text,
  button,
  bgColor,
  textColor,
}: Props) {
  return (
    <div class="relative lg:container z-10">
      <div class="mx-4 md:mx-12 mt-16 lg:mx-auto lg:w-8/12">
        <div
          style={{
            backgroundColor: bgColor || "#f1f5f9",
            color: textColor || "#0A2121",
          }}
          class="bg-slate-100 flex flex-col md:flex-row gap-6 md:gap-16 px-10 md:px-28 py-8 md:py-12 rounded-lg items-center"
        >
          <div class="flex-auto text-lg md:text-xl font-medium">{text}</div>
          <div class="flex-none">
            <a
              href={button && button.href}
              class={`my-auto block group overflow-hidden rounded-full hover:bg-gradient-to-r px-6 py-2 lg:px-8 lg:py-3 transition-all duration-300 ease-out bg-[#02F67C] hover:from-[#02F67C] hover:to-[#06E474] text-black hover:shadow-hero`}
            >
              <span class="relative font-medium lg:text-[20px]">
                {(button && button.label) || "Baixar e-book"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
