import CheckIcon from "deco-sites/starting/components/ui/CheckIcon.tsx";

export type Props = {
  title: string;
  text: string;
  recurrence: string;
  freePlan: Plan;
  pricingTableId: string;
  /** @format textarea */
  publishableKey: string;
};

export interface Plan {
  title: string;
  text: string;
  price: string;
  priceCustom?: boolean;
  benefits?: string[];
  button: {
    text: string;
    link: string;
  };
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

export default function StripePricing(
  { title, text, freePlan, recurrence, pricingTableId, publishableKey }: Props,
) {
  return (
    <section class="flex flex-col gap-12 pt-[63px] bg-linear">
      <div class="md:flex gap-16 max-w-[1024px] mx-auto pt-[80px] px-4 md:px-0">
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
              {freePlan?.benefits?.map((benefit) => {
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
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <div
        dangerouslySetInnerHTML={{
          __html: `
        <stripe-pricing-table pricing-table-id="${pricingTableId}"
        publishable-key="${publishableKey}">
        </stripe-pricing-table>
        `,
        }}
      >
      </div>
    </section>
  );
}
