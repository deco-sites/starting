import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import ShowMoreButton from "deco-sites/starting/components/decohelp/help/ui/Button/ShowMore.tsx";
import { useTabs } from "deco-sites/starting/components/decohelp/help/FAQ/useTabs.ts";

export interface Question {
  question: string;
  /**
   * @format textarea
   */
  answer: string;
}

export interface Tab {
  label: string;
  questions: Question[];
}

export interface Props {
  title: string;
  maxTabs: number;
  tabs?: Tab[];
  buttonLabel: string;
}

export default function Faq({ title, tabs, maxTabs, buttonLabel }: Props) {
  const { activeTab, setActiveTab, visibleTabs, handleShowMore } = useTabs(
    tabs || [],
    maxTabs,
  );
  if (!tabs || tabs.length === 0) {
    return null;
  }

  return (
    <section class="max-w-[1200px] lg:mx-auto mx-6 lg:mt-[80px] mt-[52px]">
      <div class="flex flex-col m-auto">
        <h2 class="text-neutral-900 text-[28px] font-semibold leading-loose mb-[32px]">
          {title}
        </h2>
        <ul class="flex flex-wrap gap-[24px]">
          {tabs.map((tab, tabIndex) => (
            <li>
              <button
                key={tabIndex}
                class={`font-semibold cursor-pointer leading-tight pb-2${
                  tabIndex === activeTab ? " text-[#161616] border-b-[3px] border-[#161616]" : " text-[#66736C]"
                }`}
                onClick={() => setActiveTab(tabIndex)}
                aria-label={tab.label}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
        <div class="w-full">
          {tabs.map((tab, tabIndex) => (
            <div
              key={tabIndex}
              class={`${tabIndex === activeTab ? "block" : "hidden"}`}
            >
              {tab.questions.map((item, questionIndex) =>
                questionIndex < visibleTabs[tabIndex]
                  ? (
                    <details
                      key={questionIndex}
                      class={`border-t border-zinc-300`}
                    >
                      <summary class="flex flex-row justify-between lg:items-center items-start py-4 gap-[16px] group cursor-pointer faq">
                        <h3 class="text-neutral-900 text-xl font-semibold leading-normal">
                          {item.question}
                        </h3>
                        <div class="flex-none pt-1">
                          <Icon
                            class="w-6 h-6 chevron-down"
                            id="ChevronDown"
                            width={24}
                            height={24}
                            strokeWidth={"2"}
                          />
                        </div>
                      </summary>
                      <p class="text-[15px] font-normal leading-tight pb-4 pr-4">
                        {item.answer}
                      </p>
                    </details>
                  )
                  : null
              )}
              {visibleTabs[tabIndex] < tab.questions.length && (
                <ShowMoreButton onClick={handleShowMore} label={buttonLabel} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
