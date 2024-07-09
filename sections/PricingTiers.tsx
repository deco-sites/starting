import PricingCard, {
  PricingCardProps,
} from "site/components/pricing/PricingCard.tsx";

/**
 * @title Pricing tiers
 */
export interface PricingTiersProps {
  tiers?: PricingCardProps[];
}

function PricingTiers({ tiers }: PricingTiersProps) {
  return (
    <div class="relative flex flex-wrap justify-center max-w-[1440px] text-white z-10 gap-4">
      {tiers?.map((tier) => (
        <PricingCard {...tier} />
      ))}
    </div>
  );
}

export default PricingTiers;
