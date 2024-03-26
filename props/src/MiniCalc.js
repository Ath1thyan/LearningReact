import React, {useState, useEffect} from "react";

const MiniCalc = () => {
    const [num1, setnum1] = useState();
    const [num2, setnum2] = useState();
    const [sum, setsum] = useState(0);
    const [diff, setdiff] = useState(0);
    const [prd, setprd] = useState(0);
    const [qt, setqt] = useState(0);
    const [count, steCount] = useState(0);

    function addNumbers(){
        // setnum1(Number(document.getElementById("num1").value));
        // setnum2(Number(document.getElementById("num2").value));
        setsum(num1 + num2); 
        // document.getElementById("sumResult").innerHTML= `Sum is ${sum}`;
    }
    function subtractNumbers(){
        // setnum1(Number(document.getElementById("num1").value));
        // setnum2(Number(document.getElementById("num2").value));
        setdiff(num1 - num2); 
        // document.getElementById("subResult").innerHTML= `Diff is ${diff}`;
    }
    function multiplyNumbers(){
        // setnum1(Number(document.getElementById("num1").value));
        // setnum2(Number(document.getElementById("num2").value));
        setprd(num1 * num2); 
        // document.getElementById("mulResult").innerHTML= `Multiply is ${prd}`;
    }
    function divideNumbers(){
        // setnum1(Number(document.getElementById("num1").value));
        // setnum2(Number(document.getElementById("num2").value));
        setqt(num1 / num2); 
        // document.getElementById("divResult").innerHTML= `Division is ${qt}`;
    }

    return(
        <div>
            <h1>Mini Calculator</h1>
            <h2>Enter two numbers</h2>
            <input type="number" id="num1" value={num1}
        onChange={(e) => setnum1(+e.target.value)}/> <br/><br/>
            <input type="number" id="num2" value={num2}
        onChange={(e) => setnum2(+e.target.value)}/>  
            
            <button onClick={addNumbers} > Add </button>
            <button onClick={subtractNumbers} > Subtract </button> 
            <button onClick={multiplyNumbers} > Multiply </button>  
            <button onClick={divideNumbers} > Divide </button>  
            <h2>Count</h2>
            <button onClick={ ()=> steCount(count+1) }>count</button>

            <h2>Result</h2>
            <p id="sumResult">Addition: {sum}</p>
            <p id="subResult">Subtraction: {diff}</p>
            <p id="mulResult">Multiplication: {prd}</p>
            <p id="divResult">Division: {qt}</p>
            <h2>Count</h2>
            <p>{count}</p>
        </div>
    )

}

export default MiniCalc;