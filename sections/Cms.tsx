export default function Cms() {
    return (
      <section class="bg-[#F3FFF9] md:px-[3.03rem] md:py-12">
        <div class="flex flex-col pl-6 pt-8 bg-[#053535] md:px-[5rem] md:pt-[4rem] md:rounded-[2rem]">
          <div class="grid grid-cols-2 pr-6 gap-6">
            <div class="relative">
              <p class="pb-4 font-inter not-italic font-medium text-2xl text-white md:text-3xl">For Business users</p>
              <div class="absolute bg-[#00FF80] h-0.5 w-full bottom-0 mt-4"></div>
            </div>
            <div class="relative">
              <p class="pb-4 font-inter not-italic font-medium text-2xl text-[#F3FFF9] opacity-50 md:text-3xl">For developers</p>
              <div class="absolute bg-[#F3FFF9] opacity-50 h-0.5 w-full bottom-0 mt-4"></div>
            </div>
          </div>
          <div class="grid grid-cols-1 pr-6 py-8 gap-12 md:grid-cols-2 items-center">
            <div>
              <p class="font-inter not-italic font-normal text-4xl text-[#F3FFF9]">Build winning<br/>shopping experiences</p>
            </div>
            <div class="md:pl-5">
              <p class="font-sans not-italic font-normal text-lg text-[#F3FFF9]">Business users face significant challenges when trying evolve their digital experiences. With deco, you can give your team the autonomy they need to create, test, and measure new ideas without writing a single line of code.</p>
            </div>
          </div>
          <div class="flex flex-col md:pt-24">
            <div class="hidden md:block md:w-4/5 md:m-auto md:h-[135px] md:bg-black md:rounded-t-lg md:filter md:blur-lg md:z-0">
            </div>
            <div class="h-[343px] bg-gray-200 md:rounded-t-lg md:z-10">
            </div>
          </div>
        </div>
      </section>
    );
  }