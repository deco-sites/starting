import type { Props as ButtonProps } from "$store/components/camp/Button/Button.tsx";
import { formatPrice } from "../sdk/format.ts";
import Button from "../Button/Button.tsx";
import Icon from "../ui/Icon.tsx";
import Flag from "./Flag.tsx";
import PopUp from "$store/islands/PopUp.tsx";
import type { Props as PropsPopUp } from "$store/components/camp/PopUp/PopUp.tsx";

interface Price {
  /**
   * @format html
   */
  beforePrice?: string;
  insttalments?: number;
  totalPrice: number;
  currency: "USD" | "BRL";
  /**
   * @format html
   */
  afterPrice: string;
}

/**
 * @titleBy labelPlan
 */
export interface Props {
  labelPlan: string;
  /**
   * @format html
   */
  flag: string;
  infosPrice: Price;
  button: ButtonProps;
  popUp: PropsPopUp;
  requirements: {
    title: string;
    itemRequisite: string[];
  };
  type: "ligth" | "dark";
}

const THEME_COLOR = {
  "ligth":
    " text-black bg-gradient-to-br from-green-100 via-green-200 to-[#2a8e72]",
  "dark":
    " text-white bg-gradient-to-br from-[#000d0d] via-[#002417] to-[#002827]",
};
const PRICE_COLOR = {
  "ligth": "text-[#000]",
  "dark": "text-[#02F67C]",
};
const LINE_COLOR = {
  "ligth": "bg-[#52525B]",
  "dark": "bg-[#A1A1AA]",
};
const SPAN_COLOR = {
  "ligth": "text-[#52525B]",
  "dark": "text-[#A1A1AA]",
};

export default function CardPrice({ props }: { props: Props }) {
  const {
    labelPlan,
    flag,
    infosPrice,
    requirements,
    type = "ligth",
    button,
    popUp,
  } = props;

  const arrayPrice = infosPrice.insttalments
    ? formatPrice(
      infosPrice.totalPrice / infosPrice.insttalments,
      infosPrice.currency,
    )?.split(",")
    : formatPrice(infosPrice.totalPrice, infosPrice.currency)?.split(",");

  return (
    <div
      class={`flex flex-col justify-center items-center rounded-3xl py-10 px-6 gap-5 w-full border-[#000D0D] border-2  ${THEME_COLOR[type]
        } lg:w-[50%-1.5rem] lg:max-w-[500px]`}
    >
      <Flag flag={flag} type={type} />
      <div class="flex flex-col items-center gap-1">
        <span
          class="text-xl md:text-[1.7rem]"
          dangerouslySetInnerHTML={{ __html: infosPrice.beforePrice || "" }}
        >
        </span>
        <div>
          {infosPrice.insttalments
            ? (
              <div
                class={`flex flex-row justify-center items-end gap-2 font-medium ${PRICE_COLOR[type]
                  }`}
              >
                <span class="text-2xl md:text-3xl">
                  {infosPrice.insttalments + "x"}
                </span>
                <div class="flex flex-row justify-start items-start">
                  <span class="text-6xl md:text-[5rem]">
                    {arrayPrice && arrayPrice[0].replace(/\s/g, "")}
                  </span>
                  <span class="text-3xl">
                    {arrayPrice && "," + arrayPrice[1]}
                  </span>
                </div>
              </div>
            )
            : (
              <div
                class={`flex flex-row justify-start items-start ${PRICE_COLOR[type]
                  }`}
              >
                <span class="text-6xl md:text-[5rem]">
                  {arrayPrice && arrayPrice[0].replace(/\s/g, "")}
                </span>
                <span class="text-3xl">
                  {arrayPrice && "," + arrayPrice[1]}
                </span>
              </div>
            )}
        </div>
        <span
          class={`text-base md:text-xl ${SPAN_COLOR[type]}`}
          dangerouslySetInnerHTML={{ __html: infosPrice.afterPrice }}
        >
        </span>
      </div>
      <Button
        label={button.label}
        details={button.details}
        href={button.href}
        theme={type}
      />
      <PopUp buttonLabel={popUp.buttonLabel} items={popUp.items} theme={type} />
      <span class={`w-[90%] md:w-[80%] h-[1px] ${LINE_COLOR[type]}`}>
      </span>
      <p class="text-xl md:text-[1.7rem]">{requirements.title}</p>
      <ul class="flex flex-col gap-2 items-center">
        {requirements.itemRequisite.map((item) => (
          <li class="text-center text-sm flex flex-row gap-2 md:text-base items-center">
            <Icon id="CheckPrice" size={16} class={`min-w-[14px] ${type === "dark" ? "text-[#02F67C]" : "text-[#000]"}`} />
            <span class="w-max">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
