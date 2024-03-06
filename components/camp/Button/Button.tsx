export interface Props {
  id?: string;
  label: string;
  details?: string;
  href: string;
}

const THEME = {
  "dark": "bg-bgImage text-[#113032]",
  "ligth": "bg-[#113032] text-[#02F67C]",
};

export default function Button(
  { id, label, details, href, theme }: Omit<Props, "@Page"> & {
    theme: "dark" | "ligth";
  },
) {
  return (
    <a
      id={id}
      class={`mt-auto rounded-full font-medium text-xl px-6 py-4 flex flex-row justify-center items-center flex-wrap gap-1 ${
        THEME[theme ?? "dark"]
      }`}
      href={href}
    >
      {label} <span class="text-sm">{details}</span>
    </a>
  );
}
