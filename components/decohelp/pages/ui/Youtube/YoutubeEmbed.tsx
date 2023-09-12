import { FunctionComponent } from "preact";

interface YoutubeEmbedProps {
  embedId: string;
  label: string;
  width?: string;
  height?: string;
}

const YoutubeEmbed: FunctionComponent<YoutubeEmbedProps> = (
  { embedId, label, width, height },
) => (
  <>
    <iframe
      class="w-full my-4"
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      title={label}
    />
  </>
);

export default YoutubeEmbed;
