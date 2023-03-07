export default function Divider() {
    return (
        <section class="py-12 bg-[#053535]">
            <div class="flex flex-row space-x-[3%] hover:space-x-[-40%]">
                <div class="h-36 w-[100%] md:w-[100%] rounded-r-full transition-spacing ease-in-out duration-700 md:h-72" style="background: conic-gradient(from 155.68deg at 25% 0%, rgba(0, 255, 130, 0.6) 0deg, #00FF80 0.04deg, #243125 176.25deg, rgba(0, 255, 130, 0.6) 360deg), #2FD180;"></div>
                <div class="h-36 w-[55%] md:w-[70%] bg-[#F3FFF9] rounded-l-full mix-blend-soft-light transition-spacing ease-in-out duration-700 md:h-72"></div>
            </div>
        </section>
    );
  }