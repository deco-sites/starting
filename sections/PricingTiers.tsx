import PricingCard from "site/islands/pricing/PricingCard.tsx";
import { useSignal } from "@preact/signals";
import { PricingCardProps } from "site/components/pricing/PricingCard.tsx";

/**
 * @title Pricing tiers
 */
export interface PricingTiersProps {
  tiers?: PricingCardProps[];
}

function PricingTiers({ tiers }: PricingTiersProps) {
  const useAnnualDiscount = useSignal(false);
  return (
    <div class="relative flex flex-wrap justify-center max-w-[1440px] text-white z-10 gap-4">
      {tiers?.map((tier) => (
        <PricingCard
          pricingCard={tier}
          key={tier.title}
          useAnnualDiscount={useAnnualDiscount.value}
        />
      ))}
    </div>
  );
}

export default PricingTiers;
