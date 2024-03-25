import { useState } from "react";

const Student = () => {
    const m1 = 76;
    const m2 = 82;
    const m3 = 79;
    const [state, setState] = useState();

    function handleClick(){
        setState(m1+m2+m3)
    }
    
    return <>
        <p>Student id: 1</p>
        <p>Student Name: Arun</p>
        <p>Mark 1: {m1}</p>
        <p>Mark 2: {m2}</p>
        <p>Mark 3: {m3}</p>
        <p>Total Marks: {state}</p>
        <button onClick={handleClick}>Total</button>
    </>
}

export default Student;