import { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainningTime] = useState(timeout);

  useEffect(() => {
    console.log("Timeout được gọi");
    const setTimeoutId = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(setTimeoutId);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("set interval được gọi");
    const setIntervalId = setInterval(() => {
      setRemainningTime((prev) => prev - 100);
    }, 100);

    return () => {
      clearInterval(setIntervalId);
    };
  }, []);

  return (
    <>
      <progress max={timeout} value={remainingTime} />
    </>
  );
}

export default QuestionTimer;
