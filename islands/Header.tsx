import { IS_BROWSER } from "https://deno.land/x/fresh@1.1.4/src/runtime/utils.ts";
import Slider from "site/components/ui/Slider2.tsx";
import SliderJS from "site/islands/SliderJS.tsx";
import { useSignal } from "@preact/signals";
import { useState } from "preact/hooks";
import { useId } from "site/sdk/useId.ts";
import { Dropdown } from "site/components/ui/Dropdown.tsx";
import GithubStargazes, {
  GithubStargazesProps,
} from "site/components/ui/GithubStargazers.tsx";

export interface Alert {
  github?: GithubStargazesProps;
  text: string;
}

export interface MenuLink {
  label: string;
  href: string;
  targetBlank?: boolean;
  nested?: MenuLink[];
}

export interface Props {
  alerts?: {
    mobile?: Alert[];
    desktop?: Alert[];
  };
  menuLinks: MenuLink[];
  idiom: string;
  pt: { label: string; url: string; selected?: boolean };
  eng: { label: string; url: string; selected?: boolean };
  pageInitial: string;
  mkt?: { label: string; url: string; selected?: boolean };
  dev?: { label: string; url: string; selected?: boolean };
  login?: { label: string; url: string };
  sign: { label: string; url: string };
  linkedinUrl: string;
  gitUrl: string;
  discordUrl: string;
}

function MobileMenuLink(
  { href, label, targetBlank, nested, ...props }: MenuLink,
) {
  const hasNested = nested && nested.length > 0;
  if (hasNested) {
    return (
      <li class="pt-4 grid items-center">
        <a
          href={href}
          target={targetBlank ? "_blank" : "_self"}
          class="block px-[24px]  font-normal text-[16px] leading-[19.36px] text-white-79"
        >
          {label}
        </a>
        <ul class="pl-[24px]">
          {nested.map((item) => <MobileMenuLink {...item} />)}
        </ul>
      </li>
    );
  }

  return (
    <li class={"grid items-center py-4"}>
      <a
        href={href}
        target={targetBlank ? "_blank" : "_self"}
        class="block px-[24px]  font-normal text-[16px] leading-[19.36px] text-white-79"
      >
        {label}
      </a>
    </li>
  );
}

function MenuLink({ href, label, targetBlank, nested, ...props }: MenuLink) {
  const open = useSignal(false);

  const setOpen = () => open.value = !open.value;

  if (nested && nested.length > 0) {
    return (
      <li
        class="relative h-full grid"
        {...props}
      >
        <Dropdown
          items={nested}
          value={label}
          onClick={setOpen}
          open={open.value}
        />
      </li>
    );
  }

  return (
    <li
      class="relative h-full grid hover:text-[#02F67C] text-transparent"
      {...props}
    >
      <a
        target={targetBlank ? "_blank" : "_self"}
        href={href}
        class="flex items-center h-full px-[24px] self-center font-normal text-[16px] bg-clip-text bg-linear-white-green bg-position-100 transition-colors ease-in duration-300 justify-center after:absolute after:w-full after:h-[4px] after:bg-transparent after:hover:bg-linear-transp-green-transp after:bottom-[-4px] after:z-20 after:bg-position-100 after:transition-colors after:ease-in after:duration-[0]"
        style="background-size: 200%;"
      >
        {label}
      </a>
    </li>
  );
}

