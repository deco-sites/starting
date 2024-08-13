import Icon from "site/components/ui/Icon.tsx";

export const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  ); // Create list of characters


function GlossaryItem({ title, link }: { title: string; link: string }) {
  return (
    <a
      href={link}
      class="flex items-center justify-between w-full md:w-60 h-fit py-2 px-4 gap-2 font-medium text-[#C9CFCF] hover:text-[#02F67C] hover:bg-[#0D171790] rounded-lg transition duration-300"
    >
      <span class="text-lg">{title}</span>
      <Icon id="right-arrow" size={12} />
    </a>
  );
}

export default GlossaryItem;
