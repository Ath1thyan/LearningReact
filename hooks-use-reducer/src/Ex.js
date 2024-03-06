import {useReducer} from 'react';

function reducer(state, action) {

    switch (action.method) {
        case 'inc':
            return { ...state, count: state.count +1 }

        case 'dec':
            return { ...state, count: state.count -1 }

        case 'str':
            return { count: state.count, count2: state.count2 = "aravinth" }

        default :
            return state.count;
    }

    // if (action.method === "inc"){
    //     return { count: state.count + 1 };
    // }
    // if (action.method === "dec"){
    //     return { count: state.count - 1 };
    // }
    // if (action.method === "str"){
    //     return { count2: state.count2 = "aravinth" };
    // }
}

function Ex() {

    const [status, dispatches] = useReducer(reducer, { count : 0, count2 : "ara" });

    const increment = () => {
        dispatches( {method : "inc"} );
    }

    const decrement =()=> {
        dispatches( {method : "dec"} );
    }

    const changeVal = () => {
        dispatches( {method : "str"} );
    }

    return <div style={{alignItems:"center", textAlign:"center", paddingTop:"50px", fontSize:"4rem"}}>
        <button style={{fontSize:"4rem"}} onClick={increment} >add</button>
        <h3>{status.count}</h3>
        <h3>{status.count2}</h3>
        <button style={{fontSize:"4rem"}} onClick={decrement} >sub</button>
        <button style={{fontSize:"4rem"}} onClick={changeVal} >val</button>
    </div>
}

export default Ex;