import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface SlideProps {
  label?: string;
  repeat?: number;
  icon?: AvailableIcons;
}

export interface Props {
  content?: SlideProps[];
}

export default function Slide({
  content = [
    {
      label: "Label",
      repeat: 30,
      icon: "ChevronRight",
    },
  ],
}: Props) {
  const slideContent = content?.map(({ label, icon, repeat = 1 }) => {
    return (
      <div class="flex items-center gap-x-10 mx-4 text-base-content">
        {Array(repeat).fill(0).map(() => (
          <>
            <span class="text-sm font-extralight whitespace-nowrap">
              {label}
            </span>
            {icon && (
              <Icon
                id={icon}
                name={icon}
                width={24}
                height={24}
              />
            )}
          </>
        ))}
      </div>
    );
  });

  return (
    <div class="relative w-full overflow-hidden h-11">
      <div class="animate-[sliding_60s_linear_infinite] absolute top-0 left-0 flex flex-nowrap h-11 border-t border-b border-black bg-[#DA8FFF] dark:bg-accent">
        {Array(20).fill(0).map(() => slideContent)}
      </div>
    </div>
  );
}
