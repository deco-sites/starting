const RegistrationStepsHeader = (props: { text: string }) => {
  return (
    <div className="max-w-7xl mx-auto py-14 sm:py-16 text-left">
      <p class="text-3xl md:text-4xl text-center font-semibold text-[#113032] tracking-wide w-full">
        {props.text}{"  "}
        <span class="font-bold text-[#2FD180]">
          Entre para comunidade!
        </span>
      </p>
    </div>
  );
};

export default RegistrationStepsHeader;
