import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("Chào bạn");
  function updateGreeting() {
    // const hour = 5;
    const hour = new Date().getHours();
    if (hour >= 5 && hour <= 12) setGreeting("Chào buổi sáng!");
    else if (hour > 12 && hour <= 18) setGreeting("Chào buổi chiều!");
    else setGreeting("Chào buổi tối!");
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {greeting}
      <br />
      <button onClick={updateGreeting}>Click me</button>
    </>
  );
}

export default App;
