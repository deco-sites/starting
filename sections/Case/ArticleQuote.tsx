export interface Props {
  /** @format textarea */
  quote: string;
  author: string;
  role: string;
  /** @format color */
  barColor?: string;
  /** @format color */
  textColor?: string;
}

export default function ArticleQuote({
  quote,
  author,
  role,
  barColor,
  textColor = "#0A2121",
}: Props) {
  return (
    <div class="lg:container" style={{ color: textColor }}>
      <div class="mx-4 md:mx-12 lg:mx-auto lg:w-8/12">
        <div class="flex flex-col gap-5 pt-1 pb-5 lg:pt-4 lg:pb-16 z-10">
          <div class="flex gap-6 items-stretch">
            <div
              class="flex-none w-[4px] z-10"
              style={{ backgroundColor: barColor || "#0A2121" }}
            >
            </div>
            <div class="flex-auto text-2xl z-10">
              {quote}
            </div>
          </div>
          <div class="text-right z-10">
            {author}, {role}
          </div>
        </div>
      </div>
    </div>
  );
}
