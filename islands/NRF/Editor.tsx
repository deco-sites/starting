import { BlankEditor } from "deco-sites/starting/components/nrf/editor/Blank.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import { useEffect } from "preact/hooks";
import { animate, inView, stagger } from "https://esm.sh/motion@10.16.4";

export interface EditorFeature {
  title: string;
  subtitle: string;
  image?: ImageWidget;
}

export interface Props {
  features: EditorFeature[];
}

const sections: string[] = [
  "How it Works",
  "Component Library",
  "No-code editing",
  "Natural Language",
  "Themes",
  "Code editing",
  "Integrate & Extend",
  "Multivariate Testing",
];

function EditorCard({
  title,
  subtitle,
  image,
  index,
}: {
  title: string;
  subtitle: string;
  image?: string;
  index: number;
}) {
  return (
    <div class="feature w-full flex items-center justify-between snap-center">
      <div class="w-1/2 flex gap-20 h-screen items-center ">
        <ul className="text-[#52525B] whitespace-nowrap ">
          {sections.map((section, idx) => (
            <li
              className={idx === 0
                ? "text-[#02F67C]"
                : index === idx + 1
                ? "text-white"
                : ""}
              key={idx}
            >
              {section}
            </li>
          ))}
        </ul>
        <div class="flex flex-col gap-6">
          <h2 class="text-5xl font-semibold">{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
      <div class="flex-1 -mr-[10vw]">
        <img src={image} class="ml-auto" />
      </div>
    </div>
  );
}

export default function Editor({ features }: Props) {
  useEffect(() => {
    inView(".editor", ({ target }) => {
      animate(
        target.querySelectorAll(".item"),
        { opacity: 1, transform: "translateY(0px)" },
        { delay: stagger(0.1), duration: 1, easing: "ease-out" }
      );
    }, {
      margin: "0px 0px -500px 0px",
    });    
  }, []);

  return (
    <div class="editor bg-black text-white py-32">
      <div class="flex flex-col items-center">
        <div class="flex flex-col">
          <div class="space-y-10">
            <div class="space-y-2 item">
              <p class="text-5xl font-semibold">How it works</p>
              <p>Short Text of how it works.</p>
            </div>
            <BlankEditor class="item" />
          </div>
        </div>
        <div class="max-h-screen overflow-scroll snap-y snap-proximity container mr-0 w-full flex flex-col gap-32">
          {features.map((card, i) => <EditorCard {...card} index={i} />)}
        </div>
      </div>
    </div>
  );
}
