export interface Props {
  quest1: string;
  quest2: string;
  quest3: string;
  quest4: string;
  quest5: string;
}

export default function Faq({quest1, quest2, quest3, quest4, quest5}: Props) {
  return (
    <section class="flex flex-col px-3 py-32 bg-[#06E474] md:px-[7rem]">
      <div class="flex flex-row py-2 items-center justify-between border-b border-solid border-[#131614]">
        <p class="font-inter font-normal not-italic text-xl text-[#131614] md:text-3xl">
          {quest1}
        </p>
        <svg
          class="flex-shrink-0"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke-width="1.5"
          stroke="#131614"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div class="flex flex-row py-2 items-center justify-between border-b border-solid border-[#131614]">
        <p class="font-inter font-normal not-italic text-xl text-[#131614] md:text-3xl">
          {quest2}
        </p>
        <svg
          class="flex-shrink-0"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke-width="1.5"
          stroke="#131614"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div class="flex flex-row py-2 items-center justify-between border-b border-solid border-[#131614]">
        <p class="font-inter font-normal not-italic text-xl text-[#131614] md:text-3xl">
          {quest3}
        </p>
        <svg
          class="flex-shrink-0"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke-width="1.5"
          stroke="#131614"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div class="flex flex-row py-2 items-center justify-between border-b border-solid border-[#131614]">
        <p class="font-inter font-normal not-italic text-xl text-[#131614] md:text-3xl">
          {quest4}
        </p>
        <svg
          class="flex-shrink-0"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke-width="1.5"
          stroke="#131614"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div class="flex flex-row py-2 items-center justify-between border-b border-solid border-[#131614]">
        <p class="font-inter font-normal not-italic text-xl text-[#131614] md:text-3xl">
          {quest5}
        </p>
        <svg
          class="flex-shrink-0"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke-width="1.5"
          stroke="#131614"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}
