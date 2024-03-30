import Image from "deco-sites/std/components/Image.tsx";
import { useEffect, useId, useState } from "preact/hooks";
import Header from "site/components/ui/SectionHeader.tsx";
import PageSpeed from "site/components/ui/PageSpeed.tsx";
import { Template } from "site/components/ui/Types.tsx";

export interface TemplateInfo {
  label?: string;
  description?: string;

  pageSpeed: number;
  slug: string;
  price: string;
  alignment?: "center" | "left";
}

export interface Props {
  lang?: string;
  header?: {
    title?: string;
    description?: string;
  };
  list?: Template[];
  layout?: {
    headerAlignment?: "center" | "left";
    categoryCard?: {
      textPosition?: "top" | "bottom";
      textAlignment?: "center" | "left";
    };
  };
}
function CardText(
  { label, description, alignment, pageSpeed, price, slug }: TemplateInfo,
) {
  return (
    <div
      class={`w-full px-3 flex gap-3 items-center ${
        alignment === "center" ? "text-center" : "text-left"
      }`}
    >
      {pageSpeed && <PageSpeed score={pageSpeed} size={40} />}
      <div class="flex-auto flex flex-col">
        {label && (
          <h3 class="font-semibold">
            {label}
          </h3>
        )}
        {description && (
          <div class="text-sm text-neutral">
            {description}
          </div>
        )}
      </div>
      <div class="flex-none font-semibold text-right">
        {price}
      </div>
    </div>
  );
}

function TemplatesGrid(props: Props) {
  const id = `category-list-${useId()}`;
  const {
    lang = "pt",
    header = {
      title: "",
      description: "",
    },
    list = [
      {
        label: "Feminino",
        description: "Moda feminina direto de Milão",
        slug: "feminino",
        image: {
          img:
            "https://ik.imagekit.io/decocx/tr:w-680,h-680/https:/ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fdcb3c8f-d629-485e-bf70-8060bd8a9f65",
          color: "",
        },
        buttonText: "Ver produtos",
        pageSpeed: 10,
        price: "",
      },
    ],
    layout = {
      headerAlignment: "center",
      categoryCard: {
        textPosition: "top",
        textAlignment: "center",
      },
    },
  } = props;
  const [themes, setThemes] = useState(list.map(() => 0));

  const handleThemeChange = (cardIndex: number, themeIndex: number) => {
    setThemes((prevThemes) => {
      const newThemes = [...prevThemes];
      newThemes[cardIndex] = themeIndex;
      return newThemes;
    });
  };

  return (
    <div class="bg-gradient-green pt-2 mb-16">
      <div
        id={id}
        class="sm:container mx-4 flex flex-col pt-[64px] text-base-content lg:grid-cols-4 relative"
      >
        <Header
          title={header.title}
          description={header.description || ""}
          alignment={layout.headerAlignment || "center"}
        />

        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
          {list.map((
            {
              label,
              description,
              slug,
              image,
              buttonText,
              pageSpeed,
              price,
            },
            index,
          ) => (
            <div class="flex flex-col gap-4 border border-[#C9CFCF] rounded-lg bg-white overflow-hidden pb-3 md:hover:scale-105 duration-200">
              {image &&
                (
                  <a
                    href={`/${lang}/hub/preview/${slug}`}
                    class="block relative overflow-hidden h-[200px] sm:h-[244px] border-[#C9CFCF] border-b"
                  >
                    <figure>
                      <Image
                        class="object-top object-cover"
                        src={Array.isArray(image)
                          ? image[themes[index]].img
                          : image.img}
                        alt={description || label}
                        width={398}
                        height={244}
                        loading="lazy"
                        style={{ width: "100%" }}
                      />
                    </figure>
                  </a>
                )}
              <div class="flex flex-row gap-2 px-3 justify-center">
                {Array.isArray(image)
                  ? (
                    image.map((image, buttonIndex) => (
                      <div
                        key={buttonIndex}
                        className={`flex h-[20px] w-[20px] items-center justify-center rounded-full hover:scale-[0.95] cursor-pointer ${
                          themes[index] === buttonIndex
                            ? "ring ring-gray-300 ring-offset-[0.5px]"
                            : ""
                        }`}
                        onClick={() => handleThemeChange(index, buttonIndex)}
                        style={{ backgroundColor: (image.color) }}
                      >
                      </div>
                    ))
                  )
                  : (
                    <div
                      className={`flex h-[20px] w-[20px] items-center justify-center rounded-full bg-blue-400 hover:scale-[0.95] cursor-pointer ${
                        themes[index] === 0
                          ? "ring ring-gray-300 ring-offset-[0.5px]"
                          : ""
                      }`}
                      onClick={() => handleThemeChange(index, 0)}
                    >
                    </div>
                  )}
              </div>
              {layout.categoryCard?.textPosition === "bottom" &&
                (
                  <CardText
                    slug={slug || ""}
                    price={price}
                    label={label}
                    description={description}
                    pageSpeed={pageSpeed}
                    alignment={layout?.categoryCard?.textAlignment}
                  />
                )}
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `body{background-color: white;}`}}></style>
    </div>
  );
}

export default TemplatesGrid;
