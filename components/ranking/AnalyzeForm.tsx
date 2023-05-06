import { IS_BROWSER } from "https://deno.land/x/fresh@1.1.4/src/runtime/utils.ts";
import { JSX } from "preact";
import { useEffect, useRef } from "preact/compat";

export interface Link {
  label: string;
  href: string;
  highlight?: boolean;
}

export interface AnalyzeFormTranslation {
  title: string;
  form: {
    label: string;
    button: string;
    placeholder?: string;
    error: string;
  };
  loading: {
    title: string;
    description: string;
  };
  result: {
    title: string;
    links: Link[];
  };
}

export interface Props {
  translations: AnalyzeFormTranslation;
}

export default function AnalyzeForm({ translations }: Props) {
  const input = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    event.preventDefault();

    if (!input.current?.value) {
      return alert(translations.form.error);
    }

    const handledValue = input.current.value.includes("https://")
      ? input.current.value
      : `https://${input.current.value}`;

    try {
      const psURL = new URL(handledValue);
      const url = new URL(window.location.href);

      url.searchParams.set("url", psURL.origin);
      window.history.pushState({}, "", url);

      location.reload();
    } catch {
      return alert(translations.form.error);
    }
  };

  useEffect(() => {
    if (!IS_BROWSER) return;

    const origin = new URL(window.location.href);
    const psURL = origin.searchParams.get("url");

    if (psURL) {
      fetch(
        "https://psi-test-api.fly.dev/?t=AIzaSyADcbhTjzpb5EGL0ACHhMtFD2i9sJMsn3I&n=1&url=" +
          encodeURIComponent(psURL),
        { method: "GET" }
      ).then((res) => {
        res.text().then((r) => console.log(r))
        // const { data } = JSON.parse();
        // console.log(JSON.stringify(data, null, 2));
        // const score = (data ? data.score.mean : -1) * 100;
      });
      // const score = (data ? data.score.mean : -1) * 100;

      // return score + "";
    }
  }, []);

  return (
    <div class="max-w-[750px] mx-auto flex min-h-[100vh] flex-col justify-center items-center text-almost-white px-6 md:px-0">
      <h1 class="text-3xl md:text-5xl font-semibold md:mb-10 mb-6 text-center">
        {translations.title}
      </h1>
      <form
        class="flex w-full md:flex-row flex-col justify-center items-end md:gap-2 gap-4"
        onSubmit={handleSubmit}
      >
        <div class="w-full md:max-w-[400px] flex-grow-1 flex flex-col">
          <label>{translations.form.label}</label>
          <input
            class="w-full block bg-transparent rounded border-[#525252] border-[1px] px-3 py-2 mt-2"
            ref={input}
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
    </div>
  );
}
