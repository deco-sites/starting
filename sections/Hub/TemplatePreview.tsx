import IconArrowLeft from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/arrow-left.tsx";
import Icon, { AvailableIcons } from "deco-sites/starting/components/ui/Icon.tsx";
import { Template } from "deco-sites/starting/components/ui/Types.tsx";
import PageSpeed from "deco-sites/starting/components/ui/PageSpeed.tsx";

import { useState } from "preact/hooks";

export interface Props {
  info?: Template;
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
    info = {
      label: "Template",
      pageSpeed: 99,
      price: "Free",
      url: "http://www.deco.cx/"
    },
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

  function TemplateInfo() {
    return (
      <div class="flex gap-6 text-white">
          <div class="flex-auto flex gap-4">
            {info.pageSpeed && <PageSpeed score={info.pageSpeed} size={40} />}
            <div class="flex-auto flex flex-col">
                {info.label && (
                <h3 class="text-[15px] font-medium">
                    {info.label}
                </h3>
                )}
                {info.description && (
                <div class="text-[13px] text-neutral">
                    {info.description}
                </div>
                )}
            </div>
          </div>
          <div class="text-[15px] flex-none font-medium text-right text-[#f4f4f4]">
              {info.price}
          </div>
      </div>
    )
  }

  return (
    <div class="flex flex-col">
      <header class="w-full bg-headerTheme ">
        <nav class="px-4 md:px-6 py-2 flex justify-between items-center">
          <div class="flex items-center gap-6 md:w-5/12">
            <div>
              <a class="flex items-center pr-3 py-2 gap-2" href={buttonBack.href}>
                <IconArrowLeft class="w-6 h-6 text-white" />
                <span class="text-white text-[15px] font-normal">
                  { buttonBack.label }
                </span>
              </a>
            </div>

            <div class="hidden md:block flex-none">
              {TemplateInfo()}
            </div>
          </div>

          <div class="flex-none hidden lg:flex flex-row items-center justify-between gap-10">
            <div class="flex flex-row items-center justify-center w-[126px]">
              {
                devices.map((device, i) => {
                  return (
                    <div
                      title={device.name}
                      class={`basis-1/3 flex items-center justify-center w-[42px] h-[38px] border border-[#525252] cursor-pointer
                        ${ width == device.width ? "bg-white" : "hover:bg-gray-800" }
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

          <div class="md:w-5/12 flex justify-end">
            <a href={buttonCta.href} class="px-3 py-2 bg-white hover:bg-gray-300 rounded-[4px] text-[15px] font-semibold">
            { buttonCta.label }
            </a>
          </div>
        </nav>
        <div class="md:hidden px-4 md:px-6 py-3">
          {TemplateInfo()}
        </div>
      </header>
      <div class="w-full h-full bg-headerTheme">
        <div class="h-[calc(100vh_-_195px)] md:h-[calc(100vh_-_58px)] mx-auto transition-width duration-200" style={{ width: (width) }}>
          <iframe
            title="Embedded Content"
            className="h-full w-full"
            src={info.url}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default TemplatePreview;
