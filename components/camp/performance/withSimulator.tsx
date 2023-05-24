import { useEffect, useState } from "preact/hooks";
import { Props as IVideo } from "deco-sites/starting/components/ui/Video.tsx";
import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import ProgressBar from "deco-sites/starting/components/camp/performance/progressBar.tsx";
import Counter from "deco-sites/starting/components/camp/performance/counter.tsx";

import CountButton from "deco-sites/starting/components/camp/performance/countButton.tsx";
import Media from "deco-sites/starting/components/camp/performance/media.tsx";
import Timer from "deco-sites/starting/components/camp/performance/timer.tsx";

interface Timer {
  seconds: number;
  milliseconds: number;
}

interface Props {
  videoOld: IVideo;
  videoNew: IVideo;
  timerVideoNew: Timer;
  timerVideoOld: Timer;
}

export default function WithSimulator(props: Props) {
  const [resetCounter, setResetCounter] = useState(false);
  const [resetVideo, setResetVideo] = useState(false);
  const [countersFinalizados, setCountersFinalizados] = useState(false);
  const [firstTimer, setFirstTimer] = useState<Timer>({
    seconds: 0,
    milliseconds: 0,
  });
  const [secondTimer, setSecondTimer] = useState<Timer>({
    seconds: 0,
    milliseconds: 0,
  });

  useEffect(() => {
    if (
      firstTimer.seconds >= props.timerVideoNew.seconds &&
      firstTimer.milliseconds >= props.timerVideoNew.milliseconds &&
      secondTimer.seconds >= props.timerVideoOld.seconds &&
      secondTimer.milliseconds >= props.timerVideoOld.milliseconds
    ) {
      setCountersFinalizados(true);
      setResetCounter(false);
      setResetVideo(false);
    } else {
      setCountersFinalizados(false);
    }
  }, [firstTimer, secondTimer, props.timerVideoNew, props.timerVideoOld]);

  const onUpdateFirstTime = (
    newTime: { seconds: number; milliseconds: number },
  ) => {
    setFirstTimer(newTime);
  };

  const onUpdateSecondTime = (
    newTime: { seconds: number; milliseconds: number },
  ) => {
    setSecondTimer(newTime);
  };

  function handleRestartSimulation() {
    setResetCounter(true);
    setResetVideo(true);
  }

  return (
    <>
      <div class="absolute top-5 w-full h-[90%] px-8 flex items-center md:hidden">
        <Media
          resetVideo={resetVideo}
          videoNew={props.videoNew}
          videoOld={props.videoOld}
        />
      </div>
      <div class="hidden md:block">
        <Media
          resetVideo={resetVideo}
          videoNew={props.videoNew}
          videoOld={props.videoOld}
        />
      </div>

      <div class="md:hidden fade-in absolute -bottom-[1px] -left-6 z-20 bg-[#FFFFFFE5] w-screen h-[260px] p-6 rounded-[12px]">
        <div class="w-full flex flex-col justify-center items-center max-w-[382px] mx-auto">
          <div class="flex gap-3 justify-center items-center mb-7">
            <Timer className="bg-[#06E474]">
              <Icon id="DecoSimulator" size={55} />
              <p class="font-inter font-semibold text-5xl text-dark-green">
                <Counter
                  resetCounter={resetCounter}
                  onTimeUpdate={onUpdateFirstTime}
                  maxTime={props.timerVideoNew}
                />
              </p>
            </Timer>

            <div class="w-8 h-8 rounded-full flex flex-col items-center gap-2 border border-dark-green bg-dark-green ">
              <span class="font-regular text-base text-almost-white mt-[3px]">
                VS
              </span>
            </div>

            <Timer className="justify-center bg-almost-white">
              <p class="font-semibold text-lg text-dark-green">
                Atual
              </p>
              <p class="font-inter font-medium text-[33px] text-dark-green">
                <Counter
                  resetCounter={resetCounter}
                  onTimeUpdate={onUpdateSecondTime}
                  maxTime={props.timerVideoOld}
                />
              </p>
            </Timer>
          </div>

          <ProgressBar
            firstTimeSeconds={firstTimer.seconds}
            secondTimeSeconds={secondTimer.seconds}
            firstTimeMilliseconds={firstTimer.milliseconds}
            secondTimeMilliseconds={secondTimer.milliseconds}
          />

          {countersFinalizados && (
            <CountButton
              onClick={handleRestartSimulation}
              variant="outline"
            >
              <Icon id="Restart" size={19} />
              <span>Reiniciar simulação</span>
            </CountButton>
          )}
        </div>
      </div>

      <div class="fade-in absolute -bottom-[86px] z-20 bg-[#FFFFFFE5] p-6 hidden md:block rounded-[12px]">
        <div class="w-full flex flex-col justify-center items-center max-w-[382px] mx-auto">
          <div class="flex gap-3 justify-center items-center mb-7">
            <Timer className="bg-[#06E474]">
              <Icon id="DecoSimulator" size={55} />
              <p class="font-inter font-semibold text-5xl text-dark-green">
                <Counter
                  resetCounter={resetCounter}
                  onTimeUpdate={onUpdateFirstTime}
                  maxTime={props.timerVideoNew}
                />
              </p>
            </Timer>

            <div class="w-8 h-8 rounded-full flex flex-col items-center gap-2 border border-dark-green bg-dark-green ">
              <span class="font-regular text-base text-almost-white mt-[3px]">
                VS
              </span>
            </div>

            <Timer className="justify-center bg-almost-white">
              <p class="font-semibold text-lg text-dark-green">
                Atual
              </p>
              <p class="font-inter font-medium text-[33px] text-dark-green">
                <Counter
                  resetCounter={resetCounter}
                  onTimeUpdate={onUpdateSecondTime}
                  maxTime={props.timerVideoOld}
                />
              </p>
            </Timer>
          </div>

          <ProgressBar
            firstTimeSeconds={firstTimer.seconds}
            firstTimeMilliseconds={firstTimer.milliseconds}
            secondTimeSeconds={secondTimer.seconds}
            secondTimeMilliseconds={secondTimer.milliseconds}
          />

          {countersFinalizados && (
            <CountButton
              onClick={handleRestartSimulation}
              variant="outline"
            >
              <Icon id="Restart" size={19} />
              <span>Reiniciar simulação</span>
            </CountButton>
          )}
        </div>
      </div>
    </>
  );
}
