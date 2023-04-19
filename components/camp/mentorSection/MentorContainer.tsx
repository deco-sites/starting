import ArrowLeft from "./ArrowLeft.tsx";
import ArrowRight from "./ArrowRight.tsx";
import MentorImg from "./MentorImg.tsx";
import MentorInfos from "./MentorInfos.tsx";
import { useState } from "preact/hooks";

const peopleTeam = [
  {
    img: "/camp/image 63.png",
    name: "Luciano Júnior",
    positon: "Software Engineer na deco.cx",
    linkedin: "lcnjnr",
    github: "lucis",
  },
];

const MentorContainer = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 1;
  const displayUser = peopleTeam.slice(
    pageNumber,
    pageNumber + userPerPage,
  ).map((user) => {
    return (
      <div class="flex flex-row items-center mx-auto">
        <div>
          <MentorImg img={user.img} />
          <MentorInfos
            name={user.name}
            position={user.positon}
            linkedin={user.linkedin}
            github={user.github}
          />
        </div>
      </div>
    );
  });

  const changePageLeft = () => {
    if (pageNumber != 0) {
      setPageNumber(pageNumber - 1);
    }
  };

  const changePageRight = () => {
    if (pageNumber < peopleTeam.length - 1) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div>
      <div class="flex items-center">
        {/* TODO: Remove after adding more mentors */}
        <div class="hidden">
          <button
            class="focus:outline-none mr-6 mb-20"
            onClick={() => changePageLeft()}
          >
            <ArrowLeft />
          </button>
        </div>
        {displayUser}
        <div class="hidden">
          <button
            class="focus:outline-none ml-6 mb-20"
            onClick={() => changePageRight()}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorContainer;
