import { useSignal } from "@preact/signals";
import { JSX } from 'preact'

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

export default function ImpactCalculator({ mainText, formInfos, buttonText } : Props){

    const labelClass = ""
    const inputClass = "w-full mt-2 pl-4 border-1 border-dark-green h-[52px] rounded-[4px]"

    const website = useSignal("")
    const sessions = useSignal("")
    const conversion = useSignal("")
    const average = useSignal("")

    const desktopPercent = useSignal<number | undefined>(50)
    const mobilePercent = useSignal<number | undefined>(50)

    const handleChange = (e : HTMLInputElement | null) => {
        console.log(e?.value)
        mobilePercent.value = Number(e?.value)
        desktopPercent.value = 100 - Number(e?.value)
        console.log(73 + (Number(mobilePercent) / 100 * 18))
    }

    const handleClick = (e : JSX.TargetedMouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${website.value}`)
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
    }

    const mobileNumber = Number(mobilePercent)

    let left = `calc(${mobilePercent}% - ${(73 + (Number(mobilePercent) / 100 * 18))}px)`

    if(73 + (mobileNumber / 100 * 18) <= 75){
        left = "0px"
    }else if(73 + (mobileNumber / 100 * 18) >= 89){
        left = `calc(100% - 170px);`
    }

    //const comment = {`left: calc(${( 73 + (Number(mobilePercent) / 100 * 18)) <= 75 ?73 + (Number(mobilePercent) / 100 * 18) >= 89 ? "" : "0px" :Number(mobilePercent) + "% - " + (73 + (Number(mobilePercent) / 100 * 18))}px)`}

    return(
        <section class="">
            <div class="absolute bg-dark-green w-full h-[180px]"></div>
            <div class="relative bg-white flex flex-col md:flex-row gap-4 md:gap-16 border-dark-green border-1 rounded-[24px] max-w-[1440px] md:m-auto mx-4 p-4 md:p-16 z-10">
                <div class="md:max-w-[40%]">
                    <p class="text-2xl md:text-5xl text-center md:leading-[53px] text-dark-green">{mainText}</p>
                </div>
                <div>
                    <form action="#" class="flex flex-col gap-6">
                        <div>
                            <label htmlFor="">{formInfos.websiteLabel}</label>
                            <input 
                                type="text" 
                                value={website} 
                                onInput={(e) => website.value = (e.target as HTMLInputElement).value} 
                                class={`${inputClass}`}
                            />
                        </div>
                        <div class="grid grid-cols-3 gap-6 justify-between">
                            <div class="flex flex-col justify-between">
                                <label htmlFor="">{formInfos.sessionsLabel}</label>
                                <input 
                                    type="number" 
                                    value={sessions} 
                                    onInput={(e) => sessions.value = (e.target as HTMLInputElement).value} 
                                    class={`${inputClass}`}
                                />
                            </div>
                            <div class="flex flex-col justify-between">
                                <label htmlFor="">{formInfos.conversionLabel}</label>
                                <div class="relative">
                                    <input 
                                        type="number" 
                                        value={conversion} 
                                        onInput={(e) => conversion.value = (e.target as HTMLInputElement).value} 
                                        class={`${inputClass}`}
                                    />
                                    <span class="absolute top-[24px] right-[10px] text-[#66736C] text-[14px]">%</span>
                                </div>          
                            </div>
                            <div class="flex flex-col justify-between">
                                <label htmlFor="">{formInfos.averageOrderLabel}</label>
                                <div class="relative">
                                    <input 
                                        type="number" 
                                        value={average} 
                                        onInput={(e) => average.value = (e.target as HTMLInputElement).value} 
                                        class={`${inputClass}`}
                                    />
                                    <span class="absolute top-[24px] right-[10px] text-[#66736C] text-[14px]">$</span>
                                </div>      
                            </div>  
                        </div>
                        <div class="flex flex-col gap-2">
                            <label htmlFor="">{formInfos.trafficSplitLabel}</label>
                            <input 
                                type="range" 
                                class="w-full mb-2" 
                                min="0" 
                                max="100"
                                onInput={(e) => handleChange(e.target as HTMLInputElement)}/>
                            <div 
                                class="relative bg-black w-[170px] text-center py-2 text-almost-white text-[12px]"
                                style={`left: ${left}`}
                            >
                                <span 
                                    class="absolute top-[-5px] inline block w-0 h-0 border-l-[5px] border-r-[5px]  border-transparent" 
                                    style={`border-bottom:5px solid black; left: calc(50% - 8px)`}
                                ></span>
                                {`${mobilePercent}% mobile / ${desktopPercent}% desktop`}
                            </div>
                            <div class="flex justify-between">
                                <span class="max-w-[50px] text-[#66736C] text-[14px]">{formInfos.trafficMobile}</span>
                                <span class="max-w-[50px] text-[#66736C] text-[14px] text-right">{formInfos.trafficDesktop}</span>
                            </div>
                        </div>
                        <button
                        class="py-4 px-6 w-full bg-dark-green text-white rounded-[4px]"
                        onClick={(e) => handleClick(e)}
                        >
                            {buttonText}
                        </button>
                    </form>
                </div>                        
            </div>
        </section>
    )
}