import Icon from "site/components/ui/Icon.tsx";

export interface Props {
    labelHTML: string;
    contributors: {
        avatar: string;
        href: string;
    }[];
    stars: number;
}

export function GithubContributors({
    labelHTML,
    contributors,
    stars,
}: Props) {
    return (
        <div class="flex flex-col gap-6">
            <span dangerouslySetInnerHTML={{
                __html: labelHTML
            }} />
            <div class="grid grid-cols-5 gap-2">
                {contributors.map(contrib => (
                    <a 
                        href={contrib.href} 
                        target="_blank" 
                        class="overflow-hidden rounded-full w-6 h-6 cursor-pointer"
                    >
                        <img 
                            class="w-full h-full"
                            src={contrib.avatar} 
                            alt={`Avatar image for one of our contributors`} 
                        />
                    </a>
                ))}
            </div>
            <a 
                class="border px-4 py-6 flex justify-center gap-2" 
                href="https://github.com/deco-cx/deco"
            >
                <span>GitHub</span>
                <div class='flex items-center gap-1'>
                    <Icon id="Star" size={12} />
                    <span>{stars}</span>
                </div>
            </a>
        </div>
    );
}