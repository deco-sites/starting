const StepImage = (props: { src: string; alt: string }) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} class="max-w-[415px]" />
    </div>
  );
};

export default StepImage;
