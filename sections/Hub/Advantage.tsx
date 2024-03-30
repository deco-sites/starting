import Icon, {
  AvailableIcons,
} from "site/components/ui/Icon.tsx";

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
    <div class="w-full pl-6 bg-customGray">
      <div class="grid grid-cols-2 gap-2 lg:px-0 lg:grid-cols-4  lg:h-[340px] container lg:w-full">
        {Benefits.map((card) => (
          <div class="flex flex-col  cursor-pointer py-4 container">
            <div class="w-16 h-16 rounded-full bg-icon flex items-center justify-center my-6">
              <Icon id={card.icon} width={22} height={22} />
            </div>
            <div class="flex flex-col gap-6">
              <span class="text-2xl font-normal leading-7 tracking-tighter">
                {card.title}
              </span>
              <small class="text-[15px] font-normal leading-5 tracking-normal pr-4">
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
