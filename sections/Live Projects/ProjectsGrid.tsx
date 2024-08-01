import Image from "deco-sites/std/components/Image.tsx";
import { useId } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import { useSignal } from "@preact/signals";

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

export interface Project {
  label: string;
  description?: string;
  link?: string;
  icon?: ImageWidget;
  image?: Screenshot[];
}

export interface TemplateInfo {
  link?: string;
  label?: string;
  category?: string;
  description?: string;
  alignment?: "center" | "left";
  image?: string;
  icon?: string;
}

export interface Classification {
  categoriaSelecionada: string;
  paginaAtual?: number;
  itensPorPagina: number;
}

interface Category {
  label: string;
  hideCategoryNameOnCard?: boolean;
  cards: Project[];
}

interface Props {
  projectsTitle?: string;
  itensPerPage?: number;
  defaultCategory?: string;
  categories?: Category[];
  layoutCategoryCard?: {
    textPosition?: "top" | "bottom";
    textAlignment?: "center" | "left";
  };
}

function ProjectCard({ link, label, category, image, icon }: TemplateInfo) {
  return (
    <a href={`${link}`} target="_blank" className="flex flex-col gap-4">
      {image && (
        <div class="rounded-2xl p-2 border border-[#0B1612] bg-[#070D0D]">
          <div class="group overflow-y-hidden max-h-[400px] md:max-h-[300px] rounded-lg">
            <Image
              className="group-hover:translate-y-[-8rem] transition duration-[2000ms] ease-in-out object-top object-cover"
              src={image}
              alt={label}
              width={398}
              height={244}
              loading="lazy"
              style={{ width: "100%" }}
            />
            <Image
              className="group-hover:translate-y-[-8rem] transition duration-[2000ms] ease-in-out object-top object-cover"
              src={image}
              alt={label}
              width={398}
              height={244}
              loading="lazy"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      )}

      <div class={`w-full p-2 flex gap-4 justify-between items-center`}>
        <div className="flex items-center w-full gap-2">
          {icon && (
            <Image
              className="rounded-full"
              src={icon}
              alt={icon}
              width={20}
              height={20}
              loading="lazy"
            />
          )}
          {label && (
            <h3 class="font-semibold text-xl leading-[110%] tracking-[-0.56px] text-white">
              {label}
            </h3>
          )}
        </div>
        {category && (
          <div class="text-[13px] leading-5 rounded-md bg-[#02F67C40] border border-[#02F67C] text-white text-nowrap py-1 px-2">
            {category}
          </div>
        )}
      </div>
    </a>
  );
}

function CategoryIndex({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: (label: string) => void;
}) {
  const styles = {
    active: "text-[#02F67C] font-bold border-b-2 border-[#02F67C]",
    regular: "text-white hover:opacity-80 cursor-pointer",
  };

  return (
    <div
      key={label.toLocaleLowerCase().replace(" ", "-")}
      className={`transition duration-300 text-nowrap ${
        active ? styles.active : styles.regular
      }`}
      onClick={() => onClick(label)}
    >
      {label}
    </div>
  );
}

function TemplatesGrid(props: Props) {
  const id = `category-cards-${useId()}`;
  const {
    projectsTitle = "Explore deco's Live Projects",
    itensPerPage = 6,
    categories = [],
    layoutCategoryCard = {
      textPosition: "top",
      textAlignment: "center",
    },
    defaultCategory = "Todos",
  } = props;

  const currentPage = useSignal(0);
  const currentCategory = useSignal(defaultCategory);
  const projects = useSignal(
    categories
      .map((category) =>
        category.cards.map((project) => ({
          ...project,
          category: category.label,
        }))
      )
      .flat()
  );

  const handleChangeCategoria = (newCategory: string) => {
    currentPage.value = 0;
    currentCategory.value = newCategory;
    const newProjects = categories
      .filter(
        (category) =>
          category.label === newCategory || newCategory === defaultCategory
      )
      .map((category) =>
        category.cards.map((project) => ({
          ...project,
          category: category.label,
        }))
      );

    projects.value = newProjects.flat();
  };

  return (
    <section class="bg-[#010101]">
      <div class="flex flex-col items-center mx-8 pb-10 lg:mx-auto lg:py-20 lg:px-16 gap-y-11 lg:max-w-[1440px]">
        <h2 class="text-white w-full text-left font-albert-sans text-[3rem] font-semibold leading-[120%]">
          {projectsTitle}
        </h2>

        <div id="index" className="flex flex-start gap-x-12 h-[36px] w-full">
          <div className="flex flex-start hidden-scroll overflow-x-scroll border-transparent border-b-2 gap-8 w-full">
            {[{ label: defaultCategory }, ...categories].map(({ label }) => (
              <CategoryIndex
                label={label}
                active={label === currentCategory.value}
                onClick={() => handleChangeCategoria(label)}
              />
            ))}
          </div>
        </div>
        <div
          id={id}
          className="sm:container md:mx-0 flex flex-col text-base-content lg:grid-cols-4 relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-11">
            {projects.value
              .slice(
                currentPage.value * itensPerPage,
                (currentPage.value + 1) * itensPerPage
              )
              .map(({ label, description, link, image, category, icon }) => (
                <ProjectCard
                  icon={icon}
                  link={link}
                  image={image?.at(0)?.img ?? ""}
                  label={label}
                  category={category}
                  description={description}
                  alignment={layoutCategoryCard?.textAlignment}
                />
              ))}
          </div>
        </div>
        <div id="pagination" className="flex items-center gap-4">
          {Array.from({
            length: Math.ceil(projects.value.length / itensPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => (currentPage.value = index)}
              className={`py-4 px-6 rounded-full ${
                index === currentPage.value
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
