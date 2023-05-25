import Image, { IImage } from "deco-sites/starting/components/ui/Image.tsx";
import ArrowRight from "deco-sites/starting/components/ui/icons/ArrowRight.tsx";
import Icon from "deco-sites/starting/components/ui/Icon.tsx";

export interface Props {
  title: string;
  subtitle: string;
  text: string;
  pageSpeed: {
    label: string;
    store: IImage;
    deco: IImage;
  }[];
}

export default function PageSpeed(props: Props) {
  return (
    <section class="bg-dark-green px-6 py-14">
      <div class="mb-8">
        <h3 class="font-inter font-regular text-5xl text-almost-white mb-10">
          {props.title}
        </h3>
        <p class="font-medium text-xl text-almost-white mb-6">
          {props.subtitle}
        </p>

        <p class="font-regular text-xl text-almost-white">
          {props.text}
        </p>
      </div>

      <div class="flex flex-col gap-[40px]">
        {props.pageSpeed.map((page, index) => (
          <>
            {index === 0 && (
              <div class="flex justify-between items-center">
                <p class="font-regular text-xl text-almost-white">
                  Atual
                </p>
                <Icon id="DecoIconWhite" size={57} />
              </div>
            )}

            <div>
              <p class="font-regular text-xl text-almost-white text-center">
                {page.label}
              </p>

              <div key={page.label} class="flex justify-between gap-[53px]">
                <Image image={page.store} />
                <div class="flex flex-col justify-center">
                  <ArrowRight />
                </div>
                <Image image={page.deco} />
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
