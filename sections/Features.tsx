export default function Features() {
    return (
      <section class="px-6 py-16 md:px-[6rem] bg-[#053535]">
        <div class="grid grid-cols-1 gap-16 md:grid-cols-3">
            <div class="flex flex-col gap-8">
                <div class="h-20 w-20 rounded-full" style="background: conic-gradient(from 90deg at 14.13% 50%, rgba(0, 255, 130, 0.6) 0deg, #00FF80 0.04deg, #243125 176.25deg, rgba(0, 255, 130, 0.6) 360deg), conic-gradient(from -90deg at 50% 50%, #FFFFFF 0deg, rgba(255, 255, 255, 0) 187.5deg, #FFFFFF 360deg); transform: matrix(0.84, -0.55, -0.55, -0.84, 0, 0);"></div>
                <p class="font-inter not-italic font-medium text-3xl text-white opacity-80">Use any platform <br/>of your choice</p>
                <p class="font-sans not-italic	font-normal text-lg text-white opacity-80">Deco is a vendor-neutral platform that lets you select the products that are best for you, regardless of the vendor.</p>
            </div>
            <div class="flex flex-col gap-8">
                <div class="grid h-20 w-20 items-center justify-items-center">
                  <div class="h-16 w-16 -rotate-45" style="background: conic-gradient(from 90deg at 14.13% 50%, rgba(0, 255, 130, 0.6) 0deg, #00FF80 0.04deg, #243125 176.25deg, rgba(0, 255, 130, 0.6) 360deg), conic-gradient(from -90deg at 50% 50%, #FFFFFF 0deg, rgba(255, 255, 255, 0) 187.5deg, #FFFFFF 360deg);"></div>
                </div>
                <p class="font-inter not-italic font-medium text-3xl text-white opacity-80">Get blazing-fast <br/>websites</p>
                <p class="font-sans not-italic	font-normal text-lg text-white opacity-80">Pagespeeds affects SEO, visitor engagement and sales. Deco leverages edge computing and CDN capabilities to ensure digital experiences are always fast.</p>
            </div>
            <div class="flex flex-col gap-8">
                <div class="h-20 w-20" style="clip-path: polygon(50% 0, 0 100%, 100% 100%); background: conic-gradient(from 90deg at 14.13% 60%, rgba(0, 255, 130, 0.6) 0deg, #00FF80 0.04deg, #243125 176.25deg, rgba(0, 255, 130, 0.6) 360deg), conic-gradient(from -90deg at 50% 60%, #FFFFFF 0deg, rgba(255, 255, 255, 0) 187.5deg, #FFFFFF 360deg);"></div>
                <p class="font-inter not-italic font-medium text-3xl text-white opacity-80">Save time and money</p>
                <p class="font-sans not-italic	font-normal text-lg text-white opacity-80">Cheaper. Faster. Stronger. Get all the tools you need to build and optimize your headless experience for less price and make your teams work smarter.</p>
            </div>
        </div>
      </section>
    );
  }