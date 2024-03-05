import {useSelector, useDispatch} from 'react-redux';
import './App.css';

function App() {

  const increment = () => {
    dispatch({type : 'inc'})
  }
  const decrement = () => {
    dispatch( { type : 'dec' } )
  }
  const reset = () => {
    dispatch( { type : 'reset' } )
  }
  const addBy = () => {
    dispatch( { type : 'addby', somePayload : 10 } )
  }

  const counter = useSelector( (state) => state.counter );
  const dispatch = useDispatch();

  return (
    <div >
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment} >Increment</button>
      <button onClick={decrement} >Decrement</button>
      <button onClick={reset} >Reset</button>
      <button onClick={addBy} >Add 10</button>
    </div>
  );
}

export default App;
