import type { ImageWidget } from "apps/admin/widgets.ts";

interface CardProps {
    image?: ImageWidget;
    icon?: string;
    title?: string;
    description?: string;
}

interface WhyUsProps {
    badge: {
        text: string;
    };
    title: {
        line1: string;
        line2: string;
    };
    cards: CardProps[];
    dnaImage: ImageWidget;
}

const WhyUs = ({ badge, title, cards, dnaImage }: WhyUsProps) => {
    return (
        <div class="max-w-container mx-auto lg:max-w-[1440px] px-4 md:px-16 lg:px-16 py-16 sm:py-24 md:py-28 lg:py-32 overflow-hidden md:overflow-visible">
            <div class="flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-20 relative">
                <div class="w-full lg:w-1/2">
                    <div class="flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-10">
                        <div class="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full border border-[#333737]">
                            <div class="w-2 h-2 bg-secondary rounded-full"></div>
                            <span class="text-[#a1acaa] text-xs sm:text-sm">{badge.text}</span>
                        </div>
                        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                            {title.line1}<br/>{title.line2}
                        </h2>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {cards.map((card, index) => (
                            <div key={index} class="p-5 sm:p-6 md:p-8 min-h-48 sm:min-h-56 md:min-h-64 rounded-md border border-[#333737] relative overflow-hidden">
                                <div class="absolute z-5 inset-0">
                                    <img src={card.image} class="w-full h-full object-cover" />
                                </div>
                                <div class="flex flex-col justify-end h-full bottom-4 left-4 right-4 z-10">
                                    <div class="h-4 w-4 sm:h-5 sm:w-5 text-primary mb-1">
                                        <div dangerouslySetInnerHTML={{__html: card.icon || ""}}></div>
                                    </div>
                                    <h3 class="text-white text-base sm:text-lg mb-1">{card.title}</h3>
                                    <p class="text-[#a1acaa] text-xs sm:text-sm">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="w-full lg:w-1/2 h-full right-0 mt-10 lg:mt-0 pointer-events-none hidden md:block">
                    <div class="relative">
                        <img src={dnaImage} class="h-full w-[150%] sm:w-[200%] object-cover scale-[1.5] sm:scale-[2] -right-1/4 sm:-right-1/2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
