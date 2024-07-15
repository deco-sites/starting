export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  description?: string;
}

export default function TextSection2({
  description = "deco.cx is the platform that delivers:",
}: Props) {
  return (
    <div class="bg-[#030806] lg:mx-auto relative z-10 px-4 p-[50px] lg:px-[100px] lg:p-[100px] flex flex-col gap-10 justify-center items-center">
      <div class="bg-[#030806] border border-[#02F67C] rounded-2xl p-[20px] lg:p-[80px]">
        {description &&
          (
            <h2
              class="lg:max-w-[1440px] text-[36px] lg:text-[64px] font-medium leading-[43.2px] lg:leading-[76.8px] text-white text-left"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            >
            </h2>
          )}
      </div>
    </div>
  );
}
