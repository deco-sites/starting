export type Props = {
  title: string;
  description: string;
  date: string;
  readTime?: string;
  authorName: string;
  authorRole?: string;
  authorAvatar?: string;
  blogThumbnail: string;
  blogLink: string;
};

export default function HeroPost({
  title,
  description,
  date,
  readTime,
  authorName,
  authorRole,
  authorAvatar,
  blogThumbnail,
  blogLink,
}: Props) {
  return (
    <div class="overflow-hidden py-12">
      <div class="mx-auto mt-16">
        <div class="mx-auto ">
          <div class="w-full cursor-pointer">
            <a class="grid gap-8 lg:grid-cols-2 lg:gap-16" href={blogLink}>
              <div class="relative h-96 w-full overflow-auto rounded-lg border">
                <span
                  style={`box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0`}
                >
                  <img
                    alt="blog thumbnail"
                    src={blogThumbnail}
                    decoding="async"
                    style={`position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover`}
                    sizes="100vw"
                  />
                </span>
              </div>
              <div class="flex flex-col space-y-2">
                <div class="text-scale-900 flex space-x-2 text-sm">
                  <p>{date}</p>
                  <p>•</p>
                  <p>{readTime} minute read</p>
                </div>
                <div>
                  <h2 class="h2">{title}</h2>
                  <p class="p text-xl">{description}</p>
                </div>
                <div class="grid w-max grid-flow-col grid-rows-4 gap-4">
                  <div class="flex items-center space-x-3">
                    <div class="relative h-10 w-10 overflow-auto">
                      <span
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                        }}
                      >
                        <img
                          alt={`${authorName} avatar`}
                          src={authorAvatar}
                          decoding="async"
                          class="rounded-full"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            objectFit: "cover",
                          }}
                          sizes="100vw"
                        />
                      </span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-scale-1200 m-0 text-sm">
                        {authorName}
                      </span>
                      <span class="text-scale-900 m-0 text-xs">
                        {authorRole}
                      </span>
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
