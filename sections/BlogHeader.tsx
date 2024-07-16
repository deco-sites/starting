import { h } from "preact";
import LogoDeco from "../components/ui/icons/LogoDeco.tsx";

function NavAnchor({
  children,
  ...props
}: h.JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a role="menuitem" {...props}>
      {children}
    </a>
  );
}

export interface Props {
  logoAriaLabel: string;
}

const navAnchors = [
  {
    label: "Plataforma",
    ariaLabel: "Link para a plataforma",
    class: "hover:cursor-pointer hover:underline",
    href: "/",
  },
  {
    label: "Blog",
    ariaLabel: "Link para o Blog",
    class: "hover:underline ml-10",
    href: "/blog",
    target: "_blank",
  },
  {
    label: "Agende agora",
    ariaLabel: "Link para agendar uma demo",
    class:
      "block bg-white text-black rounded-full border border-secondary-dark px-8 py-2.5 w-full h-full hover:shadow-lg ml-10",
    href: "/",
  },
];

export default function BlogHeader({
  logoAriaLabel = "Logo da Deco na cor verde",
}: Props) {
  return (
    //TODO: Traduções
    <header class="bg-[#113032] flex justify-center">
      <nav
        class="container px-4 sm:mx-8 py-6 text-white"
        aria-label="Deco Menu"
      >
        <ul
          role="menubar"
          aria-label="Deco Menu"
          class="flex justify-between gap-4 items-center"
        >
          <li role="none">
            <NavAnchor aria-label={logoAriaLabel} href="#">
              <LogoDeco color="#2FD180" class="h-8" />
            </NavAnchor>
          </li>

          <li role="none" class="hidden md:flex pr-10 items-center">
            {navAnchors.map((nav) => (
              <NavAnchor
                class={nav.class}
                href={nav.href}
                target={nav.target || ""}
              >
                {nav.label}
              </NavAnchor>
            ))}
          </li>
        </ul>
      </nav>
    </header>
  );
}
