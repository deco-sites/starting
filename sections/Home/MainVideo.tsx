import { VideoWidget } from "apps/admin/widgets.ts";
import Video from "deco-sites/std/components/Video.tsx";

export interface Props {
  videoMp4?: VideoWidget;
  videoWebm?: VideoWidget;
  showSpecialNrfVideo?: boolean;
}

export default function MainVideo({
    videoMp4 = "",
    videoWebm = "",
    showSpecialNrfVideo = true
}: Props) {
  return (
    <div class="lg:mx-auto lg:max-w-[1440px] relative z-10 px-4 py-14 lg:py-0 lg:px-0">
        <div class="mx-auto flex flex-col items-center gap-8">
            {showSpecialNrfVideo && (
            <div class="w-full relative z-10 p-3 rounded-[24px] border border-white/[0.15]">
                <div class="relative overflow-hidden rounded-[20px] w-full">
                <div style="padding:56.25% 0 0 0;position:relative;">
                    <iframe
                    src="https://player.vimeo.com/video/902689992?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;"
                    title="The Unlimited AI Sales Assistant | deco.cx"
                    >
                    </iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
                {videoMp4 && (
                    <Video
                    controls
                    src={videoMp4}
                    loop={false}
                    playsInline={true}
                    autoPlay={false}
                    muted={false}
                    loading="eager"
                    width={1156}
                    height={650}
                    />
                )}
                {!videoMp4 && videoWebm && (
                    <Video
                    controls
                    src={videoWebm}
                    loop={false}
                    playsInline={true}
                    autoPlay={false}
                    muted={false}
                    loading="eager"
                    width={1156}
                    height={650}
                    />
                )}
                </div>
            </div>
            )}
        </div>
    </div>
  );
}
