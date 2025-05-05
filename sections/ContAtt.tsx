import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title CTA Button
 */
export interface CTA {
  /** @title Button text */
  text?: string;
  /** @title Button link */
  href?: string;
}

/**
 * @title Feature List Item
 */
export interface FeatureItem {
  /** @title Text */
  text?: string;
}

/**
 * @title Plan Card
 */
export interface PlanCard {
  /** @title Plan name */
  name?: string;
  /** @title Features */
  features?: FeatureItem[];
}

/**
 * @title Plans Table
 */
export interface PlansTable {
  /** @title Title */
  title?: string;
  /** @title Plans */
  plans?: PlanCard[];
}

/**
 * @title Price Table Row (Enterprise)
 */
export interface PriceTableRowEnterprise {
  /** @title No. seats */
  seats?: string;
  /** @title Builder price */
  builder?: string;
  /** @title Builder price per seat */
  builderPerSeat?: string;
  /** @title Content Editor price */
  contentEditor?: string;
  /** @title Content Editor price per seat */
  contentEditorPerSeat?: string;
}

/**
 * @title Price Table Row (Pro)
 */
export interface PriceTableRowPro {
  /** @title No. seats */
  seats?: string;
  /** @title Price */
  price?: string;
  /** @title Price per seat */
  pricePerSeat?: string;
}

/**
 * @title Price Table (Enterprise)
 */
export interface PriceTableEnterprise {
  /** @title Title */
  title?: string;
  /** @title Rows */
  rows?: PriceTableRowEnterprise[];
}

/**
 * @title Price Table (Pro)
 */
export interface PriceTablePro {
  /** @title Title */
  title?: string;
  /** @title Rows */
  rows?: PriceTableRowPro[];
}

/** @title Change Item */
export interface ChangeItem {
  /** @title Title */
  title?: string;
  /** @title Description */
  text?: string;
}

/** @title Example Item */
export interface ExampleItem {
  /** @title Label */
  label?: string;
  /** @title Value */
  value?: string;
}

export interface Props {
  /** @format textarea */
  mainTitle?: string;
  /** @format textarea */
  subtitle?: string;
  /** @format textarea */
  introParagraph?: string;
  /** @format textarea */
  changesTitle?: string;
  /** @title Changes */
  changes?: ChangeItem[];
  /** @title CTA after changes */
  cta1?: CTA;
  /** @format textarea */
  licensingTitle?: string;
  /** @format textarea */
  licensingParagraph?: string;
  /** @title Licensing List */
  licensingList?: FeatureItem[];
  /** @title Plans Table */
  plansTable?: PlansTable;
  /** @format textarea */
  seatsCalcIntro?: string;
  /** @format textarea */
  seatsCalcTitle?: string;
  /** @title Seats Calc Steps */
  seatsCalcSteps?: ExampleItem[];
  /** @title Price Table (Enterprise) */
  priceTableEnterprise?: PriceTableEnterprise;
  /** @title Price Table (Pro) */
  priceTablePro?: PriceTablePro;
  /** @format textarea */
  examplesIntro?: string;
  /** @title Pro Example */
  proExampleTitle?: string;
  /** @format textarea */
  proExampleText?: string;
  /** @title Enterprise Example */
  entExampleTitle?: string;
  /** @format textarea */
  entExampleText?: string;
  /** @title Enterprise Example List */
  entExampleList?: ExampleItem[];
  /** @format textarea */
  hostingTitle?: string;
  /** @format textarea */
  hostingParagraph?: string;
  /** @title Hosting List */
  hostingList?: FeatureItem[];
  /** @format textarea */
  hostingExtraParagraph?: string;
  /** @title Hosting Examples */
  hostingExamples?: ExampleItem[];
  /** @format textarea */
  supportTitle?: string;
  /** @title Support List */
  supportList?: ChangeItem[];
  /** @format textarea */
  whyChangeTitle?: string;
  /** @format textarea */
  whyChangeParagraph1?: string;
  /** @format textarea */
  whyChangeParagraph2?: string;
  /** @format textarea */
  whatToDoTitle?: string;
  /** @format textarea */
  whatToDoParagraph1?: string;
  /** @format textarea */
  whatToDoParagraph2?: string;
  /** @title Final CTA */
  finalCTA?: CTA;
}

