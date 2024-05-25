import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface Props {
    /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
     */   
    description?: string;
}

export default function TextSection2({
    description = "deco.cx is the platform that delivers:"
}: Props) {
  return (
    <div class="bg-[#0D1717] lg:mx-auto relative z-10 px-4 py-[48px] lg:py-[124px] lg:px-0 flex flex-col gap-10 justify-center items-center">
        {
            description &&
            <h2 class="lg:max-w-[1440px] text-[36px] lg:text-[64px] font-medium leading-[43.2px] lg:leading-[76.8px] text-white text-left" dangerouslySetInnerHTML={{
                __html: description
            }}></h2>
        }
    </div>
  );
}
