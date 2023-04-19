import HeaderText from "./HeaderText.tsx";
import PersonaAccordion from "./personaAccordion/PersonaAccordion.tsx";

const Header = () => {
  return (
    <div>
      <div class="flex justify-center mt-20 pt-20 mb-20 mx-10 relative">
        <div class="max-w-[922px]  relative">
          <HeaderText text="para o comércio digital criando lojas de verdade." />
          <div class="max-w-[533px] absolute right-12">
            <img src="/camp/green-risk.png" />
          </div>
        </div>
      </div>
      <div class="max-w-[1100px] flex justify-center m-auto">
        <PersonaAccordion />
      </div>
    </div>
  );
};

export default Header;
