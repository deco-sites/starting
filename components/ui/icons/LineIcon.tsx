import type { h } from "preact";

export default function LineIcon(
  { class: className, from, to }: h.JSX.SVGAttributes<
    SVGElement
  >,
) {
  const id = `linearGradient${to}`;

  return (
    <svg
      width="2"
      height="127"
      viewBox="0 0 2 127"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={className}
    >
      <line
        x1="1"
        y1="127"
        x2="0.999994"
        y2="4.37112e-08"
        stroke={`url(#${id})`}
        stroke-width="2"
      />
      <defs>
        <linearGradient
          id={id}
          x1="1.99971"
          y1="120"
          x2="10.4997"
          y2="22.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={from} />
          <stop offset="1" stop-color={to} stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
