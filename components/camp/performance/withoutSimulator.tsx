import CountButton from "deco-sites/starting/components/camp/performance/countButton.tsx";
import SimulationInfo from "deco-sites/starting/components/camp/performance/simulationInfo.tsx";

interface Props {
  handleToActivateSimulation: () => void;
}

export default function WithoutSimulator(props: Props) {
  return (
    <section>
      <div class="absolute -left-6 bottom-0 w-screen flex items-end bg-[#FFFFFFE5] md:hidden">
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
    </section>
  );
}
