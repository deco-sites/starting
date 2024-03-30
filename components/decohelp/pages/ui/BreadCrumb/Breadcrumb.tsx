import { FunctionalComponent } from "preact";
import { useBreadcrumbState } from "site/components/decohelp/pages/hooks/useBreadcrumbState.ts";
import Icon from "site/components/ui/Icon.tsx";

interface BreadcrumbProps {
  homeLabel: string;
  homePath: string;
}

const Breadcrumb: FunctionalComponent<BreadcrumbProps> = (
  { homeLabel, homePath },
) => {
  const { showBreadcrumb, pathSegments } = useBreadcrumbState(
    homeLabel,
    homePath,
  );

  if (!showBreadcrumb) {
    return null;
  }

  return (
    <nav class="relative top-[126px] px-12 z-10">
      <ul class="flex items-center flex-wrap gap-2">
        {pathSegments.map(({ name, path }, index) => (
          <li class="flex items-center gap-2" key={index}>
            <a
              href={path}
              class={`${
                index === 0 ? "text-[#616B6B]" : "text-[#001515]"
              } text-[15px] font-normal leading-tight capitalize`}
            >
              {name}
            </a>
            {index < pathSegments.length - 1 && (
              <Icon
                class={`${
                  index === 0 ? "text-[#616B6B]" : "text-[#001515]"
                } w-4 h-4`}
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
