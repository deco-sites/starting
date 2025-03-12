import type { ImageWidget } from "apps/admin/widgets.ts";

interface NewServiceProps {
  badge: {
    text: string;
  };
  title: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  image: {
    src: ImageWidget;
    alt: string;
  };
  imagePosition?: "left" | "right"
}

export default function NewService({
  badge,
  title,
  description,
  features,
  image,
  imagePosition = "right"
}: NewServiceProps) {
  return (
    <section class="service-section w-full mx-auto lg:max-w-[1440px] px-4 md:px-16 py-16 md:py-6">
      <div class={`flex flex-col ${imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"} justify-between gap-12 md:gap-20 items-center w-full`}>
        <div class="order-2 h-full w-full lg:order-1">
          <div class="flex flex-col justify-between h-full w-full">
            <div class="space-y-6">
              <div class="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full border border-[#333737]">
                <div class="w-2 h-2 bg-secondary rounded-full"></div>
                <span class="text-[#a1acaa] text-sm">{badge.text}</span>
              </div>
              <h2 class="service-title text-3xl md:text-5xl text-white leading-tight">
                {title}
              </h2>
              <p class="text-[#a1acaa] text-lg max-w-lg">
                {description}
              </p>
              <button class="inline-flex items-center gap-2 text-sm font-medium mt-4 px-6 py-3 transform transition-all duration-300 ease-in-out bg-secondary text-black hover:bg-secondary/90 rounded-full">
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <div class="flex flex-col w-80 gap-8 mt-8">
              {features.map((feature, index) => (
                <div key={index} class="flex flex-col gap-2">
                  <h3 class="text-white text-base">{feature.title}</h3>
                  <p class="text-[#a1acaa] text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div class="order-1 w-full lg:order-2">
          <div class="relative w-full overflow-hidden rounded-lg bg-tertiary">
            <img
              src={image.src}
              alt={image.alt}
              class="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
