import Icon from "site/components/ui/Icon.tsx";

export interface Props {
  term: string;
  onClose: () => void;
  onAccept: (state?: boolean) => void;
}

export default function TermModal({ term, onClose, onAccept }: Props) {
  return (
    <div
      onClick={onClose}
      class="fixed flex items-center justify-center top-0 left-0 min-h-screen w-screen bg-[#00000060] px-4"
      style={"html::-webkit-scrollbar-track: none"}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        class="flex flex-col gap-4 bg-[#F0ECE1] max-w-[650px] max-h-[500px] md:max-h-[750px] w-full p-8"
      >
        <div class="flex gap-4 w-full">
          <h2 class="text-[#27AE6B] text-lg font-bold w-full">
            Termo de Consentimento de Uso de Voz e Imagem
          </h2>
          <Icon
            class="cursor-pointer"
            id="Close"
            width="18"
            height="18"
            onClick={onClose}
          />
        </div>
        <article
          class="overflow-y-scroll max-h-[600px] scrollbar-bg pr-2 light-scrollbar"
          dangerouslySetInnerHTML={{ __html: term }}
        >
        </article>
        <button
          onClick={() => onAccept(true)}
          class="btn w-fit px-8 py-3 bg-[#27AE6B] hover:bg-[#329f69] text-white self-end"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
