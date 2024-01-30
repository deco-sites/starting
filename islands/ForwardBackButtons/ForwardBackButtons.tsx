import { useEffect, useState } from "preact/hooks";

interface PageButton {
  title: string;
  href: string;
  enabled: boolean;
}

export default function ForwardBackButtons() {
  const upper = "text-neutral-900 text-sm font-bold leading-tight";
  const lower = "text-gray-900 font-medium";

  const [previous, setPrevious] = useState<PageButton>({
    title: "",
    href: "",
    enabled: false,
  });
  const [next, setNext] = useState<PageButton>({
    title: "",
    href: "",
    enabled: false,
  });

  const isEnglish = globalThis.windownavigator.language.startsWith("en");
  const [isEnglishState, setIsEnglishState] = useState(isEnglish);

  useEffect(() => {
    const encodedURL = globalThis.windowlocation.href.split(
      globalThis.windowlocation.search || globalThis.windowlocation.hash ||
        /[?#]/,
    )[0];
    const decodedURL = decodeURIComponent(encodedURL);

    const links = document.querySelectorAll("aside a");
    const linkArray = Array.from(links);

    const currentIndex = linkArray.map((x, index) => ({
      value: x.getAttribute("href") || "",
      index,
    })).toSorted((x, y) => y.value.length - x.value.length).find((link) =>
      decodedURL.includes(link.value)
    )?.index;

    if (currentIndex !== undefined && currentIndex !== -1) {
      if (currentIndex > 0) {
        const previousLink = linkArray[currentIndex - 1];
        setPrevious({
          title: previousLink.textContent || "",
          href: previousLink.getAttribute("href") || "",
          enabled: !!previousLink.getAttribute("href"),
        });
      }

      if (currentIndex < linkArray.length - 1) {
        const nextLink = linkArray[currentIndex + 1];
        setNext({
          title: nextLink.textContent || "",
          href: nextLink.getAttribute("href") || "",
          enabled: !!nextLink.getAttribute("href"),
        });
      }

      const pathSegments = decodedURL.split("/");
      const english = pathSegments.includes("en");
      setIsEnglishState(english);
    }
  }, []);

  return (
    <div class="mt-6 flex justify-between">
      {previous.enabled
        ? (
          <a href={previous.href} class={`text-left flex flex-col gap-2`}>
            <span class={upper}>
              {`←  ${isEnglishState ? "Previous" : "Anterior"}`}
            </span>
            <span class={lower}>
              <span class="text-[#2E6ED9] text-xl font-semibold leading-normal">
                {previous.title}
              </span>
            </span>
          </a>
        )
        : <span />}
      {next.enabled
        ? (
          <a href={next.href} class={`text-right flex flex-col gap-2`}>
            <span class={upper}>
              {`${isEnglishState ? "Next" : "Próximo"}  →`}
            </span>
            <span class={lower}>
              <span class="text-[#2E6ED9] text-xl font-semibold leading-normal">
                {next.title}
              </span>
            </span>
          </a>
        )
        : <span />}
    </div>
  );
}
