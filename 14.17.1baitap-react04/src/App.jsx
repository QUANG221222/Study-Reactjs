import "./App.css";
import ListBook from "./components/ListBook";
const myBooks = [
  "Sách hay",
  "Lập trình react cùng tự học.cc",
  "kỹ năng sống",
  "Sách hay",
];

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">DANH SÁCH SÁCH YÊU THÍCH</h1>
        <ul className="book-list">
          {myBooks.map((book, index) => {
            return <ListBook title={book} key={index} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
