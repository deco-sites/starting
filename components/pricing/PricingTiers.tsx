import PricingCard from "site/islands/pricing/PricingCard.tsx";
import { useSignal } from "@preact/signals";
import { PricingCardProps } from "site/components/pricing/PricingCard.tsx";
import SelectTimePlan from "site/islands/pricing/SelectTimePlan.tsx";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

/**
 * @title {{{text}}}
 */
export interface Note {
  icon: AvailableIcons;
  /**
   * @format rich-text
   */
  text: string;
}

/**
 * @title Pricing tiers
 */
export interface PricingTiersProps {
  tiers?: PricingCardProps[];
  notes?: Note[];
}

function PricingTiers({ notes, tiers }: PricingTiersProps) {
  const useAnnualDiscount = useSignal(false);

  function handleUpdateDiscount(value: boolean) {
    useAnnualDiscount.value = value;
  }

  return (
    <div class="flex justify-center elative w-full">
      <div class="relative flex flex-col items-center gap-8 z-10 max-w-[1440px] mx-4">
        <div class="bg-[#070D0D] border border-[#0B1612] p-0.5 rounded-[10px]">
          <SelectTimePlan updateDiscount={handleUpdateDiscount} />
        </div>
        <div class="flex flex-wrap justify-center text-white gap-4">
          {tiers?.map((tier) => (
            <PricingCard
              pricingCard={tier}
              key={tier.title}
              useAnnualDiscount={useAnnualDiscount.value}
            />
          ))}
        </div>
        <div class="flex flex-col items-center w-full text-white">
          {notes?.map((note) => (
            <div class="flex gap-2">
              <Icon id={note.icon} size={16} class="mt-1 w-8 md:w-fit" />
              <div
                dangerouslySetInnerHTML={{
                  __html: note.text,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingTiers;
