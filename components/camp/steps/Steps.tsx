import Step from "./Step.tsx";
import StepsHeader from "./StepsHeader.tsx";
import StepImage from "./stepsImages/StepImage.tsx";
import StepInfo from "./stepsInfo/StepInfo.tsx";

const stepsImg = [
  { src: "/camp/steps-discorImg.png", alt: "" },
  { src: "/camp/steps-gridImg.png", alt: "" },
  { src: "/camp/steps-phoneImg.png", alt: "" },
  { src: "/camp/steps-callImg.png", alt: "" },
];

const stepsInfo = [
  {
    src: "/camp/steps-discorImg.png",
    alt: "",
    title: "Entre para a comunidade",
    text:
      "No nosso canal do Discord você tira suas dúvidas, encontra especialistas em comércio digital e expande seu network.",
  },
  {
    src: "/camp/steps-gridImg.png",
    alt: "",
    title: "Aprenda no seu ritmo",
    text:
      "Video aulas pré-gravadas e sessões ao vivo para você se conectar com outros alunos e ter uma experiência transformadora.",
  },
  {
    src: "/camp/steps-phoneImg.png",
    alt: "",
    title: "Pratique com desafios reais",
    text:
      "Aprenda fazendo. Implemente lojas de verdade, do início ao fim. Se o projeto for aprovado, você ainda é remunerado! ",
  },
  {
    src: "/camp/steps-callImg.png",
    alt: "",
    title: "Revise com seu mentor",
    text:
      "Nada como um bom match, né? Baseado no seu perfil, vamos recomendar o mentor perfeito para guiar a sua evolução.",
  },
];

const Steps = () => {
  return (
    <div>
      <StepsHeader />
      <div class="md:flex justify-center max-w-[1100px] m-auto">
        <div>
          <div class="xl:flex mx-auto hidden">
            <div class=" m-auto px-10 flex-1">
              {stepsImg.map((step) => (
                <div class="sm:py-10 py-8 px-4" key={step.alt}>
                  <StepImage src={step.src} alt={step.alt} />
                </div>
              ))}
            </div>
            <div class="hidden xl:block mx-auto">
              <img src="/camp/vertical-line.png" />
            </div>
            <div class="m-auto px-4">
              {stepsInfo.map((step) => (
                <div>
                  <StepInfo title={step.title} text={step.text} />
                </div>
              ))}
            </div>
          </div>
          <div class="xl:hidden mx-auto">
            {stepsInfo.map((step) => (
              <div class="m-auto">
                <Step
                  src={step.src}
                  alt={step.alt}
                  text={step.text}
                  title={step.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
