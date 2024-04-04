import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import type { HTMLWidget } from "apps/admin/widgets.ts";
import { useState } from "preact/hooks";
import { Runtime } from "site/runtime.ts";

export interface WasThisPageHelpfulProps {
  WasThisPageHelpful?: {
    Label?: string;
    Button?: {
      NegativeButtonLabel?: string;
      NegativeIcon?: ImageWidget;
      PositiveButtonLabel?: string;
      PositiveIcon?: ImageWidget;
      Width?: number;
      Height?: number;
    };

    Text?: HTMLWidget;
  };
}

interface ButtonData {
  label: string;
  helpful: boolean;
}

export default function WasThisPageHelpfulContent({
  WasThisPageHelpful = {
    Label: "Was this page helpful?",
    Button: {
      NegativeButtonLabel: "Not really",
      NegativeIcon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/3c7ad809-b1b8-47ca-ba63-bb9e7399a5fa",
      PositiveButtonLabel: "Yes, thanks",
      PositiveIcon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/5bae30a2-fb13-4c39-827f-7d9b273d7872",
    },
    Text:
      "Can't find what you're looking for? Spot an error in the documentation? Get in touch with us on our Community Forum",
  },
}: WasThisPageHelpfulProps) {
  const [buttonClicked, setButtonClicked] = useState<ButtonData | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleButtonClick = async (label: string, helpful: boolean) => {
    setIsPending(true);
    setButtonClicked({ label, helpful });
    await Runtime.invoke.site.actions.feedbackDocs({
      contents: [helpful, label, window.location.href],
    });
    setIsPending(false);
  };

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
                  disabled={isPending}
                  class="flex items-center justify-center lg:flex-none flex-1 gap-2 text-[#161616] text-sm font-bold leading-tight h-9 px-3 py-2 rounded border transition duration-300 border-zinc-300 focus:border-black"
                  aria-label={buttonProps.NegativeButtonLabel}
                  onClick={() =>
                    handleButtonClick(
                      buttonProps.NegativeButtonLabel!,
                      false,
                    )}
                >
                  {buttonProps.NegativeIcon && (
                    <Image
                      src={buttonProps.NegativeIcon}
                      class="min-w-4 min-h-4"
                      alt={buttonProps.NegativeButtonLabel}
                      width={buttonProps.Width ?? 16}
                      height={buttonProps.Height ?? 16}
                    />
                  )}
                  {buttonProps.NegativeButtonLabel}
                </button>
              )}
              {buttonProps?.PositiveButtonLabel && (
                <button
                  disabled={isPending}
                  class="flex items-center justify-center lg:flex-none flex-1 gap-2 text-[#161616] text-sm font-bold leading-tight h-9 px-3 py-2 rounded border transition duration-300 border-zinc-300 focus:border-black"
                  aria-label={buttonProps.PositiveButtonLabel}
                  onClick={() =>
                    handleButtonClick(
                      buttonProps.PositiveButtonLabel!,
                      true,
                    )}
                >
                  {buttonProps.PositiveIcon && (
                    <Image
                      src={buttonProps.PositiveIcon}
                      class="min-w-4 min-h-4"
                      alt={buttonProps.PositiveButtonLabel}
                      width={buttonProps.Width ?? 16}
                      height={buttonProps.Height ?? 16}
                    />
                  )}
                  {buttonProps.PositiveButtonLabel}
                </button>
              )}
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      )}
    </>
  );
}
