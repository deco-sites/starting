import { useEffect, useState } from "preact/hooks";

interface Props {
  firstTimeSeconds: number;
  firstTimeMilliseconds: number;
  secondTimeSeconds: number;
  secondTimeMilliseconds: number;
}

const ProgressBar = ({
  firstTimeSeconds,
  firstTimeMilliseconds,
  secondTimeSeconds,
  secondTimeMilliseconds,
}: Props) => {
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  useEffect(() => {
    const calculatePercentage = () => {
      const total = firstTimeSeconds * 1000 +
        firstTimeMilliseconds +
        secondTimeSeconds * 1000 +
        secondTimeMilliseconds;
      const percentage1 =
        ((firstTimeSeconds * 1000 + firstTimeMilliseconds) / total) * 100;
      const percentage2 =
        ((secondTimeSeconds * 1000 + secondTimeMilliseconds) / total) * 100;
      setPercentage1(percentage1);
      setPercentage2(percentage2);
    };

    calculatePercentage();
  }, [
    firstTimeSeconds,
    firstTimeMilliseconds,
    secondTimeSeconds,
    secondTimeMilliseconds,
  ]);

  return (
    <div className="w-full h-4 bg-dark-green mb-8 p-1 relative rounded-lg">
      <div
        className="bg-[#06E474] rounded h-full relative z-10"
        style={{ width: `${percentage1}%` }}
      >
      </div>
      <div
        className="bg-almost-white rounded h-full relative -top-2"
        style={{ width: `${percentage2}%` }}
      >
      </div>
    </div>
  );
};

export default ProgressBar;
