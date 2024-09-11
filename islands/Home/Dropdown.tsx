import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
import { useRef } from "preact/hooks";

export interface DropdownItemProps {
  label: string;
  href: string;
}

export interface ColumnMenu {
  icon?: AvailableIcons;
  title?: string;
  nested?: MenuLink[];
}

export interface MenuLink {
  label: string;
  href: string;
  targetBlank?: boolean;
  columns?: ColumnMenu[];
  tag?: {
    color: string;
    description: string;
  };
}

function DropdownItem({ href, label, tag }: MenuLink) {
  return (
    <div class="flex flex-row items-center justify-between">
      <a
        href={href}
        class="flex flex-row items-center justify-between flex-grow p-2 hover:bg-black/5 rounded"
      >
        <p class="font-sans not-italic font-normal text-[13px] text-[#FFFFFF] hover:scale-[97%] hover:text-[#02F67C] flex-grow flex gap-[8px] items-center whitespace-nowrap transition duration-300 ease-in-out">
          {label}
          {tag?.description && tag?.color && (
            <div
              class="font-semibold uppercase flex justify-center items-center px-[4px] py-[2px] text-[6px] rounded-[26.5px] text-[#000]"
              style={{ backgroundColor: tag.color, lineHeight: "normal" }}
            >
              {tag.description}
            </div>
          )}
        </p>
      </a>
    </div>
  );
}

export interface Props {
  columns: ColumnMenu[];
  value: string;
  variant?: "rounded" | "flat";
}

export function Dropdown({ columns, value, variant = "flat" }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const updateInputRef = (value: boolean) => {
    if (inputRef.current) {
      inputRef.current.checked = value;
    }
  };
  const variants = {
    rounded: {
      default:
        "select-none hidden md:flex gap-2 items-center text-[#06E474] border-[transparent] rounded-full border md:hover:border-[#2FD180] md:hover:border md:hover:rounded-full focus:outline-none md:transition md:ease-in-out md:duration-300",
    },
    flat: {
      default:
        "relative flex text-white items-center h-full self-center font-normal text-[16px] bg-clip-text bg-position-100 transition-colors ease-in duration-300 justify-centerp",
    },
  };

  const variantClass = variants[variant];

  return (
    <div class={`group/item cursor-pointer ${variantClass.default}`}>
      <input
        id={value.toLocaleLowerCase()}
        name={value.toLocaleLowerCase()}
        ref={inputRef}
        type="checkbox"
        class="peer"
        hidden
      />
      <label
        for={value.toLocaleLowerCase()}
        onMouseEnter={() => updateInputRef(true)}
        onMouseLeave={() => updateInputRef(false)}
        class={`group-hover/item:text-[#02F67C] z-10 md:py-1 font-normal text-[13px] flex items-center justify-center gap-[5px] cursor-pointer transition duration-300 ease-in-out z-50`}
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
      </label>
      <div
        class={`opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto ${
          variant === "flat" ? "top-0 mt-8 pt-4" : "top-[35px] pt-5"
        } z-30 absolute left-0 rounded`}
        onMouseEnter={() => updateInputRef(true)}
        onMouseLeave={() => updateInputRef(false)}
      >
        <div class="flex flex-row gap-[48px] rounded-lg border border-[#FFFFFF33] p-6 bg-[#0035184d] backdrop-blur-2xl">
          {columns.map((col, index) => (
            <>
              <div>
                {col.icon && col.title && (
                  <div class="pb-[24px] flex">
                    <Icon id={col.icon} size={20} />
                    <p class="pl-[8px] font-bold text-[13px] text-white">
                      {col.title}
                    </p>
                  </div>
                )}
                {col.nested?.map((item) => <DropdownItem {...item} />)}
              </div>
              {columns.length - 1 > index && (
                <div class="w-[1px] bg-[#3e4a44] h-[300px]"></div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
