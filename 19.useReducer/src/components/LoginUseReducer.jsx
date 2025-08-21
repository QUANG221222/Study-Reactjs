// Step 1: import useReducer
import { useReducer } from "react";

// Step 2: Khởi tạo giá trị ban đầu
const initState = false;

// Step 3: Khai báo action
const LOGIN = "login";
const LOGOUT = "logout";

//Step4: Khai báo function reducer(sẽ làm gì với từng action)
function reducerLogin(state, action) {
  switch (action) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      throw new Error("Action không hợp lệ");
  }
}

function LoginUseReducer() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn, dispath] = useReducer(reducerLogin, initState);
  return (
    <div>
      <h2>{isLoggedIn ? "xin chào xxx" : "bạn chưa đăng nhập"}</h2>
      <button onClick={() => dispath(LOGIN)}>Đăng nhập</button>
      <button onClick={() => dispath(LOGOUT)}>Đăng xuất</button>
    </div>
  );
}

export default LoginUseReducer;
