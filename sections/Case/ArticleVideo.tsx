import { Source } from "deco-sites/std/components/Picture.tsx";
import { Video as LiveVideo } from "deco-sites/std/components/types.ts";
import Video from "deco-sites/std/components/Video.tsx";

export interface Props {
  videoMp4?: LiveVideo;
  videoWebm?: LiveVideo;
}

export default function ArticleVideo({
  videoMp4,
  videoWebm,
}: Props) {
  return (
    <div class="lg:container">
      <div class="mx-4 md:mx-12 lg:mx-auto lg:w-8/12 py-5 lg:py-8">
        {videoMp4 && (
          <Video
            src={videoMp4}
            loop={true}
            playsInline={true}
            autoPlay={true}
            muted={true}
            class="w-full"
            loading="eager"
          >
            {videoWebm && (
              <Source
                src={videoWebm}
                type="video/webm"
              />
            )}
            <Source
              src={videoMp4}
              type="video/mp4"
            />
          </Video>
        )}
      </div>
    </div>
  );
}
