export interface Props {
  price: string;
  text: string;
  subtext: string;
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

export default function PricingValue(
  { price, text, subtext, button }: Props,
) {
  return (
    <section class="flex gap-12 bg-dark-green justify-center">
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
            <Button link={button.link} text={button.text} />
          </div>
        </div>
      </div>
    </section>
  );
}
