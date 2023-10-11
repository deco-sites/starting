export interface Props {
  title?: string;
}

export default function SectionSubtitle(props: Props) {
  const {
    title,
  } = props;

  return (
    <div class="lg:container mx-4">
      <div class="container pt-6">
        <h2 class="text-[20px] font-semibold leading-8 text-[#1F2937] text-center">
          {title}
        </h2>
      </div>
    </div>
  );
}
