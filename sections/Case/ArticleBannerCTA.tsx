export interface Props {
  text: string;
  button: {
    label?: string;
    href: string;
  };
}

export default function ArticleBannerCTA({
  text,
  button,
}: Props) {
  return (
    <div class="lg:container">
      <div class="mx-4 md:mx-12 mt-16 lg:mx-auto lg:w-8/12">
        <div class="bg-slate-100 flex flex-col md:flex-row gap-6 md:gap-16 px-10 md:px-28 py-8 md:py-12 rounded-lg">
          <div class="flex-auto text-lg md:text-xl font-medium">
            {text}
          </div>
          <div class="flex-none">
            <a
              class="bg-primary text-white uppercase flex justify-center px-6 py-4 rounded hover:scale-110 duration-100"
              href={button && button.href}
            >
              {button && button.label || "Baixar e-book"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
