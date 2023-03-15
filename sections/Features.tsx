export interface Props {
  col1Ttitle: string;
  col1Text: string;
  col2Title: string;
  col2Text: string;
  col3Title: string;
  col3Text: string;
}

export default function Features({col1Text, col1Ttitle, col2Title, col2Text, col3Title, col3Text}: Props) {
  return (
    <section class="px-3 py-16 md:px-[6rem] bg-[#053535]">
      <div class="grid grid-cols-1 gap-16 md:grid-cols-3">
        <div class="flex flex-col gap-8">
          <div
            class="h-[64px] w-[64px] md:h-[108px] md:w-[108px] rounded-full"
            style="background: conic-gradient(from 90deg at 14.13% 50%, rgba(0, 255, 130, 0.6) 0deg, #00FF80 0.04deg, #243125 176.25deg, rgba(0, 255, 130, 0.6) 360deg), conic-gradient(from -90deg at 50% 50%, #FFFFFF 0deg, rgba(255, 255, 255, 0) 187.5deg, #FFFFFF 360deg); transform: matrix(0.84, -0.55, -0.55, -0.84, 0, 0);"
          >
          </div>
          <p class="font-inter not-italic font-medium text-[32px] leading-[38.73px] text-white opacity-80">
            {col1Ttitle}
          </p>
          <p class="font-sans not-italic	font-normal text-[20px] leading-[30px] text-white opacity-80">
            {col1Text}
          </p>
        </div>
        <div class="flex flex-col gap-8">
          <div class="grid h-[64px] w-[64px]  md:h-[108px] md:w-[108px] items-center justify-items-center">
            <div
              class="h-[47px] w-[47px]  md:h-[79px] md:w-[79px] -rotate-45"
              style="background: conic-gradient(from 90deg at 14.13% 50%, rgba(0, 255, 130, 0.6) 0deg, #00FF80 0.04deg, #243125 176.25deg, rgba(0, 255, 130, 0.6) 360deg), conic-gradient(from -90deg at 50% 50%, #FFFFFF 0deg, rgba(255, 255, 255, 0) 187.5deg, #FFFFFF 360deg);"
            >
            </div>
          </div>
          <p class="font-inter not-italic font-medium text-[32px] leading-[38.73px] text-white opacity-80">
            {col2Title}
          </p>
          <p class="font-sans not-italic	font-normal text-[20px] leading-[30px] text-white opacity-80">
            {col2Text}
          </p>
        </div>
        <div class="flex flex-col gap-8">
          <div
            class="h-[64px] w-[64px]  md:h-[108px] md:w-[108px]"
            style="clip-path: polygon(50% 0, 0 100%, 100% 100%); background: conic-gradient(from 90deg at 14.13% 60%, rgba(0, 255, 130, 0.6) 0deg, #00FF80 0.04deg, #243125 176.25deg, rgba(0, 255, 130, 0.6) 360deg), conic-gradient(from -90deg at 50% 60%, #FFFFFF 0deg, rgba(255, 255, 255, 0) 187.5deg, #FFFFFF 360deg);"
          >
          </div>
          <p class="font-inter not-italic font-medium text-[32px] leading-[38.73px] text-white opacity-80">
            {col3Title}
          </p>
          <p class="font-sans not-italic	font-normal text-[20px] leading-[30px] text-white opacity-80">
            {col3Text}
          </p>
        </div>
      </div>
    </section>
  );
}
