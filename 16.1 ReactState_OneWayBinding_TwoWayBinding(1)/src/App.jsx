import { useState } from "react";
import "./App.css";

function App() {
  console.log("App được render");
  //Khai báo state để lưu giá trị của input
  const [name, setName] = useState("Player 1");
  //Hàm xử lý sự kiện thay đổi giá trị input
  const handlerChange = (e) => {
    return setName(e.target.value);
  };

  return (
    <>
      <h1>Nhập Tên Người Chơi:</h1>
      <input type="text" value={name} onChange={handlerChange} />
      <p>Bạn đã nhập: {name}</p>
    </>
  );
}

export default App;
