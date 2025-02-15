import React, { useEffect, useState } from "react";

interface Props {
  startTime: number;
  disabledInputArea: boolean;
  numberOfChars: number;
}

const WordsPerMiniute = ({
  startTime,
  disabledInputArea,
  numberOfChars,
}: Props) => {
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
    <div>
      <div>
        WPM:{" "}
        {numberOfChars != 0 || time != 0
          ? Math.round(numberOfChars / 5 / (time / 60))
          : "--"}
      </div>
    </div>
  );
};

export default WordsPerMiniute;
