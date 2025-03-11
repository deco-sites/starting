import type { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
  /**
   * @description Badge text displayed at the top
   */
  badgeText?: string;
  /**
   * @description Main heading text with highlighted part
   */
  headingText?: string;
  /**
   * @description Text to highlight in the heading
   */
  highlightedText?: string;
  /**
   * @description Button text
   */
  buttonText?: string;
  /**
   * @description Button link URL
   */
  buttonLink?: string;
  /**
   * @description Hero image
   */
  image?: ImageWidget;
  /**
   * @description Hero image alt text
   */
  imageAlt?: string;
}

export default function Section({
  name = "Capy",
  badgeText = "Trusted by 5k+ customers",
  headingText = "Free high-impact AI Apps",
  highlightedText = "Free",
  buttonText = "Apply now",
  buttonLink = "/apply-now.html",
  image = "/media/hero-image.png",
  imageAlt = "Platform Preview"
}: Props) {
  return (
    <>
      <section class="relative overflow-hidden lg:mx-auto lg:max-w-[1440px] px-4">
        <div class="max-w-container mx-auto pt-12 sm:pt-16 md:pt-20 lg:pt-48 pb-4">
          <div class="px-4 mb-12 sm:mb-16 md:mb-20 lg:mb-24 md:px-8 lg:px-16">
            <div class="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-24 mb-8">
              <div class="w-full lg:w-2/3">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#333737] mb-4 sm:mb-6">
                  <div class="w-2 h-2 bg-primary rounded-full"></div>
                  <span class="text-[#a1acaa] text-xs sm:text-sm">
                    {badgeText}
                  </span>
                </div>
                <h1 class="text-6xl lg:text-7xl text-white leading-tightest mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                  <span class="text-secondary">{highlightedText}</span> {headingText.replace(highlightedText, '')}
                </h1>
                <a
                  href={buttonLink}
                  class="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transform transition-all duration-300 ease-in-out bg-secondary text-black hover:bg-secondary/90"
                >
                  {buttonText}{" "}
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
                </a>
              </div>
            </div>
          </div>
          <div class="relative mx-4 aspect-video sm:aspect-[3/1] bg-tertiary rounded-lg overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
