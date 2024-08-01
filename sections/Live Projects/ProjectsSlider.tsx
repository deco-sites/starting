import Project, { IProject } from "site/components/LiveProjects/Project.tsx";

export interface Props {
  projects: IProject[];
}

export default function ProjectsSlider({ projects }: Props) {
  return <div class="relative z-10">
    {projects.map((project) => <Project project={project}/>)}
  </div>;
}
