export interface Item {
  number: string;
  /** @title Name */
  label: string;
}

export interface Props {
  /** @format color */
  bgColor?: string;
  /** @format color */
  textColor?: string;
  items: Item[];
}

export default function ArticleNumbers({
  bgColor = "#06E474",
  textColor = "#0A2121",
  items,
}: Props) {
  return (
    <div class="w-full mb-4 md:mb-16">
      <div class="mx-4 md:mx-12 lg:mx-auto lg:container flex flex-wrap gap-4 justify-center">
        {items.map((item) => {
          return (
            <div
              class="flex-auto flex flex-col py-6 px-10 gap-2 justify-center text-center rounded-md z-10"
              style={{
                backgroundColor: bgColor + "15",
                maxWidth: "420px",
                color: textColor,
              }}
            >
              <div class="text-[80px] font-bold leading-tight">
                {item.number}
              </div>
              <div class="uppercase">{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
