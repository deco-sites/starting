import type { Props as ButtonProps } from "$store/components/camp/Button/Button.tsx";
import { formatPrice } from "../sdk/format.ts";
import Button from "../Button/Button.tsx";
import Icon from "../ui/Icon.tsx";
import Flag from "./Flag.tsx";

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
  afterButton: string;
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
  "ligth": "text-black",
  "dark": "text-primary",
};
const LINE_COLOR = {
  "ligth": "bg-black",
  "dark": "bg-content",
};

export default function CardPrice({ props }: { props: Props }) {
  const {
    labelPlan,
    flag,
    infosPrice,
    requirements,
    type = "ligth",
    button,
    afterButton,
  } = props;

  const arrayPrice = infosPrice.insttalments
    ? formatPrice(
      infosPrice.totalPrice / infosPrice.insttalments,
      infosPrice.currency,
    )?.split(",")
    : formatPrice(infosPrice.totalPrice, infosPrice.currency)?.split(",");

  return (
    <div
      class={`flex flex-col justify-center items-center rounded-3xl py-10 px-6 gap-5 w-full border-[#000D0D] border-2  ${
        THEME_COLOR[type]
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
                class={`flex flex-row justify-center items-end gap-2 font-medium ${
                  PRICE_COLOR[type]
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
                class={`flex flex-row justify-start items-start ${
                  PRICE_COLOR[type]
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
          class="text-base md:text-xl"
          dangerouslySetInnerHTML={{ __html: infosPrice.afterPrice }}
        >
        </span>
      </div>
      <Button
        label={button.label}
        details={button.details}
        href={button.label}
        type={type}
      />
      <span class="text-xs md:text-base">{afterButton}</span>
      <span class={`w-[90%] md:w-[80%] h-[1px] bg-black ${LINE_COLOR[type]}`}>
      </span>
      <p class="text-xl md:text-[1.7rem]">{requirements.title}</p>
      <ul class="flex flex-col gap-2 items-center">
        {requirements.itemRequisite.map((item) => (
          <li class="text-center text-sm flex flex-row gap-2 md:text-base">
            <Icon id="check" size={16} class="min-w-[14px] " />
            <span class="w-max">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
