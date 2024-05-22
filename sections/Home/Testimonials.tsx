import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Testimonial {
    image: ImageWidget;
    /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
     */  
    description: string;
    /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
     */  
    name: string;
    href: string;
}

export interface Props {
    /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
     */   
    title?: string;
    testimonials?: Testimonial[];
}

export default function Testimonials({
    title = "Loved by builders.",
    testimonials = [
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/88b0bc70-00a1-4330-9f2e-88e3b68d3e12',
            name: 'Sibelius Seraphini',
            description: '"deco.cx makes creating high-performance websites easy!"',
            href: '#'
        },
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/ed554700-2d66-43e2-b6b2-e1844a2db689',
            name: 'Officialstarone',
            description: '"Figma, vscode and WordPress abilities all in one interface, this is amazing.. I just wish it could be free for students like me, would have to wait till i get a job to be able to afford this 😣"',
            href: '#'
        },
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/5ea5f2ce-0a0e-4105-8333-2cbddc6c1c6e',
            name: 'Alex Dulub',
            description: `"It's exciting to see a platform that not only speeds up frontend development but also fosters collaboration between developers and marketing teams. The seamless integration of modern technologies and the focus on both developer power and ease of use are impressive."`,
            href: '#'
        },
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/0b4a74da-5050-4641-a128-df3b606bfd05',
            name: 'Andres Pradilla',
            description: `"Wow!!! 🚀 This is a game changer for headless ecommerce! Have seen the product in action and it absolutely rocks! The best news is this product has happy live customers using it day in day out and have seen great value out of the tool!"`,
            href: '#'
        },
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/31035191-0815-4a14-b2a5-559c451a19a3',
            name: 'Joep van den Bogaert',
            description: `"Wow, such an impressive product. Really love how you bring together development and content management. The automatic forms based on the typescript models are awesome."`,
            href: '#'
        },
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/adbf4b08-e54f-4d4a-aecf-94de3974f0e0',
            name: 'khaosdoctor',
            description: `"This is AWESOME! I’ve been looking to find something like this for my pages for ages. The Deno core using TypeScript is the ABSOLUTE BEST mix ever. Loved the work you guys are doing. Hope you continue to disrupt even more!"`,
            href: '#'
        },
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/adbf4b08-e54f-4d4a-aecf-94de3974f0e0',
            name: 'p2hari',
            description: `"oh man, are you folks for real!!! I just checked out the website, git and discord channels (I just joined in) and you are awesome. Open source core and so much more work on git. Bringing partytown to deno etc. etc."`,
            href: '#'
        },
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/adbf4b08-e54f-4d4a-aecf-94de3974f0e0',
            name: 'nopro',
            description: `"This looks amazing, like a modern take on Dreamweaver or something. The low code IDE may soon return! The ability to switch between no-code/code is great for teaching people to code. Dreamweaver (and MySpace profiles) basically taught me CSS."`,
            href: '#'
        },
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/5b024b3e-d57c-48bc-8818-de33cf4d447a',
            name: 'Marco Ferreira',
            description: `"Man, I don't even know who to tag here hahaha, but I wanted to give my recognition to deco itself! To the folks who founded it and those who keep updating and improving the platform. Excellent work for the client in terms of registration flexibility and simple for the developer!"`,
            href: '#'
        },
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/726cd991-7b37-45a7-b1d2-e1af364ea926',
            name: 'Gustavo Vasconcellos',
            description: `"A round of applause for the team that has significantly improved the usability of the Admin since the last hackathon. Both the section editor and the library are GREAT. Special recognition to whoever had the idea and implemented the change to repo branches in the Admin: Great job! 👏"`,
            href: '#'
        },
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/3c766de4-48a5-46c9-aff4-6edd766c949c',
            name: 'Julyanne Taboaço',
            description: `"I’m sure you will soar even higher; this is just the beginning. Very grateful for this partnership and for believing in you from the very start. And what a partnership! You are tireless in evolving and suggesting improvements, embracing any challenges we face, and always ready to support and grow with us!"`,
            href: '#'
        },
    ]
}: Props) {
  return (
    <div class="lg:mx-auto lg:max-w-[1440px] relative z-10 px-4 py-14 lg:py-40 lg:px-0 flex flex-col gap-20 justify-center items-center">
        {
            title &&
            <h2 class="font-albert-sans text-3xl lg:text-5xl font-medium text-white text-center" dangerouslySetInnerHTML={{
                __html: title
            }}></h2>
        }
        <div class="columns-1 lg:columns-3 gap-8 w-full">
            {
                testimonials?.map(testimonial => (
                    <div class="bg-[#162121] p-[1px] rounded-2xl flex-1 mb-4 overflow-hidden">
                        <div class="bg-[#0D1717] h-full flex flex-col justify-between py-4 px-6 gap-4 rounded-2xl">
                            <div  class="font-albert-sans text-base text-[#949E9E] leading-6" dangerouslySetInnerHTML={{
                                __html: testimonial.description
                            }}/>
                            <div class="flex flex-row justify-between items-center">
                                <div class="flex flex-row items-center gap-4">
                                    <Image
                                        width={32}
                                        src={testimonial.image}
                                        alt={testimonial.image}
                                        decoding="async"
                                        loading="lazy"
                                    />
                                    <div  class="font-albert-sans text-base text-white" dangerouslySetInnerHTML={{
                                        __html: testimonial.name
                                    }}/>
                                </div>
                                <a href={testimonial.href}>
                                    <Image
                                        width={18}
                                        src={"https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/50f5e3c5-2b8a-4f4f-a0f9-87fb91d83144"}
                                        alt={"https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/50f5e3c5-2b8a-4f4f-a0f9-87fb91d83144"}
                                        decoding="async"
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  );
}
