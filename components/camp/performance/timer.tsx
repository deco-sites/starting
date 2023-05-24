import { ComponentChildren, JSX } from "preact";

interface Props {
  className?: string;
  children: ComponentChildren;
}

export default function Timer(
  { className, children }: Props,
) {
  return (
    <div
      class={`w-[148px] h-[148px] rounded-full flex flex-col items-center gap-2 border border-dark-green
        ${className ?? ""}
      `}
    >
      {children}
    </div>
  );
}
