import { Post, SupportedLocales } from "site/components/utils/Blog.ts";
import Image from "deco-sites/std/components/Image.tsx";

export default function FeaturedPost({
  img,
  path,
  body,
  date,
  author,
  authorAvatar,
  locale = "en",
}: Post & { locale?: SupportedLocales }) {
  return (
    <div class="overflow-hidden bg-black py-18">
      <div class="mx-auto bg-[#FFFFFF0D] border border-[#FFFFFF26] rounded-[20px] p-[2.25rem] lg:p-[56px]">
        <div class="mx-auto ">
          <div class="w-full cursor-pointer">
            <a class="grid gap-8 lg:grid-cols-2 lg:gap-16" href={path}>
              <div
                className="relative overflow-hidden rounded-[20px]"
                style={{ paddingTop: "56.25%" }}
              >
                <span className="block absolute top-0 left-0 bottom-0 right-0">
                  <Image
                    alt="blog thumbnail"
                    src={img}
                    decoding="async"
                    className="absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover"
                    height={374}
                    width={714}
                  />
                </span>
              </div>
              <div class="flex flex-col items-center">
                {
                  /* <div class="text-scale-900 flex space-x-2 text-sm">
                  <p>{date}</p>
                  {readTime && (
                    <>
                      <p>•</p>
                      <p>{readTime} minute read</p>
                    </>
                  )}
                </div> */
                }
                <div class="flex flex-col text-white gap-6">
                  <h2 class="font-600 text-[2.375rem] lg:text-[3.375rem] leading-[100%] tracking-[-1.04px]">
                    {body[locale]?.title}
                  </h2>
                  <p class="text-xl">{body[locale]?.descr}</p>
                  <div>
                    <div class="flex items-center space-x-3">
                      {authorAvatar && (
                        <div class="relative h-10 w-10 overflow-auto">
                          <span>
                            <Image
                              alt={`${author} avatar`}
                              src={authorAvatar}
                              decoding="async"
                              loading="lazy"
                              class="rounded-full"
                              sizes="100vw"
                              width={40}
                              height={40}
                            />
                          </span>
                        </div>
                      )}
                      <div class="flex text-white tracking-[-0.32px] leading-[130%] gap-2">
                        <span class="m-0 text-[1rem]">{author}</span>
                        <span>•</span>
                        <span class="m-0 text-[1rem]">{date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
