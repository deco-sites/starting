export interface Props {
    /** @title Title */
    label?: string;
    titleLevel?: "H1" | "H2"
    /** @format html */
    text: string;
}

export default function ArticleParagraph({
    label,
    titleLevel = "H1",
    text,
}: Props) {
    return (
        <div class="lg:container">
            <style
                dangerouslySetInnerHTML={{
                __html: `
                        .article-content p {
                            margin-bottom: 1.5rem;
                        }
                    `,
                }}
            >
            </style>
            <div class="mx-4 md:mx-12 lg:mx-auto lg:w-8/12">
                <div class="flex flex-col gap-4 py-4">
                    {
                        label && (
                            <>
                                {
                                    titleLevel === "H1" && (
                                        <h2 class="text-3xl font-semibold">{label}</h2>
                                    )
                                }
                                {
                                    titleLevel === "H2" && (
                                        <h3 class="text-xl font-medium">{label}</h3>
                                    )
                                }
                            </>
                        )
                    }
                    <div class="leading-normal article-content" dangerouslySetInnerHTML={{ __html: text }}></div>
                </div>
            </div>
        </div>
    )
}