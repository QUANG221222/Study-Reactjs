import { useState } from "react";
import "./App.css";

function App() {
  // Khởi tạo state dưới dạng object để quản lý nhiều trường input
  const [user, setUser] = useState({
    fullName: "",
    email: "",
  });

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      console.log(prev);
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <h2>Cập nhật thông tin cá nhân</h2>
      <label>
        Họ và tên:
        <input
          type="text"
          name="fullName"
          value={user.fullName}
          onChange={handlerChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handlerChange}
        />
      </label>

      <br />
      <h3>Thông tin đã nhập</h3>
      <p>Họ và tên: {user.fullName}</p>
      <p>Email: {user.email}</p>
    </>
  );
}

export default App;
