import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import MenuButton from "deco-sites/starting/components/decohelp/pages/ui/Sidebar/MenuButton.tsx";
import Sidebar from "deco-sites/starting/components/decohelp/pages/ui/Sidebar/Sidebar.tsx";
import YoutubeEmbed from "deco-sites/starting/components/decohelp/pages/ui/Youtube/YoutubeEmbed.tsx";
import OnThisPageItem from "deco-sites/starting/components/decohelp/pages/ui/OnThisPage/OnThisPage.tsx";
import BreadCrumb from "deco-sites/starting/components/decohelp/pages/ui/BreadCrumb/Breadcrumb.tsx";
import WasThisPageHelpfulContent, {
  WasThisPageHelpfulProps,
} from "deco-sites/starting/components/decohelp/pages/ui/WasThisPageHelpful/WasThisPageHelpful.tsx";
import ForwardBackButtons, {
  ForwardBackContent,
} from "deco-sites/starting/components/decohelp/pages/ui/ForwardBackButtons/ForwardBackButtons.tsx";
import useMenuState from "deco-sites/starting/components/decohelp/pages/hooks/useMenuState.ts";
import { useFixedContentOnScroll } from "deco-sites/starting/components/decohelp/pages/hooks/useFixedContentOnScroll.ts";
import {
  ContentType,
  Props,
} from "deco-sites/starting/components/decohelp/pages/interfaces.ts";

function renderContentItem(item: ContentType) {
  return "Text" in item
    ? (
      <article aria-label={item.label}>
        <HTMLRenderer html={item.Text} />
      </article>
    )
    : "Code" in item
    ? (
      <article
        aria-label={item.label}
        class="bg-[#f6f8fa] p-4 rounded-md leading-normal overflow-auto my-2"
      >
        <HTMLRenderer html={item.Code} />
      </article>
    )
    : "Image" in item
    ? (
      <figure class="my-4">
        <Image
          src={item.Image}
          class="w-full h-full"
          alt={item.label}
          width={item.width}
          height={item.height}
        />
      </figure>
    )
    : "embedId" in item
    ? (
      <>
        <YoutubeEmbed embedId={item.embedId} label={item.label} />
      </>
    )
    : null;
}

export default function Page({
  Title,
  Version,
  homeLabel,
  homePath,
  PageContent,
  SidebarContent: {
    iconMenuClose,
    iconMenuOpen,
    AltIconMenu,
    SidebarTitle,
    SidebarIcon,
    AltIcon,
    Subtitle,
    LinkSubtitle,
    Topics,
  },
  OnThisPage,
  WasThisPageHelpful,
  previous,
  next,
}: Props & WasThisPageHelpfulProps & ForwardBackContent) {
  const { isMenuOpen, setIsMenuOpen, isMobile } = useMenuState();
  const isContentFixed = useFixedContentOnScroll();

  const menuCloseProps = {
    Image: iconMenuClose,
    AltIconMenu: AltIconMenu,
  };

  const menuOpenProps = {
    Image: iconMenuOpen,
    AltIconMenu: AltIconMenu,
  };

  return (
    <div class="mx-auto pb-[48px]">
      <div
        class={`grid xl:grid-page-desktop lg:grid-page-tablet grid-page-mobile w-full mx-auto max-w-[1440px] lg:px-[64px] lg:gap-[40px] gap-[24px]`}
      >
        <div class={`flex flex-col border-r-2 border-[#D4DBD7] lg:mt-[140px]`}>
          <div class="flex gap-2">
            <MenuButton
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              isMobile={isMobile}
              iconMenuClose={menuCloseProps}
              iconMenuOpen={menuOpenProps}
            />
            <BreadCrumb homePath={homePath} homeLabel={homeLabel} />
          </div>
          <Sidebar
            SidebarTitle={SidebarTitle}
            SidebarIcon={SidebarIcon}
            AltIcon={AltIcon}
            Subtitle={Subtitle}
            LinkSubtitle={LinkSubtitle}
            Topics={Topics}
            class={`${isContentFixed ? "lg:relative fixed" : "fixed"} ${
              isMenuOpen && isMobile ? "block bg-white" : "hidden"
            }`}
          />
        </div>
        <div class="w-full lg:px-0 px-6 relative">
          <div class="flex flex-col gap-[8px] pt-[140px]">
            <h1 class="text-neutral-900 text-[40px] font-semibold leading-[48px]">
              {Title}
            </h1>
            {Version && Version.length > 0 && (
              <span class="px-2 py-1 bg-white bg-opacity-0 rounded border border-zinc-300 text-neutral-900 text-[13px] font-semibold leading-tight max-w-[96px] my-2.5 whitespace-nowrap">
                {Version}
              </span>
            )}
            {PageContent?.length > 0
              ? (
                PageContent.map(({ Type }) => (
                  <div class="flex flex-col gap-[8px] w-full mx-auto mb-4">
                    {Type.map((item) => (
                      <>
                        {renderContentItem(item)}
                        {item?.Underline && (
                          <span class="flex border-b bg-zinc-300" />
                        )}
                      </>
                    ))}
                  </div>
                ))
              )
              : (
                <span class="flex items-center justify-center border-dashed border-2 border-[#0A1F1F] p-20 mx-auto mb-[8px] mt-10">
                  No content in Page.
                </span>
              )}
            <WasThisPageHelpfulContent
              WasThisPageHelpful={WasThisPageHelpful}
            />
            <ForwardBackButtons
              previous={previous}
              next={next}
            />
          </div>
        </div>
        <div class="max-w-[280px] w-full xl:block hidden relative h-screen pt-[140px]">
          <ul
            class={`list-disc flex flex-col gap-2 
            ${isContentFixed ? "relative" : "fixed"} `}
          >
            {OnThisPage[0]?.label && (
              <h3 class="text-black text-[15px] font-semibold leading-tight mb-2">
                {OnThisPage[0].label}
              </h3>
            )}
            {OnThisPage.length > 0 && (
              <>
                {OnThisPage.map(({ content }) => (
                  <>
                    {content?.map(({ label, active }) => (
                      <OnThisPageItem label={label} active={active} />
                    ))}
                  </>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
