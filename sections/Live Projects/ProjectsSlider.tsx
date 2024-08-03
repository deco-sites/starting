import Project, { IProject } from "site/components/LiveProjects/Project.tsx";

export interface Props {
  projects: IProject[];
}

export default function ProjectsSlider({ projects }: Props) {
  return (
    <div class="flex justify-center relative z-10">
      <div class="deco-background"></div>
      <div
        class="h-[200vh] z-10 w-[100vw] md:w-[100vw] absolute lg:w-[100vw] top-[-550px] scale-150 lg:scale-100"
        style="background: radial-gradient(circle, rgba(2,246,124,.35) 0%, rgba(255,255,255,0) 60%);"
      ></div>
      <div class="flex gap-4">
        <div class="flex gap-4 animate-slide justify-center relative z-10 py-16">
          {projects.map((project) => (
            <Project project={project} />
          ))}
        </div>
        <div class="flex gap-4 animate-slide justify-center relative z-10 py-16">
          {projects.map((project) => (
            <Project project={project} />
          ))}
        </div>
        <div class="flex gap-4 animate-slide justify-center relative z-10 py-16">
          {projects.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
