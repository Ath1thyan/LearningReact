import Car from './Car.js';
import Apple from './Fruit';

function Garage(){
    const brand = 'Ferrari';
    const color = 'Black';
    return (
      <>
        <h1>Who lives inside my  garage?</h1>
        <Car carBrand = {brand} carColor = {color} />
        <Apple/>
      </>
    )
  }

export default Garage;