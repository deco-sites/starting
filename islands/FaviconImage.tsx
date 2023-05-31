export interface Props {
  image: string;
}

export default function FaviconImage({ image }: Props) {
  return (
    <div class="min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] md:max-w-[40px] md:max-h-[40px] md:min-w-[40px] md:min-h-[40px] md:p-[10px] p-[6px] rounded-full bg-white md:mr-4 mr-2 inline-block align-middle">
      <img
        width={20}
        height={20}
        class="w-full h-full"
        src={image}
        alt="site favicon"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.parentElement!.style.display = "none";
        }}
      />
    </div>
  );
}
