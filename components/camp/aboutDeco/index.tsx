export interface Props {
  title: string;
  /**
   * @format textarea
   */
  text: string;
  videoHeightDesktop: number;
  videoWidthDesktop: number;
  videoWidthMobile: number;
  videoHeightMobile: number;
  videoUrlCode: string;
}

export default function AboutDeco(props: Props) {
  return (
    <section class="bg-dark-green py-14 px-6">
      <div class="md:max-w-[999px] mx-auto">
        <p class="font-regular mb-7 text-white text-[32px] md:text-center">
          {props.title}
        </p>
        <div
          class="font-regular text-xl text-white mb-11"
          dangerouslySetInnerHTML={{ __html: props.text }}
        />
        <iframe
          width={props.videoWidthDesktop}
          height={props.videoHeightDesktop}
          src={"https://www.youtube.com/embed/" +
            props.videoUrlCode + "?autoplay=1"}
          frameBorder="0"
          allowFullScreen
          className="w-full hidden md:block"
        >
        </iframe>
        <iframe
          width={props.videoWidthMobile}
          height={props.videoHeightMobile}
          src={"https://www.youtube.com/embed/" +
            props.videoUrlCode + "?autoplay=1"}
          frameBorder="0"
          allowFullScreen
          className="w-full md:hidden"
        >
        </iframe>
      </div>
    </section>
  );
}
