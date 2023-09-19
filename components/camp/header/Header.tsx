import HeaderText from "./HeaderText.tsx";
import PersonaAccordion from "./personaAccordion/PersonaAccordion.tsx";

export interface Props {
  hero?: {
    textOne?: string;
    textTwo?: string;
    textThree?: string;  
  }
  students?: string[];
  mentors?: string[];
  companys?: string[];
}

const Header = ({
  hero = {
    textOne: "",
    textTwo: "",
    textThree: ""
  },
  students = [],
  mentors = [],
  companys = [],
}: Props) => {  
    return (
    <div>
      <div class="flex justify-center mt-20 pt-20 mb-20 mx-10 relative">
        <div class="max-w-[922px]  relative">
          <HeaderText textOne={hero.textOne} textTwo={hero.textTwo} textThree={hero.textThree} />
          <div class="max-w-[533px] absolute right-12">
            <img src="/camp/green-risk.png" />
          </div>
        </div>
      </div>
      <div class="max-w-[1100px] flex justify-center m-auto">
        <PersonaAccordion students={students} mentors={mentors} companys={companys} />
      </div>
    </div>
  );
};

export default Header;
