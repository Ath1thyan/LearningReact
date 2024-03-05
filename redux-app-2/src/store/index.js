import {createStore} from '@reduxjs/toolkit';



const reducerFunction = (statePara = {counter : 0}, actionPara) => {

    if (actionPara.type === 'inc'){
        return {counter : statePara.counter+1};
    }
    else if (actionPara.type === 'dec'){
        return {counter : statePara.counter-1};
    }
    else if (actionPara.type ==='reset'){
        return {counter : 0};
    }
    else if (actionPara.type === 'addby'){
        return { counter : statePara.counter + actionPara.somePayload }
    }

    return statePara;
}

const store = createStore(reducerFunction);
export default store;