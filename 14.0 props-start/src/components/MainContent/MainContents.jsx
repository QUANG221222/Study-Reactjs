import Section from './Section'
import MainContent from './MainContent'
import { myData } from '../../../data.js'

function MainContents() {
  return (
    <Section title={'Khái niệm chính trong React'} id={'core-concepts'}>
      <ul>
        {/* <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} /> */}
        {myData.map((item) => {
          return <MainContent key={item.title} {...item} />
        })}
      </ul>
    </Section>
  )
}

export default MainContents
