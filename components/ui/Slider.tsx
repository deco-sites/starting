import { Children } from "preact/compat";
import type { JSX } from "preact";

type Props = JSX.IntrinsicElements["ul"] & {
  snap?: string;
  itemClass?:string
};

function Slider({
  children,
  snap = "scroll-snap-center",
  class: _class = "gap-6 scrollbar-none",
  itemClass,
  ...props
}: Props) {
  return (
    <ul
      data-slider
      class={`grid grid-flow-col items-center overflow-x-auto overscroll-x-contain snap-x snap-mandatory ${_class}`}
      {...props}
    >
      {Children.map(children, (child, index) => (
        <li class={`min-w-[360px] max-w-[100vw] max-h-[425px] overflow-hidden ${itemClass ? itemClass : "w-full min-h-[425px]"}`}>
          <button data-slider-item={index} data-dot={index} class={snap}>
            {child}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Slider;