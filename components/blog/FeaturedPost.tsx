import { Post } from "deco-sites/starting/components/utils/Blog.ts";

export default function FeaturedPost({
  title,
  descr,
  img,
  path,
  date,
  readTime,
  author,
  authorRole,
  authorAvatar,
}: Post) {
  return (
    <div class="overflow-hidden py-12">
      <div class="mx-auto">
        <div class="mx-auto ">
          <div class="w-full cursor-pointer">
            <a class="grid gap-8 lg:grid-cols-2 lg:gap-16" href={path}>
              <div class="relative h-96 w-full overflow-auto rounded-lg border">
                <span
                  style={`box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0`}
                >
                  <img
                    alt="blog thumbnail"
                    src={img}
                    decoding="async"
                    style={`position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover`}
                    sizes="100vw"
                  />
                </span>
              </div>
              <div class="flex flex-col space-y-2 lg:mr-16 lg:mt-16 lg:mb-16">
                <div class="text-scale-900 flex space-x-2 text-sm">
                  <p>{date}</p>
                  <p>•</p>
                  <p>{readTime} minute read</p>
                </div>
                <div class="flex flex-col space-y-4">
                  <h2 class="font-medium text-3xl">{title}</h2>
                  <p class="p text-xl">{descr}</p>
                  <div>
                    <div class="flex items-center space-x-3">
                      <div class="relative h-10 w-10 overflow-auto">
                        <span>
                          <img
                            alt={`${author} avatar`}
                            src={authorAvatar}
                            decoding="async"
                            class="rounded-full"
                            sizes="100vw"
                          />
                        </span>
                      </div>
                      <div class="flex flex-col">
                        <span class="m-0 text-sm">{author}</span>
                        <span class="m-0 text-xs">{authorRole}</span>
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
