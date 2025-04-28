import TabButton from '../TabButton.jsx'
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Section from './Section.jsx'
import Tabs from './Tabs.jsx'
import { useState } from 'react'
import { EXAMPLES } from '../../../data.js'

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('')
  let tabContent = <p>Vui lòng click vào nút để lựa chọn 1 chủ để</p>
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].desc}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  }
  function handleSelect(selectButton) {
    setSelectedTopic(selectButton)
  }
  return (
    <Section title={'Example'} id={'examples'} className={'demo'}>
      {/* prettier-ignore */}
      <Tabs 
            // ButtonsContainer="div"
            button={
            <>
            <TabButton 
              isSelected={selectedTopic === "components"} 
              onClick={() => {handleSelect('components')}}
            >Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"}  onClick={() => {handleSelect('jsx')}}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"}  onClick={() => {handleSelect('props')}}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"}  onClick={() => {handleSelect('state')}}>State</TabButton>
            </>
          }>
            {tabContent}
          </Tabs>
    </Section>
  )
}

export default Examples
