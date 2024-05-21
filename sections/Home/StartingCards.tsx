import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Starting {
    /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
     */  
    content: string;
    image: ImageWidget;
    href: string;
}

export interface Props {
    /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
     */   
    title?: string;
    cards?: Starting[];
}

export default function StartingCards({
    title = "Loved by builders.",
    cards = [
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/88b0bc70-00a1-4330-9f2e-88e3b68d3e12',
            content: '"deco.cx makes creating high-performance websites easy!"',
            href: '#'
        },
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/ed554700-2d66-43e2-b6b2-e1844a2db689',
            content: '"Figma, vscode and WordPress abilities all in one interface, this is amazing.. I just wish it could be free for students like me, would have to wait till i get a job to be able to afford this 😣"',
            href: '#'
        },
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/5ea5f2ce-0a0e-4105-8333-2cbddc6c1c6e',
            content: `"It's exciting to see a platform that not only speeds up frontend development but also fosters collaboration between developers and marketing teams. The seamless integration of modern technologies and the focus on both developer power and ease of use are impressive."`,
            href: '#'
        },
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/0b4a74da-5050-4641-a128-df3b606bfd05',
            content: `"Wow!!! 🚀 This is a game changer for headless ecommerce! Have seen the product in action and it absolutely rocks! The best news is this product has happy live customers using it day in day out and have seen great value out of the tool!"`,
            href: '#'
        },
        {
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/31035191-0815-4a14-b2a5-559c451a19a3',
            content: '',
            href: '#'
        },
    ]
}: Props) {
  return (
    <div class="lg:mx-auto lg:max-w-6xl relative z-10 px-4 py-14 lg:py-8 lg:px-0 flex flex-col gap-20 justify-center items-center">
        {
            title &&
            <h2 class="font-albert-sans text-3xl lg:text-5xl font-medium text-white text-center" dangerouslySetInnerHTML={{
                __html: title
            }}></h2>
        }
        <div class="columns-1 lg:columns-3 gap-8 w-full">
            {
                cards?.map(card => (
                    <div class="bg-[#162121] p-[1px] rounded-2xl flex-1 mb-4 overflow-hidden">
                        <div class="bg-[#0D1717] h-full flex flex-col justify-between py-4 px-6 gap-4 rounded-2xl">
                            <div  class="font-albert-sans text-base text-[#949E9E]" dangerouslySetInnerHTML={{
                                __html: card.content
                            }}/>
                            <div class="flex flex-row justify-between items-center">
                                <div class="flex flex-row items-center gap-4">
                                    <Image
                                        width={32}
                                        src={card.image}
                                        alt={card.image}
                                        decoding="async"
                                        loading="lazy"
                                    />
                                    <div  class="font-albert-sans text-base text-white" dangerouslySetInnerHTML={{
                                        __html: card.content
                                    }}/>
                                </div>
                                <a href={card.href}>
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
