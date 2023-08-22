import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useEffect, useId, useState } from "preact/hooks";
import Header from "deco-sites/starting/components/ui/SectionHeader.tsx";
import PageSpeed from "deco-sites/starting/components/ui/PageSpeed.tsx";

export interface CustomColor {
  /**
   * @format color
   * @title Base
   * @default #FFFFFF
   */
  "base-100": string;
}
export interface Card {
  img: LiveImage;
  cor: CustomColor;
}
export interface Category {
  tag?: string;
  label: string;
  pageSpeed: number;
  price: string;
  description?: string;
  href: string;
  image: Card[];
  buttonText?: string;
}

export interface Props {
  header?: {
    title?: string;
    description?: string;
  };
  list?: Category[];
  layout?: {
    headerAlignment?: "center" | "left";
    categoryCard?: {
      textPosition?: "top" | "bottom";
      textAlignment?: "center" | "left";
    };
  };
}
function CardText(
  { tag, label, description, alignment, pageSpeed, price }: {
    tag?: string;
    label?: string;
    description?: string;

    pageSpeed: number;
    href: string;
    price: string;
    alignment?: "center" | "left";
  },
) {
  return (
    <div
      class={`w-full px-3 flex gap-3 items-center ${
        alignment === "center" ? "text-center" : "text-left"
      }`}
    >
        {pageSpeed && <PageSpeed score={pageSpeed} size={40} />}
        <div class="flex-auto flex flex-col">
            {tag && <div class="text-sm text-primary">{tag}</div>}
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

function CategoryList(props: Props) {
  const id = `category-list-${useId()}`;
  const {
    header = {
      title: "",
      description: "",
    },
    list = [
      {
        tag: "10% off",
        label: "Feminino",
        description: "Moda feminina direto de Milão",
        href: "/feminino",
        image: {
          img:
            "https://ik.imagekit.io/decocx/tr:w-680,h-680/https:/ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fdcb3c8f-d629-485e-bf70-8060bd8a9f65",
          cor: "",
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
    <div class="bg-gradient-green w-full pt-2 mb-16">
      <div
        id={id}
        class="container md:pl-0 flex flex-col pt-[64px] text-base-content lg:grid-cols-4 relative"
      >
        <Header
          title={header.title}
          description={header.description || ""}
          alignment={layout.headerAlignment || "center"}
        />

        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
        {list.map((
            {
              tag,
              label,
              description,
              href,
              image,
              buttonText,
              pageSpeed,
              price,
            },
            index,
          ) => (
            <div class="flex flex-col gap-4 border border-[#C9CFCF] rounded-lg bg-white overflow-hidden pb-3 md:hover:scale-105 duration-200">
                {layout.categoryCard?.textPosition === "top" &&
                    (
                    <CardText
                        tag={tag}
                        price={price}
                        href={href}
                        label={label}
                        pageSpeed={pageSpeed}
                        description={description}
                        alignment={layout?.categoryCard?.textAlignment}
                    />
                    )}
                {image &&
                    (
                    <a href={href} class="block relative overflow-hidden h-[244px] border-[#C9CFCF] border-b">
                        <figure>
                            <Image
                                class="object-top object-cover"
                                src={Array.isArray(image)
                                ? image[themes[index]].img
                                : image.img}
                                alt={description || label || tag}
                                width={398}
                                height={244}
                                loading="lazy"
                                style={{width: "100%"}}
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
                                style={{ backgroundColor: (image.cor["base-100"]) }}
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
                            price={price}
                            tag={tag}
                            label={label}
                            href={href}
                            description={description}
                            pageSpeed={pageSpeed}
                            alignment={layout?.categoryCard?.textAlignment}
                        />
                    )}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
