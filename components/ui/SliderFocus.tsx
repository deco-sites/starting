import { Children } from "preact/compat";
import type { JSX } from "preact";

type Props = JSX.IntrinsicElements["ul"] & {
  snap?: string;
  itemClass?: string;
};

function SliderFocus({
  children,
  snap = "scroll-snap-center",
  class: _class = "gap-4",
  itemClass,
  ...props
}: Props) {
  return (
    <ul
      data-slider
      class={`flex carousel-start items-center overflow-x-hidden snap-x snap-mandatory ${_class}`}
      {...props}
    >
      {Children.map(
        children,
        (child, index) => (
          <li class={`shrink-0 ${itemClass}`}>
            <button
              data-slider-item={index}
              data-dot={index}
              class={`${snap} flex w-screen justify-center pr-[12.5%] sm:w-full sm:pr-0 `}
            >
              {child}
            </button>
          </li>
        ),
      )}
    </ul>
  );
}

export default SliderFocus;
