import { useState } from "react";
import Child from "./Child";
// const Child = memo(({ value }) => {
//   console.log("Child render");
//   return <div>Giá trị từ cha: {value}</div>;
// });

function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Tăng cha</button>
      <p>Count cha: {count}</p>
      <Child value={1} />
    </>
  );
}

export default Parent;
