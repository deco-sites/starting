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
        <div class="flex flex-row gap-4 z-20">
          {cta?.map((item) => (
            <a
              href={item?.href}
              target={item?.href.includes("http") ? "_blank" : "_self"}
              class="group relative relative overflow-hidden rounded-full bg-[#02F67C] px-6 py-2 lg:px-8 lg:py-3 text-black transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-[#02F67C] hover:to-[#06E474] hover:shadow-hero"
            >
              <span class="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white font-medium lg:text-[24px] opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
              <span class="relative">{item?.text}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
