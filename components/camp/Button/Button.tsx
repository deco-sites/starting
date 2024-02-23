export interface Props {
  label: string;
  details?: string;
  href: string;
  type?: "ligth" | "dark";
}

const THEME = {
  "dark": "bg-primary text-base-200",
  "ligth": "bg-[#113032] text-primary",
};

export default function Button(
  { label, details, href, type = "dark" }: Props,
) {
  return (
    <a
      class={` mt-auto rounded-full font-medium text-xl px-6 py-4 ${
        THEME[type]
      }`}
      href={href}
    >
      {label} <span class="text-sm">{details}</span>
    </a>
  );
}
