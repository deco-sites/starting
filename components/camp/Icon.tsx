const Icon = (props: { src: string; class: string; alt: string }) => {
  return (
    <div>
      <img src={props.src} class={props.class} alt={props.alt} />
    </div>
  );
};

export default Icon;
