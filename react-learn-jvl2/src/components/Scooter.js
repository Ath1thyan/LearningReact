import { useState } from 'react';

function Scooter() {

    const [color, setColor] = useState("Red");
    const [brand, setBrand] = useState("Honda");
    const [model, setModel] = useState("Activa");
    const [year, setYear] = useState("2020");

    return <>
        <h1>My scooter</h1>
        <p>Color : {color}</p>
        <p>Brand : {brand}</p>
        <p>Model : {model}</p>
        <p>Year : {year}</p>

        <button onClick={() => {setBrand("Yamaha"); setColor("Blue"); setModel("Glanza"); setYear("2023")}} >change</button>
    </>
}

export default Scooter;