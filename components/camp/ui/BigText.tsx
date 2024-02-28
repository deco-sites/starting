export interface Props {
  title: string;
}

export default function BigText({ title }: Props) {
  return (
    <h2
      class="text-4xl leading-[3rem] md:text-[4rem] md:leading-[4.2rem] lg:leading-[4.2rem] xl:text-[3.5rem] xl:leading-[4rem] 2xl:leading-[5rem] 2xl:text-[5rem] text-white text-center"
      dangerouslySetInnerHTML={{ __html: title }}
    >
    </h2>
  );
}
