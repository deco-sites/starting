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
            class={`flex flex-col px-4 lg:px-16 gap-6  ${
              props.alignment === "left" ? "text-left" : "text-center"
            }`}
          >
            {props.title &&
              (
                <h1
                  class={`text-[3rem] lg:text-[72px] font-semibold leading-[100%] tracking-[-1.44px 

                  ]
                  ${props.colorReverse ? "text-[#030507]" : "text-white"}
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
                  text-[16px] lg:text-[24px] leading-[150%] font-normal text-[#A1A1AA]
                  ${props.colorReverse ? "text-[#1F2937]" : "text-[#A1A1AA]"}
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
