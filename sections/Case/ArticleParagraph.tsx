export interface Props {
  /** @title Title */
  label?: string;
  titleLevel?: "H1" | "H2";
  onlyShowTitle?: boolean;
  /** @format html */
  text: string;
  /** @format color */
  textColor?: string;
}

export default function ArticleParagraph({
  label,
  titleLevel = "H1",
  textColor = "#0A2121",
  onlyShowTitle,
  text,
}: Props) {
  return (
    <div
      class="lg:container"
      style={{
        color: textColor,
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
                        .article-content p {
                            margin-bottom: 1.5rem;
                        }
                    `,
        }}
      ></style>
      <div class="mx-4 md:mx-12 lg:mx-auto lg:w-8/12">
        <div class="flex flex-col gap-4 py-4">
          {label && (
            <>
              {titleLevel === "H1" && (
                <h2 class="text-3xl font-semibold leading-tight z-10">
                  {label}
                </h2>
              )}
              {titleLevel === "H2" && (
                <h3 class="text-xl font-medium leading-tight z-10">{label}</h3>
              )}
            </>
          )}
          {onlyShowTitle ? (
            ""
          ) : (
            <div
              class="text-lg leading-normal article-content z-10"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
}
