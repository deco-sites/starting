import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import type { Language } from "./ui/LanguageSwitcher.tsx";
import { LanguageSwitcher } from "./ui/LanguageSwitcher.tsx";

export interface Props {
  languages: Language[];
}

export default function Header({ languages }: Props) {
  return (
    <>
      <header class="flex justify-between max-w-screen-xl mx-auto px-4 py-8 md:px-10 md:pb-6 md:pt-10">
        <div class="text-secondary">
          <Icon id="Logo" height="32" width="89" />
        </div>
        <LanguageSwitcher languages={languages} />
      </header>
      <div class="fixed bg-dark-green-gradient min-h-screen w-full top-0 left-0 -z-10" />
    </>
  );
}
