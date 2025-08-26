import { useState, useEffect } from "react";
function DemoWithDeps() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("useEffect khi count thay đổi", count);
  // }, [count]);

  useEffect(() => {
    console.log("Bắt đầu fetch");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log("Đã chạy qua fetch");
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
