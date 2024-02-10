import { Section } from "deco/blocks/section.ts";
import { JSX } from "preact/jsx-runtime";
import Icon, {
  AvailableIcons,
} from "deco-sites/starting/components/ui/Icon.tsx";
import Schedule, {
  Props as ScheduleProps,
} from "deco-sites/starting/sections/Schedule.tsx";
import SlideBanner, {
  Props as SlideBannerProps,
} from "deco-sites/starting/sections/Slide.tsx";
import UiButton from "deco-sites/starting/components/ui/Button.tsx";
import SocialLinks, {
  Props as SocialLinksProps,
} from "deco-sites/starting/sections/SocialLinks.tsx";

/**
 * @title ToggleDarkMode
 */
interface ToggleDarkModeProps {
  /**
   * @hide
   */
  id: "darkmode";
}

function ToggleDarkMode(props: ToggleDarkModeProps) {
  return (
    <label class="swap swap-rotate absolute elem bg-white dark:border p-2 rounded-full">
      <input type="checkbox" data-toggle-darkmode />
      <svg
        class="swap-off fill-current w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>
      <svg
        class="swap-on fill-current w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
    </label>
  );
}

/**
 * @title Radio
 */
interface RadioProps {
  /**
   * @hide
   */
  id: "radio";
  name: string;
}

function Radio({ name }: RadioProps) {
  return (
    <input
      type="radio"
      name={name}
      class="radio w-9 h-9 radio-primary elem absolute rounded-full checked:!bg-black hover:border-white  border-white dark:hover:border-black dark:border-black"
      checked
    />
  );
}

/**
 * @title CheckBox
 */
interface CheckBoxProps {
  /**
   * @hide
   */
  id: "checkbox";
}

function CheckBox({}: CheckBoxProps) {
  return (
    <input
      type="checkbox"
      checked
      class="checkbox border w-14 h-14 elem absolute rounded-xl border-white dark:border-black"
    />
  );
}

/**
 * @title Toggle
 */
interface ToggleProps {
  /**
   * @hide
   */
  id: "toggle";
}

function Toggle({}: ToggleProps) {
  return (
    <input
      type="checkbox"
      style={`--tglbg: black; --handleoffset: 50px;`}
      class="toggle w-[100px] h-[50px] !text-white rounded-xl elem absolute"
      checked
    />
  );
}

/**
 * @title Input
 */
interface InputProps {
  /**
   * @hide
   */
  id: "input";
}

function Input({}: InputProps) {
  return (
    <input
      type="text"
      class="elem absolute input input-bordered rounded-xl input-lg"
      placeholder="Type here"
    />
  );
}

interface ButtonProps {
  /**
   * @hide
   */
  id: "button";
  label: string;
  color: string;
  backgroundColor: string;
}

const toVar = (cssVar: string) =>
  `oklch(var(${cssVar}, var(--b2)) / var(--tw-bg-opacity))`;

function Button({ label, color, backgroundColor }: ButtonProps) {
  const bg = backgroundColor.includes("-")
    ? toVar(backgroundColor)
    : backgroundColor;
  const clr = color.includes("-") ? toVar(color) : color;

  return (
    <button
      style={`background-color: ${bg}; color: ${clr};`}
      class="elem btn border-none absolute btn-lg rounded-xl hover:brightness-[85%]"
    >
      {label}
    </button>
  );
}

/**
 * @title Slider
 */
interface SliderProps {
  /**
   * @hide
   */
  id: "slider";
}

function Slider({}: SliderProps) {
  return (
    <input
      type="range"
      style={`--range-shdw: black; --fallback-bc: #C9CFCF; --rounded-box: 6px;`}
      class="elem absolute range w-[300px] border-white"
      min="0"
      max="100"
      value="40"
    />
  );
}

type AnimationElement =
  | SliderProps
  | ButtonProps
  | InputProps
  | ToggleProps
  | CheckBoxProps
  | RadioProps
  | ToggleDarkModeProps;

interface TopButton {
  label: string;
  icon: AvailableIcons;
  url: string;
}
export interface Props {
  animationElements: AnimationElement[];
  infoPanel: {
    schedule: ScheduleProps;
    slideBanner: SlideBannerProps;
    socialLinks: SocialLinksProps;
    topButtons: TopButton[];
    ctaText: string;
  };
}

