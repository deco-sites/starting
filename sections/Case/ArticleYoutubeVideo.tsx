export interface Props {
  videoCode: string;
}

export default function ArticleYoutubeVideo({
  videoCode,
}: Props) {
  return (
    <div class="lg:container">
      <div class="mx-4 md:mx-12 lg:mx-auto lg:w-8/12 py-5 lg:py-8 flex justify-center relative z-10">
        <iframe
          style={{ width: "100%", aspectRatio: "16/9" }}
          src={`https://www.youtube.com/embed/${videoCode}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        >
        </iframe>
      </div>
    </div>
  );
}
