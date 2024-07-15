import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { Dropdown } from "site/islands/Home/Dropdown.tsx";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Alert {
  label: string;
}

export interface ColumnMenu {
  icon?: AvailableIcons;
  title?: string;
  nested?: MenuLink[];
}

export interface MenuLink {
  label: string;
  href: string;
  targetBlank?: boolean;
  columns?: ColumnMenu[];
  tag?: {
    color: string;
    description: string;
  };
}

export interface Props {
  idiom: string;
  logo: ImageWidget;
  menuLinks: MenuLink[];
  sign: { label: string; url: string };
  demo?: { label: string; url: string };
  login: { label: string; url: string };
  linkedinUrl: string;
  gitUrl: string;
  discordUrl: string;
  alerts?: {
    mobile?: Alert[];
    desktop?: Alert[];
  };
}

function MobileMenuDropdown({ icon, nested, title }: ColumnMenu) {
  return (
    <>
      {icon && title && (
        <li>
          <input
            id={title.toLocaleLowerCase()}
            name={title.toLocaleLowerCase()}
            type="checkbox"
            class="peer"
            hidden
          />
          <div class="pb-[24px] flex items-center gap-2 text-white cursor-pointer hover:text-[#02F67C] transition duration-200 ease-in-out">
            <Icon id={icon} size={25} />
            <p class="font-bold text-[16px]">{title}</p>
            <Icon
              id={"ChevronDown"}
              width={15}
              height={15}
              strokeWidth={"3"}
              class={"peer-checked:rotate-180"}
            />
          </div>
          <div class={`hidden peer-checked:flex pl-[10px] flex-col pb-[30px]`}>
            {nested?.map((item) => (
              <li class={"grid items-center py-2"}>
                <a
                  href={item.href}
                  target={item?.targetBlank ? "_blank" : "_self"}
                  class="block px-[24px]  font-normal text-[16px] leading-[19.36px] text-white hover:text-[#02F67C] transition duration-200 ease-in-out"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </div>
        </li>
      )}
    </>
  );
}

function MobileMenuLink({ href, label, targetBlank, columns }: MenuLink) {
  const hasNested = columns && columns.length > 0;
  if (hasNested) {
    return (
      <li class="py-4 grid items-center">
        <ul class="">
          {columns.map((col) => {
            if (col?.icon && col?.title) {
              return <MobileMenuDropdown {...col} />;
            } else {
              return col?.nested?.map((item) => (
                <li class={"grid items-center py-2"}>
                  <a
                    href={item.href}
                    target={item?.targetBlank ? "_blank" : "_self"}
                    class="block pr-[24px]  font-normal text-[16px] leading-[19.36px] text-white hover:text-[#02F67C] transition duration-200 ease-in-out"
                  >
                    {item.label}
                  </a>
                </li>
              ));
            }
          })}
        </ul>
      </li>
    );
  }

  return (
    <li class={"grid items-center py-3 md:py-4"}>
      <a
        href={href}
        target={targetBlank ? "_blank" : "_self"}
        class="block pr-[24px]  font-normal text-[16px] leading-[19.36px] text-white"
      >
        {label}
      </a>
    </li>
  );
}

function MenuLink({ href, label, targetBlank, columns, ...props }: MenuLink) {
  if (columns && columns.length > 0) {
    return (
      <li
        class="relative h-full grid text-white hover:text-[#02F67C] transition duration-200 ease-in-out"
        {...props}
      >
        <Dropdown columns={columns} value={label} />
      </li>
    );
  }

  return (
    <li
      class="relative h-full grid text-white hover:text-[#02F67C] transition duration-200 ease-in-out"
      {...props}
    >
      <a
        target={targetBlank ? "_blank" : "_self"}
        href={href}
        class="flex items-center h-full self-center font-normal text-[16px] bg-clip-text bg-linear-white-green bg-position-100 justify-center"
        style="background-size: 200%;"
      >
        {label}
      </a>
    </li>
  );
}

export default function Header({ menuLinks, ...props }: Props) {
  const stars = useSignal("-");
  const members = useSignal("-");

  const retrieveGithubStars = async () => {
    const response = await fetch("https://api.github.com/repos/deco-cx/deco");
    const repo: { stargazers_count: string } = await response.json();
    stars.value = repo.stargazers_count;
  };

  const retrieveDiscordMemberCount = async () => {
    const response = await fetch(
      "https://discord.com/api/v9/invites/hBUs29me8Z?with_counts=true&with_expiration=true",
    );
    const discordData: { approximate_member_count: string } = await response
      .json();
    members.value = discordData.approximate_member_count;
  };

  useEffect(() => {
    retrieveGithubStars();
    retrieveDiscordMemberCount();
  }, []);

  return (
    <section class="lg:container fixed z-50 w-full top-0 lg:w-full left-1/2 transform -translate-x-1/2 py-4 lg:py-8 before:absolute before:backdrop-blur-2xl lg:before:backdrop-blur-none before:w-full  before:h-full before:top-0 before:left-0">
      <nav class="flex flex-row items-center max-w-screen-2xl m-auto relative justify-between px-4 md:px-8 z-50">
        <a class="flex items-center h-full lg:pl-8 pb-[6px]" href="/">
          <Image
            src={props.logo}
            alt={props.logo}
            width={120}
            class="w-32"
          />
        </a>
        <div class="hidden relative lg:flex lg:flex-row items-center h-full px-3 py-1.5 rounded-xl bg-[#0035184d] border border-[#FFFFFF33] gap-14 justify-between before:absolute lg:before:backdrop-blur-2xl lg:before:w-full  before:h-full before:top-0 before:left-0 before:rounded-xl">
          <ul class="flex items-center gap-10">
            {menuLinks.map((link, index) => {
              return <MenuLink key={index} {...link} />;
            })}
          </ul>
          <ul class="flex gap-6 align-end">
            <li class="group relative grid hover:text-[#02F67C] text-transparent">
              <a
                target={"_blank"}
                href={props.gitUrl}
                class="group flex items-center text-white text-[12px] rounded-md border border-[#FFFFFF14] hover:border-[#FFFFFF30] justify-center"
                style="background-size: 200%;"
              >
                <div class="flex items-center gap-1 rounded-l-md bg-[#23413B97] px-3 py-[3px] h-full">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-2.5 h-2.5"
                  >
                    <path
                      d="M6 0.25C2.685 0.25 0 2.89 0 6.146C0 8.7515 1.719 10.961 4.1025 11.74C4.4025 11.7955 4.5125 11.613 4.5125 11.4565C4.5125 11.3165 4.5075 10.9455 4.505 10.454C2.836 10.8095 2.484 9.663 2.484 9.663C2.211 8.9825 1.8165 8.8005 1.8165 8.8005C1.273 8.435 1.8585 8.4425 1.8585 8.4425C2.461 8.4835 2.7775 9.05 2.7775 9.05C3.3125 9.9515 4.182 9.691 4.525 9.5405C4.579 9.159 4.7335 8.8995 4.905 8.752C3.5725 8.6045 2.172 8.0975 2.172 5.8385C2.172 5.195 2.4045 4.669 2.7895 4.2565C2.722 4.1075 2.5195 3.508 2.842 2.696C2.842 2.696 3.3445 2.538 4.492 3.3005C4.972 3.1695 5.482 3.1045 5.992 3.1015C6.502 3.1045 7.012 3.1695 7.492 3.3005C8.632 2.538 9.1345 2.696 9.1345 2.696C9.457 3.508 9.2545 4.1075 9.1945 4.2565C9.577 4.669 9.8095 5.195 9.8095 5.8385C9.8095 8.1035 8.407 8.602 7.072 8.747C7.282 8.924 7.477 9.2855 7.477 9.838C7.477 10.627 7.4695 11.261 7.4695 11.4525C7.4695 11.607 7.5745 11.7915 7.882 11.7325C10.2825 10.9585 12 8.7475 12 6.146C12 2.89 9.3135 0.25 6 0.25Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span class="font-bold">Star us</span>
                </div>
                <div class="flex items-center gap-1 rounded-r-md h-full px-3 py-[3px] bg-[#0A1F1F90] opacity-70 group-hover:opacity-100">
                  <svg
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-2.5 h-2.5"
                  >
                    <path
                      d="M13.2535 5.42745C13.202 5.28795 13.1285 5.17782 13.033 5.08972C12.9374 5.00895 12.7978 4.95022 12.6288 4.92819L9.0643 4.61249L7.68996 1.35263C7.62382 1.19845 7.52828 1.09566 7.40334 1.0149C7.27105 0.941477 7.13876 0.912109 7.00647 0.912109C6.87418 0.912109 6.74189 0.941477 6.6096 1.0149C6.48466 1.09566 6.38912 1.19845 6.32297 1.35263L4.94864 4.61249L1.38418 4.92819C1.21515 4.95022 1.07551 5.00895 0.979964 5.08972C0.884422 5.17782 0.810928 5.28795 0.759483 5.42745C0.708037 5.55961 0.700687 5.6991 0.730085 5.8386C0.759483 5.9781 0.840326 6.10291 0.965266 6.21304L3.66249 8.54781L2.85406 12.0132C2.81731 12.1748 2.83201 12.3143 2.89081 12.4464C2.9496 12.5712 3.03779 12.6814 3.14804 12.7695C3.25828 12.8502 3.38322 12.9016 3.53755 12.909C3.67719 12.9236 3.82418 12.8869 3.95647 12.7988L7.00647 10.9633L10.0565 12.7988C10.1888 12.8869 10.3284 12.9236 10.4827 12.909C10.6224 12.9016 10.7547 12.8502 10.8649 12.7695C10.9751 12.6814 11.0633 12.5712 11.1221 12.4464C11.1809 12.3143 11.1956 12.1748 11.1589 12.0132L10.3504 8.54781L13.055 6.21304C13.1726 6.10291 13.2535 5.9781 13.2829 5.8386C13.3122 5.6991 13.3049 5.55961 13.2535 5.42745ZM8.71153 8.01184L9.32153 10.655L7.00647 9.2453L4.69141 10.6403L5.30141 8.01184L3.25828 6.22773L5.94081 5.99278L7.00647 3.51118L8.07213 6.00747L10.7547 6.24975L8.71153 8.01184Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span class="mt-0.5 font-bold">{stars.value}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <ul class="ml-auto flex flex-row items-center lg:hidden gap-4 z-[51]">
          <li>
            <a
              id="bt-click-signup"
              href={props.demo?.url}
              class="flex items-center hover:shadow-[0_0_40px_0_rgba(2,246,124,0.3)] md:w-auto transition-all duration-300 ease-out border-[#02F67C] border-2 text-base text-[#0A2121] bg-[#02F67C] md:hover:bg-[#2FD180] font-medium text-[16px] max-h-[37px] px-4 py-2 rounded-lg md:transition md:ease-in-out md:duration-300"
            >
              {props.demo?.label}
            </a>
          </li>
        </ul>
        <div class="ml-3 lg:hidden">
          <label
            for="header-slider-button"
            class="grid items-center cursor-pointer transition duration-300 ease-in-out"
          >
            <input
              id="header-slider-button"
              name="header-slider-button"
              class="peer/header-icon"
              type="checkbox"
              hidden
            />
            <svg
              width="35"
              height="32"
              viewBox="0 0 39 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class={"peer-checked/header-icon:hidden z-[51]"}
            >
              <rect x="3" y="2" width="33" height="4" rx="2" fill="#ffffff" />
              <rect x="3" y="14" width="33" height="4" rx="2" fill="#ffffff" />
              <rect x="3" y="26" width="33" height="4" rx="2" fill="#ffffff" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#ffffff"
              width="35"
              height="32"
              class={"hidden peer-checked/header-icon:block z-[51]"}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <div
              class={"hidden peer-checked/header-icon:flex peer-checked/header-icon:bg-red flex-col w-full h-screen overflow-auto gap-[40px] fixed bg-[#03080680] backdrop-blur-3xl left-0 top-0 pb-[80px] z-50 px-8 lg:hidden pt-24"}
            >
              <ul class="flex flex-col">
                {menuLinks &&
                  menuLinks.length > 0 &&
                  menuLinks.map((link, index) => {
                    return (
                      <div>
                        <MobileMenuLink key={link.label} {...link} />
                        {menuLinks.length - 1 > index && <hr />}
                      </div>
                    );
                  })}
              </ul>
              <ul class="flex flex-row justify-between items-center mt-auto">
                <ul class="flex flex-row justify-center gap-8 w-full items-center">
                  <li>
                    <a
                      href={props.sign.url}
                      id="bt-click-signup"
                      class="flex items-center text-[#b6b6b6] md:hover:text-[#fff] font-medium text-[16px] px-4 py-2 transition ease-in-out duration-300"
                    >
                      {props.sign.label}
                    </a>
                  </li>
                  <li class="group relative grid hover:text-[#02F67C] text-transparent">
                    <a
                      target={"_blank"}
                      href={props.gitUrl}
                      class="flex items-center gap-2 opacity-80 text-white hover:text-[#02F67C] text-[16px] transition ease-in duration-200 justify-center"
                      style="background-size: 200%;"
                    >
                      <svg
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.08129 1.32705C9.0029 0.894839 10.9966 0.89484 12.9183 1.32705C14.0203 0.639647 14.8877 0.314001 15.5373 0.172775C15.8984 0.0942913 16.1896 0.0733675 16.4126 0.0783227C16.5238 0.0807943 16.617 0.0896829 16.6924 0.100685C16.73 0.10618 16.763 0.112182 16.7915 0.11813C16.8057 0.121103 16.8187 0.124059 16.8306 0.126927L16.8476 0.131152L16.8555 0.133197L16.8592 0.134199L16.8611 0.134695C16.862 0.134941 16.8629 0.135187 16.5998 1.09995L16.8629 0.135187C17.1513 0.213848 17.3894 0.417425 17.5119 0.690121C17.99 1.75426 18.0941 2.94238 17.8181 4.06386C18.5792 5.04115 18.9985 6.24875 18.9998 7.49893V7.49995C18.9998 10.0067 18.2548 11.7424 16.9544 12.8684C16.0795 13.6259 15.0274 14.0402 13.9744 14.2752C14.013 14.5735 14.0076 14.9167 14.0028 15.2231C14.0012 15.3199 13.9998 15.4131 13.9998 15.5V19C13.9998 19.5522 13.5521 20 12.9998 20C12.4475 20 11.9998 19.5522 11.9998 19V15.5C11.9998 15.3671 12.0014 15.2451 12.003 15.137L12.0033 15.116C12.0048 15.0146 12.006 14.9293 12.006 14.85C12.006 14.6772 11.9995 14.5811 11.9884 14.5143C11.9793 14.4601 11.9681 14.4312 11.9531 14.4038C11.9351 14.3708 11.8941 14.3085 11.7927 14.2071C11.5204 13.9347 11.4286 13.5302 11.5568 13.1671C11.685 12.8039 12.0103 12.5467 12.3932 12.5056C13.7267 12.3628 14.8528 12.0426 15.6452 11.3565C16.3946 10.7076 16.9996 9.59361 16.9998 7.50097C16.9988 6.56572 16.6339 5.66756 15.9824 4.99662C15.7126 4.71884 15.6275 4.31029 15.7638 3.94788C15.9823 3.36693 16.0256 2.73981 15.8959 2.14233C15.4571 2.24792 14.7176 2.52324 13.6545 3.232C13.4172 3.39018 13.1237 3.43954 12.8477 3.36767C10.9802 2.8813 9.0193 2.8813 7.15181 3.36767C6.87585 3.43954 6.58234 3.39018 6.34507 3.232C5.28193 2.52324 4.54248 2.24792 4.10369 2.14233C3.97399 2.73981 4.01722 3.36693 4.23574 3.94788C4.37207 4.31029 4.28692 4.71884 4.01716 4.99662C3.36571 5.66745 3.00084 6.56543 2.99977 7.50052C2.99988 9.59345 3.60488 10.7075 4.35435 11.3565C5.14678 12.0426 6.27283 12.3628 7.60631 12.5056C7.98923 12.5467 8.31456 12.8039 8.44275 13.1671C8.57094 13.5302 8.4792 13.9347 8.20688 14.2071C8.0402 14.3737 7.99192 14.4961 7.96928 14.6138C7.93886 14.772 7.94333 14.9862 7.99205 15.3759C7.99719 15.4171 7.99977 15.4585 7.99977 15.5V16.977C8.00013 16.9925 8.00013 17.0079 7.99977 17.0233V19C7.99977 19.5522 7.55206 20 6.99977 20C6.44749 20 5.99977 19.5522 5.99977 19V18.2565C5.34544 18.3417 4.7551 18.3054 4.21791 18.1552C3.33724 17.9088 2.72422 17.3908 2.27017 16.8686C1.99028 16.5468 1.70748 16.1356 1.48789 15.8164C1.39387 15.6798 1.31143 15.5599 1.24579 15.4712C0.956042 15.0794 0.804789 14.985 0.717606 14.9593C0.187764 14.8035 -0.115429 14.2476 0.0404073 13.7178C0.196243 13.1879 0.752096 12.8847 1.28194 13.0406C2.04476 13.2649 2.531 13.8455 2.85376 14.2819C3.00791 14.4903 3.12957 14.6691 3.24159 14.8338C3.41557 15.0896 3.56631 15.3112 3.77938 15.5563C4.07532 15.8966 4.37481 16.1223 4.75664 16.2291C5.04069 16.3086 5.43671 16.3405 5.99977 16.2312V15.5611C5.9531 15.174 5.91721 14.7249 5.99909 14.2693C4.95474 14.0334 3.91278 13.6196 3.04519 12.8684C1.74473 11.7424 0.999773 10.0067 0.999773 7.49995V7.49893C1.00105 6.24874 1.42037 5.04115 2.18149 4.06386C1.90547 2.94238 2.0095 1.75426 2.48761 0.690121C2.61013 0.417425 2.84823 0.213848 3.13666 0.135187L3.39977 1.09995C3.13666 0.135187 3.13756 0.134941 3.13847 0.134695L3.1403 0.134199L3.14406 0.133197L3.15191 0.131152L3.1689 0.126927C3.18081 0.124059 3.19387 0.121103 3.2081 0.11813C3.23655 0.112182 3.26957 0.10618 3.30719 0.100685C3.38252 0.0896829 3.47571 0.0807943 3.58693 0.0783227C3.80992 0.0733675 4.10118 0.0942913 4.4622 0.172775C5.11184 0.314001 5.97923 0.639647 7.08129 1.32705Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span class="h-6 font-bold">{stars.value}</span>
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </label>
        </div>
        <ul class="hidden lg:flex lg:flex-row gap-4 items-center">
          {
            /* <li>
            <a
              href={props.login.url}
              class="flex gap-2 items-center text-[#02F67C] bg-[#113032] md:hover:text-[#fff] border-[#113032] border hover:bg-transparent font-medium text-[16px] max-h-[37px] px-4 py-2 rounded-full md:transition md:ease-in-out md:duration-300"
            >
              {props.login.label}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  opacity="0.2"
                  d="M10.7372 5.59956L8.4544 7.56831L9.1519 10.5116C9.17034 10.5872 9.16594 10.6666 9.13927 10.7398C9.11259 10.8129 9.06483 10.8765 9.00202 10.9225C8.93921 10.9685 8.86417 10.9949 8.78639 10.9982C8.70861 11.0016 8.63158 10.9818 8.56503 10.9414L6.00003 9.36362L3.43503 10.941C3.36847 10.9814 3.29144 11.0011 3.21366 10.9978C3.13588 10.9944 3.06084 10.968 2.99803 10.922C2.93523 10.876 2.88746 10.8124 2.86079 10.7393C2.83411 10.6662 2.82971 10.5868 2.84815 10.5111L3.54565 7.56784L1.26284 5.59909C1.20463 5.54798 1.16267 5.48095 1.14213 5.40627C1.12159 5.33158 1.12337 5.25252 1.14725 5.17884C1.17113 5.10515 1.21606 5.04008 1.2765 4.99164C1.33695 4.9432 1.41025 4.91353 1.48737 4.90628L4.48315 4.66253L5.63721 1.86878C5.66663 1.7967 5.71686 1.73502 5.78147 1.6916C5.84609 1.64819 5.92218 1.625 6.00003 1.625C6.07787 1.625 6.15396 1.64819 6.21858 1.6916C6.2832 1.73502 6.33342 1.7967 6.36284 1.86878L7.5169 4.66253L10.5127 4.90628C10.5899 4.91344 10.6633 4.94309 10.7239 4.99156C10.7844 5.04002 10.8294 5.10518 10.8533 5.17896C10.8772 5.25274 10.8789 5.3319 10.8583 5.40666C10.8377 5.48142 10.7956 5.54848 10.7372 5.59956Z"
                  fill="#02F67C"
                />
                <path
                  d="M11.2115 5.05906C11.1646 4.91493 11.0761 4.7879 10.9571 4.69397C10.8382 4.60005 10.6941 4.54343 10.543 4.53125L7.77741 4.30812L6.7096 1.72578C6.65185 1.58507 6.55356 1.46471 6.42724 1.38C6.30091 1.29529 6.15224 1.25006 6.00014 1.25006C5.84804 1.25006 5.69938 1.29529 5.57305 1.38C5.44672 1.46471 5.34844 1.58507 5.29069 1.72578L4.22382 4.30765L1.45678 4.53125C1.30546 4.54404 1.16128 4.60121 1.0423 4.69559C0.923328 4.78997 0.834849 4.91736 0.787953 5.0618C0.741058 5.20624 0.73783 5.36131 0.778675 5.50758C0.819519 5.65385 0.90262 5.78481 1.01757 5.88406L3.12694 7.70422L2.48428 10.4258C2.44834 10.5736 2.45714 10.7288 2.50957 10.8717C2.56199 11.0145 2.65568 11.1386 2.77873 11.2281C2.90179 11.3176 3.04866 11.3685 3.20071 11.3744C3.35276 11.3803 3.50313 11.3408 3.63272 11.2611L5.99991 9.80422L8.3685 11.2611C8.49815 11.3399 8.6482 11.3786 8.79978 11.3722C8.95136 11.3659 9.09768 11.3149 9.22031 11.2256C9.34295 11.1363 9.43642 11.0127 9.48895 10.8704C9.54149 10.728 9.55074 10.5733 9.51553 10.4258L8.87053 7.70375L10.9799 5.88359C11.0958 5.78451 11.1796 5.65326 11.2209 5.50648C11.2621 5.3597 11.2588 5.20398 11.2115 5.05906ZM10.4924 5.31546L8.2096 7.28421C8.15754 7.32909 8.11881 7.3874 8.09765 7.45279C8.07649 7.51818 8.0737 7.58813 8.0896 7.655L8.7871 10.5987C8.7889 10.6028 8.78908 10.6074 8.7876 10.6116C8.78612 10.6158 8.78308 10.6192 8.77913 10.6212C8.77069 10.6278 8.76835 10.6264 8.76132 10.6212L6.19632 9.0439C6.13724 9.00758 6.06925 8.98835 5.99991 8.98835C5.93056 8.98835 5.86258 9.00758 5.8035 9.0439L3.2385 10.6222C3.23147 10.6264 3.2296 10.6278 3.22069 10.6222C3.21673 10.6202 3.2137 10.6167 3.21222 10.6125C3.21074 10.6083 3.21092 10.6037 3.21272 10.5997L3.91022 7.65593C3.92612 7.58907 3.92333 7.51912 3.90217 7.45373C3.88101 7.38834 3.84228 7.33002 3.79022 7.28515L1.50741 5.3164C1.50178 5.31172 1.49663 5.3075 1.50132 5.29296C1.506 5.27843 1.50975 5.28031 1.51678 5.27937L4.51303 5.0375C4.58176 5.0316 4.64752 5.00687 4.7031 4.96601C4.75867 4.92516 4.8019 4.86977 4.82803 4.80593L5.9821 2.01171C5.98585 2.00375 5.98725 2 5.9985 2C6.00975 2 6.01116 2.00375 6.01491 2.01171L7.17178 4.80593C7.19816 4.86979 7.24167 4.92512 7.2975 4.96582C7.35333 5.00652 7.41932 5.031 7.48819 5.03656L10.4844 5.27843C10.4915 5.27843 10.4957 5.27843 10.4999 5.29203C10.5041 5.30562 10.4999 5.31078 10.4924 5.31546Z"
                  fill="#02F67C"
                />
              </svg>
              <span class="text-[12px] ml-[-4px]">100</span>
            </a>
          </li> */
          }
          <li>
            <a
              href={props.sign.url}
              id="bt-click-signup"
              class="flex items-center text-[#b6b6b6] md:hover:text-[#fff] font-medium text-[16px] px-4 py-2 transition ease-in-out duration-300"
            >
              {props.sign.label}
            </a>
          </li>
          <li>
            <a
              href={props.demo?.url}
              id="bt-click-signup"
              class="flex items-center hover:shadow-[0_0_40px_0_rgba(2,246,124,0.3)] md:w-auto transition-all duration-300 ease-out border-[#02F67C] border-2 text-base text-[#0A2121] bg-[#02F67C] md:hover:bg-[#2FD180] font-medium text-[16px] max-h-[37px] px-4 py-2 rounded-lg md:transition md:ease-in-out md:duration-300"
            >
              {props.demo?.label}
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
