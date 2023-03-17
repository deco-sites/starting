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
    const [open, setOpen] = useState(true);
    return (
            <div>
                <div class="md:px-[5rem] pt-6 md:pt-[4rem] bg-[#053535] rounded max-w-screen-2xl m-auto overflow-hidden animate-backgound-color">
                    <div class="px-3 md:px-0 flex flex-row gap-[4%]">
                        <div class="relative w-[48%] flex-shrink-0">
                            <p class="font-inter not-italic font-medium text-white text-[20px] leading-[24.2px] pb-4 md:text-[32px] md:leading-[38.73px]">
                                {props.leftHeader}
                            </p>
                            <div class="cursor-pointer"  onClick={() => {setOpen(!open)}}>
                                <div class="absolute bg-[#F3FFF9] opacity-50 h-0.5 w-full bottom-0 mt-4"></div>
                                <div class={open ? "absolute bg-[#00FF80] opacity-100 h-0.5 w-full bottom-0 mt-4 animate-time-line-first" : "absolute bg-[#00FF80] opacity-100 h-0.5 w-full bottom-0 mt-4 animate-time-line-second"}></div>
                            </div>
                        </div>
                        <div class="relative w-[48%] flex-shrink-0">
                            <p class="font-inter not-italic font-medium text-white text-[20px] leading-[24.2px] pb-4 md:text-[32px] md:leading-[38.73px]">
                                {props.rightHeader}
                            </p>
                            <div class="">
                                <div class="absolute bg-[#F3FFF9] opacity-50 h-0.5 w-full bottom-0 mt-4"></div>
                                <div class="absolute bg-[#00FF80] opacity-100 h-0.5 w-full bottom-0 mt-4 animate-time-line-second"></div>
                            </div>
                        </div>
                    </div>
                    <div class="px-3 md:px-0 flex flex-row gap-3 md:gap-[4%] py-6 md:pt-12 overflow-hidden">
                        <div class="relative flex flex-col w-[100%] md:w-[48%] gap-8 flex-shrink-0">
                            <p class="font-inter not-italic font-normal text-[#F3FFF9] text-[48px] leading-[53px]">
                                {props.leftTitle}
                            </p>
                            <p class="font-sans not-italic font-normal text-[#F3FFF9] text-[20px] leading-[30px]">
                                {props.leftContent}
                            </p>
                        </div>
                        <div class="relative flex flex-col w-[100%] md:w-[48%] gap-8 flex-shrink-0">
                            <p class="font-inter not-italic font-normal text-[#F3FFF9] text-[48px] leading-[53px]">
                                {props.rightTitle}
                            </p>
                            <p class="font-sans not-italic font-normal text-[#F3FFF9] text-[20px] leading-[30px]">
                                {props.rightContent}
                            </p>
                        </div>
                    </div>
                    <div class="pl-3 md:pl-0 flex flex-row gap-3 md:gap-[4%] pt-6 h-[400px]">
                        <div class="flex flex-col w-[100%] md:w-[48%] gap-8 flex-shrink-0">
                            <div class="animate-cms-white z-0">
                                <img src={props.leftImage} class="w-full" alt="" />
                            </div>
                        </div>
                        <div class="flex flex-col w-[100%] md:w-[48%] gap-8 flex-shrink-0">
                            <div class="animate-cms-black z-0 border-t border-l"  style="border-image: linear-gradient(90deg, rgba(45,195,120,1) 20%, rgba(255,255,255,0) 100%) 1;">
                                <img src={props.rightImage} class="w-full" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
