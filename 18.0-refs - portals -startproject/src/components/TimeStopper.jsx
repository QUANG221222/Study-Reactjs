import { useState } from "react";

function TimeStopper({ title, target }) {
  const [timerStart, setTimerStart] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const handleStart = () => {
    setTimeout(() => {
      setTimerExpired(true);
    }, target * 1000);
    setTimerStart(true);
  };
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>Bạn đã thua</p>}
      <p className="challenge-time">
        {target} second {target > 0 ? "s" : ""}
      </p>
      <button onClick={handleStart}>{timerStart ? "Stop" : "Start"}</button>
      <p className={timerStart ? "active" : ""}>
        {timerStart ? "Timer is running" : "Timer inactive"}
      </p>
    </section>
  );
}

export default TimeStopper;
