import RegistrationStepsHeader from "./registrationSteps/RegistrationStepsHeader.tsx";

const registrationSteps = [
  {
    text: "Preencha o form de inscrição.",
    id: 1,
    class: "text-black mb-9 text-xl font-bold",
  },
  { text: "Siga as instruções por e-mail", id: 2 },
  { text: "Envie um vídeo de apresentação", id: 3 },
  { text: "Entre no Discord e na plataforma Deco", id: 4 },
  { text: "Comece a aprender", id: 5 },
];

const registrationInput = [
  {
    label: "Nome",
    placeholder: "Nome",
    type: "text",
    name: "nome",
    id: "nome",
  },
  {
    label: "E-mal",
    placeholder: "E-mail",
    type: "email",
    name: "email",
    id: "email",
  },
  {
    label: "Linkedin",
    placeholder: "Ex: https://www.linkedin.com/in/fulano",
    type: "text",
    name: "linkedin",
    id: "linkedin",
  },
  {
    label: "Onde você estuda?",
    placeholder: "Universidade",
    type: "text",
    name: "universidade",
    id: "univerdidade",
  },
];

const RegistrationForm = () => {
  return (
    <div class="lg:flex justify-between max-w-[1100px] mx-auto mb-40">
      <div class="max-w-[510px] mx-auto">
        <RegistrationStepsHeader text="Comece agora!" />
        <div class="flex justify-center items-center">
          <a
            href="https://deco.cx/discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://user-images.githubusercontent.com/18706156/203458425-4cb379c1-57d1-4384-a679-d7790c609fab.png"
              alt="Entre para nosso Discord"
              width="290"
            />
          </a>
          {
            /* <div class="mt-[2px]">
            <img src="/registration-steps.png" />
          </div>
          <div class="block ml-8">
            {registrationSteps.map((step) => (
              <RegistrationSteps
                step={step.text}
                key={step.id}
                class={step.class}
              />
            ))}
          </div> */
          }
        </div>
      </div>

      {
        /* <div class="bg-white rounded-xl p-6 max-w-[403px] flex-1 mx-auto md:mt-0 mt-10">
        <div>
          <label
            htmlFor="email"
            class="block text-sm font-medium text-[#6F7482]"
          >
            Como você deseja participar
          </label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 right-0  pr-4 flex items-center pointer-events-none">
              <button class="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3 text-black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              class="focus:ring-indigo-500 focus:outline-none block w-full bg-gray-100 p-3 sm:text-md border-gray-300 rounded-lg placeholder-[#3B4256] "
              placeholder="Aluno, quero aprender!"
            />
          </div>
        </div>
        <div>
          {registrationInput.map((input) => (
            <div class="mt-6">
              <RegistrationInput
                label={input.label}
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
                id={input.id}
              />
            </div>
          ))}
        </div>
        <div class="mt-12">
          <Button>Cadastrar</Button>
        </div>
      </div> */
      }
    </div>
  );
};

export default RegistrationForm;
