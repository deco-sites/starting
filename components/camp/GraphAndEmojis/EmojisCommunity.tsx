import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import ButtonLink from "$store/components/camp/GraphAndEmojis/ButtonLink.tsx";

export interface EmojiProps {
  label?: string;
  icon: ImageWidget;
  color: string;
}

export interface Props {
  buttons: EmojiProps[];
  /**
   * @format html
   */
  title: string;
  button: {
    label: string;
    href: string;
  };
}

function Emoji(props: EmojiProps) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      data-emojis-community
      class="absolute z-20 opacity-0 rounded-full p-2"
    >
      <Image
        src={props.icon}
        alt={"emoji"}
        width={40}
        height={40}
        class="md:min-w-[78px] md:min-h-[78px]"
      />
    </button>
  );
}

export default function EmojisCommunity({ buttons, title, button }: Props) {
  return (
    <>
      <div class="w-full h-full">
        <div class="w-full container lg:px-6 h-full">
          <div class="min-h-[452px] md:min-h-[640px] overflow-hidden w-full rounded-3xl bg-[#000D0D] relative h-full">
            <div
              id="emojis-community"
              class="h-full w-full absolute top-0 left-0"
            >
              <div class="absolute h-full opacity-0 w-full top-0 left-0">
              </div>
              {buttons.map((button) => <Emoji {...button} />)}
            </div>
            <div class="absolute z-[30] top-16 text-[#fff] text-2xl md:text-3xl text-center w-full flex flex-col gap-3">
              <span class="mx-5" dangerouslySetInnerHTML={{ __html: title }}>
              </span>
              <ButtonLink
                label={button.label}
                href={button.href}
                classCustom="z-30"
              />
            </div>
          </div>
        </div>
      </div>
      <script type="module" src="/camp/matterjs-emojis-community.js" />
    </>
  );
}
