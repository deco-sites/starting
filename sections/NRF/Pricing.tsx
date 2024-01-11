import CheckIcon from "deco-sites/starting/components/ui/CheckIcon.tsx";

export interface CTA {
  id?: string;
  text: string;
  link: string;
}
export interface Plan {
  title: string;
  text: string;
  price: string;
  priceCustom: boolean;
  button: CTA;
  benefits: string[];
}

export interface Props {
  title: string;
  text: string;
  recurrence: string;
  freePlan: Plan;
  paidPlans: Plan[];
}

function Button({ id, text, link }: CTA) {
  return (
    <a
      id={id}
      href={link}
      target="_blank"
      class={`group relative relative overflow-hidden rounded-full hover:bg-gradient-to-r px-6 py-2 lg:px-8 lg:py-3 transition-all duration-300 ease-out bg-[#02F67C] hover:from-[#02F67C] hover:to-[#06E474] text-black hover:shadow-hero text-center`}
    >
      <span class="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
      <span class="relative font-medium lg:text-[20px] text-center">
        {text}
      </span>
    </a>
  );
}

function Price({
  price,
  custom,
  recurrence,
}: {
  price: string;
  custom: boolean;
  recurrence: string;
}) {
  return (
    <div
      class={`flex ${
        custom ? "justify-items-start" : "justify-center"
      } flex items-center gap-2 min-h-[72px]`}
    >
      <p
        class={`text-highlight ${
          custom ? "text-[32px]" : "font-medium text-[48px] lg:text-[64px]"
        }`}
      >
        {price}
      </p>
      {!custom && (
        <span class="text-white font-medium lg:text-[24px] max-w-[50px] leading-[110%]">
          {recurrence}
        </span>
      )}
    </div>
  );
}

export default function Pricing({
  title,
  text,
  freePlan,
  paidPlans,
  recurrence,
}: Props) {
  return (
    <section class="flex flex-col gap-12 md:pt-[64px] lg:pt-[128px] bg-black">
      <div class="flex flex-col md:flex-row gap-20 mx-6 lg:mx-auto max-w-[1024px] pt-[80px] px-4 md:px-0 z-10">
        <div class="flex flex-col gap-4 md:w-1/2 mx-auto">
          <h1 class="text-[42px] leading-[100%] tracking-[-1.92px] md:text-[64px] text-almost-white font-semibold">
            {title}
          </h1>
          <p class="md:text-[24px] text-zinc-400 leading-[120%]">{text}</p>
        </div>
        {/* divider */}
        <div class="hidden md:block border-r border-white/[0.1]"></div>

        <div class="md:w-1/2 flex flex-col md:flex-row justify-center items-center">
          <div class="border-[2px] border-[rgba(2,246,124,0.10)] rounded-xl w-full max-w-[460px]">
            <div class="flex flex-col gap-5 p-8 bg-[#081A1A] rounded-xl">
              <div class="flex flex-col items-center text-center gap-3">
                <h2 class="text-highlight text-[24px] leading-[1.1] font-semibold">
                  {freePlan.title}
                </h2>
                <p class="text-zinc-400 leading-[120%] tracking-[-0.32px]">
                  {freePlan.text}
                </p>
              </div>
              <Price
                price={freePlan.price}
                custom={freePlan.priceCustom}
                recurrence={recurrence}
              />
              <Button
                id={freePlan.button.id}
                link={freePlan.button.link}
                text={freePlan.button.text}
              />
            </div>
          </div>
          <div>
            <ul>
              {freePlan.benefits.map((benefit) => {
                return (
                  <li class="text-almost-white flex gap-2 py-1">
                    <CheckIcon color="#02F67C" />
                    {benefit}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-row gap-8 overflow-auto justify-items-start lg:justify-around max-w-[1440px] mx-auto pt-[40px] md:pt-[80px] px-2 md:px-10">
          {paidPlans.map((plan) => {
            return (
              <div class="bg-linear-y-border p-[1px] pt-[2px] rounded-[8px] w-full max-w-[300px] min-w-[75vw] md:min-w-[250px]">
                <div class="flex flex-col gap-[20px] p-6 lg:p-8 bg-linear-pricing-y rounded-[8px]">
                  <h2 class="text-almost-white text-[22px] font-semibold">
                    {plan.title}
                  </h2>
                  <p class="text-almost-white text-[13px] min-h-[40px]">
                    {plan.text}
                  </p>
                  <Price
                    price={plan.price}
                    custom={plan.priceCustom}
                    recurrence={recurrence}
                  />
                  <ul>
                    {plan.benefits.map((benefit) => {
                      return (
                        <li class="text-almost-white flex gap-2 py-1">
                          <div class="flex-none pt-[2px]">
                            <CheckIcon color="white" />
                          </div>
                          <div class="flex-auto">{benefit}</div>
                        </li>
                      );
                    })}
                  </ul>
                  <Button
                    id={plan.button.id}
                    link={plan.button.link}
                    text={plan.button.text}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
