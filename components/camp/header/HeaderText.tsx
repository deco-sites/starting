const HeaderText = (props: { text: string }) => {
  return (
    <div className="max-w-[992px]">
      <div className="text-center">
        <p className="mt-1 text-3xl font-bold text-[#113032] sm:text-6xl md:text-7xl  lg:text-7xl">
          Se torne{" "}
          <span class="text-3xl font-bold text-[#2FD180] sm:text-6xl md:text-7xl sm:tracking-tight lg:text-7xl">
            web developer
          </span>{"   "}
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default HeaderText;
