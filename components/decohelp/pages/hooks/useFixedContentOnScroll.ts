import { useEffect, useState } from "preact/hooks";

export function useFixedContentOnScroll() {
  const [isContentFixed, setIsContentFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      if (scrollPercentage <= 60) {
        setIsContentFixed(false);
      } else {
        setIsContentFixed(true);
      }
    };

    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isContentFixed;
}
