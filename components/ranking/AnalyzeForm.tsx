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
  /** @title Form */
  form: {
    /** @default "Contact Information" */
    contactTitle: string;
    website: {
      /** @default "Website URL" */
      label: string;
      placeholder?: string;
    };
    name: {
      /** @default Name */
      label: string;
      placeholder?: string;
    };
    phone: {
      /** @default Phone */
      label: string;
      placeholder?: string;
    };
    email: {
      /** @default E-mail */
      label: string;
      placeholder?: string;
    };
    agency: {
      /** @default Agency */
      label: string;
      placeholder?: string;
    };
    button: string;
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
    failure: {
      /** @default "Oops! Your PageSpeed is under 80 and couldn't make the cut for our ranking" */
      title: string;
      /** @default "Ready to accelerate your website? Try Deco now and see the difference!" */
      description: string;
    };
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
  const response = useSignal<FetchData>({
    loading: false,
    data: null,
    error: false,
    url: "",
    status: 0,
  });

  const handleSubmit = (event: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    event.preventDefault();

    const { agency, name, phone, website, email } = event.currentTarget
      .elements as typeof event.currentTarget.elements & {
      agency: { value: string };
      name: { value: string };
      phone: { value: string };
      website: { value: string };
      email: { value: string };
    };

    try {
      const handledValue = website.value.includes("https://")
        ? website.value
        : `https://${website.value}`;
      const psURL = new URL(handledValue).origin;

      if (psURL) {
        response.value = {
          ...response.peek(),
          loading: true,
          error: false,
        };

        fetch("/api/ranking", {
          method: "POST",
          body: JSON.stringify({
            url: psURL,
            contactName: name.value || "",
            contactEmail: email.value || "",
            contactPhone: phone.value || "",
            contactAgency: agency.value || "",
          }),
        })
          .then((res) => {
            response.value = {
              ...response.peek(),
              status: res.status,
            };
            return res.text();
          })
          .then((textContent) => {
            const data = textContent ? JSON.parse(textContent) : [];

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
    <div class="flex md:min-h-[100vh] min-h-[calc(100vh-106px)] flex-col justify-center items-center text-almost-white px-6 md:px-0">
      {(!response.value.data && !response.value.loading) ||
      response.value.error ? (
        <Form onSubmit={handleSubmit} translations={translations} />
      ) : null}
      {response.value.data &&
      !response.value.error &&
      !response.value.loading ? (
        <Result
          translations={translations}
          sites={response.value.data}
          siteUrl={response.value.url}
        />
      ) : null}
      {response.value.loading ? (
        <Loading site={response.value.url} translations={translations} />
      ) : null}
    </div>
  );
}
