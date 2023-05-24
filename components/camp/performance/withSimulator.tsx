import { useEffect, useState } from "preact/hooks";
import { Props as IVideo } from "deco-sites/starting/components/ui/Video.tsx";
import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import ProgressBar from "deco-sites/starting/components/camp/performance/progressBar.tsx";
import Counter from "deco-sites/starting/components/camp/performance/counter.tsx";

import CountButton from "deco-sites/starting/components/camp/performance/countButton.tsx";
import Media from "deco-sites/starting/components/camp/performance/media.tsx";
import Timer from "deco-sites/starting/components/camp/performance/timer.tsx";

interface Props {
  videoOld: IVideo;
  videoNew: IVideo;
  timerVideoNew: { seconds: number; milliseconds: number };
  timerVideoOld: { seconds: number; milliseconds: number };
}

export default function WithSimulator(props: Props) {
  const [resetCounter, setResetCounter] = useState(false);
  const [resetVideo, setResetVideo] = useState(false);
  const [countersFinalizados, setCountersFinalizados] = useState(false);
  const [tempo, setTempo] = useState({
    tempo1: { seconds: 0, milliseconds: 0 },
    tempo2: { seconds: 0, milliseconds: 0 },
  });

  useEffect(() => {
    if (
      tempo.tempo1.seconds >= props.timerVideoNew.seconds &&
      tempo.tempo1.milliseconds >= props.timerVideoNew.milliseconds &&
      tempo.tempo2.seconds >= props.timerVideoOld.seconds &&
      tempo.tempo2.milliseconds >= props.timerVideoOld.milliseconds
    ) {
      setCountersFinalizados(true);
      setResetCounter(false);
      setResetVideo(false);
    } else {
      setCountersFinalizados(false);
    }
  }, [tempo]);

  const handleTempoAtualizado1 = (
    novoTempo: { seconds: number; milliseconds: number },
  ) => {
    setTempo((prevTempo) => ({
      ...prevTempo,
      tempo1: novoTempo,
    }));
  };

  const handleTempoAtualizado2 = (
    novoTempo: { seconds: number; milliseconds: number },
  ) => {
    setTempo((prevTempo) => ({
      ...prevTempo,
      tempo2: novoTempo,
    }));
  };

  function handleRestartSimulation() {
    setResetCounter(true);
    setResetVideo(true);
  }

  return (
    <>
      <div class="absolute top-5 w-full h-[90%] px-8 flex items-center">
        <Media
          resetVideo={resetVideo}
          videoNew={props.videoNew}
          videoOld={props.videoOld}
        />
      </div>
      <div class="fade-in absolute -bottom-[1px] -left-6 z-20 bg-[#FFFFFFE5] w-screen h-[260px] p-6">
        <div class="w-full flex flex-col justify-center items-center max-w-[382px] mx-auto">
          <div class="flex gap-3 justify-center items-center mb-7">
            <Timer className="bg-[#06E474]">
              <Icon id="DecoSimulator" size={55} />
              <p class="font-inter font-semibold text-5xl text-dark-green">
                <Counter
                  resetCounter={resetCounter}
                  onTimeUpdate={handleTempoAtualizado1}
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
                  onTimeUpdate={handleTempoAtualizado2}
                  maxTime={props.timerVideoOld}
                />
              </p>
            </Timer>
          </div>

          <ProgressBar
            firstTimeSeconds={tempo.tempo1.seconds}
            secondTimeSeconds={tempo.tempo2.seconds}
            firstTimeMilliseconds={tempo.tempo1.milliseconds}
            secondTimeMilliseconds={tempo.tempo2.milliseconds}
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
