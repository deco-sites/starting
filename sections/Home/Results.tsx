/**
 * @title {{{id}}}
 */
export interface Result {
  id?: string;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title: string;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  description: string;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  results?: Result[];
}

export default function Results({
  title = "Results don't have to be explained",
  results = [
    {
      title: "+70",
      description: "Websites using deco.cx",
    },
    {
      title: "6X",
      description: "average faster PageSpeed",
    },
    {
      title: "+3k",
      description: "in our Discord community",
    },
    {
      title: "+400",
      description: "starts on our GitHub",
    },
  ],
}: Props) {
  return (
    <div class="lg:mx-auto lg:max-w-[1440px] relative z-10 p-6 md:p-10 flex flex-col gap-16 lg:gap-20 justify-center items-center bg-[#070D0D] border-[#0B1612] rounded-lg">
      {title &&
        (
          <h2
            class="font-albert-sans text-3xl lg:text-5xl font-medium text-white text-center"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          >
          </h2>
        )}
      <div class="columns-1 md:columns-2 lg:flex md:flex-row gap-4 w-full">
        {results.map((result) => (
          <div class="flex flex-col gap-4 flex-1 mb-4 lg:mb-0">
            <h3
              class="font-albert-sans text-[72px] text-left font-medium text-white leading-none"
              dangerouslySetInnerHTML={{
                __html: result.title,
              }}
            >
            </h3>
            <hr class="border-[#C9CFCF]" />
            <div
              class="font-albert-sans text-[20px] text-left text-white"
              dangerouslySetInnerHTML={{
                __html: result.description,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
