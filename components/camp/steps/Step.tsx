import StepImage from "./stepsImages/StepImage.tsx";

const Step = (
  props: { src: string; alt: string; text: string; title: string },
) => {
  return (
    <div class="md:flex ">
      <div>
        <img src={props.src} alt={props.alt} class="max-w-[415px] mx-auto" />
      </div>
      <div>
        <div class="max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class=" mx-auto max-w-[407px]">
            <h2 class="text-2xl font-semibold text-[#113032] tracking-wide ">
              {props.title}
            </h2>
            <p class="max-w-xl mt-5 mx-auto text-xl text-[#113032] ">
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
