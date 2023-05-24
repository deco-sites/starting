import Image, { IImage } from "deco-sites/starting/components/ui/Image.tsx";
import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import ProgressBar from "deco-sites/starting/components/camp/performance/progressBar.tsx";
import Counter from "deco-sites/starting/components/camp/performance/counter.tsx";
import Video, {
  Props as IVideo,
} from "deco-sites/starting/components/ui/Video.tsx";
import { useEffect, useState } from "preact/hooks";

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
              <div class="grid grid-cols-custom-grid-mockup w-full h-full items-center">
                <Video {...props.videoNew} resetVideo={resetVideo} />
                <div class="h-full w-full bg-almost-white relative -top-[21px]" />
                <Video {...props.videoOld} resetVideo={resetVideo} />
              </div>
            )
            : (
              <div class="bg-[#FFFFFFE5] w-screen h-[360px] absolute -left-6 top-[20%] p-6">
                <div class="w-[80%] max-w-[300px] mx-auto">
                  <p class="mb-4 font-regular text-[22px] text-dark-green">
                    Gravamos uma simulação do carregamento da Home da Animale em
                    uma conexão 3G, comparando o site atual vs com a versão
                    deco.cx.
                  </p>
                  <b class="text-[22px] text-dark-green">
                    O resultado é bastante promissor!
                  </b>
                </div>
              </div>
            )}
        </div>
        {hasActiveSimulation
          ? (
            <div class="fade-in absolute -bottom-[1px] -left-6 z-20 bg-[#FFFFFFE5] w-screen h-[260px] p-6">
              <div class="w-full flex flex-col justify-center items-center max-w-[382px] mx-auto">
                <div class="flex gap-3 justify-center items-center mb-7">
                  <div class="w-[148px] h-[148px] rounded-full flex flex-col items-center gap-2 border border-dark-green bg-[#06E474]">
                    <Icon id="DecoSimulator" size={55} />
                    <p class="font-inter font-semibold text-5xl text-dark-green">
                      <Counter
                        resetCounter={resetCounter}
                        onTempoAtualizado={handleTempoAtualizado1}
                        tempoMaximo={tempo1Maximo}
                      />
                    </p>
                  </div>

                  <div class="w-8 h-8 rounded-full flex flex-col items-center gap-2 border border-dark-green bg-dark-green ">
                    <span class="font-regular text-base text-almost-white mt-[3px]">
                      VS
                    </span>
                  </div>

                  <div class="w-[148px] h-[148px] rounded-full flex flex-col items-center justify-center gap-2 border border-dark-green bg-almost-white">
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
                  </div>
                </div>

                <ProgressBar
                  firstTimeSeconds={tempo.tempo1.segundos}
                  secondTimeSeconds={tempo.tempo2.segundos}
                  firstTimeMilliseconds={tempo.tempo1.milissegundos}
                  secondTimeMilliseconds={tempo.tempo2.milissegundos}
                />

                {countersFinalizados && (
                  <button
                    onClick={handleRestartSimulation}
                    class="w-full max-w-[382px] bg-almost-white py-[17px] rounded text-base font-500 font-inter text-dark-green border border-dark-green flex gap-2 justify-center items-center"
                  >
                    <Icon id="Restart" size={19} />
                    <span>Reiniciar simulação</span>
                  </button>
                )}
              </div>
            </div>
          )
          : (
            <button
              onClick={handleToActivateSimulation}
              class="w-full max-w-[382px] bg-[#06E474] absolute bottom-[-2px] py-[17px] rounded text-base font-500 font-inter text-dark-green border-0"
            >
              Iniciar simulação
            </button>
          )}
      </div>
    </div>
  );
};

export default Simulator;
