import type { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * Featured story tag text
   */
  tagText?: string;
  /**
   * Main title of the case study
   */
  title: string;
  /**
   * Description/subtitle of the case study
   */
  description: string;
  /**
   * URL for the "Read Impact Story" link
   */
  ctaUrl: string;
  /**
   * Main image URL
   */
  imageUrl: ImageWidget;
  /**
   * Alt text for the main image
   */
  imageAlt: string;
  /**
   * Client logo image URL
   */
  clientLogoUrl: ImageWidget;
  /**
   * Alt text for the client logo
   */
  clientLogoAlt: string;
}

export default function CaseBlock({
  tagText = "Featured Story",
  title,
  description,
  ctaUrl,
  imageUrl,
  imageAlt,
  clientLogoUrl,
  clientLogoAlt,
}: Props) {
  return (
    <div className="max-w-container lg:mx-auto lg:max-w-[1440px] px-4 mx-auto md:px-8 lg:px-16 py-32">
      <div className="w-full p-4 rounded-md border border-[#333737] overflow-hidden backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row min-h-[400px] relative">
          <div className="lg:w-1/2 px-4 lg:px-14 py-10 relative z-10">
            <div className="flex flex-col gap-6 mb-10">
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full border border-[#333737]">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-[#a1acaa] text-sm">{tagText}</span>
              </div>
              <h2 className="text-3xl md:text-5xl text-white leading-tight">
                {title}
              </h2>
              <p className="text-[#a1acaa] text-lg leading-relaxed">
                {description}
              </p>
            </div>
            <a
              href={ctaUrl}
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary rounded-full text-black text-sm font-medium hover:bg-secondary/90 transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-md"
            >
              Read Impact Story
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="lg:w-1/2 lg:right-0 lg:top-0 lg:bottom-0 h-fit">
            <div className="relative w-full h-auto">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full aspect-[3/2] object-cover rounded-md"
              />
              <div className="client-logo left-0 bottom-0 absolute bg-secondary px-6 py-4 rounded-tr-md">
                <img
                  src={clientLogoUrl}
                  alt={clientLogoAlt}
                  className="h-8 max-h-10 max-w-[200px] w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}