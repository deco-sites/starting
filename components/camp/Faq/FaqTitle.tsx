interface Props {
  title: string;
}

export default function FaqTitle({ title }: Props) {
  return (
    <h2 class="mb-10 text-white font-medium text-[2rem] leading-9 md:text-5xl md:leading-[3.6rem]">
      {title}
    </h2>
  );
}
