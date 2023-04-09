import ImpactCalculator from "deco-sites/starting/islands/ImpactCalculator.tsx";

export interface Props{
    mainText: string;
    formInfos:{
        websiteLabel: string;
        sessionsLabel: string;
        conversionLabel: string;
        averageOrderLabel: string;
        trafficSplitLabel: string;
        trafficMobile: string;
        trafficDesktop: string;
    }
    buttonText: string;
}

  function ImpactCalculatorSection(props: Props) {
    return <ImpactCalculator {...props} />;
  }
  
  export default ImpactCalculatorSection;
  