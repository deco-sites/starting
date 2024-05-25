import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface TrustSignal {
    icon: AvailableIcons
    title: string
    subTitle: string
}

export interface Props {
    trustSignals?: TrustSignal[];
}

export default function TrustSignals({
    trustSignals,
}: Props) {
  return (
    <div class={`lg:mx-auto pb-14 lg:pb-28 z-20 lg:max-w-[1440px] relative z-10 flex flex-col justify-center items-center`}>
        {   
            trustSignals &&
            trustSignals.length > 0 &&
            <div class="flex flex-row justify-center items-center gap-6 pt-[22px]">
                {
                    trustSignals.map(trustSignal => (
                        <div class="flex flex-col justify-center items-center">
                            <Icon
                                class="mb-1"
                                id={trustSignal.icon}
                                width={35}
                                height={35}
                            />
                            <p class="font-albert-sans inline-block text-xs text-center text-gray-400" dangerouslySetInnerHTML={{
                                __html: trustSignal.subTitle
                            }}></p>
                            <p class="font-albert-sans inline-block text-base text-center text-white" dangerouslySetInnerHTML={{
                                __html: trustSignal.title
                            }}></p>
                        </div>
                    ))
                }
            </div>
        }
    </div>
  );
}
