import { Source } from "deco-sites/std/components/Picture.tsx";
import { Video as LiveVideo } from "deco-sites/std/components/types.ts";
import VideoComponent from "deco-sites/std/components/Video.tsx";

export interface Props {
  /** @title Vídeo Mobile */
  mobile: LiveVideo;
  /** @title Vídeo Desktop */
  desktop: LiveVideo;
  /** @title Video alt text */
  alt?: string;
  /** @title Link */
  link: string;
}

export default function Video(props: Props) {
  return (
    <VideoComponent
      height={100}
      width={100}
      src={props.desktop}
      loop={true}
      playsInline={true}
      autoPlay={true}
      muted={true}
      class="w-full"
      loading="eager"
    >
      <Source
        width={100}
        id={props.alt + "mp4"}
        src={props.desktop}
        type="video/mp4"
      />
    </VideoComponent>
  );
}
