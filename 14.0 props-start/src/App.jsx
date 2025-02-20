import { useState } from "react";
import { myData, EXAMPLES } from "../data.js";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  console.log("App được gọi");
  function handleSelect(selectButton) {
    setSelectedTopic(selectButton);
  }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          {/* prettier-ignore */}
          <menu>
            <TabButton onSelect={() => {handleSelect('components')}}>Components</TabButton>
            <TabButton onSelect={() => {handleSelect('jsx')}}>JSX</TabButton>
            <TabButton onSelect={() => {handleSelect('props')}}>Props</TabButton>
            <TabButton onSelect={() => {handleSelect('state')}}>State</TabButton>
          </menu>
        </section>
        <div id="tab-content">
          {/* bracket notation kết hợp với Dot notation */}
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].desc}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      </main>
    </>
  );
}

export default App;
