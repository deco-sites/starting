import Project, { IProject } from "site/components/LiveProjects/Project.tsx";

export interface Props {
  projects: IProject[];
}

export default function ProjectsSlider({ projects }: Props) {
  return (
    <div class="flex justify-center relative z-10 ">
      <div class="absolute w-screen h-[200vh] overflow-hidden top-[-550px]">
        <div
          class="h-[200vh] z-10 max-w-screen overflow-x-hidden w-full scale-150 lg:scale-100 top-0"
          style="background: radial-gradient(circle, rgba(2,246,124,.35) 0%, rgba(255,255,255,0) 60%);"
        ></div>
      </div>
      <div class="flex gap-4 overflow-hidden">
        {Array(3)
          .fill(0)
          .map(() => (
            <div class="flex gap-4 animate-slide justify-center relative z-10 py-16">
              {projects.map((project) => (
                <Project project={project} />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
