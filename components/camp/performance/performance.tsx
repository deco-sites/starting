import Simulator from "deco-sites/starting/components/camp/performance/simulator.tsx";
import { IImage } from "deco-sites/starting/components/ui/Image.tsx";
import { Props as IVideo } from "deco-sites/starting/components/ui/Video.tsx";
export interface Props {
  /**
   * @format textarea
   */
  title: string;
  /**
   * @format textarea
   */
  text: string;

  /**
   * @format textarea
   */
  simulatorTitle: string;
  simulatorImage: IImage;
  simulatorVideoNew: IVideo;
  simulatorVideoOld: IVideo;
}

const Performance = (
  props: Props,
) => {
  return (
    <div class="py-10 md:py-[120px] bg-almost-white">
      <div class="pt-12 pb-6 px-6 ">
        <div
          class="font-bold text-[46px] text-[#202320] leading-[44.16px] mb-8"
          dangerouslySetInnerHTML={{ __html: props.title }}
        >
        </div>

        <div
          class="font-regular text-2xl text-[#1F261FAB] mb-10"
          dangerouslySetInnerHTML={{ __html: props.text }}
        >
        </div>

        <Simulator
          title={props?.simulatorTitle}
          image={props?.simulatorImage}
          videoNew={props?.simulatorVideoNew}
          videoOld={props?.simulatorVideoOld}
        />
      </div>
    </div>
  );
};

export default Performance;