export default function ContAtt(props: Props) {
  return (
    <div class="w-full font-sans bg-black">
      {/* Content before tables */}
      <div class="max-w-2xl mx-auto px-4 mt-16 pt-16">
        {props.mainTitle && (
          <h1 class="text-4xl font-bold mt-8 mb-4 text-white">
            {props.mainTitle}
          </h1>
        )}
        {props.subtitle && (
          <h2 class="text-2xl font-bold mt-8 mb-4 text-white">
            {props.subtitle}
          </h2>
        )}
        {props.introParagraph && (
          <p class="mb-4 text-gray-400">{props.introParagraph}</p>
        )}
        <div class="border-t border-gray-700 my-4"></div>
        {props.changesTitle && (
          <h2 class="text-2xl font-semibold mt-4 mb-4 text-[#02F67C]">
            {props.changesTitle}
          </h2>
        )}
        {props.changes && (
          <div>
            {props.changes.map((change, i) => (
              <div key={i}>
                {change.title && (
                  <h3 class="font-bold text-white">{change.title}</h3>
                )}
                {change.text && <p class="text-gray-400">{change.text}</p>}
              </div>
            ))}
          </div>
        )}
        {props.cta1 && props.cta1.text && props.cta1.href && (
          <div class="flex flex-row gap-2 justify-center items-center w-full md:w-auto my-6">
            <a
              href={props.cta1.href}
              target="_blank"
              class="w-full md:w-auto hover:shadow-[0_0_40px_0_rgba(2,246,124,0.3)] transition-all duration-300 ease-out border-[#02F67C] border-2 text-base md:text-lg px-4 py-1 md:px-4 lg:py-2 font-extrabold text-[#0A2121] bg-[#02F67C] md:hover:bg-[#2FD180] rounded-[10px] flex items-center justify-center"
            >
              {props.cta1.text}
            </a>
          </div>
        )}
        {props.licensingTitle && (
          <h3 class="text-2xl font-semibold mt-4 mb-2 text-[#02F67C]">
            {props.licensingTitle}
          </h3>
        )}
        {props.licensingParagraph && (
          <p class="mb-4 text-gray-400">{props.licensingParagraph}</p>
        )}
        {Array.isArray(props.licensingList) && (
          <ul class="list-disc pl-5 mb-4 text-gray-400 space-y-2">
            {props.licensingList.map((item, i) => <li key={i}>{item.text}</li>)}
          </ul>
        )}
      </div>

      {/* Plans Table */}
      {props.plansTable && (
        <div class="w-full my-8">
          <div class="w-full max-w-6xl mx-auto px-4">
            {props.plansTable.title && (
              <div class="mb-4">
                <span class="inline-block bg-[#1A2323] text-white px-4 py-2 rounded-full font-semibold text-lg">
                  {props.plansTable.title}
                </span>
              </div>
            )}
            <div class="flex flex-col md:flex-row gap-8">
              {props.plansTable.plans?.map((plan, idx) => (
                <div key={idx} class="flex-1 bg-[#101616] rounded-xl p-6">
                  <h3 class="text-2xl font-[argent-pixel] font-semibold mb-4 text-white">
                    {plan.name}
                  </h3>
                  <ul class="list-none space-y-2">
                    {plan.features?.map((item, i) => (
                      <li key={i} class="flex items-center gap-2 text-gray-400">
                        <span class="text-[#02F67C] text-lg">✔</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Content between tables */}
      <div class="max-w-2xl mx-auto px-4">
        {props.seatsCalcIntro && (
          <p class="mb-4 text-gray-400">{props.seatsCalcIntro}</p>
        )}
        {props.seatsCalcTitle && (
          <h4 class="font-semibold mt-6 mb-4 block text-[#02F67C]">
            {props.seatsCalcTitle}
          </h4>
        )}
        {Array.isArray(props.seatsCalcSteps) && (
          <ul class="list-disc pl-5 mb-4 space-y-2">
            {props.seatsCalcSteps.map((item, i) => (
              <li key={i} class="text-gray-400">
                <span class="font-semibold text-white">{item.label}</span>{" "}
                {item.value}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Price Table */}
      {(props.priceTableEnterprise || props.priceTablePro) && (
        <div class="w-full my-8">
          <div class="w-full max-w-6xl mx-auto px-4">
            <div class="flex flex-col md:flex-row gap-8">
              {props.priceTableEnterprise && (
                <div class="flex-1 bg-[#101616] rounded-xl p-6 overflow-x-auto">
                  <h3 class="text-2xl font-[argent-pixel] font-semibold mb-4 text-white">
                    {props.priceTableEnterprise.title}
                  </h3>
                  <table class="w-full text-left min-w-[400px]">
                    <thead>
                      <tr class="border-b border-gray-700">
                        <th class="py-2 text-white">No. seats</th>
                        <th class="py-2 text-white">Builder</th>
                        <th class="py-2 text-white">Content Editor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.priceTableEnterprise.rows?.map((row, i) => (
                        <tr key={i} class="border-b border-gray-800">
                          <td class="py-2 font-semibold text-[#02F67C]">
                            {row.seats}
                          </td>
                          <td class="py-2">
                            <div class="text-white">{row.builder}</div>
                            <div class="text-xs text-gray-400">
                              {row.builderPerSeat}
                            </div>
                          </td>
                          <td class="py-2">
                            <div class="text-white">{row.contentEditor}</div>
                            <div class="text-xs text-gray-400">
                              {row.contentEditorPerSeat}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {props.priceTablePro && (
                <div class="flex-1 bg-[#101616] rounded-xl p-6 overflow-x-auto">
                  <h3 class="text-2xl font-[argent-pixel] font-semibold mb-4 text-white">
                    {props.priceTablePro.title}
                  </h3>
                  <table class="w-full text-left min-w-[300px]">
                    <thead>
                      <tr class="border-b border-gray-700">
                        <th class="py-2 text-white">No. seats</th>
                        <th class="py-2 text-white">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.priceTablePro.rows?.map((row, i) => (
                        <tr key={i} class="border-b border-gray-800">
                          <td class="py-2 font-semibold text-[#02F67C]">
                            {row.seats}
                          </td>
                          <td class="py-2">
                            <div class="text-white">{row.price}</div>
                            <div class="text-xs text-gray-400">
                              {row.pricePerSeat}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Content after tables */}
      <div class="max-w-2xl mx-auto px-4 pb-24">
        {props.examplesIntro && (
          <p class="mb-4 text-gray-400">{props.examplesIntro}</p>
        )}
        {props.proExampleTitle && (
          <h4 class="font-semibold mt-4 text-[#02F67C]">
            {props.proExampleTitle}
          </h4>
        )}
        {props.proExampleText && (
          <p class="mb-4 text-gray-400">{props.proExampleText}</p>
        )}
        {props.entExampleTitle && (
          <h4 class="font-semibold mt-4 text-[#02F67C]">
            {props.entExampleTitle}
          </h4>
        )}
        {props.entExampleText && (
          <p class="mb-4 text-gray-400">{props.entExampleText}</p>
        )}
        {Array.isArray(props.entExampleList) && (
          <ul class="list-disc pl-5 mb-4 space-y-2">
            {props.entExampleList.map((item, i) => (
              <li key={i} class="text-gray-400">
                <span class="text-white">{item.label}</span>: {item.value}
              </li>
            ))}
          </ul>
        )}
        <div class="border-t border-gray-700 my-4"></div>
        {props.hostingTitle && (
          <h3
            class="text-2xl font-semibold mt-6 mb-3 text-[#02F67C]"
            dangerouslySetInnerHTML={{ __html: props.hostingTitle }}
          />
        )}
        {props.hostingParagraph && (
          <p
            class="mb-4 mt-4 mb-2 text-gray-400"
            dangerouslySetInnerHTML={{ __html: props.hostingParagraph }}
          />
        )}
        {Array.isArray(props.hostingList) && (
          <ul class="list-disc pl-5 mb-4 space-y-2">
            {props.hostingList.map((item, i) => (
              <li key={i} class="font-semibold text-[#02F67C]">{item.text}</li>
            ))}
          </ul>
        )}
        {props.hostingExtraParagraph && (
          <p
            class="mb-4 mt-4 mb-2 text-gray-400"
            dangerouslySetInnerHTML={{ __html: props.hostingExtraParagraph }}
          />
        )}
        {props.hostingExamples && (
          <div class="text-gray-400 space-y-4">
            {props.hostingExamples.map((example, i) => (
              <div key={i} class="flex flex-col gap-1">
                {example.label && (
                  <span class="font-semibold text-white">{example.label}</span>
                )}
                {example.value && <span class="pl-0">{example.value}</span>}
              </div>
            ))}
          </div>
        )}
        <div class="border-t border-gray-700 my-4"></div>
        {props.supportTitle && (
          <h2
            class="text-2xl font-semibold mt-6 mb-4 text-[#02F67C]"
            dangerouslySetInnerHTML={{ __html: props.supportTitle }}
          />
        )}
        <div>
          {props.supportList && (
            <div>
              {props.supportList.map((item, i) => (
                <div key={i}>
                  {item.title && (
                    <h3 class="font-bold text-white">{item.title}</h3>
                  )}
                  {item.text && <p class="text-gray-400">{item.text}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
        <div class="border-t border-gray-700 my-4"></div>
        {props.whyChangeTitle && (
          <h2
            class="text-2xl font-semibold mt-6 mb-3 text-[#02F67C]"
            dangerouslySetInnerHTML={{ __html: props.whyChangeTitle }}
          />
        )}
        {props.whyChangeParagraph1 && (
          <p
            class="mb-4 mt-4 mb-2 text-gray-400"
            dangerouslySetInnerHTML={{ __html: props.whyChangeParagraph1 }}
          />
        )}
        {props.whyChangeParagraph2 && (
          <p
            class="mb-4 mt-4 mb-2 text-gray-400"
            dangerouslySetInnerHTML={{ __html: props.whyChangeParagraph2 }}
          />
        )}
        {props.whatToDoTitle && (
          <h2
            class="text-2xl font-semibold mt-6 mb-3 text-[#02F67C]"
            dangerouslySetInnerHTML={{ __html: props.whatToDoTitle }}
          />
        )}
        {props.whatToDoParagraph1 && (
          <p
            class="mb-4 mt-4 mb-2 text-gray-400"
            dangerouslySetInnerHTML={{ __html: props.whatToDoParagraph1 }}
          />
        )}
        {props.whatToDoParagraph2 && (
          <p
            class="mb-4 mt-4 mb-2 text-gray-400"
            dangerouslySetInnerHTML={{ __html: props.whatToDoParagraph2 }}
          />
        )}
        {props.finalCTA && props.finalCTA.text && props.finalCTA.href && (
          <div class="flex flex-row gap-2 justify-center items-center w-full md:w-auto my-6">
            <a
              href={props.finalCTA.href}
              target="_blank"
              class="w-full md:w-auto hover:shadow-[0_0_40px_0_rgba(2,246,124,0.3)] transition-all duration-300 ease-out border-[#02F67C] border-2 text-base md:text-lg px-4 py-1 md:px-4 lg:py-2 font-extrabold text-[#0A2121] bg-[#02F67C] md:hover:bg-[#2FD180] rounded-[10px] flex items-center justify-center"
            >
              {props.finalCTA.text}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
