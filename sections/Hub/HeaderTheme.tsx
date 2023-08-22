import IconDeviceTablet from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/device-tablet.tsx";
import IconDeviceDesktop from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/device-desktop.tsx";
import IconDeviceMobile from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/device-mobile.tsx";
import IconArrowLeft from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/arrow-left.tsx";
import { useState } from "preact/hooks";
function HeaderTheme() {
  const [width, setWidth] = useState("");

  const onChangeWidth = (larg: string) => {
    setWidth(larg);
  };
  return (
    <div class="flex flex-col">
      <header class="w-full bg-headerTheme ">
        {/* mobile version */}''
        <nav class="flex flex-col px-6 h-[134px] md:hidden">
          <div class="flex items-center justify-between basis-1/2">
            <div class="flex flex-row items-center cursor-pointer">
              <IconArrowLeft class="w-6 h-6 text-white" />
              <span class="text-white text-[15px] font-normal leading-[20px] pl-1">
                Back
              </span>
            </div>
            <div>
              <a class="w-[100px] h-[36px px-3 py-2 bg-white text-black cursor-pointer hover:bg-gray-300 rounded-[4px] text-[15px] leading-[20px] font-semibold">
                Contact us
              </a>
            </div>
          </div>
          <div class=" flex flex-row items-center justify-between basis-1/2">
            <div>
              <div class="flex flex-row items-center justify-center w-[126px]">
                <div class="basis-1/3 flex items-center justify-center w-[42px] h-[38px]  border border-gray-400 rounded-tl-md rounded-bl-md cursor-pointer">
                  <IconDeviceMobile class="w-6 h-6 text-white" />
                </div>
                <div class="basis-1/3 flex items-center justify-center w-[42px] h-[38px]  border border-gray-400 cursor-pointer">
                  <IconDeviceDesktop class="w-6 h-6 text-white" />
                </div>
                <div class="basis-1/3 flex items-center justify-center w-[42px] h-[38px]  border border-gray-400 rounded-tr-md rounded-br-md cursor-pointer">
                  <IconDeviceTablet class="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div class="flex flex-row gap-2">
              <div
                className={`ml-2 flex h-[28px] w-[28px] items-center justify-center rounded-full hover:scale-[0.95] cursor-pointer bg-red-500`}
              >
              </div>
              <div
                className={`ml-2 flex h-[28px] w-[28px] items-center justify-center rounded-full hover:scale-[0.95] cursor-pointer bg-green-500`}
              >
              </div>
              <div
                className={`ml-2 flex h-[28px] w-[28px] items-center justify-center rounded-full hover:scale-[0.95] cursor-pointer bg-blue-500`}
              >
              </div>
            </div>
          </div>
        </nav>
        {/* desktop version */}
        <nav class="hidden px-6 h-[67px]  md:flex items-center justify-between">
          <div>
            <a class="flex flex-row items-center" href="">
              <IconArrowLeft class="w-6 h-6 text-white" />
              <span class="text-white text-[15px] font-normal leading-[20px] pl-1">
                Back
              </span>
            </a>
          </div>
          <div class="flex flex-row items-center justify-between gap-10">
            <div class="flex flex-row items-center justify-center w-[126px]">
              <div
                class={`basis-1/3 flex items-center justify-center w-[42px] h-[38px] border border-gray-400 rounded-tl-md rounded-bl-md cursor-pointer ${
                  width == "540px" ? "bg-white " : " "
                }`}
                onClick={() => onChangeWidth("540px")}
              >
                <IconDeviceMobile
                  class={`w-6 h-6  ${
                    width == "540px" ? "text-gray-800" : "text-white"
                  }`}
                />
              </div>
              <div
                class={`basis-1/3 flex items-center justify-center w-[42px] h-[38px]  border border-gray-400  cursor-pointer ${
                  width == "788px" ? "bg-white " : " "
                }`}
                onClick={() => onChangeWidth("788px")}
              >
                <IconDeviceTablet
                  class={`w-6 h-6 ${
                    width == "788px" ? "text-gray-800" : "text-white"
                  }`}
                />
              </div>
              <div
                class={`basis-1/3 flex items-center justify-center w-[42px] h-[38px]  border border-gray-400 cursor-pointer rounded-tr-md rounded-br-md ${
                  width == "1280px" ? "bg-white " : " "
                }`}
                onClick={() => onChangeWidth("1280px")}
              >
                <IconDeviceDesktop
                  class={`w-6 h-6  ${
                    width == "1280px" ? "text-gray-800" : "text-white"
                  }`}
                />
              </div>
            </div>
            <div class="flex flex-row gap-2">
              <div
                className={`ml-2 flex h-[28px] w-[28px] items-center justify-center rounded-full hover:scale-[0.95] cursor-pointer bg-red-500`}
              >
              </div>
              <div
                className={`ml-2 flex h-[28px] w-[28px] items-center justify-center rounded-full hover:scale-[0.95] cursor-pointer bg-green-500`}
              >
              </div>
              <div
                className={`ml-2 flex h-[28px] w-[28px] items-center justify-center rounded-full hover:scale-[0.95] cursor-pointer bg-blue-500`}
              >
              </div>
            </div>
          </div>
          <div>
            <a class="w-[100px] h-[36px px-3 py-2 bg-white text-black cursor-pointer hover:bg-gray-300 rounded-[4px] text-[15px] leading-[20px] font-semibold">
              Contact us
            </a>
          </div>
        </nav>
      </header>
      <div class="w-full h-full bg-lightGreen  ">
        <div class="h-[100vh] container" style={{ width: (width) }}>
          <iframe
            title="Embedded Content"
            className="h-full w-full"
            src="https://fashion.deco.site/"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderTheme;
