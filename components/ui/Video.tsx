import { Source } from "deco-sites/std/components/Picture.tsx";
import { Video as LiveVideo } from "deco-sites/std/components/types.ts";
import VideoComponent from "deco-sites/std/components/Video.tsx";
import { useEffect, useState } from "preact/hooks";

export interface Props {
  /** @title Vídeo Mobile */
  mobile: LiveVideo;
  /** @title Vídeo Desktop */
  desktop: LiveVideo;
  /** @title Video alt text */
  alt?: string;
  /** @title Link */
  link: string;
  resetVideo?: boolean;
  className?: string;
}

export default function Video(props: Props) {
  const [videoKey, setVideoKey] = useState(0);

  useEffect(() => {
    if (props.resetVideo) {
      setVideoKey((prevKey) => prevKey + 1); // Atualiza a chave para reiniciar o vídeo
    }
  }, [props.resetVideo]);

  return (
    <VideoComponent
      key={videoKey} // Define a chave única para reiniciar o componente
      height={100}
      width={100}
      src={props.desktop}
      playsInline={true}
      autoPlay={true}
      muted={true}
      class={`w-full ${props.className}`}
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
