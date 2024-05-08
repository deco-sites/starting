import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
import { asset } from "$fresh/runtime.ts";

export interface HeroProps {
  /** @title Logo */
  logo?: { src: ImageWidget; alt: string };

  links?: LinksProps[];
  title: string;
  description?: string;
  iconLabel?: AvailableIcons;
  cta?: CtaProps;
}

export interface CtaProps {
  text: string;
  href: string;

  /** @format html */
  infoBottom?: string;
}

export interface LinksProps {
  href: string;
  label: string;
  iconLabel?: AvailableIcons;
}

export default function HeroAndHeader(
  { logo, links, title, description, iconLabel, cta }: HeroProps,
) {
  return (
    <>
      {/* DESKTOP VERSION */}
      <div
        class="hidden md:block relative bg-[#0A2121] bg-no-repeat bg-repeat-x"
        style={{ backgroundImage: `url(${asset(`/backgroundTop.svg`)})` }}
      >
        <div class="lg:container flex flex-col md:mx-auto gap-4 pt-14 px-4">
          <div class="flex justify-between">
            <img src={logo?.src ?? ""} alt={logo?.alt ?? "Logo by deco"} />
            <div class="flex gap-4">
              {links?.map((
                { href, label, iconLabel }: LinksProps,
                index: number,
              ) => (
                <a
                  href={href}
                  key={index}
                  role="button"
                  class={`flex justify-center items-center text-[#0D1717] bg-[#FAFAFA] h-7 px-2 font-semibold`}
                >
                  {iconLabel && <Icon class="mr-2" id={iconLabel} size={16} />}
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <p class="text-[16vw] lg:text-[170px] xl:text-[215px] 2xl:text-[260px] text-[#FAFAFA] font-bold h-48 flex items-center">
              {title}
            </p>
            <div class="flex justify-between">
              {iconLabel && (
                <div>
                  <Icon id={iconLabel} width={139} height={139} />
                </div>
              )}
              {cta?.text && (
                <div class="py-24 px-14 relative z-[0] rounded-full">
                  <div class="flex flex-col gap-2 items-center">
                    <a
                      class="relative flex justify-center text-[#00FF80]"
                      href={cta?.href}
                    >
                      <button disabled class="relative w-[500px] h-[88px] bg-[#949E9E] flex justify-center items-center">
                        <div class="triangulo-top-right-mini md:triangulo-top-right absolute top-[-1px] right-[-1px]" />
                        <div class="triangulo-top-left-mini md:triangulo-top-left absolute top-[-1px] left-[-2px]" />
                        <div class="triangulo-bottom-right-mini md:triangulo-bottom-right absolute bottom-[-1px] right-[-1px]" />
                        <div class="triangulo-bottom-left-mini md:triangulo-bottom-left absolute bottom-[-1px] left-[-2px]" />
                        <span
                          style={{
                            width: "calc(100% - 8px)",
                            height: "calc(100% - 12px)",
                          }}
                          class="absolute z-0 font-bold text-[32px] text-[#fff] rounded-[30px] flex items-center justify-center"
                        >
                          {cta.text}
                        </span>
                      </button>
                      {/* Exemplo que não deu certo de utilização com o clip */}
                      {
                        /* <button class="relative flex justify-center items-center inner clipped p-4 hover:bg-[#FFF]">
                        <span
                          class="absolute w-full h-full bs-gradient-green z-0 font-bold text-[32px] text-[#000] rounded-[30px] flex items-center justify-center"
                        >
                          {cta.text}
                        </span>
                      </button> */
                      }
                    </a>
                    {cta?.infoBottom && (
                      <p
                        dangerouslySetInnerHTML={{ __html: cta?.infoBottom }}
                      />
                    )}
                  </div>
                </div>
              )}
              {description && (
                <div>
                  <p class="text-[#C9CFCF] text-[60px] font-medium">
                    {description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div
        class="block md:hidden relative bg-[#0A2121] bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${asset(`/backgroundTop.svg`)})` }}
      >
        <div class="flex flex-col gap-4 pt-10 px-4">
          <div class="flex justify-start">
            <img src={logo?.src ?? ""} alt={logo?.alt ?? "Logo by deco"} />
          </div>
          <div class="flex flex-col gap-4">
            <p class="text-[15vw] sm:text-[65px] text-[#FAFAFA] font-bold h-12 flex items-center">
              {title}
            </p>
            <div class="flex justify-between">
              {iconLabel && (
                <div>
                  <Icon id={iconLabel} width={40} height={40} />
                </div>
              )}
              {description && (
                <div>
                  <p class="text-[#C9CFCF] text-[22px] font-medium">
                    {description}
                  </p>
                </div>
              )}
            </div>
            <div class="flex justify-center">
              {cta?.text && (
                <div class="w-full flex justify-center">
                  <div class="t">
                    <div class="flex flex-col gap-2 text-center items-center">
                      <a class="relative flex justify-center" href={cta?.href}>
                        <button class="relative w-[280px] h-[50px] bg-[#949E9E] text-[#fff] flex justify-center items-center">
                          <div class="triangulo-top-right-mini md:triangulo-top-right absolute top-[-1px] right-[-1px]" />
                          <div class="triangulo-top-left-mini md:triangulo-top-left absolute top-[-1px] left-[-2px]" />
                          <div class="triangulo-bottom-right-mini md:triangulo-bottom-right absolute bottom-[-1px] right-[-1px]" />
                          <div class="triangulo-bottom-left-mini md:triangulo-bottom-left absolute bottom-[-1px] left-[-2px]" />
                          <span
                            style={{
                              width: "calc(100% - 8px)",
                              height: "calc(100% - 2px)",
                            }}
                            class="w-[calc(100% - 8px)] absolute top-[1px] z-1 font-bold text-[18px] rounded-[30px] flex justify-center items-center"
                          >
                            {cta.text}
                          </span>
                        </button>
                      </a>
                      {cta?.infoBottom && (
                        <p
                          class="text-center"
                          dangerouslySetInnerHTML={{ __html: cta?.infoBottom }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div class="flex flex-col justify-center items-center gap-4 mb-4">
            {links?.map((
              { href, label, iconLabel }: LinksProps,
              index: number,
            ) => (
              <a
                href={href}
                key={index}
                role="button"
                class={`flex justify-center items-center text-[#0D1717] bg-[#FAFAFA] p-2 font-semibold`}
              >
                {iconLabel && <Icon class="mr-2" id={iconLabel} size={16} />}
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
