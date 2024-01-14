import type { ImageWidget, VideoWidget } from "apps/admin/widgets.ts";
import Video from "deco-sites/std/components/Video.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  variant: "Normal" | "Reverse";
}

export interface Props {
  /**
   * @format html
   */
  title: string;
  description: string;
  image?: ImageWidget;
  videoMp4?: VideoWidget;
  videoWebm?: VideoWidget;
  showSpecialNrfVideo?: boolean;
  placement: "left" | "right";
  cta: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title,
  description,
  image,
  videoMp4,
  videoWebm,
  placement,
  cta,
  showSpecialNrfVideo,
}: Props) {
  return (
    <div class="bg-black lg:min-h-screen">
      <div class="mx-auto flex flex-col items-center gap-8">
        <div
          class={`flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 ${
            image
              ? PLACEMENT[placement]
              : "flex-col items-center justify-center text-center"
          } ${
            videoMp4 || videoWebm ? "lg: pt-28 pb-8" : "lg:py-28 lg:h-screen"
          } gap-12 md:gap-20 items-center`}
        >
          {image && (
            <img
              class="w-full lg:w-1/2 object-fit"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
          )}
          <div
            class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 ${
              image
                ? "lg:w-1/2 lg:max-w-xl"
                : "flex flex-col items-center justify-center lg:max-w-3xl"
            }`}
          >
            <div
              class="inline-block text-[80px] leading-[100%] font-medium text-white tracking-[-2.4px]"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            ></div>
            <p class="text-zinc-400 text-[16px] md:text-[18px] leading-[150%]">
              {description}
            </p>
            <div class="flex flex-col items-start lg:flex-row gap-4">
              {cta?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`group relative relative overflow-hidden rounded-full hover:bg-gradient-to-r px-6 py-2 lg:px-8 lg:py-3 transition-all duration-300 ease-out ${
                    item.variant === "Reverse"
                      ? "bg-[#113032] hover:from-[#113032] hover:to-[#0A1F1F] text-white hover:shadow-hero-reverse"
                      : "bg-[#02F67C] hover:from-[#02F67C] hover:to-[#06E474] text-black hover:shadow-hero"
                  }`}
                >
                  <span class="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
                  <span class="relative font-medium lg:text-[20px]">
                    {item?.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div class="relative z-10 p-3 rounded-[24px] border border-white/[0.15]">
          <div class="relative overflow-hidden rounded-[20px] w-[80vw]">
            {showSpecialNrfVideo && (
              <div style="padding:56.25% 0 0 0;position:relative;">
                <iframe
                  src="https://player.vimeo.com/video/902689992?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  style="position:absolute;top:0;left:0;width:100%;height:100%;"
                  title="The Unlimited AI Sales Assistant | deco.cx"
                ></iframe>
              </div>
            )}
            <script src="https://player.vimeo.com/api/player.js"></script>
            {videoMp4 && (
              <Video
                controls
                src={videoMp4}
                loop={false}
                playsInline={true}
                autoPlay={false}
                muted={false}
                loading="eager"
                width={1156}
                height={650}
              />
            )}
            {!videoMp4 && videoWebm && (
              <Video
                controls
                src={videoWebm}
                loop={false}
                playsInline={true}
                autoPlay={false}
                muted={false}
                loading="eager"
                width={1156}
                height={650}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
