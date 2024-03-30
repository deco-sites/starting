import Icon from "deco-sites/starting/components/ui/Icon.tsx";
import type { Language } from "./ui/LanguageSwitcher.tsx";
import { LanguageSwitcher } from "./ui/LanguageSwitcher.tsx";
import { Head } from "$fresh/runtime.ts";

export interface Props {
  languages: Language[];
  size?: "normal" | "large";
}

export default function Header({ languages, size = "normal" }: Props) {
  return (
    <>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body {
                background-image: linear-gradient(180deg, #0A2121 0%, #053535 100%);
              }
              .poweredby-list > div + div:before {
                content: "+";
                display: block;
                margin-right: 4px;
              }
              @media screen and (min-width: 768px) {
                .poweredby-list > div + div:before {
                  content: "+";
                  display: block;
                  margin-right: 8px;
                }
              }
            `,
          }}
        />
      </Head>
      <header
        class={`flex justify-between max-w-screen-xl mx-auto px-4 py-8 md:px-10 ${
          size === "normal"
            ? "md:pb-6 md:pt-10"
            : "md:pt-20 md:fixed w-full md:left-1/2 md:-translate-x-1/2"
        }`}
      >
        <div class="text-secondary">
          <Icon id="Logo" height="32" width="89" />
        </div>
        <LanguageSwitcher languages={languages} />
      </header>
    </>
  );
}
