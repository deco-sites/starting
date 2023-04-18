import Image from "deco-sites/std/components/Image.tsx"
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "deco-sites/starting/components/ui/Icon.tsx";

export interface Props {
  mainText: string;
  secondText: string;
  labelFirstButton?: string;
  hrefFirstButton?: string;
  labelSecondButton: string;
  hrefSecondButton: string;
  blur1Background: LiveImage;
  blur2Background: LiveImage;
  peopleImage: LiveImage;
  lazyload?: false | true;
}

export default function Community({lazyload, blur1Background, blur2Background, peopleImage, mainText, secondText, labelFirstButton, hrefFirstButton, labelSecondButton, hrefSecondButton}: Props) {
  return (
    <section class="flex flex-col items-center justify-center lg:(flex-row-reverse gap-[75px]) bg-white md:py-[63px] px-6 md:px-[2rem] max-w-screen-2xl mx-auto overflow-x-hidden overflow-y-hidden 2xl:(overflow-x-unset overflow-y-unset)">
      <div class="flex justify-center relative lg:w-[50%] h-[110vw] md:h-auto min-h-[380px] sm:min-h-[800px] lg:min-h-[821px]">
        <div class="relative w-full min-h-[380px] sm:min-h-[800px] lg:min-h-[821px] min-w-[100vw] lg:min-w-[100%]">
          <Image fetchPriority={lazyload ? "low" : "high"} preload={lazyload ? false : true} loading={lazyload ? 'lazy' : 'eager'} class="absolute top-[0] right-[-75px] animate-blur1 lg:(w-[600px] h-[600px]) 2xl:(w-[700px] h-[700px])" width={400} height={400} src={blur1Background}/>
          <Image fetchPriority={lazyload ? "low" : "high"} preload={lazyload ? false : true} loading={lazyload ? 'lazy' : 'eager'} class="absolute top-[140px] animate-blur2 lg:(w-[600px] h-[600px]) 2xl:(w-[700px] h-[700px])" width={400} height={400} src={blur2Background}/>
        </div>
        <Image fetchPriority={lazyload ? "low" : "high"} preload={lazyload ? false : true} loading={lazyload ? 'lazy' : 'eager'} class="md:w-[80vw] absolute overflow-y-hidden w-full top-0 mt-[10%] px-6 md:px-0" width={366} height={339} src={peopleImage}/>
      </div>
      <div class="flex flex-col lg:w-[50%] gap-[24px] md:mt-[40px]">
        <h2 class="text-[56px] lg:(order-1 text-[70px]) xl:text-[80px] text-[#1F261F] font-bold leading-[.95]">{mainText}</h2>
        <p class="text-[24px] md:text-[32px] lg:order-3 text-[#1f261f99] leading-[1.18]">{secondText}</p>
        <div class="flex flex-col lg:(flex-row order-2) w-full gap-[16px]">
          {
            labelFirstButton &&
            hrefFirstButton &&
            <a class="w-full group flex lg:max-w-[300px] justify-center items-center gap-[10px] rounded p-[14px] border-1 border-[#0A2121]" href={hrefFirstButton}>
              <span class="text-[16px] font-medium text-[#0A2121]">{labelFirstButton}</span>
              <Icon class="hidden transition lg:group-hover:block" id="GreenArrow" width={15} height={15} strokeWidth={"1"} />
            </a>
          }
          <a class={`flex group lg:max-w-[300px] justify-center items-center gap-[10px] w-full rounded p-[14px] border-1 border-[#0A2121] bg-[#0A2121]`} href={hrefSecondButton}>
            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.89088 0.00596839C7.33738 -0.0431316 7.76183 0.211519 7.92866 0.628586L8.80028 2.80764C9.2026 2.76943 9.60036 2.74998 10.0002 2.74998C10.4 2.74998 10.7978 2.76943 11.2001 2.80764L12.0717 0.628586C12.2381 0.212642 12.6608 -0.0418983 13.1063 0.00561726C14.675 0.172951 16.4134 0.524172 18.0718 1.67945C18.2436 1.79913 18.3735 1.96973 18.4432 2.16717C19.4648 5.06199 20.0268 7.59672 20.2447 9.64417C20.4584 11.6525 20.354 13.3085 19.9286 14.3715C19.9183 14.3973 19.9069 14.4226 19.8945 14.4475C19.5228 15.1902 18.9608 16.0398 18.2572 16.7192C17.5684 17.3843 16.6228 18 15.5002 18C15.1458 18 14.8675 17.841 14.7332 17.7554C14.5688 17.6506 14.4162 17.5203 14.2831 17.3922C14.0142 17.1332 13.7388 16.7989 13.4935 16.4484C13.2469 16.0962 13.0103 15.6985 12.8313 15.3028C12.7927 15.2175 12.7545 15.1273 12.7184 15.0334C10.8875 15.3214 9.12659 15.3222 7.29599 15.0356C7.26721 15.1165 7.23689 15.1949 7.20609 15.27C7.04498 15.6629 6.83097 16.0596 6.60587 16.4126C6.38241 16.7631 6.12927 17.0999 5.8783 17.3626C5.75436 17.4924 5.60908 17.6272 5.44895 17.7369C5.31989 17.8254 5.03773 18 4.66818 18C3.56279 18 2.64592 17.3653 1.99189 16.702C1.31998 16.0206 0.785152 15.1706 0.432385 14.43C0.420828 14.4058 0.410253 14.3811 0.400686 14.3559C-0.000959605 13.3015 -0.101003 11.6546 0.10215 9.64919C0.309139 7.6059 0.84332 5.07432 1.81526 2.18149C1.88109 1.98554 2.00604 1.8148 2.1729 1.69278C3.75886 0.533021 5.34854 0.175572 6.89088 0.00596839ZM5.30889 14.6204C5.11571 14.5704 4.92128 14.5174 4.72547 14.4615C4.19444 14.3098 3.88695 13.7563 4.03867 13.2253C4.19039 12.6942 4.74388 12.3867 5.27492 12.5385C8.59536 13.4872 11.405 13.4872 14.7255 12.5385C15.2565 12.3867 15.81 12.6942 15.9617 13.2253C16.1134 13.7563 15.806 14.3098 15.2749 14.4615C15.088 14.5149 14.9024 14.5656 14.7179 14.6136C14.8296 14.837 14.9735 15.0751 15.1319 15.3015C15.3241 15.576 15.5175 15.8043 15.6704 15.9515C15.6813 15.962 15.6916 15.9717 15.7012 15.9806C16.0396 15.9174 16.4371 15.6966 16.8679 15.2805C17.3613 14.8041 17.7909 14.1718 18.0858 13.5922C18.319 12.9748 18.455 11.7265 18.2559 9.85579C18.0646 8.05776 17.5747 5.78526 16.6668 3.14715C15.7091 2.54525 14.6993 2.25478 13.6409 2.0907L13.2217 3.13869C13.7164 3.24941 14.2308 3.383 14.7749 3.53845C15.306 3.69018 15.6134 4.24366 15.4617 4.7747C15.31 5.30573 14.7565 5.61322 14.2255 5.4615C12.5227 4.97499 11.2468 4.74998 10.0002 4.74998C8.75358 4.74998 7.4777 4.97499 5.77492 5.4615C5.24388 5.61322 4.69039 5.30573 4.53867 4.7747C4.38695 4.24366 4.69444 3.69018 5.22547 3.53845C5.76955 3.383 6.28401 3.24941 6.77864 3.13869L6.36144 2.0957C5.3887 2.25794 4.49278 2.54328 3.60772 3.13C2.74205 5.7714 2.27459 8.04804 2.09197 9.85076C1.90202 11.7258 2.03124 12.9832 2.25657 13.6086C2.53837 14.1905 2.94779 14.8229 3.41598 15.2977C3.80445 15.6917 4.15353 15.8991 4.44205 15.9707C4.57768 15.8267 4.74862 15.6054 4.91949 15.3374C5.06924 15.1025 5.20505 14.8536 5.30889 14.6204ZM15.8082 16.0688C15.8071 16.0681 15.8057 16.0672 15.8041 16.0661C15.8193 16.0742 15.8212 16.0771 15.8082 16.0688ZM5.00019 8.99998C5.00019 7.89541 5.89562 6.99998 7.00019 6.99998C8.10476 6.99998 9.00019 7.89541 9.00019 8.99998C9.00019 10.1045 8.10476 11 7.00019 11C5.89562 11 5.00019 10.1045 5.00019 8.99998ZM11.0002 8.99998C11.0002 7.89541 11.8956 6.99998 13.0002 6.99998C14.1048 6.99998 15.0002 7.89541 15.0002 8.99998C15.0002 10.1045 14.1048 11 13.0002 11C11.8956 11 11.0002 10.1045 11.0002 8.99998Z" fill="white"/>
            </svg>
            <span class="text-[16px] font-medium text-[#fff]">{labelSecondButton}</span>
            <Icon class="hidden transition lg:group-hover:block" id="WhiteArrow" width={15} height={15} strokeWidth={"1"} />
          </a>
        </div>
      </div>
    </section>
  );
}
