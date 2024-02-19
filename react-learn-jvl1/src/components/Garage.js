import Car from './Car.js';
import Apple from './Fruit';

function Garage(){
    // const brand = 'Ferrari';
    // const color = 'Black';

    const carInfo = { brand : "Ferrari", color : "Black" };
    return (
      <>
        <h1>Who lives inside my  garage?</h1>
        {/* <Car carBrand = {brand} carColor = {color} /> */}
        <Car carInfo = {carInfo} />
        <Apple/>
      </>
    )
  }

export default Garage;