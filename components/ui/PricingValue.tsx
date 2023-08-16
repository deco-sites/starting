import Button from "deco-sites/starting/components/ui/Button.tsx";

export interface Props {
  price: string;
  text: string;
  subtext: string;
  button: {
    text: string;
    link: string;
  };
}

export default function PricingValue(
  { price, text, subtext, button }: Props,
) {
  return (
    <section class="flex gap-12 bg-dark-green md:pb-32 justify-center">
      <div class="flex flex-col md:flex-row max-w-[1024px] gap-16">
        <div class="md:flex gap-16 px-4 md:px-0 items-center">
          <div class="flex flex-col gap-4 px-8 md:px-0">
            <h2 class="text-4xl md:text-[42px] leading-[1.1] md:text-3xl text-almost-white font-semibold">
              <span class="text-highlight text-6xl">{price}</span> {text}
            </h2>
            <p class="text-[13px] text-almost-white">{subtext}</p>
          </div>
        </div>
        <div class="flex md:block justify-center">
          <div class="w-4/5 md:w-full py-4 mx-auto items-center md:py-8 rounded-[8px]">
            <Button
              type="button"
              href={button.link}
              children={button.text}
              target="_blank"
              variant="inverse"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
