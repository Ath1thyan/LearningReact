import './App.css'
import { Greet } from './components/Greet'
import Message from './components/Message'
import { ClickHandler } from './components/ClickHandler'
import { ParentComponent } from "./components/ParentComponent"

function App() {
  return (
    <div className="App">
    <Greet userName = 'Athi' position = 'Founder & CEO'>
      <p>This is children props</p>
    </Greet>
    <Greet userName = 'john' position = 'CTO'>
      <button>submit</button>
    </Greet>
    <Greet userName = 'Diana' position = 'Legal Advisor'/>
    <Message/>
    <ClickHandler/> 
    <ParentComponent/>
    </div>
  );
}

export default App;
