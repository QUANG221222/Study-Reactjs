import "./App.css";
import demoPic from "../src/assets/react.svg";

const dateNow = new Date().toLocaleDateString();
const timeNow = new Date().toLocaleTimeString();
const wellCome = [
  "Chào mừng bạn đến với ReactJS",
  "Rất vui được chào đón bạn đến với ReactJS",
  "Chúng ta sẽ được học các kiến thức về ReactJS",
];

function randomTitle() {
  return Math.floor(Math.random() * wellCome.length);
}

function Header() {
  const title = wellCome[randomTitle()];
  return (
    <>
      <h1>{title}</h1>
      <p>
        Hôm nay là: <strong>{dateNow}</strong>. Thời gian hiện tại là:{" "}
        <strong>{timeNow}</strong>
      </p>
    </>
  );
}

const name = "Quang";
const isLoginIn = true;
let person = {
  name: "Quang",
  age: 30,
  address: "Hồ Chí Minh",
};

function DinamicValue() {
  return (
    <>
      {/* 1. dùng để chèn **biểu thức** js (expression) */}
      <h2>Chào {name}</h2>
      <p>Kết quả: {1 + 1}</p>
      {/* 2. không chèn *câu lệnh * (statement) */}
      {/* <p>{if(true) {'đúng rồi'}}</p> */}
      {/* 3. Kết hợp với điều kiện (Toán tử Ternary) JSX không hổ trợ trực tiếp 'if-else', nhưng có thể dùng toán tử ternary bên */}
      <p>{isLoginIn === true ? "Bạn đã đăng nhập" : "Chưa đăng nhập"}</p>
      <p>Tên của người dùng: {person.name}</p>
      <p>Giới tính: {person.age}</p>
      <p>Địa chỉ: {person.address}</p>
      {/* 5. Chèn hình ảnh vào thẻ img */}
      <img src={demoPic} alt="React" />
    </>
  );
}
function App() {
  return (
    <>
      <Header />
      <DinamicValue />
    </>
  );
}

export default App;
