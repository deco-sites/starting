import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface FooterProps {
  labelIcon: AvailableIcons;
  href: string;
}

export interface CtaProps {
  text?: string;
  href?: string;

  /** @format html */
  infoBottom?: string;
}

export default function Footer(
  { links, cta }: { links: FooterProps[]; cta: CtaProps },
) {
  return (
    <div class="w-full bg-[#0A2121] py-5">
      <div>
        {cta?.text && (
          <div class="py-24 px-14 relative z-[0] rounded-full">
            <div class="flex flex-col gap-2 items-center">
              <a
                class="relative flex justify-center text-[#00FF80]"
                href={cta?.href}
              >
                <button class="relative w-[150px] h-[50px] md:w-[274px] md:h-[88px] bg-[#00FF80] md:hover:bg-[#FFF] flex justify-center items-center">
                  <div class="triangulo-top-right-mini md:triangulo-top-right absolute top-[-1px] right-[-1px]" />
                  <div class="triangulo-top-left-mini md:triangulo-top-left absolute top-[-1px] left-[-2px]" />
                  <div class="triangulo-bottom-right-mini md:triangulo-bottom-right absolute bottom-[-1px] right-[-1px]" />
                  <div class="triangulo-bottom-left-mini md:triangulo-bottom-left absolute bottom-[-1px] left-[-2px]" />
                  <span
                    style={{
                      width: "calc(100% - 8px)",
                      height: "calc(100% - 12px)",
                    }}
                    class="absolute md:bs-gradient-green z-0 font-bold text-[18px] md:text-[32px] text-[#000] rounded-[30px] flex items-center justify-center"
                  >
                    {cta.text}
                  </span>
                </button>
              </a>
              {cta?.infoBottom && (
                <p
                  dangerouslySetInnerHTML={{ __html: cta?.infoBottom }}
                />
              )}
            </div>
          </div>
        )}
      </div>
      <div class="xl:container xl:mx-auto mx-5 md:mx-10 flex flex-col md:flex-row items-center md:justify-between">
        <p class="flex items-center font-medium text-white">
          Página feita com 💚 utilizando{" "}
          <Icon
            class="ml-2"
            id="Logo"
            alt="Logo by deco"
            width={90}
            height={45}
          />
        </p>
        <div class="flex gap-4 md:gap-6 text-white pt-5 md:pt-0">
          {links?.map(({ labelIcon, href }, index) => (
            <a href={href ?? "#"}>
              <Icon id={labelIcon ?? ""} size={30} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
