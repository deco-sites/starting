import { FunctionalComponent } from "preact";
import Icon from "site/components/ui/Icon.tsx";

interface PathSegment {
  name: string;
  href: string;
}

interface Props {
  items: PathSegment[];
}

function Breadcrumb({
  items,
}: Props) {
  return (
    <nav>
      <ul class="flex items-center flex-wrap gap-2">
        {items.map(({ name, href }, index) => (
          <li class="flex items-center gap-2" key={index}>
            <a
              href={index === 0 ? "#" : href}
              class={`${index === items.length - 1 ? "text-[#4ADE80]" : "text-white"} 
              text-[15px] font-normal leading-tight capitalize`}
            >
              {name}
            </a>
            {index < items.length - 1 && (
              <Icon
                class={`text-white w-4 h-4`}
                id="ChevronRight"
                width={16}
                height={16}
                strokeWidth={"2"}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
