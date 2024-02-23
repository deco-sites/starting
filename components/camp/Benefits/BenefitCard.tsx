import { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  image: LiveImage;
  title: string;
  subTitle: string;
  position: number;
}

export default function BenefitCard(
  { image, title, subTitle, position }: Props,
) {
  return (
    <>
      <div
        class={`py-6 lg:py-0 md:w-[45%] ${
          position == 0
            ? "pl-0 border-t-transparent lg:border-l-transparent lg:pl-0 2xl:pl-0"
            : "lg:pl-6 2xl:pl-14"
        } ${
          (position + 1) == 1 || (position + 1) == 2
            ? "md:border-t-0 md:border-t-transparent"
            : "border-t-[#A1A1AA]"
        } lg:w-[100%] ${
          (position + 1) % 2 == 0
            ? "md:flex md:justify-start md:pl-7 lg:block"
            : ""
        }`}
      >
        <div>
          <img class="mb-4" src={image} width={32} height={32} />

          <h4 class="text-[#fff] text-bold text-xl">{title}</h4>
          <h5 class="mt-2 text-[#A1A1AA] text-base">{subTitle}</h5>
        </div>
      </div>
    </>
  );
}
