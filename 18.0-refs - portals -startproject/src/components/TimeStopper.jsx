function TimeStopper({ title, target }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {target} second {target > 0 ? "s" : ""}
      </p>
      <button>Start</button>
      <p className="">Time is running.../Timer inactive</p>
    </section>
  );
}

export default TimeStopper;
