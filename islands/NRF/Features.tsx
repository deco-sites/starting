import { useEffect } from "preact/hooks";
import { animate, inView, stagger } from "https://esm.sh/motion@10.16.4";
import Icon, {
  AvailableIcons,
} from "site/components/ui/Icon.tsx";

export interface Card {
  icon?: AvailableIcons;
  /**
   * @format html
   */
  title: string;
  text: string;
}

export interface Props {
  title?: string;
  cards: Card[];
}

function FeatureCard({ icon, title, text }: Card) {
  return (
    <div class="feature-card transform translate-y-16 group border-l border-transparent group-hover:-translate-y-3 duration-200 w-full flex flex-col gap-8 py-10 px-8 lg:px-12 whitespace-pre-line opacity-0 z-40">
      {icon && (
        <div class="p-6 rounded-full bg-[#113032] text-[#02F67C]">
          <Icon id={icon} size={48} />
        </div>
      )}
      <div class="space-y-4 text-center">
        {title && (
          <div
            class="text-2xl font-semibold leading-[110%]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        <p class="leading-[120%]" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
}

export default function Features({ title, cards }: Props) {
  useEffect(() => {
    inView(
      ".features",
      ({ target }) => {
        animate(
          target.querySelectorAll(".feature-card"),
          { opacity: 1, transform: "translateY(0px)" },
          { delay: stagger(0.1), duration: 1, easing: "ease-out" },
        );
      },
      {
        margin: "0px 0px -100px 0px",
      },
    );
  }, []);

  return (
    <section class="relative bg-black text-white py-20 max-w-screen">
      <div class="mx-6 lg:container lg:mx-auto flex justify-center items-center flex-col gap-20">
        {title && (
          <h2 class="font-medium text-[36px] lg:text-[72px] leading-[100%] text-center max-w-4xl z-10">
            {title}
          </h2>
        )}
        <div class="features">
          {cards?.map((card) => <FeatureCard {...card} />)}
        </div>
      </div>
      {/* <div class="ellipse-3 hidden lg:block" /> */}
    </section>
  );
}
