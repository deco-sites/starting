import Header from "site/components/ui/SectionHeader.tsx";

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
    <div class="bg-black">
      <div class="container pt-10 lg:pt-20 pb-13">
        <Header
          title={title}
          description={description}
          alignment={layout?.headerAlignment || "center"}
        />
      </div>
    </div>
  );
}
