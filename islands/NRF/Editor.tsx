import { BlankEditor } from "deco-sites/starting/components/nrf/editor/Blank.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

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
    <div class="w-full flex items-center justify-between">
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
  return (
    <div class="bg-black text-white py-32">
      <div class="flex flex-col items-center">
        <div class="flex flex-col">
          <div class="space-y-10">
            <div class="space-y-2">
              <p class="text-5xl font-semibold">How it works</p>
              <p>Short Text of how it works.</p>
            </div>
            <BlankEditor />
          </div>
        </div>
        <div class="container mr-0 w-full flex flex-col gap-32">
          {features.map((card, i) => <EditorCard {...card} index={i} />)}
        </div>
      </div>
    </div>
  );
}
