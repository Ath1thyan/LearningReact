import { useState } from 'react';
function List() {

    const [list, setList] = useState([]);

    const [count, setCount] = useState(1)

    function addItem() {
        const itemName = 'Item' + count;
        setList((previousState)=>{return [...previousState, itemName]})
        setCount((pre) => {return pre+1})
    }

    console.log("Current list State : ", list);

    return <>
        <h1>List</h1>
        <button onClick={addItem} >Add item</button>
        <ul>{
            list.map((el, i) => <li key={i}>{el}</li> )
        }
            
        </ul>
    </>
}

export default List;