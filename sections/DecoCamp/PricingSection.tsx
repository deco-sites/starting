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

export default function PricingSection(
  {
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
  }: Props,
) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex flex-col p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-4">{title}</h2>
        <div className="flex justify-between gap-4">
          {plans?.map((plan, index) => (
            <div key={index}>
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
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
