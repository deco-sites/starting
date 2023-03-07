export default function Carousel() {
  return (
    <section class="py-4 md:bg-white-green">
      <div class="relative grid grid-cols-1 gap-8 px-6 md:grid-cols-3 md:px-[11rem]">
        <div class="flex flex-col rounded overflow-hidden">
          <div class="relative h-60 bg-gray-600">
            <p
              class="px-6 pt-4 font-inter font-normal not-italic text-base text-white"
              style="text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);"
            >
              BUSINESS
            </p>
            <div class="absolute h-12 w-12 rounded-full bg-red-200 -bottom-6 left-6">
            </div>
          </div>
          <div class="grid h-32 bg-white rounded border-[1px] border-solid border-border-black-opacity">
            <p class="px-6 font-inter font-normal not-italic text-xl text-black opacity-[80%] self-center justify-self-center">
              Boosting your store speed and optimizing sales
            </p>
          </div>
        </div>
        <div class="hidden md:flex md:flex-col md:rounded md:overflow-hidden">
          <div class="relative h-60 bg-gray-600">
            <p
              class="px-6 pt-4 font-inter font-normal not-italic text-base text-white"
              style="text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);"
            >
              BUSINESS
            </p>
            <div class="absolute h-12 w-12 rounded-full bg-red-200 -bottom-6 left-6">
            </div>
          </div>
          <div class="grid h-32 bg-white rounded border-[1px] border-solid border-border-black-opacity">
            <p class="px-6 font-inter font-normal not-italic text-xl text-black opacity-[80%] self-center justify-self-center">
              Boosting your store speed and optimizing sales
            </p>
          </div>
        </div>
        <div class="hidden md:flex md:flex-col md:rounded md:overflow-hidden">
          <div class="relative h-60 bg-gray-600">
            <p
              class="px-6 pt-4 font-inter font-normal not-italic text-base text-white"
              style="text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);"
            >
              BUSINESS
            </p>
            <div class="absolute h-12 w-12 rounded-full bg-red-200 -bottom-6 left-6">
            </div>
          </div>
          <div class="grid h-32 bg-white rounded border-[1px] border-solid border-border-black-opacity">
            <p class="px-6 font-inter font-normal not-italic text-xl text-black opacity-[80%] self-center justify-self-center">
              Boosting your store speed and optimizing sales
            </p>
          </div>
        </div>
        <div class="hidden md:grid absolute h-12 w-12 rounded-full bg-black -left-6  mx-6 md:mx-[11rem] top-[40%]">
          <button class="self-center justify-self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div class="hidden md:grid absolute h-12 w-12 rounded-full bg-black -right-6 mx-6 md:mx-[11rem] top-[40%]">
          <button class="self-center justify-self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex flew-row justify-end gap-4 px-6 pt-6 md:hidden">
        <div class="grid h-12 w-12 rounded-full bg-black">
          <button class="self-center justify-self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div class="grid h-12 w-12 rounded-full bg-black">
          <button class="self-center justify-self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
