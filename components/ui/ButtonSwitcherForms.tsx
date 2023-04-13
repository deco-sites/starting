import { useState } from "preact/hooks";

export interface ButtonSwitcherFormsProps {
    switchB1:{
        name?: string;
        actionUrl: string;
    }
    switchB2:{
        name: string;
        actionUrl: string;
    }
  }
 
  export type selectedUrlToActionProps={
    selectedUrlToAction: string
  }
  
  export default function ButtonSwitcherForms({switcherButton1,switcherButton2, selectedUrlToAction }:{switcherButton1:ButtonSwitcherFormsProps, switcherButton2:ButtonSwitcherFormsProps, selectedUrlToAction:selectedUrlToActionProps}
  ) {

    const [active, setActive] = useState({
        btn1On: true,
        btn2On: false,
        selectedUrlToAction: switcherButton1?.switchB1?.actionUrl
    })

    selectedUrlToAction = active?.selectedUrlToAction || ' '
    
    return (
      <>
        <div
          id="switcehr-page"
          class={"w-full h-[62px] flex p-2 gap-2 bg-[#CDE5D9] rounded-full border-2 border-white border-opacity-5 mb-10 text-[3.9vw] md:text-[16px] lg:(w-1/3)"}
        >
          <button
            class={(active
              ? "bg-dark-green text-[#f3fff9ca]"
              : "bg-primary-dark text-[#f3fff9ca]") +
              " " +
              "w-1/2 flex justify-center items-center rounded-full p-[9px] lg:p-[14px]  hover:shadow-button-hover-shadow transition-all duration-500"
            }
            onClick={()=>setActive({
                btn1On: true,
                btn2On: false,
                selectedUrlToAction: switcherButton1?.switchB1?.actionUrl
            })}
          >
            {switcherButton1?.switchB1?.name}
          </button>
  
          <button
            class={(active
              ? "bg-[#CDE5D9] text-dark-green hover:shadow-button-white-hover-shadow "
              : "bg-white text-dark-green shadow-button-shadow hover:shadow-none") +
              " " +
              "w-1/2 flex justify-center items-center rounded-full p-[9px] lg:p-[14px] transition-all duration-500 border-none"}
            onClick={()=>setActive({
                btn1On: false,
                btn2On: true,
                selectedUrlToAction: switcherButton2?.switchB2?.actionUrl
            })}
          >
            {switcherButton2?.switchB2?.name}
          </button>
        </div>
      </>
    );
}