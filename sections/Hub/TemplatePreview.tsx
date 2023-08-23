import IconArrowLeft from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/arrow-left.tsx";
import Icon, { AvailableIcons } from "deco-sites/starting/components/ui/Icon.tsx";

import { useState } from "preact/hooks";

export interface Props {
  url: string;
  buttonBack?: {
    label?: string;
    href?: string;
  };
  buttonCta?: {
    label?: string;
    href?: string;
  };
}

function TemplatePreview(props: Props) {
  const {
    url = "http://www.google.com",
    buttonBack = {
      label: "Templates",
      href: "/en/hub/"
    },
    buttonCta = {
      label: "Try it now for free",
      href: "https://deco.cx/admin/new?team=1&teamName=deco.cx"
    }
  } = props

  const [width, setWidth] = useState("100%");
  const devices = [
    {
      name: "Mobile",
      width: "412px",
      icon: "DeviceMobile" as AvailableIcons
    } , {
      name: "Tablet",
      width: "900px",
      icon: "DeviceTablet" as AvailableIcons
    } , {
      name: "Desktop",
      width: "100%",
      icon: "DeviceDesktop" as AvailableIcons
    }
  ]

  const onChangeWidth = (larg: string) => {
    setWidth(larg);
  };
  return (
    <div class="flex flex-col">
      <header class="w-full bg-headerTheme ">
        <nav class="px-6 py-2 flex justify-between items-center">
          <div>
            <a class="flex items-center pr-3 py-2 gap-2" href={buttonBack.href}>
              <IconArrowLeft class="w-6 h-6 text-white" />
              <span class="text-white text-[15px] font-normal">
                { buttonBack.label }
              </span>
            </a>
          </div>
          <div class="flex flex-row items-center justify-between gap-10">
            <div class="flex flex-row items-center justify-center w-[126px]">
              {
                devices.map((device, i) => {
                  return (
                    <div
                      title={device.name}
                      class={`basis-1/3 flex items-center justify-center w-[42px] h-[38px] border border-[#525252] cursor-pointer
                        ${ width == device.width ? "bg-white " : " " }
                        ${ i === 0 ? "rounded-tl-md rounded-bl-md" : "border-l-0" }
                        ${ i === devices.length - 1 ? "rounded-tr-md rounded-br-md" : "" }
                      }`}
                      onClick={() => onChangeWidth(device.width)}
                    >
                      <div
                        class={`${
                          width == device.width ? "text-gray-800" : "text-gray-200"
                        }`}
                      >
                        <Icon id={device.icon} width={22} height={22} strokeWidth={2} />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div>
            <a href={buttonCta.href} class="w-[100px] h-[36px px-3 py-2 bg-white text-black cursor-pointer hover:bg-gray-300 rounded-[4px] text-[15px] leading-[20px] font-semibold">
            { buttonCta.label }
            </a>
          </div>
        </nav>
      </header>
      <div class="w-full h-full bg-lightGreen">
        <div class="h-[calc(100vh_-_54px)] mx-auto transition-width duration-200" style={{ width: (width) }}>
          <iframe
            title="Embedded Content"
            className="h-full w-full"
            src={url}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default TemplatePreview;
