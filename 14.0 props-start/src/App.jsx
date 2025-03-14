import { useState } from "react";
import { myData, EXAMPLES } from "../data.js";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import TabButton from "./components/TabButton.jsx";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Section from "./components/MainContent/Section.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  let tabContent = <p>Vui lòng click vào nút để lựa chọn 1 chủ để</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].desc}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
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
            {/* <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} /> */}
            {myData.map((item) => {
              return <MainContent key={item.title} {...item} />;
            })}
          </ul>
        </section>
        <Section title={"Example"} abc={"examples"}>
          {/* prettier-ignore */}
          <menu>
            <TabButton 
              isSelected={selectedTopic === "components"} 
              onSelect={() => {handleSelect('components')}}
            >Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"}  onSelect={() => {handleSelect('jsx')}}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"}  onSelect={() => {handleSelect('props')}}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"}  onSelect={() => {handleSelect('state')}}>State</TabButton>
          </menu>
        </Section>

        {/* Cách 1: Dùng toán tử 3 ngôi (ternary operator) */}
        {/* {!selectedTopic ? (
          // <p>Vui lòng click vào nút để lựa chọn 1 chủ để</p>
          <DotLottieReact
            src="https://lottie.host/d515e907-f059-4afc-b205-35aa98d76dc6/TKEZoVTSSc.lottie"
            loop
            autoplay
          />
        ) : (
          <div id="tab-content"> */}
        {/* bracket notation kết hợp với Dot notation */}
        {/* <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].desc}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )} */}

        {/* Cách 2 dùng toán tử AND && */}
        {/* {!selectedTopic &&
          <p>Vui lòng click vào nút để lựa chọn 1 chủ để</p>}
        {selectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].desc}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}  */}

        {/* Cách 3 */}
        {tabContent}
      </main>
    </>
  );
}

export default App;
