import Icon, {
  AvailableIcons,
} from "deco-sites/starting/components/ui/Icon.tsx";

export interface Card {
  icon?: AvailableIcons;
  /**
   * @format html
   */
  title: string;
  text: string;
}

export interface Props {
  title: string;
  cards: Card[];
}

function FeatureCard({ icon, title, text }: Card) {
  return (
    <div class="group border-l border-transparent duration-200 hover:border-[#02F67C] w-full flex flex-col gap-8 px-8 whitespace-pre-line">
      {icon && <Icon id={icon} size={32} />}
      <div class="space-y-4">
        <div
          class="text-2xl font-bold"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p class="leading-[120%]" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
}

export default function Features({ title, cards }: Props) {
  return (
    <section class="bg-black text-white py-20">
      <div class="lg:container mx-auto flex justify-center items-center flex-col gap-20">
        <h2 class="font-semibold text-[40px] leading-[1.18] text-center">
          {title}
        </h2>
        <div class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards?.map((card) => <FeatureCard {...card} />)}
        </div>
      </div>
    </section>
  );
}
