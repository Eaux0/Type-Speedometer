import React, { useEffect, useState } from "react";

interface Props {
  startTime: number;
  disabledInputArea: boolean;
  numberOfWords: number;
}

const Timer = ({ startTime, disabledInputArea, numberOfWords }: Props) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (startTime === 0) {
      setTime(0);
    } else if (!disabledInputArea) {
      const interval = setInterval(() => {
        setTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setTime(Math.floor((Date.now() - startTime) / 1000));
    }
  }, [startTime, disabledInputArea]);

  return (
    <>
      <div>
        Time:{" "}
        {time > 60
          ? Math.floor(time / 60) + "min " + (time % 60) + "sec"
          : (time % 60) + "sec"}
      </div>
    </>
  );
};

export default Timer;
