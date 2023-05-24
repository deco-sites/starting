import { ComponentChildren, JSX } from "preact";

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "filled";
  className?: string;
  children: ComponentChildren;
}

export default function CountButton(
  { variant, children, className, ...rest }: Props,
) {
  const variantStyle = {
    outline: `bg-almost-white border border-dark-green  gap-2`,
    filled: `bg-[#06E474] absolute bottom-[-2px] border-0`,
  };

  return (
    <button
      class={`w-full py-[17px] rounded text-base font-500 font-inter text-dark-green flex justify-center items-center
        ${variant ? variantStyle[variant] : ""} 
        ${className ?? ""}
      `}
      {...rest}
    >
      {children}
    </button>
  );
}
