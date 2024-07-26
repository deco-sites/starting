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

export default function Benefits({ title, items = [] }: Props) {
  return (
    <div class="relative flex flex-col items-center justify-center gap-16 z-10 mb-12">
      {title && <h2 class="text-3xl md:text-4xl lg:text-[40px] text-white font-medium">{title}</h2>}
      <div class="flex flex-col md:flex-row gap-6 lg:gap-20 px-4 w-full justify-center">
        {items.map((item, index) => (
          <>
            {index !== 0 && <hr class="h-auto border-l border-[#616B6B50]" />}
            <div class="flex flex-col gap-4 lg:max-w-96">
              <Icon id={item.icon} size={32} class="text-[#02F67C] w-fit" />
              <div class="flex flex-col gap-2">
                <span class="text-xl text-white font-bold">{item.title}</span>
                <span class="text-[#949E9E]">{item.text}</span>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
