import Icon from "site/components/ui/Icon.tsx";
import Slider from "site/components/ui/Slider.tsx";
import SliderJS from "site/islands/SliderJS.tsx";
import { useId } from "site/sdk/useId.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface CarrouselConfigs {
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
  testimonials?: TestimonialsProps[];
}

export interface CarrouselTestimonial extends CarrouselConfigs {
  title?: string;
  description?: string;
}

export interface TestimonialsProps {
  comentary?: string;
  author: {
    image?: ImageWidget;
    name?: string;
    position?: string;
  };
}

function TestimonialItem(
  { testimonial, lcp }: { testimonial: TestimonialsProps; lcp?: boolean },
) {
  return (
    <div class="card card-compact group border border-[#FFFFFF] text-[#FFFFFF] bg-transparent flex flex-col items-start gap-8 rounded-none p-8">
      {testimonial?.comentary && <p class="text-lg">{testimonial?.comentary}
      </p>}
      <div class="flex gap-4">
        {testimonial?.author?.image && (
          <div>
            <img
              src={testimonial?.author?.image ?? ""}
              alt={testimonial?.author?.name ?? ""}
              class="rounded-full"
            />
          </div>
        )}
        <div class="flex flex-col gap-2">
          {testimonial?.author?.name && (
            <p class="font-semibold">{testimonial?.author?.name}</p>
          )}
          {testimonial?.author?.position && (
            <p>{testimonial?.author?.position}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Dots({ testimonials, interval = 0 }: CarrouselConfigs) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel justify-center col-start-1 col-end-3 gap-2 z-10 row-start-4">
        {testimonials?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-3 h-3 rounded-full group-disabled:animate-progress bg-gradient-to-r from-base-100 from-[length:var(--dot-progress)] to-[rgba(255,255,255,0.4)] to-[length:var(--dot-progress)]"
                  style={{ animationDuration: `${interval}s` }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <>
      <div class="flex items-center justify-center z-10 col-start-4 row-start-4">
        <Slider.PrevButton class="btn btn-circle border border-white rounded-full bg-transparent">
          <Icon
            class="text-base-100"
            size={24}
            id="ArrowLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-5 row-start-4">
        <Slider.NextButton class="btn btn-circle border border-white rounded-full bg-transparent">
          <Icon
            class="text-base-100"
            size={24}
            id="ArrowRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

function CarrouselTestimonial(
  { title, description, testimonials, preload, interval }: CarrouselTestimonial,
) {
  const id = useId();

  return (
    <div class="bg-[#0A2121] w-full py-5 md:py-10">
      <div class="xl:container xl:mx-auto mx-5 md:mx-10 flex flex-col gap-2">
        {title && (
          <p class="text-[#02F67C] text-[40px] font-semibold">{title}</p>
        )}
        {description && <p class="text-[#FFFFFF] mb-2 md:mb-4">{description}
        </p>}

        <div
          id={id}
          class="grid grid-cols-[80px_80px_1fr_80px_80px] sm:grid-cols-[160px_1fr_100px_80px] grid-rows-4"
        >
          <Slider class="carousel carousel-center sm:carousel-end w-full col-span-full row-start-1 row-end-4 gap-6">
            {testimonials?.map((testimonial, index) => (
              <Slider.Item
                index={index}
                class="carousel-item w-[300px] md:w-[400px]"
              >
                <TestimonialItem
                  testimonial={testimonial}
                  lcp={index === 0 && preload}
                />
              </Slider.Item>
            ))}
          </Slider>

          <Buttons />

          <Dots testimonials={testimonials} interval={interval} />

          <SliderJS
            rootId={id}
            interval={interval && interval * 1e3}
            infinite
          />
        </div>
      </div>
    </div>
  );
}

export default CarrouselTestimonial;
