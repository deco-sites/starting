export interface RulesProps {
  title: string;

  points?: PointsProps[];
}

export interface PointsProps {
  title?: string;

  /** @format html */
  description?: string;
}

export default function Rules({ title, points }: RulesProps) {
  return (
    <div class="w-full bg-[#0A2121] py-5 md:py-10">
      <div class="xl:container xl:mx-auto mx-5 md:mx-10 flex flex-col gap-6">
        <div class="flex justify-start">
          <p class="text-[#02F67C] font-semibold text-[40px]">{title}</p>
        </div>
        <div class="flex flex-col gap-6">
          {points?.map(({ title, description }: PointsProps, index: number) => (
            <div
              key={index}
              class="text-[#FFFFFF] grid grid-rows-[20px_1px_1fr_1px] grid-cols-1 md:grid-rows-1 md:grid-cols-[180px_1px_1fr_1px] gap-4 md:gap-6 justify-start text-base md:text-[20px]"
            >
              <p class="w-max text-[32px] font-medium">{title}</p>
              {description && (
                <p dangerouslySetInnerHTML={{ __html: description }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
