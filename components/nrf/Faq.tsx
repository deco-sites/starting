import { FaqItem, Question } from "deco-sites/starting/islands/NRF/Faq.tsx";

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
