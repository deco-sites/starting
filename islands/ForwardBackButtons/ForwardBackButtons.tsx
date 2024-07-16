import { useEffect, useState } from "preact/hooks";

interface PageButton {
  title: string;
  href: string;
  enabled: boolean;
}

export default function ForwardBackButtons() {
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

  useEffect(() => {
    const encodedURL = window.location.href.split(
      window.location.search || window.location.hash || /[?#]/,
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
    }
  }, []);

  return (
    <section class="flex flex-col gap-4">
      <div class="w-full text-left text-[#F9FAFB] font-medium text-lg leading-[130%] tracking-[-0.3px]">
        Continue reading
      </div>
      <div class="flex justify-between gap-8">
        {previous.enabled
          ? (
            <a
              href={previous.href}
              class={`text-left flex justify-evenly gap-2 items-center p-4 w-1/2`}
            >
              {
                /* <span class={upper}>
              {`←  ${isEnglishState ? "Previous" : "Anterior"}`}
            </span> */
              }
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.9999 8.00046C13.9999 8.13307 13.9472 8.26025 13.8535 8.35401C13.7597 8.44778 13.6325 8.50046 13.4999 8.50046H3.70678L7.35366 12.1467C7.40011 12.1932 7.43696 12.2483 7.4621 12.309C7.48724 12.3697 7.50018 12.4348 7.50018 12.5005C7.50018 12.5662 7.48724 12.6312 7.4621 12.6919C7.43696 12.7526 7.40011 12.8078 7.35366 12.8542C7.3072 12.9007 7.25205 12.9375 7.19135 12.9627C7.13066 12.9878 7.0656 13.0007 6.99991 13.0007C6.93421 13.0007 6.86915 12.9878 6.80846 12.9627C6.74776 12.9375 6.69261 12.9007 6.64615 12.8542L2.14615 8.35421C2.09967 8.30778 2.06279 8.25263 2.03763 8.19193C2.01246 8.13123 1.99951 8.06617 1.99951 8.00046C1.99951 7.93475 2.01246 7.86969 2.03763 7.80899C2.06279 7.74829 2.09967 7.69315 2.14615 7.64671L6.64615 3.14671C6.73997 3.05289 6.86722 3.00018 6.99991 3.00018C7.13259 3.00018 7.25984 3.05289 7.35366 3.14671C7.44748 3.24053 7.50018 3.36778 7.50018 3.50046C7.50018 3.63314 7.44748 3.76039 7.35366 3.85421L3.70678 7.50046H13.4999C13.6325 7.50046 13.7597 7.55314 13.8535 7.64691C13.9472 7.74068 13.9999 7.86785 13.9999 8.00046Z"
                  fill="white"
                />
              </svg>
              <span class={lower}>
                <span class="text-[#FFFFFF] text-base font-normal leading-[1.375rem]">
                  {previous.title}
                </span>
              </span>
            </a>
          )
          : <span />}
        {next.enabled
          ? (
            <a
              href={next.href}
              class={`text-right flex justify-evenly gap-2 items-center p-4 w-1/2 hover:bg-[#FFFFFF0D] hover:rounded`}
            >
              {
                /* <span class={upper}>
              {`${isEnglishState ? "Next" : "Próximo"}  →`}
            </span> */
              }
              <span class={lower}>
                <span class="text-[#FFFFFF] text-base font-normal leading-[1.375rem]">
                  {next.title}
                </span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.8538 8.35421L9.35375 12.8542C9.25993 12.948 9.13268 13.0007 9 13.0007C8.86732 13.0007 8.74007 12.948 8.64625 12.8542C8.55243 12.7604 8.49972 12.6331 8.49972 12.5005C8.49972 12.3678 8.55243 12.2405 8.64625 12.1467L12.2931 8.50046H2.5C2.36739 8.50046 2.24021 8.44778 2.14645 8.35401C2.05268 8.26025 2 8.13307 2 8.00046C2 7.86785 2.05268 7.74068 2.14645 7.64691C2.24021 7.55314 2.36739 7.50046 2.5 7.50046H12.2931L8.64625 3.85421C8.55243 3.76039 8.49972 3.63314 8.49972 3.50046C8.49972 3.36778 8.55243 3.24053 8.64625 3.14671C8.74007 3.05289 8.86732 3.00018 9 3.00018C9.13268 3.00018 9.25993 3.05289 9.35375 3.14671L13.8538 7.64671C13.9002 7.69315 13.9371 7.74829 13.9623 7.80899C13.9874 7.86969 14.0004 7.93475 14.0004 8.00046C14.0004 8.06617 13.9874 8.13123 13.9623 8.19193C13.9371 8.25263 13.9002 8.30778 13.8538 8.35421Z"
                  fill="white"
                />
              </svg>
            </a>
          )
          : <span />}
      </div>
    </section>
  );
}
