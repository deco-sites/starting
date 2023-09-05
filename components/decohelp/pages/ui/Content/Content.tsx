import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import YoutubeEmbed from "deco-sites/starting/components/decohelp/pages/ui/Youtube/YoutubeEmbed.tsx";
import WasThisPageHelpfulContent, {
  WasThisPageHelpfulProps,
} from "deco-sites/starting/components/decohelp/pages/ui/WasThisPageHelpful/WasThisPageHelpful.tsx";
import ForwardBackButtons, {
  ForwardBackContent,
} from "deco-sites/starting/components/decohelp/pages/ui/ForwardBackButtons/ForwardBackButtons.tsx";
import BreadCrumb from "deco-sites/starting/components/decohelp/pages/ui/BreadCrumb/Breadcrumb.tsx";
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
        <YoutubeEmbed
          embedId={item.embedId}
          label={item.label}
          width={item?.width}
          height={item?.height}
          maxHeight={item?.maxHeight}
        />
      </>
    )
    : null;
}

export default function Page({
  homeLabel,
  homePath,
  Title,
  Version,
  PageContent,
  WasThisPageHelpful,
  previous,
  next,
}: Props & WasThisPageHelpfulProps & ForwardBackContent) {
  return (
    <div class="mx-auto pb-[48px] lg:top-[100px] relative lg:mb-[140px]">
      <BreadCrumb homePath={homePath} homeLabel={homeLabel} />
      <div
        class={`w-full`}
      >
        <div class="w-full xl:px-0 lg:pl-0 lg:pr-[64px] px-6 relative z-0">
          <div class="flex flex-col gap-[8px] lg:pt-0 pt-[118px]">
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
      </div>
    </div>
  );
}
