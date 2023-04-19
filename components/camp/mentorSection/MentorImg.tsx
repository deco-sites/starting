import MentorInfos from "./MentorInfos.tsx";

const MentorImg = (props: { img: string }) => {
  return (
    <div>
      <div>
        <img src={props.img} class="rounded-full" />
      </div>
    </div>
  );
};

export default MentorImg;
