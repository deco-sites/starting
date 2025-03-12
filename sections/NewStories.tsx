import type { ImageWidget } from "apps/admin/widgets.ts";

interface Story {
  title?: string;
  description?: string;
  imageUrl: ImageWidget;
  imageAlt?: string;
  logoUrl: ImageWidget;
  logoAlt?: string;
  href?: string;
}

interface NewStoriesProps {
  stories: Story[];
  label?: string;
  title?: string;
}

const NewStories = ({
  stories,
  label = "Latest Stories",
  title = "Customer Impact Stories",
}: NewStoriesProps) => {
  return (
    <section class="overflow-hidden mx-auto lg:max-w-[1440px] px-4 md:px-16 py-12">
      <div class="max-w-container mx-auto">
        <div class="flex flex-col gap-6 mb-10">
          <div class="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full border border-[#333737]">
            <div class="w-2 h-2 bg-secondary rounded-full"></div>
            <span class="text-[#a1acaa] text-sm">{label}</span>
          </div>
          <h2 class="text-3xl md:text-5xl text-white leading-tight">
            {title}
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories?.map((story) => (
            <div
              class="story-card cursor-pointer border border-[#333737] hover:border rounded-md p-4 hover:border-secondary transition-colors duration-300"
            >
              <a href={story.href} class="block">
                <div class="relative">
                  <img
                    src={story.imageUrl}
                    alt={story.imageAlt}
                    class="w-full aspect-[1/1] object-cover rounded-md"
                  />
                  <div class="client-logo absolute left-0 bottom-0 bg-secondary px-6 py-4 rounded-tr-md">
                    <img
                      src={story.logoUrl}
                      alt={story.logoAlt}
                      class="w-auto h-7 max-w-24"
                    />
                  </div>
                </div>
                <div class="px-4 py-6">
                  <h3 class="text-white text-lg mb-1">
                    {story.title}
                  </h3>
                  <p class="text-[#a1acaa] text-sm">
                    {story.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewStories;
