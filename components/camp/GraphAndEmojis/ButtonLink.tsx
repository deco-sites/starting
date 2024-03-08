interface Props {
  label: string;
  href?: string;
  classCustom?: string;
}

export default function ButtonLink({ label, href = "", classCustom }: Props) {
  return (
    <a
      class={`self-center mt-auto bg-[#02F67C] text-black rounded-full font-medium text-xl px-4 py-2 ${classCustom}`}
      href={href}
    >
      {label}
    </a>
  );
}
