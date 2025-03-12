import Icon from "site/components/ui/Icon.tsx";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  title: string;
  subtitle: string;
  faqs: FaqItem[];
}

const NewFaq = ({ title, subtitle, faqs } : FaqProps) => {
  return (
    <div className="max-w-container lg:max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2">
          <div className="flex flex-col gap-6 mb-8 lg:mb-0">
            <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full border border-[#333737]">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-[#a1acaa] text-sm">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-5xl text-white leading-tight">{title}</h2>
            <p className="text-[#a1acaa] text-lg leading-7">{subtitle}</p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="flex flex-col gap-4">
            {faqs.map((faq: FaqItem, index: number) => (
                  <details class="home-faq rounded-2xl open:mb-2 transition ease-in-out duration-300">
                  <summary class="rounded-2xl flex flex-row justify-between items-center px-[24px] py-[22.5px] gap-[16px] group cursor-pointer ">
                    <p class="text-[18px] leading-[27px] text-white">
                      {faq.question}
                    </p>
                    <div class="flex-none">
                      <Icon
                        class="text-white"
                        id="Plus"
                        width={18}
                        height={18}
                        strokeWidth={"3"}
                      />
                    </div>
                  </summary>
                  <p class="rounded-t-none border-t-0 relative top-[-15px] pt-[5px] px-[24px] py-[22.5px] text-[#949E9E] text-[18px] leading-[27px]">
                    {faq.answer}
                  </p>
                </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFaq;
