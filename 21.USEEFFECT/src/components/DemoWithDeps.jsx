import { useState, useEffect } from "react";
function DemoWithDeps() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect khi count thay đổi", count);
  }, [count]);
  return (
    <>
      <h3>Không truyền dependency</h3>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <p>Giá trị: {count}</p>
      {console.log("Render lại giao diện")}
    </>
  );
}

export default DemoWithDeps;
