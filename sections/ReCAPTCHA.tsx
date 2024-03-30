import { Head } from "$fresh/runtime.ts";
import { RECAPTCHA_SITE_KEY } from "deco-sites/starting/sdk/recaptcha.ts";

export interface Props {
  formId: string;
}

export default function ReCAPTCHA({ formId }: Props) {
  return (
    <>
      <Head>
        <script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`}
        >
        </script>
      </Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        function onSubmit(token) {
          const form = document.getElementById('${formId}')
          if (form.reportValidity()) {
            form.submit();
          }
        }
      `,
        }}
      />
    </>
  );
}
