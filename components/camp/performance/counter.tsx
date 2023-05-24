import { useEffect, useState } from "preact/hooks";

interface Props {
  maxTime: { seconds: number; milliseconds: number };
  onTimeUpdate: (
    tempo: { seconds: number; milliseconds: number },
  ) => void;
  resetCounter: boolean;
}

const Counter = ({ onTimeUpdate, maxTime, resetCounter }: Props) => {
  const [time, setTime] = useState({ seconds: 0, milliseconds: 0 });

  useEffect(() => {
    let intervalId = 0;

    const startCounter = () => {
      intervalId = setInterval(() => {
        setTime((previousTime) => {
          const newMilliseconds = previousTime.milliseconds + 1;
          let newSeconds = previousTime.seconds;

          if (newMilliseconds >= 100) {
            newSeconds += 1;
          }

          if (
            newSeconds >= maxTime.seconds &&
            newMilliseconds >= maxTime.milliseconds
          ) {
            clearInterval(intervalId);
            onTimeUpdate(maxTime);
            return maxTime;
          }

          const newTime = {
            seconds: newSeconds,
            milliseconds: newMilliseconds >= 100 ? 0 : newMilliseconds,
          };

          onTimeUpdate(newTime);
          return newTime;
        });
      }, 10);
    };

    if (resetCounter) {
      setTime({ seconds: 0, milliseconds: 0 });
      clearInterval(intervalId);
      startCounter();
    } else {
      startCounter();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [resetCounter]);

  const exibirTempo = time.seconds >= maxTime.seconds &&
      time.milliseconds >= maxTime.milliseconds
    ? `${maxTime.seconds}.${maxTime.milliseconds}s`
    : `${time.seconds}.${time.milliseconds}s`;

  return <>{exibirTempo}</>;
};

export default Counter;
