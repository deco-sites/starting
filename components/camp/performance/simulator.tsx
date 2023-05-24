import { useState } from "preact/hooks";
import Image, { IImage } from "deco-sites/starting/components/ui/Image.tsx";
import { Props as IVideo } from "deco-sites/starting/components/ui/Video.tsx";
import WithSimulator from "deco-sites/starting/components/camp/performance/withSimulator.tsx";
import WithoutSimulator from "deco-sites/starting/components/camp/performance/withoutSimulator.tsx";

export interface Props {
  /**
   * @format textarea
   */
  title: string;
  image: IImage;
  videoNew: IVideo;
  timerVideoNew: number;
  videoOld: IVideo;
  timerVideoOld: number;
}

const Simulator = (
  props: Props,
) => {
  const [hasActiveSimulation, sethasActiveSimulation] = useState(false);

  function handleToActivateSimulation() {
    sethasActiveSimulation(true);
  }

  return (
    <div>
      <div
        class="font-regular text-[32px] text-[#0A2121] leading-[44.16px] mb-10"
        dangerouslySetInnerHTML={{ __html: props.title }}
      >
      </div>

      <div className="relative">
        <div class="max-w-[342px] mx-auto">
          <Image image={props.image} className="min-h-[470px]" />
        </div>

        {hasActiveSimulation
          ? (
            <WithSimulator
              videoNew={props.videoNew}
              videoOld={props.videoOld}
              timerVideoNew={props.timerVideoNew}
              timerVideoOld={props.timerVideoOld}
            />
          )
          : (
            <WithoutSimulator
              handleToActivateSimulation={handleToActivateSimulation}
            />
          )}
      </div>
    </div>
  );
};

export default Simulator;
