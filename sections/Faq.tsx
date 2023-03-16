export interface Props {
  questions: {question:string; answer:string}[]
}

export default function Faq({questions}: Props) {
  return (
    <section class="bg-[#06E474]">
      <div class="flex flex-col px-3 py-32 md:px-[7rem] max-w-screen-2xl m-auto">
        {questions.map((item) => {
          return (
            <details class="border-b border-solid border-[#131614]">
              <summary class="flex flex-row py-2 items-center justify-between group cursor-pointer">
                <p class="font-inter font-normal not-italic text-[22px] leading-[26.63px] text-[#131614] md:text-[32px] md:leading-[38.73px]">{item.question}</p>
                <svg
                  class="flex-shrink-0"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke-width="1.5"
                  stroke="#131614"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </summary>
              <p class="py-2 font-inter font-normal not-italic text-[22px] leading-[26.63px] text-[#131614] md:text-[22px] md:leading-[26.4px]">{item.answer}</p>
            </details>
          )
        })}
      </div>
    </section>
  );
}