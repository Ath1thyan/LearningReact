import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import { actions } from './store/index';

function App() {

  const increment = () => {
    dispatch(actions.increment)
  }
  const decrement = () => {
    dispatch(actions.decrement)
  }
  const reset = () => {
    dispatch(actions.reset)
  }
  const addBy = () => {
    dispatch(actions.addBy(10))
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
