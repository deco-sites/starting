import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface Feature {
    icon: AvailableIcons;
    /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
     */  
    description: string;
}

export interface Props {
    /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
     */   
    title?: string;
     /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
     */   
    subTitle?: string;
    features?: Feature[];
}

export default function Features({
    title = "deco.cx is the platform that delivers:",
    subTitle = "so serious websites evolve 10x faster",
    features = [
        {
            icon: 'Cell',
            description: 'High<br /> Performance'
        },
        {
            icon: 'Cell',
            description: 'Fast<br /> Execution'
        },
        {
            icon: 'Cell',
            description: 'Easy<br /> Personalization'
        }
    ]
}: Props) {
  return (
    <div class="lg:mx-auto lg:max-w-6xl relative z-10 px-4 py-14 lg:py-0 lg:px-0 lg:h-screen flex flex-col gap-12 justify-center items-center">
        {
            title &&
            <h2 class="font-albert-sans text-3xl lg:text-5xl font-medium text-white text-center" dangerouslySetInnerHTML={{
                __html: title
            }}></h2>
        }
        <div class="flex flex-col lg:flex-row gap-8 w-full">
            {
                features?.map(mark => (
                  <div class="bg-gradient-to-r from-[#272D2D] to-[#0B1612] p-[1px] rounded-2xl flex-1">
                    <div class="bg-[#0D1717] h-full flex flex-row justify-between py-4 px-6 gap-4 rounded-2xl">
                        <div  class="font-albert-sans text-[30px] text-white" dangerouslySetInnerHTML={{
                            __html: mark.description
                        }}/>
                        <Icon id={mark.icon} size={48} />
                    </div>
                    </div>
                ))
            }
        </div>
        {
            subTitle &&
            <h2 class="font-albert-sans text-2xl lg:text-4xl text-white text-center" dangerouslySetInnerHTML={{
                __html: subTitle
            }}></h2>
        }
    </div>
  );
}
