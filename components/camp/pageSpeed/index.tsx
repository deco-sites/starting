import Image, { IImage } from "deco-sites/starting/components/ui/Image.tsx";
import ArrowRight from "deco-sites/starting/components/ui/icons/ArrowRight.tsx";
import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import { Props as PropsCalculator } from "deco-sites/starting/components/ui/ImpactCalculator.tsx";
import ImpactCalculator from "deco-sites/starting/islands/ImpactCalculator.tsx";
import CardInfo from "deco-sites/starting/components/camp/pageSpeed/cardInfo.tsx";

export interface Props {
  title: string;
  subtitle: string;
  text: string;
  pageSpeed: {
    label: string;
    store: IImage;
    deco: IImage;
  }[];
  calculator: PropsCalculator;
}

export default function PageSpeed(props: Props) {
  return (
    <section class="bg-dark-green px-6 py-14">
      <div class="max-w-[1280px] mx-auto">
        <h3 class="font-inter font-regular text-5xl text-almost-white mb-10 md:text-center">
          {props.title}
        </h3>

        <div class="md:flex justify-between items-center md:px-40">
          <div class="mb-8 md:max-w-[345px]">
            <div>
              <p class="font-medium text-xl text-almost-white mb-6">
                {props.subtitle}
              </p>

              <p class="font-regular text-xl text-almost-white">
                {props.text}
              </p>
            </div>
          </div>

          <div class="flex flex-col gap-[40px]">
            {props.pageSpeed.map((page, index) => (
              <>
                {index === 0 && (
                  <div class="flex justify-between items-center">
                    <p class="font-regular text-xl text-almost-white">
                      Atual
                    </p>
                    <Icon id="DecoIconWhite" size={57} />
                  </div>
                )}

                <div>
                  <p class="font-regular text-xl text-almost-white text-center">
                    {page.label}
                  </p>

                  <div key={page.label} class="flex justify-between gap-[53px]">
                    <Image image={page.store} />
                    <div class="flex flex-col justify-center">
                      <ArrowRight />
                    </div>
                    <Image image={page.deco} />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

        <div class="mt-28 mb-14">
          {props.calculator && (
            <ImpactCalculator isAdditionalComponent {...props.calculator} />
          )}
        </div>

        <div class="flex flex-col md:grid md:grid-cols-3 md:px-2 gap-10">
          <CardInfo
            title="Aumente a conversão"
            text="Melhore a conversão por meio da navegação sem interrupções, aumentando a satisfação e o engajamento do cliente."
          />
          <CardInfo
            title="Aumente o tráfego orgânico"
            text="Eleve o ranking de SEO, visibilidade online e confiança com tempos de carregamento ultrarrápidos."
          />
          <CardInfo
            title="Menos despesas com PPC"
            text="Reduza as despesas com mídia paga, diminuindo as taxas de rejeição, aumentando as pontuações de qualidade e otimizando os investimentos em anúncios."
          />
        </div>
      </div>
    </section>
  );
}
