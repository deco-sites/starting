import { useSignal } from "@preact/signals";
import { JSX } from "preact";
import Spinner from "deco-sites/starting/components/ui/Spinner.tsx";
import Icon from "deco-sites/starting/components/ui/Icon.tsx";

export interface Props {
  mainText: string;
  delayWarningMessage?: string;
  formInfos: {
    websiteLabel: string;
    sessionsLabel: string;
    conversionLabel: string;
    averageOrderLabel: string;
    trafficSplitLabel: string;
    trafficMobile: string;
    trafficDesktop: string;
  };
  result: {
    year: string;
    calculateAgain: string;
    howWeCalculateTitle: string;
    /** @format textarea */
    howWeCalculateText1: string;
    howWeCalculateText2: string;
    /** @format textarea */
    howWeCalculateText3: string;
    gainInOneYear: string;
    conversion: string;
    revenue: string;
  };
  potencialIncrease: string;
  buttonText: string;
  bgStripColor?: "bg-dark-green" | "bg-highlight";
}

export default function ImpactCalculator({
  mainText,
  formInfos,
  result,
  potencialIncrease,
  buttonText,
  bgStripColor,
  delayWarningMessage =
    "The calculation may take a few minutes to finish due to a request we make to PageSpeed's API.",
}: Props) {
  const inputClass =
    "w-full bg-[#F3FFF9] mt-2 pl-4 border border-dark-green h-[52px] rounded-[4px]";

  const website = useSignal("http://");
  const sessions = useSignal(10000);
  const conversion = useSignal(1);
  const average = useSignal(50);
  const mobileLCP = useSignal(0);
  const desktopLCP = useSignal(0);
  const showExplanation = useSignal(false);

  const desktopPercent = useSignal<number>(50);
  const mobilePercent = useSignal<number>(50);

  const loading = useSignal(false);

  const revenue = useSignal<null | number>(null);

  const handleChange = (e: HTMLInputElement | null) => {
    mobilePercent.value = Number(e?.value);
    desktopPercent.value = 100 - Number(e?.value);
  };

  const handleSubmit = (e: JSX.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();
    loading.value = true;

    const promiseMobile = fetch(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${website.value}&strategy=mobile`,
    )
      .then((response) => response.json())
      .catch((error) => {
        loading.value = false;
        alert("Request to PageSpeed has failed. Please try again.");
      });
    const promiseDesktop = fetch(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${website.value}&strategy=desktop`,
    )
      .then((response) => response.json())
      .catch((error) => {
        loading.value = false;
        alert("Request to PageSpeed has failed. Please try again.");
      });

    const formData = new FormData();
    formData.append("domain", website.value);
    formData.append("sessions", `${sessions.value}`);
    formData.append("conversion", `${conversion.value}`);
    formData.append("value", `${average.value}`);
    formData.append("traffic", `${mobilePercent.value}`);

    fetch("/api/calc", {
      method: "POST",
      body: formData,
    });

    Promise.all([promiseMobile, promiseDesktop]).then((results) => {
      results.forEach((result) => {
        const resultLCP =
          result.lighthouseResult.audits["largest-contentful-paint"]
            .numericValue;
        if (result.lighthouseResult.configSettings.formFactor == "mobile") {
          mobileLCP.value = resultLCP;
        } else {
          desktopLCP.value = resultLCP;
        }
      });
      loading.value = false;
      showExplanation.value = true;
    });
  };

  let secondsInMobile = 0;
  let secondsInDesktop = 0;

  if (
    sessions.value != 0 &&
    website.value != "" &&
    mobileLCP.value != 0 &&
    mobileLCP.value != 0
  ) {
    secondsInMobile = getSecondsToImprove(mobileLCP.value, 2500);
    secondsInDesktop = getSecondsToImprove(desktopLCP.value, 2500);

    const conversionOptimized = getConversionOptimized(
      conversion.value,
      secondsInMobile,
    );
    const conversionOptimizedDesktop = getConversionOptimized(
      conversion.value,
      secondsInDesktop,
    );

    const currentRevenue = sessions.value * (conversion.value / 100) *
      average.value;

    const newRevenue = getNewRevenue(
      sessions.value,
      mobilePercent.value,
      conversionOptimized,
      average.value,
    );
    const newRevenueDesktop = getNewRevenue(
      sessions.value,
      desktopPercent.value,
      conversionOptimizedDesktop,
      average.value,
    );

    const incrementInOneYear = getIncrementInOneYear(
      newRevenue,
      newRevenueDesktop,
      currentRevenue,
    );

    revenue.value = incrementInOneYear;
  }

  function getSecondsToImprove(currentSeconds: number, bestTime: number) {
    const BEST_TIME = bestTime;
    const seconds = (currentSeconds - BEST_TIME) / 1000;
    return seconds < 0 ? 0 : seconds;
  }

  function getConversionOptimized(
    currentConversion: number,
    secondsToImprove: number,
  ) {
    const IMPROVE_PERCENT = 1.07;
    const conversionOptimized = secondsToImprove > 0
      ? currentConversion * Math.pow(IMPROVE_PERCENT, secondsToImprove)
      : currentConversion;
    return conversionOptimized;
  }

  function getNewRevenue(
    sessions: number,
    percentDevice: number,
    conversionOptimized: number,
    average: number,
  ) {
    const percentOfSessions = (sessions * percentDevice) / 100;
    const newRevenue = percentOfSessions * (conversionOptimized / 100) *
      average;
    return newRevenue;
  }

  function getIncrementInOneYear(
    newRevenue: number,
    newRevenueDesktop: number,
    currentRevenue: number,
  ) {
    const totalNewRevenue = newRevenue + newRevenueDesktop;
    const increment = (totalNewRevenue - currentRevenue) * 12; //months
    return increment;
  }

  const formatPrice = (price: number | null) => {
    const USDollar = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

    return USDollar.format(price!);
  };

  return (
    <section class="bg-[#F3FFF9]">
      <div
        class={`${
          !bgStripColor || bgStripColor == "bg-dark-green"
            ? "bg-dark-green"
            : "bg-highlight"
        } absolute w-full h-[270px]`}
      >
      </div>
      <div class="px-4 pt-24">
        <div class="relative bg-[#F3FFF9] flex flex-col md:flex-row gap-4 md:gap-16 border-dark-green border rounded-[24px] max-w-[1440px] md:m-auto mx-2 px-5 py-6 md:p-16">
          <div class={`md:max-w-[40%] flex flex-col gap-4`}>
            <p class="text-2xl md:text-5xl md:leading-[53px] text-dark-green">
              {mainText}
            </p>
            <p>{potencialIncrease}</p>
            <p class={`${!showExplanation.value ? "block" : "hidden"}`}>
              {delayWarningMessage}
            </p>
          </div>
          <div
            class={`${
              showExplanation.value ? "flex" : "hidden"
            } flex-col gap-5`}
          >
            <div>
              <p class="text-[44px] md:text-[82px] font-bold overflow-auto flex gap-2 items-baseline">
                <span>{formatPrice(Number(revenue))}</span>
                <span class="text-[22px] md:text-[32px] font-normal">
                  / {result.year}
                </span>
              </p>
              <p class={`${showExplanation.value ? "block" : "hidden"}`}>
                <button
                  class="underline"
                  onClick={() => {
                    showExplanation.value = false;
                  }}
                >
                  {result.calculateAgain}
                </button>
              </p>
            </div>
            <div class="flex flex-col gap-3">
              <h3 class="text-xl">{result.howWeCalculateTitle}</h3>
              <div class="text-sm">
                {result.howWeCalculateText1}{" "}
                {parseFloat(`${mobileLCP.value / 1000}`).toFixed(1)}s{" "}
                {result.howWeCalculateText2}{" "}
                {parseFloat(`${desktopLCP.value / 1000}`).toFixed(1)}s{" "}
                {result.howWeCalculateText3}
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <h4 class="text-xl">{result.gainInOneYear}</h4>
              <table class="w-fit">
                <thead>
                  <tr>
                    <th></th>
                    <th class="text-center font-normal px-5 pb-1">Mobile</th>
                    <th class="text-center font-normal px-5 pb-1">Desktop</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="pr-5 pb-1">LCP</td>
                    <td class="text-center px-5 pb-1">
                      {secondsInMobile > 0 && "-"}
                      {secondsInMobile?.toFixed(1)}s
                    </td>
                    <td class="text-center px-5 pb-1">
                      {secondsInDesktop > 0 && "-"}
                      {secondsInDesktop?.toFixed(1)}s
                    </td>
                  </tr>
                  <tr>
                    <td class="pr-5 pb-1">{result.conversion}</td>
                    <td class="text-center px-5 pb-1">
                      {secondsInMobile > 0 && "+"}
                      {(
                        getConversionOptimized(
                          conversion.value,
                          secondsInMobile,
                        ) - conversion.value
                      ).toFixed(2)}
                      %
                    </td>
                    <td class="text-center px-5 pb-1">
                      {secondsInDesktop > 0 && "+"}
                      {(
                        getConversionOptimized(
                          conversion.value,
                          secondsInDesktop,
                        ) - conversion.value
                      ).toFixed(2)}
                      %
                    </td>
                  </tr>
                  <tr>
                    <td class="pr-5 pb-1">{result.revenue}</td>
                    <td class="text-center px-5 pb-1">
                      {secondsInMobile > 0 && "+"}
                      {formatPrice(
                        getNewRevenue(
                          sessions.value,
                          mobilePercent.value,
                          getConversionOptimized(
                            conversion.value,
                            secondsInMobile,
                          ) - conversion.value,
                          average.value,
                        ) * 12,
                      )}
                    </td>
                    <td class="text-center px-5 pb-1">
                      {secondsInDesktop > 0 && "+"}
                      {formatPrice(
                        getNewRevenue(
                          sessions.value,
                          desktopPercent.value,
                          getConversionOptimized(
                            conversion.value,
                            secondsInDesktop,
                          ) - conversion.value,
                          average.value,
                        ) * 12,
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class={`${!showExplanation.value ? "block" : "hidden"}`}>
            <form
              action="/api/calc"
              class="flex flex-col gap-6"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div>
                <label htmlFor={formInfos.websiteLabel}>
                  {formInfos.websiteLabel}
                </label>
                <input
                  id={formInfos.websiteLabel}
                  name="domain"
                  type="url"
                  placeholder="http://example.com"
                  pattern="(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"
                  required
                  value={website}
                  onFocus={(e) =>
                    (e.target as HTMLInputElement).classList.add(
                      "invalid:border-pink-500",
                      "invalid:text-pink-600",
                      "focus:invalid:border-pink-500",
                      "focus:invalid:ring-pink-500",
                    )}
                  onInput={(
                    e,
                  ) => (website.value = (e.target as HTMLInputElement).value)}
                  class={`${inputClass}`}
                />
              </div>
              <div class="grid grid-cols-3 gap-3 md:gap-6 justify-between">
                <div class="flex flex-col justify-between">
                  <label htmlFor={formInfos.sessionsLabel}>
                    {formInfos.sessionsLabel}
                  </label>
                  <input
                    id={formInfos.sessionsLabel}
                    name="sessions"
                    type="number"
                    required
                    value={sessions}
                    onInput={(e) => (sessions.value = Number(
                      (e.target as HTMLInputElement).value,
                    ))}
                    class={`${inputClass}`}
                  />
                </div>
                <div class="flex flex-col justify-between">
                  <label htmlFor={formInfos.conversionLabel}>
                    {formInfos.conversionLabel}
                  </label>
                  <div class="relative">
                    <input
                      id={formInfos.conversionLabel}
                      name="conversion"
                      type="number"
                      required
                      value={conversion}
                      onInput={(e) => (conversion.value = Number(
                        (e.target as HTMLInputElement).value,
                      ))}
                      class={`${inputClass}`}
                    />
                    <span class="absolute top-[24px] right-[10px] text-[#66736C] text-[14px]">
                      %
                    </span>
                  </div>
                </div>
                <div class="flex flex-col justify-between">
                  <label htmlFor={formInfos.averageOrderLabel}>
                    {formInfos.averageOrderLabel}
                  </label>
                  <div class="relative">
                    <input
                      id={formInfos.averageOrderLabel}
                      name="value"
                      type="number"
                      required
                      value={average}
                      onInput={(e) => (average.value = Number(
                        (e.target as HTMLInputElement).value,
                      ))}
                      class={`${inputClass}`}
                    />
                    <span class="absolute top-[24px] right-[10px] text-[#66736C] text-[14px]">
                      $
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <label htmlFor={formInfos.trafficSplitLabel}>
                  {formInfos.trafficSplitLabel}
                </label>
                <input
                  id={formInfos.trafficSplitLabel}
                  name="traffic"
                  type="range"
                  class="w-full mb-1"
                  min="0"
                  max="100"
                  onInput={(e) => handleChange(e.target as HTMLInputElement)}
                />
                <div class="flex justify-between">
                  <span class="text-[#161616] font-semibold text-[14px]">
                    {formInfos.trafficMobile} {mobilePercent}%
                  </span>
                  <span class="text-[#161616] font-semibold text-[14px] text-right">
                    {desktopPercent}% {formInfos.trafficDesktop}
                  </span>
                </div>
              </div>
              <button class="flex justify-center items-center h-12 group px-6 w-full bg-dark-green text-white rounded-[4px]">
                {loading.value
                  ? <Spinner size={20} />
                  : (
                    <div class="flex justify-center items-center gap-2">
                      <p>{buttonText}</p>
                      <Icon
                        class="hidden transition lg:group-hover:block"
                        id="WhiteArrow"
                        width={15}
                        height={15}
                        strokeWidth={"1"}
                      />
                    </div>
                  )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
