export interface Card {
  title: string;
  text: string;
}

export interface Props {
  cards: Card[];
}

export default function TripletBanner({ cards }: Props) {
  return (
    <section class="bg-[#F3FFF9] flex justify-center items-center flex-col pt-[40px]">
      <div class="relative grid grid-cols-1 gap-[32px] md:gap-[40px] md:grid-cols-3 mx-4 pb-[40px] px-4 md:pb-24 max-w-[1440px] md:mx-auto">
        {cards?.map((card) => (
          <>
            <div class="border-box bg-[#F3FFF9] relative flex flex-col p-[2px] rounded-[24px]">
              <div class="rounded-[24px] rounded-tr-none border border-[#053535] h-full w-full flex flex-col gap-4 px-[40px] py-[50px]">
                <p class="mt-2 leading-10 font-inter text-center md:text-left not-italic font-medium text-[32px] md:text-[26px] lg:text-[32px] leading-[38.5px] text-[#0A2121]">
                  {card.title}
                </p>
                <p class="font-sans not-italic	font-normal text-[22px] md:text-[16px] lg:text-[20px] leading-[30px] text-[#0A2121]">
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
