import { useEffect, useState } from "preact/hooks";
import Image, { IImage } from "deco-sites/starting/components/ui/Image.tsx";
import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import { Props as IVideo } from "deco-sites/starting/components/ui/Video.tsx";

import ProgressBar from "deco-sites/starting/components/camp/performance/progressBar.tsx";
import Counter from "deco-sites/starting/components/camp/performance/counter.tsx";

import CountButton from "deco-sites/starting/components/camp/performance/countButton.tsx";
import Media from "deco-sites/starting/components/camp/performance/media.tsx";
import SimulationInfo from "deco-sites/starting/components/camp/performance/simulationInfo.tsx";
import Timer from "deco-sites/starting/components/camp/performance/timer.tsx";

export interface Props {
  /**
   * @format textarea
   */
  title: string;
  image: IImage;
  videoNew: IVideo;
  videoOld: IVideo;
}

const Simulator = (
  props: Props,
) => {
  const [hasActiveSimulation, sethasActiveSimulation] = useState(false);
  const [tempo, setTempo] = useState({
    tempo1: { segundos: 0, milissegundos: 0 },
    tempo2: { segundos: 0, milissegundos: 0 },
  });
  const [resetCounter, setResetCounter] = useState(false);
  const [resetVideo, setResetVideo] = useState(false);
  const [countersFinalizados, setCountersFinalizados] = useState(false);

  const tempo1Maximo = { segundos: 4, milissegundos: 2 };
  const tempo2Maximo = { segundos: 12, milissegundos: 3 };

  const handleTempoAtualizado1 = (
    novoTempo: { segundos: number; milissegundos: number },
  ) => {
    setTempo((prevTempo) => ({
      ...prevTempo,
      tempo1: novoTempo,
    }));
  };

  const handleTempoAtualizado2 = (
    novoTempo: { segundos: number; milissegundos: number },
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

  function handleToActivateSimulation() {
    sethasActiveSimulation(true);
  }

  useEffect(() => {
    if (
      tempo.tempo1.segundos >= tempo1Maximo.segundos &&
      tempo.tempo1.milissegundos >= tempo1Maximo.milissegundos &&
      tempo.tempo2.segundos >= tempo2Maximo.segundos &&
      tempo.tempo2.milissegundos >= tempo2Maximo.milissegundos
    ) {
      setCountersFinalizados(true);
      setResetCounter(false);
      setResetVideo(false);
    } else {
      setCountersFinalizados(false);
    }
  }, [tempo]);

  return (
    <div>
      <div
        class="font-regular text-[32px] text-[#0A2121] leading-[44.16px] mb-10"
        dangerouslySetInnerHTML={{ __html: props.title }}
      >
      </div>

      <div className="relative">
        <Image image={props.image} className="min-h-[470px]" />
        <div class="absolute top-5 w-full h-[90%] px-8 flex items-center">
          {hasActiveSimulation
            ? (
              <Media
                resetVideo={resetVideo}
                videoNew={props.videoNew}
                videoOld={props.videoOld}
              />
            )
            : <SimulationInfo />}
        </div>
        {hasActiveSimulation
          ? (
            <div class="fade-in absolute -bottom-[1px] -left-6 z-20 bg-[#FFFFFFE5] w-screen h-[260px] p-6">
              <div class="w-full flex flex-col justify-center items-center max-w-[382px] mx-auto">
                <div class="flex gap-3 justify-center items-center mb-7">
                  <Timer className="bg-[#06E474]">
                    <Icon id="DecoSimulator" size={55} />
                    <p class="font-inter font-semibold text-5xl text-dark-green">
                      <Counter
                        resetCounter={resetCounter}
                        onTempoAtualizado={handleTempoAtualizado1}
                        tempoMaximo={tempo1Maximo}
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
                        onTempoAtualizado={handleTempoAtualizado2}
                        tempoMaximo={tempo2Maximo}
                      />
                    </p>
                  </Timer>
                </div>

                <ProgressBar
                  firstTimeSeconds={tempo.tempo1.segundos}
                  secondTimeSeconds={tempo.tempo2.segundos}
                  firstTimeMilliseconds={tempo.tempo1.milissegundos}
                  secondTimeMilliseconds={tempo.tempo2.milissegundos}
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
          )
          : (
            <CountButton
              variant="filled"
              onClick={handleToActivateSimulation}
            >
              Iniciar simulação
            </CountButton>
          )}
      </div>
    </div>
  );
};

export default Simulator;
