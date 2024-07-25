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
  itensPerPage?: number;
  indexCategories?: Category[];
  layoutCategoryCard?: {
    textPosition?: "top" | "bottom";
    textAlignment?: "center" | "left";
  };
}

function CardText({ label, category, description, alignment }: TemplateInfo) {
  return (
    <div
      class={`w-full px-2 flex flex-col gap-3 items-center ${
        alignment === "center" ? "text-center" : "text-left"
      }`}
    >
      <div className="flex items-center w-full">
        <div class="flex-auto flex flex-col justify-between pl-1">
          {label && (
            <h3 class="font-bold text-[24px] leading-7 tracking-[-0.4px]">
              {label}
            </h3>
          )}
          {category && (
            <div class="text-[13px] leading-5 uppercase">{category}</div>
          )}
        </div>
        <div class="flex-none font-semibold text-right p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.1666 4.16667C12.7064 4.16667 12.3333 3.79357 12.3333 3.33333C12.3333 2.8731 12.7064 2.5 13.1666 2.5H17.3333C17.7935 2.5 18.1666 2.8731 18.1666 3.33333V7.5C18.1666 7.96024 17.7935 8.33333 17.3333 8.33333C16.8731 8.33333 16.5 7.96024 16.5 7.5V5.34518L9.58921 12.2559C9.26378 12.5814 8.73614 12.5814 8.4107 12.2559C8.08527 11.9305 8.08527 11.4028 8.4107 11.0774L15.3214 4.16667H13.1666ZM3.89886 5.73223C4.3677 5.26339 5.00358 5 5.66663 5H9.83329C10.2935 5 10.6666 5.3731 10.6666 5.83333C10.6666 6.29357 10.2935 6.66667 9.83329 6.66667H5.66663C5.44561 6.66667 5.23365 6.75446 5.07737 6.91074C4.92109 7.06702 4.83329 7.27899 4.83329 7.5V15C4.83329 15.221 4.92109 15.433 5.07737 15.5893C5.23365 15.7455 5.44561 15.8333 5.66663 15.8333H13.1666C13.3876 15.8333 13.5996 15.7455 13.7559 15.5893C13.9122 15.433 14 15.221 14 15V10.8333C14 10.3731 14.3731 10 14.8333 10C15.2935 10 15.6666 10.3731 15.6666 10.8333V15C15.6666 15.663 15.4032 16.2989 14.9344 16.7678C14.4656 17.2366 13.8297 17.5 13.1666 17.5H5.66663C5.00358 17.5 4.3677 17.2366 3.89886 16.7678C3.43002 16.2989 3.16663 15.663 3.16663 15V7.5C3.16663 6.83696 3.43002 6.20107 3.89886 5.73223Z"
              fill="#0D1717"
            />
          </svg>
        </div>
      </div>
      {description && (
        <div class="text-[13px] text-neutral leading-5 pl-1">{description}</div>
      )}
    </div>
  );
}

function TemplatesGrid(props: Props) {
  const id = `category-cards-${useId()}`;
  const {
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

  const [themes, _setThemes] = useState(
    indexCategories.flatMap((category) => category.cards.map(() => 0)),
  );

  const [classification, setClassification] = useState<Classification>({
    categoriaSelecionada: "Todos",
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

  const itensParaExibir = categoriaSelecionada === "Todos"
    ? indexCategories.flatMap((category) =>
      category.cards.map((card) => ({
        ...card,
        category: category.label, // Adiciona o campo category ao card
      }))
    )
    : categoriaSelecionada
    ? indexCategories
      .find((category) => category.label === categoriaSelecionada)
      ?.cards.map((card) => ({
        ...card,
        category: categoriaSelecionada,
      })) || []
    : [];

  const [ordenacaoAleatoriaFeita, setOrdenacaoAleatoriaFeita] = useState(false);

  useEffect(() => {
    if (categoriaSelecionada === "Todos" && !ordenacaoAleatoriaFeita) {
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
    <div class="bg-black">
      <div className="relative flex flex-col items-center mx-8 pb-10 lg:mx-auto lg:px-14 lg:pb-16 lg:px-16 gap-y-10 lg:pb-20 lg:max-w-[1440px] xl:px-16 z-10">
        <div
          id="index"
          className="flex flex-start gap-x-12 h-[36px] w-full lg:px-4"
        >
          <select
            className="p-2 cursor-pointer w-full bg-[#000D0D] rounded-lg lg:hidden"
            value={categoriaSelecionada}
            onChange={(e) => {
              const selectedValue = (e.target as HTMLSelectElement).value;
              handleChangeCategoria(selectedValue);
            }}
          >
            <option value="Todos">Todos</option>
            {indexCategories.map((category, index) => (
              <option key={index} value={category.label}>
                {category.label}
              </option>
            ))}
          </select>
          <div className="hidden lg:flex flex-start border-b-2 border-zinc-600 gap-x-8 h-[32px] w-full">
            <div
              key={"Todos"}
              className={`cursor-pointer relative top-[2px] ${
                categoriaSelecionada === "Todos"
                  ? "font-bold border-b-2 border-[#02F67C] text-[#02F67C]"
                  : "text-white"
              }`}
              onClick={() => handleChangeCategoria("Todos")}
            >
              Todos
            </div>
            {indexCategories.map((category, index) => (
              <div
                key={index}
                className={`cursor-pointer relative top-[2px] ${
                  categoriaSelecionada === category.label
                    ? "font-bold border-b-2 border-[#02F67C] text-[#02F67C]"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 md:p-4">
            {itensPaginaAtual.map(
              ({ label, description, link, image, category }, index) => {
                let categoryInfo;
                if (category) {
                  categoryInfo = indexCategories.find(
                    (cat) => cat.label === category,
                  );
                } else {
                  categoryInfo = indexCategories.find(
                    (cat) => cat.label === categoriaSelecionada,
                  );
                }

                const shouldHideCategory =
                  categoryInfo?.hideCategoryNameOnCard || false;

                return (
                  <a
                    href={`${link}`}
                    className="flex flex-col gap-4 border border-[#C9CFCF] rounded-2xl bg-white overflow-hidden pb-3 md:hover:scale-105 duration-200"
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
        <div id="pagination" className="flex items-center gap-1">
          {Array.from({ length: totalPaginas }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleChangePagina(index + 1)}
              className={`py-2 px-4 rounded ${
                index + 1 === paginaAtual
                  ? "bg-[#02F67C] text-black"
                  : "bg-transparent text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemplatesGrid;
