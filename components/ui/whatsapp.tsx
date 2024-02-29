import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  phone?: number;
  text?: string;
}

function WhatsApp({ phone, text }: Props) {
  if (!phone) {
    return null;
  }

  return (
    <a
      href={`https://wa.me/${phone}/?text=${text}`}
      class="fixed bottom-6 right-6 z-40"
      aria-label="Chat on WhatsApp"
    >
      <button
        class="bg-[#45D268] text-white p-2 rounded-full shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <Icon id="WhatsApp" size={32} stroke="0.01" />
      </button>
    </a>
  );
}

export default WhatsApp;
