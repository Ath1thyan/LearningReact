// import ChildComponents from './components/ChildComponents'
// import LearnComponents from './components/LearnComponents'

import ArraySamplr from "./components/ArraySamplr"

function App() {

  const arrItems = [
    { id: 1, name: "item-1" },
    { id: 2, name: "item-2" },
    { id: 3, name: "item-3" }
  ]

  return (
    <>
      {/* <LearnComponents name="Athi" age={23} gender={true} />
      <LearnComponents name="Megha" age={23} gender={false} />
      <LearnComponents name="Subham" age={23} gender={true} />

      <ChildComponents>
        <p>fffraeffrfdserfsrfsf</p>
        <p>fffraeffrfdserfsrfsf</p>
        <p>fffraeffrfdserfsrfsf</p>
      </ChildComponents> */}

      <ArraySamplr items={arrItems}/>
    </>
  )
}

export default App
