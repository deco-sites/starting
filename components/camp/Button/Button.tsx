export interface Props {
  label: string;
  details?: string;
  href: string;
}

export default function Button(
  { label, details, href }: Props,
) {
  return (
    <a
      class="mt-auto rounded-full font-medium text-xl px-6 py-4 bg-primary text-black"
      href={href}
    >
      {label} <span class="text-sm">{details}</span>
    </a>
  );
}
