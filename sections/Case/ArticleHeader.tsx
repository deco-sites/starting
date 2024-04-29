import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Logo {
  image: ImageWidget;
}

export interface Props {
  /** @format color */
  bgColor?: string;
  /** @format color */
  textColor?: string;
  logo?: ImageWidget;
  /** @description for showing more than one logo */
  logoList?: Logo[];
  title: string;
  subtitle: string;
  date: string;
  author: string;
  screenshot?: ImageWidget;
  backToBlog?: {
    label?: string;
    href?: string;
  };
}

export default function ArticleHeader({
  bgColor = "#06E474",
  textColor = "#0A2121",
  logo,
  title = "Article title",
  subtitle = "Article description",
  date = "31 ago 2023",
  author = "Por Maria Cecilia Marques",
  screenshot,
  backToBlog,
  logoList = [],
}: Props) {
  return (
    <div
      class="w-full mb-4 md:mb-16 mt-24 pt-16 pb-12 md:pb-20"
      style={{ background: bgColor, color: textColor }}
    >
      <div class="mx-4 md:mx-12 lg:mx-auto lg:container flex flex-col gap-16 z-10">
        {backToBlog?.label && (
          <div>
            <a
              class="group flex items-center cursor-pointer text-subdued"
              href={backToBlog.href || "/pt/blog"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              <span class="ml-4 group-hover:underline">
                {backToBlog?.label}
              </span>
            </a>
          </div>
        )}
        <div class="w-full flex flex-col lg:flex-row gap-12 lg:gap-32 items-center z-10">
          <div class="lg:w-1/2 flex flex-col gap-6">
            <div class="flex gap-4">
              {logo && (
                <div class="">
                  <Image
                    src={logo}
                    fetchPriority={"low"}
                    preload={false}
                    loading={"lazy"}
                    width={120}
                    height={56}
                  />
                </div>
              )}
              {logoList && logoList.length
                ? (
                  <div class="flex items-center gap-4">
                    {logoList.map(({ image }) =>
                      image
                        ? (
                          <Image
                            src={image}
                            fetchPriority={"low"}
                            preload={false}
                            loading={"lazy"}
                            width={120}
                            height={56}
                          />
                        )
                        : null
                    )}
                  </div>
                )
                : null}
            </div>
            <div class="flex flex-col gap-3">
              <h1 class="text-5xl md:text-6xl font-bold leading-none">
                {title}
              </h1>
              <div class="text-xl md:text-2xl">{subtitle}</div>
              <div class="flex gap-5">
                <div>{date}</div>
                <div>{author}</div>
              </div>
            </div>
          </div>
          {screenshot && (
            <div class="justify-end lg:w-1/2">
              <Image
                class="drop-shadow-lg rounded-md w-full"
                src={screenshot}
                fetchPriority={"low"}
                preload={false}
                loading={"lazy"}
                width={468}
                height={250}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
