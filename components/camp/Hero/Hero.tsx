import Button from "../Button/Button.tsx";
import type { Props as PropsButton } from "$store/components/camp/Button/Button.tsx";

export interface Props {
  flag: string;
  /**
   * @format html
   */
  title: string;
  /**
   * @format html
   */
  subtitle: string;
  button: PropsButton;
  afterButtonText: string;
  /**
   * @description id video of vimeo
   */
  idVimeo: string;
}

const BASE_PROPS = {
  flag: "Masterclass",
  title:
    '<p>High-Performance<br>Web Dev with<span style="color: rgb(45, 194, 107);" data-mce-style="color: rgb(45, 194, 107);"> <span style="color: rgb(2, 246, 124);" data-mce-style="color: rgb(2, 246, 124);">deco.cx</span></span></p>',
  video:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4391/0962d927-5796-4b24-bab8-6588dd2585bb",
  button: {
    href: "#",
    label: "Enroll Now ",
    details: "(Starts March 15th)",
  },
  idVimeo: "914914239",
  subtitle:
    "<p>From Beginner to Expert: Master deco.cx for&nbsp;Elite Web and Storefront Development</p>",
  afterButtonText: "Check the pre-requisites",
};

export default function Hero({ props }: { props: Props }) {
  const { flag, title, subtitle, button, afterButtonText, idVimeo } = {
    ...BASE_PROPS,
    ...props,
  };

  return (
    <div class="w-full h-full flex flex-col  lg:flex-row justify-center lg:justify-between items-center gap-11 lg:px-8 lg:gap-4 pb-16 pt-20 container px-3">
      <div class=" h-full flex flex-col justify-center items-center lg:items-start gap-4 md:gap-6 xl:gap-8 lg:w-[55%] xl:w-2/4 w-full">
        <span class="text-neutral border border-base-content rounded-3xl px-4 py-2 w-min text-sm text-center lg:text-start">
          {flag}
        </span>
        <h2
          class="text-4xl md:text-[4rem] md:leading-[4.2rem] lg:text-[2.75rem] lg:leading-[3.2rem] xl:text-[3.5rem] xl:leading-[4rem] 2xl:leading-[4.5rem] 2xl:text-[4rem] text-neutral text-center lg:text-start"
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </h2>
        <span
          class="md:text-[1.5rem] md:leading-[1.8rem] lg:text-lg lg:max-w-[380px] xl:text-2xl xl:max-w-[540px] text-center lg:text-start"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        >
        </span>
        <div class="flex flex-col gap-2 items-center lg:items-start ">
          <Button
            label={button.label}
            href={button.href}
            details={button.details}
          />
          <span class="lg:ml-4 text-neutral text-sm">{afterButtonText}</span>
        </div>
      </div>
      <div class="lg:w-[45%] xl:w-2/4 w-full">
        <div style="position:relative; height: calc(16 / 9 * 30vw); max-height: 360px; width: 100%; @media (max-width: 600px) {
   height: calc(16 / 9 * 13vw)
  }">
          <iframe
            src={`https://player.vimeo.com/video/${idVimeo}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            title="foxton"
          >
          </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>
  );
}
