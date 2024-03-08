import { useUI } from "$store/components/camp/sdk/useUI.ts";
import Icon from "$store/components/camp/ui/Icon.tsx";
import FlagTime from "$store/components/camp/Program/FlagTime.tsx";
import type { ItemsTopic } from "$store/components/camp/Program/Program.tsx";

export interface Props extends ItemsTopic {
  index: string;
}

export default function Article({ props }: { props: Props }) {
  const { showArticle } = useUI();

  return (
    <div
      class={`gap-6 flex flex-col justify-start relative ease-in duration-300 ${
        showArticle.value === props.index
          ? "visible opacity-100 h-full"
          : "invisible opacity-0 "
      }`}
    >
      {showArticle.value === props.index &&
        (
          <>
            <h3 class="text-4xl text-white font-semibold text-start">
              {props.title}
            </h3>
            <span
              class="text-lg text-[#A1A1AA] text-start"
              dangerouslySetInnerHTML={{ __html: props.subTitle }}
            >
            </span>
            <h5 class=" text-white font-medium text-2xl text-start">
              {props.content.title}
            </h5>
            {props.flagTime && <FlagTime label={props.flagTime} />}
            <ul class="flex flex-col gap-4">
              {props.content.content.map((content) => (
                <li class="text-lg text-[#A1A1AA] text-start flex flex-row items-center gap-2">
                  <Icon id="PlusDeco" size={24} /> {content}
                </li>
              ))}
            </ul>
          </>
        )}
    </div>
  );
}
