import Icon from "deco-sites/starting/components/ui/Icon.tsx";

export interface Question {
  question: string;
  /**
   * @format textarea
   */
  answer: string;
}

export function FaqItem({ question, answer }: Question) {
  return (
    <details class="border-b first:border-t border-solid border-[#131614]">
      <summary class="flex flex-row py-5 gap-[16px] group cursor-pointer">
        <div class="flex-none pt-[6px]">
          <Icon
            class="text-white"
            id="ChevronRight"
            width={15}
            height={15}
            strokeWidth={"3"}
          />
        </div>
        <p class="font-normal not-italic text-[22px] leading-[1.3] text-white md:text-[32px] md:leading-[38.73px]">
          {question}
        </p>
      </summary>
      <p class="pl-[32px] pb-5 font-normal not-italic text-[16px] leading-[1.9] text-white md:text-[20px] md:leading-[30px]">
        {answer}
      </p>
    </details>
  );
}
