export interface TimesProps {
  title?: string;
  days?: DaysProps[];
}

export interface DaysProps {
  titleDay?: string;
  hours?: HoursProps[];
}

export interface HoursProps {
  titleHour?: string;

  /** @format html */
  description?: string;
}

export default function Times({ title, days }: TimesProps) {
  return (
    <div class="w-full bg-[#0A2121] py-5 md:py-10">
      <div class="xl:container xl:mx-auto mx-5 md:mx-10 flex flex-col justify-start gap-6 md:gap-8">
        {title && (
          <p class="font-semibold text-[#02F67C] text-[40px]">{title}</p>
        )}
        <div class="flex flex-col md:flex-row text-[#FFFFFF]">
          {days?.map(({ titleDay, hours }: DaysProps, index: number) => (
            <div key={index} class="flex flex-col gap-4 md:gap-6">
              {titleDay && <p class="font-medium text-[32px]">{titleDay}</p>}
              {hours?.map((
                { titleHour, description }: HoursProps,
                index: number,
              ) => (
                <div key={index} class="flex flex-row gap-4 md:gap-6">
                  {titleHour && <p class="font-medium text-xl">{titleHour}</p>}
                  {description && (
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
