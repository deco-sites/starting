import Icon from "site/components/ui/Icon.tsx";

/**
 * @title {{{title}}},{{{subtitleInfo}}}
 */
export interface Feature {
  title: string;
  subtitleInfo?: string;
  moreInfo?: string;
}

/**
 * @title {{{title}}}
 */
export interface Calculator {
  title?: string;
  pricePerPageview: number;
  pageviewsUnit?: number;
  initialPageviews?: number;
  pricePerProject: number;
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
  calculator: Calculator;
  accessButton: { title: string; href: string };
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
  calculator = {
    pageviewsUnit: 10,
    initialPageviews: 50,
    pricePerProject: 9,
    pricePerPageview: 0
  },
  accessButton,
}: PricingCardProps) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <div>
          <p>
            <span>$ {9}</span>/month
          </p>
          {useAnnualDiscount && <div>{annualDiscount}% off</div>}
        </div>
        <p>{subtitle}</p>
      </div>
      <div>
        <p
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />
        {features.map((feature: Feature) => (
          <div>
            <Icon id="Check" />
            <span>{feature.title}</span>
            <span>{feature.subtitleInfo}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCard;