export default function Header(props: Props) {
  const [open, setOpen] = useState(false);
  const urlPortuguese = useSignal("");
  const urlEnglish = useSignal("");
  const urlMarketers = useSignal("");
  const urlDevelopers = useSignal("");
  const showSwitcher = useSignal(false);
  const openSwitcher = useSignal(false);
  const openLanguage = useSignal(false);

  const currentLanguageLink = props.eng.selected ? "/en" : "/pt";

  if (IS_BROWSER) {
    urlPortuguese.value = window.location.pathname.replace("en", "pt");
    urlEnglish.value = window.location.pathname.replace("pt", "en");

    const urlPage = window.location.pathname;

    urlMarketers.value = urlPage.includes("en") ? "/en" : "/pt";
    urlDevelopers.value = urlPage.includes("en") ? "/en/dev" : "/pt/dev";

    if (urlPage.includes("dev") && props.mkt && props.dev) {
      props.pageInitial = urlPage.includes("en")
        ? "for developers"
        : "para desenvolvedores";
      props.mkt.selected = false;
      props.dev.selected = true;
    }

    const homePageHas = ["/en", "/pt", "/en/dev", "/pt/dev"];

    if (homePageHas.includes(urlPage)) {
      showSwitcher.value = true;
    }
  }

  const handleMenu = () => {
    if (openSwitcher.value == false) {
      openSwitcher.value = true;
    } else {
      openSwitcher.value = false;
    }
  };

  const handleLanguage = () => {
    if (openLanguage.value == false) {
      openLanguage.value = true;
    } else {
      openLanguage.value = false;
    }
  };

  const idMobile = useId();
  const idDesktop = useId();
  const alerts = props.alerts;

  return (
    <section class="bg-[#0A2121] fixed top-0 z-50 w-full">
      <style>
        {`
          .carousel {
            display: inline-flex;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        
        .carousel-item {
            box-sizing: content-box;
            display: flex;
            flex: none;
            scroll-snap-align: start;
        }
        
        .carousel-center .carousel-item {
            scroll-snap-align: center;
        }
        
        .carousel-end .carousel-item {
            scroll-snap-align: end;
        }

        .carousel::-webkit-scrollbar {
          display: none
        }
        `}
      </style>
      {alerts?.mobile && alerts?.mobile.length > 0 && (
        <div id={idMobile} class="lg:hidden">
          <Slider class="carousel carousel-center w-screen bg-black text-white font-normal text-sm py-3">
            {alerts.mobile.map((alert, index) => [
              <Slider.Item index={index} class="carousel-item">
                {alert.github ? <GithubStargazes {...alert.github} /> : null}
                <span
                  class="flex justify-center items-center w-screen gap-2"
                  dangerouslySetInnerHTML={{
                    __html: alert.text ? alert.text : "",
                  }}
                />
              </Slider.Item>,
            ])}
          </Slider>
          <SliderJS rootId={idMobile} interval={5 * 1e3} />
        </div>
      )}
      {alerts?.desktop && alerts?.desktop.length > 0 && (
        <div id={idDesktop} class="hidden lg:block">
          <Slider class="carousel carousel-center w-screen bg-black text-white font-normal text-sm py-3">
            {alerts.desktop.map((alert, index) => (
              <Slider.Item index={index} class="carousel-item">
                <span class="flex justify-center items-center w-screen gap-2">
                  {alert.github ? <GithubStargazes {...alert.github} /> : null}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: alert.text ? alert.text : "",
                    }}
                  />
                </span>
              </Slider.Item>
            ))}
          </Slider>
          <SliderJS rootId={idDesktop} interval={5 * 1e3} />
        </div>
      )}
      <nav class="flex flex-row justify-between items-center h-[63px] pb-[2px] max-w-screen-2xl m-auto relative">
        <div
          class="md:hidden w-[100vw] h-[4px] absolute top-[60px] transition ease-in-out duration-300 left-0"
          style="background-image: linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,255,128,1) 100%);"
        >
        </div>
        <ul class="h-full flex items-center">
          <li class="h-full">
            <a
              class="flex items-center h-full px-3 pb-[6px]"
              href="/"
            >
              <svg
                width="70"
                height="25"
                viewBox="0 0 70 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.4431 20.8319C56.8399 20.8319 56.3938 18.2622 57.2157 15.7614C57.8665 13.7738 59.4079 11.6839 61.7041 11.6839C64.4112 11.6839 64.6847 14.4246 63.8964 16.8231C63.2104 18.8795 61.6689 20.8319 59.4431 20.8319ZM58.6548 24.4968C63.1768 24.4968 67.2191 21.9959 68.8293 17.4739C70.5083 12.7121 68.6231 7.9502 62.4573 7.9502C57.5243 7.9502 53.7554 11.0331 52.3163 15.1106C50.7061 19.7014 52.4538 24.4968 58.6548 24.4968ZM43.6497 24.4968C45.431 24.4968 47.2474 24.1194 48.5139 23.5726C48.96 22.3397 48.9936 21.1405 48.6514 19.9412C47.7607 20.2834 46.5279 20.6272 45.2599 20.6272C41.8332 20.6272 41.5262 18.0927 42.2457 15.9341C43.034 13.6395 45.0888 11.7894 48.3444 11.7894C49.2014 11.7894 50.0233 11.9269 50.5366 12.2356C51.4273 11.0363 51.9405 9.83704 52.0445 8.6042C51.2913 8.26201 50.0233 7.9534 48.3795 7.9534C43.0356 7.9534 38.8206 11.0715 37.3144 15.3872C35.8752 19.4647 36.9722 24.5 43.6528 24.5L43.6497 24.4968ZM25.253 14.6645C26.1772 12.6081 27.6163 11.4105 29.5016 11.4105C31.1805 11.4105 31.454 12.3347 31.1805 13.0543C30.7696 14.0472 29.3641 14.6645 25.253 14.6645ZM26.7257 24.4968C28.4734 24.4968 30.9391 24.1546 32.9954 23.1264C33.3376 21.9959 33.304 20.8654 32.9267 19.6998C31.6251 20.3506 29.8086 20.7279 28.1648 20.7279C25.7327 20.7279 24.3959 19.9396 24.4311 17.9536C31.0766 18.1247 34.5369 16.9255 35.6674 13.9801C36.7979 10.9995 34.8455 7.9502 30.2195 7.9502C25.2866 7.9502 21.6552 11.4792 20.3184 15.2817C18.9145 19.324 19.8051 24.4968 26.7241 24.4968H26.7257ZM6.86752 24.4968C11.4247 24.4968 14.0167 22.4069 17.0309 16.0012C18.6746 12.4722 20.0802 9.01195 21.6904 5.58686L23.6092 6.20408C24.1225 6.37517 24.3975 6.06656 24.1577 5.58686L21.8279 0.824993C21.6568 0.482804 21.2794 0.447625 21.0396 0.551561L15.2496 2.74381C14.7699 2.9149 14.8034 3.36103 15.2831 3.49695L16.9957 4.04541C15.5917 7.23224 13.844 12.0277 12.4385 15.0418C10.8619 18.3998 10.0751 20.7631 7.40319 20.7631C4.73124 20.7631 4.28511 18.6732 5.41562 15.6926C6.71721 12.2324 8.90946 11.2042 11.4103 11.9237C12.0963 10.9643 12.6096 9.52523 12.8143 8.22363C12.0947 8.01736 11.2376 7.9502 10.5197 7.9502C6.47736 7.9502 2.46863 10.0401 0.824847 14.4246C-1.29864 20.0771 0.664946 24.4968 6.86592 24.4968H6.86752Z"
                  fill="#02F67C"
                />
              </svg>
            </a>
          </li>
          <li class="group cursor-pointer relative min-w-[150px]">
            {showSwitcher.value && (
              <>
                <div
                  class={`select-none flex gap-2 items-center ${
                    openSwitcher.value ? "md:border-[#06E474] md:border" : ""
                  }  border-[transparent] rounded-full border md:hover:border-[#2FD180] md:hover:border md:hover:rounded-full focus:outline-none md:transition md:ease-in-out md:duration-300`}
                >
                  <div
                    onClick={handleMenu}
                    class="z-10 font-normal text-[16px] md:px-3 md:py-1 text-[#fff] flex items-center justify-center gap-[5px]"
                  >
                    {props.pageInitial}
                    <svg
                      width="9"
                      height="5"
                      viewBox="0 0 9 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L3.84921 3.94218C4.2237 4.26317 4.7763 4.26317 5.15079 3.94218L8 1.5"
                        class="group-hover:border-[#55D695]"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div
                    onClick={handleMenu}
                    class={`${
                      openSwitcher.value
                        ? "block cursor-default w-[110vw] h-[110vh] absolute left-[-100px] top-[-20px]"
                        : "hidden"
                    }`}
                  >
                  </div>
                  <div
                    class={`${
                      openSwitcher.value ? "block" : "hidden"
                    } absolute top-[35px] left-0 mt-5 rounded border border-[#ffffff10]`}
                  >
                    <div class="flex flex-col w-[212px] bg-[#0A2121;] p-2 rounded">
                      <div class="flex flex-row items-center justify-between">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            window.history.pushState(
                              {},
                              "",
                              urlMarketers.value,
                            );
                            location.reload();
                          }}
                          class="flex flex-row items-center justify-between flex-grow p-2 hover:bg-mytheme-10 rounded"
                        >
                          <p class="font-sans not-italic font-normal text-[15px] text-[#2FD180] flex-grow">
                            {props?.mkt?.label}
                          </p>
                          <svg
                            width="15"
                            height="10"
                            viewBox="0 0 15 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class={props?.mkt?.selected ? "" : "hidden"}
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.2558 0.244078C14.5813 0.569515 14.5813 1.09715 14.2558 1.42259L5.92251 9.75592C5.59707 10.0814 5.06943 10.0814 4.744 9.75592L0.57733 5.58926C0.251893 5.26382 0.251893 4.73618 0.57733 4.41074C0.902767 4.08531 1.4304 4.08531 1.75584 4.41074L5.33325 7.98816L13.0773 0.244078C13.4028 -0.0813592 13.9304 -0.0813592 14.2558 0.244078Z"
                              fill="#2FD180"
                            />
                          </svg>
                        </a>
                      </div>
                      <div class="flex flex-row items-center justify-between">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            window.history.pushState(
                              {},
                              "",
                              urlDevelopers.value,
                            );
                            location.reload();
                          }}
                          class="flex flex-row items-center justify-between flex-grow p-2 hover:bg-mytheme-10 rounded"
                        >
                          <p class="font-sans not-italic font-normal text-[15px] text-[#06E474] flex-grow">
                            {props?.dev?.label}
                          </p>
                          <svg
                            width="15"
                            height="10"
                            viewBox="0 0 15 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class={props?.dev?.selected ? "" : "hidden"}
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.2558 0.244078C14.5813 0.569515 14.5813 1.09715 14.2558 1.42259L5.92251 9.75592C5.59707 10.0814 5.06943 10.0814 4.744 9.75592L0.57733 5.58926C0.251893 5.26382 0.251893 4.73618 0.57733 4.41074C0.902767 4.08531 1.4304 4.08531 1.75584 4.41074L5.33325 7.98816L13.0773 0.244078C13.4028 -0.0813592 13.9304 -0.0813592 14.2558 0.244078Z"
                              fill="#2FD180"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </li>
        </ul>
        <ul class="hidden lg:flex lg:flex-row h-full group">
          {props.menuLinks.map((link, index) => {
            return <MenuLink key={index} {...link} />;
          })}
          <div class="w-[100vw] h-[4px] absolute top-[59px] transition ease-in-out duration-300 left-0 bg-linear-header group-hover:bg-transparent group-hover:bg-none">
          </div>
        </ul>
        <ul class="lg:hidden px-3">
          <li class="grid items-center">
            <button class="focus:outline-none" onClick={() => setOpen(!open)}>
              <svg
                width="35"
                height="32"
                viewBox="0 0 39 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class={open ? "hidden" : ""}
              >
                <rect
                  x="19"
                  y="2"
                  width="17"
                  height="4"
                  rx="2"
                  fill="#06E474"
                />
                <rect
                  x="11"
                  y="14"
                  width="25"
                  height="4"
                  rx="2"
                  fill="#06E474"
                />
                <rect
                  x="3"
                  y="26"
                  width="33"
                  height="4"
                  rx="2"
                  fill="#06E474"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#06E474"
                width="35"
                height="32"
                class={open ? "" : "hidden"}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
          <div
            class={open
              ? "flex flex-col justify-between w-screen h-screen gap-[40px] fixed bg-[#0A2121] left-0 top-[107px] pt-[24px] pb-[100px] z-50 px-3 md:hidden"
              : "hidden"}
          >
            <ul class="flex flex-col divide-y divide-semi-white-13">
              {props.menuLinks.map((link) => {
                return <MobileMenuLink key={link.label} {...link} />;
              })}
            </ul>
            <ul class="flex flex-col">
              <li class="h-[50px] grid items-center">
                <a
                  href={urlPortuguese.value}
                  class="block px-6  font-normal text-[16px] leading-[19.36px] text-[#2FD180]"
                >
                  {props.pt.label}
                </a>
              </li>
              <li class="h-[50px] grid items-center">
                <a
                  href={urlEnglish.value}
                  class="block px-6  font-normal text-[16px] leading-[19.36px] text-[#2FD180]"
                >
                  {props.eng.label}
                </a>
              </li>
              <li class="h-[50px] grid items-center hidden">
                <a
                  href={props.sign.url}
                  class="block px-6  font-normal text-[16px] leading-[19.36px] text-[#2FD180]"
                >
                  {props.sign.label}
                </a>
              </li>
              {
                /* <li class="h-[50px] grid items-center">
                <a
                  href={props.login.url}
                  class="block px-6  font-normal text-[16px] leading-[19.36px] text-[#2FD180]"
                >
                  {props.login.label}
                </a>
              </li> */
              }
            </ul>
            <ul class="flex flex-row justify-center">
              <li class="h-[50px] grid items-center">
                <a
                  href={props.linkedinUrl}
                  target="_blank"
                  class="block px-3  font-normal text-[16px] leading-[19.36px] text-[#2FD180]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 2C2.44772 2 2 2.44772 2 3V15C2 15.5523 2.44772 16 3 16H15C15.5523 16 16 15.5523 16 15V3C16 2.44772 15.5523 2 15 2H3ZM0 3C0 1.34315 1.34315 0 3 0H15C16.6569 0 18 1.34315 18 3V15C18 16.6569 16.6569 18 15 18H3C1.34315 18 0 16.6569 0 15V3ZM5 4C5.55228 4 6 4.44772 6 5V5.01C6 5.56228 5.55228 6.01 5 6.01C4.44772 6.01 4 5.56228 4 5.01V5C4 4.44772 4.44772 4 5 4ZM5 7C5.55228 7 6 7.44772 6 8V13C6 13.5523 5.55228 14 5 14C4.44772 14 4 13.5523 4 13V8C4 7.44772 4.44772 7 5 7ZM8 13C8 13.5523 8.44772 14 9 14C9.55229 14 10 13.5523 10 13V10C10 9.73478 10.1054 9.48043 10.2929 9.29289C10.4804 9.10536 10.7348 9 11 9C11.2652 9 11.5196 9.10536 11.7071 9.29289C11.8946 9.48043 12 9.73478 12 10V13C12 13.5523 12.4477 14 13 14C13.5523 14 14 13.5523 14 13V10C14 9.20435 13.6839 8.44129 13.1213 7.87868C12.5587 7.31607 11.7957 7 11 7C10.5483 7 10.1071 7.10187 9.70711 7.29289C9.52614 7.11193 9.27614 7 9 7C8.44772 7 8 7.44772 8 8V13Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li class="h-[50px] grid items-center">
                <a
                  href={props.gitUrl}
                  target="_blank"
                  class="block px-3  font-normal text-[16px] leading-[19.36px] text-[#2FD180]"
                >
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.08129 1.32705C9.0029 0.894839 10.9966 0.89484 12.9183 1.32705C14.0203 0.639647 14.8877 0.314001 15.5373 0.172775C15.8984 0.0942913 16.1896 0.0733675 16.4126 0.0783227C16.5238 0.0807943 16.617 0.0896829 16.6924 0.100685C16.73 0.10618 16.763 0.112182 16.7915 0.11813C16.8057 0.121103 16.8187 0.124059 16.8306 0.126927L16.8476 0.131152L16.8555 0.133197L16.8592 0.134199L16.8611 0.134695C16.862 0.134941 16.8629 0.135187 16.5998 1.09995L16.8629 0.135187C17.1513 0.213848 17.3894 0.417425 17.5119 0.690121C17.99 1.75426 18.0941 2.94238 17.8181 4.06386C18.5792 5.04115 18.9985 6.24875 18.9998 7.49893V7.49995C18.9998 10.0067 18.2548 11.7424 16.9544 12.8684C16.0795 13.6259 15.0274 14.0402 13.9744 14.2752C14.013 14.5735 14.0076 14.9167 14.0028 15.2231C14.0012 15.3199 13.9998 15.4131 13.9998 15.5V19C13.9998 19.5522 13.5521 20 12.9998 20C12.4475 20 11.9998 19.5522 11.9998 19V15.5C11.9998 15.3671 12.0014 15.2451 12.003 15.137L12.0033 15.116C12.0048 15.0146 12.006 14.9293 12.006 14.85C12.006 14.6772 11.9995 14.5811 11.9884 14.5143C11.9793 14.4601 11.9681 14.4312 11.9531 14.4038C11.9351 14.3708 11.8941 14.3085 11.7927 14.2071C11.5204 13.9347 11.4286 13.5302 11.5568 13.1671C11.685 12.8039 12.0103 12.5467 12.3932 12.5056C13.7267 12.3628 14.8528 12.0426 15.6452 11.3565C16.3946 10.7076 16.9996 9.59361 16.9998 7.50097C16.9988 6.56572 16.6339 5.66756 15.9824 4.99662C15.7126 4.71884 15.6275 4.31029 15.7638 3.94788C15.9823 3.36693 16.0256 2.73981 15.8959 2.14233C15.4571 2.24792 14.7176 2.52324 13.6545 3.232C13.4172 3.39018 13.1237 3.43954 12.8477 3.36767C10.9802 2.8813 9.0193 2.8813 7.15181 3.36767C6.87585 3.43954 6.58234 3.39018 6.34507 3.232C5.28193 2.52324 4.54248 2.24792 4.10369 2.14233C3.97399 2.73981 4.01722 3.36693 4.23574 3.94788C4.37207 4.31029 4.28692 4.71884 4.01716 4.99662C3.36571 5.66745 3.00084 6.56543 2.99977 7.50052C2.99988 9.59345 3.60488 10.7075 4.35435 11.3565C5.14678 12.0426 6.27283 12.3628 7.60631 12.5056C7.98923 12.5467 8.31456 12.8039 8.44275 13.1671C8.57094 13.5302 8.4792 13.9347 8.20688 14.2071C8.0402 14.3737 7.99192 14.4961 7.96928 14.6138C7.93886 14.772 7.94333 14.9862 7.99205 15.3759C7.99719 15.4171 7.99977 15.4585 7.99977 15.5V16.977C8.00013 16.9925 8.00013 17.0079 7.99977 17.0233V19C7.99977 19.5522 7.55206 20 6.99977 20C6.44749 20 5.99977 19.5522 5.99977 19V18.2565C5.34544 18.3417 4.7551 18.3054 4.21791 18.1552C3.33724 17.9088 2.72422 17.3908 2.27017 16.8686C1.99028 16.5468 1.70748 16.1356 1.48789 15.8164C1.39387 15.6798 1.31143 15.5599 1.24579 15.4712C0.956042 15.0794 0.804789 14.985 0.717606 14.9593C0.187764 14.8035 -0.115429 14.2476 0.0404073 13.7178C0.196243 13.1879 0.752096 12.8847 1.28194 13.0406C2.04476 13.2649 2.531 13.8455 2.85376 14.2819C3.00791 14.4903 3.12957 14.6691 3.24159 14.8338C3.41557 15.0896 3.56631 15.3112 3.77938 15.5563C4.07532 15.8966 4.37481 16.1223 4.75664 16.2291C5.04069 16.3086 5.43671 16.3405 5.99977 16.2312V15.5611C5.9531 15.174 5.91721 14.7249 5.99909 14.2693C4.95474 14.0334 3.91278 13.6196 3.04519 12.8684C1.74473 11.7424 0.999773 10.0067 0.999773 7.49995V7.49893C1.00105 6.24874 1.42037 5.04115 2.18149 4.06386C1.90547 2.94238 2.0095 1.75426 2.48761 0.690121C2.61013 0.417425 2.84823 0.213848 3.13666 0.135187L3.39977 1.09995C3.13666 0.135187 3.13756 0.134941 3.13847 0.134695L3.1403 0.134199L3.14406 0.133197L3.15191 0.131152L3.1689 0.126927C3.18081 0.124059 3.19387 0.121103 3.2081 0.11813C3.23655 0.112182 3.26957 0.10618 3.30719 0.100685C3.38252 0.0896829 3.47571 0.0807943 3.58693 0.0783227C3.80992 0.0733675 4.10118 0.0942913 4.4622 0.172775C5.11184 0.314001 5.97923 0.639647 7.08129 1.32705Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li class="h-[50px] grid items-center">
                <a
                  href={props.discordUrl}
                  target="_blank"
                  class="block px-3  font-normal text-[16px] leading-[19.36px] text-[#2FD180]"
                >
                  <svg
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.89088 0.00596839C7.33738 -0.0431316 7.76183 0.211519 7.92866 0.628586L8.80028 2.80764C9.2026 2.76943 9.60036 2.74998 10.0002 2.74998C10.4 2.74998 10.7978 2.76943 11.2001 2.80764L12.0717 0.628586C12.2381 0.212642 12.6608 -0.0418983 13.1063 0.00561726C14.675 0.172951 16.4134 0.524172 18.0718 1.67945C18.2436 1.79913 18.3735 1.96973 18.4432 2.16717C19.4648 5.06199 20.0268 7.59672 20.2447 9.64417C20.4584 11.6525 20.354 13.3085 19.9286 14.3715C19.9183 14.3973 19.9069 14.4226 19.8945 14.4475C19.5228 15.1902 18.9608 16.0398 18.2572 16.7192C17.5684 17.3843 16.6228 18 15.5002 18C15.1458 18 14.8675 17.841 14.7332 17.7554C14.5688 17.6506 14.4162 17.5203 14.2831 17.3922C14.0142 17.1332 13.7388 16.7989 13.4935 16.4484C13.2469 16.0962 13.0103 15.6985 12.8313 15.3028C12.7927 15.2175 12.7545 15.1273 12.7184 15.0334C10.8875 15.3214 9.12659 15.3222 7.29599 15.0356C7.26721 15.1165 7.23689 15.1949 7.20609 15.27C7.04498 15.6629 6.83097 16.0596 6.60587 16.4126C6.38241 16.7631 6.12927 17.0999 5.8783 17.3626C5.75436 17.4924 5.60908 17.6272 5.44895 17.7369C5.31989 17.8254 5.03773 18 4.66818 18C3.56279 18 2.64592 17.3653 1.99189 16.702C1.31998 16.0206 0.785152 15.1706 0.432385 14.43C0.420828 14.4058 0.410253 14.3811 0.400686 14.3559C-0.000959605 13.3015 -0.101003 11.6546 0.10215 9.64919C0.309139 7.6059 0.84332 5.07432 1.81526 2.18149C1.88109 1.98554 2.00604 1.8148 2.1729 1.69278C3.75886 0.533021 5.34854 0.175572 6.89088 0.00596839ZM5.30889 14.6204C5.11571 14.5704 4.92128 14.5174 4.72547 14.4615C4.19444 14.3098 3.88695 13.7563 4.03867 13.2253C4.19039 12.6942 4.74388 12.3867 5.27492 12.5385C8.59536 13.4872 11.405 13.4872 14.7255 12.5385C15.2565 12.3867 15.81 12.6942 15.9617 13.2253C16.1134 13.7563 15.806 14.3098 15.2749 14.4615C15.088 14.5149 14.9024 14.5656 14.7179 14.6136C14.8296 14.837 14.9735 15.0751 15.1319 15.3015C15.3241 15.576 15.5175 15.8043 15.6704 15.9515C15.6813 15.962 15.6916 15.9717 15.7012 15.9806C16.0396 15.9174 16.4371 15.6966 16.8679 15.2805C17.3613 14.8041 17.7909 14.1718 18.0858 13.5922C18.319 12.9748 18.455 11.7265 18.2559 9.85579C18.0646 8.05776 17.5747 5.78526 16.6668 3.14715C15.7091 2.54525 14.6993 2.25478 13.6409 2.0907L13.2217 3.13869C13.7164 3.24941 14.2308 3.383 14.7749 3.53845C15.306 3.69018 15.6134 4.24366 15.4617 4.7747C15.31 5.30573 14.7565 5.61322 14.2255 5.4615C12.5227 4.97499 11.2468 4.74998 10.0002 4.74998C8.75358 4.74998 7.4777 4.97499 5.77492 5.4615C5.24388 5.61322 4.69039 5.30573 4.53867 4.7747C4.38695 4.24366 4.69444 3.69018 5.22547 3.53845C5.76955 3.383 6.28401 3.24941 6.77864 3.13869L6.36144 2.0957C5.3887 2.25794 4.49278 2.54328 3.60772 3.13C2.74205 5.7714 2.27459 8.04804 2.09197 9.85076C1.90202 11.7258 2.03124 12.9832 2.25657 13.6086C2.53837 14.1905 2.94779 14.8229 3.41598 15.2977C3.80445 15.6917 4.15353 15.8991 4.44205 15.9707C4.57768 15.8267 4.74862 15.6054 4.91949 15.3374C5.06924 15.1025 5.20505 14.8536 5.30889 14.6204ZM15.8082 16.0688C15.8071 16.0681 15.8057 16.0672 15.8041 16.0661C15.8193 16.0742 15.8212 16.0771 15.8082 16.0688ZM5.00019 8.99998C5.00019 7.89541 5.89562 6.99998 7.00019 6.99998C8.10476 6.99998 9.00019 7.89541 9.00019 8.99998C9.00019 10.1045 8.10476 11 7.00019 11C5.89562 11 5.00019 10.1045 5.00019 8.99998ZM11.0002 8.99998C11.0002 7.89541 11.8956 6.99998 13.0002 6.99998C14.1048 6.99998 15.0002 7.89541 15.0002 8.99998C15.0002 10.1045 14.1048 11 13.0002 11C11.8956 11 11.0002 10.1045 11.0002 8.99998Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </ul>
        <ul class="hidden lg:flex lg:flex-row lg:gap-4 px-3">
          <li class="group cursor-pointer md:relative">
            <Dropdown
              value={props.idiom}
              open={openLanguage.value}
              onClick={handleLanguage}
              variant="rounded"
              items={[
                {
                  label: props.pt.label,
                  href: urlPortuguese.value,
                  selected: props.pt.selected,
                },
                {
                  label: props.eng.label,
                  href: urlEnglish.value,
                  selected: props.eng.selected,
                },
              ]}
            />
          </li>
          {
            /* <li>
            <a
              href={props.login.url}
              class="block md:hover:border-[#02F67C] md:hover:border md:hover:text-[#fff] border-[transparent] border font-normal text-[16px] text-[#06E474] px-3 md:py-1 rounded-full md:transition md:ease-in-out md:duration-300"
            >
              {props.login.label}
            </a>
          </li> */
          }
          <li>
            <a
              href={props.sign.url}
              class="block md:hover:bg-[#0A2121] md:hover:border md:hover:text-[#fff] border-[#02F67C] border bg-[#02F67C] font-normal text-[16px] text-[#0A2121] px-3 md:py-1 rounded-full md:transition md:ease-in-out md:duration-300"
            >
              {props.sign.label}
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
