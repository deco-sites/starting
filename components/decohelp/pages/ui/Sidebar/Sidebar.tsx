import { useEffect, useState } from "preact/hooks";
import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Icon from "deco-sites/starting/components/ui/Icon.tsx";

export interface SidebarContent {
  SidebarTitle?: string;
  Subtitle?: string;
  SidebarIcon?: LiveImage;
  AltIcon?: string;
  LinkSubtitle?: string;
  Topics?: Array<Topic>;
  class?: string;
}

export interface Topic {
  label?: string;
  Image?: LiveImage;
  AltImage?: string;
  LinkTopic?: string;
  SubTopics: Array<SubTopic>;
}

export interface SubTopic {
  label: string;
  SidebarLink: string;
  NestedTopics?: Array<ChildTopic>;
}

export interface ChildTopic {
  label: string;
  SidebarLink: string;
}

const isTopicActive = (
  currentSlug: string | null,
  topic: Topic,
  openTopicIndex: number | null,
  index: number,
): boolean => {
  const linkSlug = topic.LinkTopic?.split("/").pop()?.toLowerCase();
  const isActiveTopic = currentSlug === linkSlug ||
    topic.SubTopics.some(
      (subTopic) =>
        subTopic.SidebarLink?.split("/").pop()?.toLowerCase() === currentSlug,
    );
  const isOpen = openTopicIndex === index || isActiveTopic;

  return isOpen;
};

const isSubTopicActive = (
  currentSlug: string | null,
  subTopic: SubTopic,
): boolean => {
  const subTopicSlug = subTopic.SidebarLink?.split("/").pop()?.toLowerCase();
  const isActiveSubTopic = currentSlug === subTopicSlug;
  return isActiveSubTopic;
};

export default function Sidebar({
  SidebarTitle,
  SidebarIcon,
  AltIcon,
  Subtitle,
  LinkSubtitle,
  Topics,
  class: sidebarClass,
}: SidebarContent) {
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);
  const [openTopicIndex, setOpenTopicIndex] = useState<number | null>(null);
  const [openSubTopicIndex, setOpenSubTopicIndex] = useState<number | null>(
    null,
  );

  useEffect(() => {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/");
    const slug = pathParts[pathParts.length - 1].toLowerCase();
    setCurrentSlug(slug);
  }, []);

  const subtitleSlug = LinkSubtitle?.split("/").pop()?.toLowerCase();

  const toggleTopicMenu = (index: number) => {
    if (openTopicIndex === index) {
      setOpenTopicIndex(null);
    } else {
      setOpenTopicIndex(index);
    }
  };

  const toggleDropdown = (subTopicIndex: number) => {
    setOpenSubTopicIndex(
      (isOpen) => (isOpen === subTopicIndex ? null : subTopicIndex),
    );
  };

  return (
    <aside
      class={`lg:max-w-[284px] w-full h-full lg:block z-10 ${sidebarClass}`}
    >
      <ul class="flex flex-col lg:py-0 pb-[140px] lg:pl-0 pl-[24px] max-h-full overflow-x-auto lg:pt-0 pt-[140px] pr-[40px]">
        <li class="flex items-center mb-[24px]">
          {SidebarIcon && SidebarIcon.length > 0 && (
            <figure class="mr-2">
              <Image src={SidebarIcon} alt={AltIcon} width={32} height={32} />
            </figure>
          )}
          <h2 class="text-[#2FD180] text-[28px] font-semibold leading-none">
            {SidebarTitle}
          </h2>
        </li>
        {Subtitle && Subtitle.length > 0 && (
          <li class="my-[8px] ml-[25px]">
            <a
              href={LinkSubtitle}
              class={`${
                currentSlug === subtitleSlug ? "text-blue-600" : "text-zinc-900"
              } text-[15px] font-semibold leading-tight`}
            >
              {Subtitle}
            </a>
          </li>
        )}
        {Topics &&
          Topics.map((topic, index) => {
            const isActive = isTopicActive(
              currentSlug,
              topic,
              openTopicIndex,
              index,
            );
            return (
              <ul key={index} class="mt-2 mb-3 flex flex-col">
                <li
                  class="flex items-center py-2 cursor-pointer gap-2"
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleTopicMenu(index);
                  }}
                >
                  <Icon
                    class={` ${openTopicIndex === index ? "rotate-90" : ""}`}
                    id="ChevronRight"
                    width={16}
                    height={16}
                    strokeWidth={"3"}
                  />
                  {topic.Image && (
                    <Image
                      class="w-4 h-4"
                      src={topic?.Image || ""}
                      alt={topic?.AltImage}
                      width={20}
                      height={20}
                    />
                  )}
                  <a
                    href={topic?.LinkTopic}
                    class="text-zinc-900 text-[15px] font-semibold leading-tight cursor-pointer"
                  >
                    {topic.label}
                  </a>
                  {topic.SubTopics && topic.SubTopics.length > 0 && (
                    <span class="w-5 h-5 p-1 bg-[#C9CECE] rounded-full text-white text-[13px] font-semibold leading-tight flex items-center justify-center">
                      {topic.SubTopics.length}
                    </span>
                  )}
                </li>
                {topic.SubTopics &&
                  topic.SubTopics.length > 0 && (
                  <ol
                    class={`font-semibold flex flex-col list-decimal nested ${
                      isActive ? "" : "hidden"
                    }`}
                  >
                    {topic.SubTopics.map((subTopic, subTopicIndex) => {
                      const isActiveSubTopic = isSubTopicActive(
                        currentSlug,
                        subTopic,
                      );

                      return (
                        <li
                          key={subTopicIndex}
                          class={`flex flex-col cursor-pointer ${
                            isActiveSubTopic
                              ? "text-[#2E6ED9]"
                              : "text-zinc-900 relative w-min-content"
                          }`}
                        >
                          <span
                            class="flex items-center hover:bg-[#F8F9F5] pl-[32px] pr-2 py-2"
                            onClick={(event) => {
                              event.preventDefault();
                              toggleDropdown(subTopicIndex);
                            }}
                          >
                            {subTopic.NestedTopics &&
                              subTopic.NestedTopics.length > 0 && (
                              <Icon
                                class={`mr-2 ${
                                  openSubTopicIndex === subTopicIndex
                                    ? "rotate-90"
                                    : ""
                                }`}
                                id="ChevronRight"
                                width={16}
                                height={16}
                                strokeWidth={"3"}
                              />
                            )}
                            <a
                              href={subTopic.SidebarLink}
                              class={`text-zinc-900 text-[15px] font-semibold leading-tight cursor-pointer`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span class="ml-[5px]">{subTopic.label}</span>
                            </a>
                          </span>
                          {subTopic.NestedTopics &&
                            subTopic.NestedTopics.length > 0 &&
                            openSubTopicIndex === subTopicIndex && (
                            <ol class="ml-9 flex flex-col nested">
                              {subTopic.NestedTopics.map(
                                (ChildTopic, subSubIndex) => (
                                  <li>
                                    <a
                                      class="flex items-center pl-[32px] pr-2 py-2 text-zinc-900 text-[15px] font-semibold leading-tight cursor-pointer hover:bg-[#F8F9F5]"
                                      href={ChildTopic.SidebarLink}
                                      key={subSubIndex}
                                    >
                                      <span class="ml-[5px]">
                                        {ChildTopic.label}
                                      </span>
                                    </a>
                                  </li>
                                ),
                              )}
                            </ol>
                          )}
                        </li>
                      );
                    })}
                  </ol>
                )}
              </ul>
            );
          })}
      </ul>
    </aside>
  );
}
