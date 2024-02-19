import { useState } from "react";

function FavCol() {
    // let color = 'Blue';
    const [color, changeColor] = useState('Blue')

    return (
        <>
            <h1>My favourite color is {color}</h1>
            <button onClick={() => {changeColor('Red')}} >Change Color</button>
        </>
    )
}

export default FavCol;