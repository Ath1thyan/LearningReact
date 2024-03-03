// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(5);

  function decCount(){
    setCount(count-1);
  }

  // const incCount = () => {
  //   setCount(count+1);
  // }

  const incCount = () => {
    setCount((previousVal) => previousVal + 1);
    setCount(previousVal => previousVal + 1);
  }


  return (
    <div className="App">
      <button onClick={decCount} >-</button>
      <span>{count}</span>
      <button onClick={incCount} >+</button>
    </div>
  );
}

export default App;
