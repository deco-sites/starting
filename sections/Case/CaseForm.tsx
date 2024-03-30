import { RECAPTCHA_SITE_KEY } from "site/sdk/recaptcha.ts";
import ReCAPTCHA from "site/sections/ReCAPTCHA.tsx";

export interface listItem {
  title?: string;
  /** @format textarea */
  description?: string;
}

export interface Benefits {
  /** @description a short main title text*/
  mainTitle?: string;
  /** @description a short subtitle text*/
  /** @format textarea */
  description?: string;
  /** @description add a item to information list in contact page*/
  listItems: listItem[];
  showbullets?: boolean;
}

export interface NeedOption {
  name: string;
  label: string;
}

export interface Props {
  /** @description Thanks page language (default en)*/
  langThanks?: string;
  /** @description Name to register in DB */
  caseName: string;
  caseLink: string;
  /** @description settings of benefits section in page*/
  infor?: Benefits;

  formInfor?: {
    BusinessCTAName?: string;
    DevCTAName?: string;
    ContactTitle?: string;
    PlaceholderfieldName?: string;
    PlaceholderfieldEmail?: string;
    PlaceholderfieldPhone?: string;
    submiteName?: string;
  };
  FieldNeedOptions?: Array<NeedOption>;
  FieldContacts?: Array<NeedOption>;
}

const FORM_ID = "case-form";

export default function ContactUs({
  langThanks = "en",
  caseName,
  caseLink,
  infor,
  formInfor,
  FieldContacts = [
    { name: "Agência", label: "System Integrator" },
    { name: "Marca", label: "Ecommerce Enterprise" },
    { name: "Grupo de Marcas", label: "Ecommerce Holding" },
  ],
}: Props) {
  return (
    <div class="relative z-10 flex flex-col items-top font-sans p-6 pt-[130px] pb-10 xl:p-40 gap-y-10 overflow-hidden xl:flex-row xl:gap-x-[120px]">
      <div class="w-full text-left xl:w-1/2">
        <h1 class="text-white text-[42px] leading-[100%] tracking-[-2.4px] lg:text-[64px] font-semibold">
          {infor?.mainTitle}
        </h1>
        <h2 class="lg:text-[20px] text-zinc-400 leading-[120%]">
          {infor?.description}
        </h2>
        <ol
          start={1}
          type="1"
          class="flex flex-col gap-4 text-dark-green pt-10"
        >
          {infor?.listItems?.map((item, index) => {
            return (
              <li class=" w-full flex justify-items-start items-baseline gap-3">
                <span class="rounded-full w-8 h-8 leading-8 text-center bg-primary">
                  {index + 1}
                </span>
                <div class="w-[90%] flex flex-col">
                  <h3 class="text-[20px] font-medium">{item?.title}</h3>
                  <p class="text-[16px]">{item?.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <div class="w-full xl:w-1/2 relative max-w-[443px]">
        <form
          id={FORM_ID}
          class="flex flex-col justify-center items-center gap-6 placeholder-[#161A16]"
          method="POST"
          action={"/api/case"}
        >
          <input type="hidden" name="lang" value={langThanks} />
          <input type="hidden" name="caseName" value={caseName} />
          <input type="hidden" name="caseLink" value={caseLink} />
          <input
            class="w-full h-[51px] border border-white/[.1] rounded placeholder-white bg-white/5 text-white backdrop-blur-xl p-4"
            type="text"
            name="userName"
            placeholder={formInfor?.PlaceholderfieldName || "Name*"}
            required
          />
          <input
            class="w-full h-[51px] border border-white/[.1] rounded placeholder-white bg-white/5 text-white backdrop-blur-xl p-4"
            type="email"
            name="userEmail"
            placeholder={formInfor?.PlaceholderfieldEmail || "Work e-mail*"}
            required
          />
          <input
            class="w-full h-[51px] border border-white/[.1] rounded placeholder-white bg-white/5 text-white backdrop-blur-xl p-4"
            type="text"
            name="userPhone"
            placeholder={formInfor?.PlaceholderfieldPhone || "Phone*"}
            required
          />

          <fieldset class="w-full border border-white/[.1] rounded placeholder-white bg-white/5 text-white backdrop-blur-xl py-2 px-4">
            <legend>{formInfor?.ContactTitle || "Contact type"}</legend>
            {FieldContacts.map((contact) => (
              <label class="block">
                <input
                  class="mr-2"
                  type="radio"
                  name="contactType"
                  value={contact.name}
                />
                {contact.label}
              </label>
            ))}
          </fieldset>

          <input
            type="submit"
            class={`g-recaptcha w-full cursor-pointer group relative relative overflow-hidden rounded-full hover:bg-gradient-to-r px-6 py-2 lg:px-8 lg:py-3 transition-all duration-300 ease-out bg-[#02F67C] hover:from-[#02F67C] hover:to-[#06E474] text-black hover:shadow-hero font-medium lg:text-[20px]`}
            value={formInfor?.submiteName || "Schedule a demo"}
            data-sitekey={RECAPTCHA_SITE_KEY}
            data-callback="onSubmit"
            data-action="submit"
          />
        </form>
      </div>
      <ReCAPTCHA formId={FORM_ID} />
    </div>
  );
}
