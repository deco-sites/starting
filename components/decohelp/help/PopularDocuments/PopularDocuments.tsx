import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import ShowMoreButton from "site/components/decohelp/help/ui/Button/ShowMore.tsx";
import { useCards } from "site/components/decohelp/help/PopularDocuments/useCards.ts";

export interface Card {
  href: string;
  image: LiveImage;
  label: string;
}

export interface Props {
  title: string;
  maxCardsMobile: number;
  cards?: Array<Card>;
  buttonLabel: string;
  lazyload?: false | true;
}

export default function PopularDocuments({
  lazyload,
  title,
  maxCardsMobile,
  cards,
  buttonLabel,
}: Props) {
  const { showMore, isMobile, visibleCards, incrementVisibleCards } = useCards(
    cards,
    maxCardsMobile,
  );

  return (
    <div class="max-w-[1200px] lg:mx-auto mx-6 lg:mt-[72px] mt-[80px]">
      <h2 class="text-zinc-900 text-[28px] font-semibold leading-loose lg:mb-[32px] mb-[24px]">
        {title}
      </h2>
      {!!visibleCards?.length && (
        <ul class="grid lg:grid-cols-3 grid-cols-1 grid-flow-row auto-rows-fr gap-x-10 gap-y-4">
          {visibleCards.map(({ href, image, label }, index) => (
            <li key={index}>
              <a
                target="_blank"
                href={href}
                aria-label={label}
                class="w-full h-14 px-6 py-4 rounded-[48px] border border-zinc-300 flex justify-between items-center gap-2 cursor-pointer"
              >
                <h3 class="text-neutral-900 text-[15px] font-semibold leading-tight">
                  {label}
                </h3>
                <figure>
                  <Image
                    fetchPriority={lazyload ? "low" : "high"}
                    preload={false}
                    loading={lazyload ? "lazy" : "eager"}
                    src={image}
                    width={24}
                    height={24}
                    class="w-6 h-6"
                    alt={label}
                  />
                </figure>
              </a>
            </li>
          ))}
          {isMobile && !showMore && cards && cards.length > maxCardsMobile && (
            <ShowMoreButton
              onClick={incrementVisibleCards}
              label={buttonLabel}
              class="mx-auto"
            />
          )}
        </ul>
      )}
    </div>
  );
}
