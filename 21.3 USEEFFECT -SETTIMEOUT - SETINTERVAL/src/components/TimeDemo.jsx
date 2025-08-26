import { useEffect, useState } from "react";

function TimeDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const setTimeOutId = setTimeout(() => {
      console.log("Set timeout được gọi");
      setCount((prev) => prev + 1);
    }, 1000);

    //Clean up
    return () => {
      clearTimeout(setTimeOutId);
      console.log("Đã clear timeout");
    };
  }, []);

  //   useEffect(() => {
  //     const setIntervalId = setInterval(() => {
  //       console.log("Set interval được gọi");
  //       setCount((prev) => prev + 1);
  //     }, 1000);

  //     //Clean up
  //     return () => {
  //       clearInterval(setIntervalId);
  //       console.log("Đã clear interval");
  //     };
  //   }, []);

  return (
    <>
      <h3>Mount/ Unmount component để thử</h3>
      <p>{count}</p>
    </>
  );
}

export default TimeDemo;
