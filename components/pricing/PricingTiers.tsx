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
  /**
   * @description 15 = 15%
   */
  annualDiscount?: number;
  showToggleMenu?: boolean;
  notes?: Note[];
}

function PricingTiers({
  notes,
  tiers,
  annualDiscount,
  showToggleMenu,
}: PricingTiersProps) {
  const applyAnnualDiscount = useSignal(false);

  function handleUpdateDiscount(value: boolean) {
    applyAnnualDiscount.value = value;
  }

  return (
    <div class="flex justify-center elative w-full">
      <div class="relative flex flex-col items-center gap-8 z-10 max-w-[1440px] mx-4">
        {showToggleMenu && (
          <div class="bg-[#070D0D] border border-[#0B1612] p-0.5 rounded-[10px]">
            <SelectTimePlan
              updateDiscount={handleUpdateDiscount}
              annualDiscount={annualDiscount}
            />
          </div>
        )}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:flex text-white gap-4 w-full">
          {tiers?.map((tier) => (
            <PricingCard
              pricingCard={tier}
              key={tier.title}
              annualDiscount={annualDiscount}
              applyDiscount={applyAnnualDiscount.value}
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
