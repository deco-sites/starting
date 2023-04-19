import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import type { AvailableIcons } from "deco-sites/starting/components/ui/Icon.tsx";

export interface Card {
  icon: AvailableIcons;
  title: string;
  text: string;
  href: string;
}

export interface Props {
  cards: Card[];
}

export default function Benefits({ cards }: Props) {
  return (
    <section class="bg-[#fff] flex justify-center items-center flex-col">
      <div class="relative grid grid-cols-1 gap-[32px] md:gap-[40px] md:grid-cols-1 lg:grid-cols-2 px-6 pb-[40px] md:pb-24 md:px-[2rem] max-w-screen-2xl mx-auto">
        {cards?.map((card) => (
          <>
            <div
              class="border-box relative flex flex-col p-[2px] rounded-lg lg:min-h-[220px]"
              style="background: linear-gradient(225deg, rgba(9,95,93,0.1) 0%, rgba(3,196,115,0.8) 50%, rgba(9,95,93,0.1) 100%)"
            >
              <a class="w-full h-full" href={card.href}>
                <div class="bg-[#fff] rounded-lg h-full w-full flex flex-col gap-4 p-[40px]">
                  <p class="flex gap-[16px] items-center font-inter not-italic font-medium text-[32px] leading-[38.5px] text-black">
                    <Icon
                      id={card.icon}
                      width={40}
                      height={40}
                      strokeWidth={"1"}
                    />
                    {card.title}
                  </p>
                  <p class="font-sans not-italic font-normal text-[22px] leading-[30px] text-black opacity-60">
                    {card.text}
                  </p>
                </div>
              </a>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
