import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export function CardLinks({
  links,
}: {
  links: {
    icon: AvailableIcons;
    label: string;
    href: string;
  }[];
}) {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {links.map(({ label, icon, href }) => (
        <a
          class="flex flex-col justify-between gap-2 p-4 rounded-2xl border border-[#ffffff26] hover:bg-[#ffffff07]"
          href={href}
        >
          <div class="flex items-start justify-between w-full pb-2">
            <div class="bg-decorative-three-900 rounded-full bg-opacity-50 grid place-items-center h-[35px] w-[35px]">
              <div class="bg-decorative-three-900 rounded-full grid place-items-center w-[30px] h-[30px]">
                <Icon class="text-primary-dark" id={icon} size={20} />
              </div>
            </div>
            <Icon class="text-white" id="ArrowRight" size={16} />
          </div>
          <span class="text-white font-semibold text-[20px]">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}
