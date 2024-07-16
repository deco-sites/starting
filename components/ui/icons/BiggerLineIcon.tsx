import type { h } from "preact";

export default function BiggerLineIcon(
  { class: className, from, to }: h.JSX.SVGAttributes<
    SVGElement
  >,
) {
  const id = `linearGradient${to}`;

  return (
    <svg
      width="2"
      height="462"
      viewBox="0 0 2 462"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={className}
    >
      <path
        d="M1 461.5L1.00024 0.5"
        stroke={`url(#${id})`}
        stroke-width="2"
      />
      <defs>
        <linearGradient
          id={id}
          x1="17.0066"
          y1="253"
          x2="14.512"
          y2="-119.499"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={to} stop-opacity="0" />
          <stop offset="0.8125" stop-color={from} />
          <stop offset="0.96875" stop-color={from} stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
