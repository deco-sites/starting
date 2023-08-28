import { FunctionComponent } from "preact";

interface YoutubeEmbedProps {
  embedId: string;
  label: string;
}

const YoutubeEmbed: FunctionComponent<YoutubeEmbedProps> = (
  { embedId, label },
) => (
  <>
    <iframe
      class="w-full h-screen max-h-[375.02px] my-4"
      width="626.76"
      height="352.56px"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      title={label}
    />
  </>
);

export default YoutubeEmbed;
