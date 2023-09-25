import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import InterestForm from "../../components/ui/InterestForm.tsx";
import type { Props as InterestFormProps } from "../../components/ui/InterestForm.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface About {
  title?: string;
  source?: DecoImage;
  speakerName?: string;
  speakerRole?: string;
  subText: HTML;
}
export interface Props {
  title?: string;
  text?: HTML;
  form?: InterestFormProps;
  aboutSection?: Array<About>;
}

export default function Content({
  title = "O que você vai ver",
  text =
    "A Black Friday está chegando. E a sua loja está pronta?Criar uma landing page alta conversão é uma das melhores maneiras de fazer isso. Uma landing page bem-feita pode ajudar a direcionar o tráfego para sua loja online, aumentar o seu brand awareness e impulsionar as vendas. Ao final deste webinar, você estará pronto para construir sua própria landing page otimizada, com performance incomparável, para a Black Friday. O que vamos lhe mostrar: Dicas de como criar um landing page de alta conversão Como você pode se preparar para a Black Friday A criação de uma página ao vivo em 5 minutos usando deco.cx",
  form: _form,
  aboutSection = [
    {
      title: "Palestrante",
      "source": "/Baby_01 1.png",
      "speakerName": "Rafael Crespo",
      "speakerRole": "co-Founder e CRO na deco.cx",
      "subText":
        "Rafael, mais conhecido como Baby, Lorem ipsum dolor sit amet consectetur. Aliquet felis porttitor neque in dictumst lacus et platea. Tellus est venenatis sed pellentesque.",
    },
  ],
}: Props) {
  return (
    <>
      <div class=" w-full mx-auto flex font-albert-sans flex-col pb-20 px-8 gap-16 md:px-12 lg:px-16 lg:pb-28 pt-8 lg:flex-row items-center lg:items-start justify-center lg:max-w-[1440px] text-xl md:text-base">
        <div className="flex flex-col justify-between self-stretch items-center lg:container max-w-[1440px] lg:items-start lg:flex-row">
          <div className="flex flex-col w-full items-center mb-16 gap-4 self-stretch lg:items-start lg:mb-0 lg:max-w-[48%] xl:max-w-[619px]">
            <h2 class="flex-none font-bold text-3xl lg:text-4xl/[110%] xl:text-5xl/[110%] pb-2 w-full">
              {title}
            </h2>
            <div
              class="text-black opacity-60 text-xl"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
          <div id="webinar_form" className="flex gap-16 flex-col lg:w-[411px] xl:w-[511px]">
            <InterestForm {..._form} />
            {aboutSection.map((
              { title, source, speakerName, speakerRole, subText },
            ) => (
              <div className="flex flex-col items-start gap-4 self-stretch">
                <h3 className="items-center text-center font-normal text-2xl xl:text-[2rem] leading-[118.75%] text-[#0a2121] opacity-90">
                  {title}
                </h3>
                <div className="flex self-stretch items-center gap-4">
                  <img
                    class="object-cover rounded-full w-[100px]"
                    src={source}
                    alt={title}
                  />
                  <div className="flex flex-col items-start text-black flex-1">
                    <h4 class="font-bold leading-[118.75%] text-xl">
                      {speakerName}
                    </h4>
                    <p class="text-base font-normal opacity-60">
                      {speakerRole}
                    </p>
                  </div>
                </div>
                <div
                  class="text-lg xl:text-xl text-black font-normal opacity-60 leading-[150%]"
                  dangerouslySetInnerHTML={{ __html: subText }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
