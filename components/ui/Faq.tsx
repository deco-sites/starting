import Icon from "$start/components/ui/Icon.tsx";

export interface Props {
  questions: {question:string; answer:string}[]
}

export default function Faq({questions}: Props) {
  return (
    <section class="bg-highlight">
      <div class="flex flex-col px-6 md:pb-[120px] pt-[80px] md:px-[7rem] max-w-screen-2xl m-auto">
        {questions.map((item) => {
          return (
            <details class="border-b border-solid border-[#131614]">
              <summary class="flex flex-row py-5 gap-[16px] group cursor-pointer">
                <div class="flex-none pt-[6px]"><Icon class="" id="ChevronRight" width={15} height={15} strokeWidth={"3"} /></div>
                <p class="font-normal not-italic text-[22px] leading-[1.3] text-[#131614] md:text-[32px] md:leading-[38.73px]">{item.question}</p>
              </summary>
              <p class="pl-[32px] pb-5 font-normal not-italic text-[16px] leading-[1.9] text-[#131614] md:text-[20px] md:leading-[30px]">{item.answer}</p>
            </details>
          )
        })}
      </div>
    </section>
  );
}