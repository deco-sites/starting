export interface Props {
  title?: string;
  message?: string;
  buttonText?: string;
  homeLink?: string;
}

export default function Thanks({
  title = "We have received your contact!",
  message = "Thank you for your interest in deco.cx. We will be in touch by email shortly.",
  buttonText = "Back to home page",
  homeLink = "/",
}: Props) {
  return (
    <div class="mx-auto flex flex-col items-center justify-center text-center py-64 px-10 max-w-2xl gap-10">
      <h1 class="text-[42px] leading-[100%] tracking-[-2.4px] lg:text-[64px] text-almost-white font-semibold">
        {title}
      </h1>
      <h2 class="lg:text-[20px] text-zinc-400 leading-[120%]">{message}</h2>
      <div class="relative">
        <a
          href={homeLink}
          class={`block group overflow-hidden rounded-full hover:bg-gradient-to-r px-6 py-2 lg:px-8 lg:py-3 transition-all duration-300 ease-out bg-[#02F67C] hover:from-[#02F67C] hover:to-[#06E474] text-black hover:shadow-hero`}
        >
          <span class="relative font-medium lg:text-[20px]">{buttonText}</span>
        </a>
      </div>
    </div>
  );
}
