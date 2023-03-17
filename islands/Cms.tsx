import { useState } from "preact/hooks";
import type { Image } from "$live/std/ui/types/Image.ts";

export interface Props {
    leftHeader: string;
    rightHeader: string;
    leftTitle: string;
    rightTitle: string;
    leftContent: string;
    rightContent: string;
    leftImage: Image;
    rightImage: Image;
  }


  export default function Cms(props: Props) {
    const [lineButton, setLineButton] = useState({
        leftColor: 'animate-backgound-color', leftHeader: 'animate-left-opacity', leftLine: 'animate-left-time-line', leftText: 'animate-left-text', leftImage: 'animate-left-image', leftImageMobile: 'animate-left-image-mobile',
                                                   rightHeader: 'animate-right-opacity', rightLine: 'animate-right-time-line', rightText: 'animate-right-text', rightImage: 'animate-right-image', rightImageMobile: 'animate-right-image-mobile'});
    return (
            <div>
                <div class={`md:px-[5rem] pt-6 md:pt-[4rem] bg-[#053535] md:rounded max-w-screen-2xl m-auto overflow-hidden ${lineButton.leftColor}`}>
                    <div class="px-3 md:px-0 flex flex-row gap-[4%]">
                        <div class="relative w-[48%] flex-shrink-0">
                            <p class={`font-inter not-italic font-medium text-white text-[20px] leading-[24.2px] pb-4 md:text-[32px] md:leading-[38.73px] ${lineButton.leftHeader}`}>
                                {props.leftHeader}
                            </p>
                            <div class="cursor-pointer"  onClick={() => {
                                    let aux = Object.assign({}, lineButton);

                                    if (aux.leftColor === 'animate-backgound-color') {
                                        aux.leftColor = 'animate-backgound-color-v2'
                                    } else {
                                        aux.leftColor = 'animate-backgound-color'
                                    }

                                    if (aux.leftHeader === 'animate-left-opacity') {
                                        aux.leftHeader = 'animate-left-opacity-v2'
                                    } else {
                                        aux.leftHeader = 'animate-left-opacity'
                                    }

                                    if (aux.leftLine === 'animate-left-time-line') {
                                        aux.leftLine = 'animate-left-time-line-v2'
                                    } else {
                                        aux.leftLine = 'animate-left-time-line'
                                    }

                                    if (aux.leftText === 'animate-left-text') {
                                        aux.leftText = 'animate-left-text-v2'
                                    } else {
                                        aux.leftText = 'animate-left-text'
                                    }

                                    if (aux.leftImage === 'animate-left-image') {
                                        aux.leftImage = 'animate-left-image-v2'
                                    } else {
                                        aux.leftImage = 'animate-left-image'
                                    }

                                    if (aux.leftImageMobile === 'animate-left-image-mobile') {
                                        aux.leftImageMobile = 'animate-left-image-mobile-v2'
                                    } else {
                                        aux.leftImageMobile = 'animate-left-image-mobile'
                                    }
                                    // right side 
                                    if (aux.rightHeader === 'animate-right-opacity') {
                                        aux.rightHeader = 'animate-right-opacity-v2'
                                    } else {
                                        aux.rightHeader = 'animate-right-opacity'
                                    }

                                    if (aux.rightLine === 'animate-right-time-line') {
                                        aux.rightLine = 'animate-right-time-line-v2'
                                    } else {
                                        aux.rightLine = 'animate-right-time-line'
                                    }

                                    if (aux.rightText === 'animate-right-text') {
                                        aux.rightText = 'animate-right-text-v2'
                                    } else {
                                        aux.rightText = 'animate-right-text'
                                    }

                                    if (aux.rightImage === 'animate-right-image') {
                                        aux.rightImage = 'animate-right-image-v2'
                                    } else {
                                        aux.rightImage = 'animate-right-image'
                                    }

                                    if (aux.rightImageMobile === 'animate-right-image-mobile') {
                                        aux.rightImageMobile = 'animate-right-image-mobile-v2'
                                    } else {
                                        aux.rightImageMobile = 'animate-right-image-mobile'
                                    }

                                    

                                    setLineButton(aux)
                            }}>
                                <div class="absolute bg-[#F3FFF9] opacity-50 h-0.5 w-full bottom-0 mt-4"></div>
                                <div class={`absolute bg-[#00FF80] opacity-100 h-0.5 w-full bottom-0 mt-4 ${lineButton.leftLine}`}></div>
                            </div>
                        </div>
                        <div class="relative w-[48%] flex-shrink-0">
                            <p class={`font-inter not-italic font-medium text-white text-[20px] leading-[24.2px] pb-4 md:text-[32px] md:leading-[38.73px] ${lineButton.rightHeader}`}>
                                {props.rightHeader}
                            </p>
                            <div class="cursor-pointer" onClick={() => {
                                let aux = Object.assign({}, lineButton);

                                if (aux.leftColor === 'animate-backgound-color-reverse') {
                                    aux.leftColor = 'animate-backgound-color-v2-reverse'
                                } else {
                                    aux.leftColor = 'animate-backgound-color-reverse'
                                }

                                if (aux.leftHeader === 'animate-right-opacity') {
                                    aux.leftHeader = 'animate-right-opacity-v2'
                                } else {
                                    aux.leftHeader = 'animate-right-opacity'
                                }

                                if (aux.leftLine === 'animate-right-time-line') {
                                    aux.leftLine = 'animate-right-time-line-v2'
                                } else {
                                    aux.leftLine = 'animate-right-time-line'
                                }

                                if (aux.leftText === 'animate-right-text') {
                                    aux.leftText = 'animate-right-text-v2'
                                } else {
                                    aux.leftText = 'animate-right-text'
                                }
                                if (aux.leftImage === 'animate-left-image-reverse') {
                                    aux.leftImage = 'animate-left-image-reverse-v2'
                                } else {
                                    aux.leftImage = 'animate-left-image-reverse'
                                }
                                if (aux.leftImageMobile === 'animate-left-image-mobile-reverse') {
                                    aux.leftImageMobile = 'animate-left-image-mobile-reverse-v2'
                                } else {
                                    aux.leftImageMobile = 'animate-left-image-mobile-reverse'
                                }



                                if (aux.rightHeader === 'animate-left-opacity') {
                                    aux.rightHeader = 'animate-left-opacity-v2'
                                } else {
                                    aux.rightHeader = 'animate-left-opacity'
                                }

                                if (aux.rightLine === 'animate-left-time-line') {
                                    aux.rightLine = 'animate-left-time-line-v2'
                                } else {
                                    aux.rightLine = 'animate-left-time-line'
                                }

                                if (aux.rightText === 'animate-left-text') {
                                    aux.rightText = 'animate-left-text-v2'
                                } else {
                                    aux.rightText = 'animate-left-text'
                                }
                                if (aux.rightImage === 'animate-right-image-reverse') {
                                    aux.rightImage = 'animate-right-image-reverse-v2'
                                } else {
                                    aux.rightImage = 'animate-right-image-reverse'
                                }
                                if (aux.rightImageMobile === 'animate-right-image-mobile-reverse') {
                                    aux.rightImageMobile = 'animate-right-image-mobile-reverse-v2'
                                } else {
                                    aux.rightImageMobile = 'animate-right-image-mobile-reverse'
                                }

                                setLineButton(aux)
                            }}>
                                <div class="absolute bg-[#F3FFF9] opacity-50 h-0.5 w-full bottom-0 mt-4"></div>
                                <div class={`absolute bg-[#00FF80] opacity-100 h-0.5 w-full bottom-0 mt-4 ${lineButton.rightLine}`}></div>
                            </div>
                        </div>
                    </div>
                    <div class="px-3 md:px-0 flex flex-row gap-3 md:gap-[4%] py-6 md:pt-12 overflow-hidden">
                        <div class="relative flex flex-col w-[100%] md:w-[48%] gap-8 flex-shrink-0">
                            <p class={`font-inter not-italic font-normal text-[#F3FFF9] text-[48px] leading-[53px] ${lineButton.leftImageMobile} md:${lineButton.leftText}`}>
                                {props.leftTitle}
                            </p>
                            <p class={`font-sans not-italic font-normal text-[#F3FFF9] text-[20px] leading-[30px] ${lineButton.leftImageMobile} md:${lineButton.leftText}`}>
                                {props.leftContent}
                            </p>
                        </div>
                        <div class="relative flex flex-col w-[100%] md:w-[48%] gap-8 flex-shrink-0">
                            <p class={`font-inter not-italic font-normal text-[#F3FFF9] text-[48px] leading-[53px] ${lineButton.rightImageMobile} md:${lineButton.rightText}`}>
                                {props.rightTitle}
                            </p>
                            <p class={`font-sans not-italic font-normal text-[#F3FFF9] text-[20px] leading-[30px] ${lineButton.rightImageMobile} md:${lineButton.rightText}`}>
                                {props.rightContent}
                            </p>
                        </div>
                    </div>
                    <div class="pl-3 md:pl-0 flex flex-row gap-3 md:gap-[4%] pt-6 lg:h-[420px] xl:h-[510px] 2xl:h-[530px] transition ease-in-out group">
                        <div class="flex flex-col w-[100%] md:w-[48%] gap-[2%] flex-shrink-0">
                            <div class={`${lineButton.leftImageMobile} md:${lineButton.leftImage} z-0`}>
                                <img src={props.leftImage} class="w-full" alt="" />
                            </div>
                        </div>
                        <div class="flex flex-col w-[100%] md:w-[48%] gap-[2%] flex-shrink-0">
                            <div class={`${lineButton.rightImageMobile} md:${lineButton.rightImage} z-0 border-t border-l`} style="border-image: linear-gradient(90deg, rgba(45,195,120,1) 20%, rgba(255,255,255,0) 60%) 1;">
                                <img src={props.rightImage} class="w-full" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
