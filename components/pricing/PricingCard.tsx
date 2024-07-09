import Icon from "site/components/ui/Icon.tsx";
import { useSignal } from "@preact/signals";
import { abbreviateNumber } from "site/components/utils/formatNumber.ts";

/**
 * @title {{{title}}},{{{subtitleInfo}}}
 */
export interface Feature {
  title: string;
  subtitleInfo?: string;
  /**
   * @format rich-text
   */
  moreInfo?: string;
}

/**
 * @title {{{unit}}}
 */
export interface CalculatorItem {
  unit: string;
  price: number;
  initialValue: number;
  addValue: number;
}

/**
 * @title {{{title}}}
 */
export interface Calculator {
  title?: string;
  items?: CalculatorItem[];
}

/**
 * @title {{{title}}},{{{subtitleInfo}}}
 */
export interface PricingCardProps {
  active?: boolean;
  title: string;
  subtitle?: string;
  monthlyBasePrice: number;
  /**
   * @title Annual Discount (E.g. 15 = 15%)
   * @example 15 = 15%
   */
  annualDiscount?: number;
  useAnnualDiscount?: boolean;
  /**
   * @format rich-text
   */
  featuresTitle: string;
  features?: Feature[];
  calculator?: Calculator;
  accessButton: { title: string; href: string };
}

function FeatureItem({ feature }: { feature: Feature }) {
  return (
    <div class="flex gap-2">
      <Icon class="mt-0.5" id="check-rounded" size={20} color="#02F67C" />
      <div class="flex flex-col">
        <span>{feature.title}</span>
        {feature.subtitleInfo && (
          <span
            class="text-[#949E9E] text-sm"
            dangerouslySetInnerHTML={{
              __html: feature.subtitleInfo,
            }}
          />
        )}
      </div>
    </div>
  );
}

function CalculatorElement({
  item,
  onClick,
}: {
  item: CalculatorItem;
  index: number;
  currentPrice: number;
  onClick: Function;
}) {
  const price = useSignal<number>(item.initialValue);
  const formatedPrice = abbreviateNumber(item.price);

  const handlePriceUpdate = (operation: "sum" | "sub") => {
    const operations = {
      sum: (initialValue: number, newValue: number) => initialValue + newValue,
      sub: (initialValue: number, newValue: number) => initialValue - newValue,
    };

    const newValue = operations[operation](price.value, item.price);
    console.log(newValue);
    if (item.initialValue <= newValue) price.value = newValue;
  };

  return (
    <div class="flex justify-between w-full">
      <div class="flex flex-col">
        <span>{item.unit}</span>
        <span class="text-[#949E9E] text-sm">{`$${item.price} per ${
          formatedPrice !== "1" ? `${formatedPrice} ` : ""
        }${item.unit}`}</span>
      </div>
      <div class="flex gap-2 text-[#949E9E]">
        <div onClick={() => handlePriceUpdate("sub")}>
          <Icon
            class="cursor-pointer hover:text-white transition duration-300 ease-in-out"
            id="minus-rounded"
            size={20}
            strokeWidth={1}
          />
        </div>
        <span class="text-white">{abbreviateNumber(price.value)}</span>
        <Icon
          class="cursor-pointer hover:text-white transition duration-300 ease-in-out"
          id="plus-rounded"
          size={20}
          strokeWidth={1}
          onClick={() => handlePriceUpdate("sum")}
        />
      </div>
    </div>
  );
}

function PricingCard({
  active,
  title,
  subtitle,
  monthlyBasePrice,
  annualDiscount,
  useAnnualDiscount,
  featuresTitle,
  features = [],
  calculator,
  accessButton,
}: PricingCardProps) {
  const currentPrice = useSignal(monthlyBasePrice);
  const calculatorValues = useSignal(
    calculator?.items?.map((item) => item.initialValue)
  );

  // const handlePriceUpdate = (
  //   operation: "sum" | "sub",
  //   calculatorIndex: number,
  //   item: CalculatorItem
  // ) => {
  //   const operations = {
  //     sum: (initialValue: number, newValue: number) => initialValue + newValue,
  //     sub: (initialValue: number, newValue: number) => initialValue - newValue,
  //   };

  //   const newPrice = operations[operation](currentPrice.value, item.price);
  //   if (newPrice >= monthlyBasePrice) currentPrice.value = newPrice;

  //   if (calculatorValues.value) {
  //     const oldValues = calculatorValues.value;
  //     oldValues[calculatorIndex] = operations[operation](
  //       currentPrice.value,
  //       item.addValue
  //     );
  //     if (item.initialValue >= oldValues[calculatorIndex])
  //       calculatorValues.value = oldValues;
  //   }
  // };

  // const updatePrice = (newValue)

  const styles = {
    active: {
      container:
        "bg-[#0D1717] border-[#30b874] shadow-[0_0_40px_0_rgba(2,246,124,0.1)]",
      button: "text-[#162121] bg-[#02F67C]",
    },
    regular: {
      container: "bg-[#070D0D] border-[#0B1612] ",
      button: "text-[#ffffff] bg-[#162121]",
    },
  };

  return (
    <div
      class={`flex flex-col grow gap-5 p-6 w-full mx-4 rounded-lg border ${
        active ? styles.active.container : styles.regular.container
      }`}
    >
      <div class="flex flex-col gap-2 mb-5">
        <h2 class="font-[argent-pixel] text-2xl">{title}</h2>
        <div>
          <p class="text-sm">
            <span class="text-2xl text-[#02F67C] font-semibold mr-1">
              $ {currentPrice}
            </span>
            /month
          </p>
          {useAnnualDiscount && <div>{annualDiscount}% off</div>}
        </div>
        <p class="text-[#949E9E]">{subtitle}</p>
      </div>
      <div class="flex flex-col h-full gap-2">
        <div
          class="font-semibold"
          dangerouslySetInnerHTML={{
            __html: featuresTitle,
          }}
        />
        <div class="flex flex-col gap-4 h-full">
          {features.map((feature: Feature) => (
            <FeatureItem feature={feature} />
          ))}
        </div>
      </div>
      {calculator && (
        <div class="flex flex-col gap-4 w-full">
          <p class="font-bold">{calculator.title}</p>
          {calculator.items?.map((item: CalculatorItem, index: number) => (
            <CalculatorElement
              onClick={() => {}}
              index={index}
              item={item}
              currentPrice={
                calculatorValues.value ? calculatorValues.value[index] : 0
              }
            />
          ))}
        </div>
      )}
      <a
        href={accessButton.href}
        class={`w-full text-center text-lg font-bold rounded-lg py-4 ${
          active ? styles.active.button : styles.regular.button
        }`}
      >
        {accessButton.title}
      </a>
    </div>
  );
}

export default PricingCard;
