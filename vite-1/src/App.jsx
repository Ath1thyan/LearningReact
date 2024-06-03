import ChildComponents from './components/ChildComponents'
import LearnComponents from './components/LearnComponents'

function App() {

  return (
    <>
      <LearnComponents name="Athi" age={23} gender={true} />
      <LearnComponents name="Megha" age={23} gender={false} />
      <LearnComponents name="Subham" age={23} gender={true} />

      <ChildComponents>
        <p>fffraeffrfdserfsrfsf</p>
        <p>fffraeffrfdserfsrfsf</p>
        <p>fffraeffrfdserfsrfsf</p>
      </ChildComponents>
    </>
  )
}

export default App
