import './App.css';
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.method) {
    case 'inc':
      return { count: state.count +1 }

    case 'dec':
      return { count: state.count -1 }

    default :
      return state.count;
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })


  function decCount(){
    dispatch( { method: 'dec'})
  }

  const incCount = () => {
    dispatch( { method : 'inc' } );
  }


  return (
    <div className="App">
      <button onClick={decCount} >-</button>
      <span>{state.count}</span>
      <button onClick={incCount} >+</button>
    </div>
  );
}

export default App;
