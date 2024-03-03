import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const renderCount = useRef(0);
  const preName = useRef();

  useEffect( () => {
    renderCount.current += 1;
  })

  useEffect( () => {
    preName.current = name;
  }, [name])

  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>The word is {name}</p>
      <div>rensered {renderCount.current} times</div>
      <div>previous name is '{preName.current}'</div>
    </div>
  );
}

export default App;
