import { AnalyzeFormTranslation } from "../AnalyzeForm.tsx";

export interface Props {
  translations: AnalyzeFormTranslation;
}

export default function Loading({ translations }: Props) {
  return (
    <div>
      <p>{translations.loading.title}</p>
      <p>{translations.loading.description}</p>
    </div>
  );
}
