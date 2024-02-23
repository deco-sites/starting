export interface Props {
  /**
   * @format html
   */
  flag: string;
  type: "ligth" | "dark";
}

const BG_COLOR = {
  "ligth": "bg-[#5ff2a8] border-[rgba(2, 246, 124, 0.3)] border",
  "dark":
    "bg-[#rgba(255, 255, 255, 0.05)] border-[rgba(255, 255, 255, 0.15)] border",
};

export default function Flag({ flag, type }: Props) {
  return (
    <span
      class={`px-4 py-2 rounded-3xl text-sm  ${BG_COLOR[type]}`}
      dangerouslySetInnerHTML={{ __html: flag }}
    >
    </span>
  );
}
