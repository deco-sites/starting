import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface Benefit {
  /** @format html */
  title: string;
  description?: string;
}

export interface Plan {
  title: string;
  subtitle?: string;
  price?: string;
  currency?: string;
  info?: string;
  benefits: Benefit[];
  callToAction?: string;
  callToActionUrl?: string;
}

export interface Props {
  plans: Plan[];
}

export default function PricingTable(
  {
    plans,
  }: Props,
) {
  return (
    <section class="flex flex-col lg:flex-row gap-12 py-10 justify-center mx-6 lg:mx-0">
      {plans.map((plan) => (
        <div class="flex z-10">
          <div class="h-full flex flex-col gap-6 bg-black p-6 text-white pricing-card">
            <div class="flex flex-col gap-4">
              <p class="text-white text-[22px] uppercase">{plan.title}</p>
              <p class="text-base text-gray-400">{plan.subtitle}</p>
              <div class="flex items-end gap-2 text-highlight">
                <p class="text-4xl font-bold">{plan.price}</p>
                <p class="text-sm uppercase font-bold">{plan.currency}</p>
              </div>
              <div class="flex gap-2 text-[13px]">
                <p>{plan.info}</p>
              </div>
            </div>
            <div class="space-y-4">
              {plan.benefits.map(({ title, description }) => (
                <div class="flex items-start gap-4">
                  <Icon size={20} id="Check" />
                  <div class="text-[15px]">
                    <p class="font-bold">
                      <HTMLRenderer html={title} />
                    </p>
                    {description && (
                      <p class="text-[13px] text-gray-400">
                        {description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {!!plan.callToAction && (
              <a
                href={plan.callToActionUrl}
                class="mt-auto w-44 rounded-full bg-highlight text-center text-black font-medium self-center lpx-8 py-3 hover:bg-gradient-to-r hover:from-[#02F67C] hover:to-[#06E474] hover:shadow-hero"
              >
                {plan.callToAction}
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
