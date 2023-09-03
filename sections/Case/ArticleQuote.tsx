export interface Props {
    /** @format textarea */
    quote: string;
    author: string;
    role: string;
    /** @format color */
    barColor?: string;
}

export default function ArticleQuote({
    quote,
    author,
    role,
    barColor
}: Props) {
    return (
        <div class="lg:container">
            <div class="mx-4 md:mx-12 lg:mx-auto lg:w-8/12">
                <div class="flex flex-col gap-3 py-5 lg:py-16">
                    <div class="flex gap-6 items-stretch">
                        <div class="flex-none w-[4px]" style={{ backgroundColor: barColor || "#0A2121" }}></div>
                        <div class="flex-auto text-2xl">
                            {quote}
                        </div>
                    </div>
                    <div class="text-right">
                        {author}, {role}
                    </div>
                </div>
            </div>
        </div>
    )
}