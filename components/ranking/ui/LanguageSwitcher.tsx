import { useSignal } from "@preact/signals";
import { useMemo } from "preact/compat";
import { useLanguage } from "../hooks/useLanguage.tsx";
import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import { IS_BROWSER } from "https://deno.land/x/fresh@1.1.4/src/runtime/utils.ts";

export interface Language {
  label: string;
  link: string;
  /**
   * @title Selected text
   * @description If there is no short mode the label will be used on selected value
   */
  short?: string;
}

export interface Props {
  languages: Language[];
}

export function LanguageSwitcher({ languages }: Props) {
  const language = useLanguage();
  const open = useSignal(false);

  const currentLang = useMemo(
    () =>
      languages.find((lang) => lang.link.replace("/", "") === language.peek()),
    [language.value, languages],
  );

  const pathWithoutLang = useMemo(() => {
    if (IS_BROWSER) {
      return globalThis.windowlocation.pathname.replace(
        currentLang?.link ?? "",
        "",
      );
    }
    return "";
  }, [currentLang]);

  return (
    <div class="relative">
      <button
        class="flex justify-between items-center gap-1 py-2 px-4 rounded-full border-transparent hover:border-secondary border-[1px] text-secondary hover:text-white"
        onClick={() => (open.value = true)}
      >
        {currentLang?.short ?? currentLang?.label}
        <Icon id="ChevronDown" size={12} strokeWidth={2} />
      </button>
      {open.value
        ? (
          <>
            <div class="flex flex-col gap-2 min-w-[184px] border-[1px] border-[#223737] z-20 px-6 py-4 rounded bg-dark-green absolute right-0 top-full">
              {languages.map(({ label, link }) => (
                <a
                  href={`${link}${pathWithoutLang}`}
                  class="flex justify-between gap-1 flex-nowrap text-primary hover:bg-[#223737] p-2 rounded"
                >
                  {label}
                  {currentLang?.link === link
                    ? (
                      <Icon
                        id="Check"
                        size={20}
                        strokeWidth={1}
                        class="stroke-primary"
                      />
                    )
                    : null}
                </a>
              ))}
            </div>
            <div
              class="z-10 fixed top-0 left-0 w-full h-full"
              onClick={() => (open.value = false)}
            />
          </>
        )
        : null}
    </div>
  );
}