const AnimatedElementMap: Record<
  AnimationElement["id"],
  // deno-lint-ignore no-explicit-any
  (props: any) => JSX.Element
> = {
  button: Button,
  checkbox: CheckBox,
  darkmode: ToggleDarkMode,
  input: Input,
  radio: Radio,
  slider: Slider,
  toggle: Toggle,
};

export default function DecoDay({
  animationElements,
  infoPanel,
}: Props) {
  return (
    <div class="flex flex-col-reverse lg:flex lg:flex-row h-[200vh] lg:h-screen w-screen overflow-x-hidden">
      <div class="relative h-screen lg:h-screen w-screen lg:w-[50vw] overflow-clip">
        <div id="canvas" class="absolute z-[1]"></div>
        <div class="absolute flex z-[2] flex-col items-center pt-12 gap-4 bg-black dark:bg-white h-screen w-screen lg:w-[50vw]">
          <div
            class="absolute inset-0 flex justify-end"
            style="right: -300px; top: -150px"
          >
            <div class="opacity-50 bg-accent w-96 h-96 rounded-full blur-[150px]">
            </div>
            <div class="opacity-50 bg-secondary w-96 h-96 rounded-full blur-[150px]">
            </div>
          </div>
          <p class="hidden lg:inline text-white dark:text-black text-center w-3/4 text-2xl">
            Join our <strong>Dev Community Day</strong> and meet
          </p>
          <img
            src="/deco-2.0.png"
            class="w-[40vw] hidden lg:hidden dark:lg:inline"
          />
          <img
            src="/deco-2.0-dark.png"
            class="w-[40vw] hidden lg:inline dark:lg:hidden"
          />
        </div>
        <div class="z-10">
          {animationElements.map((elem) => (
            AnimatedElementMap[elem.id](elem)
          ))}
        </div>
      </div>
      <div class="overflow-y-scroll h-screen w-screen lg:w-[50vw] bg-white dark:bg-black py-11 px-6 lg:px-12 dark:text-white">
        <div class="flex flex-col gap-10 items-start pb-16 mb-16">
          <div class="flex flex-col gap-4 lg:hidden">
            <h4 class="text-2xl">
              Join our <strong>Dev Community Day</strong> and meet
            </h4>
            <img
              src="/deco-2.0.png"
              class="w-2/3 inline lg:hidden dark:hidden"
            />
            <img
              src="/deco-2.0-dark.png"
              class="w-2/3 hidden lg:inline dark:inline"
            />
          </div>
          <div class="flex flex-col gap-3 items-start pb-10 w-full border-b border-black dark:border-white">
            {infoPanel.topButtons.map(({ icon, label, url }) => (
              <a
                class={`flex items-center transition-colors justify-center gap-4 text-2lx h-14 px-5 border rounded-[100px]
                 border-black hover:text-white hover:bg-black
                  `}
                href={url}
              >
                <Icon id={icon} size={20} />
                <span>{label}</span>
              </a>
            ))}
          </div>
          <Schedule {...infoPanel.schedule} />
        </div>
        <div class="relative">
          <div class="absolute z-[1] -rotate-3 w-[150vw] top-[-100px] left-[-30%] lg:left-[-50%]">
            <SlideBanner {...infoPanel.slideBanner} />
          </div>
        </div>
        <div class="flex flex-col gap-3 mt-8">
          <p>
            RSPV{" "}
            <span class="text-secondary dark:text-accent">
              before March 1st
            </span>
          </p>
          <div class="flex gap-3">
            <input
              placeholder="Your work email"
              class="input input-bordered w-full rounded-[100px] h-14 flex justify-center items-center placeholder:text-black dark:placeholder:text-white dark:bg-black dark:border-white"
            />
            <UiButton class="rounded-[100px] font-normal h-14 bg-black text-white dark:text-black dark:bg-white">
              {infoPanel.ctaText}
            </UiButton>
          </div>
        </div>
        <div class="pt-9 flex justify-center lg:justify-end lg:absolute lg:bottom-4 lg:right-4">
          <SocialLinks {...infoPanel.socialLinks} />
        </div>
      </div>
      <script type="module" src="/matter-script.js" />
    </div>
  );
}
