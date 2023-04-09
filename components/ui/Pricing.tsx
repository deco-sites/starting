import CheckIcon from "deco-sites/starting/components/ui/CheckIcon.tsx";

export interface Plan{
    title: string;
    text: string;
    price: string;
    priceCustom: boolean;
    button: {
        text: string;
        link: string;
    }
    benefits: string[];
}
  
export interface Props {
    title: string;
    text: string;
    freePlan : Plan;
    paidPlans : Plan[];
}

function Button({text, link} : {text: string; link: string}){
    return(
        <a href={link} class="block w-full text-center font-semibold rounded-[48px] py-3 px-[22px] bg-highlight border-2 border-highlight duration-500 hover:(bg-transparent text-highlight)">{text}</a>
    )
}

function Price({price, custom} : {price: string; custom: boolean}){
    return(
        <div class={`flex ${custom ? "justify-items-start" : "justify-center"} flex items-center gap-2 min-h-[72px]`}>
            <p class={`text-highlight ${custom ? "text-[32px]" : "text-[48px]"}`}>{price}</p>
            {
                !custom && <span class="text-almost-white">per <br /> month</span>
            }
            
        </div>
    )
}

export default function Pricing({ title, text, freePlan, paidPlans } : Props){

    return(
        <section class="py-[63px] bg-linear">
            <div class="max-w-screen-2xl m-auto pt-[80px] px-4 md:px-0">
                <div class="flex flex-col gap-4 max-w-[760px] mx-auto text-center">
                    <h1 class="text-[42px] leading-[42px] md:text-[52px] text-almost-white font-semibold">{title}</h1>
                    <p class="text-[18px] md:text-[22px] text-almost-white">{text}</p> 
                </div>

                <div class="flex flex-col md:flex-row justify-center items-center gap-[72px] mt-[40px] md:mt-[80px]">
                    <div class="bg-linear-border p-[1px] rounded-[8px] w-full max-w-[460px]">
                        <div class="flex flex-col gap-[20px] p-8 bg-linear-pricing rounded-[8px]">
                            <div>
                                <h2 class="text-highlight text-[32px] font-semibold">{freePlan.title}</h2>
                                <p class="text-almost-white text-[13px] ">{freePlan.text}</p>
                            </div>
                            <Price price={freePlan.price} custom={freePlan.priceCustom}/>
                            <Button link={freePlan.button.link} text={freePlan.button.text}/>
                        </div>
                    </div>
                    <div>
                        <ul>
                        {
                            freePlan.benefits.map(benefit => {
                                return(
                                    <li class="text-almost-white flex gap-2 py-1">
                                        <CheckIcon color="#02F67C" />{benefit}
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>

                <div class="flex flex-row gap-8 overflow-auto justify-items-start md:justify-around pt-[40px] md:py-[80px] px-2 md:px-10">
                    {
                        paidPlans.map(plan => {
                            return(
                                <div class="bg-linear-y-border p-[1px] rounded-[8px] w-full max-w-[300px] min-w-[75vw] md:min-w-[0]">
                                    <div class="flex flex-col gap-[20px] p-8 bg-linear-pricing-y rounded-[8px]">
                                        <h2 class="text-almost-white text-[22px] font-semibold">{plan.title}</h2>
                                        <p class="text-almost-white text-[13px] min-h-[40px]">{plan.text}</p>
                                        <Price price={plan.price} custom={plan.priceCustom}/>
                                        <ul>
                                            {
                                                plan.benefits.map(benefit => {
                                                    return(
                                                        <li class="text-almost-white flex gap-2 py-1">
                                                            <CheckIcon color="white" />{benefit}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <Button link={plan.button.link} text={plan.button.text}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}