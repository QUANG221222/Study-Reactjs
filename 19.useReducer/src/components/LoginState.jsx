import { useState } from "react";

export default function LoginState() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <h2>{isLoggedIn ? "xin chào xxx" : "bạn chưa đăng nhập"}</h2>
      <button onClick={() => setIsLoggedIn(true)}>Đăng Nhập</button>
      <button onClick={() => setIsLoggedIn(false)}>Đăng Xuất</button>
    </div>
  );
}
