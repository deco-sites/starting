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
  const [isPending, setIsPending] = useState(false);

  const handleButtonClick = async (label: string, helpful: boolean) => {
    setIsPending(true);
    await Runtime.invoke.site.actions.feedbackDocs({
      contents: [helpful, label, globalThis.location.href],
    });
    setIsPending(false);

    const toast = document.getElementById('feedback-toast');
    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3000); // Hide after 3 seconds
  };

  const buttonProps = WasThisPageHelpful?.Button;
  const label = WasThisPageHelpful?.Label ?? "";
  const text = WasThisPageHelpful?.Text ?? "";

  return (
    <>
      {label && (
        <div class="bg-[#FFFFFF0D] flex flex-col p-4 rounded-2xl lg:gap-6 gap-y-4 backdrop-blur-lg border-2 border-[#FFFFFF26] lg:mx-[1.281rem]">
          <div class="flex lg:flex-row flex-col items-center lg:gap-0 gap-y-4 justify-between">
            <span class="text-[#F9FAFB] text-xl font-semibold leading-normal lg:mr-4 lg:whitespace-nowrap">
              {label}
            </span>
            <div class="flex gap-2 lg:w-auto w-full">
              {buttonProps?.NegativeButtonLabel && (
                <button
                  disabled={isPending}
                  class="flex items-center justify-center lg:flex-none flex-1 gap-2 text-[#F9FAFB] bg-[#FFFFFF1A] text-sm font-bold leading-tight h-9 px-4 py-2 rounded-lg transition duration-300 focus:border-black"
                  aria-label={buttonProps.NegativeButtonLabel}
                  onClick={() =>
                    handleButtonClick(
                      buttonProps.NegativeButtonLabel!,
                      false,
                    )}
                >
                  {buttonProps.NegativeButtonLabel}
                  {buttonProps.NegativeIcon && (
                    <Image
                      src={buttonProps.NegativeIcon}
                      class="min-w-4 min-h-4"
                      alt={buttonProps.NegativeButtonLabel}
                      width={buttonProps.Width ?? 16}
                      height={buttonProps.Height ?? 16}
                    />
                  )}
                </button>
              )}
              {buttonProps?.PositiveButtonLabel && (
                <button
                  disabled={isPending}
                  class="flex items-center justify-center lg:flex-none flex-1 gap-2 text-[#F9FAFB] bg-[#FFFFFF1A] text-sm font-bold leading-tight h-9 px-4 py-2 rounded-lg transition duration-300 focus:border-black"
                  aria-label={buttonProps.PositiveButtonLabel}
                  onClick={() =>
                    handleButtonClick(
                      buttonProps.PositiveButtonLabel!,
                      true,
                    )}
                >
                  {buttonProps.PositiveButtonLabel}
                  {buttonProps.PositiveIcon && (
                    <Image
                      src={buttonProps.PositiveIcon}
                      class="min-w-4 min-h-4"
                      alt={buttonProps.PositiveButtonLabel}
                      width={buttonProps.Width ?? 16}
                      height={buttonProps.Height ?? 16}
                    />
                  )}
                </button>
              )}
            </div>
          </div>
          <div
            class="text-[#FFFFFF80] text-[0.875rem] leading-[1.125rem] tracking-[-0.14px]"
            dangerouslySetInnerHTML={{ __html: text }}
          />
          <div id="feedback-toast" className="toast hidden transition duration-700">
            <div className="alert text-sm">
              <span>Thank you for your feedback!</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
