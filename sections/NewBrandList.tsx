import type { ImageWidget } from "apps/admin/widgets.ts";

export interface BrandLogo {
  /**
   * @description The logo image
   */
  image: ImageWidget;
  /**
   * @description Alt text for the logo
   */
  alt: string;
}

export interface Props {
  /**
   * @description Section title (optional)
   */
  title?: string;
  /**
   * @description Section subtitle (optional)
   */
  subtitle?: string;
  /**
   * @description Array of brand logos to display
   */
  logos: BrandLogo[];
  /**
   * @description Initial translation percentage (default: -49.6442%)
   */
  initialTranslate?: string;
}

export default function NewBrandList({
  title,
  subtitle,
  logos = [],
  initialTranslate = "-49.6442%",
}: Props) {
  // If no logos are provided, don't render the section
  if (logos.length === 0) return null;
  
  // Create a duplicate set of logos for seamless looping
  const allLogos = [...logos, ...logos];
  
  return (
    <section class="backdrop-blur-sm border-y border-[#333737]">
      <div class="max-w-container mx-auto">
        {(title || subtitle) && (
          <div class="text-center py-6">
            {title && <h2 class="text-2xl font-semibold text-white mb-2">{title}</h2>}
            {subtitle && <p class="text-[#a1acaa]">{subtitle}</p>}
          </div>
        )}
        <div class="overflow-hidden">
          <div class="py-4 sm:py-6 md:py-8">
            <div 
              class="flex items-center gap-16 sm:gap-24 md:gap-32 animate-slide" 
              style={`width: max-content; translate: none; rotate: none; scale: none; animation-duration: 60s;`}
            >
              {allLogos.map((logo, index) => (
                <div key={`logo-${index}`} class="flex items-center justify-center">
                  <img 
                    src={logo.image} 
                    alt={logo.alt} 
                    class="h-6 sm:h-8 md:h-10 max-w-24 sm:max-w-32 md:max-w-40 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 