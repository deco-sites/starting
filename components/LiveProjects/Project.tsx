import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "deco-sites/std/components/Image.tsx";

/**
 * @title {{{name}}}
 */
export interface IProject {
  name?: string;
  icon?: ImageWidget;
  banner?: ImageWidget;
  url: string;
  performance: number;
  category?: string;
}

function ProgressBar({ progress }: { progress: number }) {
  const radius = 45;
  const dasharray = 2 * Math.PI * radius;
  const dashoffset = dasharray * ((100 - progress) / 100);

  return (
    <div class="absolute scale-[40%] group-hover:scale-[60%] right-[-30px] top-[-30px] transition duration-500">
      <div class="flex items-center justify-center w-[100px] h-[100px] relative bg-black rounded-full">
        <p class="text-white text-3xl font-bold">
          {progress}
        </p>
        <svg class="absolute top-0 left-0 w-[100px] h-[100px] overflow-visible fill-black">
          <defs>
            <radialGradient id="P0-20497123-gradientStroke-metric">
              <stop offset="0%" stop-color="#113032"></stop>
              <stop offset="100%" stop-color="#02F67C"></stop>
            </radialGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="url(#P0-20497123-gradientStroke-metric)"
            stroke-width="12"
            fill="transparent"
            stroke-dasharray={dasharray}
            stroke-dashoffset={dashoffset}
            stroke-linecap="round"
            transform="rotate(-90, 50, 50)"
          >
          </circle>
        </svg>
      </div>
    </div>
  );
}

function Project({ project }: { project: IProject }) {
  return (
    <a
      class="group rounded-lg w-[300px] relative"
      href={project.url}
      target="_blank"
    >
      <ProgressBar progress={project.performance} />
      <div class="flex flex-col gap-4">
        <div class="box-border bg-[#070D0D] p-2 border border-[#0B1612] rounded-xl">
          <div class="flex items-start justify-center h-[400px] max-w-[300px] overflow-hidden rounded-lg">
            <Image
              src={project.banner || ""}
              alt={project.banner}
              height={378}
              width={282}
              class="w-full h-full object-top object-cover"
            />
          </div>
        </div>
        <div
          class={`group-hover:translate-y-[0px] translate-y-[-20px] group-hover:opacity-100 opacity-0 w-full flex gap-4 justify-between items-center transition duration-500 ease-in-out`}
        >
          <div className="flex items-center w-full gap-2">
            {project.icon && (
              <Image
                className="rounded-full"
                src={project.icon}
                alt={project.icon}
                width={20}
                height={20}
                loading="lazy"
              />
            )}
            {project.name && (
              <h3 class="font-semibold text-xl leading-[110%] tracking-[-0.56px] text-white">
                {project.name}
              </h3>
            )}
          </div>
          {project.category && (
            <div class="text-[13px] leading-5 rounded-md bg-[#02F67C40] border border-[#02F67C] text-white text-nowrap px-2">
              {project.category}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

export default Project;
