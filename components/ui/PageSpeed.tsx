interface Props {
  score: number | null;
  size?: number;
  monochrome?: boolean;
}

export const COLORS = {
  "monochrome": {
    text: "#000",
    fill: "#000",
  },
  "unknown": {
    text: "#AAA",
    fill: "#ccc",
  },
  "poor": {
    text: "#c00",
    fill: "#f33",
  },
  "needs-improvement": {
    text: "#c33300",
    fill: "#fa3",
  },
  "good": {
    text: "#080",
    fill: "#0c6",
  },
};

export const labelRating = (score?: number | null) =>
  score == null
    ? "unknown"
    : score >= 80
    ? "good"
    : score >= 50
    ? "needs-improvement"
    : "poor";

function PageSpeed({ score, size = 48, monochrome = false }: Partial<Props>) {
  const dasharray = score ? (score / 100 * 351.858) - 4 : 351.858 - 4;
  const rating = labelRating(score);

  const colors = COLORS[monochrome ? "monochrome" : rating];

  return (
    <div class="relative" style={{ width: size + "px", height: size + "px" }}>
      <svg
        viewBox="0 0 120 120"
        class="block align-middle"
      >
        <circle
          r="56"
          cx="60"
          cy="60"
          fill={colors.fill}
          stroke={colors.fill}
          stroke-width="8"
          style={`opacity: ${monochrome ? 0 : 0.1};`}
        >
        </circle>
        <circle
          r="56"
          cx="60"
          cy="60"
          stroke-width="8"
          stroke={score ? colors.fill : "#AAA"}
          fill="none"
          style={`transform: rotate(-87.9537deg); stroke-linecap: round; stroke-dasharray: ${dasharray}, 351.858; transform-origin: 50% 50%;`}
        >
        </circle>
      </svg>
      <div class="w-full h-full absolute top-0 left-0 flex items-center justify-center">
        <span
          class={`flex-none text-[${
            Math.round(size / 3.2) /* 15 for size 48 */
          }px] text-[${colors.text}]`}
        >
          {score !== null ? score : "?"}
        </span>
      </div>
    </div>
  );
}

export default PageSpeed;
