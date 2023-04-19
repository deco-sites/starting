const MentorText = (props: { title: string; text1: string; text2: string }) => {
  return (
    <div class="bg-white ">
      <div class="max-w-lg mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 text-[#113032] relative">
        <div class="absolute top-10 left-[138px]">
          <img src="/camp/green-riskCircular.png" />
        </div>
        <h2 class="mt-1 font-bold sm:tracking-tight text-4xl max-w-[321px] ">
          {props.title}{"  "}
          <span class="font-bold text-[#2FD180] ">
            mentor
          </span>
        </h2>
        <div class="max-w-[318px] mt-11 sm:mt-8">
          <p class="max-w-xl  mx-auto text-lg ">
            {props.text1}
          </p>
          <p class="max-w-xl mt-5 mx-auto text-lg ">
            {props.text2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentorText;
