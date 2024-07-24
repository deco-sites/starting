import { FormField } from "site/sections/tuju/Form.tsx";
import TermModal from "site/components/tuju/TermModal.tsx";
import { useSignal } from "@preact/signals";
import Icon from "site/components/ui/Icon.tsx";

const InputField = ({ field }: { field: FormField }) => {
  const { id: inputId, name, required, selectValues, children } = field;

  if (children && children.length > 0) {
    return (
      <div class="flex flex-col md:flex-row gap-8">
        {children.map((child) => (
          <InputField field={child} />
        ))}
      </div>
    );
  }

  return (
    <label class="w-full" for={inputId}>
      {selectValues && selectValues?.length > 0 ? (
        <select
          id={inputId}
          name={inputId}
          required={required}
          class="cursor-pointer w-full bg-[#f0ede2] border-b border-[#27AE6B] placeholder-[#113032] outline-none pl-2 pb-1 light-autofill"
        >
          <option class="bg-[#f0ede2]" value="" disabled selected>{`${name}${
            required ? "*" : ""
          }`}</option>
          {selectValues.map((option) => (
            <option class="bg-[#f0ede2]" value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={inputId}
          name={inputId}
          class="w-full bg-[#f0ede2] border-b border-[#27AE6B] placeholder-[#113032] outline-none pl-2 pb-1 light-autofill"
          placeholder={`${name}${required ? "*" : ""}`}
          required={required}
        />
      )}
    </label>
  );
};

export default function Form({
  fields,
  term,
  onSent,
}: {
  fields: FormField[];
  onSent: () => void;
  term: string;
}) {
  const modalOpen = useSignal(false);
  const acceptedTerm = useSignal(false);
  const loading = useSignal(false);

  // deno-lint-ignore no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    loading.value = true;

    let params = "?";

    for (const [key, value] of formData.entries()) {
      params += `${key}=${value}&`;
    }

    try {
      const response = await fetch(
        `https://script.google.com/macros/s/AKfycbzBpNdbtSUMwykOT9Il9gZhHldiwg_VlKRnYZ0akmN9tOI7-Pv6-6rltiwKrZHY9uwFkg/exec${params}`
      );
      if (response.status === 200) {
        onSent();
      } else {
        alert("Erro ao enviar. Por favor, envie o fomulário novamente");
      }
    } catch (error) {
      console.log(error.message)
      alert("Erro inesperado. Por favor, envie o fomulário novamente");
    }

    loading.value = false;
  };

  return (
    <>
      <form
        class="flex flex-col gap-8 w-full py-8"
        onSubmit={(e) => handleSubmit(e)}
      >
        {fields.map((field) => (
          <InputField field={field} />
        ))}
        <div class="flex flex-col md:flex-row gap-8 md:gap-4 w-full text-[#113032] items-center">
          <label class="flex gap-2" for="acceptTerm">
            <input
              id="acceptTerm"
              name="acceptTerm"
              class="border-[#27AE6B] light-checkbox"
              type="checkbox"
              checked={acceptedTerm.value}
              onChange={() => (acceptedTerm.value = !acceptedTerm.value)}
              required
            />
            <div>
              <span>Concordo com o </span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  modalOpen.value = true;
                }}
                class="underline cursor-pointer text-[#27AE6B]"
              >
                Termo de Consentimento de Uso de Voz e Imagem
              </span>
            </div>
          </label>
          <button
            class="btn w-full md:w-fit px-8 py-2 bg-[#27AE6B] hover:bg-[#329f69] disabled:bg-[#00000030] text-white"
            disabled={loading.value}
            type="submit"
          >
            {loading.value ? (
              <Icon id="Loading" width="20" height="20" class="animate-spin" />
            ) : (
              <>Enviar</>
            )}
          </button>
        </div>
      </form>
      {modalOpen.value && (
        <TermModal
          term={term}
          onClose={() => (modalOpen.value = false)}
          onAccept={() => {
            modalOpen.value = false;
            acceptedTerm.value = true;
          }}
        />
      )}
    </>
  );
}
