import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

/**
 * @titleBy title
 */
export interface Card {
  cardNumber?: string;
  /**
   * @format html
   */
  text: string;
}

export interface Props {
  /**
   * @format html
   */
  title?: string;
  cards: Card[];
}

function FeatureCard({ cardNumber, text }: Card) {
  return (
    <div class="feature-card bg-[#000D0D] rounded-3xl lg:h-[350px] group group-hover:-translate-y-3">
      {cardNumber && (
        <div class="p-6 rounded-full bg-[#113032]">
          <div class="w-12 h-12 flex- items-center justify-center text-[#02F67C] text-[40px] font-semibold">
            {cardNumber}
          </div>
        </div>
      )}
      <div class="space-y-4 text-center">
        <p class="leading-[120%]" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
}

export default function Features(
  { title = "Feature", cards }: Props,
) {
  return (
    <section class="relative py-20 max-w-screen">
      <div class="mx-6 lg:container lg:mx-auto flex justify-center items-center flex-col gap-20">
        <h2
          class="font-medium text-white text-[36px] lg:text-[72px] leading-[100%] text-center max-w-4xl z-10"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div class="flex items-center justify-center gap-6 relative max-w-[1280px] mx-auto flex-wrap">
          {cards?.map((card) => <FeatureCard {...card} />)}
        </div>
      </div>
    </section>
  );
}
