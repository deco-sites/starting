const RegistrationInput = (
  props: {
    label: string;
    placeholder: string;
    type: string;
    name: string;
    id: string;
  },
) => {
  return (
    <div>
      <label
        htmlFor="email"
        class="block text-sm font-medium text-[#6F7482]"
      >
        {props.id == "nome" || props.id == "email"
          ? (
            <div>
              {props.label} <span class="text-[#ED0131]">*</span>
            </div>
          )
          : (
            <div>
              {props.label}
            </div>
          )}
      </label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          class="text-black focus:outline-none block w-full bg-gray-100 p-3 sm:text-md border-gray-300 rounded-lg placeholder-[#B8BCCA]"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default RegistrationInput;
