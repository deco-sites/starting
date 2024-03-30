import CheckIcon from "site/components/ui/CheckIcon.tsx";

export interface Plan {
  title: string;
  text: string;
  price: string;
  priceCustom: boolean;
  button: {
    text: string;
    link: string;
  };
  benefits: string[];
}

export interface Props {
  title: string;
  text: string;
  recurrence: string;
  freePlan: Plan;
  paidPlans: Plan[];
}

function Button({ text, link }: { text: string; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      class="block w-full text-center font-semibold rounded-[48px] py-3 px-[22px] bg-highlight border-2 border-highlight duration-500 hover:bg-transparent hover:text-highlight"
    >
      {text}
    </a>
  );
}

function Price(
  { price, custom, recurrence }: {
    price: string;
    custom: boolean;
    recurrence: string;
  },
) {
  return (
    <div
      class={`flex ${
        custom ? "justify-items-start" : "justify-center"
      } flex items-center gap-2 min-h-[72px]`}
    >
      <p class={`text-highlight ${custom ? "text-[32px]" : "text-[48px]"}`}>
        {price}
      </p>
      {!custom && (
        <span class="text-almost-white max-w-[50px]">{recurrence}</span>
      )}
    </div>
  );
}

export default function Pricing(
  { title, text, freePlan, paidPlans, recurrence }: Props,
) {
  return (
    <section class="flex flex-col gap-12 pt-[63px] bg-linear">
      <div class="flex flex-col md:flex-row gap-16 max-w-[1024px] mx-auto pt-[80px] px-4 md:px-0">
        <div class="flex flex-col gap-4 md:w-1/2 mx-auto">
          <h1 class="text-[42px] leading-[1.1] md:text-[52px] text-almost-white font-semibold">
            {title}
          </h1>
          <p class="text-[18px] md:text-[22px] text-almost-white">{text}</p>
        </div>

        <div class="md:w-1/2 flex flex-col md:flex-row justify-center items-center gap-[72px]">
          <div class="bg-linear-border p-[1px] rounded-[8px] w-full max-w-[460px]">
            <div class="flex flex-col gap-5 p-8 bg-linear-pricing rounded-[8px]">
              <div class="flex flex-col gap-3">
                <h2 class="text-highlight text-[32px] leading-[1.1] font-semibold">
                  {freePlan.title}
                </h2>
                <p class="text-almost-white text-[13px] ">{freePlan.text}</p>
              </div>
              <Price
                price={freePlan.price}
                custom={freePlan.priceCustom}
                recurrence={recurrence}
              />
              <Button link={freePlan.button.link} text={freePlan.button.text} />
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
                <div class="flex flex-col gap-[20px] p-8 bg-linear-pricing-y rounded-[8px]">
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
                          <div class="flex-auto">
                            {benefit}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <Button link={plan.button.link} text={plan.button.text} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
