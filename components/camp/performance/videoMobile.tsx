import Video, {
  Props as IVideo,
} from "deco-sites/starting/components/ui/Video.tsx";

export interface Props {
  videoNew: IVideo;
  videoOld: IVideo;
  resetVideo: boolean;
}

export default function Media({ resetVideo, videoNew, videoOld }: Props) {
  return (
    <>
      <div class="grid grid-cols-custom-grid-mockup w-full h-full items-center md:hidden">
        <Video {...videoNew} resetVideo={resetVideo} />
        <div class="h-full w-full bg-almost-white relative -top-[21px]" />
        <Video {...videoOld} resetVideo={resetVideo} />
      </div>
    </>
  );
}
