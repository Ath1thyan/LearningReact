import { useEffect, useState } from "react";

function Timer() {
    useEffect( () => {
        console.log("screen rendered")
    }, []);
    const [count, setCount] = useState(0);

    function updateCount() {
        setCount((preCount) => {return preCount + 1})
    }

    return <>
        <h1>I have rendered {count} times!</h1>
        <button onClick = {updateCount} >Increase Count</button>
    </>
}

export default Timer;