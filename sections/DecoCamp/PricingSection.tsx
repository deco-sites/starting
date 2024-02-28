interface Plan {
  /**
   * @description The description of subtitle.
   */
  subtitle: string;
  /**
   * @description The description of features.
   */
  features: string[];
}

interface Props {
  /**
   * @description The description of title.
   */
  title?: string;
  /**
   * @description The description of plans.
   */
  plans?: Plan[];
  /**
   * @description The description of monthlyPrice.
   */
  monthlyPrice?: string;
  /**
   * @description The description of billedAnnually.
   */
  billedAnnually?: string;
  /**
   * @description The description of buttonText.
   */
  buttonText?: string;
}

export default function PricingSection({
  title = "Pricing",
  plans = [
    { subtitle: "Basic", features: ["Feature 1", "Feature 2", "Feature 3"] },
    { subtitle: "Pro", features: ["Feature 1", "Feature 2", "Feature 3"] },
    {
      subtitle: "Premium",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
  ],
  monthlyPrice = "$19.99/month",
  billedAnnually = "Billed Annually",
  buttonText = "Get Started",
}: Props) {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative z-10 flex flex-col p-12 rounded-3xl shadow-lg bg-[#000D0D] text-white">
        <h2 className="text-4xl font-bold text-center mb-8">{title}</h2>
        <div className="flex justify-between gap-8">
          {plans?.map((plan, index) => (
            <div key={index} class="flex-1">
              <h3 className="text-2xl font-bold mb-2">{plan.subtitle}</h3>
              <ul className="text-gray-600">
                {plan.features.map((feature) => <li>{feature}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <h4 className="text-3xl font-bold">{monthlyPrice}</h4>
          <p className="text-gray-600">{billedAnnually}</p>

          <button
            class={`mt-4 group relative relative overflow-hidden rounded-full hover:bg-gradient-to-r px-6 py-2 lg:px-8 lg:py-3 transition-all duration-300 ease-out bg-[#02F67C] hover:from-[#02F67C] hover:to-[#06E474] text-black hover:shadow-hero`}
          >
            <span class="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40">
            </span>
            <span class="relative font-medium lg:text-[20px]">
              {buttonText}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
