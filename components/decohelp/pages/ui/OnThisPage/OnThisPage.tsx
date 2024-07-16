import { useEffect, useState } from "preact/hooks";

interface OnThisPage {
  label?: string;
}

export default function OnThisPage(props: OnThisPage & { url: string }) {
  const { label = "On this page" } = props;
  const baseClass = "text-[15px] font-normal leading-tight";
  const activeClass = label && label.length > 0
    ? "text-decorative-one-900"
    : "text-neutral-900";
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  let headings: Element[] = [];

  function handleScroll() {
    headings.forEach((element, index) => {
      if (element) {
        const rect = element.getBoundingClientRect();

        if (rect.top >= 0 && rect.bottom <= globalThis.window.innerHeight) {
          const listItem = document.querySelector(`#item-${index}`);
          if (listItem) {
            listItem.classList.add(activeClass);
          }
        } else {
          const listItem = document.querySelector(`#item-${index}`);
          if (listItem) {
            listItem.classList.remove(activeClass);
          }
        }
      }
    });
  }

  useEffect(() => {
    function createLinksInArticles() {
      const markdownBody = document.querySelector(".markdown-body");
      if (!markdownBody) {
        throw new Error("Markdown body not present");
      }
      headings = Array.from(
        markdownBody.querySelectorAll("h1, h2, h3, h4, h5, h6"),
      );

      headings.forEach((element, index) => {
        if (element) {
          const contentLabel = element.textContent;
          if (contentLabel) {
            const id = contentLabel.toLowerCase().replace(/\s/g, "-");
            element.id = id;

            const link = document.createElement("a");
            link.href = `#${id}`;
            link.textContent = contentLabel;
            link.className = `${baseClass}`;

            link.addEventListener("click", (e) => {
              e.preventDefault();

              const menuItems = document.querySelectorAll(".menu-item");
              menuItems.forEach((item) => {
                item.classList.remove(activeClass);
              });

              setActiveIndex(index);

              const yOffset = -200;
              const targetElement = document.getElementById(id);
              if (targetElement) {
                const y = targetElement.getBoundingClientRect().top +
                  globalThis.window.scrollY + yOffset;
                globalThis.window.scrollTo({ top: y, behavior: "smooth" });
              }

              const listItem = document.querySelector(`#item-${index}`);
              if (listItem) {
                listItem.classList.add(activeClass);
              }
            });

            const listItem = document.createElement("li");
            listItem.id = `item-${index}`;
            listItem.className = `${baseClass} menu-item ${
              activeIndex === index ? activeClass : ""
            }`;
            listItem.appendChild(link);

            const contentList = document.getElementById("content-list");
            if (contentList) {
              contentList.appendChild(listItem);
            }
          }
        }
      });

      addEventListener("scroll", handleScroll);
      handleScroll();
    }

    createLinksInArticles();
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, [label, activeClass]);

  const isInEN = props.url.includes("/en/");

  return (
    <div
      class={`lg:w-[300px] w-full xl:block hidden lg:top-[140px] lg:mb-[140px] lg:sticky`}
    >
      <ul id="content-list" class={`flex flex-col gap-2 text-white`}>
        {label && (
          <h3 class="text-white text-[24px] font-semibold leading-tight mb-2">
            {label}
          </h3>
        )}
      </ul>
      <div class="flex backdrop-blur-xl h-[50px] rounded-full bg-white/5 w-[150px] mt-6">
        <button
          class={`w-1/2 font-semibold rounded-full ${
            isInEN ? "bg-[#02F67C]" : "text-white"
          }`}
          onClick={() => {
            globalThis.location.href = globalThis.location.href.replace(
              "/pt/",
              "/en/",
            );
          }}
        >
          EN
        </button>
        <button
          class={`w-1/2 font-semibold rounded-full ${
            isInEN ? "text-white" : "bg-[#02F67C]"
          }`}
          onClick={() => {
            globalThis.location.href = globalThis.location.href.replace(
              "/en/",
              "/pt/",
            );
          }}
        >
          PT
        </button>
      </div>
    </div>
  );
}

export const loader = (props: OnThisPage, req: Request) => {
  return {
    ...props,
    url: req.url,
  };
};
