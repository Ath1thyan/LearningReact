import ChildComponents from './components/ChildComponents'
import LearnComponents from './components/LearnComponents'
import ArraySamplr from "./components/ArraySamplr"
import OneSample from "./components/OneOfSample"
import MultiType from "./components/MultiType"
import FunctionSample from "./components/FunctionSample"

function App() {

  const handleClick = () => {
    alert("Button Clicked");
  }

  const arrItems = [
    { id: 1, name: "item-1" },
    { id: 2, name: "item-2" },
    { id: 3, name: "item-3" }
  ]

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

      <ArraySamplr items={arrItems}/>

      <OneSample color="green" />

      <MultiType value="hello" />
      <MultiType value={123} />
      <MultiType value={true} />

      <div>
        <h2>Parent Component</h2>
        <FunctionSample handleClick={handleClick} />
      </div>
      
    </>
  )
}

export default App
