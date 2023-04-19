const RegistrationSteps = (
  props: { step: string; key: number; class: string | undefined },
) => {
  return (
    <div>
      <div key={props.key}>
        <p
          class={props.class
            ? props.class
            : "text-[#113032] opacity-30 mb-[37px] text-xl"}
        >
          {props.step}
        </p>
      </div>
    </div>
  );
};

export default RegistrationSteps;
