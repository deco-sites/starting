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
  firstVideoMaxTime: {
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
  firstVideoMaxTime,
}: Props) => {
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const timeFirstVideo = firstTimeSeconds * 1000 + firstTimeMilliseconds;
  const timeSecondVideo = secondTimeSeconds * 1000 + secondTimeMilliseconds;

  const calculatePercentage = () => {
    const total = secondVideoMaxTime.seconds * 1000 +
      secondVideoMaxTime.milliseconds;

    let calculatedPercentage1 = (timeFirstVideo / total) * 100;
    5;
    let calculatedPercentage2 = (timeSecondVideo / total) * 100;

    if (calculatedPercentage1 > 100) {
      calculatedPercentage1 = 100;
    }
    if (calculatedPercentage2 > 100) {
      calculatedPercentage2 = 100;
    }

    if (
      timeSecondVideo <
        firstVideoMaxTime.seconds * 1000 + firstVideoMaxTime.milliseconds
    ) {
      calculatedPercentage2 = 0;
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
        style={{
          width: `${percentage1}%`,
          transition: "width 0.1s ease-in-out",
        }}
      />
      <div
        className="bg-almost-white rounded h-full relative -top-2 z-0"
        style={{
          width: `${percentage2}%`,
          transition: "width 0.1s ease-in-out",
        }}
      />
    </div>
  );
};

export default ProgressBar;
