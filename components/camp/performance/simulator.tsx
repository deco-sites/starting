import Image, { IImage } from "deco-sites/starting/components/ui/Image.tsx";
import Video, {
  Props as IVideo,
} from "deco-sites/starting/components/ui/Video.tsx";
import { useState } from "preact/hooks";

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

  return (
    <div>
      <div
        class="font-regular text-[32px] text-[#0A2121] leading-[44.16px] mb-10"
        dangerouslySetInnerHTML={{ __html: props.title }}
      >
      </div>

      <div className="relative">
        <Image image={props.image} />
        <div class="absolute top-5 w-full h-[90%] px-8 flex items-center">
          {hasActiveSimulation
            ? (
              <div class="grid grid-cols-custom-grid-mockup w-full h-full items-center">
                <Video {...props.videoNew} />
                <div class="h-full w-full bg-almost-white relative -top-[21px]" />
                <Video {...props.videoOld} />
              </div>
            )
            : (
              <div>
                <p class="mb-4 font-regular text-[22px] text-dark-green">
                  Gravamos uma simulação do carregamento da Home da Animale em
                  uma conexão 3G, comparando o site atual vs com a versão
                  deco.cx.
                </p>
                <b class="text-[22px] text-dark-green">
                  O resultado é bastante promissor!
                </b>
              </div>
            )}
        </div>

        <button
          onClick={() => sethasActiveSimulation(true)}
          class="w-full bg-[#06E474] absolute bottom-0 py-[17px] rounded text-base font-500 font-inter text-dark-green border-0"
        >
          Iniciar simulação
        </button>
      </div>
    </div>
  );
};

export default Simulator;
