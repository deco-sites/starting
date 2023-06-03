import { useEffect, useState } from "preact/hooks";

interface Props {
  firstTimeSeconds: number;
  firstTimeMilliseconds: number;
  secondTimeSeconds: number;
  secondTimeMilliseconds: number;
  secondVideoMaxTime: {
    seconds: number;
    milliseconds: number;
  };
}

const ProgressBar = ({
  firstTimeSeconds,
  firstTimeMilliseconds,
  secondTimeSeconds,
  secondTimeMilliseconds,
  secondVideoMaxTime,
}: Props) => {
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const calculatePercentage = () => {
    const total = secondVideoMaxTime.seconds * 1000 +
      secondVideoMaxTime.milliseconds;
    let calculatedPercentage1 = Number(
      (((firstTimeSeconds * 1000 + firstTimeMilliseconds) / total) * 100)
        .toFixed(0),
    );
    let calculatedPercentage2 = Number(
      (((secondTimeSeconds * 1000 + secondTimeMilliseconds) / total) * 100)
        .toFixed(0),
    );

    if (calculatedPercentage1 > 100) {
      calculatedPercentage1 = 100;
    }
    if (calculatedPercentage2 > 100) {
      calculatedPercentage2 = 100;
    }

    setPercentage1(calculatedPercentage1);
    setPercentage2(calculatedPercentage2);
  };

  useEffect(() => {
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
        className="bg-[#06E474] rounded h-full relative z-50"
        style={{ width: `${percentage1}%` }}
      />
      <div
        className="bg-almost-white rounded h-full relative -top-2 z-0"
        style={{ width: `${percentage2}%` }}
      />
    </div>
  );
};

export default ProgressBar;
