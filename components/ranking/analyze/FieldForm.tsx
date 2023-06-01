export interface Props {
  label: string;
  placeholder: string;
  name: string;
  required?: boolean;
}

export function FieldForm({
  label,
  placeholder,
  name,
  required = false,
}: Props) {
  return (
    <div class="w-full flex-grow-1 flex flex-col">
      <label>
        {label}
        {required && !label.includes("*") ? "*" : ""}
      </label>
      <input
        class="w-full block bg-transparent rounded border-[#525252] border-[1px] px-3 py-2 mt-2"
        type="text"
        name={name}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}
