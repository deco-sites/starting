import Icon from "../Icon.tsx";

const MentorInfos = (
  props: { name: string; position: string; linkedin: string; github: string },
) => {
  return (
    <div class="bg-white">
      <div class="">
        <div class="text-center">
          <p class="mt-1 font-bold text-gray-900  sm:tracking-tight text-xl">
            {props.name}
          </p>
          <p class=" mt-1 mx-auto text-lg text-[#939393] ">
            {props.position}
          </p>
        </div>
        <div class="flex justify-center mt-2">
          <div>
            <a
              href={`https://linkedin.com/in/${props.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                src="/camp/linkedin-icon.png"
                class="w-8 h-8 mr-5"
                alt="linkedin Icon"
              />
            </a>
          </div>

          <div>
            <a
              href={`https://github.com/${props.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src="/camp/github-icon.png" class="w-9 h-9" alt="github Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorInfos;
