import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
    pattern?: ImageWidget;
    title?: string;
    buttonText: string;
}

export default function Section({pattern, title, buttonText} : Props) {
  return (
    <div class="max-w-container lg:max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 pt-10 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10">
      <div class="relative w-full px-6 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 lg:py-40 bg-secondary rounded-md overflow-hidden">
        <img
          src={pattern}
          alt="Pattern"
          class="opacity-50 top-0 absolute w-full h-full object-cover"
        />
        <div class="relative z-10">
          <h2 class="max-w-auto md:max-w-[60%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] text-black font-medium leading-[1.1] mb-6 sm:mb-8 md:mb-10">
            {title}
          </h2>
          <a
            href="/apply-now.html"
            class="inline-flex items-center gap-2 text-xs sm:text-sm font-medium rounded-full !bg-black text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 hover:bg-secondary/90 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            {buttonText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 sm:h-4 sm:w-4"
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
  );
}
