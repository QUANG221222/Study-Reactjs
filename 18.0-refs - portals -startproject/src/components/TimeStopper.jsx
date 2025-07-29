import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

function TimeStopper({ title, target }) {
  const timer = useRef();
  const dialog = useRef();

  const [timerStart, setTimerStart] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);
  const handleStart = () => {
    timer.current = setTimeout(() => {
      // setTimerExpired(true);
      dialog.current.open();
    }, target * 1000);
    setTimerStart(true);
  };
  const handleStop = () => {
    clearTimeout(timer.current);
    setTimerStart(false);
  };
  return (
    <>
      <ResultModal ref={dialog} result={"lost"} targetTime={target} />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {target} second {target > 0 ? "s" : ""}
        </p>
        <button onClick={timerStart ? handleStop : handleStart}>
          {timerStart ? "Stop" : "Start"}
        </button>
        <p className={timerStart ? "active" : ""}>
          {timerStart ? "Timer is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

export default TimeStopper;
