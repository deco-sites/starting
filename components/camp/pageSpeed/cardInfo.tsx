export interface Props {
  title: string;
  text: string;
}

export default function CardInfo(props: Props) {
  return (
    <div class="bg-almost-white text-dark-green rounded-3xl md:rounded-tr-3xl rounded-tr-none px-10 pb-10 pt-12">
      <p class="text-dark-green text-[32px] font-400 mb-4">{props.title}</p>
      <p class="text-dark-green text-xl font-400">{props.text}</p>
    </div>
  );
}
