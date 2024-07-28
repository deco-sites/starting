import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface DeliveryItem {
  title: string;
  /**
   * @format rich-text
   */
  text: string;
  icon: AvailableIcons;
}

export interface Props {
  title?: string;
  items: DeliveryItem[];
}

export default function FinalDelivery({ title, items = [] }: Props) {
  return (
    <div class="relative flex flex-col items-center justify-center gap-16 z-10 my-10 md:my-20">
      <h2 class="text-3xl md:text-4xl lg:text-[40px] text-white font-medium">{title}</h2>
      <div class="flex flex-col lg:flex-row gap-8 px-4 w-full justify-center">
        {items.map((item) => (
          <div class="flex flex-col gap-6 lg:max-w-96">
            <div class="text-[#02F67C] p-3 border border-[#02f67c1a] bg-[#02f67c1a] w-fit rounded-full">
              <Icon id={item.icon} size={24}/>
            </div>
            <span class="text-3xl text-white font-bold">{item.title}</span>
            <span class="text-[#949E9E]">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
