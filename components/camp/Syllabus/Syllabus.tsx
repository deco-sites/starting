import type { Props as Accordion } from "./AccordionSyllabus.tsx";
import AccordionSyllabus from "./AccordionSyllabus.tsx";

export interface Props {
  title: string;
  accordions: Accordion[];
}

const BASE_PROPS = {
  accordions: [
    {
      listContent: [
        {
          labelMobule: "Modules",
          title: "Modern Web Tech",
          content: "<p>Dive into server-side rendering and edge computing.</p>",
          dataPublish: "Watch now",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Design & Development Fusion",
          content:
            "<p>Experience the synergy of design and code with 'Figma meets VS Code'.</p>",
          dataPublish: "Launch Feb 26",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Essential Tools & Languages",
          content: "<p>Master JSX, Tailwind CSS, Preact, and TypeScript.</p>",
          dataPublish: "Launch Mar 4",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Dynamic Web Features",
          content:
            "<p>Learn to create interactive web components with Htmx.</p>",
          dataPublish: "Launch  Mar 11",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Advanced Frameworks",
          content: "<p>Explore the capabilities of Deno/Kubernetes.</p>",
          dataPublish: "Launch  Mar 18",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Efficient Web Updates",
          content: "<p>Understand SWR and ISR for up-to-date web content.</p>",
          dataPublish: "Launch  Mar 25",
          time: 1,
        },
      ],
      title: "deco’s Web Builder and Framework",
      "children": [
        {
          title: "deco’s Web Builder and Framework",
          "subtitle": "Modern Web Tech",
        },
      ],
    },
    {
      listContent: [
        {
          labelMobule: "Modules",
          title: "Modern Web Tech",
          content: "<p>Dive into server-side rendering and edge computing.</p>",
          dataPublish: "Watch now",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Design & Development Fusion",
          content:
            "<p>Experience the synergy of design and code with 'Figma meets VS Code'.</p>",
          dataPublish: "Launch Feb 26",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Essential Tools & Languages",
          content: "<p>Master JSX, Tailwind CSS, Preact, and TypeScript.</p>",
          dataPublish: "Launch Mar 4",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Dynamic Web Features",
          content:
            "<p>Learn to create interactive web components with Htmx.</p>",
          dataPublish: "Launch  Mar 11",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Advanced Frameworks",
          content: "<p>Explore the capabilities of Deno/Kubernetes.</p>",
          dataPublish: "Launch  Mar 18",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Efficient Web Updates",
          content: "<p>Understand SWR and ISR for up-to-date web content.</p>",
          dataPublish: "Launch  Mar 25",
          time: 1,
        },
      ],
      title: "High-Performance Digital Experience",
      "children": [
        {
          title: "deco’s Web Builder and Framework",
          "subtitle": "Modern Web Tech",
        },
      ],
    },
    {
      listContent: [
        {
          labelMobule: "Modules",
          title: "Modern Web Tech",
          content: "<p>Dive into server-side rendering and edge computing.</p>",
          dataPublish: "Watch now",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Design & Development Fusion",
          content:
            "<p>Experience the synergy of design and code with 'Figma meets VS Code'.</p>",
          dataPublish: "Launch Feb 26",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Essential Tools & Languages",
          content: "<p>Master JSX, Tailwind CSS, Preact, and TypeScript.</p>",
          dataPublish: "Launch Mar 4",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Dynamic Web Features",
          content:
            "<p>Learn to create interactive web components with Htmx.</p>",
          dataPublish: "Launch  Mar 11",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Advanced Frameworks",
          content: "<p>Explore the capabilities of Deno/Kubernetes.</p>",
          dataPublish: "Launch  Mar 18",
          time: 1,
        },
        {
          labelMobule: "Modules",
          title: "Efficient Web Updates",
          content: "<p>Understand SWR and ISR for up-to-date web content.</p>",
          dataPublish: "Launch  Mar 25",
          time: 1,
        },
      ],
      title: "Real-life Flawless Implementation",
      children: [
        {
          title: "deco’s Web Builder and Framework",
          subtitle: "Modern Web Tech",
        },
      ],
    },
  ],
  title: "What you will learn:",
};

export default function Syllabus({ props }: { props: Props }) {
  const { title, accordions } = { ...BASE_PROPS, ...props };

  return (
    <div class="w-full h-full bg-black">
      <div class="flex w-full flex-col justify-center py-16 px-6 gap-10 container">
        <h2 class="text-white text-3xl md:text-4xl xl:text-7xl text-center">
          {title}
        </h2>
        <div class="flex flex-col w-full rounded-xl border-neutral border border-[rgba(255,255,255,0.15)] bg-white bg-opacity-5">
          {accordions.map((accordion) => (
            <AccordionSyllabus
              props={accordion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
