import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  subtitle: string;
  label: string;
  href: string;
  desktop: LiveImage;
  mobile: LiveImage;
}

function Creator({ title, subtitle, label, href, desktop, mobile }: Props) {
  return (
    <div class="w-full bg-customGray px-4">
      <div class="container ">
        {/* mobile version */}
        <div class="flex flex-col-reverse pb-8 md:pb-0 items-center justify-center gap-2 md:flex-row-reverse text-center md:text-left">
          <div class="gap-4 flex flex-col items-center justify-center md:justify-start md:items-start w-[362px] md:w-[440px]">
            <h2 class="text-[40px] font-semibold text-black leading-12 tracking-tighter">
              {title}
            </h2>
            <h4 class="text-[15px] font-normal leading-5 ">
              {subtitle}
            </h4>
            <a
              href={href}
              target="_blank"
              class="bg-black border-2 text-white rounded-md max-w-[180px] px-4 py-2 text-center hover:bg-white hover:text-black hover:border-black"
            >
              {label}
            </a>
          </div>
          <div class="py-4 md:min-w-[440px]">
            <Picture>
              <Source
                src={mobile}
                width={360}
                height={330}
              />
              <Source
                src={desktop}
                width={640}
                height={380}
              />
              <img
                src={desktop}
                class="pb-[10px]"
                alt="imagem-logo"
              />
            </Picture>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creator;
