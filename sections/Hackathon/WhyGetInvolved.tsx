import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface WhyGetInvolvedProps {
  titleSection?: string;
  cards?: CardProps[];
}

export interface CardProps {
  labelIcon?: AvailableIcons;
  title?: string;
  description?: string;
}

export default function WhyGetInvolved(
  { titleSection, cards }: WhyGetInvolvedProps,
) {
  return (
    <div class="w-full bg-[#0A2121] py-5 md:py-10">
      <div class="xl:container xl:mx-auto mx-5 md:mx-10 flex flex-col items-start justify-center gap-4 md:gap-6">
        <div class="flex justify-start">
          <p class="text-[#02F67C] font-semibold text-[32px] md:text-[40px]">
            {titleSection}
          </p>
        </div>
        <div class="grid flex-row wrap justify-center gap-2 grid-cols-2 lg:grid-cols-4">
          {cards?.map((
            { labelIcon, title, description }: CardProps,
            index: number,
          ) => (
            <div
              key={index}
              class="bg-[#0C2929] flex flex-col justify-center items-start gap-2 md:gap-6 p-6 md:p-10 py-12 md:py-20 text-[#FFFFFF] rounded-2xl"
            >
              {labelIcon && <Icon id={labelIcon ?? ""} size={40} />}
              {title && (
                <p class="font-semibold mt-2 md:mt-0 md:text-[28px]">{title}</p>
              )}
              {description && <p class="text-xs md:text-base">{description}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
