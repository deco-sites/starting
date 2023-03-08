export default function Partner() {
  return (
    <section class="flex flex-col bg-[#053535] pt-4 pb-12 md:pb-32">
      <div class="grid grid-cols-1 px-6 pb-12 gap-10 md:px-[7rem] md:grid-cols-2">
        <div class="relative md:order-2 w-full h-full grid">
          <div
            class="block absolute w-full h-full md:hidden z-0"
            style="background: radial-gradient(15% 50% at 80% 50%, rgba(89, 255, 210, 0.8) 0%, rgba(37, 50, 38, 0) 100%);"
          >
          </div>
          <div
            class="hidden md:block md:absolute md:w-full md:h-full z-0"
            style="background: radial-gradient(20% 50% at 50% 50%, rgba(89, 255, 210, 0.8) 0%, rgba(37, 50, 38, 0) 100%); transform: rotate(-45deg)"
          >
          </div>
          <div
            class="h-20 w-20 mr-8 my-6 bg-green-500 rounded-full justify-self-end self-center md:justify-self-center md:mr-0 z-10"
            style="background: conic-gradient(from 90deg at 14.13% 50%, rgba(0, 255, 130, 0.6) 0deg, #00FF80 0.04deg, #243125 176.25deg, rgba(0, 255, 130, 0.6) 360deg), conic-gradient(from -90deg at 50% 50%, #FFFFFF 0deg, rgba(255, 255, 255, 0) 187.5deg, #FFFFFF 360deg);"
          >
          </div>
        </div>
        <p class="font-sans not-italic font-bold text-5xl text-white md:text-9xl md:order-1">
          Become<br />a partner<br />agency
        </p>
      </div>
      <div class="overflow-hidden">
        <div
          class="h-20 bg-repeat-x w-[300%] animate-walk"
          style="background-image: url('/repeat_logo.png')"
        >
        </div>
        <div
          class="h-20 bg-repeat-x w-[300%] animate-walk"
          style="background-image: url('/repeat_logo.png');  animation-delay: 300ms;"
        >
        </div>
        <div
          class="h-20 bg-repeat-x w-[300%] animate-walk"
          style="background-image: url('/repeat_logo.png'); animation-delay: 600ms;"
        >
        </div>
      </div>
      <div class="mx-6 mt-12 pt-8 grid grid-cols-1 gap-8 border-t border-t-[1px] border-white-opacity items-end md:mx-[7rem] md:grid-cols-4">
        <div class="border-b border-b-0.5 border-white pb-2">
          <p class="font-sans not-italic font-normal text-lg text-white opacity-[67%]">
            Manage all storefronts in one place
          </p>
        </div>
        <div class="border-b border-b-0.5 border-white pb-2">
          <p class="font-sans not-italic font-normal text-lg text-white opacity-[67%]">
            Easier stack for hiring and training
          </p>
        </div>
        <div class="border-b border-b-0.5 border-white pb-2">
          <p class="font-sans not-italic font-normal text-lg text-white opacity-[67%]">
            Expand your market
          </p>
        </div>
        <div class="border-b border-b-0.5 border-white pb-2">
          <p class="font-sans not-italic font-normal text-lg text-white opacity-[67%]">
            Make your customers happy
          </p>
        </div>
      </div>
      <div class="hidden pt-12 md:flex md:flex-row md:justify-center">
        <button class="px-20 py-3.5 bg-[#06E474] text-[#161A16] font-inter font-normal not-italic rounded-sm">
          Join us
        </button>
      </div>
    </section>
  );
}
