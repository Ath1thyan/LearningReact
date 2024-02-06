import React, { useState } from 'react';
import './App.css';

function App() {
  let [name, setName] = useState("init value");
  let name1 = "INIT value"
  return (
    <div className="App">
      <button onClick={() => {setName('React'); name1 = "JS"}}>Set Name to "React"</button>
      <p>{name}</p>
      <p>{name1}</p>
    </div>
  );
}

export default App;
