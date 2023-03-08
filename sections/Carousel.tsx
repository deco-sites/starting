export default function Carousel() {
  return (
    <section class="py-4 md:bg-white-green">
      <div class="relative flex flex-row gap-[2%] px-6 md:px-[7rem] overflow-hidden group">
        <div class="flex flex-col w-full md:w-[32%] flex-shrink-0 rounded transition-[translate] ease-in-out duration-700 group-hover:translate-x-[-102%] md:group-hover:translate-x-[-115%] opacity-50">
          <div class="relative h-48 bg-gray-600">
            <p
              class="px-6 pt-4 font-inter font-normal not-italic text-base text-white"
              style="text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);"
            >
              BUSINESS
            </p>
            <div class="absolute h-12 w-12 rounded-full bg-red-200 -bottom-6 left-6">
            </div>
          </div>
          <div class="grid h-36 bg-white rounded border-[1px] border-solid border-border-black-opacity">
            <p class="px-6 font-inter font-normal not-italic text-xl text-black opacity-[80%] self-center justify-self-center">
              Boosting your store speed and optimizing sales
            </p>
          </div>
        </div>
        <div class="flex flex-col w-full md:w-[32%] flex-shrink-0 rounded transition-[translate] ease-in-out duration-700 group-hover:translate-x-[-102%] md:group-hover:translate-x-[-115%]">
          <div class="relative h-48 bg-gray-600">
            <p
              class="px-6 pt-4 font-inter font-normal not-italic text-base text-white"
              style="text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);"
            >
              BUSINESS
            </p>
            <div class="absolute h-12 w-12 rounded-full bg-red-200 -bottom-6 left-6">
            </div>
          </div>
          <div class="grid h-36 bg-white rounded border-[1px] border-solid border-border-black-opacity">
            <p class="px-6 font-inter font-normal not-italic text-xl text-black opacity-[80%] self-center justify-self-center">
              Boosting your store speed and optimizing sales
            </p>
          </div>
        </div>
        <div class="flex flex-col w-full md:w-[32%] flex-shrink-0 rounded transition-[translate] ease-in-out duration-700  group-hover:translate-x-[-102%] md:group-hover:translate-x-[-115%]">
          <div class="relative h-48 bg-gray-600">
            <p
              class="px-6 pt-4 font-inter font-normal not-italic text-base text-white"
              style="text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);"
            >
              BUSINESS
            </p>
            <div class="absolute h-12 w-12 rounded-full bg-red-200 -bottom-6 left-6">
            </div>
          </div>
          <div class="grid h-36 bg-white rounded border-[1px] border-solid border-border-black-opacity">
            <p class="px-6 font-inter font-normal not-italic text-xl text-black opacity-[80%] self-center justify-self-center">
              Boosting your store speed and optimizing sales
            </p>
          </div>
        </div>
        <div class="flex flex-col w-full md:w-[32%] flex-shrink-0 rounded transition-[translate] ease-in-out duration-700 group-hover:translate-x-[-115%]">
          <div class="relative h-48 bg-gray-600">
            <p
              class="px-6 pt-4 font-inter font-normal not-italic text-base text-white"
              style="text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);"
            >
              BUSINESS
            </p>
            <div class="absolute h-12 w-12 rounded-full bg-red-200 -bottom-6 left-6">
            </div>
          </div>
          <div class="grid h-36 bg-white rounded border-[1px] border-solid border-border-black-opacity">
            <p class="px-6 font-inter font-normal not-italic text-xl text-black opacity-[80%] self-center justify-self-center">
              Boosting your store speed and optimizing sales
            </p>
          </div>
        </div>
        <div class="flex flex-col w-full md:w-[32%] flex-shrink-0 rounded transition-[translate] ease-in-out duration-700 group-hover:translate-x-[-115%] opacity-50">
          <div class="relative h-48 bg-gray-600">
            <p
              class="px-6 pt-4 font-inter font-normal not-italic text-base text-white"
              style="text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);"
            >
              BUSINESS
            </p>
            <div class="absolute h-12 w-12 rounded-full bg-red-200 -bottom-6 left-6">
            </div>
          </div>
          <div class="grid h-36 bg-white rounded border-[1px] border-solid border-border-black-opacity">
            <p class="px-6 font-inter font-normal not-italic text-xl text-black opacity-[80%] self-center justify-self-center">
              Boosting your store speed and optimizing sales
            </p>
          </div>
        </div>
        <div class="hidden md:grid absolute h-12 w-12 rounded-full bg-black -left-6  mx-6 md:mx-[7rem] top-[40%]">
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
        <div class="hidden md:grid absolute h-12 w-12 rounded-full bg-black -right-6 mx-6 md:mx-[7rem] top-[40%]">
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
