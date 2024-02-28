import type { Props as ProblemProps } from "./CardProblem.tsx";
import CardProblem from "./CardProblem.tsx";

export interface Props {
  /**
   * @format html
   */
  title: string;
  /**
   * @format html
   */
  subtitle: string;
  cardProblem: ProblemProps[];
}

export default function Problem({ props }: { props: Props }) {
  const { title, subtitle, cardProblem } = props;

  return (
    <div class="w-full h-full bg-[#121212]">
      <div class="flex flex-col w-full gap-8 px-4 py-10 md:py-16 lg:py-20 xl:py-[6.5rem] justify-center container">
        <h2
          class="text-white text-3xl text-center md:text-4xl"
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </h2>
        <span
          class="text-secondary text-xl text-center md:text-2xl"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        >
        </span>
        <div class="flex flex-col gap-16 md:flex-row flex-wrap md:px-4 lg:gap-12 mt-6">
          {cardProblem.map((card) => <CardProblem props={card} />)}
        </div>
      </div>
    </div>
  );
}
