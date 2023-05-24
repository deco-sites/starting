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

function formatTime(time: number) {
  const [seconds, milliseconds] = time.toPrecision().split(".");

  return {
    seconds: Number(seconds),
    milliseconds: Number(milliseconds),
  };
}

const Simulator = (
  props: Props,
) => {
  const [hasActiveSimulation, sethasActiveSimulation] = useState(false);
  const timeNew = formatTime(props.timerVideoNew);
  const timeOld = formatTime(props.timerVideoOld);
  const maxTimeNew = {
    seconds: timeNew.seconds,
    milliseconds: timeNew.milliseconds,
  };
  const maxTimeOld = {
    seconds: timeOld.seconds,
    milliseconds: timeOld.milliseconds,
  };

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
              timerVideoNew={maxTimeNew}
              timerVideoOld={maxTimeOld}
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
