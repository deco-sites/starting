import CardWorks from "./CardWorks.tsx";
import type { Props as CardWorksProps } from "$store/components/camp/Benefits/CardWorks.tsx";

export interface Props {
  /**
   * @format html
   */
  title: string;
  cardWorks: CardWorksProps[];
}

const BASE_PROPS = {
  title: "<p>How it works</p>",
  cardWorks: [
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/b7b7f2e6-bf3a-4d2e-bb4e-a988ac406e6b",
      title:
        '<p>Watch <span style="color: rgb(2, 246, 124);" data-mce-style="color: rgb(2, 246, 124);">Pre-Recorded</span> Video Classes</p>',
      content:
        "<p>Every week day we will launch a new video (60 min long), you can watch by yourself or join our watch party at 6pm.</p>",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/4fddb2dd-ac91-4d32-93da-676dbb914d38",
      title:
        '<p>Do your <span style="color: rgb(2, 246, 124);" data-mce-style="color: rgb(2, 246, 124);">homework exercises</span></p>',
      content:
        "<p>Learn by doing. By the end of every video you will also get a suggestion of an exercise to help you consolidate your learnings.</p>",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/15c854ac-fe2e-4156-bcae-d56935dcf16a",
      title:
        '<p>Join <span style="color: rgb(2, 246, 124);" data-mce-style="color: rgb(2, 246, 124);">Live Q&amp;A Sessions</span> With Mentors</p>',
      content:
        "<p>Every weekday at 7pm we will have Q&amp;A sessions with your mentors. We will review the exercises and help you with any questions.</p>",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/b5191791-5756-4d3c-b96b-4a022e08bfb7",
      title:
        '<p><span style="color: rgb(2, 246, 124);" data-mce-style="color: rgb(2, 246, 124);">Join Live Q&amp;A Sessions With Mentors</span></p>',
      content:
        "<p>Every weekday at 7pm we will have Q&amp;A sessions with your mentors. We will review the exercises and help you with any questions.</p>",
    },
  ],
};

export default function HowItWorks({ props }: { props: Props }) {
  const { title, cardWorks } = { ...BASE_PROPS, ...props };

  return (
    <div class="flex flex-col w-full gap-8 px-4 lg:px-0 py-10 xl:py-20 justify-center container">
      <h2
        class="text-neutral text-[2rem] md:text-[2.5rem] text-center xl:text-[4rem]"
        dangerouslySetInnerHTML={{ __html: title }}
      >
      </h2>
      <div class="flex flex-col gap-4 md:gap-6 md:flex-row flex-wrap md:px-4 xl:gap-8 mt-6">
        {cardWorks.map((card) => <CardWorks props={card} />)}
      </div>
    </div>
  );
}
