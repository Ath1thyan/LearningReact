import { useState } from "react";

function Car () {
    const [car, setCar] = useState(
        {
            make: "Ford",
            model: "Mustang",
            year: 2021,
            color: "Red"
        }
    );

    const updateColor = () => {
        setCar (previousState => {
            return { ...previousState,  color: "Blue"};
        });
    }
    return (
        <>
          <h1>My {car.make}</h1>
          <p>
            It is a {car.color} {car.model} from {car.year}.
          </p>
          <button
            type="button"
            onClick={updateColor}
          >Blue</button>
        </>
      )
}

export function Volvo () {
    const [variant, setVariant] = useState(
        {
            model : "XC60",
            color : "black"
        }
    );

    const updateVariant = () => {
        setVariant (preStat => {
            return { ...preStat, model : "S90"};
        });
    }

    return (
        <>
            <h1>
                Volvo
            </h1>
            <p>{variant.model}, {variant.color}</p>

            <button onClick={updateVariant}>
                volvo variant
            </button>
        </>
    )
}

export default Car;