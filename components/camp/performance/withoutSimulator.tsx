import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import CountButton from "deco-sites/starting/components/camp/performance/countButton.tsx";
import SimulationInfo from "deco-sites/starting/components/camp/performance/simulationInfo.tsx";

interface Props {
  handleToActivateSimulation: () => void;
}

export default function WithoutSimulator(props: Props) {
  return (
    <>
      <div class="absolute -left-6 bottom-0 w-screen flex items-end bg-[#FFFFFFE5] md:hidden rounded-[12px]">
        <div class="w-full max-w-[342px] mx-auto">
          <div class="p-6 pb-0 mb-6">
            <SimulationInfo />
          </div>
          <CountButton
            variant="filled"
            onClick={props.handleToActivateSimulation}
          >
            Iniciar simulação
          </CountButton>
        </div>
      </div>

      <div class="hidden md:block bg-[#FFFFFFE5] absolute rounded-[12px] p-6 z-10">
        <div class="w-full max-w-[496px] mx-auto">
          <div class="flex gap-3 justify-center items-center mb-7">
            <div
              class={`w-[148px] h-[148px] rounded-full flex justify-center items-center gap-2 border border-dark-green bg-[#06E474]`}
            >
              <Icon id="DecoSimulator" size={89} />
            </div>

            <div class="w-8 h-8 rounded-full flex flex-col items-center gap-2 border border-dark-green bg-dark-green ">
              <span class="font-regular text-base text-almost-white mt-[3px]">
                VS
              </span>
            </div>

            <div
              class={`w-[148px] h-[148px] rounded-full flex justify-center items-center gap-2 border border-dark-green`}
            >
              <p class="text-3xl text-dark-green font-semibold">Atual</p>
            </div>
          </div>
          <CountButton
            variant="filled"
            onClick={props.handleToActivateSimulation}
          >
            Iniciar simulação
          </CountButton>
        </div>
      </div>
    </>
  );
}
