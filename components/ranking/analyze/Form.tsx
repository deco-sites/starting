import type { JSX } from "preact";
import { forwardRef } from "preact/compat";
import { AnalyzeFormTranslation } from "../AnalyzeForm.tsx";

export interface Props {
  translations: AnalyzeFormTranslation;
  onSubmit: (event: JSX.TargetedEvent<HTMLFormElement, Event>) => void;
}

const Form = forwardRef<HTMLInputElement, Props>(
  ({ translations, onSubmit }, ref) => {
    return (
      <>
        <h1 class="text-3xl md:text-5xl font-semibold md:mb-10 mb-6 text-center">
          {translations.title}
        </h1>
        <form
          class="flex w-full md:flex-row flex-col justify-center items-end md:gap-2 gap-4"
          onSubmit={onSubmit}
        >
          <div class="w-full md:max-w-[400px] flex-grow-1 flex flex-col">
            <label>{translations.form.label}</label>
            <input
              class="w-full block bg-transparent rounded border-[#525252] border-[1px] px-3 py-2 mt-2"
              ref={ref}
              type="text"
              name="url"
              required
              placeholder={translations.form.placeholder}
            />
          </div>
          <button
            class="bg-white text-[#161616] border-[1px] border-white whitespace-nowrap font-semibold rounded px-3 py-2 md:w-auto w-full"
            type="submit"
          >
            {translations.form.button}
          </button>
        </form>
      </>
    );
  },
);

export default Form;
