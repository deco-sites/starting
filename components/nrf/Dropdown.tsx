export interface DropdownItemProps {
  label: string;
  href: string;
  selected?: boolean;
}

function DropdownItem({ href, label, selected }: DropdownItemProps) {
  const variants = {
    rounded: "",
  };

  return (
    <div class="flex flex-row items-center justify-between">
      <a
        href={href}
        class="flex flex-row items-center justify-between flex-grow p-2 hover:bg-black/5 rounded"
      >
        <p class="font-sans not-italic font-normal text-[15px] text-[#113032] flex-grow whitespace-nowrap">
          {label}
        </p>
        <svg
          width="15"
          height="10"
          viewBox="0 0 15 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class={selected ? "" : "hidden"}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.2558 0.244078C14.5813 0.569515 14.5813 1.09715 14.2558 1.42259L5.92251 9.75592C5.59707 10.0814 5.06943 10.0814 4.744 9.75592L0.57733 5.58926C0.251893 5.26382 0.251893 4.73618 0.57733 4.41074C0.902767 4.08531 1.4304 4.08531 1.75584 4.41074L5.33325 7.98816L13.0773 0.244078C13.4028 -0.0813592 13.9304 -0.0813592 14.2558 0.244078Z"
            fill="#2FD180"
          />
        </svg>
      </a>
    </div>
  );
}

export interface Props {
  open: boolean;
  onClick: () => void;
  items: DropdownItemProps[];
  value: string;
  variant?: "rounded" | "flat";
}

export function Dropdown({
  open,
  onClick,
  items,
  value,
  variant = "flat",
}: Props) {
  const variants = {
    rounded: {
      open: "md:text-[#fff] md:border-[#06E474] md:border",
      default:
        "select-none hidden md:flex gap-2 items-center text-[#06E474] border-[transparent] rounded-full border md:hover:border-[#2FD180] md:hover:border md:hover:rounded-full focus:outline-none md:transition md:ease-in-out md:duration-300",
    },
    flat: {
      open: "",
      default:
        "relative flex text-white text-opacity-80 items-center h-full px-[24px] self-center font-normal text-[16px] bg-clip-text bg-linear-white-green bg-position-100 transition-colors ease-in duration-300 justify-centerp",
    },
  };

  const variantClass = variants[variant];

  return (
    <div class={`${open ? variantClass.open : ""} ${variantClass.default}`}>
      <div
        onClick={onClick}
        class="z-10 md:px-3 md:py-1 font-normal text-[16px] flex items-center justify-center gap-[5px] cursor-pointer"
      >
        {value}
        <svg
          width="9"
          height="5"
          viewBox="0 0 9 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L3.84921 3.94218C4.2237 4.26317 4.7763 4.26317 5.15079 3.94218L8 1.5"
            class="group-hover:border-[#fff] stroke-current"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div
        onClick={onClick}
        class={`${
          open
            ? "block cursor-pointer w-[110vw] h-[110vh] absolute left-[-90vw] top-[-20px]"
            : "hidden"
        }`}
      >
      </div>
      <div
        class={`${open ? "block" : "hidden"} ${
          variant === "flat" ? "top-[48px]" : "top-[35px]"
        } z-30 absolute right-0 mt-5 rounded`}
      >
        <div class="flex flex-col w-[152px] bg-[#2FD180] text-[#113032] p-2 rounded">
          {items.map((item) => <DropdownItem {...item} />)}
        </div>
      </div>
    </div>
  );
}
