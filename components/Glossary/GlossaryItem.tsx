import Icon from "site/components/ui/Icon.tsx";

export const alphabet = Array.from(
  { length: 26 },
  (_, i) => String.fromCharCode(65 + i),
); // Create list of characters

function GlossaryItem({
  title,
  link,
  disabled = false,
}: {
  title: string;
  link: string;
  disabled?: boolean;
}) {
  const styles = {
    disabled: "opacity-70 pointer-events-none",
    regular: "text-[#C9CFCF] hover:text-[#02F67C] hover:bg-[#0D171790]",
  };
  return (
    <a
      href={link}
      disabled={disabled}
      class={`${
        disabled ? styles.disabled : styles.regular
      } flex items-center justify-between w-full h-fit py-2 px-4 gap-2 font-medium rounded-lg transition duration-300`}
    >
      <span class="text-lg">{title}</span>
      <Icon id="right-arrow" size={12} />
    </a>
  );
}

export default GlossaryItem;
