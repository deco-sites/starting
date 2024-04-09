import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface Card {
  title: string;
  subtitle: string;
  icon: AvailableIcons;
}
export interface Props {
  Benefits: Card[];
}
function Advantage({ Benefits = [] }: Props) {
  return (
    <div class="w-full bg-[#010101] px-4 py-8 lg:p-16">
      <div class="grid sm:grid-cols-2 gap-6 lg:px-0 lg:grid-cols-4 container lg:w-full">
        {Benefits.map((card) => (
          <div class="flex flex-col items-center bg-[#000D0D] cursor-pointer py-10 px-6 rounded-[24px] gap-12 container">
            <div class="w-16 h-16 p-4.5 lg:p-0 lg:w-24 lg:h-24 rounded-full bg-[#113032] flex items-center justify-center">
              <Icon id={card.icon} width={48} height={48} />
            </div>
            <div class="flex flex-col gap-4 text-white text-center">
              <span class="text-2xl font-semibold leading-[110%] tracking-[-0.48px]">
                {card.title}
              </span>
              <small class="text-[16px] font-normal leading-[120%] tracking-[-0.32px]">
                {card.subtitle}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Advantage;
