import ReCAPTCHA from "site/sections/ReCAPTCHA.tsx";
import { RECAPTCHA_SITE_KEY } from "site/sdk/recaptcha.ts";

export interface Props {
  title: string;
  /** @format html */
  text: string;

  /** 
   * @format textarea 
   * */
  embedScript: string;
}

export default function ContactUs({
  title,
  text,
  embedScript,
}: Props) {
  return (
    <section class="flex flex-col gap-12 lg:py-[64px] lg:py-28 2xl:py-36 bg-black">
      <div class="lg:w-full flex flex-col lg:flex-row  justify-center gap-20 mx-6 mx-auto max-w-[1280px] px-4 lg:px-0 z-10 py-28">
        <div class="w-full flex flex-col gap-4 max-w-md self-center">
          <h1 class="text-[42px] leading-[100%] tracking-[-2.4px] lg:text-[80px] text-almost-white font-semibold">
            {title}
          </h1>
          <div
            class="lg:text-[20px] text-zinc-400 leading-[120%]"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
        <div class="hidden lg:block border-r border-white/[0.1]"></div>
        <div class="w-full relative max-w-md">
        <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
        <script dangerouslySetInnerHTML={{
            __html: embedScript,
          }}>
        </script>
        </div>
      </div>
    </section>
  );
}
