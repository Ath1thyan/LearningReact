import { useState } from 'react';

function Scooty() {

    const [scooty, setScooty] = useState(
        {
            color: "Red",
            brand: "Honda",
            model: "Activa",
            year: "2020"
        }
    );

    function updateColor(){
        // setScooty({color : "blue"})
        // setScooty((previousState) => {
        //     return {
        //         ...previousState,
        //          color: "blue"
        //     }
        // })
        setScooty(previousState => {
            return {
                ...previousState,
                 model: "splender+"
            }
        })
    }

    console.log("Current State : ", scooty);

    return <>
        <h1>My scooty</h1>
        <p>Color : {scooty.color}</p>
        <p>Brand : {scooty.brand}</p>
        <p>Model : {scooty.model}</p>
        <p>Year : {scooty.year}</p>

        {/* <button onClick={() => {setScooty({color:"Blue", brand:"ymaha", model:"FZ5", year:"2021"})}} >change</button> */}
        <button onClick={updateColor}>change</button>
    </>
}

export default Scooty;