import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  background?: ImageWidget;
  title?: string;
  description?: string;
  submit: {
    placeholder?: string;
    buttonLabel?: string;
  };
  lastButton?: {
    label?: string;
    href?: string;
  };
}

export default function GetSiteDone({
  background = "",
  title = "Get your site done.",
  description = "Describe your idea and get a professional website quickly",
  submit = {
    placeholder: "A photographer's portfolio based in Rio, Brazil",
    buttonLabel: "Submit",
  },
}: Props) {
  return (
    <div class="lg:mx-auto lg:max-w-[1440px] relative z-10 px-6 py-12 lg:px-[120px] lg:py-[160px] h-full">
      <div class="mx-auto py-24 bg-[#FAFAFA] relative rounded-[16px]">
        <Image
          width={1156}
          height={650}
          src={background}
          alt={title}
          decoding="async"
          loading="lazy"
          class="absolute inset-0 z-0 w-full h-full object-cover opacity-[0.05]"
          style="background: radial-gradient(63.25% 54.27% at 50% 50%, rgba(255, 255, 255, 0.05) 21.35%, rgba(255, 255, 255, 0.30) 76.56%, rgba(255, 255, 255, 0.00) 100%);"
        />
        <div class="flex flex-col items-center justify-center relative z-10 gap-4 px-4">
          <h3 class="text-center font-albert-sans text-[48px]  lg:text-[80px] font-medium leading-[80px] tracking-tightest text-[#0D1717]">
            {title}
          </h3>
          <p class="text-center font-albert-sans text-[18px] lg:text-[24px] font-normal leading-[32px] tracking-tight text-[#616B6B]">
            {description}
          </p>
          <div class="flex w-full bg-white max-w-[540px] relative z-10 px-4 py-2 rounded-[80px] border border-[#DA8FFF] gap-2 mt-8 get-site-done-shadow">
            <input
              //   onInput={(e) => (email.value = e.currentTarget.value)}
              //   value={email.value}
              //   disabled={loading.value}
              placeholder={submit.placeholder}
              class="input pr-0 text-[16px] lg:text-[20px] bg-transparent leading-[34.886px] w-full flex justify-center items-center text-white dark:text-black placeholder:text-[#949E9E] dark:bg-transparent"
            >
              <a
                type="submit"
                class={`rounded-[100px] text-white border-0 font-[500] content-center text-[16px] lg:text-[16px] py-1 px-3 lg:px-4 lg:py-2 bg-[#9900E5] text-black items-center`}
              >
                {submit?.buttonLabel}
              </a>
            </input>
          </div>
        </div>
      </div>
    </div>
  );
}
