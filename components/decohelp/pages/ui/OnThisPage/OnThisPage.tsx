export interface Props {
  label?: string;
  active?: boolean;
}

export default function OnThisPage(props: Props) {
  const { label, active } = props;

  const baseClass = "text-[15px] font-normal leading-tight";
  const activeClass = active ? "text-[#2E6ED9]" : "text-neutral-900";

  return (
    <>
      <li class={`${baseClass} ${activeClass} ml-[17px]`}>
        <span class="relative left-[-4px]">{label}</span>
      </li>
    </>
  );
}
