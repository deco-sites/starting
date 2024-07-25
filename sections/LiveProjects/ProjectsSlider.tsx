import Project, { IProject } from "site/components/LiveProjects/Project.tsx";

export interface Props {
  projects?: IProject[];
}

function ProjectSlider({ projects }: Props) {
  return (
    <div>
      {projects?.map((project) => <Project {...project} />)}
    </div>
  );
}

export default ProjectSlider;
