export interface Props {
  textOne?: string;
  textTwo?: string;
  textThree?: string;
}

const HeaderText = ({ textOne = "", textTwo = "", textThree = "" }: Props) => {
  return (
    <div className="max-w-[992px]">
      <div className="text-center">
        <p className="mt-1 text-3xl font-bold text-[#113032] sm:text-6xl md:text-7xl  lg:text-7xl">
          {textOne}{" "}
          <span class="text-3xl font-bold text-[#2FD180] sm:text-6xl md:text-7xl sm:tracking-tight lg:text-7xl">
            {textTwo}
          </span>{"   "}
          {textThree}
        </p>
      </div>
    </div>
  );
};

export default HeaderText;
