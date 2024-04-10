import Icon from "site/components/ui/Icon.tsx";
import type { AvailableIcons } from "site/components/ui/Icon.tsx";

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
    <section class="bg-[#000] flex justify-center items-center flex-col">
      <div class="relative grid grid-cols-1 gap-[32px] md:gap-[40px] md:grid-cols-1 lg:grid-cols-2 px-6 lg:px-16 pb-[40px] md:p-20 md:px-[2rem] max-w-screen-2xl mx-auto">
        {cards?.map((card) => (
          <>
            <div
              class="border-box border border-[#FFFFFF26] relative flex flex-col p-8 rounded-[20px]"
              style="background: linear-gradient(95deg, rgba(255, 255, 255, 0.12) 0.42%, rgba(255, 255, 255, 0.02) 98.11%);
                     backdrop-filter: blur(22.840909957885742px);"
            >
              <a class="w-full h-full" href={card.href}>
                <div class="flex gap-8 items-center">
                  <div class="relative bg-[#FFFFFF0D] rounded-[55px] flex items-center p-6">
                    <Icon
                      id={card.icon}
                      width={40}
                      height={40}
                      strokeWidth={"1"}
                    />
                  </div>
                  <div class="h-full w-full flex flex-col gap-4">
                    <p class="font-semibold text-[22px] lg:text-[32px] leading-[110%] text-white tracking-[-0.64px]">
                      {card.title}
                    </p>
                    <p class="font-normal text-[13px] lg:text-[20px] leading-[30px] text-white tracking-[-0.4px]">
                      {card.text}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
