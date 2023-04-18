export interface Props {
  menuLinks: Array<{ label: string; href: string }>;
  language: string;
  languageLink: string;
  login: string;
  register: string;
}

export default function NewLandingHeader(
  { menuLinks, language, languageLink, login, register }: Props,
) {
  return (
    <nav class="flex flex-row justify-between items-center px-3 py-1.5 bg-[#1F261F]">
      <ul>
        <li>
          <a href="https://www.deco.cx">
            <svg
              width="68"
              height="34"
              viewBox="0 0 68 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M57.739 24.5385C55.2101 24.5385 54.7773 22.2145 55.5761 19.9518C56.2081 18.1542 57.7056 16.2644 59.9352 16.2644C62.5642 16.2644 62.8302 18.7437 62.0647 20.9132C61.3994 22.7729 59.9018 24.5385 57.739 24.5385ZM56.9735 27.8539C61.366 27.8539 65.2934 25.5921 66.8566 21.5008C68.4876 17.1928 66.6574 12.8858 60.6673 12.8858C55.8754 12.8858 52.215 15.6749 50.8176 19.3623C49.2533 23.5149 50.951 27.853 56.9735 27.853V27.8539ZM42.3976 27.8539C44.1277 27.8539 45.8922 27.5131 47.1228 27.0168C47.5556 25.901 47.5889 24.8162 47.2563 23.7324C46.3907 24.0422 45.1935 24.352 43.9619 24.352C40.6342 24.352 40.3349 22.0592 41.0336 20.1062C41.799 18.0299 43.7961 16.3567 46.957 16.3567C47.7891 16.3567 48.588 16.481 49.0865 16.7597C49.952 15.6749 50.4505 14.5902 50.5506 13.4753C49.8185 13.1655 48.5869 12.8868 46.9903 12.8868C41.799 12.8868 37.7058 15.7069 36.2417 19.6119C34.8443 23.2993 35.909 27.8549 42.3976 27.8549V27.8539ZM24.5274 18.9603C25.4263 17.1006 26.8237 16.0167 28.6539 16.0167C30.2849 16.0167 30.5509 16.8538 30.2849 17.5045C29.8855 18.4028 28.5215 18.9612 24.5284 18.9612L24.5274 18.9603ZM25.9582 27.8539C27.6549 27.8539 30.0513 27.5441 32.0484 26.6148C32.3811 25.5921 32.3477 24.5695 31.9817 23.5159C30.7167 24.1044 28.9532 24.4452 27.3556 24.4452C24.9925 24.4452 23.6952 23.7324 23.7286 21.9349C30.1848 22.0902 33.5459 21.0055 34.644 18.3397C35.7422 15.6439 33.8452 12.8858 29.3526 12.8858C24.5607 12.8858 21.0328 16.0779 19.7355 19.5177C18.3714 23.174 19.236 27.8539 25.9582 27.8539V27.8539ZM6.66824 27.8539C11.0941 27.8539 13.6119 25.9631 16.5402 20.1684C18.1378 16.9763 19.5019 13.8463 21.0662 10.7474L22.9297 11.3048C23.4293 11.4602 23.6952 11.1805 23.4626 10.7474L21.2007 6.4404C21.0338 6.13061 20.6678 6.09953 20.4352 6.19275L14.8111 8.17582C14.345 8.33119 14.3783 8.73326 14.8445 8.85756L16.5089 9.35379C15.1448 12.2361 13.4471 16.5742 12.083 19.3011C10.5521 22.3379 9.78666 24.4763 7.19101 24.4763C4.59536 24.4763 4.16258 22.5855 5.2607 19.8897C6.52566 16.7597 8.65517 15.8303 11.084 16.481C11.7493 15.6137 12.2488 14.3115 12.448 13.1344C11.7493 12.9489 10.9171 12.8868 10.2184 12.8868C6.29209 12.8868 2.3981 14.7776 0.800468 18.7437C-1.2623 23.8567 0.644749 27.8549 6.66824 27.8549V27.8539Z"
                fill="#2FD180"
              />
            </svg>
          </a>
        </li>
      </ul>
      <ul class="hidden md:flex md:flex-row md:gap-8">
        {menuLinks.map((link) => {
          return (
            <li class="relative py-2 group">
              <a
                href={link.href}
                class="block px-2 font-inter font-normal bg-clip-text text-transparent bg-linear-white-green bg-position-100 transition-[bg] ease-in duration-300 group-hover:bg-position-0"
                style="background-size: 200%;"
              >
                {link.label}
              </a>
              <div
                class="absolute w-full h-[3px] bg-transparent bottom-0 bg-linear-transp-green bg-position-100 transition-[bg] ease-in duration-300 group-hover:bg-position-0"
                style="background-size: 200%;"
              >
              </div>
            </li>
          );
        })}
      </ul>
      <ul class="md:flex md:flex-row md:gap-4">
        <li class="hidden">
          <svg
            width="39"
            height="32"
            viewBox="0 0 39 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="19" y="2" width="17" height="4" rx="2" fill="#2FD180" />
            <rect x="11" y="14" width="25" height="4" rx="2" fill="#2FD180" />
            <rect x="3" y="26" width="33" height="4" rx="2" fill="#2FD180" />
          </svg>
        </li>
        <li class="hidden md:block md:px-3 md:py-1 md:border-1 md:rounded-full md:border-[#1F261F] md:hover:border-[#2FD180] md:transition md:ease-in-out md:duration-300">
          <a href={languageLink}>
            <div class="flex flex-row items-center gap-1">
              <span class="font-inter font-normal text-[#2FD180]">
                {language}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="1.5"
                stroke="#2FD180"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </a>
        </li>
        <li class="hidden md:block md:px-3 md:py-1 md:border-1 md:rounded-full md:border-[#1F261F] md:hover:border-[#2FD180] md:transition md:ease-in-out md:duration-300">
          <a href="#" class="block font-inter font-normal text-[#2FD180]">
            {login}
          </a>
        </li>
        <li class="hidden md:block md:px-3 md:py-1 md:border-1 md:rounded-full md:border-[#1F261F] md:hover:border-[#2FD180] md:transition md:ease-in-out md:duration-300">
          <a href="#" class="block font-inter font-normal text-[#2FD180]">
            {register}
          </a>
        </li>
      </ul>
    </nav>
  );
}
