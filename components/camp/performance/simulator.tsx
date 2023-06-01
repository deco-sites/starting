import { useState } from "preact/hooks";
import Image, { IImage } from "deco-sites/starting/components/ui/Image.tsx";
import Video, {
  Props as IVideo,
} from "deco-sites/starting/components/ui/Video.tsx";
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
  const [resetVideo, setResetVideo] = useState(false);

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
          class="font-regular text-[32px] text-[#0A2121] leading-[1.18] md:leading-[44.16px] mb-10"
          dangerouslySetInnerHTML={{ __html: props.title }}
        >
        </div>

        <div class="hidden md:block text-dark-green text-[22px]">
          <p className="mb-4">
            Gravamos uma simulação do carregamento da Home da Animale em uma
            conexão 3G, comparando seu site atual vs com a deco.
          </p>
          <p className="mb-2 font-semibold md:font-normal">
            O resultado é bastante promissor!
          </p>
          <span>
            Visite{"  "}
            <a
              class="mb-4 hover:cursor-pointer font-semibold underline"
              href="http://animale.deco.site"
            >
              http://animale.deco.site.
            </a>
          </span>
        </div>
      </div>

      <div className="relative">
        <div class="relative md:hidden">
          <div class="max-w-[342px] mx-auto md:hidden">
            <Image image={props.image} className="min-h-[470px]" />
          </div>
          {hasActiveSimulation && (
            <div class="absolute top-5 w-full h-[90%] px-8 flex items-center md:hidden">
              <div class="grid grid-cols-custom-grid-mockup w-full h-full items-center md:hidden">
                <Video {...props.videoNew} resetVideo={resetVideo} />
                <div class="h-full w-full bg-almost-white relative -top-[21px]" />
                <Video {...props.videoOld} resetVideo={resetVideo} />
              </div>
            </div>
          )}
        </div>

        <div class="items-center relative gap-12 justify-center hidden md:flex ">
          <div class="relative flex justify-center items-center">
            <Image image={props.image} className="min-h-[470px]" />
            {hasActiveSimulation && (
              <Video
                {...props.videoNew}
                resetVideo={resetVideo}
                className="rounded-lg absolute max-w-[225px] top-[7%]"
              />
            )}
          </div>
          <div class="hidden md:flex justify-center items-center">
            {hasActiveSimulation
              ? (
                <WithSimulator
                  videoNew={props.videoNew}
                  videoOld={props.videoOld}
                  timerVideoNew={maxTimeNew}
                  timerVideoOld={maxTimeOld}
                  setResetVideo={setResetVideo}
                  resetVideo={resetVideo}
                />
              )
              : (
                <WithoutSimulator
                  handleToActivateSimulation={handleToActivateSimulation}
                />
              )}
          </div>
          <div class="relative flex justify-center items-center">
            <Image image={props.image} className="min-h-[470px]" />
            {hasActiveSimulation && (
              <Video
                {...props.videoOld}
                resetVideo={resetVideo}
                className="rounded-lg absolute max-w-[225px] top-[7%]"
              />
            )}
          </div>
        </div>

        <div class="block md:hidden">
          {hasActiveSimulation
            ? (
              <WithSimulator
                videoNew={props.videoNew}
                videoOld={props.videoOld}
                timerVideoNew={maxTimeNew}
                timerVideoOld={maxTimeOld}
                setResetVideo={setResetVideo}
                resetVideo={resetVideo}
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
