export interface ButtonSwitcherProps {
  themeDark: boolean;
  switcherButton1: {
    name: string;
    href: string;
  };
  switcherButton2: {
    name: string;
    href: string;
  };
}

export default function ButtonSwitcher({ themeDark, switcherButton1, switcherButton2 }: ButtonSwitcherProps
) {
  const themeIsLigth = !themeDark;

  return (
    <>
      <div
        id="switcehr-page"
        class={(themeIsLigth ? "bg-[#CDE5D9]" : "bg-primary-dark") + " " +
          "w-full flex p-2 gap-2  rounded-full border-2 border-white border-opacity-5 mb-10 lg:(w-1/3)"}
      >
        <a
          class={(themeIsLigth
            ? "bg-dark-green text-[#f3fff9ca]"
            : "bg-primary-dark text-[#f3fff9ca]") +
            " " +
            "w-1/2 flex justify-center items-center rounded-full p-[9px] lg:p-[14px]  hover:shadow-button-hover-shadow transition-all duration-500"}
          href={switcherButton1?.href}
        >
          {switcherButton1?.name}
        </a>

        <a
          class={(themeIsLigth
            ? "bg-[#CDE5D9] text-dark-green"
            : "bg-white text-dark-green border-2 border-dark-green shadow-button-shadow") +
            " " +
            "w-1/2 flex justify-center items-center rounded-full p-[9px] lg:p-[14px] hover:shadow-button-hover-shadow transition-all duration-500"}
          href={switcherButton2?.href}
        >
          {switcherButton2?.name}
        </a>
      </div>
    </>
  );
}
