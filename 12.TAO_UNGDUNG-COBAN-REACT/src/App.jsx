import "./App.css";

function Header() {
  return (
    <>
      <h2>Chào mừng đến với thế giới React</h2>
      <p>
        Hôm nay là <strong>22/1/2025</strong> . Thời gian hiện tại {""}
        <strong>10:00 AM</strong>
      </p>
    </>
  );
}
function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>Lorem, ipsum.</p>
      <Header />
      <Header />
    </>
  );
}

export default App;
