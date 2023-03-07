export default function Community() {
  return (
    <section class="flex flex-col pb-20 md:pb-32">
      <div class="grid grid-cols-1 px-6 overflow-hidden md:px-[11rem] md:pt-[5rem] md:grid-cols-2">
        <img
          src="/Group_521.png"
          class="justify-self-end translate-x-9 md:order-2 md:justify-self-start"
        />
        <p class="-translate-y-12 font-sans not-italic font-bold text-[#1F261F] text-5xl md:pt-32 md:text-9xl md:order-1 xl:whitespace-pre">
          Join a<br />community<br />of 400+<br />brands, students<br />and
          experts
        </p>
      </div>
      <div class="-translate-y-6 px-6 md:px-[11rem]">
        <p class="not-italic font-normal text-[#1F261F] text-3xl md:w-1/2">
          We are already building the largest multiplatform e-commerce community
          -from Latin America to the world. Here you will find:
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-[11rem]">
        <div class="flex flex-col gap-4 md:p-4 md:border md:border-1 md:shadow-custom-shadow md:rounded-xl">
          <p class="font-inter text-black font-medium text-3xl">deco camp</p>
          <p class="font-inter text-black font-normal opacity-[80%] text-lg">
            A self-paced bootcamp for students. Learn webdev for ecommerce from
            scratch using our modern technologies.
          </p>
        </div>
        <div class="flex flex-col gap-4 md:p-4">
          <p class="font-inter text-black font-medium text-3xl">
            job positions
          </p>
          <p class="font-inter text-black font-normal opacity-[80%] text-lg">
            We are listing all fulltime job positions we find in the commerce
            ecosystem, and you can share yours.
          </p>
        </div>
        <div class="flex flex-col gap-4 md:p-4">
          <p class="font-inter text-black font-medium text-3xl">bounties</p>
          <p class="font-inter text-black font-normal opacity-[80%] text-lg">
            A self-paced bootcamp for students. Learn webdev for ecommerce from
            scratch using our modern technologies.
          </p>
        </div>
        <div class="flex flex-col gap-4 md:p-4">
          <p class="font-inter text-black font-medium text-3xl">support</p>
          <p class="font-inter text-black font-normal opacity-[80%] text-lg">
            We are listing all fulltime job positions we find in the commerce
            ecosystem, and you can share yours.
          </p>
        </div>
      </div>
    </section>
  );
}
