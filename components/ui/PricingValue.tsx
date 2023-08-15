export interface Props {
  price: string;
  text: string;
  subtext: string;
}

export default function PricingValue(
  { price, text, subtext }: Props,
) {
  return (
    <section class="flex flex-col gap-12 pt-[63px] bg-dark-green">
      <div class="md:flex gap-16 max-w-[1024px] mx-auto px-4 md:px-0">
        <div class="flex flex-col gap-4 mx-auto">
          <h2 class="text-[42px] leading-[1.1] md:text-3xl text-almost-white font-semibold">
            <span class="text-highlight text-6xl">{price}</span> {text}
          </h2>
          <p class="text-[13px] text-almost-white">{subtext}</p>
        </div>
      </div>
    </section>
  );
}
