import Icon from "$start/components/ui/Icon.tsx";
import type { AvailableIcons } from "$start/components/ui/Icon.tsx";

export interface Card {
    icon: AvailableIcons;
    title: string;
    text: string;
}

export interface Props {
    title: string;
    cards: Card[];
}
  
export default function Features({title, cards}: Props) {
return (
    <section class="bg-dark-green py-[104px] flex justify-center items-center flex-col">
        <h2 class="text-[#F3FFF9] text-[32px] lg:text-[48px] max-w-[856px] text-center pt-[40px] gap-16 md:gap-32 px-6 md:px-[5rem] max-w-screen-2xl mx-auto">{title}</h2>
        <div class="relative grid grid-cols-1 gap-[32px] md:gap-[40px] md:grid-cols-3 px-6 pt-[40px] md:pt-20 pb-[40px] md:pb-24 md:px-[2rem] max-w-screen-2xl mx-auto">
            {cards?.map(card => (
                <>
                    <div class="border-box relative flex flex-col p-[2px] rounded-lg" style="background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))">
                        <div class="bg-[#223737] rounded-lg h-full w-full flex flex-col gap-4 p-[32px]">
                            <Icon id={card.icon} width={55} height={55} strokeWidth={"1"} />
                            <p class="mt-2 mr-32 md:mr-0 font-inter not-italic font-medium text-[32px] md:text-[26px] lg:text-[32px] leading-[38.5px] text-white opacity-90">
                                {card.title}
                            </p>
                            <p class="font-sans not-italic	font-normal text-[22px] md:text-[16px] lg:text-[22px] leading-[30px] text-white opacity-90">
                                {card.text}
                            </p>
                        </div>
                    </div>
                </>
            ))}
        </div>
        
    </section>
);
}
