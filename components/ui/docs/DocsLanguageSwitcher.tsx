interface Props {
  currentPathname: string;
}
export default function DocsLanguageSwitcher({ currentPathname }: Props) {
  const englishLink = currentPathname.replace("/pt/", "/en/");
  const portugueseLink = currentPathname.replace("/en/", "/pt/");
  const isLanguage = (language: string) =>
    currentPathname.includes(`${language}/`);

  return (
    <div class="flex flex-col p-2 border border-black rounded-lg text-sm">
      <span class="text-sm font-bold">Language:</span>
      <div class="flex flex-row mt-2 gap-2">
        <a
          href={englishLink}
          class={isLanguage("en")
            ? "text(green-600 hover:green-500)"
            : "text(gray-900 hover:gray-600)"}
        >
          English
        </a>
        <a
          href={portugueseLink}
          class={isLanguage("pt")
            ? "text(green-600 hover:green-500)"
            : "text(gray-900 hover:gray-600)"}
        >
          Português
        </a>
      </div>
    </div>
  );
}
