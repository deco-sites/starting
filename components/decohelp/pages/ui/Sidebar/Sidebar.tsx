import { useEffect, useState } from "preact/hooks";
import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "site/components/ui/Icon.tsx";
import SearchButton from "./SearchButton.tsx";
import { JSX } from "preact";
import Drawer from "site/components/ui/Drawer.tsx";
import Breadcrumb from "site/components/decohelp/pages/ui/BreadCrumb/Breadcrumb.tsx";
import { type SectionProps } from "@deco/deco";
const DOCS_DRAWER_ID = "deco-docs-drawer";
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
const isTopicActive = (openTopicIndex: number, index: number): boolean => {
  const isOpen = openTopicIndex === index;
  return isOpen;
};
const isSubTopicActive = (
  currentSlug: string | null,
  subTopic: SubTopic,
): boolean => {
  const subTopicSlug = subTopic.SidebarLink?.toLowerCase();
  const isActiveSubTopic = currentSlug === subTopicSlug;
  return isActiveSubTopic;
};
function SidebarItem(props: JSX.IntrinsicElements["a"]) {
  return (
    <a
      {...props}
      class={`flex hover:bg-white hover:bg-opacity-5 h-fit min-h-10 rounded-lg
       items-center p-2 cursor-pointer gap-2 justify-between text-sm leading-tight 
       cursor-pointer aria-selected:text-decorative-one-900 text-[#E7E5E4] ${props.class}`}
    />
  );
}
function AsideLinks({ topics, subtitle, linkSubtitle }: {
  topics: Topic[];
  subtitle: string;
  linkSubtitle: string;
}) {
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);
  const [openTopicIndex, setOpenTopicIndex] = useState<number | null>(null);
  const [openSubTopicIndex, setOpenSubTopicIndex] = useState<number | null>(
    null,
  );
  const toggleTopicMenu = (index: number) => {
    if (openTopicIndex === index) {
      setOpenTopicIndex(null);
    } else {
      setOpenTopicIndex(index);
    }
  };
  useEffect(() => {
    const currentPath = window.location.pathname;
    topics.forEach((topic, index) => {
      const isActive = topic.SubTopics.some((subTopic, subTopicIndex) => {
        if (currentPath.endsWith(subTopic.SidebarLink?.toLowerCase())) {
          const hasNestedTopics = subTopic.NestedTopics
            ? subTopic.NestedTopics?.length > 0
            : false;
          if (hasNestedTopics) {
            setOpenSubTopicIndex(subTopicIndex);
          }
          setCurrentSlug(subTopic.SidebarLink?.toLowerCase());
          return true;
        }
        const nestedTopicOpened = subTopic.NestedTopics?.some((childTopic) => {
          if (currentPath.endsWith(childTopic.SidebarLink?.toLowerCase())) {
            setCurrentSlug(childTopic.SidebarLink?.toLowerCase());
            return true;
          }
          return false;
        });
        if (nestedTopicOpened) {
          setOpenSubTopicIndex(subTopicIndex);
          return true;
        }
        return false;
      });
      if (isActive) {
        setOpenTopicIndex(index);
      }
    });
  }, []);
  const subtitleSlug = linkSubtitle?.toLowerCase();
  const firstTopic = topics[0];
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
    <>
      <SearchButton />
      <ul
        class={`flex flex-col gap-2 pb-[140px] max-h-full overflow-x-auto lg:max-h-[80vh] docs-scrollbar`}
      >
        {subtitle.length > 0 && (
          <li class="my-[8px] ml-[25px]">
            <a
              href={linkSubtitle}
              class={`${
                currentSlug === subtitleSlug
                  ? "text-[#4ADE80]"
                  : "text-[#E7E5E4]"
              } text-[15px] font-semibold leading-tight`}
            >
              {subtitle}
            </a>
          </li>
        )}
        {topics.map((topic, index) => {
          const isActive = isTopicActive(openTopicIndex ?? 0, index);
          return (
            <ul key={index} class="flex flex-col gap-2">
              <li>
                <SidebarItem
                  href={topic?.LinkTopic}
                  aria-selected={isActive}
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleTopicMenu(index);
                  }}
                >
                  <span>
                    {topic.label}
                  </span>
                  {topic.SubTopics && topic.SubTopics.length > 0 && (
                    <div class="flex items-center justify-end gap-[10px]">
                      <span
                        class={`w-[20px] h-[20px] p-3 bg-[#FFFFFF1A] rounded-full font-inter text-[14px] font-medium leading-normal flex items-center justify-center ${
                          isActive ? "text-[#4ADE80]" : "text-[#FFFFFF80]"
                        }`}
                      >
                        {topic.SubTopics.length}
                      </span>
                      <Icon
                        class={`${openTopicIndex === index ? "rotate-90" : ""}`}
                        id="ChevronRight"
                        width={16}
                        height={16}
                        strokeWidth={"3"}
                      />
                    </div>
                  )}
                </SidebarItem>
              </li>
              {topic.SubTopics &&
                topic.SubTopics.length > 0 && (
                <ol
                  class={`font-semibold flex ml-2 pl-2 border-l border-[#303D3D] flex-col ${
                    isActive ? "" : "hidden"
                  }`}
                >
                  {topic.SubTopics.map((subTopic, subTopicIndex) => {
                    const isActiveSubTopic = isSubTopicActive(
                      currentSlug,
                      subTopic,
                    );
                    return (
                      <li key={subTopicIndex}>
                        <SidebarItem
                          href={subTopic.SidebarLink}
                          aria-selected={isActiveSubTopic}
                          style={getFontWeightStyle(
                            fontWeightSubtopic.fontWeight || "normal",
                          )}
                        >
                          <span>{subTopic.label}</span>
                          {subTopic.NestedTopics &&
                            subTopic.NestedTopics.length > 0 && (
                            <div class="flex items-center justify-end gap-[10px]">
                              <span
                                class={`w-[20px] h-[20px] p-3 bg-[#FFFFFF1A] rounded-full font-inter text-[14px] font-medium leading-normal flex items-center justify-center ${
                                  isActiveSubTopic
                                    ? "text-[#4ADE80]"
                                    : "text-[#FFFFFF80]"
                                }`}
                              >
                                {subTopic.NestedTopics.length}
                              </span>
                              <Icon
                                class={openSubTopicIndex === subTopicIndex
                                  ? "rotate-90"
                                  : ""}
                                id="ChevronRight"
                                width={16}
                                height={16}
                                strokeWidth={"3"}
                                onClick={(event) => {
                                  event.stopPropagation();
                                  event.preventDefault();
                                  if (openSubTopicIndex === subTopicIndex) {
                                    setOpenSubTopicIndex(null);
                                  } else {
                                    setOpenSubTopicIndex(subTopicIndex);
                                  }
                                }}
                              />
                            </div>
                          )}
                        </SidebarItem>
                        {subTopic.NestedTopics &&
                          subTopic.NestedTopics.length > 0 &&
                          openSubTopicIndex === subTopicIndex && (
                          <ol class="flex flex-col ml-2 pl-2 border-l border-[#303D3D]">
                            {subTopic.NestedTopics.map(
                              (ChildTopic, subSubIndex) => {
                                const isNestedTopicActive = isSubTopicActive(
                                  currentSlug,
                                  ChildTopic,
                                );
                                return (
                                  <li>
                                    <SidebarItem
                                      aria-selected={isNestedTopicActive}
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
                                    </SidebarItem>
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
    </>
  );
}
export function loader(props: SidebarContent, req: Request) {
  const url = new URL(req.url);
  const [base, lang, ...pathSegments] = url.pathname.split("/").filter(Boolean);
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const path = pathSegments.slice(0, index + 1).join("/");
    return {
      name: segment.replace("-", " "),
      href: new URL(`/${base}/${lang}/${path}`, req.url).href,
    };
  });
  return {
    ...props,
    breadcrumbItems,
    lang,
  };
}
export default function Sidebar(
  { Subtitle, LinkSubtitle, Topics, breadcrumbItems }: SectionProps<
    typeof loader
  >,
) {
  return (
    <div
      class={`flex flex-col w-full mx-auto max-w-[1440px] lg:top-[140px] top-[103px] lg:mb-[40px] lg:sticky`}
    >
      {/* Mobile with drawer */}
      <div class="flex mt-28 items-start gap-2 lg:hidden text-white px-4">
        <label for={DOCS_DRAWER_ID} class="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </label>
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <Drawer
        id={DOCS_DRAWER_ID}
        class="drawer-start"
        aside={
          <Drawer.Aside title="Docs" drawer={DOCS_DRAWER_ID}>
            <div class="w-full px-6">
              <AsideLinks
                topics={Topics ?? []}
                subtitle={Subtitle ?? ""}
                linkSubtitle={LinkSubtitle ?? ""}
              />
            </div>
          </Drawer.Aside>
        }
      />

      {/* Desktop Aside */}
      <aside class={`w-[300px] h-full hidden lg:flex flex-col gap-10`}>
        <AsideLinks
          topics={Topics ?? []}
          subtitle={Subtitle ?? ""}
          linkSubtitle={LinkSubtitle ?? ""}
        />
      </aside>
    </div>
  );
}
