export interface CTA {
  href: string;
  text: string;
  variant: "Normal" | "Reverse";
}

export interface Props {
  text: string;
  cta: CTA[];
}

export default function CallToAction({ text, cta }: Props) {
  return (
    <div class="bg-black py-16 md:py-28">
      <section class="xl:container mx-auto flex flex-col items-center justify-center gap-8 mb-16 lg:mb-0">
        <h2 class="mx-6 lg:mx-0 text-center text-[36px] md:text-[80px] leading-[100%] text-white font-medium max-w-4xl">
          {text}
        </h2>
        <div class="flex flex-row gap-4">
          {cta?.map((item) => (
            <a
              href={item?.href}
              target={item?.href?.includes("http") ? "_blank" : "_self"}
              class={`border-none rounded-full text-lg py-4 px-8 transition-colors duration-200 cursor-pointer ${
                item?.variant === "Reverse"
                  ? "border bg-[#113032] text-[#FFF]"
                  : "border bg-[#02F67C] text-[#113032]"
              }`}
            >
              {item?.text}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
