import Button from "../Button/Button.tsx";
import type { Props as PropsButton } from "$store/components/camp/Button/Button.tsx";
import PopUp from "$store/islands/PopUp.tsx";
import type { Props as PropsPopUp } from "$store/components/camp/PopUp/PopUp.tsx";
import Icon from "../../ui/Icon.tsx";

export interface Props {
  flag: string;
  flagSound?: string;
  flegLegend?: string;
  /**
   * @format html
   */
  title: string;
  /**
   * @format html
   */
  subtitle: string;
  button: PropsButton;
  popUp: PropsPopUp;
  /**
   * @description idVimeo
   */
  idVimeo: string;
}

const BASE_PROPS = {
  flag: "Masterclass",
  flagSound: "Português",
  title:
    '<p>High-Performance<br>Web Dev with<span style="color: rgb(45, 194, 107);" data-mce-style="color: rgb(45, 194, 107);"> <span style="color: rgb(2, 246, 124);" data-mce-style="color: rgb(2, 246, 124);">deco.cx</span></span></p>',
  video:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/0962d927-5796-4b24-bab8-6588dd2585bb",
  button: {
    href: "#",
    label: "Enroll Now ",
    details: "(Starts March 15th)",
  },
  idVimeo: "https://youtu.be/aHe4fSLkqz0?si=NfgKawY9cCkUpW3O",
  subtitle:
    "<p>From Beginner to Expert: Master deco.cx for&nbsp;Elite Web and Storefront Development</p>",
  popUp: {
    buttonLabel: "Check the pre-requisites",
    items: [
      {
        title: "Requisite",
        content: "React or another component framework",
      },
      {
        title: "Requisite",
        content: "React or another component framework",
      },
    ],
  },
};

export default function Hero({ props }: { props: Props }) {
  const {
    flag,
    title,
    subtitle,
    button,
    popUp,
    idVimeo,
    flagSound,
    flagLegend,
  } = {
    ...BASE_PROPS,
    ...props,
  };

  return (
    <div class="w-full h-full bg-black">
      <div class="w-full h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-11 lg:px-8 lg:gap-4 pb-16 pt-28 lg:pt-56 container px-3">
        <div class=" h-full flex flex-col justify-center items-center lg:items-start gap-4 md:gap-6 xl:gap-8 lg:w-[55%] xl:w-2/4 w-full">
          <div class="flex flex-row gap-2 flex-wrap gap-y-3 justify-center items-center">
            <span class="text-white border border-base-content rounded-3xl px-4 py-2 w-min text-sm text-center lg:text-start">
              {flag}
            </span>
            {flagSound && (
              <span class="whitespace-nowrap lg:ml-6 text-white border border-base-content rounded-3xl px-4 py-2 w-min text-sm text-center lg:text-start flex flex-row items-center justify-center gap-2">
                <Icon id="sound" width={16} height={16} />
                {flagSound}
              </span>
            )}
            {flagLegend && (
              <span class="text-white border border-base-content rounded-3xl px-4 py-2 w-min text-sm text-center lg:text-start flex flex-row items-center justify-center gap-2">
                <Icon id="subtitle" width={16} height={12} />
                {flagLegend}
              </span>
            )}
          </div>
          <h2
            class="text-4xl md:text-[4rem] md:leading-[4.2rem] lg:text-[2.75rem] lg:leading-[3.2rem] xl:text-[3.5rem] xl:leading-[4rem] 2xl:leading-[4.5rem] 2xl:text-[4rem] text-white text-center lg:text-start"
            dangerouslySetInnerHTML={{ __html: title }}
          >
          </h2>
          <span
            class="md:text-[1.5rem] text-camp-neutral md:leading-[1.8rem] lg:text-lg lg:max-w-[380px] xl:text-2xl xl:max-w-[540px] text-center lg:text-start"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          >
          </span>
          <div class="flex flex-col gap-2 items-center lg:items-start ">
            <Button
              id={button.id}
              label={button.label}
              href={button.href}
              details={button.details}
            />
            <div class="lg:ml-4">
              <PopUp buttonLabel={popUp.buttonLabel} items={popUp.items} />
            </div>
          </div>
        </div>
        <div class="lg:w-[45%] xl:w-2/4 w-full flex justify-center">
          <div style="position:relative; aspect-ratio: 16/9; max-height: 405px; max-width: 720px; width: 100%;">
            <iframe
              src={`https://player.vimeo.com/video/${idVimeo}?transparent=0&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style="position:absolute;top:0;left:0;width:100%;height:100%;"
              title=""
            >
            </iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
    </div>
  );
}
