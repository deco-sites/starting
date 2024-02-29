import Icon, { AvailableIcons } from "deco-sites/starting/components/ui/Icon.tsx";

export interface DndButtonProps {
    label: string;
    icon: AvailableIcons;
    color: string;
}

export interface Props {
    buttons: DndButtonProps[];
    /**
     * @format html
     */
    title: string;
}

function DndButton(props: DndButtonProps) {
    return (
        <button 
            style={{ backgroundColor: props.color }}
            data-dnd-button
            class="absolute z-20 opacity-0 text-sm rounded-[14px] h-14 px-6 sm:rounded-3xl sm:h-24 sm:text-2xl sm:px-10 flex items-center justify-center gap-4 text-black"
        >
            <Icon id={props.icon} size={32} />
            <span>{props.label}</span>
        </button>
    );
}

export default function DndPanel({ buttons, title }: Props) {
    return (
        <>
            <div class="box-border h-fit my-8 mx-6 sm:mx-8 lg:mx-20 lg:my-20">
                <div class="h-[720px] overflow-hidden w-full rounded-3xl bg-black relative">
                    <img src="/camp/ellipse.png" class="absolute z-[15] bottom-0 right-0 rotate-180" />
                    <img src="/camp/ellipse.png" class="absolute z-[15] top-0 left-0"/>
                    <div id="dnd-buttons-panel" class="h-[720px] w-full absolute top-0 left-0">
                        <div class="absolute h-[720px] z-[15] opacity-0 w-full top-0 left-0"></div>
                        {buttons.map(button => <DndButton {...button}/>)}
                    </div>
                    <h2 class="absolute z-10 top-6 text-3xl text-center w-full" dangerouslySetInnerHTML={{ __html: title }}></h2>
                </div>
            </div>
            <script type="module" src="/camp/matterjs-buttons.js"/>
        </>
    )
}