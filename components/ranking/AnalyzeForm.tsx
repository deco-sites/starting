import { useSignal } from "@preact/signals";
import { Site } from "deco-sites/starting/routes/api/ranking.ts";
import { JSX } from "preact";
import { useRef } from "preact/compat";
import Form from "./analyze/Form.tsx";
import Loading from "./analyze/Loading.tsx";
import Result from "./analyze/Result.tsx";

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
    /**
     * @description You can insert {{pageName}} where you desires to replace by site URL
     */
    title: string;
    description: string;
  };
  result: {
    title: string;
    links: Link[];
  };
}

interface FetchData {
  url: string;
  error: boolean;
  loading: boolean;
  status: number;
  data: Site[] | null;
}

export interface Props {
  translations: AnalyzeFormTranslation;
}

export default function AnalyzeForm({ translations }: Props) {
  const input = useRef<HTMLInputElement>(null);
  const response = useSignal<FetchData>({
    loading: true,
    data: null,
    error: false,
    url: "",
    status: 0,
  });

  const handleSubmit = (event: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    event.preventDefault();

    if (!input.current?.value) {
      return alert(translations.form.error);
    }

    try {
      const handledValue = input.current.value.includes("https://")
        ? input.current.value
        : `https://${input.current.value}`;
      const psURL = new URL(handledValue).origin;

      if (psURL) {
        response.value = {
          ...response.peek(),
          loading: true,
          error: false,
        };

        fetch("/api/ranking", {
          method: "POST",
          body: JSON.stringify({ url: psURL }),
        })
          .then((res) => {
            response.value = {
              ...response.peek(),
              status: res.status,
            };
            return res.json();
          })
          .then((data) => {
            response.value = {
              ...response.peek(),
              url: psURL,
              data,
              loading: false,
            };
          });
      }
    } catch {
      response.value = {
        ...response.peek(),
        loading: false,
        error: true,
      };
      return alert(translations.form.error);
    }
  };

  return (
    <div class="max-w-[750px] mx-auto flex min-h-[100vh] flex-col justify-center items-center text-almost-white px-6 md:px-0">
      {(!response.value.data && !response.value.loading) ||
      response.value.error ? (
        <Form onSubmit={handleSubmit} translations={translations} ref={input} />
      ) : null}
      {response.value.data &&
      !response.value.error &&
      !response.value.loading ? (
        <Result
          status={response.value.status}
          translations={translations}
          sites={response.value.data}
          site={response.value.url}
        />
      ) : null}
      {response.value.loading ? (
        <Loading site={response.value.url} translations={translations} />
      ) : null}
    </div>
  );
}
