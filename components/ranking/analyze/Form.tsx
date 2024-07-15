import type { JSX } from "preact";
import { AnalyzeFormTranslation } from "../AnalyzeForm.tsx";
import { FieldForm } from "./FieldForm.tsx";

export interface Props {
  translations: AnalyzeFormTranslation;
  onSubmit: (event: JSX.TargetedEvent<HTMLFormElement, Event>) => void;
}

const Form = ({ translations, onSubmit }: Props) => {
  const optionalFields = ["name", "phone", "email", "agency"] as const;
  return (
    <article class="max-w-[750px]">
      <h1 class="text-3xl md:text-5xl font-semibold md:mb-10 mb-6 text-center">
        {translations.title}
      </h1>
      <form
        class="flex w-full flex-col justify-center items-end gap-4 max-w-[400px] mx-auto"
        onSubmit={onSubmit}
      >
        <FieldForm
          label={translations.form.website.label}
          placeholder={translations.form.website.placeholder ?? ""}
          name="website"
          required
        />
        <h2 class="md:text-xl text-lg text-left font-medium pt-4 w-full">
          {translations.form.contactTitle}
        </h2>
        {optionalFields.map((field) => (
          <FieldForm
            label={translations.form[field].label}
            placeholder={translations.form[field].placeholder ?? ""}
            name={field}
          />
        ))}
        <button
          class="bg-white text-[#161616] border-[1px] border-white whitespace-nowrap font-semibold rounded px-3 py-2 w-full mt-4"
          type="submit"
        >
          {translations.form.button}
        </button>
      </form>
    </article>
  );
};

export default Form;
