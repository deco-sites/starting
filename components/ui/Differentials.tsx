import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import Image from "deco-sites/std/components/Image.tsx"

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Sections{
    imagePosition: "left" | "right";
    image: LiveImage;
    title: string;
    subtitle: string;
    text: string
}

export interface Props{
    darkMode: boolean;
    title: string;
    sections: Sections[];
}

export default function  Differentials({ darkMode, title, sections } : Props) {

    return(
        <section class={`mt-12 ${darkMode ? "bg-dark-green" : "bg-linear"}`}>
            <div class="max-w-screen-2xl mx-auto px-6 md:px-28">
                <h2 class="text-[32px] md:text-[42px] text-white opacity-90 text-center">{title}</h2>
                <div class="mt-24 flex flex-col gap-16">
                    {
                        sections.map(section => {
                            return(
                                <div class={`flex gap-6 items-center justify-around flex-col-reverse md:(${section.imagePosition == "left" ? "flex-row" : "flex-row-reverse"})`}>
                                    <div>
                                        <Image 
                                            src={section.image}
                                            width={450}
                                        />
                                    </div>
                                    <div class="flex flex-col gap-[16px] max-w-[500px]">
                                        <h3 class="text-[32px] md:text-[48px] text-highlight">{section.title}</h3>
                                        <p class="text-[22px] md:text-[32px] text-white opacity-90">{section.subtitle}</p>
                                        <p class="text-[20px] md:text-[22px] text-white opacity-90">{section.text}</p>
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