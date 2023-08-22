interface Props {
  title?: string;
  fontSize?: "Normal" | "Large";
  description?: string;
  alignment: "center" | "left";
  colorReverse?: boolean;
}

function Header(props: Props) {
  return (
    <>
      {props.title || props.description
        ? (
          <div
            class={`flex flex-col gap-2 ${
              props.alignment === "left" ? "text-left" : "text-center"
            }`}
          >
            {props.title &&
              (
                <h1
                  class={`text-[28px] font-semibold leading-8 
                  ${props.colorReverse ? "text-[#030507]" : "text-[#1F2937]"}
                  ${
                    props.fontSize === "Normal"
                      ? "text-[28px] font-semibold leading-8"
                      : "text-[28px] font-semibold leading-8 "
                  }
                `}
                >
                  {props.title}
                </h1>
              )}
            {props.description &&
              (
                <h2
                  class={`
                  text-[13px] lg:text-[15px] leading-[22px]  font-medium lg:font-normal text-[#1F2937] pl-1
                  ${props.colorReverse ? "text-[#1F2937]" : "text-[#1F2937]"}
                  ${
                    props.fontSize === "Normal"
                      ? "text-[13px] lg:text-[15px] leading-[22px] font-medium lg:font-normal"
                      : "text-[13px] lg:text-[15px] leading-[22px] font-medium lg:font-normal"
                  }
                `}
                >
                  {props.description}
                </h2>
              )}
          </div>
        )
        : null}
    </>
  );
}

export default Header;
