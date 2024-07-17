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
  performance?: number;
}

export interface Props {
  projects?: IProject[];
}

function Project({ name, icon, banner="", url, performance }: IProject) {
  return (
    <div class="border-2 border-black rounded-lg max-w-[150px]">
      <Image
        src={banner}
        alt={banner}
        height={200}
        width={100}
        class="w-full h-full"
      />
    </div>
  );
}

export default Project;
