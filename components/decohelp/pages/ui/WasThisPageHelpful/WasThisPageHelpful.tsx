import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface WasThisPageHelpfulProps {
  WasThisPageHelpful?: {
    Label?: string;
    Button?: {
      NegativeButtonLabel?: string;
      NegativeIcon?: LiveImage;
      PositiveButtonLabel?: string;
      PositiveIcon?: LiveImage;
      Width?: number;
      Height?: number;
    };
    Text?: HTML;
  };
}

export default function WasThisPageHelpfulContent({
  WasThisPageHelpful,
}: WasThisPageHelpfulProps) {
  const button =
    "flex items-center justify-center lg:flex-none flex-1 gap-2 text-[#161616] text-sm font-bold leading-tight h-9 px-3 py-2 rounded border transition duration-300 border-zinc-300 focus:border-black";
  const buttonProps = WasThisPageHelpful?.Button;
  const label = WasThisPageHelpful?.Label ?? "";
  const text = WasThisPageHelpful?.Text ?? "";

  return (
    <>
      {label && (
        <div class="bg-[#FAFAFA] flex flex-col p-4 rounded-2xl lg:gap-6 gap-y-4">
          <div class="flex lg:flex-row flex-col items-center lg:gap-0 gap-y-4">
            <span class="text-[#161616] text-xl font-semibold leading-normal lg:mr-4 lg:whitespace-nowrap">
              {label}
            </span>
            <div class="flex gap-2 lg:w-auto w-full">
              {buttonProps?.NegativeButtonLabel && (
                <button
                  class={button}
                  aria-label={buttonProps?.NegativeButtonLabel ?? ""}
                >
                  {buttonProps.NegativeIcon && (
                    <figure>
                      <Image
                        src={buttonProps.NegativeIcon}
                        class="min-w-4 min-h-4"
                        alt={buttonProps?.NegativeButtonLabel ?? ""}
                        width={buttonProps?.Width ?? 16}
                        height={buttonProps?.Height ?? 16}
                      />
                    </figure>
                  )}
                  {buttonProps?.NegativeButtonLabel ?? ""}
                </button>
              )}
              {buttonProps?.PositiveButtonLabel && (
                <button
                  class={button}
                  aria-label={buttonProps?.PositiveButtonLabel ?? ""}
                >
                  {buttonProps.PositiveIcon && (
                    <figure>
                      <Image
                        src={buttonProps.PositiveIcon}
                        class="min-w-4 min-h-4"
                        alt={buttonProps?.PositiveButtonLabel ?? ""}
                        width={buttonProps?.Width ?? 16}
                        height={buttonProps?.Height ?? 16}
                      />
                    </figure>
                  )}
                  {buttonProps?.PositiveButtonLabel ?? ""}
                </button>
              )}
            </div>
          </div>
          <HTMLRenderer html={text} />
        </div>
      )}
    </>
  );
}
