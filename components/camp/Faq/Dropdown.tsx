import Icon from "$store/components/camp/ui/Icon.tsx";

export interface Props {
  question: string;
  answer: string;
  position: number;
}

export default function Dropdown({ question, answer, position }: Props) {
  return (
    <details
      class={`border-b border-[#fff] cursor-pointer ${
        position == 0 ? "border-t" : ""
      }`}
    >
      <summary class="py-6 md:py-5 font-medium text-[#fff] text-base leading-6 flex items-center justify-between md:text-xl md:leading-[1.875rem]">
        <p>{question}</p>
        <Icon
          class="text-white"
          id="ChevronDown"
          width={32}
          height={32}
          strokeWidth={"3"}
        />
      </summary>

      <p class="mt-5 md:text-xl md:mt-6 md:leading-[1.875rem] pb-6 md:pb-5">
        {answer}
      </p>
    </details>
  );
}
