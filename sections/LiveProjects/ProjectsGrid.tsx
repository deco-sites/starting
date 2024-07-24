import Image from "deco-sites/std/components/Image.tsx";
import { useEffect, useId, useState } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Screenshot {
  label?: string;
  img: LiveImage;
  /**
   * @format color
   * @title Base
   * @default #FFFFFF
   */
  color: string;
}

export interface Template {
  label: string;
  description?: string;
  link?: string;
  image?: Screenshot[];
}

export interface TemplateInfo {
  label?: string;
  category?: string;
  description?: string;
  alignment?: "center" | "left";
}

export interface Classification {
  categoriaSelecionada: string;
  paginaAtual: number;
  itensPorPagina: number;
}

interface Category {
  label: string;
  hideCategoryNameOnCard?: boolean;
  cards: Template[];
}

interface Props {
  projectsTitle?: string;
  itensPerPage?: number;
  nomeDaCategoriaGeral?: string;
  indexCategories?: Category[];
  layoutCategoryCard?: {
    textPosition?: "top" | "bottom";
    textAlignment?: "center" | "left";
  };
}

function CardText(
  { label, category, description, alignment }: TemplateInfo,
) {
  return (
    <div
      class={`w-full p-6 flex flex-col gap-6 items-start ${
        alignment === "center" ? "text-center" : "text-left"
      }`}
    >
      <div className="flex items-center w-full gap-6">
        {label && (
          <h3 class="font-semibold text-[28px] leading-[110%] tracking-[-0.56px] text-white">
            {label}
          </h3>
        )}
      </div>
      {category && (
        <div class="text-[13px] leading-5 rounded-lg bg-[#212121] text-white p-2">
          {category}
        </div>
      )}
    </div>
  );
}

