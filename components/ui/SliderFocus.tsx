import { Children } from "preact/compat";
import type { JSX } from "preact";

type Props = JSX.IntrinsicElements["ul"] & {
  snap?: string;
  itemClass?: string;
};

function SliderFocus({
  children,
  snap = "scroll-snap-center",
  class: _class = "gap-6 scrollbar-none",
  itemClass,
  ...props
}: Props) {
  return (
    <ul
      data-slider
      class={`grid grid-flow-col items-center carousel carousel-center overflow-x-auto overscroll-x-contain snap-x snap-mandatory ${_class}`}
      {...props}
    >
      {Children.map(
        children,
        (child, index) => (
          <li
            class={`w-full min-w-[200px] lg:min-w-[320px] max-w-[100vw] overflow-hidden ${itemClass}`}
          >
            <button data-slider-item={index} data-dot={index} class={snap}>
              {child}
            </button>
          </li>
        ),
      )}
    </ul>
  );
}

export default SliderFocus;
