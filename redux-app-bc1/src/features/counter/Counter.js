import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementBy } from './counterSlice';

const Counter = () => {

    const count = useSelector( (state) => state.counter.count )
    const dispatch = useDispatch()

    const [incby, setIncby] = useState(0);

    const addVal = Number(incby) || 0;

    const resetAll = () => {
        setIncby(0);
        dispatch(reset());
    }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={ () => dispatch(increment()) } >+</button>
        <button onClick={ () => dispatch(decrement()) } >-</button>
        
      </div>
      <input type="text" value={incby} onChange={ (e) => setIncby(e.target.value) } />
      <button onClick={ () => dispatch(incrementBy(addVal)) } >Add Value</button>
      <button onClick={ resetAll } >Reset</button>
    </section>
  )
}

export default Counter
