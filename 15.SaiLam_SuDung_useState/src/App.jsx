import { useState } from "react";
import "./App.css";

function App() {
  console.log("App được gọi");
  const [count, setCount] = useState(0);
  function handleClick() {
    // setCount(count + 1); // Đánh dấu sẽ tăng lên 1
    // setCount(count + 1); // Đánh dấu sẽ tăng lên 1
    // setCount(count + 1); // Đánh dấu sẽ tăng lên 1
    // console.log(`count: ${count}`); // Không tăng lên 3 như bạn nghĩ
    // ------
    setCount((prevCount) => prevCount + 1); // Đánh dấu sẽ tăng lên 1
    setCount((prevCount) => prevCount + 1); // Đánh dấu sẽ tăng lên 2
    setCount((prevCount) => prevCount + 1); // Đánh dấu sẽ tăng lên 3
    console.log(`count: ${count}`); // Đánh dấu sẽ tăng lên 3
  }
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
