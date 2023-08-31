import { Head } from "$fresh/runtime.ts";
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
  caseName: string;
  caseLink: string;
  /** @description settings of benefits section in page*/
  infor?: Benefits;

  formInfor?: {
    formTitle?: string;
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

export default function ContactUs(
  {
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
  }: Props,
) {
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
                  <h3 class="text-[20px] font-medium">
                    {item?.title}
                  </h3>
                  <p class="text-[16px]">
                    {item?.description}
                  </p>
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
          class="flex flex-col justify-center items-center bg-white border border-dark-green rounded-2xl p-4 md:p-8 gap-6 placeholder-[#161A16] "
          method="POST"
          action={"/api/case"}
        >
          <span class="text-[20px]">
            {formInfor?.formTitle || "Ready to delight your customers?"}
          </span>

          <input type="hidden" name="lang" value={langThanks} />
          <input type="hidden" name="caseName" value={caseName} />
          <input type="hidden" name="caseLink" value={caseLink} />
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
            name="userPhone"
            placeholder={formInfor?.PlaceholderfieldPhone || "Phone*"}
            required
          />

          <fieldset class="w-full border border-dark-green py-2 px-4">
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
            class="w-full h-[51px] bg-dark-green text-white rounded-[4px] cursor-pointer"
            type="submit"
            value={formInfor?.submiteName || "Schedule a demo"}
          />
        </form>
      </div>
    </div>
  );
}
