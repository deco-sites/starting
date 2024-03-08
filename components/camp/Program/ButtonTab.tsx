import { useUI } from "$store/components/camp/sdk/useUI.ts";
import { useSignal } from "@preact/signals";
import Icon from "$store/components/camp/ui/Icon.tsx";
import FlagTime from "$store/components/camp/Program/FlagTime.tsx";
import type { ItemsTopic } from "$store/components/camp/Program/Program.tsx";

export interface Props extends ItemsTopic {
  index: string;
}

export default function ButtonTab({ props }: { props: Props }) {
  const { showArticle } = useUI();
  const showArticleMobile = useSignal(false);

  function show() {
    showArticle.value = props.index;
  }

  function showMobile() {
    showArticleMobile.value = !showArticleMobile.value;
  }

  return (
    <div class="flex justify-start flex-col">
      <button
        class={`${
          showArticle.value === props.index ? "text-white" : "text-[#52525B]"
        } text-start hidden lg:flex flex-row items-center duration-200`}
        onClick={show}
      >
        <Icon
          id="ArrowRigth"
          size={24}
          class={`${
            showArticle.value === props.index
              ? "w-auto translate-x-0 mr-1"
              : "w-0 -translate-x-100"
          } duration-200`}
        />
        {props.title}
      </button>

      <button
        class={`text-white text-lg text-center bg-[#0535354D] rounded-full w-full flex flex-col gap-2 lg:hidden items-center min-h-[100px] justify-center `}
        onClick={showMobile}
      >
        <span class="flex flex-row gap-3 items-center">
          <Icon id="ArrowDown" size={24} class="min-w-[18px]" />
          {props.title}
        </span>
        {props.flagTime && <FlagTime label={props.flagTime} />}
      </button>
      <div
        class={`flex flex-col text-[#A1A1AA] gap-6 ${
          showArticleMobile.value
            ? "h-auto mb-4 mt-3 opacity-100"
            : "h-0 opacity-0 -z-10"
        } ease-out duration-300 `}
      >
        {showArticleMobile.value &&
          (
            <>
              <span dangerouslySetInnerHTML={{ __html: props.subTitle }}>
              </span>
              <ul class="gap-4 flex flex-col">
                {props.content.content.map((content) => (
                  <li class="text-lg  text-start flex flex-row items-start gap-2">
                    <Icon
                      id="PlusDeco"
                      size={18}
                      class={"min-w-[18px] mt-[6px]"}
                    />{" "}
                    {content}
                  </li>
                ))}
              </ul>
            </>
          )}
      </div>
    </div>
  );
}
