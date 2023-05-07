import { AnalyzeFormTranslation } from "../AnalyzeForm.tsx";
import Spinner from "deco-sites/starting/components/ui/Spinner.tsx";

export interface Props {
  translations: AnalyzeFormTranslation;
  site: string;
}

export default function Loading({ translations, site }: Props) {
  return (
    <div class="flex flex-col gap-6 justify-center items-center text-[#F4F4F4]">
      <div class="flex md:flex-row flex-col gap-4 items-center justify-center">
        <Spinner size={25} />
        <p class="text-3xl font-medium">
          {translations.loading.title.replace("{{pageName}}", site).trim()}
        </p>
      </div>
      <p class="text-base text-center">{translations.loading.description}</p>
    </div>
  );
}
