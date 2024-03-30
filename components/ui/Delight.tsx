import Icon from "deco-sites/starting/components/ui/Icon.tsx";

export interface Props {
  mainText: string;
  buttonText: string;
  href: string;
}

export default function Delight({ mainText, buttonText, href }: Props) {
  return (
    <section
      id="delight"
      class="bg-[#02F67C]"
      style="background: linear-gradient(169.63deg, #00FF80 -0.25%, #095F5D 152.54%), conic-gradient(from -90deg at 50% 50%, #FFFFFF 0deg, rgba(255, 255, 255, 0) 187.5deg, #FFFFFF 360deg)"
    >
      <div class="relative md:w-[85%] flex flex-col justify-center items-center gap-8 px-8 py-32 md:py-[120px] overflow-hidden max-w-screen-2xl m-auto">
        <p class="font-sans text-center not-italic leading-[1] font-bold text-[#0A2121] max-w-[930px] text-[39px] md:text-[72px] lg:text-[92px] xl:text-[112px] leading-none z-10">
          {mainText}
        </p>
        <button class="bg-[#0A2121] group h-[53px] w-full md:max-w-[329px] items-center text-center text-[#F3FFF9] rounded font-inter font-normal not-italic text-[16px] leading-[19.36px]">
          <a
            class="flex justify-center items-center gap-[10px] h-full w-full"
            href={href}
          >
            {buttonText}
            <Icon
              class="hidden transition md:group-hover:block"
              id="WhiteArrow"
              width={15}
              height={15}
              strokeWidth={"1"}
            />
          </a>
        </button>
      </div>
    </section>
  );
}
