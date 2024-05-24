import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface SlideProps {
  label?: string;
  repeat?: number;
  icon?: AvailableIcons;
}

export interface Props {
  content?: SlideProps[];
  sideToRun?: "left" | "right";
}

const SIDE = {
    left: "animate-sliding",
    right: "animate-slidingright",
};

export default function Sale({
  sideToRun = "left",
  content = [
    {
      label: "TRY IT NOW FOR FREE",
      repeat: 30
    },
  ],
}: Props) {
  const slideContent = content?.map(({ label, icon, repeat = 1 }) => {
    return (
      <div class="flex items-center gap-x-10 mx-4">
        {Array(repeat).fill(0).map(() => (
          <>
            <span class="text-[15px] font-[argent-pixel] text-[#113032] whitespace-nowrap">
              {label}
            </span>
            <span style={{
                width: '2px',
                height: '2px',
                border: '0.25px solid #113032'
            }}></span>
          </>
        ))}
      </div>
    );
  });
  return (
    <div class="z-10 bg-secondary relative w-full overflow-hidden h-11">
      <div class={`${SIDE[sideToRun]} absolute top-0 left-0 flex flex-nowrap h-11`}>
        {slideContent}
      </div>
    </div>
  );
}
