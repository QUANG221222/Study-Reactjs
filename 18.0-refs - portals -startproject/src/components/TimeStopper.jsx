import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

function TimeStopper({ title, target }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(target * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < target * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };
  const handleStop = () => {
    clearTimeout(timer.current);
    dialog.current.open();
  };
  const handleReset = () => {
    setTimeRemaining(target * 1000);
  };
  return (
    <>
      <ResultModal
        ref={dialog}
        remainingTime={timeRemaining}
        targetTime={target}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {target} second {target > 0 ? "s" : ""}
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Start"}
        </button>
        <p className={timerIsActive ? "active" : ""}>
          {timerIsActive ? "Timer is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

export default TimeStopper;
