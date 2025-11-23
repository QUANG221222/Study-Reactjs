import { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainningTime] = useState(timeout);

  useEffect(() => {
    console.log("Timeout được gọi");
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("set interval được gọi");
    setInterval(() => {
      setRemainningTime((prev) => prev - 100);
    }, 100);
  }, []);

  return (
    <>
      <progress max={timeout} value={remainingTime} />
    </>
  );
}

export default QuestionTimer;
