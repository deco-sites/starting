import Icon from "deco-sites/starting/components/ui/Icon.tsx";

interface ShowMoreButtonProps {
  onClick: () => void;
  label: string;
  class?: string;
}

export default function ShowMoreButton(
  { onClick, label, class: customClass }: ShowMoreButtonProps,
) {
  return (
    <button
      class={`min-w-[106px] h-9 py-2 text-center text-neutral-900 text-[15px] font-semibold leading-tight flex gap-2 cursor-pointer ${customClass}`}
      onClick={onClick}
      aria-label={label}
    >
      {label}
      <Icon
        class="w-5 h-5"
        id="ChevronDown"
        width={24}
        height={24}
        strokeWidth={"2"}
      />
    </button>
  );
}
