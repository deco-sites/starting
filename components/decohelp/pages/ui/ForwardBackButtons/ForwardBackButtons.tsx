export interface ForwardBackContent {
  previous?: {
    href?: string;
    title?: string;
    category?: string;
    previousLabel?: string;
  };
  next?: {
    href?: string;
    title?: string;
    category?: string;
    nextLabel?: string;
  };
}

export default function ForwardBackButtons(
  { previous, next }: ForwardBackContent,
) {
  const upper = "text-neutral-900 text-sm font-bold leading-tight";
  const category = "font-normal";
  const lower = "text-gray-900 font-medium";
  return (
    <div class="mt-6 flex justify-between">
      {previous && (
        <a href={previous.href} class={`text-left flex flex-col gap-2`}>
          {previous.previousLabel && (
            <span class={upper}>{`←  ${previous.previousLabel}`}</span>
          )}
          <span class={lower}>
            {previous.category && (
              <span class={category}>{previous.category}</span>
            )}
            {previous.title && (
              <span class="text-[#2E6ED9] text-xl font-semibold leading-normal">
                {previous.title}
              </span>
            )}
          </span>
        </a>
      )}
      {next && (
        <a href={next.href} class={`text-right flex flex-col gap-2`}>
          {next.nextLabel && (
            <span class={upper}>{`${next.nextLabel}  →`}</span>
          )}
          <span class={lower}>
            {next.category && <span class={category}>{next.category}</span>}
            {next.title && (
              <span class="text-[#2E6ED9] text-xl font-semibold leading-normal">
                {next.title}
              </span>
            )}
          </span>
        </a>
      )}
    </div>
  );
}
