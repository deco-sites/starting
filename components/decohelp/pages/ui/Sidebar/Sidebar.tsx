import { useEffect, useState } from "preact/hooks";
import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
import MenuButton from "site/components/decohelp/pages/ui/Sidebar/MenuButton.tsx";
import useMenuState from "site/components/decohelp/pages/hooks/useMenuState.ts";
import SearchButton from "./SearchButton.tsx";

export interface SidebarContent {
  /** @description Icon for closing the mobile menu */
  iconMenuClose: LiveImage;
  /** @description Icon for opening the mobile menu */
  iconMenuOpen: LiveImage;
  /** @description Alternate text for the mobile menu icon */
  AltIconMenu: string;
  SidebarTitle?: string;
  /** @description Icon displayed beside the sidebar title */
  SidebarIcon?: LiveImage;
  /** @description Alternate text for the sidebar icon */
  AltIcon?: string;
  Subtitle?: string;
  LinkSubtitle?: string;
  Topics?: Array<Topic>;
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
  fontWeight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold"
    | "bolder"
    | "inherit"
    | "initial"
    | "lighter"
    | "normal"
    | "revert"
    | "unset";
  SidebarLink: string;
  NestedTopics?: Array<ChildTopic>;
}

export interface ChildTopic {
  label: string;
  fontWeight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold"
    | "bolder"
    | "inherit"
    | "initial"
    | "lighter"
    | "normal"
    | "revert"
    | "unset";
  SidebarLink: string;
}

