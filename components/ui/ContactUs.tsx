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
  /** @description settings of benefits section in page*/
  infor?: Benefits;
  /** @description Thanks page language (default en)*/
  langThanks?: string;

  formInfor?: {
    formTitle?: string;
    BusinessCTAName?: string;
    DevCTAName?: string;
    ContactTitle?: string;
    PlaceholderfieldName?: string;
    PlaceholderfieldEmail?: string;
    PlaceholderfieldPhone?: string;
    PlaceholderfieldSocial?: string;
    PlaceholderFieldExtra?: string;
    PlaceholderfieldUrlSite?: string;
    PlaceholderfieldPageviews?: string;
    submiteName?: string;
    /** @description set the post url to action submit form business*/
    urlToActionBusiness: string;
    /** @description set the post url to action submit form developers*/
    urlToActionDev: string;
  };
  FieldNeedOptions?: Array<NeedOption>;
  FieldContacts?: Array<NeedOption>;
}

const FORM_ID = "contact-form";

export default function ContactUs({
  infor,
  langThanks = "en",
  formInfor,
  FieldContacts = [
    { name: "Agência", label: "System Integrator" },
    { name: "Marca", label: "Ecommerce Enterprise" },
    { name: "Grupo de Marcas", label: "Ecommerce Holding" },
  ],
}: Props) {
  return (
    <div class="flex flex-col items-top font-sans p-6 pt-[130px] pb-10 xl:p-40 gap-y-10 overflow-hidden xl:flex-row xl:gap-x-[120px]">
      <div class="w-full text-left xl:w-1/2">
        <h1 class="text-dark-green text-5xl leading-[53px] lg:text-[3.3334vw] 2xl:text-5xl">
          {infor?.mainTitle}
        </h1>
        <h2 class="font-normal text-3xl text-dark-green opacity-50 pt-4 leading-9">
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
        <span class="hidden lg:w-[352px] lg:h-[900px] lg:block lg:absolute lg:right-0 lg:-top-24 lg:bg-contact-us-bg-gradient lg:rotate-[333deg] lg:-z-10">
        </span>
        <form
          id={FORM_ID}
          class="flex flex-col justify-center items-center bg-white border border-dark-green rounded-2xl p-4 md:p-8 gap-6 placeholder-[#161A16] "
          method="POST"
          action="/api/leads"
        >
          <span class="text-[20px]">
            {formInfor?.formTitle || "Ready to delight your customers?"}
          </span>

          <input type="hidden" name="lang" value={langThanks} />
          <input
            class="w-full h-[51px] border border-dark-green p-4"
            type="text"
            name="userName"
            placeholder={formInfor?.PlaceholderfieldName || "Name*"}
            required
          />
          <input
            class="w-full h-[51px] border border-dark-green p-4"
            type="email"
            name="userEmail"
            placeholder={formInfor?.PlaceholderfieldEmail || "Work e-mail*"}
            required
          />
          <input
            class="w-full h-[51px] border border-dark-green p-4"
            type="text"
            name="userRole"
            placeholder={formInfor?.PlaceholderfieldPhone || "Phone*"}
            required
          />
          <input
            class="w-full h-[51px] border border-dark-green p-4"
            type="text"
            name="userLinkedin"
            placeholder={formInfor?.PlaceholderfieldSocial ||
              "Linkedin (optional)"}
          />

          <fieldset class="w-full border border-dark-green py-2 px-4">
            <legend>{formInfor?.ContactTitle || "Contact type"}</legend>
            {FieldContacts.map((contact) => (
              <div>
                <label>
                  <input
                    class="mr-2"
                    type="radio"
                    name="contact"
                    value={contact.name}
                  />
                  {contact.label}
                </label>
              </div>
            ))}
          </fieldset>
          <input
            class="w-full h-[51px] border border-dark-green p-4"
            type="text"
            name="siteUrl"
            placeholder={formInfor?.PlaceholderfieldUrlSite || "Site URL*"}
            required
          />
          <input
            class="w-full h-[51px] border border-dark-green p-4"
            type="text"
            name="pageviews"
            placeholder={formInfor?.PlaceholderfieldPageviews ||
              "Number of Pageviews per month*"}
            required
          />
          <input
            class="w-full h-[51px] border border-dark-green p-4"
            type="text"
            name="userMessage"
            placeholder={formInfor?.PlaceholderFieldExtra ||
              "Anything you would like to add? (optional)"}
          />
          <input
            class="g-recaptcha w-full h-[51px] bg-dark-green text-white rounded-[4px] cursor-pointer"
            type="submit"
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
