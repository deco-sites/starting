import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
import { useSignal } from "@preact/signals";
import { abbreviateNumber } from "site/components/utils/formatNumber.ts";

/**
 * @title {{{title}}}
 */
export interface Feature {
  title: string;
  /**
   * @format rich-text
   */
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
  hasNote?: boolean;
  noteIcon?: AvailableIcons;
}

/**
 * @title {{{title}}}
 */
export interface Calculator {
  title?: string;
  items?: CalculatorItem[];
}

/**
 * @title {{{title}}}
 */
export interface PricingCardProps {
  active?: boolean;
  useAnnualDiscount?: boolean;
  title: string;
  subtitle?: string;
  monthlyBasePrice: string;
  /**
   * @format rich-text
   */
  featuresTitle: string;
  features?: Feature[];
  calculator?: Calculator;
  accessButton: { title: string; href: string };
}

function FeatureItem({
  feature,
  active,
}: {
  feature: Feature;
  active: boolean;
}) {
  const styles = {
    active: "bg-[#162121] border-[#212F2F]",
    regular: "bg-[#0D1717] border-[#162121]",
  };

  return (
    <div class="flex gap-2">
      <Icon class="mt-0.5" id="check-rounded" size={20} color="#02F67C" />
      <div class="flex flex-col">
        <div class="flex gap-2">
          <span>{feature.title}</span>
          {feature.moreInfo && (
            <div class="group relative flex gap-2 h-fit mt-1">
              <Icon id="info" size={16} />
              <div
                class={`hidden group-hover:flex absolute max-w-[250px] w-max rounded-lg mt-8 p-3 border-2 ${
                  active ? styles.active : styles.regular
                }`}
                dangerouslySetInnerHTML={{
                  __html: feature.moreInfo,
                }}
              ></div>
            </div>
          )}
        </div>
        {feature.subtitleInfo && (
          <div
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

const OPERATIONS = {
  sum: (initialValue: number, newValue: number) => initialValue + newValue,
  sub: (initialValue: number, newValue: number) => initialValue - newValue,
};

function CalculatorElement({
  item,
  onClick,
}: {
  item: CalculatorItem;
  index: number;
  currentPrice: number;
  onClick: (operation: "sum" | "sub", value: number) => void;
}) {
  const price = useSignal<number>(item.initialValue);
  const formatedPrice = abbreviateNumber(item.addValue);

  const handlePriceUpdate = (operation: "sum" | "sub") => {
    const newValue = OPERATIONS[operation](price.value, item.addValue);
    if (item.initialValue <= newValue) {
      price.value = newValue;
      onClick(operation, item.price);
    }
  };

  return (
    <div class="flex justify-between w-full">
      <div class="flex flex-col">
        <div class="flex items-center gap-1">
          <span>{item.unit}</span>
          {item.hasNote && <Icon id={item.noteIcon ?? "star-sign"} size={15} />}
        </div>
        <span class="text-[#949E9E] text-sm">{`$${item.price} per ${
          formatedPrice !== "1" ? `${formatedPrice} ` : ""
        }${item.unit}`}</span>
      </div>
      <div class="flex gap-2 text-[#949E9E]">
        <Icon
          onClick={() => handlePriceUpdate("sub")}
          class="cursor-pointer hover:text-white transition duration-300 ease-in-out"
          id="minus-rounded"
          size={20}
          strokeWidth={1}
        />
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

export interface Props {
  pricingCard: PricingCardProps;
  annualDiscount: number | undefined;
  applyDiscount: boolean;
}

function PricingCard({ pricingCard, annualDiscount, applyDiscount }: Props) {
  const {
    active,
    useAnnualDiscount,
    title,
    subtitle,
    monthlyBasePrice,
    featuresTitle,
    features = [],
    calculator,
    accessButton,
  } = pricingCard;
  const currentPrice = useSignal(monthlyBasePrice);
  const calculatorValues = useSignal(
    calculator?.items?.map((item) => item.initialValue)
  );

  const styles = {
    active: {
      container:
        "bg-[#0D1717] border-[#30b874] shadow-[0_0_40px_0_rgba(2,246,124,0.1)]",
      button:
        "text-[#162121] border-2 border-[#02F67C] bg-[#02F67C] hover:bg-[#2FD180] transition duration-300 ease-in-out",
    },
    regular: {
      container: "bg-[#070D0D] border-[#0B1612] ",
      button:
        "text-[#ffffff] border-2 border-[#162121] bg-[#162121] hover:bg-[#182525] transition duration-300 ease-in-out",
    },
  };

  function handlePriceUpdate(operation: "sum" | "sub", value: number) {
    if (isNaN(parseFloat(monthlyBasePrice))) return;

    const newValue = OPERATIONS[operation](
      parseFloat(currentPrice.value),
      value
    );
    if (newValue >= parseFloat(monthlyBasePrice))
      currentPrice.value = String(newValue);
  }

  return (
    <div
      class={`flex flex-col grow gap-5 p-6 w-full rounded-lg border ${
        active ? styles.active.container : styles.regular.container
      }`}
    >
      <div class="flex flex-col gap-2">
        <h3 class="font-[argent-pixel] text-3xl mb-2">{title}</h3>
        <div class="flex items-center gap-4">
          <p>
            {isNaN(parseFloat(currentPrice.value)) ? (
              <span class="text-3xl text-[#02F67C] font-semibold mr-1">
                {currentPrice.value}
              </span>
            ) : (
              <>
                <span class="text-3xl text-[#02F67C] font-semibold mr-1">
                  $
                  {applyDiscount && useAnnualDiscount && annualDiscount
                    ? (
                        parseFloat(currentPrice.value) *
                        (1 - annualDiscount / 100)
                      ).toFixed(2)
                    : currentPrice.value}
                </span>
                / month
              </>
            )}
          </p>
          {(applyDiscount && useAnnualDiscount && annualDiscount) && (
            <div class="rounded-lg border border-[#02F67C] bg-[#02F67C20] px-3 py-0.5 text-sm">
              {annualDiscount}% off
            </div>
          )}
        </div>
        <p class="text-[#949E9E]">{subtitle}</p>
      </div>
      <a
        href={accessButton.href}
        class={`w-full text-center text-lg font-bold rounded-lg py-4 ${
          active ? styles.active.button : styles.regular.button
        }`}
      >
        {accessButton.title}
      </a>
      <hr class="border-[#162121]" />
      <div class="flex flex-col h-full gap-4">
        <div
          class="font-semibold"
          dangerouslySetInnerHTML={{
            __html: featuresTitle,
          }}
        />
        <div class="flex flex-col gap-4 h-full">
          {features.map((feature: Feature) => (
            <FeatureItem feature={feature} active={Boolean(active)} />
          ))}
        </div>
      </div>
      {calculator && (
        <div class="flex flex-col gap-4 w-full py-6">
          <p class="font-bold">{calculator.title}</p>
          {calculator.items?.map((item: CalculatorItem, index: number) => (
            <CalculatorElement
              onClick={handlePriceUpdate}
              index={index}
              item={item}
              currentPrice={
                calculatorValues.value ? calculatorValues.value[index] : 0
              }
            />
          ))}
        </div>
      )}
      
    </div>
  );
}

export default PricingCard;
