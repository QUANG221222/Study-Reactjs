import { useState, useMemo } from "react";

function Demo({ number }) {
  function expensiveComputation(num) {
    console.log("Đang tính toán...");
    let result = 0;
    for (let i = 0; i < 1000; i++) {
      result += num;
    }
    return result;
  }

  const result = useMemo(() => expensiveComputation(number), [number]);

  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Kết quả tính toán {result}</div>
      <button onClick={() => setCount(count + 1)}>Tăng đếm : {count}</button>
    </div>
  );
}

export default Demo;
