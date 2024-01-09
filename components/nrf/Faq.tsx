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

export interface Props {
  questions: Question[];
}

export default function Faq({ questions }: Props) {
  return (
    <section class="bg-black">
      <div class="flex flex-col gap-10 px-6 md:pb-[120px] pt-[120px]  md:px-[7rem] max-w-screen-2xl m-auto">
        <h2 class="text-white text-[48px] leading-[120%] z-10">FAQs</h2>
        <div class="flex flex-col z-10">
          {questions.map((item) => {
            return <FaqItem {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}
