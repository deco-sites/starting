export interface ScheduleItem {
  mode: string;
  title: string;
  highlight?: boolean;
  /**
   * @format rich-text
   */
  activities: string[];
}

export interface Props {
  title?: string;
  schedule: ScheduleItem[];
}

export default function Schedule({ title, schedule = [] }: Props) {
  const styles = {
    card: {
      highlight: "bg-[#27ae6bd6] border border-[#27AE6B] shadow-[0_0_40px_0_rgba(2,246,124,0.3)]",
      regular: "bg-[#162121] border border-[#273433]",
    },
  };

  return (
    <div class="relative flex flex-col items-center justify-center gap-16 z-10 my-10 md:my-20 text-[#949E9E]">
      <h2 class="text-3xl md:text-4xl lg:text-[40px] text-white text-center font-medium">{title}</h2>
      <div class="flex flex-col items-stretch justify-center md:flex-row gap-8 px-4 w-full">
        {schedule.map((item) => (
          <div class="flex flex-col items-center gap-6 lg:max-w-96 grow">
            <div class="flex flex-col items-center gap-2">
              <span class="text-[#02F67C] font-bold text-xs uppercase">
                {item.mode}
              </span>
              <h3 class="text-white text-2xl font-bold">{item.title}</h3>
            </div>
            <div class="flex flex-col w-full gap-2 grow">
              {item.activities.map((text) => (
                <div
                  class={`grow flex items-center justify-center h-auto w-full px-8 py-9 rounded-xl text-center text-white font-medium ${
                    item.highlight ? styles.card.highlight : styles.card.regular
                  }`}
                >
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
