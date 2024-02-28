import Icon from "../ui/Icon.tsx";

/**
 * @titleBy title
 */
interface Content {
  title: string;
  /**
   * @format html
   */
  content: string;
  link?: string;
  /**
   * @default Modules
   */
  dataPublish: string;
  time: number;
}

/**
 * @titleBy title
 */
export interface Props {
  title: string;
  listContent: Content[];
  labelMobule?: string;
}

export default function AccordionSyllabus({ props }: { props: Props }) {
  const { title, listContent, labelMobule = "Modules" } = props;

  function TotalTime() {
    let totalTime = 0;

    listContent.map((item) => {
      totalTime += item.time;
    });

    return totalTime;
  }

  const totalTime = TotalTime();

  return (
    <details className="border-b rounded-none border-neutral border-opacity-15 last:border-b-0 cursor-pointer">
      <summary className="collapse-title flex flex-row px-4 md:py-7 md:px-8 font-medium text-white justify-start items-center text-sm md:text-base lg:text-2xl gap-3 xl:gap-4">
        <Icon
          class="text-white w-auto -ml-[3px]"
          id="ChevronDown"
          width={20}
          height={20}
          strokeWidth={"3"}
        />
        <h4 class=" w-auto">
          {title}
        </h4>
        <span class="hidden md:block ml-auto w-auto">
          {listContent.length + " " + " " + labelMobule + " • " + totalTime +
            " h"}
        </span>
      </summary>
      <div className=" md:px-8 bg-black p-4 md:py-6 cursor-default">
        <ul class="w-full flex flex-col gap-6 ">
          {listContent.map((item) => (
            <li class="flex flex-row gap-4 justify-start items-start">
              <Icon
                id="video"
                size={14}
                class="w-min-[14px] mt-[5px] xl:mt-[9px] xl:w-[20px] h-[20px]"
              >
              </Icon>
              <div class="flex flex-col w-fit">
                <a
                  href={item.link}
                  class="text-primary text-sm md:text-base xl:text-xl hover:underline cursor-pointer"
                >
                  {item.title}
                </a>
                <span
                  class="text-xs text-white"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                >
                </span>
              </div>
              <div class="hidden md:flex flex-row gap-3 ml-auto text-base">
                <a
                  href={item.link}
                  class="hover:text-primary hover:underline cursor-pointer"
                >
                  {item.dataPublish}
                </a>
                <span class="text-white">{item.time + "h"}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
