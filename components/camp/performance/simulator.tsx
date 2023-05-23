export interface Props {
  /**
   * @format textarea
   */
  title: string;
}

const Simulator = (
  props: Props,
) => {
  return (
    <div>
      <div
        class="font-regular text-[32px] text-[#0A2121] leading-[44.16px] mb-10"
        dangerouslySetInnerHTML={{ __html: props.title }}
      >
      </div>
    </div>
  );
};

export default Simulator;
