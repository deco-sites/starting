export default function Divider() {
    return (
      <section class="py-12 md:py-24 lg:py-12 bg-dark-green">
        <div class="flex flex-row space-x-[3%] hover:space-x-[-30%]  md:hover:space-x-[-15%]">
          <div
            class="bg-highlight h-[145px] md:h-[300px] w-[55%] md:w-[70%] rounded-r-full transition-spacing ease-in-out duration-700"
          >
          </div>
          <div class="h-[145px] md:h-[300px] w-[100%] md:w-[100%] bg-[#F3FFF9] rounded-l-full mix-blend-soft-light transition-spacing ease-in-out duration-700">
          </div>
        </div>
      </section>
    );
  }
  