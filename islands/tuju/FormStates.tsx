import { useState } from "preact/hooks";
import SentState from "site/components/tuju/SentState.tsx";
import { FormProps } from "site/sections/tuju/Form.tsx";
import Form from "site/islands/tuju/Form.tsx";

export default function FormStates(props: FormProps) {
  const [sent, setSent] = useState(false);

  return (
    <div class="flex flex-col justify-center grow my-16">
      {sent
        ? (
          <SentState
            sentText={props.sentText}
            sentTitle={props.sentTitle}
            locationInfo={props.locationInfo}
          />
        )
        : (
          <>
            <p dangerouslySetInnerHTML={{ __html: props.initialText }}></p>
            <Form
              fields={props.formFields}
              term={props.termUse}
              onSent={() => setSent(true)}
            />
          </>
        )}
    </div>
  );
}
