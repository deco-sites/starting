import MentorContainer from "./MentorContainer.tsx";
import MentorText from "./MentorText.tsx";

const MentorSection = () => {
  return (
    <div class="shadow border border-gray-200 max-w-[1100px] m-auto rounded-xl bg-white py-4">
      <div class="md:flex justify-around items-center mx-auto flex-1 block m-auto">
        <MentorText
          title="Conheça seu próximo"
          text1="Amplie seu network se aproximando dos líderes e experts da indústria de digital commerce."
          text2=" No Deco Camp você não está sozinho, tudo o que você produz é supervisionado por especialistas."
        />
        <div class="max-w-xl">
          <MentorContainer />
        </div>
      </div>
    </div>
  );
};

export default MentorSection;
