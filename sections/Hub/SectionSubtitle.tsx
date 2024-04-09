export interface Props {
  title?: string;
}

export default function SectionSubtitle(props: Props) {
  const {
    title,
  } = props;

  return (
    <div class="bg-black">
      <div class="container">
        <h2 class="text-[32px] font-semibold leading-[110%] text-white text-center tracking-[-0.64px]">
          {title}
        </h2>
      </div>
    </div>
  );
}
