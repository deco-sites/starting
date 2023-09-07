import Icon from "deco-sites/starting/components/ui/Icon.tsx";

export default function ArticleDivider() {
    return (
        <div class="lg:container">
            <div class="mx-4 py-12 lg:pt-10 lg:pb-24 flex items-center justify-between gap-4">
                <div class="flex-auto h-[1px] bg-primary"></div>
                <Icon
                    class="w-6 h-6 chevron-down text-primary"
                    id="DecoIcon"
                    width={28}
                    height={28}
                    strokeWidth={"2"}
                />
                <div class="flex-auto h-[1px] bg-primary"></div>
            </div>
        </div>
    )
}