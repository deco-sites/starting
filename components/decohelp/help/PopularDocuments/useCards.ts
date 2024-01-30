import { useEffect, useState } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Card {
  href: string;
  image: LiveImage;
  label: string;
}

export function useCards(
  initialCards: Array<Card> | undefined,
  maxCardsMobile: number,
) {
  const [showMore, setShowMore] = useState(false);
  const [visibleCardsCount, setVisibleCardsCount] = useState(maxCardsMobile);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(globalThis.windowinnerWidth <= 1024);
    };

    checkIsMobile();

    const handleResize = () => {
      checkIsMobile();
    };

    addEventListener("resize", handleResize);

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleCards = showMore
    ? initialCards
    : isMobile
    ? initialCards?.slice(0, visibleCardsCount)
    : initialCards;

  const incrementVisibleCards = () => {
    if (
      initialCards && visibleCardsCount + maxCardsMobile >= initialCards.length
    ) {
      setShowMore(true);
    }
    setVisibleCardsCount((prevCount) => prevCount + maxCardsMobile);
  };

  return {
    showMore,
    isMobile,
    visibleCards,
    incrementVisibleCards,
  };
}
