import type { ImageWidget } from "apps/admin/widgets.ts";

export interface IndiqueEGanheProps {
  title?: string;

  /** @format html */
  description?: string;

  images: ImageWidget[];
}

export default function IndiqueEGanhe(
  { title, description, images }: IndiqueEGanheProps,
) {
  return (
    <div class="w-full bg-[#FFFFFF] py-5 md:py-10">
      <div class="xl:container xl:mx-auto mx-5 md:mx-10 flex flex-col items-center md:items-start md:flex-row gap-6 md:gap-20 md:items-center md:justify-center ">
        <div class="flex flex-col gap-2 md:w-max items-center md:items-start text-center md:text-start">
          {title && (
            <p class="text-[#0A2121] text-[32px] md:text-[48px] font-semibold md:mr-4 mb-4">
              {title}
            </p>
          )}
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>
        <div>
          {images?.map((image, index) => (
            <img src={image} alt={`image${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
