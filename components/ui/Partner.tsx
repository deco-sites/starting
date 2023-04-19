import type { Image } from "deco-sites/std/components/types.ts";
import Icon from "deco-sites/starting/components/ui/Icon.tsx";

export interface Props {
  mainText: string;
  /** @description Default: 94px */
  desktopMainTextSize?: string;
  title: string;
  benefits: string[];
  button: string;
  imgFirstLine: Image[];
  imgSecondLine: Image[];
  imgThirdLine: Image[];
  buttonHref: string;
}

function ImageLines(images: string[]) {
  const len = images.length;
  const maxWidth = 1536;
  const factor = 3;
  const imageWidth = 150;
  const repeat = Math.round((maxWidth * factor) / (len * imageWidth));

  let aux = 0;
  let html = "";

  while (aux < repeat) {
    images.forEach((image: string) => {
      html += `<img src=${image} alt="" />`;
    });

    aux += 1;
  }

  return html;
}

export default function Partner(
  {
    mainText,
    desktopMainTextSize,
    title,
    benefits,
    button,
    imgFirstLine,
    imgSecondLine,
    imgThirdLine,
    buttonHref,
  }: Props,
) {
  return (
    <section
      class="py-16 md:py-[200px]"
      style="background: linear-gradient(360deg, #053535 0.04%, #0A2121 100.04%)"
    >
      <div class="flex flex-col px-6 md:px-[2rem] md:flex-row xl:gap-[80px] max-w-screen-2xl m-auto">
        <div class="flex pb-6 gap-10 md:w-[45%] lg:w-[40%] xl:w-[38%]">
          <h2
            class={`font-sans not-italic font-bold text-white text-[48px] md:text-[44px] lg:text-[74px] xl:text-[${
              desktopMainTextSize ? desktopMainTextSize : "94px"
            }] leading-[.95] tracking-[-1%] md:order-1`}
          >
            {mainText}
          </h2>
        </div>
        <div class="mt-4 md:mt-12 grid gap-4 items-end md:(w-[55%] mt-0)">
          <h3 class="text-[32px] opacity-80 text-white">{title}</h3>
          {benefits?.map((benefit) => (
            <div class="flex gap-[8px] border-t-1 border-white py-[16px]">
              <div class="flex-none pt-[2px]">
                <Icon id="Check" width={20} height={20} strokeWidth={"1"} />
              </div>
              <p class="font-sans not-italic font-normal text-[20px] leading-[24px] text-white opacity-[80%]">
                {benefit}
              </p>
            </div>
          ))}
          <div class="pt-6 md:max-w-[200px]">
            <a
              href={buttonHref}
              class="block w-full bg-[#02F67C] transition py-3.5 text-[#161A16] font-inter border-1 border-[transparent] font-medium not-italic rounded-[40px] text-center text-[16px] leading-[19.36px] hover:(bg-[transparent] text-[#02F67C] border-[#02F67C])"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
      <div class="overflow-hidden pt-20">
        <div
          class="flex flex-row flex-nowrap w-full animate-walk items-center gap-4"
          dangerouslySetInnerHTML={{ __html: ImageLines(imgFirstLine) }}
        >
        </div>
        <div
          class="flex flex-row flex-nowrap w-full animate-walk items-center gap-4"
          style="animation-delay: 300ms"
          dangerouslySetInnerHTML={{ __html: ImageLines(imgSecondLine) }}
        >
        </div>
        <div
          class="flex flex-row flex-nowrap w-full animate-walk items-center gap-4"
          style="animation-delay: 600ms"
          dangerouslySetInnerHTML={{ __html: ImageLines(imgThirdLine) }}
        >
        </div>
      </div>
    </section>
  );
}
