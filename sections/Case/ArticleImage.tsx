import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  image: ImageWidget;
  width?: number;
  height?: number;
}

export default function ArticleImage({ image, width, height }: Props) {
  return (
    <div class="lg:container relative z-10">
      <div class="mx-4 md:mx-12 lg:mx-auto lg:w-8/12 py-5 lg:py-8">
        <Image
          src={image}
          width={width || 1280}
          height={height || 720}
          class="mx-auto"
          loading="eager"
        />
      </div>
    </div>
  );
}
