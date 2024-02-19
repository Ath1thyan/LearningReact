import { useEffect, useState } from "react";

function Timer() {
    const [count, setCount] = useState(0);
    useEffect( () => {
        console.log("screen rendered")
        checkCount()
    }, [count]);

    function checkCount() {
        if (count > 10){
            setCount(1)
        }
    }

    function updateCount() {
        setCount((preCount) => {return preCount + 1})
    }

    return <>
        <h1>I have rendered {count} times!</h1>
        <button onClick = {updateCount} >Increase Count</button>
    </>
}

export default Timer;