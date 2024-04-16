import { Picture, Source } from "apps/website/components/Picture.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /**
   * @format rich-text
   */
  title: string;
  /**
   * @format rich-text
   */
  subtitle: string;
  /**
   * @format rich-text
   */
  label?: string;
  href?: string;
  desktop: ImageWidget;
  mobile: ImageWidget;
}

function Creator({ title, subtitle, label, href, desktop, mobile }: Props) {
  return (
    <div class="w-full px-4 pt-[105px] bg-[#010101]">
      <div class="container flex items-center sm:mx-8 py-12 md:mx-auto md:px-14 md:py-16 lg:px-16 gap-16 lg:py-20 xl:px-16">
        <div class="flex lg:flex-row pb-8 md:pb-0 items-center justify-between gap-6 flex-row-reverse flex-col-reverse text-center lg:text-left w-full mx-auto">
          <div class="gap-4 flex flex-col items-center justify-center md:justify-start md:items-start w-[362px] md:w-[481px]">
            <div
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            >
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: subtitle,
              }}
            >
            </div>
            {label && href && (
              <a
                href={href}
                target="_blank"
                class="bg-black border-2 text-white rounded-md max-w-[180px] px-4 py-2 text-center hover:bg-white hover:text-black hover:border-black"
              >
                {label}
              </a>
            )}
          </div>
          <div class="md:min-w-[440px]">
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
                class="w-full max-h-[579px]"
                alt="Integrates With Any Commerce Backend"
              />
            </Picture>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creator;
