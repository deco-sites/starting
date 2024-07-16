import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface AwardsProps {
  titleSection?: string;
  elimination: {
    title?: string;
    cards?: EliminatoriesAwardsProps[];
  };
  finalist: {
    title?: string;
    cards?: FinalistAwardsProps[];
  };
}

const BACKGROUND_AWARDS = {
  [0 as number]: "rgba(255, 232, 23, 0.3)",
  [1 as number]: "rgba(255, 255, 255, 0.3)",
  [2 as number]: "rgba(255, 169, 3, 0.3)",
};

export interface EliminatoriesAwardsProps {
  iconLabel?: AvailableIcons;
  title?: string;

  /** @format html */
  description?: string;
}

export interface FinalistAwardsProps {
  iconLabel?: AvailableIcons;
  title?: string;
  price?: string;
  description?: string;
}

export default function Awards(
  { titleSection, elimination, finalist }: AwardsProps,
) {
  return (
    <div class="bg-[#0A2121] w-full py-5 md:py-10">
      <div class="xl:container xl:mx-auto mx-4 md:mx-10 flex flex-col items-start gap-6">
        <div class="flex justify-start">
          <p class="font-semibold text-[#02F67C] text-[40px]">
            {titleSection}
          </p>
        </div>
        <div class="flex flex-col justify-start w-full gap-4">
          {elimination?.title && (
            <p class="text-[#FFFFFF] font-medium text-[32px]">
              {elimination?.title}
            </p>
          )}
          <div class="grid grid-cols-2 gap-4 rounded-2xl">
            {elimination?.cards?.map((
              { iconLabel, title, description }: EliminatoriesAwardsProps,
              index: number,
            ) => (
              <div
                key={index}
                class="flex flex-col justify-start items-start bg-[#0C2929] p-6 md:p-10 gap-3 md:gap-4 rounded-md"
              >
                {iconLabel && (
                  <div class="relative">
                    <div
                      class="absolute z-0 top-0 left-0 rounded-full w-full h-full"
                      style={{ backgroundColor: "rgba(218, 143, 255, 0.3)" }}
                    />
                    <Icon id={iconLabel} size={80} />
                  </div>
                )}
                {title && (
                  <p class="text-[#FFFFFF] font-semibold md:text-[32px]">
                    {title}
                  </p>
                )}
                {description && (
                  <div class="text-xs md:text-2xl">
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div class="flex flex-col justify-start w-full gap-4">
          {finalist?.title && (
            <p class="text-[#FFFFFF] font-medium text-[32px]">
              {finalist?.title}
            </p>
          )}
          <div class="grid grid-cols-3 gap-2 md:gap-4 rounded-2xl">
            {finalist?.cards?.map((
              { iconLabel, title, description, price }: FinalistAwardsProps,
              index: number,
            ) => (
              <div
                key={index}
                class="flex flex-col justify-center items-center bg-[#0C2929] px-2 py-4 md:p-10 gap-3 md:gap-6 rounded-md"
              >
                {iconLabel && (
                  <div class="relative">
                    <div
                      class="absolute z-0 top-0 left-0 rounded-full w-full h-full"
                      style={{ backgroundColor: BACKGROUND_AWARDS[index] }}
                    />
                    <Icon id={iconLabel} size={80} />
                  </div>
                )}
                {title && (
                  <p class="text-[#FFFFFF] font-semibold text-lg md:text-[32px]">
                    {title}
                  </p>
                )}
                <div class="flex flex-col gap-1">
                  {price && (
                    <p class="text-[#02F67C] text-xl md:text-[32px] mt-1">
                      {price}
                    </p>
                  )}
                  {description && (
                    <p class="text-[#FFFFFF] text-xs md:text-lg">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
