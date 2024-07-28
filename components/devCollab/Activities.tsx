import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

/**
 * @title {{{id}}}
 */
export interface Activity {
  id?: string;
  icon: AvailableIcons;
  /**
   * @format rich-text
   */
  title: string;
  subtitle: string;
  thumb: ImageWidget;
}

export interface Props {
  title?: string;
  subtitle?: string;
  schedule: Activity[];
}

export default function Activities({ title, subtitle, schedule = [] }: Props) {
  return (
    <div class="relative flex flex-col items-center justify-center gap-16 z-10 my-16 px-4 py-10 md:py-20">
      <div class="flex flex-col items-center gap-4 max-w-[1200px]">
        <h2 class="text-3xl md:text-4xl lg:text-[40px] text-white text-center font-medium">
          {title}
        </h2>
        <p>{subtitle}</p>
      </div>
      <div class="flex flex-col lg:flex-row items-stretch justify-center gap-8 px-4 w-full">
        {schedule.map((item) => (
          <div class="relative overflow-hidden pt-48 lg:max-w-[416px] p-4 box-border bg-[#070D0D] border border-[#0B1612] rounded-2xl">
            <Image
              src={item.thumb}
              width={362}
              height={250}
              class="absolute w-full max-h-[250px] md:max-w-[350px] lg:max-w-full object-cover top-0 left-0 md:left-[30%] lg:left-0 p-4 object-top"
            />
            <div class="flex gap-4">
              <Icon
                id={item.icon}
                size={24}
                class="min-w-fit text-[#02F67C] z-30"
              />
              <div class="flex flex-col gap-2 z-30">
                <h3
                  class="text-white text-2xl font-semibold"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p>{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