function TemplatesGrid(props: Props) {
  const id = `category-cards-${useId()}`;
  const {
    projectsTitle = "Explore deco's Live Projects",
    itensPerPage = 6,
    indexCategories = [
      {
        label: "MODA",
        hideCategoryNameOnCard: false,
        cards: [
          {
            label: "Feminino",
            category: "MODA",
            description: "Moda feminina direto de Milão",
            link: "feminino",
            image: {
              img:
                "https://ik.imagekit.io/decocx/tr:w-680,h-680/https:/ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fdcb3c8f-d629-485e-bf70-8060bd8a9f65",
              color: "",
            },
          },
        ],
      },
    ],
    layoutCategoryCard = {
      textPosition: "top",
      textAlignment: "center",
    },
  } = props;

  const [themes, setThemes] = useState(
    indexCategories.flatMap((category) => category.cards.map(() => 0)),
  );

  const [classification, setClassification] = useState<Classification>({
    categoriaSelecionada: { ...props }.nomeDaCategoriaGeral || "Todos",
    paginaAtual: 1,
    itensPorPagina: itensPerPage,
  });

  const handleChangeCategoria = (novaCategoria: string) => {
    setClassification({
      categoriaSelecionada: novaCategoria,
      paginaAtual: 1,
      itensPorPagina: classification.itensPorPagina,
    });
  };

  const handleChangePagina = (novaPagina: number) => {
    setClassification({
      categoriaSelecionada: classification.categoriaSelecionada,
      paginaAtual: novaPagina,
      itensPorPagina: classification.itensPorPagina,
    });
  };

  const { categoriaSelecionada, paginaAtual, itensPorPagina } = classification;

  const findCategoryByLabel = (
    label: string,
    categories: { label: string }[],
  ) => {
    return categories.find((category) => category.label === label);
  };

  const itensParaExibir =
    categoriaSelecionada === { ...props }.nomeDaCategoriaGeral
      ? indexCategories.flatMap((category) =>
        category.cards.map((card) => ({
          ...card,
          category: category.label, // Adiciona o campo category ao card
        }))
      )
      : categoriaSelecionada
      ? indexCategories.find((category) =>
        category.label === categoriaSelecionada
      )?.cards.map((card) => ({
        ...card,
        category: categoriaSelecionada,
      })) || []
      : [];

  const [ordenacaoAleatoriaFeita, setOrdenacaoAleatoriaFeita] = useState(false);

  useEffect(() => {
    if (
      categoriaSelecionada === { ...props }.nomeDaCategoriaGeral &&
      !ordenacaoAleatoriaFeita
    ) {
      // Ordenação aleatória apenas na primeira renderização da página
      setOrdenacaoAleatoriaFeita(true);
      itensParaExibir.sort(() => Math.random() - 0.5);
    }
  }, [categoriaSelecionada, ordenacaoAleatoriaFeita, itensParaExibir]);

  const totalPaginas = Math.ceil(itensParaExibir.length / itensPorPagina);
  const primeiroItem = (paginaAtual - 1) * itensPorPagina;
  const ultimoItem = Math.min(
    primeiroItem + itensPorPagina,
    itensParaExibir.length,
  );
  const itensPaginaAtual = itensParaExibir.slice(primeiroItem, ultimoItem);

  return (
    <section class="bg-[#010101]">
      <div class="flex flex-col items-center mx-8 pb-10 lg:mx-auto lg:py-20 lg:px-16 gap-y-11 lg:max-w-[1440px]">
        <h2 class="text-white w-full text-left font-albert-sans text-[3rem] font-semibold leading-[120%]">
          {projectsTitle}
        </h2>
        <div
          id="index"
          className="flex flex-start gap-x-12 h-[36px] w-full"
        >
          <select
            className="p-2 cursor-pointer w-full border-[1px] border-[#C9CFCF] rounded lg:hidden"
            value={categoriaSelecionada}
            onChange={(e) => {
              const selectedValue = (e.target as HTMLSelectElement).value;
              handleChangeCategoria(selectedValue);
            }}
          >
            <option value={{ ...props }.nomeDaCategoriaGeral || "Todos"}>
              {{ ...props }.nomeDaCategoriaGeral || "Todos"}
            </option>
            {indexCategories.map((category, index) => (
              <option key={index} value={category.label}>
                {category.label}
              </option>
            ))}
          </select>
          <div className="hidden lg:flex flex-start border-transparent border-b-2 gap-x-8 h-[32px] w-full">
            <div
              key={{ ...props }.nomeDaCategoriaGeral || "Todos"}
              className={`cursor-pointer relative top-[2px] ${
                (categoriaSelecionada === { ...props }.nomeDaCategoriaGeral)
                  ? "text-[#02F67C] font-bold border-b-2 border-[#02F67C]"
                  : "text-white"
              }`}
              onClick={() =>
                handleChangeCategoria(
                  { ...props }.nomeDaCategoriaGeral || "Todos",
                )}
            >
              {{ ...props }.nomeDaCategoriaGeral || "Todos"}
            </div>
            {indexCategories.map((category, index) => (
              <div
                key={index}
                className={`cursor-pointer relative top-[2px] ${
                  (categoriaSelecionada === category.label)
                    ? "text-[#02F67C] font-bold border-b-2 border-[#02F67C]"
                    : "text-white"
                }`}
                onClick={() => handleChangeCategoria(category.label)}
              >
                {category.label}
              </div>
            ))}
          </div>
        </div>
        <div
          id={id}
          className="sm:container md:mx-0 flex flex-col text-base-content lg:grid-cols-4 relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-11">
            {itensPaginaAtual.map(
              ({ label, description, link, image, category }, index) => {
                let categoryInfo;
                if (category) {
                  categoryInfo = indexCategories.find((cat) =>
                    cat.label === category
                  );
                } else {
                  categoryInfo = indexCategories.find((cat) =>
                    cat.label === categoriaSelecionada
                  );
                }

                const shouldHideCategory =
                  categoryInfo?.hideCategoryNameOnCard ||
                  false;

                return (
                  <a
                    href={`${link}`}
                    className="flex flex-col border border-[#FFFFFF26] rounded-lg overflow-hidden md:hover:scale-105 duration-200 bg-[#010101]"
                    key={index}
                  >
                    {image && (
                      <figure>
                        <Image
                          className="object-top object-cover"
                          src={Array.isArray(image)
                            ? image[themes[index]]?.img
                            : (image as { img: string })?.img}
                          alt={label}
                          width={398}
                          height={244}
                          loading="lazy"
                          style={{ width: "100%" }}
                        />
                      </figure>
                    )}
                    {layoutCategoryCard?.textPosition === "bottom" && (
                      <CardText
                        label={label}
                        category={!shouldHideCategory
                          ? categoryInfo?.label || category
                          : ""}
                        description={description}
                        alignment={layoutCategoryCard?.textAlignment}
                      />
                    )}
                  </a>
                );
              },
            )}
          </div>
        </div>
        <div id="pagination" className="flex items-center gap-4">
          {Array.from({ length: totalPaginas }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleChangePagina(index + 1)}
              className={`py-4 px-6 rounded-full ${
                index + 1 === paginaAtual
                  ? "bg-[#02F67C] text-black"
                  : "bg-[#113032] text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TemplatesGrid;
