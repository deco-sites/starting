import Header from "deco-sites/starting/components/ui/SectionHeader.tsx";

export interface Props {
  title?: string;
  description?: string;
  layout?: {
    headerAlignment?: "center" | "left";
  };
}

export default function SectionTitle(props: Props) {
  const {
    title,
    description,
    layout,
  } = props;

  return (
    <div class="lg:container mx-4">
      <div class="container pt-12 pb-4">
        <Header
          title={title}
          description={description}
          alignment={layout?.headerAlignment || "center"}
        />
      </div>
    </div>
  );
}
