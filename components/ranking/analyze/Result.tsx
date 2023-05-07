import { Site } from "deco-sites/starting/routes/api/ranking.ts";
import { AnalyzeFormTranslation } from "../AnalyzeForm.tsx";

export interface Props {
  status: number;
  translations: AnalyzeFormTranslation;
  sites: Site[];
}

export default function Result({ status, translations, sites }: Props) {
  return (
    <div>
      <h1>{translations.result.title}</h1>
      <table>
        <tbody>SiteList</tbody>
      </table>
      <div>
        {translations.result.links.map((link) => (
          <a href={link.href}>{link.label}</a>
        ))}
      </div>
    </div>
  );
}