const isTopicActive = (
  currentSlug: string | null,
  topic: Topic,
  openTopicIndex: number | null,
  index: number,
): boolean => {
  const isOpen = openTopicIndex === index;

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
  iconMenuClose,
  iconMenuOpen,
  AltIconMenu,
  SidebarTitle,
  SidebarIcon,
  AltIcon,
  Subtitle,
  LinkSubtitle,
  Topics,
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
    if (Topics) {
      Topics.forEach((topic, index) => {
        const isActive = topic.SubTopics.some(
          (subTopic, subTopicIndex) => {
            if (
              subTopic.SidebarLink?.split("/").pop()?.toLowerCase() === slug
            ) {
              const hasNestedTopics = subTopic.NestedTopics
                ? subTopic.NestedTopics?.length > 0
                : false;
              if (hasNestedTopics) setOpenSubTopicIndex(subTopicIndex);

              return true;
            }

            const nestedTopicOpened = subTopic.NestedTopics?.some((
              childTopic,
            ) =>
              childTopic.SidebarLink?.split("/").pop()?.toLowerCase() === slug
            );

            if (nestedTopicOpened) {
              setOpenSubTopicIndex(subTopicIndex);
              return true;
            }
            return false;
          },
        );
        if (isActive) {
          setOpenTopicIndex(index);
        }
      });
    }
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

  const { isMenuOpen, setIsMenuOpen, isMobile } = useMenuState();

  const altIconMenuClose = AltIconMenu;
  const altIconMenuOpen = AltIconMenu;

  const menuCloseProps = {
    Image: iconMenuClose,
    AltIconMenu: altIconMenuClose,
  };

  const menuOpenProps = {
    Image: iconMenuOpen,
    AltIconMenu: altIconMenuOpen,
  };

  const firstTopic = Topics?.[0];
  const firstSubTopic = firstTopic?.SubTopics?.[0];
  const firstNestedTopic = firstSubTopic?.NestedTopics?.[0];

  const fontWeightSubtopic = {
    fontWeight: firstSubTopic?.fontWeight || "normal",
  };

  const fontWeightChildtopic = {
    fontWeight: firstNestedTopic?.fontWeight || "normal",
  };

  function getFontWeightStyle(fontWeightValue: string) {
    return {
      fontWeight: fontWeightValue,
    };
  }
  return (
    <div
      class={`flex flex-col w-full mx-auto max-w-[1440px] lg:top-[140px] top-[103px] lg:mb-[40px] ${
        isMobile ? "absolute" : "sticky"
      }`}
    >
      <style
        dangerouslySetInnerHTML={{ __html: `body{background-color: white;}` }}
      >
      </style>
      <div class="flex gap-2 z-30 relative">
        <MenuButton
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isMobile={isMobile}
          iconMenuClose={menuCloseProps}
          iconMenuOpen={menuOpenProps}
        />
      </div>
      <aside
        class={`lg:max-w-[388px] w-full h-full lg:flex flex-col gap-10
         lg:pt-10 ${!isMobile ? "lg:pl-10 " : ""} ${
          isMenuOpen && isMobile ? "block z-20 pl-0 fixed" : "hidden"
        }`}
      >
        <SearchButton />
        <ul
          class={`flex flex-col gap-2 lg:py-0 pb-[140px] lg:pl-0 pl-[24px] pr-[10px] lg:max-w-[224px] max-h-full overflow-x-auto lg:pt-0 lg:max-h-[80vh] ${
            isMenuOpen && isMobile ? "pr-[40px] pt-[40px] " : "pr-0 pt-[140px]"
          }`}
        >
          {
            /* <li class="flex items-center mb-[24px]">
            {SidebarIcon && SidebarIcon.length > 0 && (
              <figure class="mr-2">
                <Image src={SidebarIcon} alt={AltIcon} width={32} height={32} />
              </figure>
            )}
            <h2 class="text-[#2FD180] text-[28px] font-semibold leading-none">
              {SidebarTitle}
            </h2>
          </li> */
          }
          {Subtitle && Subtitle.length > 0 && (
            <li class="my-[8px] ml-[25px]">
              <a
                href={LinkSubtitle}
                class={`${
                  currentSlug === subtitleSlug
                    ? "text-blue-600"
                    : "text-zinc-900"
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
                <ul key={index} class="flex flex-col gap-2">
                  <li
                    class={`flex items-center p-2 cursor-pointer gap-2 justify-between ${
                      topic.SubTopics && topic.SubTopics.length > 0
                        ? ""
                        : "text-[#4ADE80]"
                    }`}
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleTopicMenu(index);
                    }}
                  >
                    {
                      /* {topic.SubTopics && topic.SubTopics.length > 0 && (
                      <Icon
                        class={`${openTopicIndex === index ? "rotate-90" : ""}`}
                        id="ChevronRight"
                        width={16}
                        height={16}
                        strokeWidth={"3"}
                      />
                    )}
                    {topic.Image && (
                      <Image
                        class="w-4 h-4"
                        src={topic?.Image || ""}
                        alt={topic?.AltImage}
                        width={20}
                        height={20}
                      />
                    )} */
                    }
                    <a
                      href={topic?.LinkTopic}
                      class={`font-inter text-sm font-semibold leading-tight cursor-pointer ${
                        isActive ? "text-[#4ADE80]" : "text-[#E7E5E4]"
                      } ${
                        topic.SubTopics && topic.SubTopics.length > 0
                          ? ""
                          : "!text-[#4ADE80]"
                      }`}
                    >
                      {topic.label}
                    </a>
                    {topic.SubTopics && topic.SubTopics.length > 0 && (
                      <span
                        class={`w-[20px] h-[20px] p-3 bg-[#FFFFFF1A] rounded-full font-inter text-[14px] font-medium leading-normal flex items-center justify-center ${
                          isActive ? "text-[#4ADE80]" : "text-[#FFFFFF80]"
                        }`}
                      >
                        {topic.SubTopics.length}
                      </span>
                    )}
                  </li>
                  {topic.SubTopics &&
                    topic.SubTopics.length > 0 && (
                    <ol
                      class={`font-semibold flex flex-col list-decimal ${
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
                            <a
                              href={subTopic.SidebarLink}
                              class={`flex items-center px-2 py-3 font-inter text-xs leading-tight cursor-pointer ${
                                isActiveSubTopic
                                  ? "text-[#4ADE80]"
                                  : "text-[#E7E5E4] relative w-min-content hover:bg-[#FFFFFF0D] hover:rounded-lg hover:text-[#86EFAC]"
                              }`}
                              style={getFontWeightStyle(
                                fontWeightSubtopic.fontWeight || "normal",
                              )}
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
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    event.preventDefault();
                                    if (
                                      openSubTopicIndex === subTopicIndex
                                    ) {
                                      setOpenSubTopicIndex(null);
                                    } else {
                                      setOpenSubTopicIndex(subTopicIndex);
                                    }
                                  }}
                                />
                              )}
                              <span>{subTopic.label}</span>
                            </a>
                            {subTopic.NestedTopics &&
                              subTopic.NestedTopics.length > 0 &&
                              openSubTopicIndex === subTopicIndex && (
                              <ol class="ml-9 flex flex-col">
                                {subTopic.NestedTopics.map(
                                  (ChildTopic, subSubIndex) => {
                                    const isNestedTopicActive =
                                      isSubTopicActive(
                                        currentSlug,
                                        ChildTopic,
                                      );
                                    return (
                                      <li>
                                        <a
                                          class={`flex items-center pl-[32px] pr-2 py-2 text-[15px] leading-tight cursor-pointer hover:bg-[#F8F9F5] ${
                                            isNestedTopicActive
                                              ? "text-[#2E6ED9]"
                                              : "text-zinc-900 relative w-min-content"
                                          }`}
                                          href={ChildTopic.SidebarLink}
                                          key={subSubIndex}
                                          style={getFontWeightStyle(
                                            fontWeightChildtopic.fontWeight ||
                                              "normal",
                                          )}
                                        >
                                          <span>
                                            {ChildTopic.label}
                                          </span>
                                        </a>
                                      </li>
                                    );
                                  },
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
    </div>
  );
}
