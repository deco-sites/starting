import { Head } from "$fresh/runtime.ts";

export interface Props {
  title: string;
  /** @format html */
  text: string;
  /** @description Thanks page language (default en)*/
  langThanks?: string;

  formInfor?: {
    buttonId?: string;
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
}

export default function ContactUs({
  title,
  text,
  langThanks = "en",
  formInfor,
}: Props) {
  return (
    <section class="flex flex-col gap-12 lg:py-[64px] lg:py-28 2xl:py-36 bg-black">
      <Head>
        <script src="https://www.google.com/recaptcha/enterprise.js?render=6LfTfWIpAAAAAP-H_u5oe4_ajU3uvJea4wwvQIpp">
        </script>
      </Head>
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
          <form
            id="contact-form"
            class="flex flex-col justify-center items-center gap-6 placeholder-[#161A16]"
            method="POST"
            action="/api/leads"
          >
            <input type="hidden" name="lang" value={langThanks} />
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
              name="userRole"
              placeholder={formInfor?.PlaceholderfieldPhone || "Phone*"}
              required
            />
            <input
              class="w-full h-[51px] border border-white/[.1] rounded placeholder-white bg-white/5 text-white backdrop-blur-xl p-4"
              type="text"
              name="userLinkedin"
              placeholder={formInfor?.PlaceholderfieldSocial ||
                "Linkedin (optional)"}
            />
            <input
              class="w-full h-[51px] border border-white/[.1] rounded placeholder-white bg-white/5 text-white backdrop-blur-xl p-4"
              type="text"
              name="siteUrl"
              placeholder={formInfor?.PlaceholderfieldUrlSite || "Site URL*"}
              required
            />
            <input
              type="submit"
              class={`g-recaptcha w-full cursor-pointer group relative relative overflow-hidden rounded-full hover:bg-gradient-to-r px-6 py-2 lg:px-8 lg:py-3 transition-all duration-300 ease-out bg-[#02F67C] hover:from-[#02F67C] hover:to-[#06E474] text-black hover:shadow-hero font-medium lg:text-[20px]`}
              data-sitekey="6LfTfWIpAAAAAP-H_u5oe4_ajU3uvJea4wwvQIpp"
              data-callback="onSubmit"
              data-action="submit"
              value={formInfor?.submiteName || "Get early access"}
            />
          </form>
        </div>
      </div>
      <script>
        {`
          function onSubmit(token) {
            console.log('test')
            document.getElementById('contact-form').submit();
          }
        `}
      </script>
    </section>
  );
}
