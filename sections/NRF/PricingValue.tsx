import Button from "deco-sites/starting/components/ui/Button.tsx";

export interface Props {
  price: string;
  /**
   * @format html
   */
  text: string;
  subtext: string;
  button: {
    text: string;
    link: string;
  };
}

export default function PricingValue({ price, text, subtext, button }: Props) {
  return (
    <section class="flex gap-12 bg-black py-10 justify-center mx-6 lg:mx-0">
      <div class="flex flex-col max-w-[1024px] gap-2 lg:gap-6 items-center z-10">
        <div class="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-[18px] text-4xl md:text-[42px] md:text-3xl text-almost-white font-semibold">
          <p class="text-highlight text-[64px] lg:text-[144px] leading-[110%]">{price}</p>
          <div>
            <p class="text-[48px] lg:text-[54px] leading-[110%]" dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>
        <p class="text-zinc-400 text-[22px]">{subtext}</p>
      </div>
    </section>
  );
}
