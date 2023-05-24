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
    <div class="justify-between gap-[140px] md:grid grid-cols-2">
      <div>
        <div
          class="font-regular text-[32px] text-[#0A2121] leading-[44.16px] mb-10"
          dangerouslySetInnerHTML={{ __html: props.title }}
        >
        </div>

        <div class="hidden md:block text-dark-green text-[22px] font-semibold">
          <p>
            Gravamos uma simulação do carregamento da Home da Animale em uma
            conexão 3G, comparando seu site atual vs com a deco.
          </p>
          <p>
            O resultado é bastante promissor!
          </p>
          <span>
            Visite
            <a href="http://animale.deco.site">http://animale.deco.site.</a>
          </span>
        </div>
      </div>

      <div className="relative">
        <div class="max-w-[342px] mx-auto md:hidden">
          <Image image={props.image} className="min-h-[470px]" />
        </div>

        <div class="items-center relative gap-12 justify-center hidden md:flex ">
          <Image image={props.image} className="min-h-[470px]" />
          <div class="hidden md:flex justify-center items-center">
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
          <Image image={props.image} className="min-h-[470px]" />
        </div>

        <div class="block md:hidden">
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
    </div>
  );
};

export default Simulator;
