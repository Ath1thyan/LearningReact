import { useReducer, useState } from 'react';
import './App.css';
import Reducer from './utils/Reducer-conf';
import {context} from './utils/Context';
import Child from './Child';


function App() {

  let [person, setPerson] = useState( { name: "Athi", position: "CEO"})

  let [state, dispatch] = useReducer(Reducer, { name : "Athi", Position : "CEO", email : "ceo@sudo.com"})

  return (
    <context.Provider value = {state}>
    <div className="App">
    <h1>Name : {state.name}</h1>
    <h2>Position : {state.Position}</h2>
    <h3>Email : {state.email}</h3>

    <button onClick={() => dispatch({ change: 'update_name', name: 'Athithyan' })}>Set Name</button>
    <button onClick={() => dispatch({ change: 'update_position', position: 'CTO' })}>Set Position</button>
    <button onClick={() => dispatch({ change: 'update_email', email : "change@sudo.com" })}>Set Email</button>


    <h1>Name : {person.name}</h1>
    <h2>Position : {person.Position}</h2>
    {/* <h3>Email : {state.email}</h3> */}

    <button onClick={() => {
      setPerson({ name : "someName", position: person.position})
    }} >change name</button>

    {/* <button onClick={() => dispatch({ change: 'update_name', name: 'Athithyan' })}>Set Name</button> */}
    {/* <button onClick={() => dispatch({ change: 'update_position', position: 'CTO' })}>Set Position</button> */}
    {/* <button onClick={() => dispatch({ change: 'update_email', email : "change@sudo.com" })}>Set Email</button> */}
    <Child/>
    </div>
    </context.Provider>
  );
}

export default App;
