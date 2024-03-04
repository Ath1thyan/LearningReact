import './App.css';
import { useRef, useLayoutEffect, useEffect } from 'react';

function App() {

  const inputRef = useRef(null);
  
  useLayoutEffect( () => {
    console.log(inputRef.current.value);
  })

  useEffect( () => {
    inputRef.current.value = "Hello";
  },[]);

  return (
    <div className="App">
      <input ref={inputRef} value={"Athi"} />
    </div>
  );
}

export default App;
