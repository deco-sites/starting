import { Head } from "$fresh/runtime.ts";

export interface Props {
  webinarName?: string;
  /** @description Thanks page language (default en)*/
  langThanks?: string;

  formInfor?: {
    formTitle?: string;
    ContactTitle?: string;
    PlaceholderfieldName?: string;
    PlaceholderfieldEmail?: string;
    PlaceholderfieldRole?: string;
    PlaceholderfieldSocial?: string;
    PlaceholderFieldExtra?: string;
    submiteName?: string;
    /** @description set the post url to action submit form business*/
    urlToActionBusiness?: string;
    /** @description set the post url to action submit form developers*/
    urlToActionDev?: string;
  };
}

export default function ContactUs(
  {
    webinarName,
    langThanks = "pt",
    formInfor,
  }: Props,
) {
  return (
    <div>
      <div class="relative mx-auto md:w-full max-w-[511px]">
        <form
          class="flex flex-col justify-center items-center text-base md:text-xl bg-white border border-dark-green rounded-2xl p-4 md:p-8 gap-6 placeholder-[#161A16] "
          method="POST"
          action="/api/webinar"
        >
          <span class="text-[20px]">
            {formInfor?.formTitle || "Reserve agora a sua vaga!"}
          </span>

          <input type="hidden" name="lang" value={langThanks} />
          <input type="hidden" name="webinarName" value={webinarName} />
          <input
            class="w-full h-[51px] border border-dark-green p-4"
            type="text"
            name="userName"
            placeholder={formInfor?.PlaceholderfieldName || "Nome*"}
            required
          />
          <input
            class="w-full h-[51px] border border-dark-green p-4"
            type="email"
            name="userEmail"
            placeholder={formInfor?.PlaceholderfieldEmail || "Email*"}
            required
          />
          <input
            class="w-full h-[51px] border border-dark-green p-4"
            type="text"
            name="userRole"
            placeholder={formInfor?.PlaceholderfieldRole || "Posição*"}
            required
          />
          <input
            class="w-full h-[51px] border border-dark-green p-4"
            type="text"
            name="userLinkedin"
            placeholder={formInfor?.PlaceholderfieldSocial ||
              "Linkedin*"}
            required
          />
          <input
            class="w-full h-[51px] border border-dark-green p-4"
            type="text"
            name="userMessage"
            placeholder={formInfor?.PlaceholderFieldExtra ||
              "Quer acrescentar algo? (opcional)"}
          />
          <input
            class="w-full h-[51px] bg-[#0A2121] text-white text-lg font-semibold rounded-[4px] cursor-pointer"
            type="submit"
            value={formInfor?.submiteName || "Reserve agora"}
          />
        </form>
      </div>
    </div>
  );
}
